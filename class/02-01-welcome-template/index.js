const getWelcomeTemplate = (name, createdAt) => {
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
const myname = "유리";
const createdAt = "2023-12-25";
getWelcomeTemplate(myname, createdAt);
