import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Cpu, Workflow } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { SOLUTIONS_DATA } from '@/data/solutionsData';

export const SolutionsPage: React.FC = () => {
  const [selectedSolutionId, setSelectedSolutionId] = useState<string>(SOLUTIONS_DATA[0].id);

  const activeSolution = SOLUTIONS_DATA.find((s) => s.id === selectedSolutionId) || SOLUTIONS_DATA[0];

  return (
    <div className="pt-28 sm:pt-32 pb-16">
      {/* Header */}
      <Section variant="white" spacing="sm">
        <Container>
          <div className="max-w-4xl">
            <Badge variant="accent" className="mb-4">
              CONNECTED BUSINESS SOLUTIONS
            </Badge>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading text-ink tracking-tight leading-[1.05] mb-8">
              Integrated operational solutions built for scale.
            </h1>
            <p className="text-lg sm:text-xl text-ink-secondary leading-relaxed font-sans max-w-3xl">
              Rather than isolated tools that don't communicate, ELOOX solutions link admissions, office operations, sales pipelines, and executive intelligence into cohesive, automated business systems.
            </p>
          </div>
        </Container>
      </Section>

      {/* Solutions Layout: Left Quick Nav & Right Active System View */}
      <Section variant="surface" spacing="default" className="border-t border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Nav Menu (4 cols) */}
            <div className="lg:col-span-4 space-y-2">
              <span className="font-mono text-xs text-ink-muted uppercase tracking-wider block mb-2 px-2">
                All Connected Solutions ({SOLUTIONS_DATA.length})
              </span>
              {SOLUTIONS_DATA.map((sol) => {
                const isSelected = sol.id === selectedSolutionId;
                return (
                  <button
                    key={sol.id}
                    onClick={() => setSelectedSolutionId(sol.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                      isSelected
                        ? 'bg-ink text-white border-ink shadow-md'
                        : 'bg-white text-ink border-border hover:border-ink/20'
                    }`}
                  >
                    <div>
                      <div className={`text-[10px] font-mono uppercase tracking-wider mb-0.5 ${
                        isSelected ? 'text-accent-light' : 'text-ink-muted'
                      }`}>
                        {sol.category}
                      </div>
                      <div className="font-heading font-bold text-sm leading-snug">
                        {sol.title}
                      </div>
                    </div>
                    <ArrowUpRight className={`w-3.5 h-3.5 shrink-0 ${
                      isSelected ? 'text-accent rotate-45' : 'text-ink-muted group-hover:text-ink'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Right Detailed Solution Canvas (8 cols) */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-12 border border-border shadow-sm">
              <div className="pb-6 border-b border-border mb-8">
                <span className="font-mono text-xs text-accent font-semibold tracking-wider uppercase block mb-1">
                  {activeSolution.category}
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold font-heading text-ink tracking-tight mb-2">
                  {activeSolution.title}
                </h2>
                <p className="font-mono text-xs sm:text-sm text-ink-secondary font-medium mb-4">
                  {activeSolution.tagline}
                </p>
                <p className="text-ink-secondary text-base leading-relaxed">
                  {activeSolution.summary}
                </p>
              </div>

              {/* Interconnected Modules Diagram */}
              <div className="mb-10 p-6 rounded-2xl bg-surface border border-border">
                <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold text-ink uppercase tracking-wider">
                  <Workflow className="w-4 h-4 text-accent" />
                  <span>Interconnected System Modules</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {activeSolution.connectedModules.map((mod, idx) => (
                    <div
                      key={idx}
                      className="px-3.5 py-2 rounded-xl bg-white border border-border text-xs font-mono font-medium text-ink shadow-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-border/80 flex items-center gap-2 font-mono text-[11px] text-ink-muted">
                  <Cpu className="w-3.5 h-3.5 text-accent" />
                  <span>Architecture: {activeSolution.architectureDiagramDesc}</span>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="mb-10">
                <h3 className="font-mono text-xs font-bold text-ink uppercase tracking-wider mb-4">
                  Operational &amp; Commercial Benefits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeSolution.benefits.map((b, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-surface/60 border border-border flex items-start gap-2.5 text-xs text-ink"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-sans">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Outcome & Action */}
              <div className="p-6 rounded-2xl bg-bold-bg text-bold-text border border-bold-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-[10px] text-accent-light uppercase tracking-wider block">
                    Observed System Outcome
                  </span>
                  <div className="text-sm font-medium text-white mt-0.5">
                    {activeSolution.typicalOutcome}
                  </div>
                </div>
                <Link to="/book">
                  <Button variant="white" size="sm" icon={<ArrowUpRight className="w-3.5 h-3.5" />}>
                    Scope This Solution
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
