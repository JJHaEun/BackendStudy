// 인증번호 요청 API함수 만들기(createTokenOfPhone) = > 순서를 가진 함수..
//input에 입력받은 번호를 함수의 매개변수로 받아 활용이 가능.
// 1. 매개변수가 10 ~ 11자리인지 검증
// 2. 토큰생성(getToken)
// 3. 핸드폰에 토큰 전송!
const createTokenOfPhone = (phoneNumber) => {
  // 1. 휴대폰 자릿수 맞는지 확인하기
  if (phoneNumber.length !== 10 && phoneNumber.length !== 11) {
    console.log("error, 번호를 제대로 입력해주세요");
    return;
  }

  // 2. 핸드폰 토큰 6자리 만들기
  const length = 6;
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
  );

  // 3. 전달받은 핸드폰 번호에 토큰 전송하기
  console.log(`${phoneNumber}번호로 인증번호 ${result}를 전송합니다`);
};
createTokenOfPhone("01012345678");
