import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, Zap, Cpu, Compass, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export const AboutPage: React.FC = () => {
  const PHILOSOPHY = [
    { letter: 'E', word: 'ELEVATE', desc: 'Raise business capabilities beyond conventional limits through modular engineering.' },
    { letter: 'L', word: 'LEAD', desc: 'Define industry standards with category-defining digital products and architectures.' },
    { letter: 'O', word: 'OPTIMIZE', desc: 'Maximize performance, capital allocation, and workflow throughput continuously.' },
    { letter: 'O', word: 'OPERATE', desc: 'Flawless autonomous execution powered by 24/7 intelligent agentic pipelines.' },
    { letter: 'X', word: 'XPLORE', desc: 'Pioneer the technological frontier with edge computing and predictive systems.' },
  ];

  return (
    <div className="pt-28 sm:pt-32 pb-16">
      {/* Hero Section */}
      <Section variant="white" spacing="sm">
        <Container>
          <div className="max-w-4xl">
            <Badge variant="accent" className="mb-4">
              ABOUT ELOOX // INTERNATIONAL TECHNOLOGY &amp; GROWTH
            </Badge>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading text-ink tracking-tight leading-[1.05] mb-8">
              We build intelligent business systems and scalable revenue engines.
            </h1>
            <p className="text-lg sm:text-xl text-ink-secondary leading-relaxed font-sans max-w-3xl">
              ELOOX is an international technology and growth company operating at the intersection of enterprise software engineering, autonomous system automation, and connected revenue operations.
            </p>
          </div>
        </Container>
      </Section>

      {/* The Dual Engine: Services & Products */}
      <Section variant="surface" spacing="default" className="border-t border-border">
        <Container>
          <div className="mb-12">
            <Badge variant="default" className="mb-3">
              OPERATING MODEL
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-ink tracking-tight">
              Two interconnected divisions. One standard of excellence.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Division 1: ELOOX Services */}
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-border shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-accent font-semibold tracking-wider block mb-2">
                  DIVISION 01 // BESPOKE ENGINEERING
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-ink mb-4">
                  ELOOX Services
                </h3>
                <p className="text-ink-secondary text-base leading-relaxed mb-6">
                  Direct partnership with enterprises, institutions, and venture-backed founders to architect and deploy mission-critical systems, custom ERPs, and outbound revenue operations engines.
                </p>
                <div className="space-y-3 pt-4 border-t border-border">
                  {[
                    'Business Systems & Custom ERPs',
                    'CRM & Sales Pipeline Intelligence',
                    'Cognitive AI Agents & Workflow Automation',
                    'Commercial Digital Products & Web Applications',
                    'Outbound B2B Revenue Operations (RevOps)',
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-ink">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <Link to="/services">
                  <Button variant="dark" size="sm" icon={<ArrowUpRight className="w-3.5 h-3.5" />}>
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>

            {/* Division 2: ELOOX Products */}
            <div className="bg-bold-bg text-bold-text p-8 sm:p-12 rounded-3xl border border-bold-border shadow-dark-card flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-accent-light font-semibold tracking-wider block mb-2">
                  DIVISION 02 // PROPRIETARY IP
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4">
                  ELOOX Products
                </h3>
                <p className="text-bold-muted text-base leading-relaxed mb-6">
                  In-house software platforms developed on Cloudflare Edge architecture to solve recurring operational friction points: workflow orchestration, pipeline forecasting, and modular enterprise management.
                </p>
                <div className="space-y-3 pt-4 border-t border-bold-border">
                  {[
                    'Eloox Flow™ — Autonomous Event Orchestrator',
                    'Eloox RevPulse™ — Predictive Revenue Telemetry',
                    'Eloox CoreERP™ — Modular Edge Enterprise OS',
                  ].map((p, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-white/90">
                      <Zap className="w-4 h-4 text-accent-light shrink-0" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-bold-border">
                <Link to="/products">
                  <Button variant="white" size="sm" icon={<ArrowUpRight className="w-3.5 h-3.5" />}>
                    View Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Brand DNA Section */}
      <Section variant="white" spacing="default" className="border-t border-border">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div>
              <Badge variant="default" className="mb-4">
                BRAND PHILOSOPHY
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-bold font-heading text-ink tracking-tight">
                The DNA behind the ELOOX name.
              </h2>
            </div>
            <p className="max-w-md text-ink-secondary text-base leading-relaxed">
              Every system we build and every line of code we ship is guided by our foundational five-letter operating philosophy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PHILOSOPHY.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-surface border border-border flex flex-col justify-between h-full hover:border-ink/20 transition-colors"
              >
                <div>
                  <div className="text-4xl font-bold font-heading text-accent mb-2">
                    {item.letter}
                  </div>
                  <div className="font-mono text-xs font-semibold text-ink tracking-wider uppercase mb-3">
                    {item.word}
                  </div>
                  <p className="text-xs text-ink-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border text-[10px] font-mono text-ink-muted">
                  PHASE 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Engineering Standards */}
      <Section variant="surface" spacing="default" className="border-t border-border">
        <Container>
          <div className="max-w-3xl mb-12">
            <Badge variant="accent" className="mb-4">
              ARCHITECTURAL PRINCIPLES
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-ink tracking-tight mb-4">
              How we approach technology.
            </h2>
            <p className="text-ink-secondary text-base leading-relaxed">
              We reject bloated, fragile agency templates and cumbersome legacy monolithic software. We construct resilient, edge-first digital infrastructure designed to compound in value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
              <Cpu className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-heading font-bold text-xl text-ink mb-2">
                Decoupled &amp; Edge-Native
              </h3>
              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                All public assets and APIs run globally across Cloudflare edge data centers with sub-50ms latency and high availability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
              <ShieldCheck className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-heading font-bold text-xl text-ink mb-2">
                Zero-Trust Security
              </h3>
              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                Strict parameterized schemas, Turnstile bot defense, immutable audit logging, and hardware-key authentication support.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
              <Compass className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-heading font-bold text-xl text-ink mb-2">
                Outcomes Over Features
              </h3>
              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                We do not bill for vanity hours. We measure success by cycle time reductions, automated hours saved, and closed revenue pipeline.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Global Presence */}
      <Section variant="white" spacing="default" className="border-t border-border">
        <Container>
          <div className="bg-ink text-white rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="font-mono text-xs text-accent-light tracking-wider uppercase block mb-3">
                  INTERNATIONAL DELIVERY
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight mb-4">
                  Global capability. Local precision.
                </h2>
                <p className="text-bold-muted text-base leading-relaxed mb-8 max-w-xl">
                  With distributed hubs in the UK, United States, United Arab Emirates, and India, our principal architects and engineering teams deliver 24/7 technical operations worldwide.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-bold-border font-mono text-xs">
                  <div>
                    <div className="text-white font-bold text-sm">London</div>
                    <div className="text-bold-muted">United Kingdom</div>
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">San Francisco</div>
                    <div className="text-bold-muted">California, USA</div>
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Dubai</div>
                    <div className="text-bold-muted">United Arab Emirates</div>
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Bengaluru</div>
                    <div className="text-bold-muted">Karnataka, India</div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col items-start lg:items-end">
                <Link to="/book">
                  <Button variant="white" size="lg" icon={<ArrowUpRight className="w-4 h-4" />}>
                    Schedule Executive Discovery
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
