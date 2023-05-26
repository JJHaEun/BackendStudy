import { getToday } from "../commons/utils.js";

export const checkValidationEmail = (email) => {
  if (email.includes("@") === false || email === undefined) {
    console.log("이메일을 확인해주세요");
    return false;
  } else {
    return true;
  }
};

export const getWelcomeTemplate = ({ name }) => {
  return `
          <html>
              <body>
                  <h1>${name}님 가입을 환영합니다!!!</h1>
                      <div>
                          <span>이름: ${name}</span>
                          <span>가입일: ${getToday()}</span>
                      </div> 
              </body>
          <html>
          `;
};

export const sendTemplateEmail = (email, myTemplate) => {
  console.log(`${email}에 ${myTemplate}을 전송하였습니다`);
};
