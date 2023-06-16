import axios from "axios";
import cheerio from "cheerio";

async function createBoardAPI(mydata) {
  // 1. 입력된 컨텐츠에서 http로 시작하는 글자 있는지 찾기
  const URL = mydata.contents.split(" ").filter((el) => el.includes("http"))[0];
  // 빈 공백으로 일단 쪼개보자.
  //split되어 하나의 배열에 각요소들이 들어가게되고, 그중 http가 든것을 뽑음(해당 조건에서 true면 걔만 필터링됨.). =>["https://daum.net!!"]
  // 안의 주소만 뽑기 위해 0번째를 뽑음 => "https://daum.net!!"

  // 2. 있다면 찾은 주소로 axios.get 요청하여 html코드 받아오기 ==> 스크래핑
  const result = await axios.get(URL);
  //   console.log(result); // 전체 결과
  // console.log(result.data); // html코드 // 여기서 데이터를 도구를 사용해 뽑아보기(cheerio)

  // 3. 스크래핑 결과에서 og(오픈그래프) 코드 골라내서 변수에 저장하기
  const $ = cheerio.load(result.data);

  // meta로 시작하는 태그들 => 반복문 돌림. .each라는 cheerio기능사용.
  // each 첫번째 인자로는 index즉, 몇번째 메타테그인지
  // 두번째에는 meta태그를 넣어줌(요소)
  let url, type, title, image, description;
  $("meta").each((index, el) => {
    if ($(el).attr("property")) {
      // el 즉 meta테그에 attr(속성)=> property가 있으면
      // attr property인 애들에서 og: 으로 되어있는것 : 으로 스플릿 하여 1번째꺼=>["og","title"]
      const key = $(el).attr("property").split(":")[1];
      // attr이 content인것 뽑기
      const value = $(el).attr("content");
      console.log("key:", key);
      console.log("value:", value);
      // 이 데이터 들은 서로 진짜 key와 value로 나온다
      switch (
        key //key가 여기 들어옴.(같은 이름이어야함!!)
      ) {
        case "url":
          url = value;
          break;
        case "type":
          type = value;
          break;
        case "title":
          title = value;
          break;
        case "image":
          image = value;
          break;
        case "description":
          description = value;
          break;
        default:
          break;
      }
    }
  });
}

const frontData = {
  title: "안녕@@!",
  contents:
    "여기 정말 좋은거 같아요!!! 한번 꼭 놀러와@@@ 여기가 어디냐면 https://daum.net !!",
};

createBoardAPI(frontData);
