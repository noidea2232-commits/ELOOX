import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Target, 
  Cpu, 
  Code2, 
  TrendingUp, 
  ArrowUpRight, 
  Check, 
  Terminal,
  Layers
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

const SERVICES = [
  {
    id: 'erp',
    number: '01',
    title: 'Business Systems & ERP',
    tagline: 'Orchestrating the Core Enterprise Operating System',
    shortDesc: 'Custom ERP systems, modular relational databases, and enterprise resource planning that centralize multi-department data flows.',
    deliverables: [
      'Tailored ERP architecture for high-complexity workflows',
      'Unified multi-entity accounting & inventory telemetry',
      'Granular RBAC security & immutable audit logging',
      'Real-time executive dashboards with sub-second queries',
    ],
    techStack: ['Cloudflare Workers', 'SQLite / D1', 'PostgreSQL', 'TypeScript', 'Tailwind'],
    metric: '45% Faster Inventory Turnaround',
    icon: Building2,
  },
  {
    id: 'crm',
    number: '02',
    title: 'CRM & Sales Intelligence',
    tagline: 'Precision Pipeline Telemetry & Account Enrichment',
    shortDesc: 'Transforming off-the-shelf CRMs into high-velocity revenue machines with custom integrations, intent enrichment, and closed-loop tracking.',
    deliverables: [
      'Automated prospect data enrichment & firmographic scoring',
      'Bi-directional sync between CRM, product analytics & billing',
      'Predictive churn alerts & customer health score algorithms',
      'Custom pipeline stages with strict SLA governance',
    ],
    techStack: ['HubSpot API', 'Salesforce REST', 'Zod Validation', 'Webhooks', 'Edge KV'],
    metric: '2.8x Sales Rep Capacity',
    icon: Target,
  },
  {
    id: 'ai-automation',
    number: '03',
    title: 'AI & Autonomous Automation',
    tagline: 'Agentic Workflows & Cognitive Task Execution',
    shortDesc: 'Deploying autonomous AI agents, intelligent document extraction, and cross-platform robotic process automation that operate 24/7.',
    deliverables: [
      'Autonomous customer support & triage AI agents',
      'Intelligent PDF / invoice / contract semantic parsers',
      'Event-driven webhook routing & automated error recovery',
      'Custom LLM fine-tuning on proprietary company knowledge',
    ],
    techStack: ['LLM Orchestration', 'Vector Embeddings', 'Cloudflare Workers AI', 'FastAPI'],
    metric: '92% Automated Resolution Rate',
    icon: Cpu,
  },
  {
    id: 'software',
    number: '04',
    title: 'Software & Digital Products',
    tagline: 'Bespoke Web, Mobile & Cloud-Native Platforms',
    shortDesc: 'Full-cycle engineering of commercial-grade web applications, responsive customer portals, and mission-critical SaaS platforms.',
    deliverables: [
      'Modern React & TypeScript frontend architectures',
      'Sub-100ms global edge API endpoints',
      'Resilient multi-tenant SaaS authentication & billing',
      'Offline-first progressive web apps with rich UX',
    ],
    techStack: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Docker', 'GraphQL'],
    metric: '99.98% Edge Uptime SLA',
    icon: Code2,
  },
  {
    id: 'revops',
    number: '05',
    title: 'Revenue Operations (RevOps)',
    tagline: 'Connected Demand Generation & Pipeline Engines',
    shortDesc: 'Full-funnel B2B outbound systems, cold infrastructure, appointment setting pipelines, and conversion rate engineering.',
    deliverables: [
      'Multi-domain cold email infrastructure with 99% inbox placement',
      'Targeted B2B account identification & verified lead data',
      'Qualified appointment setting with pre-vetted decision makers',
      'Comprehensive customer acquisition cost (CAC) analytics',
    ],
    techStack: ['Resend API', 'DNS DMARC/DKIM/SPF', 'Lead Telemetry', 'Apollo API'],
    metric: '310% Qualified Pipeline Growth',
    icon: TrendingUp,
  },
];

export const ServiceDivisionsSection: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];
  const ActiveIcon = activeService.icon;

  return (
    <Section id="services" variant="white" spacing="default" className="border-t border-border">
      <Container>
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <Badge variant="accent" className="mb-4">
              CAPABILITIES &amp; DIVISIONS
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-bold font-heading text-ink tracking-tight">
              Five core service divisions.
            </h2>
          </div>
          <p className="max-w-md text-ink-secondary text-base leading-relaxed">
            Every division is staffed by dedicated senior engineers and growth architects to deliver measurable business outcomes.
          </p>
        </div>

        {/* Asymmetrical Layout: Left List Selector & Right Deep Interactive View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Service Menu (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {SERVICES.map((service) => {
              const isSelected = service.id === selectedServiceId;
              const ServiceIcon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-ink text-white border-ink shadow-md translate-x-2'
                      : 'bg-surface text-ink border-border hover:bg-surface-subtle hover:border-ink/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-accent text-white'
                          : 'bg-white border border-border text-ink group-hover:text-accent'
                      }`}
                    >
                      <ServiceIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[11px] font-mono ${isSelected ? 'text-accent-light' : 'text-ink-muted'}`}>
                          DIVISION {service.number}
                        </span>
                      </div>
                      <div className="font-heading font-bold text-base sm:text-lg">
                        {service.title}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-accent rotate-45' : 'text-ink-muted group-hover:text-ink'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Interactive Service Canvas / Blueprint (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="bg-surface rounded-3xl p-8 sm:p-12 border border-border shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number and Category */}
                  <div className="flex items-center justify-between pb-6 border-b border-border mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center text-accent shadow-sm">
                        <ActiveIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="font-mono text-xs text-accent font-semibold tracking-wider block">
                          DIVISION {activeService.number} SPECIFICATION
                        </span>
                        <h3 className="font-heading font-bold text-2xl text-ink">
                          {activeService.title}
                        </h3>
                      </div>
                    </div>
                    <span className="hidden sm:inline-block font-mono text-xs text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      {activeService.metric}
                    </span>
                  </div>

                  {/* Tagline & Description */}
                  <div className="mb-8">
                    <h4 className="font-mono text-xs font-semibold uppercase text-ink-secondary tracking-wider mb-2">
                      {activeService.tagline}
                    </h4>
                    <p className="text-ink-secondary text-base leading-relaxed">
                      {activeService.shortDesc}
                    </p>
                  </div>

                  {/* Core Deliverables */}
                  <div className="mb-8">
                    <h5 className="font-mono text-xs text-ink-muted uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-accent" />
                      System Deliverables &amp; Artifacts
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeService.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-border text-xs text-ink"
                        >
                          <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="pt-6 border-t border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <Terminal className="w-3.5 h-3.5 text-ink-muted" />
                      <span className="font-mono text-[11px] text-ink-muted uppercase tracking-wider">
                        Production Architecture &amp; Tooling
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeService.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-xs px-3 py-1 bg-white rounded-md border border-border text-ink-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="font-mono text-xs text-ink-secondary">
                    READY FOR SCOPING &amp; DEPLOYMENT
                  </div>
                  <Button
                    variant="dark"
                    size="sm"
                    icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                    onClick={() => {
                      const el = document.getElementById('consultation');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Consult on {activeService.title}
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  );
};

