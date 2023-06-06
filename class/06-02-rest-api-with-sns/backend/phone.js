import coolsms from "coolsms-node-sdk";

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

export const sendTokenToSMS = async (number, myToken) => {
  // 외부에 문자메세지 발송하기
  // NHN클라우드(유료- 좋긴하지만 신용카드가 있어야 사용가능), AWS등을 사용.
  //coolsms(선불 결제 필요. 처음에는 300원까지는 무료)=> 이것을 사용해 실습!!
  // coolsms-node-sdk (소프트웨어 디벨롭 키트)라는 도구를 추가로 사용(국내용이기에 다운로드 수는 적음)
  const mysms = coolsms.default;
  const messageService = new mysms(
    "NCSFSH8ALJN3RT9P",
    "NYSKECOPOKBAEYVDQ6KXSPRSV82WGD2I"
  );

  const result = await messageService.sendOne({
    to: number, // 받는 사람 핸드폰 번호(실제 있는 번호로 넘겨줄것)
    from: "01053067359", // 인증번호 보내는 핸드폰 번호
    text: `[테스트 인증] 요청하신 인증번호는 [${myToken}]입니다`,
  });
  // console.log(`${number} 번호로 인증번호 ${myToken}을 전송합니다!!!`);
  // NCSFSH8ALJN3RT9P; // KEY
  console.log(result);
  // NYSKECOPOKBAEYVDQ6KXSPRSV82WGD2I; // SECRET
};
