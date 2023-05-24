export const checkValidationPhone = (phoneNumber) => {
  if (phoneNumber.length !== 10 && phoneNumber.length !== 11) {
    console.log("error, 번호를 제대로 입력해주세요");
    return true;
  } else {
    return false;
  }
};

export const getToken = (length) => {
  // 넘겨준 인자를 매개변수(파라미터 = param)로 받음.
  const result = String(Math.floor(Math.random() * 10 ** length)).padStart(
    length,
    "0"
  ); // 6자리 랜덤 수 만들기(6자리이고 아니라면 앞에 0을 붙여줘(문자열에만 사용하는 것이기에 문자열로 바꿔서 진행.))
  // Math.random => 랜덤한 소수나옴., 소수점 자리 옯겨서 6자리로 만들어주고 소수점 아래 버리기
  console.log(result);
};

export const sendTokenToSMS = (phoneNumber, token) => {
  console.log(`${phoneNumber} 번호로 인증번호 ${token}을 전송합니다!!!`);
};
