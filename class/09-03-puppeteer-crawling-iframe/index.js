import puppeteer from "puppeteer";

// 삼성전자 주식 크롤링하기! => 일별시세 크롤링!\

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
  await page.goto("https://finance.naver.com/item/sise.naver?code=005930");
  // 물리적으로 시간이 걸릴 수 있기에 대기
  await page.waitForTimeout(1000); //1초 대기

  const framePage = await page
    .frames()
    .find((el) => el.url().includes("/item/sise_day.naver?code=005930")); // 여러 iframe중 특정 주소인것. // 일별시세 iframe
  // el에는 각 iframe들이 들어옴. 만약 iframe이 다섯개일경우 5번 반복되어 el에 들어감. 여기서 url을 뽑고,
  // 원하는 주소를 포함하는지 봄
  // 이 iframe에서 찾아본다.

  // 3. selector내용 가져와서 변수에 저장.
  // 이동된 페이지에서 해당 선택자에 있는것 골라내기
  // eval은 평가하다 라는 의미
  // $$eval은 여러개 선택(선택자가 여러개 있을때 모두 선택해줘)

  for (let i = 3; i <= 7; i++) {
    const dates = await framePage.$eval(
      `body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(1) > span`, // selector찾기 실패!! // body안에 table이 없다.  ==> 일별 시세 부분이 iframe에 들어있는 것이다. 따라서 다른 페이지!
      // 따라서 열린 page에서 찾으면 안되고 iframe안에서 찾아야한다.
      // 그냥 body는 가장 최상위 body를 말하는것!
      //body > table.type2 > tbody > tr:nth-child(4) //  여기가 3 ~ 7까지 가 한그룹5개 나오로 줄긋고 그 아래 5개 나오는 식 > td:nth-child(1) > span => 다음날짜

      (el) => el.textContent
    );
    const closingPrice = await framePage.$eval(
      `body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(2) > span`,
      (el) => el.textContent
    );
    const timePrice = await framePage.$eval(
      `body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(4) > span`,
      (el) => el.textContent
    );
    const hightCost = await framePage.$eval(
      `body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(5) > span`,
      (el) => el.textContent
    );
    const lowCost = await framePage.$eval(
      `body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(6) > span`,
      (el) => el.textContent
    );

    const last = await framePage.$eval(
      `body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(3) > span`,
      (el) => el.textContent
    );
    const amount = await framePage.$eval(
      `body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(7) > span`,
      (el) => el.textContent
    );
    console.log(
      `${dates} ${last.trim()} ${closingPrice} ${timePrice} ${hightCost} ${lowCost} ${amount} `
    );
  }

  // 크롤링을 다 하면 브라우저 종료하기
  await browser.close();
};
startCrawling();
// 서버 접속시 부하를 준다??

// => 페이지 접속 ==> GET요청!!(즉 , goto가 많으면 서버에 무리를 준다는 말!!)
// goto가 많은것은 상관없지만 이때 waitForTime을 꼭 걸어두어야한다.(페이지 이동시에 텀을 준다.(클릭해서 다음페이지 받아오는 것도 마찬가지))

// 여기에서 한번 받아와서 $eval부분은 html안에 있는것을 골라내는 것이기에 vscode에서 처리되는것이기에 상관 없다.
