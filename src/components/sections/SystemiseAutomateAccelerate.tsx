import React from 'react';
import { motion } from 'framer-motion';
import { Database, Bot, Gauge, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';

const PILLARS = [
  {
    step: '01',
    word: 'SYSTEMISE',
    subtitle: 'Structural Architecture & Operational Backbone',
    desc: 'Chaos cannot scale. We engineer clean, unified system architectures that consolidate fragmented tools into a synchronized corporate operating system.',
    icon: Database,
    deliverables: [
      'Enterprise ERP & database unification',
      'Centralized data lakes & single source of truth',
      'Security-first Cloudflare Edge deployment',
      'Role-based permissions & audit trails',
    ],
    metric: '100% Unified Data',
  },
  {
    step: '02',
    word: 'AUTOMATE',
    subtitle: 'Zero-Friction Autonomous Workflows',
    desc: 'Human talent should invent and close deals, not copy-paste data. We deploy intelligent AI agents and self-healing pipelines that run business operations automatically.',
    icon: Bot,
    deliverables: [
      'Autonomous B2B agent workflows',
      'Zero-touch document processing & billing',
      'Real-time CRM & pipeline synchronisation',
      'Automated customer lifecycle triggers',
    ],
    metric: '40+ Hours Saved / Wk',
  },
  {
    step: '03',
    word: 'ACCELERATE',
    subtitle: 'Predictable High-Velocity Revenue',
    desc: 'A robust engine means nothing without speed. We build cold outreach infrastructure, high-intent lead generation, and closed-loop telemetry to multiply revenue.',
    icon: Gauge,
    deliverables: [
      'Multi-channel outbound pipeline engines',
      'High-converting digital product experiences',
      'Real-time executive revenue telemetry',
      'Scalable market expansion playbooks',
    ],
    metric: '3.4x Pipeline Velocity',
  },
];

export const SystemiseAutomateAccelerate: React.FC = () => {
  return (
    <Section id="framework" variant="surface" spacing="default" className="border-t border-border">
      <Container>
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <Badge variant="accent" className="mb-4">
            THE 3-STAGE TRANSFORMATION
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-ink tracking-tight mb-6">
            Systemise. Automate. Accelerate.
          </h2>
          <p className="text-ink-secondary text-lg leading-relaxed">
            The proven technical blueprint we use to turn fragmented operations into compounding, autonomous growth engines.
          </p>
        </div>

        {/* 3 Pillars Editorial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white rounded-2xl p-8 sm:p-10 border border-border flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                {/* Step indicator watermark */}
                <div className="absolute top-4 right-6 font-mono text-5xl font-bold text-border/60 pointer-events-none group-hover:text-accent/15 transition-colors">
                  {pillar.step}
                </div>

                <div>
                  <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-accent mb-8">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-bold font-heading text-ink mb-2 tracking-tight">
                    {pillar.word}
                  </h3>
                  <div className="text-xs font-mono text-accent font-semibold uppercase tracking-wider mb-4">
                    {pillar.subtitle}
                  </div>
                  <p className="text-ink-secondary text-sm leading-relaxed mb-8">
                    {pillar.desc}
                  </p>

                  {/* Checklist */}
                  <div className="space-y-3 pt-6 border-t border-border">
                    {pillar.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-ink">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-sans text-ink-secondary">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Metric Pill */}
                <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                  <span className="font-mono text-[11px] text-ink-muted uppercase">Target Metric</span>
                  <span className="font-mono text-xs font-bold text-ink bg-surface px-3 py-1 rounded border border-border">
                    {pillar.metric}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

