import axios from "axios";

// 비동기 방식
function fetchPost() {
  // 게시물 요청하기
  const data = axios.get("https://koreanjson.com/posts/1");
  console.log(data); // Promise { <pending> }
}
fetchPost();

// 동기 방식

// const fetchPost2 = async () => { // 화살표 함수 방법
//   const data = await axios.get("https://koreanjson.com/post/1");
//   console.log(data);
// };
// fetchPost2();

async function fetchPost2() {
  const result = await axios.get("https://koreanjson.com/posts/1");
  console.log(result); // 실제 데이터 => 이중에 data에 내용이 들어있음.
  console.log(result.data); //
  //   {
  //     id: 1,
  //     title: '정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는 헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에 의하여 해산된다.',
  //     content: '모든 국민은 인간으로서의 존엄과 가치를 가지며, 행복을 추구할 권리를 가진다. 모든 국민은 종교의 자유를 가진다. 국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다. 모든 국민은 양심의 자유를 가진다. 누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을 받을 권리를 가진다.',
  //     createdAt: '2019-02-24T16:17:47.000Z',
  //     updatedAt: '2019-02-24T16:17:47.000Z',
  //     UserId: 1
  //   }
}
fetchPost2();
