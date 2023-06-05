import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import cors from "cors";
import { options } from "./swagger/config.js";

const app = express();
const port = 3000;

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

app.get("/starbucks", (req, res) => {
  const resultCoffee = [
    { name: "아메리카노", kcal: 5 },
    { name: "카페라떼", kcal: 10 },
    { name: "콜드블루", kcal: 15 },
    { name: "카페모카", kcal: 50 },
    { name: "카페모카", kcal: 50 },
    { name: "카라멜라떼", kcal: 200 },
    { name: "바닐라라떼", kcal: 20 },
    { name: "에스프레소", kcal: 1 },
    { name: "디카페인", kcal: 5 },
    { name: "오트라떼", kcal: 300 },
  ];
  res.send(resultCoffee);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
