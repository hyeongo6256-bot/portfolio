import { useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { history } from '../data/history.js';

export default function History() {
  const titleRef = useReveal();
  const listRef = useReveal();
  const [selectedYear, setSelectedYear] = useState(history[0]?.year);

  const activeGroup = history.find((group) => group.year === selectedYear);

  return (
    <section id="history" className="history">
      <div className="container">
        <h2 ref={titleRef} className="section-title reveal">HISTORY</h2>
        <div ref={listRef} className="history__grid reveal">
          <div className="history__years">
            {history.map((group) => (
              <button
                key={group.year}
                type="button"
                className={`history__year-btn${group.year === selectedYear ? ' is-active' : ''}`}
                onClick={() => setSelectedYear(group.year)}
              >
                {group.year}
              </button>
            ))}
          </div>
          {activeGroup && (
            <ul className="history__entries">
              {activeGroup.entries.map((entry, i) => {
                const showMonth = i === 0 || activeGroup.entries[i - 1].month !== entry.month;
                return (
                  <li key={i} className="history__entry">
                    <span className="history__month">{showMonth ? entry.month : ''}</span>
                    <span className="history__title">{entry.title}</span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
