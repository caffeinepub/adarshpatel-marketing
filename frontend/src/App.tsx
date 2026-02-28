import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DairyFeedSection from './components/DairyFeedSection';
import AgriInputsSection from './components/AgriInputsSection';
import CoffeeTradingSection from './components/CoffeeTradingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <DairyFeedSection />
        <AgriInputsSection />
        <CoffeeTradingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
