import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, GraduationCap, Store, Rocket, Building, ShieldCheck, AlertCircle } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { INDUSTRIES_DATA } from '@/data/industriesData';

export const IndustriesPage: React.FC = () => {
  const [activeSlug, setActiveSlug] = useState<string>(INDUSTRIES_DATA[0].slug);

  const activeIndustry = INDUSTRIES_DATA.find((ind) => ind.slug === activeSlug) || INDUSTRIES_DATA[0];

  const getIcon = (slug: string) => {
    switch (slug) {
      case 'education': return GraduationCap;
      case 'small-medium-businesses': return Store;
      case 'startups': return Rocket;
      case 'corporate-offices': return Building;
      default: return Building;
    }
  };

  return (
    <div className="pt-28 sm:pt-32 pb-16">
      {/* Header */}
      <Section variant="white" spacing="sm">
        <Container>
          <div className="max-w-4xl">
            <Badge variant="accent" className="mb-4">
              TARGET SECTORS &amp; VERTICALS
            </Badge>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading text-ink tracking-tight leading-[1.05] mb-8">
              Engineered for the distinct demands of high-stakes industries.
            </h1>
            <p className="text-lg sm:text-xl text-ink-secondary leading-relaxed font-sans max-w-3xl">
              Generic software fails when operational stakes are high. We calibrate our core architectural primitives to the exact regulatory, security, and velocity requirements of four primary sectors.
            </p>
          </div>
        </Container>
      </Section>

      {/* Industry Tabs Selector */}
      <Section variant="surface" spacing="sm" className="border-t border-border">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {INDUSTRIES_DATA.map((ind) => {
              const isSelected = ind.slug === activeSlug;
              const Icon = getIcon(ind.slug);
              return (
                <button
                  key={ind.slug}
                  onClick={() => setActiveSlug(ind.slug)}
                  className={`p-6 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-ink text-white border-ink shadow-md scale-[1.01]'
                      : 'bg-white text-ink border-border hover:border-ink/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-accent text-white' : 'bg-surface text-ink'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`font-mono text-[10px] tracking-wider uppercase ${
                      isSelected ? 'text-accent-light' : 'text-ink-muted'
                    }`}>
                      SECTOR
                    </span>
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-lg leading-tight mb-1">
                      {ind.name}
                    </h2>
                    <span className={`font-mono text-[10px] tracking-tight ${
                      isSelected ? 'text-white/70' : 'text-ink-secondary'
                    }`}>
                      {ind.badge}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Deep-Dive Active Panel */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-border shadow-sm">
            {/* Top Headline & Tagline */}
            <div className="pb-8 border-b border-border mb-10">
              <span className="font-mono text-xs text-accent font-semibold tracking-wider block mb-2 uppercase">
                {activeIndustry.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-ink tracking-tight mb-3">
                {activeIndustry.heroHeadline}
              </h2>
              <p className="font-mono text-xs sm:text-sm text-ink-secondary font-medium mb-4">
                {activeIndustry.tagline}
              </p>
              <p className="text-ink-secondary text-base leading-relaxed max-w-4xl">
                {activeIndustry.description}
              </p>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-10 border-b border-border mb-10">
              {activeIndustry.metrics.map((m, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-surface border border-border">
                  <div className="font-heading font-bold text-3xl sm:text-4xl text-accent mb-1">
                    {m.value}
                  </div>
                  <div className="font-mono text-xs text-ink-secondary">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Problem vs Solution Split */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Friction Points */}
              <div className="bg-surface/50 p-6 sm:p-8 rounded-2xl border border-border">
                <div className="flex items-center gap-2 mb-6 text-amber-600 font-mono text-xs font-bold uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4" />
                  <span>Common Operational Bottlenecks</span>
                </div>
                <div className="space-y-4">
                  {activeIndustry.keyChallenges.map((c, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white border border-border">
                      <h4 className="font-heading font-bold text-sm text-ink mb-1">
                        {c.title}
                      </h4>
                      <p className="text-xs text-ink-secondary leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ELOOX Solutions */}
              <div className="bg-surface/50 p-6 sm:p-8 rounded-2xl border border-border">
                <div className="flex items-center gap-2 mb-6 text-accent font-mono text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>The ELOOX Solution Blueprint</span>
                </div>
                <div className="space-y-4">
                  {activeIndustry.tailoredSolutions.map((s, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white border border-border">
                      <h4 className="font-heading font-bold text-sm text-ink mb-1">
                        {s.title}
                      </h4>
                      <p className="text-xs text-ink-secondary leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Case Study Feature Box */}
            <div className="p-8 rounded-2xl bg-bold-bg text-bold-text border border-bold-border shadow-dark-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-accent-light font-mono text-xs uppercase tracking-wider mb-2">
                  <span>VERIFIED CASE STUDY // {activeIndustry.name}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-2">
                  {activeIndustry.caseStudyPreview.title}
                </h3>
                <p className="text-bold-muted text-xs sm:text-sm leading-relaxed mb-3">
                  {activeIndustry.caseStudyPreview.summary}
                </p>
                <div className="font-mono text-xs text-emerald-400 font-semibold">
                  OUTCOME: {activeIndustry.caseStudyPreview.result}
                </div>
              </div>
              <div className="shrink-0">
                <Link to="/work">
                  <Button variant="white" size="sm" icon={<ArrowUpRight className="w-3.5 h-3.5" />}>
                    Explore All Case Studies
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
