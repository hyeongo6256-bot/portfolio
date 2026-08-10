import { useEffect } from 'react';

export default function WorkModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const { thumbClass, thumbImage, tag, title, subline, description, details } = project;

  return (
    <div className="work-modal-overlay" onClick={onClose}>
      <div className="work-modal" onClick={(event) => event.stopPropagation()}>
        <button className="work-modal__close" onClick={onClose} aria-label="닫기">×</button>
        <div className="work-modal__scroll">
          <div className={`work-modal__thumb ${thumbClass}`}>
            {thumbImage && <img src={thumbImage} alt={title} className="work-modal__thumb-img" />}
          </div>
          <div className="work-modal__body">
            <span className="work-card__tag">{tag}</span>
            <h3>{title}</h3>
            {subline && <p className="work-modal__subline">{subline}</p>}
            {description && <p>{description}</p>}

            {details?.sections?.map((section) => (
              <section key={section.heading} className="work-modal__section">
                <h4>{section.heading}</h4>
                <p>{section.body}</p>
              </section>
            ))}

            {details?.gallery && (
              <div className="work-modal__gallery">
                {details.gallery.map((src, index) =>
                  src ? (
                    <img key={index} src={src} alt={`${title} 이미지 ${index + 1}`} className="work-modal__gallery-img" />
                  ) : (
                    <div key={index} className="work-modal__gallery-placeholder">+ 이미지 추가</div>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
