import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Terminal, Layers } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const WorkPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filters = ['All', 'Business Systems & ERP', 'Revenue Operations', 'Software & Digital Products'];

  const filteredProjects = selectedFilter === 'All'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((p) => p.serviceCategory === selectedFilter);

  return (
    <div className="pt-28 sm:pt-32 pb-16">
      {/* Header */}
      <Section variant="white" spacing="sm">
        <Container>
          <div className="max-w-4xl">
            <Badge variant="accent" className="mb-4">
              PROVEN DEPLOYMENTS // PORTFOLIO
            </Badge>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading text-ink tracking-tight leading-[1.05] mb-8">
              Engineered systems that deliver measurable business outcomes.
            </h1>
            <p className="text-lg sm:text-xl text-ink-secondary leading-relaxed font-sans max-w-3xl">
              Every case study below represents real production systems constructed by ELOOX. We speak exclusively in verified metrics, architectural blueprints, and quantifiable business outcomes.
            </p>
          </div>
        </Container>
      </Section>

      {/* Filter Tabs */}
      <Section variant="surface" spacing="default" className="border-t border-border">
        <Container>
          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setSelectedFilter(f)}
                className={`px-4 py-2 rounded-full font-mono text-xs transition-colors ${
                  selectedFilter === f
                    ? 'bg-ink text-white font-semibold'
                    : 'bg-white text-ink-secondary hover:text-ink border border-border'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Project Cards Detailed Stream */}
          <div className="space-y-16">
            {filteredProjects.map((project, idx) => (
              <article
                key={project.id}
                id={project.slug}
                className="bg-white rounded-3xl p-8 sm:p-12 border border-border shadow-sm"
              >
                {/* Header row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-border gap-4 mb-8">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-2">
                      <span className="font-mono text-xs text-accent font-semibold uppercase tracking-wider">
                        {project.serviceCategory}
                      </span>
                      <span className="text-ink-muted font-mono text-xs">//</span>
                      <span className="font-mono text-xs text-ink-secondary">
                        {project.industry}
                      </span>
                      <span className="text-ink-muted font-mono text-xs">//</span>
                      <span className="font-mono text-xs text-ink-muted">
                        {project.clientCategory}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-bold font-heading text-ink tracking-tight">
                      {project.title}
                    </h2>
                  </div>
                  <div className="font-mono text-xs text-ink-muted">
                    CASE STUDY 0{idx + 1}
                  </div>
                </div>

                {/* Problem & Solution Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                  <div className="p-6 sm:p-8 rounded-2xl bg-surface/60 border border-border">
                    <span className="font-mono text-xs text-amber-600 font-bold uppercase tracking-wider block mb-2">
                      The Operational Challenge
                    </span>
                    <p className="text-sm text-ink-secondary leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="p-6 sm:p-8 rounded-2xl bg-surface/60 border border-border">
                    <span className="font-mono text-xs text-accent font-bold uppercase tracking-wider block mb-2">
                      The ELOOX Solution Architecture
                    </span>
                    <p className="text-sm text-ink leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Verified Outcomes Grid */}
                <div className="mb-10">
                  <span className="font-mono text-xs text-ink-muted uppercase tracking-wider block mb-4">
                    Verified Production Outcomes:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {project.verifiedOutcomes.map((o, oIdx) => (
                      <div key={oIdx} className="p-5 rounded-2xl bg-surface border border-border">
                        <div className="font-heading font-bold text-2xl sm:text-3xl text-accent mb-1">
                          {o.value}
                        </div>
                        <div className="font-mono text-xs text-ink-secondary">
                          {o.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architecture Highlights & Artifacts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6 border-t border-border mb-8">
                  <div>
                    <h3 className="font-mono text-xs font-bold text-ink uppercase tracking-wider mb-3 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-accent" />
                      Architecture Highlights
                    </h3>
                    <div className="space-y-2">
                      {project.architectureHighlights.map((arch, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2 text-xs text-ink-secondary">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                          <span>{arch}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-mono text-xs font-bold text-ink uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-accent" />
                      System Artifacts Delivered
                    </h3>
                    <div className="space-y-2">
                      {project.systemArtifacts.map((art, artIdx) => (
                        <div key={artIdx} className="flex items-start gap-2 text-xs text-ink-secondary">
                          <span className="w-1.5 h-1.5 rounded-full bg-ink mt-1.5 shrink-0" />
                          <span>{art}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technologies and Action Bar */}
                <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-ink-muted mr-1" />
                    {project.technologies.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-xs px-2.5 py-1 bg-surface rounded border border-border text-ink-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link to="/book">
                    <Button variant="dark" size="sm" icon={<ArrowUpRight className="w-3.5 h-3.5" />}>
                      Request Similar System Scope
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};

