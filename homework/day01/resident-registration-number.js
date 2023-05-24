const customRegistrationNumber = (infoNum) => {
  // 1. 주민번호 가운데가 ”-”로 구성되어야 합니다.
  // - 그렇지 않을 경우 에러 메세지를 콘솔에 출력해 주세요.

  // ex) ”에러 발생!!! 형식이 올바르지 않습니다!!!”
  // infoNum.length이 짝수일 경우
  let infoNumLength = infoNum.length % 2;
  const answerIf =
    infoNumLength === 0 ? infoNum.length / 2 + 2 : infoNum.length / 2;

  const re = infoNum.split("");
  console.log(re[answerIf]);
};
customRegistrationNumber("210510-1010101");
// customRegistrationNumber("210510-1010101010101");
// customRegistrationNumber("2105101010101")
