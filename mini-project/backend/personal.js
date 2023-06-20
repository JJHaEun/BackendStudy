export const maskPersonalNumber = (personalNumber) => {
  const maskedNumber = personalNumber.replace(
    // /(\d{2})(\d{2})(\d{2})-(\d{7})/,
    // "$1$2$3-*******"
    /(\d{6})-(\d{7})/,
    "$1-*******"
  );
  //  // 주민번호 뒷자리 가리기
  //  const birthDate = personalNumber.slice(0, 6);
  //  const hiddenNumber = personalNumber.slice(7).replace(/\d/g, "*");
  //  const maskedNumber = `${birthDate}-${hiddenNumber}`;
  return maskedNumber;
};
