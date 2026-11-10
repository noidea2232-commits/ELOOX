import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, Shield, TrendingUp, Cpu, Workflow } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';

const PHILOSOPHY = [
  {
    letter: 'E',
    word: 'ELEVATE',
    title: 'Elevate Business Capabilities',
    desc: 'We transform standard organizational workflows into high-throughput digital systems that outpace competitors.',
    icon: TrendingUp,
  },
  {
    letter: 'L',
    word: 'LEAD',
    title: 'Lead Market Standards',
    desc: 'Architecting market-leading digital products and technical solutions that establish brand dominance.',
    icon: Compass,
  },
  {
    letter: 'O',
    word: 'OPTIMIZE',
    title: 'Optimize Capital & Workflows',
    desc: 'Eliminating operational bottlenecks, reducing overhead, and maximizing engineering and pipeline ROI.',
    icon: Shield,
  },
  {
    letter: 'O',
    word: 'OPERATE',
    title: 'Operate With Precision',
    desc: 'Deploying autonomous agents, resilient backend infrastructure, and rigorous telemetry that runs 24/7.',
    icon: Workflow,
  },
  {
    letter: 'X',
    word: 'XPLORE',
    title: 'Xplore Technological Frontiers',
    desc: 'Harnessing generative intelligence, edge compute, and predictive data systems to pioneer what’s next.',
    icon: Cpu,
  },
];

export const CompanyIntroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <Section id="company" variant="white" spacing="default" className="border-t border-border">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-20 gap-8">
          <div className="max-w-2xl">
            <Badge variant="default" className="mb-4">
              THE ELOOX ADVANTAGE
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-ink tracking-tight">
              An international technology &amp; growth powerhouse.
            </h2>
          </div>
          <p className="max-w-md text-ink-secondary text-base leading-relaxed">
            ELOOX operates at the intersection of enterprise engineering, autonomous systems, and high-velocity revenue generation.
          </p>
        </div>

        {/* Two Divisions Spotlight (Services vs Products) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Division 1: ELOOX Services */}
          <div className="group relative p-8 sm:p-10 rounded-2xl bg-surface border border-border hover:border-ink/20 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs text-accent font-semibold tracking-wider">
                DIVISION 01 // BESPOKE SOLUTIONS
              </span>
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-border group-hover:bg-ink group-hover:text-white transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-ink mb-4">
              ELOOX Services
            </h3>
            <p className="text-ink-secondary text-base leading-relaxed mb-8">
              End-to-end technology, intelligent automation, custom software, and revenue growth operations built for ambitious enterprises and institutions.
            </p>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
              {['Business Systems & ERP', 'CRM Architecture', 'AI & Automation', 'Digital Products', 'Revenue Ops'].map((item, i) => (
                <span key={i} className="text-xs font-mono px-3 py-1 bg-white rounded-md border border-border text-ink-secondary">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Division 2: ELOOX Products */}
          <div className="group relative p-8 sm:p-10 rounded-2xl bg-bold-bg text-bold-text border border-bold-border shadow-dark-card hover:border-accent/40 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs text-accent-light font-semibold tracking-wider">
                DIVISION 02 // PROPRIETARY IP
              </span>
              <span className="w-8 h-8 rounded-full bg-bold-surface flex items-center justify-center border border-bold-border text-white group-hover:bg-accent transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4">
              ELOOX Products
            </h3>
            <p className="text-bold-muted text-base leading-relaxed mb-8">
              Proprietary SaaS platforms and autonomous orchestration software developed in-house to solve recurring enterprise bottlenecks at scale.
            </p>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-bold-border">
              {['Eloox Flow™', 'Eloox RevPulse™', 'Eloox CoreERP™', 'API Infrastructure'].map((item, i) => (
                <span key={i} className="text-xs font-mono px-3 py-1 bg-bold-surface rounded-md border border-bold-border text-bold-muted">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy Breakdown: E - L - O - O - X */}
        <div className="pt-12 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
            <div>
              <span className="font-mono text-xs text-ink-muted uppercase tracking-widest block mb-2">
                CORE PHILOSOPHY
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-ink">
                The DNA Behind ELOOX
              </h3>
            </div>
            <div className="mt-4 md:mt-0 font-mono text-xs text-ink-secondary">
              SELECT A PILLAR TO EXPLORE
            </div>
          </div>

          {/* Interactive 5-Pillar Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
            {PHILOSOPHY.map((pillar, idx) => {
              const isSelected = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`p-4 sm:p-5 rounded-xl border text-left transition-all duration-200 ${
                    isSelected
                      ? 'bg-ink text-white border-ink shadow-md scale-[1.02]'
                      : 'bg-surface text-ink border-border hover:bg-surface-subtle hover:border-ink/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-2xl sm:text-3xl font-bold font-heading ${isSelected ? 'text-accent' : 'text-ink'}`}>
                      {pillar.letter}
                    </span>
                    <span className={`text-[10px] font-mono ${isSelected ? 'text-white/60' : 'text-ink-muted'}`}>
                      0{idx + 1}
                    </span>
                  </div>
                  <div className="font-mono text-xs font-semibold uppercase tracking-wider">
                    {pillar.word}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Details Card */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-10 rounded-2xl bg-surface/50 border border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-accent font-mono text-xs font-semibold tracking-wider uppercase mb-2">
                <span>PILLAR 0{activeTab + 1} // {PHILOSOPHY[activeTab].word}</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold font-heading text-ink mb-2">
                {PHILOSOPHY[activeTab].title}
              </h4>
              <p className="text-ink-secondary text-base leading-relaxed">
                {PHILOSOPHY[activeTab].desc}
              </p>
            </div>
            <div className="w-14 h-14 rounded-xl bg-white border border-border flex items-center justify-center text-accent shrink-0 shadow-sm">
              {React.createElement(PHILOSOPHY[activeTab].icon, { className: 'w-7 h-7' })}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

