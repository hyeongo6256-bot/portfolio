import { useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { projects } from '../data/projects.js';
import WorkCard from './WorkCard.jsx';
import WorkModal from './WorkModal.jsx';

export default function Work() {
  const titleRef = useReveal();
  const subRef = useReveal();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="work">
      <div className="container">
        <h2 ref={titleRef} className="section-title reveal">프로젝트</h2>
        <p ref={subRef} className="section-sub reveal">최근 작업한 프로젝트들을 소개합니다.</p>

        <div className="work__grid">
          {projects.map((project) => (
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
