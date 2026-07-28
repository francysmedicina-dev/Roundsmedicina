import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { CuradoriaSection } from './components/sections/CuradoriaSection';
import { ProposalSection } from './components/sections/ProposalSection';
import { ContentMockupSection } from './components/sections/ContentMockupSection';
import { FutureVisionSection } from './components/sections/FutureVisionSection';
import { PricingSection } from './components/sections/PricingSection';
import { FAQSection } from './components/sections/FAQSection';
import { FinalCTASection } from './components/sections/FinalCTASection';
import { Footer } from './components/layout/Footer';
import { MobileStickyBar } from './components/layout/MobileStickyBar';
import { ThankYouPage } from './components/ThankYouPage';
import { LegalModal } from './components/ui/LegalModal';

export function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | 'cancellation' | null>(null);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  if (currentPath === '/obrigado') {
    return <ThankYouPage />;
  }

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-blue-600 selection:text-white pt-2">
      {/* Liquid Glass Header Bar */}
      <Navbar />

      {/* Main Sections Flow */}
      <main className="flex-grow">
        <HeroSection />
        <CuradoriaSection />
        <ProposalSection />
        <ContentMockupSection />
        <FutureVisionSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>

      {/* Footer */}
      <Footer onOpenLegalModal={(type) => setLegalModalType(type)} />

      {/* Mobile Sticky Bar */}
      <MobileStickyBar />

      {/* Interactive Legal Modal */}
      <LegalModal 
        isOpen={!!legalModalType} 
        type={legalModalType} 
        onClose={() => setLegalModalType(null)} 
      />
    </div>
  );
}

export default App;
