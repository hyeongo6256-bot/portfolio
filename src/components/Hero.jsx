import { useReveal } from '../hooks/useReveal.js';

export default function Hero() {
  const eyebrowRef = useReveal();
  const titleRef = useReveal();
  const descRef = useReveal();
  const actionsRef = useReveal();

  return (
    <section id="home" className="hero">
      <div className="container">
        <p ref={eyebrowRef} className="hero__eyebrow reveal">Visual &amp; Brand Designer</p>
        <h1 ref={titleRef} className="hero__title reveal">
          보이는 것 너머<br />
          <span>의미를 만드는 디자인</span>
        </h1>
        <p ref={descRef} className="hero__desc reveal">
          브랜딩, UI/UX, 편집 디자인을 넘나들며 사용자와 브랜드를 연결하는
          작업을 합니다. 아래 프로젝트들을 통해 저의 작업 방식을 확인해보세요.
        </p>
        <div ref={actionsRef} className="hero__actions reveal">
          <a href="#work" className="btn btn--primary">프로젝트 보기</a>
          <a href="#contact" className="btn btn--ghost">연락하기</a>
        </div>
      </div>
    </section>
  );
}
