import { useReveal } from '../hooks/useReveal.js';

const skills = ['Brand Identity', 'UI / UX Design', 'Editorial Design', 'Figma · Illustrator · Photoshop'];

export default function About() {
  const imageRef = useReveal();
  const textRef = useReveal();

  return (
    <section id="about" className="about">
      <div className="container about__grid">
        <div ref={imageRef} className="about__image reveal" aria-hidden="true"></div>
        <div ref={textRef} className="about__text reveal">
          <h2 className="section-title">소개</h2>
          <p>
            안녕하세요, 저는 5년 차 비주얼 디자이너 Jane Kim입니다.
            브랜드의 본질을 시각 언어로 번역하는 일에 집중해왔고,
            스타트업부터 대기업까지 다양한 클라이언트와 협업했습니다.
          </p>
          <p>
            단순히 예쁜 결과물이 아니라, 문제를 해결하고 사용자에게
            닿는 디자인을 만드는 것을 목표로 합니다.
          </p>
          <ul className="about__skills">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
