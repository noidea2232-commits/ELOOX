import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export const BookMeetingPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    selectedServices: preselectedService ? [preselectedService] : ['Business Systems & ERP'],
    requirements: '',
    preferredDate1: '',
    preferredTime1: '14:00 GMT',
    preferredDate2: '',
    preferredTime2: '16:00 GMT',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const availableServices = [
    'Business Systems & ERP',
    'CRM & Sales Intelligence',
    'AI & Automation',
    'Software & Digital Products',
    'Revenue Operations (RevOps)',
    'Eloox Products / Proprietary SaaS',
  ];

  const toggleService = (srv: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(srv)
        ? prev.selectedServices.filter((s) => s !== srv)
        : [...prev.selectedServices, srv],
    }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="pt-28 sm:pt-32 pb-16">
      {/* Header */}
      <Section variant="white" spacing="sm">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="accent" className="mb-4">
              EXECUTIVE DISCOVERY // 30-MINUTE DISCOVERY
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold font-heading text-ink tracking-tight leading-[1.05] mb-6">
              Schedule a Technical Architecture Consultation.
            </h1>
            <p className="text-lg text-ink-secondary leading-relaxed font-sans">
              Connect directly with our principal systems engineers and growth architects. We will review your current software stack, operational bottlenecks, and growth targets.
            </p>
          </div>
        </Container>
      </Section>

      {/* Main Multi-Step Form */}
      <Section variant="surface" spacing="default" className="border-t border-border">
        <Container>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-border shadow-md overflow-hidden">
            {/* Step Progress Header */}
            {!submitted && (
              <div className="bg-surface px-8 py-5 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-6">
                  {[
                    { s: 1, label: 'Contact Details' },
                    { s: 2, label: 'Scope & Services' },
                    { s: 3, label: 'Schedule Preferences' },
                  ].map((item) => (
                    <div key={item.s} className="flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs ${
                        step === item.s
                          ? 'bg-ink text-white font-bold'
                          : step > item.s
                          ? 'bg-emerald-500 text-white'
                          : 'bg-white border border-border text-ink-muted'
                      }`}>
                        {step > item.s ? '✓' : item.s}
                      </span>
                      <span className={`text-xs font-mono hidden sm:inline ${
                        step === item.s ? 'text-ink font-bold' : 'text-ink-secondary'
                      }`}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
                <span className="font-mono text-xs text-ink-muted">STEP {step} OF 3</span>
              </div>
            )}

            <div className="p-8 sm:p-12">
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold font-heading text-ink">
                    Consultation Request Confirmed
                  </h2>
                  <p className="text-ink-secondary text-base max-w-lg leading-relaxed font-sans">
                    Thank you, <span className="font-semibold text-ink">{formData.name}</span>. We have logged your request for <span className="font-semibold text-ink">{formData.company}</span>. A principal architect will review your technical requirements and dispatch a calendar invitation to <span className="font-semibold text-ink">{formData.email}</span> within 12 business hours.
                  </p>
                  <div className="p-4 rounded-xl bg-surface border border-border text-xs font-mono text-ink-secondary max-w-md w-full mt-4">
                    Preferred Window: {formData.preferredDate1 || 'Earliest slot'} at {formData.preferredTime1}
                  </div>
                </div>
              ) : (
                <form onSubmit={step === 3 ? handleSubmit : handleNext}>
                  {/* Step 1: Contact info */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-mono text-ink-secondary uppercase tracking-wider mb-2">
                            Your Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Marcus Vance"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                            placeholder="marcus@enterprise.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full h-12 px-4 rounded-xl bg-surface border border-border text-sm text-ink focus:outline-none focus:border-accent transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-mono text-ink-secondary uppercase tracking-wider mb-2">
                            Organization / Institution *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Company or University Name"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full h-12 px-4 rounded-xl bg-surface border border-border text-sm text-ink focus:outline-none focus:border-accent transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-mono text-ink-secondary uppercase tracking-wider mb-2">
                            Direct Phone / WhatsApp
                          </label>
                          <input
                            type="tel"
                            placeholder="+1 (555) 019-2834"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full h-12 px-4 rounded-xl bg-surface border border-border text-sm text-ink focus:outline-none focus:border-accent transition-colors"
                          />
                        </div>
                      </div>

                      <div className="pt-4 flex justify-end">
                        <Button type="submit" variant="dark" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                          Continue to Step 2
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Scope & Services */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-xs font-mono text-ink-secondary uppercase tracking-wider mb-3">
                          Select Required Capabilities (Select all that apply)
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {availableServices.map((srv) => {
                            const active = formData.selectedServices.includes(srv);
                            return (
                              <button
                                type="button"
                                key={srv}
                                onClick={() => toggleService(srv)}
                                className={`p-4 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between ${
                                  active
                                    ? 'bg-ink text-white border-ink shadow-sm'
                                    : 'bg-surface text-ink border-border hover:border-ink/20'
                                }`}
                              >
                                <span>{srv}</span>
                                <span className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] ${
                                  active ? 'bg-accent border-accent text-white' : 'border-border'
                                }`}>
                                  {active ? '✓' : ''}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-ink-secondary uppercase tracking-wider mb-2">
                          Current Problem &amp; Architecture Requirements
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Briefly describe your existing tools, operational bottlenecks, timeline, or user scale..."
                          value={formData.requirements}
                          onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                          className="w-full p-4 rounded-xl bg-surface border border-border text-sm text-ink focus:outline-none focus:border-accent transition-colors"
                        />
                      </div>

                      <div className="pt-4 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={handleBack}
                          className="text-xs font-mono text-ink-secondary hover:text-ink flex items-center gap-1"
                        >
                          <ArrowLeft className="w-3.5 h-3.5" /> Back
                        </button>
                        <Button type="submit" variant="dark" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                          Continue to Schedule
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Dates & Confirmation */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-mono text-ink-secondary uppercase tracking-wider mb-2">
                            Preferred Date (1st Choice) *
                          </label>
                          <input
                            type="date"
                            required
                            value={formData.preferredDate1}
                            onChange={(e) => setFormData({ ...formData, preferredDate1: e.target.value })}
                            className="w-full h-12 px-4 rounded-xl bg-surface border border-border text-sm text-ink focus:outline-none focus:border-accent transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-mono text-ink-secondary uppercase tracking-wider mb-2">
                            Preferred Time Window *
                          </label>
                          <select
                            value={formData.preferredTime1}
                            onChange={(e) => setFormData({ ...formData, preferredTime1: e.target.value })}
                            className="w-full h-12 px-4 rounded-xl bg-surface border border-border text-sm text-ink focus:outline-none focus:border-accent transition-colors"
                          >
                            <option value="10:00 GMT">10:00 AM GMT (London / Europe)</option>
                            <option value="14:00 GMT">02:00 PM GMT (London / US East)</option>
                            <option value="17:00 GMT">05:00 PM GMT (US East / West)</option>
                            <option value="19:00 GMT">07:00 PM GMT (US West Coast)</option>
                            <option value="09:00 IST">09:00 AM IST (India / APAC)</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-mono text-ink-secondary uppercase tracking-wider mb-2">
                            Alternative Date (Backup Choice)
                          </label>
                          <input
                            type="date"
                            value={formData.preferredDate2}
                            onChange={(e) => setFormData({ ...formData, preferredDate2: e.target.value })}
                            className="w-full h-12 px-4 rounded-xl bg-surface border border-border text-sm text-ink focus:outline-none focus:border-accent transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-mono text-ink-secondary uppercase tracking-wider mb-2">
                            Alternative Time Window
                          </label>
                          <select
                            value={formData.preferredTime2}
                            onChange={(e) => setFormData({ ...formData, preferredTime2: e.target.value })}
                            className="w-full h-12 px-4 rounded-xl bg-surface border border-border text-sm text-ink focus:outline-none focus:border-accent transition-colors"
                          >
                            <option value="10:00 GMT">10:00 AM GMT</option>
                            <option value="14:00 GMT">02:00 PM GMT</option>
                            <option value="16:00 GMT">04:00 PM GMT</option>
                            <option value="18:00 GMT">06:00 PM GMT</option>
                          </select>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-surface border border-border flex items-start gap-3 text-xs text-ink-secondary">
                        <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-ink block mb-0.5">Confidentiality Guarantee</span>
                          All consultations are covered by mutual non-disclosure obligations. Never automated without human architect review.
                        </div>
                      </div>

                      <div className="pt-4 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={handleBack}
                          className="text-xs font-mono text-ink-secondary hover:text-ink flex items-center gap-1"
                        >
                          <ArrowLeft className="w-3.5 h-3.5" /> Back
                        </button>
                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          disabled={isSubmitting}
                          icon={isSubmitting ? undefined : <CheckCircle2 className="w-4 h-4" />}
                        >
                          {isSubmitting ? 'Confirming Window...' : 'Confirm Meeting Request'}
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
