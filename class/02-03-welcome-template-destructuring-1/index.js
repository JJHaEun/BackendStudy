const getWelcomeTemplate = ({ createdAt, name }) => {
  // const { createdAt, name } = myUser
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
const myUser = {
  name: "유리",
  age: 12,
  school: "다람쥐초등학교",
  createdAt: "2023-12-25",
};
getWelcomeTemplate(myUser);

// 구조분해할당 사용하기.
// 각 해당하는 자리에 들어감. 인수가 name이면 name이라는 매개변수에 인수가 age라면 age라는 매개변수에...
// 따라서 자리수가 맞지 않아도(빼먹고 적거나 해도) 문제없음.
