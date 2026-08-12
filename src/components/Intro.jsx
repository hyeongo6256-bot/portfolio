import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export default function Intro() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  useLayoutEffect(() => {
    const matchWidth = () => {
      const top = topRef.current;
      const bottom = bottomRef.current;
      if (!top || !bottom) return;

      top.style.letterSpacing = '';
      const baseWidth = top.getBoundingClientRect().width;

      bottom.style.width = 'auto';
      const targetWidth = bottom.getBoundingClientRect().width;
      bottom.style.width = '';

      const probeSpacing = 20;
      top.style.letterSpacing = `${probeSpacing}px`;
      const probeWidth = top.getBoundingClientRect().width;
      const widthPerPx = (probeWidth - baseWidth) / probeSpacing;

      const neededSpacing = widthPerPx > 0 ? (targetWidth - baseWidth) / widthPerPx : 0;
      top.style.letterSpacing = `${neededSpacing}px`;
    };

    matchWidth();
    window.addEventListener('resize', matchWidth);
    return () => window.removeEventListener('resize', matchWidth);
  }, []);

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
        <span ref={topRef} className="intro__logo-face intro__logo-face--top">NOTOFOLIO</span>
        <span ref={bottomRef} className="intro__logo-face intro__logo-face--bottom">NOHYEONGO</span>
      </div>
    </div>
  );
}
