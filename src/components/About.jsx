import { useReveal } from '../hooks/useReveal.js';

const capabilities = ['Brand Identity', 'Product Design', '3D Rendering', 'Director'];
const tools = ['Adobe Photoshop · Illustrator · After Effects · Rhino 3D · Keyshot · Blender'];

export default function About() {
  const imageRef = useReveal();
  const textRef = useReveal();

  return (
    <section id="about" className="about">
      <div className="container about__grid">
        <div ref={imageRef} className="about__image reveal">
          <img src="/about/portrait-line.png" alt="" className="about__image-layer about__image-layer--line" />
          <img src="/about/portrait-photo.png" alt="노형오" className="about__image-layer about__image-layer--photo" />
        </div>
        <div ref={textRef} className="about__text reveal">
          <h2 className="section-title">INFO. <span className="section-title__name">No Hyeong-O</span></h2>
          <p>
            안녕하세요, 제품과 사용자 사이의 공감을 만드는 프로덕트 디자이너 노형오입니다.
            브랜드 아이덴티티, 제품 디자인, 3D 렌더링까지 — 아이디어가 실체가 되는
            전 과정에 참여하며 작업합니다.
          </p>
          <p>
            일상 속에서 보고 느끼는 감각을 제품의 형태와 디테일로 옮기는 과정을
            중요하게 생각하며, 기능과 미감이 함께 균형을 이루는 디자인을
            만드는 것을 목표로 합니다.
          </p>
          <ul className="about__skills">
            {capabilities.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          <ul className="about__skills about__skills--tools">
            {tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
