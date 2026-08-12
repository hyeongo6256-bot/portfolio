const months = ['12월', '11월', '10월', '9월', '8월', '7월', '6월', '5월', '4월', '3월', '2월', '1월'];

const placeholderYear = () => ({
  entries: months.map((month) => ({ month, title: '항목을 입력하세요' })),
});

export const history = [
  {
    year: '2026',
    entries: [
      { month: '6월', title: 'BISCUIT STUDIO 웹 디자인' },
      { month: '5월', title: 'Hatsune Miku x NORI 굿즈 제작 및 납품' },
      { month: '2월', title: '2026 LIVING DESIGN FAIR' },
      { month: '1월', title: 'Hatsune Miku x NORI 굿즈 디자인' },
    ],
  },
  {
    year: '2025',
    entries: [
      { month: '12월', title: '온라인 쇼핑몰(토스,신세계,오늘의집,롯데백화점,아트박스 등) 입점' },
      { month: '11월', title: '에그보이 단독 POP UP 스토어 진행' },
      { month: '11월', title: '에그보이 자사몰 오픈' },
      { month: '10월', title: '2025 DDP DESIGN FAIR 전시' },
      { month: '9월', title: '2025 TOKYO Gift show 전시' },
      { month: '9월', title: '에그보이 LIFE GOODS 2nd 런칭(PLAYBALL/WALKER)' },
      { month: '8월', title: '롯데아트뮤지엄 입점' },
      { month: '7월', title: '카카오메이커스 입점' },
      { month: '5월', title: '(F&B) GREDO BAKERY BI,Product' },
      { month: '4월', title: 'DDP STORE 입점' },
      { month: '4월', title: 'LG 일상비일상의틈 입점' },
      { month: '3월', title: '에그보이 LIFE GOODS 1st 런칭(BRUNCH STOOOL/EGG-PRESSO)' },
      { month: '2월', title: '2025 SEOUL LIVING DESIGN FAIR' },
      { month: '2월', title: 'the marée BI,Product design' },
      { month: '1월', title: '(주)에그보이레이블 설립 (브랜드 총괄 디자이너,디렉팅)' },
    ],
  },
  {
    year: '2024',
    entries: [
      { month: '11월', title: '<월간>디자인 11월 호 기고' },
      { month: '11월', title: 'SEOUL DESIGN FESTIVAL 영디자이너 프로모션 참가' },
      { month: '6월', title: 'Brand eggboy 서울디자인창업센터 입주' },
    ],
  },
  {
    year: '2023',
    entries: [
      {
        month: '11월',
        company: '(주)플라츠',
        items: ['가구디자인 및 렌더링', '애니메이션'],
      },
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
