import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeNav = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#home" className="logo" onClick={closeNav}>NOTOFOLIO</a>
        <button
          className="nav-toggle"
          aria-label="메뉴 열기"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span></span><span></span><span></span>
        </button>
        <nav className={`nav${isOpen ? ' is-open' : ''}`}>
          <a href="#about" onClick={closeNav}>소개</a>
          <a href="#work" onClick={closeNav}>프로젝트</a>
          <a href="#contact" onClick={closeNav}>연락처</a>
        </nav>
      </div>
    </header>
  );
}
