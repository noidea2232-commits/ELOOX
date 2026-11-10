import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Store, Rocket, Building, ShieldCheck, Zap } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';

const INDUSTRIES = [
  {
    id: 'education',
    title: 'Education & Universities',
    badge: 'CAMPUS & EDTECH SCALE',
    icon: GraduationCap,
    desc: 'Empowering institutions, universities, and multi-campus networks with unified student information systems, automated admissions, and digital campus infrastructure.',
    challenges: [
      'Disjointed student portals and manual registration bottlenecks',
      'Fragmented tuition billing, fee collection, and financial reconciliation',
      'High administrative overhead in accreditation and compliance reports',
    ],
    solutions: [
      'Unified Student Lifecycle ERP with biometric attendance integration',
      'Automated multi-currency payment collection and reconciliation',
      'AI-driven student query resolution and automated timetable dispatch',
    ],
    stats: { label: 'Admissions Processing Time', value: '-65%' },
  },
  {
    id: 'smb',
    title: 'Small & Medium Businesses',
    badge: 'OPERATIONAL EXCELLENCE',
    icon: Store,
    desc: 'Providing ambitious regional businesses with enterprise-grade operational systems, replacing legacy spreadsheets with cloud-native workflows.',
    challenges: [
      'Inventory mismatches between warehouse and sales points',
      'Reliance on tribal knowledge and error-prone manual spreadsheets',
      'Limited visibility into real-time net cash flow and margins',
    ],
    solutions: [
      'Tailored inventory and supply chain tracking synchronized in real time',
      'Automated invoice generation and payment reminder workflows',
      'Executive dashboard delivering live cash flow and profitability telemetry',
    ],
    stats: { label: 'Administrative Hours Saved', value: '35 hrs/wk' },
  },
  {
    id: 'startups',
    title: 'High-Growth Startups',
    badge: 'ZERO TO ONE & BEYOND',
    icon: Rocket,
    desc: 'Partnering with venture-backed founders to rapidly architect production-ready MVPs, scalable edge backends, and predictable customer acquisition funnels.',
    challenges: [
      'Need to deploy production-ready digital products in under 60 days',
      'High churn due to fragile architectures and slow loading times',
      'Difficulty generating high-quality enterprise B2B sales pipelines',
    ],
    solutions: [
      'Cloudflare Edge-first React & TypeScript application architecture',
      'Sub-50ms global API latency with serverless SQLite persistence',
      'Full outbound revenue operations engine delivering vetted founder demos',
    ],
    stats: { label: 'Time-to-Market Acceleration', value: '2.5x' },
  },
  {
    id: 'corporate',
    title: 'Corporate Enterprises',
    badge: 'GOVERNANCE & TELEMETRY',
    icon: Building,
    desc: 'Engineering resilient, compliant, and deeply integrated system solutions for multi-division corporate offices seeking operational agility.',
    challenges: [
      'Siloed departments using unintegrated legacy enterprise software',
      'Complex regulatory reporting and stringent access controls',
      'Slow corporate decision-making due to lagged monthly data reports',
    ],
    solutions: [
      'Enterprise data warehouse synchronization with microservice middleware',
      'SOC2 / GDPR-ready access management and automated audit logs',
      'Real-time executive decision intelligence across all business units',
    ],
    stats: { label: 'Data Sync Latency', value: '< 200ms' },
  },
];

export const IndustryShowcaseSection: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>(INDUSTRIES[0].id);

  const active = INDUSTRIES.find((ind) => ind.id === selectedIndustry) || INDUSTRIES[0];
  const ActiveIcon = active.icon;

  return (
    <Section id="industries" variant="surface" spacing="default" className="border-t border-border">
      <Container>
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <Badge variant="default" className="mb-4">
            SECTORS &amp; VERTICALS
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-ink tracking-tight mb-4">
            Engineered for high-stakes industries.
          </h2>
          <p className="text-ink-secondary text-base sm:text-lg leading-relaxed">
            We adapt our core technological primitives to the exact regulatory, operational, and commercial demands of four primary sectors.
          </p>
        </div>

        {/* 4 Interactive Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {INDUSTRIES.map((ind) => {
            const isSelected = ind.id === selectedIndustry;
            const Icon = ind.icon;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind.id)}
                className={`p-5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-ink text-white border-ink shadow-md'
                    : 'bg-white text-ink border-border hover:border-ink/20'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-accent text-white' : 'bg-surface text-ink'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[10px] font-mono tracking-wider uppercase ${
                      isSelected ? 'text-white/60' : 'text-ink-muted'
                    }`}
                  >
                    SECTOR
                  </span>
                </div>
                <div>
                  <div className="font-heading font-bold text-base sm:text-lg leading-tight mb-1">
                    {ind.title}
                  </div>
                  <div
                    className={`text-[11px] font-mono tracking-tight ${
                      isSelected ? 'text-accent-light' : 'text-ink-secondary'
                    }`}
                  >
                    {ind.badge}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-8 sm:p-12 border border-border shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Column: Summary & Stat */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <ActiveIcon className="w-5 h-5 text-accent" />
                  <span className="font-mono text-xs text-accent font-semibold tracking-wider uppercase">
                    {active.badge}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-ink mb-4">
                  {active.title}
                </h3>
                <p className="text-ink-secondary text-base leading-relaxed mb-8">
                  {active.desc}
                </p>
              </div>

              {/* Verified Metric Badge */}
              <div className="p-6 rounded-2xl bg-surface border border-border">
                <div className="font-mono text-xs text-ink-muted uppercase tracking-wider mb-1">
                  Observed Impact
                </div>
                <div className="font-heading font-bold text-4xl text-ink tracking-tight text-accent">
                  {active.stats.value}
                </div>
                <div className="font-mono text-xs text-ink-secondary mt-1">
                  {active.stats.label}
                </div>
              </div>
            </div>

            {/* Right Column: Problem vs Solution Blueprint */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-surface/50 p-6 sm:p-8 rounded-2xl border border-border">
              {/* Bottlenecks */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <h4 className="font-mono text-xs font-bold text-ink uppercase tracking-wider">
                    Common Friction Points
                  </h4>
                </div>
                <ul className="space-y-3">
                  {active.challenges.map((c, i) => (
                    <li key={i} className="text-xs text-ink-secondary leading-relaxed pl-3 border-l-2 border-amber-300">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ELOOX Solutions */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <h4 className="font-mono text-xs font-bold text-ink uppercase tracking-wider">
                    The ELOOX Solution
                  </h4>
                </div>
                <ul className="space-y-3">
                  {active.solutions.map((s, i) => (
                    <li key={i} className="text-xs text-ink leading-relaxed pl-3 border-l-2 border-accent">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Section>
  );
};
