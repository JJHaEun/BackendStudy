import { checkValidationEmail, getWelcomeTemplate } from "./email.js";

const name = "유리";
const createdAt = "2023-12-25";

const SendEmail = (email) => {
  const isValid = checkValidationEmail(email);
  if (isValid) {
    getWelcomeTemplate({ name, createdAt });
  }
};
SendEmail("123@123.com");
