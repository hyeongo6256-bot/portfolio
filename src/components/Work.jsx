import { useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { projects } from '../data/projects.js';
import WorkCard from './WorkCard.jsx';
import WorkModal from './WorkModal.jsx';

const MONTHS = {
  jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6,
  jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12,
};

function dateKey({ date, year, sortKey }) {
  if (typeof sortKey === 'number') return sortKey;
  if (date) {
    const end = date.split('-').pop().trim();
    const match = end.match(/(\d{4})\.(\w+)/);
    if (match) {
      const y = parseInt(match[1], 10);
      const rawMonth = match[2].toLowerCase();
      const m = MONTHS[rawMonth.slice(0, 3)] ?? parseInt(rawMonth, 10) ?? 0;
      return y * 12 + m;
    }
  }
  return (year || 0) * 12 + 6;
}

export default function Work() {
  const titleRef = useReveal();
  const subRef = useReveal();
  const [selectedProject, setSelectedProject] = useState(null);
  const [previewProject, setPreviewProject] = useState(null);

  const sortedProjects = [...projects].sort((a, b) => dateKey(b) - dateKey(a));

  const handleSelect = (project) => {
    setPreviewProject(project);
  };

  const handlePreviewClick = () => {
    setSelectedProject(previewProject);
    setPreviewProject(null);
  };

  return (
    <section id="work" className="work">
      <div className="container">
        <h2 ref={titleRef} className="section-title reveal">PROJECT</h2>
        <p ref={subRef} className="section-sub reveal">최근 작업한 프로젝트들을 소개합니다.</p>

        <div className="work__grid">
          {sortedProjects.map((project) => (
            <WorkCard key={project.id} {...project} onSelect={() => handleSelect(project)} />
          ))}
        </div>
      </div>

      {previewProject && (
        <div className="work-preview-overlay" onClick={() => setPreviewProject(null)}>
          <div className="work-preview-overlay__frame" onClick={(event) => event.stopPropagation()}>
            <div className="work-preview-overlay__media">
              <img
                src={previewProject.thumbImage}
                alt={previewProject.title}
                className="work-preview-overlay__img"
                style={previewProject.thumbPosition ? { objectPosition: previewProject.thumbPosition } : undefined}
                onClick={handlePreviewClick}
              />
              <div className="work-preview-overlay__aside">
                <button type="button" className="work-preview-overlay__hint" onClick={handlePreviewClick}>
                  상세 보기 <span className="work-preview-overlay__arrow">→</span>
                </button>
                <p className="work-preview-overlay__note">
                  이미지를 누르거나 상세 보기를 클릭하면 상세페이지를 볼 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedProject && (
        <WorkModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
