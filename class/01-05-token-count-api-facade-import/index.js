import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone";
// require("./phone")

// 이 함수가 메인함수. 여기서 checkValidationPhone이라는 함수를 실행. => 검증
// 파샤드 페턴 사용
const createTokenOfPhone = (phoneNumber, length) => {
  const isValid = checkValidationPhone(phoneNumber);
  if (isValid === true) {
    // return 결과에 따라 true라면 if문 안쪽의 내용을 실행. 즉,
    // 2. 핸드폰 토큰 6자리 만들기
    const token = getToken(length); // 여기에서 받은 token을 sendTokenToSNS에 넘김.
    // 3. 핸드폰번호에 토큰 전송하기
    sendTokenToSMS(phoneNumber, token);
  }
};

createTokenOfPhone("01012345678");
