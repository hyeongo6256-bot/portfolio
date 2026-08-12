import { useEffect, useMemo, useState } from 'react';

function buildPages(project) {
  const { tag, title, subline, description, thumbImage, details } = project;
  const pages = [{ type: 'cover', tag, title, subline, description }];

  if (thumbImage) {
    pages.push({ type: 'image', src: thumbImage, alt: title });
  }

  details?.sections?.forEach((section) => {
    pages.push({ type: 'section', heading: section.heading, body: section.body });
  });

  details?.gallery?.forEach((src, i) => {
    if (src) pages.push({ type: 'image', src, alt: `${title} 이미지 ${i + 1}` });
  });

  return pages;
}

function Page({ page }) {
  if (!page) return <div className="work-book__page work-book__page--blank" />;

  if (page.type === 'image') {
    return (
      <div className="work-book__page work-book__page--image">
        <img src={page.src} alt={page.alt} />
      </div>
    );
  }

  if (page.type === 'section') {
    return (
      <div className="work-book__page work-book__page--text">
        <h4>{page.heading}</h4>
        <p>{page.body}</p>
      </div>
    );
  }

  return (
    <div className="work-book__page work-book__page--text">
      <span className="work-card__tag">{page.tag}</span>
      <h3>{page.title}</h3>
      {page.subline && <p className="work-modal__subline">{page.subline}</p>}
      {page.description && <p>{page.description}</p>}
    </div>
  );
}

export default function WorkModal({ project, onClose }) {
  const pages = useMemo(() => buildPages(project), [project]);
  const spreadCount = Math.ceil(pages.length / 2);
  const [spreadIndex, setSpreadIndex] = useState(0);

  const goPrev = () => setSpreadIndex((i) => Math.max(0, i - 1));
  const goNext = () => setSpreadIndex((i) => Math.min(spreadCount - 1, i + 1));

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') goNext();
      if (event.key === 'ArrowLeft') goPrev();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, spreadCount]);

  const left = pages[spreadIndex * 2];
  const right = pages[spreadIndex * 2 + 1];

  return (
    <div className="work-modal-overlay" onClick={onClose}>
      <div className="work-modal work-book" onClick={(event) => event.stopPropagation()}>
        <button className="work-modal__close" onClick={onClose} aria-label="닫기">×</button>
        <div className="work-book__spread">
          <Page page={left} />
          <Page page={right} />
        </div>
        <div className="work-book__nav">
          <button
            type="button"
            className="work-book__nav-btn"
            onClick={goPrev}
            disabled={spreadIndex === 0}
            aria-label="이전 페이지"
          >
            ‹
          </button>
          <span className="work-book__page-count">{spreadIndex + 1} / {spreadCount}</span>
          <button
            type="button"
            className="work-book__nav-btn"
            onClick={goNext}
            disabled={spreadIndex === spreadCount - 1}
            aria-label="다음 페이지"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
