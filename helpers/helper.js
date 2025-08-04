export function calculateYearsFromDate(inputDate) {
  const currentDate = new Date('2025-08-04');

  const [day, month, year] = inputDate.split('/').map(Number);
  const startDate = new Date(year, month - 1, day);

  if (!day || !month || !year || isNaN(startDate)) {
    return "Định dạng ngày không hợp lệ, vui lòng dùng 'DD/MM/YYYY'";
  }

  let years = currentDate.getFullYear() - startDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  const startMonth = startDate.getMonth();
  const startDay = startDate.getDate();

  if (
    currentMonth < startMonth ||
    (currentMonth === startMonth && currentDay < startDay)
  ) {
    years--;
  }

  return years;
}
