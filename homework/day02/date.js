const TodayDates = () => {
  const day = new Date();
  const yyyy = day.getFullYear();
  const mm = String(day.getMonth() + 1).padStart(2, "0");
  const dd = String(day.getDay()).padStart(2, "0");
  const hh = String(day.getHours()).padStart(2, "0");
  const MM = String(day.getMinutes()).padStart(2, "0");
  const ss = String(day.getSeconds()).padStart(2, "0");
  const today = `오늘은 ${yyyy}년 ${mm}월 ${dd}일 ${hh}:${MM}:${ss}입니다.`;
  console.log(today);
  //“오늘은 2022년 03월 15일 11:30:29입니다.”
};
TodayDates();
