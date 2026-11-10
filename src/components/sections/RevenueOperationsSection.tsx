import React, { useState } from 'react';
import { TrendingUp, Mail, Target, PhoneCall, BarChart3, Shield, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export const RevenueOperationsSection: React.FC = () => {
  // Interactive Pipeline Estimator State
  const [targetAccounts, setTargetAccounts] = useState<number>(1500);
  const [dealValue, setDealValue] = useState<number>(25000);

  // Estimator calculation
  // Typical ELOOX RevOps metrics: 3.5% meeting booking rate, 22% deal close rate
  const estimatedMeetings = Math.round(targetAccounts * 0.035);
  const estimatedDeals = Math.max(1, Math.round(estimatedMeetings * 0.22));
  const estimatedPipeline = Math.round(estimatedMeetings * dealValue);
  const estimatedClosedArr = estimatedDeals * dealValue;

  const REVOPS_PILLARS = [
    {
      title: 'Dedicated Cold Infrastructure',
      desc: 'Secondary domain clusters, automated SPF/DKIM/DMARC protocols, IP warming, and 99%+ deliverability governance.',
      icon: Mail,
    },
    {
      title: 'Intent-Driven Account Sourcing',
      desc: 'Proprietary scraping and enrichment algorithms to target decision-makers actively hiring or deploying software.',
      icon: Target,
    },
    {
      title: 'SDR & Appointment Setting',
      desc: 'High-touch B2B communication playbooks that book vetted discovery calls directly into executive calendars.',
      icon: PhoneCall,
    },
    {
      title: 'Full-Funnel CRM Orchestration',
      desc: 'Seamless ingestion into HubSpot or Salesforce with automated stage tracking, deal scoring, and attribution modeling.',
      icon: BarChart3,
    },
  ];

  return (
    <Section id="revops" variant="dark" spacing="default" className="relative border-t border-bold-border">
      {/* Editorial dark ambient grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

      <Container className="relative z-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <Badge variant="dark" className="border-accent/40 text-accent-light mb-4">
              <TrendingUp className="w-3.5 h-3.5 mr-1" />
              SPECIALIZED DIVISION // REVENUE OPERATIONS
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight">
              Predictable, connected revenue engines.
            </h2>
          </div>
          <p className="max-w-md text-bold-muted text-base leading-relaxed">
            We don’t just write code — we build scalable outbound systems that fill your pipeline with high-intent enterprise buyers month after month.
          </p>
        </div>

        {/* 4 Foundation Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {REVOPS_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-bold-surface p-6 sm:p-8 rounded-2xl border border-bold-border hover:border-accent/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-bold-border flex items-center justify-center text-accent-light mb-6">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-heading text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-bold-muted text-xs sm:text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Interactive Pipeline & ARR Velocity Estimator */}
        <div className="bg-[#0E0E0E] rounded-3xl p-8 sm:p-12 border border-bold-border shadow-dark-card">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-8 border-b border-bold-border gap-6">
            <div>
              <span className="font-mono text-xs text-accent-light tracking-wider uppercase">
                INTERACTIVE SIMULATOR
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-1">
                Estimate Your Revenue Pipeline Velocity
              </h3>
            </div>
            <div className="text-xs font-mono text-bold-muted bg-bold-surface px-3 py-1.5 rounded border border-bold-border">
              Based on conservative benchmark data
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8 items-center">
            {/* Sliders Input (6 cols) */}
            <div className="lg:col-span-6 space-y-8">
              {/* Slider 1: Target Accounts */}
              <div>
                <div className="flex justify-between items-center mb-2 font-mono text-xs">
                  <span className="text-bold-muted uppercase">Target B2B Accounts Reached / Mo</span>
                  <span className="text-white font-bold">{targetAccounts.toLocaleString()} Accounts</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="5000"
                  step="250"
                  value={targetAccounts}
                  onChange={(e) => setTargetAccounts(Number(e.target.value))}
                  className="w-full accent-accent h-2 bg-bold-surface rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-bold-muted mt-1">
                  <span>500</span>
                  <span>2,500</span>
                  <span>5,000</span>
                </div>
              </div>

              {/* Slider 2: Average Deal Value */}
              <div>
                <div className="flex justify-between items-center mb-2 font-mono text-xs">
                  <span className="text-bold-muted uppercase">Average Contract Value (ACV)</span>
                  <span className="text-white font-bold">${dealValue.toLocaleString()} USD</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="5000"
                  value={dealValue}
                  onChange={(e) => setDealValue(Number(e.target.value))}
                  className="w-full accent-accent h-2 bg-bold-surface rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-bold-muted mt-1">
                  <span>$5k</span>
                  <span>$50k</span>
                  <span>$100k</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-bold-muted">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Zero-risk performance guarantees available for qualifying enterprise stacks</span>
              </div>
            </div>

            {/* Calculated Results Display (6 cols) */}
            <div className="lg:col-span-6 bg-bold-surface p-8 rounded-2xl border border-bold-border grid grid-cols-2 gap-6">
              <div>
                <div className="font-mono text-xs text-bold-muted uppercase">Projected Qualified Calls</div>
                <div className="font-heading font-bold text-3xl sm:text-4xl text-white mt-1">
                  {estimatedMeetings} <span className="text-xs font-mono text-accent-light">calls/mo</span>
                </div>
                <div className="text-[11px] text-bold-muted mt-1">
                  Pre-screened decision makers
                </div>
              </div>

              <div>
                <div className="font-mono text-xs text-bold-muted uppercase">Closed Deals (est.)</div>
                <div className="font-heading font-bold text-3xl sm:text-4xl text-emerald-400 mt-1">
                  {estimatedDeals} <span className="text-xs font-mono text-emerald-300">deals/mo</span>
                </div>
                <div className="text-[11px] text-bold-muted mt-1">
                  At 22% discovery close rate
                </div>
              </div>

              <div>
                <div className="font-mono text-xs text-bold-muted uppercase">Monthly Pipeline Added</div>
                <div className="font-heading font-bold text-2xl sm:text-3xl text-white mt-1">
                  ${(estimatedPipeline / 1000).toFixed(0)}k
                </div>
                <div className="text-[11px] text-bold-muted mt-1">
                  Total deal opportunities
                </div>
              </div>

              <div>
                <div className="font-mono text-xs text-bold-muted uppercase">Annual Closed ARR Run-Rate</div>
                <div className="font-heading font-bold text-2xl sm:text-3xl text-accent-light mt-1">
                  ${((estimatedClosedArr * 12) / 1000000).toFixed(2)}M
                </div>
                <div className="text-[11px] text-bold-muted mt-1">
                  Annualized recurring revenue
                </div>
              </div>

              <div className="col-span-2 pt-4 border-t border-bold-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="font-mono text-xs text-bold-muted">Ready to build your revenue engine?</span>
                <Button
                  variant="white"
                  size="sm"
                  icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                  onClick={() => {
                    const el = document.getElementById('consultation');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Schedule RevOps Scoping
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
