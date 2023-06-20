import { getToday } from "./commons/utils.mjs";
import nodemailer from "nodemailer";
import "dotenv/config";

export const checkValidationEmail = (email) => {
  if (email.includes("@") === false || email === undefined) {
    console.log("이메일을 확인해주세요");
    return false;
  } else {
    return true;
  }
};

export const getWelcomeTemplate = ({ name }) => {
  const today = getToday();
  return `
  <html>
  <body>
  <table style="width: 100%">
      <tbody>
        <tr>
          <td style="text-align: center; border-bottom: 1px solid black">
            <h1>${name}님 가입을 환영합니다!!!</h1>
          </td>
        </tr>
        <tr>
          <td style="text-align: center">
            <div style="text-align: center">
              <p>이름: ${name}</p>
              <p>가입일: ${today}</p>
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

    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER, // 2차 인증 세팅한 메일계졍
      pass: process.env.EMAIL_PASS, // 2차 비밀번호로 발급된것(인증암호? 생성한것 입력)
    },
  });
  const result = await transporter.sendMail({
    // await가 없어도 전송은 되지만, 아래 콘솔은 찍히지 않음.
    to: email, // 전송받을 이메일 주소
    from: process.env.EMAIL_SENDER, // 인증메일을 전송할 메일(auth의 user와 동일. 다른것을 적어도 user이메일로 바뀜)
    subject: "[테스트 인증메일] 회원가입을 축하합니다!!", // 메일 제목
    html: myTemplate,
  });

  // console.log(`${email}에 ${myTemplate}을 전송하였습니다`);
  // 메일로 전송하는 것들: 메일침프, 노드메일러, NHN클라우드
  // node.js바탕으로 이메일 보내는 것중 가장 많이 사용되는
  // 노드메일러 사용!
  console.log(result);
};
