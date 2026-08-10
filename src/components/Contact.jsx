import { useReveal } from '../hooks/useReveal.js';

export default function Contact() {
  const titleRef = useReveal();
  const subRef = useReveal();
  const emailRef = useReveal();
  const linksRef = useReveal();

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 ref={titleRef} className="section-title reveal">함께 작업해요</h2>
        <p ref={subRef} className="section-sub reveal">새로운 프로젝트나 협업 제안은 언제든 환영합니다.</p>
        <a ref={emailRef} href="mailto:hello@janekim.com" className="contact__email reveal">hello@janekim.com</a>
        <div ref={linksRef} className="contact__links reveal">
          <a href="#" target="_blank" rel="noopener">Instagram</a>
          <a href="#" target="_blank" rel="noopener">Behance</a>
          <a href="#" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
