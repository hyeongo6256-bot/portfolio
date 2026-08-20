import { useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { projects } from '../data/projects.js';
import WorkCard from './WorkCard.jsx';
import WorkModal from './WorkModal.jsx';

const MONTHS = {
  jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6,
  jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12,
};

function dateKey({ date, year }) {
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

  const sortedProjects = [...projects].sort((a, b) => dateKey(b) - dateKey(a));

  return (
    <section id="work" className="work">
      <div className="container">
        <h2 ref={titleRef} className="section-title reveal">PROJECT</h2>
        <p ref={subRef} className="section-sub reveal">최근 작업한 프로젝트들을 소개합니다.</p>

        <div className="work__grid">
          {sortedProjects.map((project) => (
            <WorkCard key={project.id} {...project} onSelect={() => setSelectedProject(project)} />
          ))}
        </div>
      </div>

      {selectedProject && (
        <WorkModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
