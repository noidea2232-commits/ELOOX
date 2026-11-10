import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Terminal } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { SERVICES_DATA } from '@/data/servicesData';

export const ServicesPage: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-32 pb-16">
      {/* Header */}
      <Section variant="white" spacing="sm">
        <Container>
          <div className="max-w-4xl">
            <Badge variant="accent" className="mb-4">
              CAPABILITIES &amp; DIVISIONS
            </Badge>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading text-ink tracking-tight leading-[1.05] mb-8">
              Five core engineering &amp; growth service divisions.
            </h1>
            <p className="text-lg sm:text-xl text-ink-secondary leading-relaxed font-sans max-w-3xl">
              From mission-critical ERP backbones and autonomous agent workflows to commercial SaaS engineering and outbound pipeline engines, our divisions deliver end-to-end operational mastery.
            </p>
          </div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section variant="surface" spacing="default" className="border-t border-border">
        <Container>
          <div className="space-y-16">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.slug}
                id={service.slug}
                className="bg-white rounded-3xl p-8 sm:p-12 border border-border shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-border gap-4 mb-8">
                    <div>
                      <span className="font-mono text-xs text-accent font-semibold tracking-wider block">
                        DIVISION {service.number} // {service.tagline.toUpperCase()}
                      </span>
                      <h2 className="text-2xl sm:text-4xl font-bold font-heading text-ink tracking-tight mt-1">
                        {service.title}
                      </h2>
                    </div>
                    <div className="flex items-center gap-3">
                      {service.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="text-right">
                          <div className="font-heading font-bold text-xl text-accent">{m.value}</div>
                          <div className="font-mono text-[10px] text-ink-muted">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-ink-secondary text-base sm:text-lg leading-relaxed mb-8 max-w-4xl">
                    {service.heroDescription}
                  </p>

                  {/* Sub-services breakdown */}
                  <div className="mb-8">
                    <h3 className="font-mono text-xs font-bold text-ink uppercase tracking-wider mb-4">
                      Specialized Sub-Services &amp; Capabilities
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {service.subServices.map((sub, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-5 rounded-2xl bg-surface border border-border flex flex-col justify-between"
                        >
                          <div>
                            <h4 className="font-heading font-bold text-base text-ink mb-2">
                              {sub.name}
                            </h4>
                            <p className="text-xs text-ink-secondary leading-relaxed mb-4">
                              {sub.description}
                            </p>
                          </div>
                          <div className="space-y-1.5 pt-3 border-t border-border/60">
                            {sub.capabilities.slice(0, 2).map((cap, cIdx) => (
                              <div key={cIdx} className="flex items-center gap-2 text-[11px] text-ink">
                                <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                                <span className="text-ink-secondary font-sans">{cap}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology Chips */}
                  <div className="pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-ink-muted mr-1" />
                      <span className="font-mono text-[11px] text-ink-muted uppercase mr-2">Tech:</span>
                      {service.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="font-mono text-xs px-2.5 py-1 bg-surface rounded-md border border-border text-ink-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <Link to={`/services/${service.slug}`}>
                        <Button variant="dark" size="sm" icon={<ArrowUpRight className="w-3.5 h-3.5" />}>
                          View Full Division Blueprint
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Bottom CTA */}
      <Section variant="white" spacing="default" className="border-t border-border">
        <Container>
          <div className="bg-bold-bg text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
            <span className="font-mono text-xs text-accent-light uppercase tracking-wider block mb-2">
              BESPOKE ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
              Need a cross-division hybrid system?
            </h2>
            <p className="text-bold-muted text-base max-w-xl mx-auto mb-8">
              We frequently architect integrated solutions combining ERP backbones with AI agents and RevOps pipelines.
            </p>
            <Link to="/book">
              <Button variant="white" size="lg" icon={<ArrowUpRight className="w-4 h-4" />}>
                Book a Scoping Session
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
};
