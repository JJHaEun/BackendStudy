export const getToday = () => {
  const day = new Date();
  const yyyy = day.getFullYear();
  const mm = String(day.getMonth() + 1).padStart(2, "0");
  const dd = String(day.getDate()).padStart(2, "0");
  const today = `${yyyy}-${mm}-${dd}`;
  return today;
};
