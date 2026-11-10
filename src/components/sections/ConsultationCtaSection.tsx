import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, CheckCircle2, Shield, ArrowRight, Clock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export const ConsultationCtaSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    selectedServices: ['Business Systems & ERP'],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableServices = [
    'Business Systems & ERP',
    'CRM & Sales Intelligence',
    'AI & Automation',
    'Software & Digital Products',
    'Revenue Operations',
    'Proprietary SaaS / Eloox Products',
  ];

  const toggleService = (srv: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(srv)
        ? prev.selectedServices.filter((s) => s !== srv)
        : [...prev.selectedServices, srv],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate fast client-side submission (Worker backend integration wired in Phase 3)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <Section id="consultation" variant="white" spacing="default" className="border-t border-border">
      <Container>
        <div className="bg-ink text-white rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle architectural background pattern */}
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Value Proposition & Trust (5 cols) */}
            <div className="lg:col-span-5">
              <Badge variant="dark" className="border-accent/40 text-accent-light mb-4">
                INITIATE ENGAGEMENT
              </Badge>

              <h2 className="text-3xl sm:text-5xl font-bold font-heading tracking-tight mb-6 leading-tight">
                Ready to build smarter and scale further?
              </h2>

              <p className="text-bold-muted text-base leading-relaxed mb-8">
                Book a 30-minute confidential technical architecture discovery call with our principal system engineers and growth architects.
              </p>

              <div className="space-y-4 pt-6 border-t border-bold-border mb-8">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-white/90">
                  <Shield className="w-4 h-4 text-accent-light shrink-0" />
                  <span>Strict NDA and confidential system discussion</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-white/90">
                  <Calendar className="w-4 h-4 text-accent-light shrink-0" />
                  <span>Direct conversation with senior technology partners</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-white/90">
                  <Clock className="w-4 h-4 text-accent-light shrink-0" />
                  <span>Comprehensive architectural blueprint proposal in 48 hours</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-bold-surface border border-bold-border text-xs font-mono text-bold-muted">
                RESPONSE TIME: Guaranteed within 12 business hours.
              </div>
            </div>

            {/* Right Column: Interactive Consultation Request Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#141414] p-6 sm:p-10 rounded-2xl border border-bold-border">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent-light mb-2">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-white">
                      Consultation Request Received
                    </h3>
                    <p className="text-bold-muted text-sm max-w-md leading-relaxed font-sans">
                      Thank you, <span className="text-white font-medium">{formData.name}</span>. A principal architect will review your requirements for <span className="text-white font-medium">{formData.company || 'your organization'}</span> and reply within 12 business hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          company: '',
                          selectedServices: ['Business Systems & ERP'],
                          message: '',
                        });
                      }}
                      className="text-xs font-mono text-accent-light hover:underline pt-4"
                    >
                      ← Submit another request
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-xs font-mono text-bold-muted uppercase tracking-wider mb-2">
                        Select Relevant Areas of Interest
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {availableServices.map((srv) => {
                          const active = formData.selectedServices.includes(srv);
                          return (
                            <button
                              type="button"
                              key={srv}
                              onClick={() => toggleService(srv)}
                              className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                                active
                                  ? 'bg-accent text-white border-accent font-medium'
                                  : 'bg-bold-surface text-bold-muted border-bold-border hover:border-white/20'
                              }`}
                            >
                              {srv}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-bold-muted uppercase tracking-wider mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full h-11 px-4 rounded-lg bg-bold-surface border border-bold-border text-white text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-bold-muted/50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-bold-muted uppercase tracking-wider mb-2">
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="sarah@company.com"
                          className="w-full h-11 px-4 rounded-lg bg-bold-surface border border-bold-border text-white text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-bold-muted/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-bold-muted uppercase tracking-wider mb-2">
                        Company or Institution *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company Name, Inc."
                        className="w-full h-11 px-4 rounded-lg bg-bold-surface border border-bold-border text-white text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-bold-muted/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-bold-muted uppercase tracking-wider mb-2">
                        Project Overview or Immediate Problem
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your current tech stack, operational bottlenecks, or growth targets..."
                        className="w-full p-4 rounded-lg bg-bold-surface border border-bold-border text-white text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-bold-muted/50"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full text-base"
                        disabled={isSubmitting}
                        icon={isSubmitting ? undefined : <ArrowRight className="w-4 h-4" />}
                      >
                        {isSubmitting ? 'Processing Request...' : 'Schedule Discovery Consultation'}
                      </Button>
                    </div>

                    <p className="text-[11px] font-mono text-bold-muted text-center">
                      Protected by Cloudflare Edge Security. Zero spam, ever.
                    </p>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
