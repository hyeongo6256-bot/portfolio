import { useReveal } from '../hooks/useReveal.js';

export default function WorkCard({ thumbClass, tag, title, description }) {
  const cardRef = useReveal();

  return (
    <article ref={cardRef} className="work-card reveal">
      <div className={`work-card__thumb ${thumbClass}`}></div>
      <div className="work-card__body">
        <span className="work-card__tag">{tag}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
