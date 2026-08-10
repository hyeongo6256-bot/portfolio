import { useReveal } from '../hooks/useReveal.js';

export default function WorkCard({ thumbClass, thumbImage, tag, title, subline, description, onSelect }) {
  const cardRef = useReveal();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelect();
    }
  };

  return (
    <article
      ref={cardRef}
      className="work-card reveal"
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
    >
      <div className={`work-card__thumb ${thumbClass}`}>
        {thumbImage && <img src={thumbImage} alt={title} className="work-card__thumb-img" />}
      </div>
      <div className="work-card__body">
        <span className="work-card__tag">{tag}</span>
        <h3>{title}</h3>
        <p>{subline || description}</p>
      </div>
    </article>
  );
}
