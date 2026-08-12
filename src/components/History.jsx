import { useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { history } from '../data/history.js';

function buildRows(entries) {
  const monthCells = [];
  const titleCells = [];
  let lastMonth = null;
  let rowCursor = 1;

  entries.forEach((entry, entryIndex) => {
    const months = entry.months ?? [entry.month];

    months.forEach((month, i) => {
      monthCells.push({
        key: `m-${entryIndex}-${i}`,
        row: rowCursor + i,
        text: month !== lastMonth ? month : '',
        bordered: !(entryIndex === 0 && i === 0) && i === 0,
      });
      lastMonth = month;
    });

    titleCells.push({
      key: `t-${entryIndex}`,
      rowStart: rowCursor,
      span: months.length,
      title: entry.title,
      bordered: entryIndex !== 0,
    });

    rowCursor += months.length;
  });

  return { monthCells, titleCells };
}

export default function History() {
  const titleRef = useReveal();
  const listRef = useReveal();
  const [selectedYear, setSelectedYear] = useState(history[0]?.year);

  const activeGroup = history.find((group) => group.year === selectedYear);
  const { monthCells, titleCells } = activeGroup ? buildRows(activeGroup.entries) : { monthCells: [], titleCells: [] };

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
          <div className="history__entries">
            {monthCells.map((cell) => (
              <div
                key={cell.key}
                className={`history__month${cell.bordered ? ' is-bordered' : ''}`}
                style={{ gridRow: cell.row }}
              >
                {cell.text}
              </div>
            ))}
            {titleCells.map((cell) => (
              <div
                key={cell.key}
                className={`history__title${cell.bordered ? ' is-bordered' : ''}`}
                style={{ gridRow: `${cell.rowStart} / span ${cell.span}` }}
              >
                {cell.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
