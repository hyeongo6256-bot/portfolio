const months = ['12월', '11월', '10월', '9월', '8월', '7월', '6월', '5월', '4월', '3월', '2월', '1월'];

const placeholderYear = () => ({
  entries: months.map((month) => ({ month, title: '항목을 입력하세요' })),
});

export const history = [
  { year: '2026', ...placeholderYear() },
  { year: '2025', ...placeholderYear() },
  { year: '2024', ...placeholderYear() },
  { year: '2023', ...placeholderYear() },
  { year: '2022', ...placeholderYear() },
];
