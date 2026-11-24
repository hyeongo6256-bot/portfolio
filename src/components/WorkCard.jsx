import { useReveal } from '../hooks/useReveal.js';

export default function WorkCard({ thumbClass, thumbImage, thumbPosition, title, inProgress, onSelect }) {
  const cardRef = useReveal();

  const handleKeyDown = (event) => {
    if (inProgress) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelect();
    }
  };

  return (
    <article
      ref={cardRef}
      className={`work-card reveal${inProgress ? ' work-card--in-progress' : ''}`}
      role="button"
      tabIndex={inProgress ? -1 : 0}
      aria-disabled={inProgress || undefined}
      aria-label={title}
      onClick={inProgress ? undefined : onSelect}
      onKeyDown={handleKeyDown}
    >
      <div className={`work-card__thumb ${thumbClass}`}>
        {thumbImage && (
          <img
            src={thumbImage}
            alt={title}
            className={`work-card__thumb-img${inProgress ? ' work-card__thumb-img--in-progress' : ''}`}
            style={thumbPosition ? { objectPosition: thumbPosition } : undefined}
          />
        )}
        {inProgress && <span className="work-card__wip-badge">IN PROGRESS</span>}
      </div>
    </article>
  );
}
