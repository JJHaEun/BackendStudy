import nodemailer from "nodemailer";
import "dotenv/config";
import { getToday } from "../backend/commons/utils.mjs";
export const checkValidationEmail = (email) => {
  if (email.includes("@") === false || email === undefined) {
    console.log("이메일을 확인해주세요");
    return false;
  } else {
    return true;
  }
};

export const getWelcomeTemplate = ({ name, phone, prefer }) => {
  const today = getToday();
  return `
  <html>
  <body>
  <table style="width: 100%">
      <tbody>
        <tr>
          <td style="text-align: left; border-bottom: 1px solid black">
            <h1>${name}님 가입을 환영합니다^^</h1>
          </td>
        </tr>
        <tr>
          <td style="text-align: left;">
            <div>
              <div>이름: ${name}</div>
              <div style="color: purple;">전화번호: ${phone}</div>
              <div style="color: purple;">좋아하는 사이트: <span style="text-decoration: underline; -webkit-text-decoration-color: blue; text-decoration-color: blue;">${prefer}</span></div>
              <div style="color: red;">가입일: ${today}</div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    </body>
    </html>
  
  `;
}; // 함수를 실행하는 자리에 return 부분이 들어가게됨.

export const sendTemplateEmail = async (email, myTemplate) => {
  // 여기서 .env 파일이 안읽히고 있음. => dotenv라는 라이브러리 설치 필요
  const transporter = nodemailer.createTransport({
    // 초기설정(전송에 대한 초기설정)

    service: "gmail", //Gmail이라고 적어도 작동함
    auth: {
      user: process.env.EMAIL_USER, // 2차 인증 세팅한 메일계졍
      pass: process.env.EMAIL_PASS, // 2차 비밀번호로 발급된것(인증암호? 생성한것 입력)
    },
  });
  const result = await transporter.sendMail({
    to: email, // 전송받을 이메일 주소
    from: process.env.EMAIL_SENDER, // 인증메일을 전송할 메일(auth의 user와 동일. 다른것을 적어도 user이메일로 바뀜)
    subject: "[LOCATION-INVITATION] 회원가입을 축하합니다!!", // 메일 제목
    html: myTemplate,
  });
};
