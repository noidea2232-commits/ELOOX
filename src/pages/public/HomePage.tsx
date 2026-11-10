import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { CompanyIntroSection } from '@/components/sections/CompanyIntroSection';
import { SystemiseAutomateAccelerate } from '@/components/sections/SystemiseAutomateAccelerate';
import { ServiceDivisionsSection } from '@/components/sections/ServiceDivisionsSection';
import { IndustryShowcaseSection } from '@/components/sections/IndustryShowcaseSection';
import { ProductsShowcaseSection } from '@/components/sections/ProductsShowcaseSection';
import { FeaturedProjectsSection } from '@/components/sections/FeaturedProjectsSection';
import { RevenueOperationsSection } from '@/components/sections/RevenueOperationsSection';
import { HowWeWorkSection } from '@/components/sections/HowWeWorkSection';
import { ConsultationCtaSection } from '@/components/sections/ConsultationCtaSection';

export const HomePage: React.FC = () => {
  return (
    <>
      {/* 2 - 5. Hero Section (Headline, Company intro copy, Dual CTAs) */}
      <HeroSection
        onExploreWork={() => {
          document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onStartProject={() => {
          document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 3. Company Introduction & E.L.O.O.X. DNA */}
      <CompanyIntroSection />

      {/* 6. Systemise / Automate / Accelerate section */}
      <SystemiseAutomateAccelerate />

      {/* 7. Five Service Divisions */}
      <ServiceDivisionsSection />

      {/* 8. Industry Showcase */}
      <IndustryShowcaseSection />

      {/* 9. ELOOX Products Showcase */}
      <ProductsShowcaseSection />

      {/* 10. Featured Projects */}
      <FeaturedProjectsSection />

      {/* 11. Revenue Operations Section */}
      <RevenueOperationsSection />

      {/* 12. How We Work */}
      <HowWeWorkSection />

      {/* 13. Consultation CTA */}
      <ConsultationCtaSection />
    </>
  );
};
