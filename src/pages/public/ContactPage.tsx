import React, { useState } from 'react';
import { Globe, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'General Enterprise Enquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const offices = [
    {
      city: 'London',
      region: 'United Kingdom // EMEA HQ',
      address: '100 Bishopsgate, London EC2N 4AG',
      timezone: 'GMT / BST',
      focus: 'Enterprise Systems & European Operations',
    },
    {
      city: 'San Francisco',
      region: 'California, USA // Americas Hub',
      address: '555 California Street, San Francisco, CA 94104',
      timezone: 'PST / PDT',
      focus: 'High-Growth Tech Startups & SaaS Architecture',
    },
    {
      city: 'Dubai',
      region: 'United Arab Emirates // MENA Hub',
      address: 'DIFC Gate Precinct 4, Dubai, UAE',
      timezone: 'GST (UTC+4)',
      focus: 'Multi-Branch Corporate ERP & Institutional Systems',
    },
    {
      city: 'Bengaluru',
      region: 'Karnataka, India // APAC Engineering Lab',
      address: 'Prestige Trade Tower, Palace Road, Bengaluru 560001',
      timezone: 'IST (UTC+5:30)',
      focus: 'Core Platform Engineering & Autonomous AI Labs',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="pt-28 sm:pt-32 pb-16">
      {/* Header */}
      <Section variant="white" spacing="sm">
        <Container>
          <div className="max-w-4xl">
            <Badge variant="accent" className="mb-4">
              GLOBAL CONTACT &amp; OFFICE DIRECTORY
            </Badge>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading text-ink tracking-tight leading-[1.05] mb-8">
              Connect with our international teams.
            </h1>
            <p className="text-lg sm:text-xl text-ink-secondary leading-relaxed font-sans max-w-3xl">
              Whether you need to scope a bespoke enterprise ERP, commission an outbound RevOps engine, or evaluate our proprietary SaaS platforms, our principal architects are ready to assist.
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Form & Direct Access Grid */}
      <Section variant="surface" spacing="default" className="border-t border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Form (7 cols) */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-border shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-ink mb-2">
                Send an Enterprise Enquiry
              </h2>
              <p className="text-ink-secondary text-sm leading-relaxed mb-8">
                Direct submission to our partner review queue. Guaranteed response within 12 business hours.
              </p>

              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-ink">
                    Message Successfully Dispatched
                  </h3>
                  <p className="text-ink-secondary text-sm max-w-md leading-relaxed font-sans">
                    Thank you, <span className="font-semibold text-ink">{formData.name}</span>. Your message has been routed to our regional leadership desk. We will reply to <span className="font-semibold text-ink">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', company: '', subject: 'General Enterprise Enquiry', message: '' });
                    }}
                    className="text-xs font-mono text-accent hover:underline pt-4"
                  >
                    ← Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-ink-secondary uppercase tracking-wider mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. David Sterling"
                        className="w-full h-12 px-4 rounded-xl bg-surface border border-border text-sm text-ink focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-ink-secondary uppercase tracking-wider mb-2">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="david@institution.org"
                        className="w-full h-12 px-4 rounded-xl bg-surface border border-border text-sm text-ink focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-ink-secondary uppercase tracking-wider mb-2">
                        Organization / University *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Organization Name"
                        className="w-full h-12 px-4 rounded-xl bg-surface border border-border text-sm text-ink focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-ink-secondary uppercase tracking-wider mb-2">
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl bg-surface border border-border text-sm text-ink focus:outline-none focus:border-accent transition-colors"
                      >
                        <option value="General Enterprise Enquiry">General Enterprise Enquiry</option>
                        <option value="Business Systems & ERP Scoping">Business Systems &amp; ERP Scoping</option>
                        <option value="Revenue Operations Outbound Engine">Revenue Operations Outbound Engine</option>
                        <option value="AI Agents & Automation">AI Agents &amp; Automation</option>
                        <option value="Proprietary SaaS / Eloox Products">Proprietary SaaS / Eloox Products</option>
                        <option value="Partnership & Press">Partnership &amp; Press</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-ink-secondary uppercase tracking-wider mb-2">
                      Message / Project Scope *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your immediate requirements, system challenges, or target timeline..."
                      className="w-full p-4 rounded-xl bg-surface border border-border text-sm text-ink focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="dark"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                    icon={isSubmitting ? undefined : <ArrowRight className="w-4 h-4" />}
                  >
                    {isSubmitting ? 'Dispatching Message...' : 'Submit Enterprise Enquiry'}
                  </Button>

                  <p className="text-[11px] font-mono text-ink-muted text-center pt-2">
                    Direct architectural delivery desk. No spam, ever.
                  </p>
                </form>
              )}
            </div>

            {/* Right Information & SLA Panel (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl bg-bold-bg text-bold-text border border-bold-border shadow-dark-card">
                <span className="font-mono text-xs text-accent-light uppercase tracking-wider block mb-2">
                  DISPATCH DIRECTORY
                </span>
                <h3 className="text-2xl font-bold font-heading text-white mb-6">
                  Direct Department Contacts
                </h3>

                <div className="space-y-6">
                  <div>
                    <div className="font-mono text-xs text-bold-muted uppercase">Systems &amp; Architecture:</div>
                    <div className="font-mono text-sm text-white font-medium mt-0.5">systems@eloox.com</div>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-bold-muted uppercase">Revenue Operations:</div>
                    <div className="font-mono text-sm text-white font-medium mt-0.5">revops@eloox.com</div>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-bold-muted uppercase">Proprietary Products Lab:</div>
                    <div className="font-mono text-sm text-white font-medium mt-0.5">products@eloox.com</div>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-bold-muted uppercase">Executive Desk:</div>
                    <div className="font-mono text-sm text-white font-medium mt-0.5">executive@eloox.com</div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-bold-border flex items-center gap-3 text-xs text-bold-muted">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>SLA Guarantee: Responses dispatched within 12 business hours.</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Global Delivery Hubs */}
      <Section variant="white" spacing="default" className="border-t border-border">
        <Container>
          <div className="max-w-3xl mb-12">
            <Badge variant="default" className="mb-3">
              GLOBAL PRESENCE
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-ink tracking-tight mb-4">
              Our International Delivery Hubs
            </h2>
            <p className="text-ink-secondary text-base leading-relaxed">
              With offices positioned across strategic international time zones, our engineering teams provide seamless around-the-clock delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((off, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-surface border border-border flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-heading font-bold text-xl text-ink">{off.city}</span>
                    <Globe className="w-4 h-4 text-accent" />
                  </div>
                  <div className="font-mono text-[11px] text-accent font-semibold mb-3">
                    {off.region}
                  </div>
                  <p className="text-xs text-ink-secondary leading-relaxed mb-4">
                    {off.address}
                  </p>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="font-mono text-[10px] text-ink-muted uppercase">Primary Focus:</div>
                  <div className="text-xs font-sans text-ink font-medium mt-0.5">{off.focus}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};
