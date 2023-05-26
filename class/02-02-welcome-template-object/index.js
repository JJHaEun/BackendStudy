const getWelcomeTemplate = (user) => {
  const result = `
    <html>
        <body>
            <h1>${user.name}님 가입을 환영합니다!!!</h1>
                <div>
                    <span>이름: ${user.name}</span>
                    <span>가입일: ${user.createdAt}</span>
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
// 일반 변수를 선언해 해당 변수들을 인자로 넣어 파라미터(매개변수)로 받는 방식
// 초기 짧은 코드의 경우에는 문제가 없으나 코드가 길어질 경우 매개변수를 하나 빼먹거나 한다면 , 또느 인자를 빼먹거나 한다면
// 만약 인자 하나를 빼먹었을 경우에는 매개변수에 차례로 들어가다가 마지막 매개변수에는 들어갈 인자가 없기에 undefined가 들어가게됨.
// 매개변수가 하나 없는 경우에도 위와같이 예상치 못한 에러를 발생시킬 수 있음.
// 따라서 아예 객체로 만들어 객체를 보내준다면, 해당 객체를 매개변수로 받아서 이 객체에서 뽑아 사용하기만 하면 됨!!
