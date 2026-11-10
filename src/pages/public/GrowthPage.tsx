import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  CheckCircle2
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export const GrowthPage: React.FC = () => {
  const [targetAccounts, setTargetAccounts] = useState<number>(2000);
  const [contractValue, setContractValue] = useState<number>(30000);

  const estimatedCalls = Math.round(targetAccounts * 0.035);
  const estimatedClosedDeals = Math.max(1, Math.round(estimatedCalls * 0.22));
  const estimatedQuarterlyPipeline = Math.round(estimatedCalls * contractValue);
  const estimatedAnnualArr = estimatedClosedDeals * contractValue * 12;

  const PILLARS = [
    {
      title: 'Performance Marketing',
      tagline: 'High-intent B2B search and account-based advertising.',
      desc: 'Precision PPC campaigns across Google and LinkedIn ABM targeting buyers actively evaluating operational software solutions.',
      capabilities: ['Negative keyword governance', 'In-market account matching', 'Custom conversion landing pages', 'Real-time cost-per-pipeline tracking'],
    },
    {
      title: 'Lead Generation',
      tagline: 'Deep total addressable market identification.',
      desc: 'Sourcing and continuous verification of verified decision-makers matching your ideal customer profile with zero bounce risk.',
      capabilities: ['Direct mobile & work email enrichment', 'Hiring and funding trigger alerts', 'De-duplication against existing CRM lists', 'TAM market sizing reports'],
    },
    {
      title: 'B2B Prospecting',
      tagline: 'Multi-touch outbound cadence engineering.',
      desc: 'High-touch outreach cadences that present concrete problem-solution frameworks directly to executive leadership.',
      capabilities: ['Persona-specific messaging copy', 'Multi-channel email & LinkedIn sync', 'Reply sentiment categorization', 'Strict cadence SLA enforcement'],
    },
    {
      title: 'Cold Email Campaigns',
      tagline: 'Dedicated secondary domain infrastructure.',
      desc: 'Isolated domain clusters with automated SPF/DKIM/DMARC alignment and automated warming pools guaranteeing 99%+ deliverability.',
      capabilities: ['Zero brand domain risk', 'Automated mailbox warmup pools', 'Spam trigger word scanning', 'Custom MX record architectures'],
    },
    {
      title: 'Sales Outreach',
      tagline: 'Consultative B2B value conversations.',
      desc: 'Structured sales playbooks that engage prospects around specific operational bottlenecks rather than generic pitches.',
      capabilities: ['Technical objection handling matrix', 'Value-first diagnostic inquiries', 'Real-time rep objection playbooks', 'Continuous call review coaching'],
    },
    {
      title: 'Appointment Setting',
      tagline: 'Frictionless discovery call calendar bookings.',
      desc: 'Pre-screened, agenda-vetted meetings scheduled directly into your senior sales team’s Google or Outlook calendars.',
      capabilities: ['Turnstile bot-protected scheduler', 'Mandatory pre-qualification questions', 'Automated SMS/Email calendar reminders', 'Direct calendar sync with timezone match'],
    },
    {
      title: 'CRM Pipelines',
      tagline: 'Standardized deal stage governance.',
      desc: 'Configuring custom pipeline stages, automated SLA timers, and bi-directional synchronization in HubSpot or Salesforce.',
      capabilities: ['Deal stall alert webhooks', 'Automated lead stage progression', 'Rep quota attainment tracking', 'Closed-loop attribution reporting'],
    },
    {
      title: 'Conversion Optimisation',
      tagline: 'Maximizing visitor-to-meeting conversions.',
      desc: 'Iterative A/B testing of headlines, value propositions, and form UX to lower acquisition costs and multiply throughput.',
      capabilities: ['Multi-step frictionless form flows', 'Heatmap and scroll depth analytics', 'Value proposition split-testing', 'Page load speed optimization'],
    },
    {
      title: 'Campaign Reporting',
      tagline: 'Transparent executive revenue telemetry.',
      desc: 'Real-time dashboards breaking down spend, meetings held, deal stages, and customer acquisition cost (CAC) payback periods.',
      capabilities: ['Live pipeline coverage ratios', 'Rep activity & booking logs', 'Channel attribution ROI breakdown', 'Weekly automated Slack & PDF digests'],
    },
  ];

  return (
    <div className="pt-28 sm:pt-32 pb-16">
      {/* Header */}
      <Section variant="white" spacing="sm">
        <Container>
          <div className="max-w-4xl">
            <Badge variant="accent" className="mb-4">
              REVENUE OPERATIONS // FULL-FUNNEL OUTBOUND ENGINE
            </Badge>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading text-ink tracking-tight leading-[1.05] mb-8">
              Predictable, connected revenue generation.
            </h1>
            <p className="text-lg sm:text-xl text-ink-secondary leading-relaxed font-sans max-w-3xl">
              We align engineering precision with outbound revenue operations. From secondary cold email clusters and verified B2B prospecting to executive appointment setting and CRM pipeline telemetry, we build machines that sell.
            </p>
          </div>
        </Container>
      </Section>

      {/* 9 Core RevOps Capabilities Grid */}
      <Section variant="surface" spacing="default" className="border-t border-border">
        <Container>
          <div className="max-w-3xl mb-12">
            <Badge variant="default" className="mb-3">
              THE COMPLETE REVOPS OFFERING
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-ink tracking-tight mb-4">
              Nine integrated revenue acceleration disciplines.
            </h2>
            <p className="text-ink-secondary text-base leading-relaxed">
              Every element of our RevOps engine is connected through automated webhooks, ensuring zero lead leakage and immediate calendar scheduling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map((p, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-border shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[10px] text-accent font-semibold tracking-wider uppercase block mb-1">
                    PHASE 0{idx + 1}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-ink mb-2">
                    {p.title}
                  </h3>
                  <p className="font-mono text-xs text-ink-secondary mb-3 font-medium">
                    {p.tagline}
                  </p>
                  <p className="text-xs text-ink-secondary leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>

                <div className="space-y-1.5 pt-4 border-t border-border">
                  {p.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2 text-xs text-ink">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span className="text-ink-secondary font-sans leading-snug">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Interactive Revenue Simulator */}
      <Section variant="dark" spacing="default" className="border-t border-bold-border">
        <Container>
          <div className="max-w-3xl mb-12">
            <Badge variant="dark" className="border-accent/40 text-accent-light mb-3">
              INTERACTIVE PIPELINE CALCULATOR
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight mb-4">
              Simulate your enterprise pipeline velocity.
            </h2>
            <p className="text-bold-muted text-base leading-relaxed">
              Adjust your monthly target account volume and average contract value to estimate the pipeline output generated by an ELOOX RevOps deployment.
            </p>
          </div>

          <div className="bg-[#101010] p-8 sm:p-12 rounded-3xl border border-bold-border shadow-dark-card grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Controls (6 cols) */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <div className="flex justify-between items-center mb-2 font-mono text-xs">
                  <span className="text-bold-muted uppercase">Target B2B Accounts Reached / Month</span>
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

              <div>
                <div className="flex justify-between items-center mb-2 font-mono text-xs">
                  <span className="text-bold-muted uppercase">Average Contract Value (ACV)</span>
                  <span className="text-white font-bold">${contractValue.toLocaleString()} USD</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="5000"
                  value={contractValue}
                  onChange={(e) => setContractValue(Number(e.target.value))}
                  className="w-full accent-accent h-2 bg-bold-surface rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-bold-muted mt-1">
                  <span>$5k</span>
                  <span>$50k</span>
                  <span>$100k</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-bold-surface border border-bold-border text-xs font-mono text-bold-muted">
                Calculations based on 3.5% qualified booking benchmark and 22% discovery-to-close conversion rate.
              </div>
            </div>

            {/* Right Display (6 cols) */}
            <div className="lg:col-span-6 bg-bold-surface p-8 rounded-2xl border border-bold-border grid grid-cols-2 gap-6">
              <div>
                <div className="font-mono text-[10px] text-bold-muted uppercase">Projected Qualified Calls</div>
                <div className="font-heading font-bold text-3xl text-white mt-1">
                  {estimatedCalls} <span className="text-xs font-mono text-accent-light">calls/mo</span>
                </div>
                <div className="text-[11px] text-bold-muted mt-1">Directly on AE calendars</div>
              </div>

              <div>
                <div className="font-mono text-[10px] text-bold-muted uppercase">Closed Deals (est.)</div>
                <div className="font-heading font-bold text-3xl text-emerald-400 mt-1">
                  {estimatedClosedDeals} <span className="text-xs font-mono text-emerald-300">deals/mo</span>
                </div>
                <div className="text-[11px] text-bold-muted mt-1">At 22% close rate</div>
              </div>

              <div>
                <div className="font-mono text-[10px] text-bold-muted uppercase">Monthly Pipeline Added</div>
                <div className="font-heading font-bold text-2xl text-white mt-1">
                  ${(estimatedQuarterlyPipeline / 1000).toFixed(0)}k
                </div>
                <div className="text-[11px] text-bold-muted mt-1">Total deal opportunities</div>
              </div>

              <div>
                <div className="font-mono text-[10px] text-bold-muted uppercase">Annual ARR Run-Rate</div>
                <div className="font-heading font-bold text-2xl text-accent-light mt-1">
                  ${(estimatedAnnualArr / 1000000).toFixed(2)}M
                </div>
                <div className="text-[11px] text-bold-muted mt-1">Annualized new revenue</div>
              </div>

              <div className="col-span-2 pt-4 border-t border-bold-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="font-mono text-xs text-bold-muted">Ready to deploy your revenue engine?</span>
                <Link to="/book">
                  <Button variant="white" size="sm" icon={<ArrowUpRight className="w-3.5 h-3.5" />}>
                    Schedule RevOps Discovery
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
