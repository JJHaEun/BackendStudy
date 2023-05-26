const getWelcomeTemplate = ({ createdAt, name }) => {
  //  const { createdAt, name } = { name:name, createdAt:createdAt, school:school }// key와 value같아 value생략가능

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

const name = "유리";
const createdAt = "2023-12-25";
const school = "토끼초등학교";
// const myuser = {
//   name:name,
//   createdAt:createdAt
// }
// => value에는 변수를 넣어주고, 변수에 할당한 값이 들어감.
//  key와 value가 같으면 value생략가능
// const myuser = { name, createdAt };
// getWelcomeTemplate(myuser);

// myuser자리에 바로 넣어도 됨. 어차피 같기에.
getWelcomeTemplate({ name, createdAt, school }); // 각 매개변수에있는 자신의 이름에 들어감.

// 구조분해할당 사용하기.
// 각 해당하는 자리에 들어감. 인수가 name이면 name이라는 매개변수에 인수가 age라면 age라는 매개변수에...
// 따라서 자리수가 맞지 않아도(빼먹고 적거나 해도) 문제없음.
