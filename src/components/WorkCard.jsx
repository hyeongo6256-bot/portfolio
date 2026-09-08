import { useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';

const ZOOM_DURATION = 280;

export default function WorkCard({ thumbClass, thumbImage, thumbPosition, title, onSelect }) {
  const cardRef = useReveal();
  const [isZooming, setIsZooming] = useState(false);

  const activate = () => {
    if (isZooming) return;
    setIsZooming(true);
    setTimeout(() => {
      setIsZooming(false);
      onSelect();
    }, ZOOM_DURATION);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      activate();
    }
  };

  return (
    <article
      ref={cardRef}
      className="work-card reveal"
      role="button"
      tabIndex={0}
      aria-label={title}
      onClick={activate}
      onKeyDown={handleKeyDown}
    >
      <div className={`work-card__thumb ${thumbClass}`}>
        {thumbImage && (
          <img
            src={thumbImage}
            alt={title}
            className={`work-card__thumb-img${isZooming ? ' is-zooming' : ''}`}
            style={thumbPosition ? { objectPosition: thumbPosition } : undefined}
          />
        )}
      </div>
    </article>
  );
}
