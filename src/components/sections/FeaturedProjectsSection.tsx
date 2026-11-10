import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

const PROJECTS = [
  {
    id: 'erp-logistics',
    title: 'Global Supply Chain & ERP Modernization',
    category: 'Business Systems & ERP',
    industry: 'Small & Medium Business',
    summary: 'Architected a modular ERP replacing 6 disconnected legacy systems for an international freight and warehousing operator, integrating live GPS telemetry and automated billing.',
    metrics: [
      { value: '48%', label: 'Cycle Time Reduction' },
      { value: '$4.2M', label: 'Annual Operational Savings' },
      { value: '100%', label: 'Automated Billing Accuracy' },
    ],
    technologies: ['React', 'TypeScript', 'Cloudflare Workers', 'D1 SQLite', 'Docker'],
    highlights: [
      'Sub-50ms query responses across 1.4 million shipment records',
      'Autonomous invoice generation with automated discrepancy alerts',
      'Zero downtime migration from legacy Microsoft SQL server',
    ],
  },
  {
    id: 'fintech-revops',
    title: 'Autonomous Outbound & B2B Pipeline Engine',
    category: 'Revenue Operations',
    industry: 'High-Growth Startup',
    summary: 'Engineered a full-funnel outbound sales engine combining multi-domain cold infrastructure, AI-driven prospect qualification, and bi-directional CRM orchestration.',
    metrics: [
      { value: '310%', label: 'Qualified Pipeline Growth' },
      { value: '14 Days', label: 'Average Sales Cycle Reduction' },
      { value: '98.8%', label: 'Email Deliverability Rate' },
    ],
    technologies: ['Resend API', 'HubSpot API', 'DMARC / DKIM', 'Cloudflare Edge KV'],
    highlights: [
      'Automated intent enrichment identifying high-propensity buying accounts',
      'Dynamic email personalization scoring based on company filings',
      'Real-time Slack & CRM alert telemetry for sales team bookings',
    ],
  },
  {
    id: 'edu-lifecycle',
    title: 'Multi-Campus Student Lifecycle & Admissions System',
    category: 'Software & Digital Products',
    industry: 'Education & Universities',
    summary: 'Constructed an institutional digital campus platform supporting 65,000+ students across 12 faculties, unifying admissions, academic scheduling, and tuition payments.',
    metrics: [
      { value: '65,000+', label: 'Active Students Handled' },
      { value: '72%', label: 'Drop in Administrative Inquiries' },
      { value: '99.99%', label: 'Exam Portal Peak Uptime' },
    ],
    technologies: ['React 18', 'Tailwind CSS', 'TypeScript', 'Node.js', 'PostgreSQL'],
    highlights: [
      'Instant admissions evaluation workflow reducing review time from 3 weeks to 48 hours',
      'Integrated payment gateway supporting multi-currency tuition reconciliation',
      'Mobile-responsive self-service student and faculty portal',
    ],
  },
];

export const FeaturedProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Business Systems & ERP', 'Revenue Operations', 'Software & Digital Products'];

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedFilter);

  return (
    <Section id="work" variant="white" spacing="default" className="border-t border-border">
      <Container>
        {/* Editorial Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <Badge variant="default" className="mb-4">
              PROVEN OUTCOMES
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-bold font-heading text-ink tracking-tight">
              Featured client systems &amp; deployments.
            </h2>
          </div>
          <p className="max-w-md text-ink-secondary text-base leading-relaxed">
            Real enterprise case studies demonstrating how our architectural decisions directly translate into revenue and efficiency gains.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-full font-mono text-xs transition-colors ${
                selectedFilter === cat
                  ? 'bg-ink text-white font-semibold'
                  : 'bg-surface text-ink-secondary hover:text-ink border border-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-surface rounded-3xl p-8 sm:p-12 border border-border hover:border-ink/20 transition-all shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Project Details (7 cols) */}
                  <div className="lg:col-span-7">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="font-mono text-xs text-accent font-semibold uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-ink-muted font-mono text-xs">//</span>
                      <span className="font-mono text-xs text-ink-secondary">
                        {project.industry}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold font-heading text-ink mb-4">
                      {project.title}
                    </h3>
                    <p className="text-ink-secondary text-base leading-relaxed mb-8">
                      {project.summary}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2.5 mb-8">
                      {project.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs text-ink">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span className="text-ink-secondary font-sans">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-border">
                      {project.technologies.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="font-mono text-xs px-3 py-1 bg-white rounded-md border border-border text-ink-secondary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Verified Metrics Cards (5 cols) */}
                  <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-border flex flex-col justify-between h-full">
                    <div className="font-mono text-xs text-ink-muted uppercase tracking-wider mb-6 pb-3 border-b border-border flex items-center justify-between">
                      <span>VERIFIED OUTCOMES</span>
                      <span className="text-emerald-600 font-semibold">CONFIRMED</span>
                    </div>

                    <div className="space-y-6">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx}>
                          <div className="font-heading font-bold text-3xl sm:text-4xl text-ink tracking-tight">
                            {m.value}
                          </div>
                          <div className="font-mono text-xs text-ink-secondary mt-1">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-border">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-between border border-border hover:bg-surface font-mono text-xs"
                        icon={<ArrowUpRight className="w-4 h-4" />}
                        onClick={() => {
                          const el = document.getElementById('consultation');
                          el?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Request Architecture Spec
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </Section>
  );
};
