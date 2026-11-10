import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { PRODUCTS_DATA } from '@/data/productsData';

export const ProductsPage: React.FC = () => {
  const [selectedProductId, setSelectedProductId] = useState<string>(PRODUCTS_DATA[0].id);

  const activeProduct = PRODUCTS_DATA.find((p) => p.id === selectedProductId) || PRODUCTS_DATA[0];

  const getStatusBadge = (status: 'Live' | 'Beta' | 'Coming Soon') => {
    switch (status) {
      case 'Live':
        return <span className="px-2.5 py-1 text-xs font-mono font-semibold rounded-md bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">LIVE</span>;
      case 'Beta':
        return <span className="px-2.5 py-1 text-xs font-mono font-semibold rounded-md bg-accent/10 text-accent border border-accent/20">BETA</span>;
      case 'Coming Soon':
        return <span className="px-2.5 py-1 text-xs font-mono font-semibold rounded-md bg-amber-500/10 text-amber-600 border border-amber-500/20">COMING SOON</span>;
    }
  };

  return (
    <div className="pt-28 sm:pt-32 pb-16">
      {/* Header */}
      <Section variant="white" spacing="sm">
        <Container>
          <div className="max-w-4xl">
            <Badge variant="accent" className="mb-4">
              PROPRIETARY SAAS &amp; SOFTWARE PLATFORMS
            </Badge>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading text-ink tracking-tight leading-[1.05] mb-8">
              Software built to power modern business systems.
            </h1>
            <p className="text-lg sm:text-xl text-ink-secondary leading-relaxed font-sans max-w-3xl">
              In addition to custom client engineering, ELOOX designs and operates its own suite of proprietary SaaS platforms engineered for workflow orchestration, revenue intelligence, and modular enterprise resource planning.
            </p>
          </div>
        </Container>
      </Section>

      {/* Product Selection Tabs */}
      <Section variant="surface" spacing="sm" className="border-t border-border">
        <Container>
          <div className="flex flex-wrap gap-3 mb-10 pb-4 border-b border-border">
            {PRODUCTS_DATA.map((prod) => {
              const isSelected = prod.id === selectedProductId;
              return (
                <button
                  key={prod.id}
                  onClick={() => setSelectedProductId(prod.id)}
                  className={`px-5 py-3 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-3 ${
                    isSelected
                      ? 'bg-ink text-white font-bold shadow-md scale-[1.01]'
                      : 'bg-white text-ink-secondary border border-border hover:border-ink/20 hover:text-ink'
                  }`}
                >
                  <span>{prod.name}</span>
                  {getStatusBadge(prod.status)}
                </button>
              );
            })}
          </div>

          {/* Active Product Detailed View */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-border shadow-sm mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Product Info & Features (7 cols) */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-accent font-semibold uppercase tracking-wider">
                    {activeProduct.category}
                  </span>
                  {getStatusBadge(activeProduct.status)}
                </div>

                <h2 className="text-3xl sm:text-5xl font-bold font-heading text-ink tracking-tight mb-3">
                  {activeProduct.name}
                </h2>
                <p className="text-lg text-ink font-medium leading-relaxed mb-4">
                  {activeProduct.tagline}
                </p>
                <p className="text-ink-secondary text-base leading-relaxed mb-8">
                  {activeProduct.description}
                </p>

                {/* Features Checklist */}
                <div className="space-y-3 mb-8">
                  <h3 className="font-mono text-xs font-bold text-ink uppercase tracking-wider mb-2">
                    Key Architectural Capabilities
                  </h3>
                  {activeProduct.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-ink-secondary font-sans leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Technical Specs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-border mb-8">
                  {activeProduct.specs.map((s, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-surface border border-border">
                      <div className="font-mono text-[10px] text-ink-muted uppercase">{s.label}</div>
                      <div className="font-mono text-xs font-bold text-ink mt-0.5">{s.value}</div>
                    </div>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="flex flex-wrap items-center gap-4">
                  <Link to={activeProduct.demoLink}>
                    <Button variant="dark" size="md" icon={<ArrowUpRight className="w-4 h-4" />}>
                      Request Demo or Early Access
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="ghost" size="md" className="border border-border">
                      Contact Product Team
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Column: Live UI Telemetry Preview Mockup (5 cols) */}
              <div className="lg:col-span-5 bg-[#0A0A0A] text-white p-6 sm:p-8 rounded-3xl border border-bold-border shadow-dark-card font-mono">
                {/* Window Header */}
                <div className="flex items-center justify-between pb-4 border-b border-bold-border mb-6 text-xs text-bold-muted">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-[11px] text-white/70">
                      {activeProduct.slug}.telemetry
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    LIVE STREAM
                  </span>
                </div>

                <div className="text-xs text-bold-muted uppercase tracking-wider mb-2">
                  {activeProduct.uiPreviewDetails.dashboardTitle}
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {activeProduct.uiPreviewDetails.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-bold-surface border border-bold-border">
                      <div className="text-[10px] text-bold-muted truncate">{m.label}</div>
                      <div className="text-base font-bold text-white mt-0.5">{m.value}</div>
                      <div className="text-[10px] text-accent-light mt-0.5">{m.change}</div>
                    </div>
                  ))}
                </div>

                {/* Simulated Log Stream */}
                <div>
                  <div className="text-[10px] text-bold-muted uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span>Recent Event Buffer</span>
                    <span className="text-white/40">200 OK</span>
                  </div>
                  <div className="space-y-2 bg-black/60 p-3 rounded-xl border border-white/5 text-[11px] max-h-48 overflow-y-auto">
                    {activeProduct.uiPreviewDetails.recentLogs.map((log, idx) => (
                      <div key={idx} className="flex flex-col border-b border-white/5 last:border-none pb-1.5 last:pb-0">
                        <div className="flex items-center justify-between text-bold-muted text-[10px]">
                          <span>{log.timestamp}</span>
                          <span className="text-accent-light font-semibold">{log.status}</span>
                        </div>
                        <div className="text-white/80 font-mono text-[10px] truncate mt-0.5">
                          &gt; {log.event}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
