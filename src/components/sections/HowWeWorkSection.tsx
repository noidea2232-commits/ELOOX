import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Cpu, ShieldCheck, Rocket, CheckCircle2, Clock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';

const PHASES = [
  {
    phase: '01',
    timeframe: 'DAYS 01 – 14',
    title: 'Diagnostic & Architectural Blueprint',
    shortDesc: 'Deep audit of existing tech stacks, process bottlenecks, data fragmentation, and pipeline economics.',
    icon: Compass,
    deliverables: [
      'Comprehensive Technical Debt & Architecture Audit',
      'System Interaction & Entity Relationship Diagrams',
      'Phase-by-phase ROI & Milestone Projection',
      'Cloudflare Edge & Security Readiness Score',
    ],
  },
  {
    phase: '02',
    timeframe: 'WEEKS 03 – 06',
    title: 'Rapid Prototyping & Core Build',
    shortDesc: 'Engineering the critical paths: relational schemas, API routers, modern React interfaces, and core workflow triggers.',
    icon: Cpu,
    deliverables: [
      'Production-ready TypeScript & React frontend implementation',
      'Cloudflare Worker microservices and D1 database bindings',
      'Bi-directional integrations with internal enterprise tools',
      'Weekly staging demo deployments and code reviews',
    ],
  },
  {
    phase: '03',
    timeframe: 'WEEKS 07 – 10',
    title: 'Hardening, Automation & Security Audit',
    shortDesc: 'Autonomous workflow stress-testing, end-to-end encryption verification, and user acceptance testing.',
    icon: ShieldCheck,
    deliverables: [
      'Automated synthetic stress testing & latency profiling',
      'Zero-trust security verification & Turnstile bot defense',
      'Staff onboarding, documentation, and operational playbooks',
      'Automated fallback failover & database backup workflows',
    ],
  },
  {
    phase: '04',
    timeframe: 'ONGOING SCALE',
    title: 'Production Telemetry & Growth Engine',
    shortDesc: 'Continuous deployment, real-time error telemetry, revenue operations management, and ongoing feature iterations.',
    icon: Rocket,
    deliverables: [
      'Sub-minute incident response and edge SLA monitoring',
      'Weekly RevOps pipeline generation reviews & CRM optimization',
      'Continuous feature delivery and incremental system upgrades',
      'Executive quarterly technology roadmap alignment',
    ],
  },
];

export const HowWeWorkSection: React.FC = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);

  return (
    <Section id="methodology" variant="white" spacing="default" className="border-t border-border">
      <Container>
        {/* Editorial Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <Badge variant="default" className="mb-4">
              DELIVERY METHODOLOGY
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-bold font-heading text-ink tracking-tight">
              Predictable execution. Zero guesswork.
            </h2>
          </div>
          <p className="max-w-md text-ink-secondary text-base leading-relaxed">
            Our structured 4-phase engagement framework ensures total transparency, aggressive timelines, and measurable enterprise value.
          </p>
        </div>

        {/* Phase Selector Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {PHASES.map((p, idx) => {
            const isSelected = activePhaseIndex === idx;
            const Icon = p.icon;
            return (
              <button
                key={idx}
                onClick={() => setActivePhaseIndex(idx)}
                className={`p-6 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-ink text-white border-ink shadow-md'
                    : 'bg-surface text-ink border-border hover:border-ink/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-mono text-xs font-bold ${isSelected ? 'text-accent' : 'text-ink-secondary'}`}>
                      PHASE {p.phase}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                      isSelected ? 'bg-white/10 text-white' : 'bg-white border border-border text-ink-muted'
                    }`}>
                      {p.timeframe}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg leading-tight mb-2">
                    {p.title}
                  </h3>
                </div>
                <div className="mt-4 pt-4 border-t border-border/20 flex items-center gap-2">
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-accent' : 'text-ink-muted'}`} />
                  <span className={`text-xs font-mono ${isSelected ? 'text-white/70' : 'text-ink-secondary'}`}>
                    View Deliverables
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Phase Deep Dive */}
        <motion.div
          key={activePhaseIndex}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-surface rounded-3xl p-8 sm:p-12 border border-border"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-accent" />
                <span className="font-mono text-xs text-accent font-semibold tracking-wider">
                  {PHASES[activePhaseIndex].timeframe}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-ink mb-4">
                {PHASES[activePhaseIndex].title}
              </h3>
              <p className="text-ink-secondary text-base leading-relaxed mb-6">
                {PHASES[activePhaseIndex].shortDesc}
              </p>
              <div className="p-4 rounded-xl bg-white border border-border text-xs font-mono text-ink-secondary">
                Rigorous bi-weekly sprint reviews, shared Slack/Teams channel, direct partner-level oversight.
              </div>
            </div>

            <div className="lg:col-span-7">
              <h4 className="font-mono text-xs font-bold text-ink uppercase tracking-wider mb-4">
                Milestone Deliverables &amp; Artifacts
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PHASES[activePhaseIndex].deliverables.map((item, dIdx) => (
                  <div
                    key={dIdx}
                    className="p-4 rounded-xl bg-white border border-border flex items-start gap-3 text-xs text-ink shadow-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-sans">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

