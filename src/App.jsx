import Header from './components/Header.jsx';
import FinAiFinancialServiceHero from './components/registry/fin-ai-financial-service-hero/index.jsx';
import About from './components/About.jsx';
import Work from './components/Work.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <FinAiFinancialServiceHero />
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
