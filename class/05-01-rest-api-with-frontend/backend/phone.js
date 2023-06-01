export const checkValidationPhone = (phoneNumber) => {
  if (phoneNumber.length !== 10 && phoneNumber.length !== 11) {
    console.log("error, 번호를 제대로 입력해주세요");
    return false;
  } else {
    return true;
  }
};

export const getToken = (length) => {
  // 넘겨준 인자를 매개변수(파라미터 = param)로 받음.
  // 2. 핸드폰 토큰 6자리 만들기
  // const length = 6;
  if (length === undefined) {
    console.log("개수를 입력해주세요");
    return;
  } else if (length <= 0) {
    console.log("너무 적습니다");
    return;
  } else if (length > 10) {
    console.log("개수가 너무 커요ㅜㅜ");
    return;
  } // return을 사용하여 조건에 맞을시 아래 코드가 실행되지 않게한다.
  const result = String(Math.floor(Math.random() * 10 ** length)).padStart(
    length,
    "0"
  ); // 6자리 랜덤 수 만들기(6자리이고 아니라면 앞에 0을 붙여줘(문자열에만 사용하는 것이기에 문자열로 바꿔서 진행.))
  // Math.random => 랜덤한 소수나옴., 소수점 자리 옯겨서 6자리로 만들어주고 소수점 아래 버리기
  return result;
};

export const sendTokenToSMS = (number, myToken) => {
  console.log(`${number} 번호로 인증번호 ${myToken}을 전송합니다!!!`);
};
