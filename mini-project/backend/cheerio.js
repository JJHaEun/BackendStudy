import axios from "axios";
import cheerio from "cheerio";

export const preferSite = async (prefer) => {
  // 1. 입력된 컨텐츠에서 http로 시작하는 글자 있는지 찾기
  const URL = prefer;
  const result = await axios.get(URL);

  // 3. 스크래핑 결과에서 og(오픈그래프) 코드 골라내서 변수에 저장하기
  const $ = cheerio.load(result.data);

  // meta로 시작하는 태그들 => 반복문 돌림. .each라는 cheerio기능사용.
  // each 첫번째 인자로는 index즉, 몇번째 메타테그인지
  // 두번째에는 meta태그를 넣어줌(요소)
  let metaData = {}; // 키-값을 저장할 객체

  $("meta").each((_, el) => {
    if ($(el).attr("property")) {
      const property = $(el).attr("property");
      if (property.startsWith("og:")) {
        const key = property.split(":")[1]; // 키 추출
        if (key === "image" || key === "title" || key === "description") {
          const value = $(el).attr("content"); // 값 추출
          metaData[key] = value; // 객체에 키-값 저장
        }
      }
    }
  });
  console.log(metaData);
  return metaData; // 키-값 객체 반환
};
