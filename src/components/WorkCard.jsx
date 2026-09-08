import { useReveal } from '../hooks/useReveal.js';

export default function WorkCard({ thumbClass, thumbImage, thumbPosition, title, onSelect }) {
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
      aria-label={title}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
    >
      <div className={`work-card__thumb ${thumbClass}`}>
        {thumbImage && (
          <img
            src={thumbImage}
            alt={title}
            className="work-card__thumb-img"
            style={thumbPosition ? { objectPosition: thumbPosition } : undefined}
          />
        )}
      </div>
    </article>
  );
}
