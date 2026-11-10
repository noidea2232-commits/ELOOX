import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Workflow, Sparkles, Database, ArrowUpRight, Activity } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

const PRODUCTS = [
  {
    id: 'flow',
    name: 'Eloox Flow™',
    category: 'AUTONOMOUS WORKFLOW ORCHESTRATION',
    tagline: 'Connect every business tool with self-healing event triggers.',
    status: 'Private Beta',
    description: 'An enterprise event-driven automation platform that bridges legacy systems with AI agents, executing complex multi-step approvals and data transformations in milliseconds.',
    features: [
      'Visual low-code workflow graph with raw TypeScript escape hatches',
      'Autonomous error-handling and automated retry loops',
      'Enterprise webhook multiplexing and replay buffer',
      'End-to-end cryptographic audit logs for strict compliance',
    ],
    metric: '< 4ms Event Propagation',
    icon: Workflow,
    color: '#0066FF',
    previewCode: `// Eloox Flow — Self-Healing Event Trigger
flow.on('order.created', async (event, ctx) => {
  const verified = await ctx.verifyInventory(event.items);
  if (!verified) return ctx.triggerReorderPipeline(event);
  await ctx.aiAgent.processInvoice(event.customer);
  return { status: 'DISPATCHED', latency: '3.8ms' };
});`,
  },
  {
    id: 'revpulse',
    name: 'Eloox RevPulse™',
    category: 'PREDICTIVE REVENUE TELEMETRY',
    tagline: 'Real-time pipeline intelligence and deal risk mitigation.',
    status: 'Early Access',
    description: 'Predictive revenue operations dashboard that analyzes sales touchpoints, inbound lead intent, and account engagement to forecast closed ARR with 94% accuracy.',
    features: [
      'Automated deal velocity scoring & stall detection alerts',
      'Multi-touch attribution across all B2B acquisition channels',
      'Bi-directional sync with HubSpot, Salesforce & Stripe',
      'Executive forecast simulation engine with Monte Carlo projections',
    ],
    metric: '94.2% Forecast Precision',
    icon: Activity,
    color: '#10B981',
    previewCode: `// Eloox RevPulse — Forecast Telemetry
const pipelineTelemetry = await revPulse.analyze({
  quarter: 'Q4-2026',
  pipelineValue: '$14.2M',
  winProbabilityModel: 'ENHANCED_BAYESIAN'
});
// Output: Confident Close: $11.8M (±3.2%)`,
  },
  {
    id: 'coreerp',
    name: 'Eloox CoreERP™',
    category: 'MODULAR ENTERPRISE OPERATING SYSTEM',
    tagline: 'Lightweight, ultra-fast ERP for modern distributed operations.',
    status: 'In Development',
    description: 'A modular cloud-native ERP built specifically on Cloudflare Edge infrastructure. Instant load times, zero bloat, and infinite scalability without legacy database locks.',
    features: [
      'Modular sub-systems: Procurement, HR, Assets, Inventory, Billing',
      'Global edge database distribution with sub-50ms reads',
      'Custom schema generator with automatic type-safe APIs',
      'Granular multi-tenant RBAC with hardware key 2FA support',
    ],
    metric: '10x Faster Than Legacy ERPs',
    icon: Database,
    color: '#8B5CF6',
    previewCode: `// Eloox CoreERP — Modular Entity Schema
export const EnterpriseSchema = defineERP({
  modules: ['Accounting', 'GlobalInventory', 'HR_Portal'],
  edgeReplication: 'GLOBAL_CONSISTENT',
  auth: { mfa: 'FIDO2_REQUIRED', sessionDuration: '12h' }
});`,
  },
];

