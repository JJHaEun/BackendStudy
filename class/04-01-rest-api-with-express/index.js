import express from "express";

const app = express();
const port = 3000;

// 난 api!
app.get("/hello", (req, res) => {
  //get방식 api추가(등록)
  // get요청을하면
  res.send("Hello World! get요청에 성공하셨네요!!!"); // 이것을 받을 수 있음
});

// listen이 없으면 실행되고 바로 종료됨.
// 얘가 있게되면 접속할 수 있게 종료되지 않음.
app.listen(port, () => {
  // 벡엔드 서버 프로그램!!
  //api 서버를 실행. 3000번 포트로 (listen => 접속을 기다림.)
  console.log(`Example app listening on port ${port}`);
}); // listen을 만나면 24시간 계속 대기상태(켜져있음)(컨트롤 c로 종료가능)=> 24시간동인 켜져 있으려면 포트번호 필요

// 3000번으로 24시간 기다리는 서버 프로그램을 실행시키게되면 한 컴퓨터내에 다른 프로그램은 3000번 포트를 사용해 실행시킬 수 없다.
