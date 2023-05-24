const getToken = (length) => {
  // 넘겨준 인자를 매개변수(파라미터 = param)로 받음.
  // if (length === undefined || length <= 0 || length === null || length >= 10) {
  //   console.log("개수를 제대로 입력해주세요");
  //   return;
  // } // 한방에 조건주기

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
  console.log(result);
};
getToken(6);

// undefined 나 null, 또는 0보다 작지 않아야함
// null=> 강제로 비웠을 경우에는 null, 비어있다면 undefined
