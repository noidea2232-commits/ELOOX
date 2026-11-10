import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldCheck, Layers } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { SERVICES_DATA } from '@/data/servicesData';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="pt-28 sm:pt-32 pb-16">
      {/* Breadcrumb & Navigation */}
      <div className="border-b border-border bg-white py-3.5">
        <Container>
          <div className="flex items-center gap-2 font-mono text-xs text-ink-muted">
            <Link to="/services" className="hover:text-ink flex items-center gap-1 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Services</span>
            </Link>
            <span>/</span>
            <span className="text-ink font-semibold">{service.title}</span>
          </div>
        </Container>
      </div>

      {/* Hero */}
      <Section variant="white" spacing="sm">
        <Container>
          <div className="max-w-4xl">
            <Badge variant="accent" className="mb-4">
              DIVISION {service.number} // SPECIFICATION BLUEPRINT
            </Badge>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading text-ink tracking-tight leading-[1.05] mb-6">
              {service.title}
            </h1>
            <p className="font-mono text-xs sm:text-sm text-accent uppercase font-semibold tracking-wider mb-6">
              {service.tagline}
            </p>
            <p className="text-lg sm:text-xl text-ink-secondary leading-relaxed font-sans mb-10 max-w-3xl">
              {service.heroDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link to={`/book?service=${service.slug}`}>
                <Button variant="dark" size="lg" icon={<ArrowUpRight className="w-4 h-4" />}>
                  Consult on {service.title}
                </Button>
              </Link>
              <Link to="/work">
                <Button variant="secondary" size="lg">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Metrics Banner */}
      <div className="border-y border-border bg-surface py-8">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            {service.metrics.map((m, idx) => (
              <div key={idx} className="sm:border-r sm:border-border last:border-none pr-4">
                <div className="font-heading font-bold text-3xl sm:text-4xl text-ink tracking-tight text-accent">
                  {m.value}
                </div>
                <div className="font-mono text-xs text-ink-secondary mt-1">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Sub-Services Deep-Dive */}
      <Section variant="white" spacing="default">
        <Container>
          <div className="max-w-3xl mb-12">
            <Badge variant="default" className="mb-3">
              WHAT IT INCLUDES
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-ink tracking-tight mb-4">
              Comprehensive division capabilities.
            </h2>
            <p className="text-ink-secondary text-base leading-relaxed">
              Every implementation is modular. Deploy individual sub-services or integrate them into a synchronized organizational ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.subServices.map((sub, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-surface border border-border flex flex-col justify-between shadow-sm"
              >
                <div>
                  <span className="font-mono text-[10px] text-ink-muted uppercase tracking-wider block mb-2">
                    CAPABILITY 0{idx + 1}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-ink mb-3">
                    {sub.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-6">
                    {sub.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-border">
                  <span className="font-mono text-[10px] text-ink-muted uppercase tracking-wider block mb-1">
                    Key Features:
                  </span>
                  {sub.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 text-xs text-ink">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span className="text-ink-secondary font-sans leading-snug">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Architecture & Deliverables Grid */}
      <Section variant="surface" spacing="default" className="border-t border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Architecture Highlights */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-border shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-accent" />
                <h3 className="font-heading font-bold text-2xl text-ink">
                  Technical Architecture
                </h3>
              </div>
              <p className="text-ink-secondary text-sm leading-relaxed mb-6">
                Engineered for strict zero-trust security, sub-100ms response times, and resilience against systemic outages.
              </p>
              <div className="space-y-4">
                {service.architecturePoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-ink-secondary pl-3 border-l-2 border-accent">
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="font-mono text-xs text-ink-muted uppercase tracking-wider mb-2">
                  Production Tooling:
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.techStack.map((tech, idx) => (
                    <span key={idx} className="font-mono text-xs px-2.5 py-1 bg-surface rounded border border-border text-ink">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Deliverables Checklist */}
            <div className="bg-bold-bg text-bold-text p-8 sm:p-10 rounded-3xl border border-bold-border shadow-dark-card">
              <div className="flex items-center gap-2 mb-4">
                <Layers className="w-5 h-5 text-accent-light" />
                <h3 className="font-heading font-bold text-2xl text-white">
                  Client Deliverables
                </h3>
              </div>
              <p className="text-bold-muted text-sm leading-relaxed mb-6">
                Full intellectual property, transparent code repositories, and complete documentation provided upon deployment.
              </p>
              <div className="space-y-4">
                {service.deliverables.map((deliv, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-accent-light shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-bold-border">
                <div className="font-mono text-xs text-bold-muted uppercase tracking-wider mb-2">
                  Target Industries:
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.targetIndustries.map((ind, idx) => (
                    <span key={idx} className="font-mono text-xs px-2.5 py-1 bg-bold-surface rounded border border-bold-border text-accent-light">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQs */}
      {service.faqs.length > 0 && (
        <Section variant="white" spacing="default" className="border-t border-border">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="default" className="mb-3">
                  FREQUENT QUESTIONS
                </Badge>
                <h2 className="text-3xl font-bold font-heading text-ink tracking-tight">
                  Everything you need to know.
                </h2>
              </div>

              <div className="space-y-6">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-surface border border-border">
                    <h3 className="font-heading font-bold text-lg text-ink mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-sm text-ink-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Bottom CTA */}
      <Section variant="white" spacing="sm">
        <Container>
          <div className="bg-ink text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
              Ready to scope your {service.title}?
            </h2>
            <p className="text-bold-muted text-base max-w-xl mx-auto mb-8">
              Discuss your specific architecture, data schemas, and deployment targets with a principal engineer.
            </p>
            <Link to={`/book?service=${service.slug}`}>
              <Button variant="white" size="lg" icon={<ArrowUpRight className="w-4 h-4" />}>
                Schedule Architecture Consultation
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
};
