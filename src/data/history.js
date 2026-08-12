const months = ['12월', '11월', '10월', '9월', '8월', '7월', '6월', '5월', '4월', '3월', '2월', '1월'];

const placeholderYear = () => ({
  entries: months.map((month) => ({ month, title: '항목을 입력하세요' })),
});

export const history = [
  { year: '2026', ...placeholderYear() },
  { year: '2025', ...placeholderYear() },
  { year: '2024', ...placeholderYear() },
  {
    year: '2023',
    entries: [
      { month: '11월', title: '(주)플라츠/ 가구디자인 및 렌더링,애니메이션' },
      {
        month: '4월',
        company: 'MGMC Design',
        items: ['진공쌀통 디자인 및 렌더링,상세페이지 디렉팅', '키패드 디자인'],
      },
    ],
  },
  {
    year: '2022',
    entries: [
      { month: '6월', title: '평택 청담고등학교 Rhinoceros 3D 강사' },
      { month: '5월', title: 'D2B Design fair' },
      { month: '4월', title: 'ALZAL Design Studio/ Editing lecture video subtitles' },
      { month: '3월', title: 'LK:DAOL SUPPLY/ Silicone Hera Brochure design & Rendering' },
      { month: '2월', title: '국립공주대학교 산업디자인공학부 제품디자인 학사 졸업' },
    ],
  },
];