export const ProductsShowcaseSection: React.FC = () => {
  const [activeProductId, setActiveProductId] = useState<string>(PRODUCTS[0].id);

  const activeProduct = PRODUCTS.find((p) => p.id === activeProductId) || PRODUCTS[0];
  const Icon = activeProduct.icon;

  return (
    <Section id="products" variant="dark" spacing="default" className="relative border-t border-bold-border">
      {/* Background dark grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-40 pointer-events-none" />

      <Container className="relative z-10">
        {/* Editorial Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <Badge variant="dark" className="border-accent/40 text-accent-light mb-4">
              <Sparkles className="w-3.5 h-3.5 mr-1" />
              ELOOX PRODUCTS // PROPRIETARY IP
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight">
              Software built to power modern enterprises.
            </h2>
          </div>
          <p className="max-w-md text-bold-muted text-base leading-relaxed">
            In addition to custom client engineering, we build and maintain our own proprietary SaaS tools for workflow orchestration and revenue operations.
          </p>
        </div>

        {/* Product Navigation Pills */}
        <div className="flex flex-wrap gap-3 mb-10 pb-4 border-b border-bold-border">
          {PRODUCTS.map((prod) => {
            const isSelected = prod.id === activeProductId;
            return (
              <button
                key={prod.id}
                onClick={() => setActiveProductId(prod.id)}
                className={`px-5 py-3 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2.5 ${
                  isSelected
                    ? 'bg-white text-ink font-bold shadow-glow scale-[1.02]'
                    : 'bg-bold-surface text-bold-muted border border-bold-border hover:text-white hover:border-white/20'
                }`}
              >
                <span>{prod.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded ${
                  isSelected ? 'bg-ink/10 text-ink' : 'bg-white/5 text-bold-muted'
                }`}>
                  {prod.status}
                </span>
              </button>
            );
          })}
        </div>

        {/* Product Spotlight Showcase Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Left Product Overview (6 cols) */}
            <div className="lg:col-span-6 bg-bold-surface p-8 sm:p-12 rounded-3xl border border-bold-border flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-bold-border flex items-center justify-center text-accent-light">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent-light">
                    {activeProduct.metric}
                  </span>
                </div>

                <div className="font-mono text-xs text-accent-light font-semibold tracking-wider uppercase mb-2">
                  {activeProduct.category}
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-3">
                  {activeProduct.name}
                </h3>
                <p className="text-white/80 font-medium text-base mb-4">
                  {activeProduct.tagline}
                </p>
                <p className="text-bold-muted text-sm leading-relaxed mb-8">
                  {activeProduct.description}
                </p>

                {/* Features Checklist */}
                <div className="space-y-3 pt-6 border-t border-bold-border">
                  {activeProduct.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-white/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-light mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="mt-8 pt-6 border-t border-bold-border flex items-center justify-between">
                <span className="font-mono text-xs text-bold-muted">Status: {activeProduct.status}</span>
                <Button
                  variant="white"
                  size="sm"
                  icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                  onClick={() => {
                    const el = document.getElementById('consultation');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Request Early Access
                </Button>
              </div>
            </div>

            {/* Right Interactive Code / Architecture HUD (6 cols) */}
            <div className="lg:col-span-6 bg-[#0E0E0E] p-6 sm:p-8 rounded-3xl border border-bold-border font-mono flex flex-col justify-between">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-bold-border mb-6 text-xs text-bold-muted">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-[11px] text-white/60">
                    {activeProduct.id}.config.ts
                  </span>
                </div>
                <span className="text-[10px] text-accent-light bg-accent/10 px-2 py-0.5 rounded">
                  CLOUDFLARE_WORKER_RUNTIME
                </span>
              </div>

              {/* Code display */}
              <div className="overflow-x-auto text-xs sm:text-sm text-white/90 leading-relaxed font-mono bg-black/40 p-4 rounded-xl border border-white/5 my-auto">
                <pre>
                  <code>{activeProduct.previewCode}</code>
                </pre>
              </div>

              {/* Simulated System Stats */}
              <div className="pt-6 border-t border-bold-border grid grid-cols-3 gap-4 text-center mt-6">
                <div>
                  <div className="text-[10px] text-bold-muted uppercase">Global PoPs</div>
                  <div className="text-white font-bold text-sm sm:text-base mt-0.5">320+ Cities</div>
                </div>
                <div>
                  <div className="text-[10px] text-bold-muted uppercase">Cold Start</div>
                  <div className="text-emerald-400 font-bold text-sm sm:text-base mt-0.5">&lt; 0ms</div>
                </div>
                <div>
                  <div className="text-[10px] text-bold-muted uppercase">Encryption</div>
                  <div className="text-accent-light font-bold text-sm sm:text-base mt-0.5">TLS 1.3 / AES</div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Section>
  );
};
