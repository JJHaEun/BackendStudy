import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import { TokenInfo } from "./token.model.js";
import { checkValidationPhone, getToken, sendTokenToSMS } from "./phon.js";

const app = express();
const port = 3000;
mongoose.connect("mongodb//mini-mongoDB/miniDockerPJ");
app.use(express.json());
app.use(cors());

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
