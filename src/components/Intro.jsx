import { useEffect, useState } from 'react';

export default function Intro() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timers = [
      setTimeout(() => setIsFlipped(true), 900),
      setTimeout(() => setIsLeaving(true), 1800),
      setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = '';
      }, 2400),
    ];

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = '';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`intro${isLeaving ? ' intro--leaving' : ''}`}>
      <div className={`intro__logo${isFlipped ? ' is-flipped' : ''}`}>
        <span className="intro__logo-face intro__logo-face--top">NOTOFOLIO</span>
        <span className="intro__logo-face intro__logo-face--bottom">NOHYEONGO</span>
      </div>
    </div>
  );
}
