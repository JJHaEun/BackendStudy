console.log("안녕!!!");

const getToken = () => {
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0"); // 6자리 랜덤 수 만들기(6자리이고 아니라면 앞에 0을 붙여줘(문자열에만 사용하는 것이기에 문자열로 바꿔서 진행.))
  // Math.random => 랜덤한 소수나옴., 소수점 자리 옯겨서 6자리로 만들어주고 소수점 아래 버리기
  console.log(result);
};
getToken();
