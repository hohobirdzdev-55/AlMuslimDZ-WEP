/**
 * AlMuslimDZ – Official Application Website
 * Developed by HOHOBIRDZ DEV © 2026
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroOverview } from './components/IntroOverview';
import { CoreServices } from './components/CoreServices';
import { FeatureDeepDives } from './components/FeatureDeepDives';
import { ScreenshotsGallery } from './components/ScreenshotsGallery';
import { WhyAlMuslimDZ } from './components/WhyAlMuslimDZ';
import { DailyJourney } from './components/DailyJourney';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { Lightbox } from './components/Lightbox';
import { SCREENSHOTS } from './data/screenshots';

export default function App() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleOpenScreenshotById = (id: string) => {
    const idx = SCREENSHOTS.findIndex((s) => s.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    } else {
      setLightboxIndex(0);
    }
  };

  return (
    <div className="min-h-screen bg-[#081d17] text-[#f7f4ed] selection:bg-[#c29b68] selection:text-[#081d17]">
      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      <main>
        {/* 2. Hero Section */}
        <Hero onOpenScreenshot={handleOpenScreenshotById} />

        {/* 3. Brief Introduction / Core Pillars */}
        <IntroOverview />

        {/* 4. Core Verified In-App Services */}
        <CoreServices />

        {/* 5-10. Detailed Feature Sections (Quran, Azkar, Prayer Times, Qibla, Tasbeeh, Zakat) */}
        <FeatureDeepDives onOpenScreenshot={handleOpenScreenshotById} />

        {/* 11. Screenshots Gallery in Android Mockups */}
        <ScreenshotsGallery onOpenScreenshot={handleOpenScreenshotById} />

        {/* 12. Why AlMuslimDZ? Comparison & Value */}
        <WhyAlMuslimDZ />

        {/* 13. Daily User Journey Timeline */}
        <DailyJourney />

        {/* 14. Final Direct APK Download Call to Action */}
        <FinalCta />
      </main>

      {/* 15. Footer */}
      <Footer />

      {/* Full-Screen Interactive Lightbox */}
      <Lightbox
        items={SCREENSHOTS}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
}
