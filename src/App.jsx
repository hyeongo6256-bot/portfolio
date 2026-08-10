import Header from './components/Header.jsx';
import Intro from './components/Intro.jsx';
import OysterEmbeddedHero from './components/registry/oyster-embedded-hero/index.jsx';
import RiottersFooter from './components/registry/riotters-footer/index.jsx';
import About from './components/About.jsx';
import Work from './components/Work.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <>
      <Intro />
      <Header />
      <main>
        <OysterEmbeddedHero
          label="DESIGNER.HYEONG-O"
          headlineLine1Start="Crafting"
          headlineLine1Highlight="products"
          headlineLine1End="that"
          headlineLine2="feel human"
          description={"제품과 사용자 사이의 공감을 중요하게 생각합니다.\n일상속에서 보고 느끼는 것을 제품에 담아내기 위해 항상 고민합니다."}
          ctaText="Go project"
          onCtaClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
        />
        <About />
        <Work />
        <Contact />
      </main>
      <RiottersFooter
        copyrightYear="2026"
        copyrightText="NOTOFOLIO"
        legalLinks={[]}
        largeLogo="NOTOFOLIO"
      />
    </>
  );
}
