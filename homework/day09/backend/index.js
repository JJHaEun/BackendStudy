import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import cors from "cors";
import { options } from "./swagger/config.js";
import { checkValidationPhone, getToken, sendTokenToSMS } from "./phon.js";
import {
  checkValidationEmail,
  getWelcomeTemplate,
  sendTemplateEmail,
} from "./email.js";
import { Coffee } from "./models/coffee.model.js";
import mongoose from "mongoose";

const app = express();
const port = 3004;

app.use(express.json());
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
app.get("/users", (req, res) => {
  const result = [
    {
      email: "bart@gmailBart.com",
      name: "Bart",
      phone: "010-1234-5678",
      personal: "20110-2222222",
      prefer: "https://google.com",
    },
    {
      email: "fack@gmailLisa.com",
      name: "리사",
      phone: "010-1234-5678",
      personal: "200123-2222222",
      prefer: "https://lisa.com",
    },
    {
      email: "lisa@lisa.com",
      name: "리사메기",
      phone: "010-1234-5678",
      personal: "200123-2222222",
      prefer: "https://lisaandmeggie.com",
    },
    {
      email: "maggie@meggieLovemommy.com",
      name: "메기",
      phone: "010-1234-5025",
      personal: "200123-2222222",
      prefer: "https://meggie.com",
    },
    {
      email: "hommer@simsonhommer.com",
      name: "호머",
      phone: "010-1234-0000",
      personal: "200123-2222222",
      prefer: "https://hommerfather.com",
    },
  ];
  res.send(result);
});

app.get("/starbucks", async (req, res) => {
  const resultCoffee = await Coffee.find();
  // const resultCoffee = [
  //   { name: "아메리카노", kcal: 5 },
  //   { name: "카페라떼", kcal: 10 },
  //   { name: "콜드블루", kcal: 15 },
  //   { name: "카페모카", kcal: 50 },
  //   { name: "카페모카", kcal: 50 },
  //   { name: "카라멜라떼", kcal: 200 },
  //   { name: "바닐라라떼", kcal: 20 },
  //   { name: "에스프레소", kcal: 1 },
  //   { name: "디카페인", kcal: 5 },
  //   { name: "오트라떼", kcal: 300 },
  // ];
  res.send(resultCoffee);
});

app.post("/starbucks", async (req, res) => {
  const coffee = new Coffee({
    name: req.body.name,
    kcal: req.body.kcal,
    price: req.body.price,
  });

  await coffee.save();

  res.send("커피메뉴가 성공적으로 등록되었습니다");
});

app.post("/token/phone", (req, res) => {
  const phoneNumber = req.body.phone;
  const isValid = checkValidationPhone(phoneNumber);
  if (isValid) {
    const token = getToken(6);

    sendTokenToSMS(phoneNumber, token);

    res.send("인증 번호 전송 완료!");
  }
});

app.post("/users", (req, res) => {
  const user = req.body.user;
  const isValid = checkValidationEmail(user.email);
  if (isValid) {
    // 2. 가입환영 템플릿 만들기
    const myTemplate = getWelcomeTemplate(user);

    // 3. 이메일에 가입환영 템플릿 전송하기
    sendTemplateEmail(user.email, myTemplate);
    res.send("가입완료!!!");
  }
});

// 이렇게 express도커와 몽고DB 도커를 연결!!! 즉, node.js와 mongoDB를 연결!!
mongoose.connect("mongodb://homework-mongo/homewordDocker");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
