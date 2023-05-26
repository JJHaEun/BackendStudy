export const getDate = (date) => {
  const day = new Date(date);
  const yyyy = day.getFullYear();
  const mm = String(day.getMonth() + 1).padStart(2, "0");
  const dd = String(day.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};
