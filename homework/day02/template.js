import { customRegistrationNumber } from "../day01/index.js";
import { InfoPersonNumberLength } from "../day01/resident-registration-number.js";
import {
  checkValidationEmail,
  sendEmailTemplate,
  welComeTemplate,
} from "./user.js";

const createUser = (user) => {
  // 이메일 검증과 주민번호 검증
  const isEmailValid = checkValidationEmail(user.email);
  const isValidSocialNumber = customRegistrationNumber(user.socialNumber);
  if (isEmailValid && isValidSocialNumber) {
    const result = welComeTemplate(user);

    sendEmailTemplate(result);
  }
};

const userInfo = {
  name: "짱구",
  email: "123@123.com",
  socialNumber: "210510-1010101",
  phone: "010-1234-1234",
  favoriteSite: "넵버",
};
createUser(userInfo);
