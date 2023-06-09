import express from "express";
import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import cors from "cors";
import { options } from "./swagger/config.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
// const swaggerSpec = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options))); // 이 순서대로 실행됨//만든 doc의 내용을 해석해주세요
// localhost:3000/api-docs 이렇게 들어가면 api주소를 볼 수 있음.
// 난 api!
app.get("/boards", (req, res) => {
  // 게시물 목록조회
  // 1. 데이터를 조회하는 로직 => DB에 접속하여 데이터 꺼내오기
  const result = [
    {
      number: 1,
      writer: "바트",
      title: "title...stupid...",
      contents: "what's the problem",
    },
    {
      number: 2,
      writer: "리사",
      title: "title...stupid...title..stupid Bart",
      contents: "what's the problem",
    },
    {
      number: 3,
      writer: "메기",
      title: "title...stupid...",
      contents: "what's the problem",
    },
  ];

  // 2. 꺼내온 결과 응답 주기
  res.send(result);
});

// ------------------------------------------------
// 게시물 등록하기 이 앞에있는 요청이 오면 뒤의 함수를 실행시켜주겠다 라는 의미.
// 여기 이 함수를 미들웨어함수라고 함.
app.post("/boards", (req, res) => {
  // 1. 데이터를 등록하는 로직 =>DB에 접속해 데이터 저장하기(프론트에서 입력한 데이터를 저장.)
  console.log(req.body);
  // req(요청),res(응답). 이들은 안애 header와 body가 있었다.
  // header에는 요약정보가 담긴다.
  // body는 실제 데이터들이 담기는 곳. 즉, 등록하는 것이니 요청에 실제 내용이 있을것.
  // req.body에 요청내용있음.(등록할 내용)

  // 2. 저장결과 응답주기
  res.send("게시물이 성공적으로 등록되었습니다.");
});
// listen이 없으면 실행되고 바로 종료됨.
// 얘가 있게되면 접속할 수 있게 종료되지 않음.

app.post("/tokens/phone", (req, res) => {
  const phoneNumber = req.body.phone;
  const isValid = checkValidationPhone(phoneNumber); // 입력받은 값이 들어가야함(req.body)
  if (isValid) {
    // return 결과에 따라 true라면 if문 안쪽의 내용을 실행. 즉,
    // 2. 핸드폰 토큰 6자리 만들기
    const token = getToken(6); // 여기에서 받은 token을 sendTokenToSNS에 넘김.
    // 3. 핸드폰번호에 토큰 전송하기
    sendTokenToSMS(phoneNumber, token);
    res.send("인증완료!!!");
  }
});
//--------------------------------------------------------
app.listen(port, () => {
  // 벡엔드 서버 프로그램!!
  //api 서버를 실행. 3000번 포트로 (listen => 접속을 기다림.)
  console.log(`Example app listening on port ${port}`);
}); // listen을 만나면 24시간 계속 대기상태(켜져있음)(컨트롤 c로 종료가능)=> 24시간동인 켜져 있으려면 포트번호 필요

// 3000번으로 24시간 기다리는 서버 프로그램을 실행시키게되면 한 컴퓨터내에 다른 프로그램은 3000번 포트를 사용해 실행시킬 수 없다.
