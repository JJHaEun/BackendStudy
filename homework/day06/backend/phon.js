import coolsms from "coolsms-node-sdk";

export const checkValidationPhone = (phoneNumber) => {
  if (phoneNumber.length !== 10 && phoneNumber.length !== 11) {
    console.log("번호를 제대로 입력해 주세요!!");
    return false;
  } else {
    return true;
  }
};

export const getToken = (tokenLength) => {
  if (tokenLength === undefined) {
    console.log("토큰 길이를 입력해주세요");
    return;
  } else if (tokenLength <= 0) {
    console.log("길이가 너무 작습니다");
    return;
  } else if (tokenLength > 10) {
    console.log("길이가 너무 커요!!");
    return;
  }
  const resultToken = String(
    Math.floor(Math.random() * 10 ** tokenLength)
  ).padStart(tokenLength, "0");

  return resultToken;
};

export const sendTokenToSMS = (phoneNumber, token) => {
  const SMS_KEY = process.env.SMS_KEY;
  const SMS_SECRET = process.env.SMS_SECRET;
  const SMS_SENDER_NUMBER = process.env.SMS_SENDER_NUMBER;

  const mysms = coolsms.default;
  const messageService = new mysms(SMS_KEY, SMS_SECRET);

  messageService.sendOne({
    to: phoneNumber,
    from: SMS_SENDER_NUMBER,
    text: `[LOCATION-INVITATION] 인증번호는 ${token}입니다`,
  });
  //   console.log(`${phoneNumber} 번호로 인증번호 ${token}을 전송합니다!!!`);
};
