import { getSocialNumber } from "./socialNum.js";

export const checkValidationEmail = (email) => {
  if (email === undefined || email.includes("@") === false) {
    console.log("이메일을 확인해주세요");
    return false;
  } else {
    return true;
  }
};

export const welComeTemplate = ({
  name,
  email,
  phone,
  socialNumber,
  favoriteSite,
}) => {
  return `
  <html>
    <body>
        <h1>${name}님 가입을 환영합니다</h1>
        <hr/>
        <div>이메일: ${email}
        <div>주민번호: ${getSocialNumber(socialNumber)}</div>
        <div>휴대폰 번호: ${phone}</div>
        <div>내가 좋아하는 사이트: ${favoriteSite}</div>
    </body>
  </html>
  `;
};

export const sendEmailTemplate = (template) => {
  console.log(`${template}`);
};
