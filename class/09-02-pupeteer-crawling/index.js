import puppeteer from "puppeteer";

// 크롤링 => 컴퓨터가 대신 사이트에 접속하게 해서 내가 직접 클릭해서 정보를 보는 것처럼 정보를 긁어옴.
// 쉽게 도와주는 도구 =>> Puppeteer
// #poduct_list_area > li:nth-child(2) > a > div > div.name > div > span // 여기어때 사이트의 호텔 등급 부분 선택한 뒤, 요소에서 마우스 오른쪽 클릭 ! => 복사 => selector복사 (해당 요소를 어떻게 선택할 수 있는지 알려줌)
// id가 #poduct_list_area 인 자식 li중 두번째의 자식 a태그의 그 자식 div태그의 자식인 div인데 class가 name의 div의 자식인 span
// 이것을 puppeteer에 넣어주면 쉽게

/* <span class="build_badge" style="color: rgba(255,255,255,1); background-color: rgba(97,95,184,1);">4성급</span> */

//얘를 뽑을 수 있다.
const startCrawling = async () => {
  // 1. 크로미움이라는 브라우저를 연다.(puppeteer를 실행하면 자동으로 실행됨. )
  // puppeteer실행
  const browser = await puppeteer.launch({ headless: false }); // headless는 실제 브라우저를 보여줄것인지 아닌지를 넣는 옵션
  // headless:true의 경우 눈에 보이지 않게됨 false면 실제 브라우저가 열림 다만, 브라우저가 실제 열리니 성능 약간 느림

  // 브라우저에서 새 페이지를 연다.
  const page = await browser.newPage();
  // 페이지 사이즈는?
  await page.setViewport({ width: 1280, height: 720 });

  // 2. 크로미움주소창에 주소 입력되게 함.
  // 크롤링 하고 싶은 페이지 주소(이동할 페이지)
  await page.goto("https://www.goodchoice.kr/product/search/2/2012");
  // 물리적으로 시간이 걸릴 수 있기에 대기
  await page.waitForTimeout(1000); //1초 대기

  // 3. selector내용 가져와서 변수에 저장.
  // 이동된 페이지에서 해당 선택자에 있는것 골라내기
  // eval은 평가하다 라는 의미

  const state = await page.$eval(
    "#poduct_list_area > li:nth-child(2) > a > div > div.name > div > span",
    (el) =>
      // el은 해당 태그(span)의미.
      el.textContent
  );
  // 이렇게 하면 최종적인 위치 span태그 안에 있는것을 가져오게됨. 가지고 와서 뒤의 함수가 실행됨.
  const name = await page.$eval(
    "#poduct_list_area > li:nth-child(2) > a > div > div.name > strong",
    (el) => el.textContent
  );
  const location = await page.$eval(
    "#poduct_list_area > li:nth-child(2) > a > div > div.name > p:nth-child(4)",
    (el) => el.textContent
  );
  const price = await page.$eval(
    "#poduct_list_area > li:nth-child(2) > a > div > div.price > p > b",
    (el) => el.textContent
  );

  // location의 경우 양쪽에 빈 공백이 있는듯 "                       강남구 | 학동역 도보 4분                     "
  // 따라서 trim으로 양쪽의 빈 공백을 지워줌

  // trim 사용 전과 사용 후
  //   nodemon] starting `node index.js`
  // 4성급 엘리에나 호텔
  //                         강남구 | 학동역 도보 4분                     235,600원
  // [nodemon] restarting due to changes...
  // [nodemon] starting `node index.js`
  // 4성급 엘리에나 호텔 강남구 | 학동역 도보 4분 235,600원
  console.log(state, name, location.trim(), price);
};

startCrawling();
