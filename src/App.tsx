/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import PromoBanner from './components/PromoBanner';
import Hero from './components/Hero';
import TemplatesSection from './components/TemplatesSection';
import ChampionshipsSection from './components/ChampionshipsSection';
import EditingPractice from './components/EditingPractice';
import IdealForYou from './components/IdealForYou';
import WhatYouWillReceive from './components/WhatYouWillReceive';
import HighlightsSection from './components/HighlightsSection';
import BonusSection from './components/BonusSection';
import PricingSection from './components/PricingSection';
import WarrantySection from './components/WarrantySection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import LazySection from './components/LazySection';

export default function App() {
  return (
    <main className="bg-[#030303] min-h-screen selection:bg-amber-500 selection:text-black">
      <PromoBanner />
      <Hero />
      <LazySection id="templates-section" minHeight="500px">
        <TemplatesSection />
      </LazySection>
      <LazySection id="championships-section" minHeight="500px">
        <ChampionshipsSection />
      </LazySection>
      <LazySection id="editando-na-pratica" minHeight="500px">
        <EditingPractice />
      </LazySection>
      <LazySection id="ideal-para-voce" minHeight="500px">
        <IdealForYou />
      </LazySection>
      <LazySection id="oque-voce-vai-receber" minHeight="500px">
        <WhatYouWillReceive />
      </LazySection>
      <LazySection id="destaques" minHeight="400px">
        <HighlightsSection />
      </LazySection>
      <LazySection id="bonus-section" minHeight="500px">
        <BonusSection />
      </LazySection>
      <LazySection id="escolha-seu-plano" minHeight="600px">
        <PricingSection />
      </LazySection>
      <LazySection id="garantia" minHeight="400px">
        <WarrantySection />
      </LazySection>
      <LazySection id="faq-section" minHeight="400px">
        <FAQSection />
      </LazySection>
      <LazySection id="footer-section" minHeight="200px">
        <Footer />
      </LazySection>
    </main>
  );
}
