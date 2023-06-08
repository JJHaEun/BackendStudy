import {
  checkValidationEmail,
  getWelcomeTemplate,
  sendTemplateEmail,
} from "./email.js";
import "dotenv/config";
// const name = "유리";
// const createdAt = "2023-12-25";

// const SendEmail = (email) => {
//   const isValid = checkValidationEmail(email);
//   if (isValid) {
//     getWelcomeTemplate({ name, createdAt });
//   }
// };
// SendEmail("123@123.com");

//------------------------------------------------
function createUser(user) {
  // 1. 이메일이 정상인지 확인하기(1. 존재여부, 2."@"포함여부)
  const isValid = checkValidationEmail(user.email);
  if (isValid) {
    // 2. 가입환영 템플릿 만들기
    const myTemplate = getWelcomeTemplate(user);

    // 3. 이메일에 가입환영 템플릿 전송하기
    sendTemplateEmail(user.email, myTemplate);
  }
}

const User = {
  name: "짱구",
  age: 6,
  school: "떡잎초등학교",
  email: "123@123.com",
};

createUser(User);
