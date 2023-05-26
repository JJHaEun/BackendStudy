export const checkValidationEmail = (email) => {
  if (email.includes("@") === false) {
    console.log("이메일을 확인해주세요");
    return false;
  } else {
    return true;
  }
};
export const getWelcomeTemplate = ({ name, createdAt }) => {
  const result = `
          <html>
              <body>
                  <h1>${name}님 가입을 환영합니다!!!</h1>
                      <div>
                          <span>이름: ${name}</span>
                          <span>가입일: ${createdAt}</span>
                      </div> 
              </body>
          <html>
          `;
  console.log(result);
};
