// Ported from https://github.com/monet-design/monet-registry
// (src/components/registry/riotters-footer) — TS types stripped to match
// this project's plain-JSX convention. Default content adapted to this
// personal portfolio (see App.jsx for the actual props passed in).

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  background: "#FFFFFF",
  text: "#000000",
  textMuted: "#666666",
  accent: "#00F5D4",
  buttonBg: "#000000",
  buttonText: "#FFFFFF",
  buttonAccent: "#00F5D4",
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import "../tailwind-scoped.css";

const defaultLegalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Cookies Policy", href: "#" },
];

const defaultSocialLinks = [
  { label: "Dribbble", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Behance", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Clutch", href: "#" },
];

export default function RiottersFooter({
  copyrightYear = "2024",
  copyrightText = "Riotters",
  legalLinks = defaultLegalLinks,
  largeLogo = "riotters",
}) {
  return (
    <footer
      className="relative w-full overflow-hidden border-t"
      style={{ backgroundColor: COLORS.background, borderColor: "#eaeaef" }}
    >
      {/* Bottom Bar */}
      <motion.div
        className="mx-auto flex max-w-7xl items-center justify-center px-6 py-6 lg:px-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {/* Copyright & Legal */}
        <div className="flex flex-wrap items-center justify-center gap-1 text-sm" style={{ color: COLORS.text }}>
          <span>&copy; {copyrightText} {copyrightYear}. All rights reserved</span>
          {legalLinks.map((link, index) => (
            <span key={index} className="flex items-center">
              <span className="mx-2">&bull;</span>
              <a
                href={link.href}
                className="transition-opacity hover:opacity-60"
              >
                {link.label}
              </a>
            </span>
          ))}
        </div>
      </motion.div>

      {/* Large Logo */}
      <motion.div
        className="relative -mt-6 w-full overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div
          className="select-none whitespace-nowrap text-center font-black uppercase leading-none tracking-tighter"
          style={{
            color: COLORS.text,
            fontSize: "clamp(80px, 18vw, 280px)",
            lineHeight: 0.85,
            marginBottom: "-0.1em",
          }}
        >
          {largeLogo}
        </div>
      </motion.div>
    </footer>
  );
}
