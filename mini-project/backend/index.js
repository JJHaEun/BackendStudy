import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import { checkValidationPhone, getToken, sendTokenToSMS } from "./phon.js";
import {
  checkValidationEmail,
  getWelcomeTemplate,
  sendTemplateEmail,
} from "./email.js";
import { User } from "./models/user.model.js";
import { maskPersonalNumber } from "./personal.js";
import { TokenInfo } from "./models/token.model.js";
import { preferSite } from "./cheerio.js";

const app = express();
const port = 3000;
//                            도커의 mongo컴퓨터 이름과 서버주소(즉, 몽고DB를 실행하는 컴퓨터와 서버주소)/그안의  DB이름
//mongoose.connect("mongodb://database-mongo:27017/myproject-docker");
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://mini-mongoDB/miniDockerPJ");

app.post("/users", async (req, res) => {
  // 회원가입하기
  const user = req.body;
  const isValid = checkValidationEmail(user.email);
  if (isValid) {
    // 2. 가입환영 템플릿 만들기
    const myTemplate = getWelcomeTemplate(user);

    // 3. 이메일에 가입환영 템플릿 전송하기
    sendTemplateEmail(user.email, myTemplate);
    // 주민번호 뒷자리 가리기
    const personal = maskPersonalNumber(user.personal);

    const tokens = await TokenInfo.find({ phone: user.phone });
    if (!tokens || tokens.isAuth === false) {
      return res
        .status(422)
        .json({ error: "에러!! 핸드폰 번호가 인증되지 않았습니다" });
    }
    // true라면 내가 좋아하는 사이트 cheerio사용해서 스크래핑
    const preferCheerio = await preferSite(user.prefer);
    console.log(preferCheerio);
    const userInfo = new User({
      name: user.name,
      email: user.email,
      personal: personal,
      prefer: user.prefer,
      pwd: user.pwd,
      phone: user.phone,
      og: preferCheerio,
    });
    await userInfo.save();
    res.send(userInfo._id);
  }
});

app.get("/users", async (req, res) => {
  const result = await User.find();

  res.send(result);
});

app.patch("/tokens/phone", async (req, res) => {
  const phoneNum = req.body.phone;
  const token = req.body.token;
  // MongoDB에서 입력한 phone과 일치하는 문서를 찾음
  const tokenInfo = await TokenInfo.findOne({ phone: phoneNum });

  if (!tokenInfo || tokenInfo.token !== token) {
    // 저장된 토큰과 입력받은 토큰이 일치하지 않는 경우
    res.send("false");
    return;
  }

  // 일치하는 문서가 있고, 토큰도 일치하는 경우
  tokenInfo.isAuth = true;
  await tokenInfo.save();
  res.send("true");
});

app.post("/tokens/phone", async (req, res) => {
  const phoneNumber = req.body.phone;
  const isValid = checkValidationPhone(phoneNumber);
  if (isValid) {
    const token = getToken(6);

    sendTokenToSMS(phoneNumber, token);
    // phoneNumber로 이미 저장된 문서를 찾음
    const existingTokenInfo = await TokenInfo.findOne({ phone: phoneNumber });

    // 이미 저장된 문서가 있는 경우에는 token 값만 업데이트하고 저장
    if (existingTokenInfo) {
      existingTokenInfo.token = token;
      await existingTokenInfo.save();
    } else {
      // 저장된 문서가 없는 경우에는 새로운 TokenInfo 문서를 생성하여 저장
      const tokenInfo = new TokenInfo({
        token,
        phone: phoneNumber,
        isAuth: false,
      });
      await tokenInfo.save();
    }
    const phoneNum = phoneNumber.replace(
      /^(\d{2,3})(\d{3,4})(\d{4})$/,
      `$1-$2-$3`
    );
    res.send(`${phoneNum}으로 인증 문자가 전송되었습니다.`);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
