export const checkPersonInfoNumber = (infoNum) => {
  // 1. 주민번호 가운데가 ”-”로 구성되어야 합니다.
  // - 그렇지 않을 경우 에러 메세지를 콘솔에 출력해 주세요.

  // ex) ”에러 발생!!! 형식이 올바르지 않습니다!!!”
  const middle = infoNum.length / 2;
  if (infoNum.indexOf("-") !== middle - 1) {
    console.log("에러 발생!!! 형식이 올바르지 않습니다!!!");
    return false;
  } else {
    return true;
  }
};
export const InfoPersonNumberLength = (infoNum) => {
  // 2. 주민번호는 앞 6자리, 뒤 7자리로 구성되어야 합니다.
  // - 그렇지 않을 경우 에러 메세지를 콘솔에 출력해 주세요.
  // ex) ”에러 발생!!! 개수를 제대로 입력해 주세요!!!”
  const inFoSplit = infoNum.split("-");

  const front = inFoSplit[0];
  const back = inFoSplit[1];
  if (front.length !== 6 || back.length !== 7) {
    console.log("에러 발생!!! 개수를 제대로 입력해 주세요!!!");
    return false;
  } else {
    const result = `${front}-${back[0]}******`;
    console.log(result);
  }
};
//// ==========================================================
