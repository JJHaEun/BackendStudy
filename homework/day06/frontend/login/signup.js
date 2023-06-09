// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  const PhoneNumber01 = document.getElementById("PhoneNumber01").value;
  const PhoneNumber02 = document.getElementById("PhoneNumber02").value;
  const PhoneNumber03 = document.getElementById("PhoneNumber03").value;
  const phoneNumber = `${PhoneNumber01}${PhoneNumber02}${PhoneNumber03}`;
  document.querySelector("#ValidationInputWrapper").style.display = "flex";

  const res = await axios.post("http://localhost:3004/token/phone", {
    phone: phoneNumber,
  });
  console.log(res.data);
};

// 회원 가입 API 요청
const submitSignup = async () => {
  const name = document.getElementById("SignupName").value;
  const PhoneNumber01 = document.getElementById("PhoneNumber01").value;
  const PhoneNumber02 = document.getElementById("PhoneNumber02").value;
  const PhoneNumber03 = document.getElementById("PhoneNumber03").value;
  const phone = `${PhoneNumber01}${PhoneNumber02}${PhoneNumber03}`;
  const personal = `${document.getElementById("SignupPersonal01").value}${
    document.getElementById("SignupPersonal02").value
  }`;
  const prefer = document.getElementById("SignupPrefer").value;
  const email = document.getElementById("SignupEmail").value;
  const password = document.getElementById("SignupPwd").value;

  const res = await axios.post("http://localhost:3004/users", {
    user: {
      name,
      personal,
      phone,
      prefer,
      email,
      password,
    },
  });
  console.log(res.data);
  console.log("회원 가입 이메일 전송");
};
