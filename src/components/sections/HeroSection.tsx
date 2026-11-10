import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Cpu, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';
import { Canvas3DScene } from '@/components/brand/Canvas3DScene';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

interface HeroSectionProps {
  onExploreWork?: () => void;
  onStartProject?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreWork,
  onStartProject,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center pt-36 sm:pt-44 pb-16 sm:pb-24 overflow-hidden bg-bg">
      {/* Editorial grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

      {/* Decorative vertical editorial line */}
      <div className="hidden lg:block absolute left-12 top-0 bottom-0 w-[1px] bg-border pointer-events-none" />
      <div className="hidden lg:block absolute right-12 top-0 bottom-0 w-[1px] bg-border pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Top Tagline / Category Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-2.5 mb-6"
            >
              <Badge variant="accent">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                ENTERPRISE SYSTEM ARCHITECTURE
              </Badge>
              <span className="font-mono text-xs text-ink-muted">
                // ELOOX SERVICES &amp; PRODUCTS
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl xl:text-8xl tracking-tight text-ink leading-[1.02] mb-8"
            >
              Build smarter.
              <br />
              <span className="relative inline-block text-ink">
                Scale further.
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                  className="absolute bottom-2 left-0 right-0 h-3 bg-accent/15 -z-10 origin-left"
                />
              </span>
            </motion.h1>

            {/* Approved Hero Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="text-lg sm:text-xl text-ink-secondary leading-relaxed max-w-2xl mb-10 font-sans"
            >
              We build intelligent business systems, develop digital products, automate operations
              and create connected revenue engines.
            </motion.p>

            {/* CTAs: Primary Explore Work & Secondary Start Project */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-14"
            >
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                onClick={onExploreWork || (() => scrollTo('work'))}
                className="group hover:shadow-glow transition-all"
              >
                Explore Our Work
              </Button>

              <Button
                variant="dark"
                size="lg"
                icon={<ArrowUpRight className="w-4 h-4" />}
                onClick={onStartProject || (() => scrollTo('consultation'))}
                className="group hover:scale-[1.02] transition-transform"
              >
                Start a Project
              </Button>
            </motion.div>

            {/* Real-world metrics bar with genuine animated counters */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full pt-8 border-t border-border grid grid-cols-2 sm:grid-cols-3 gap-6"
            >
              <div>
                <div className="font-heading font-bold text-2xl sm:text-3xl text-ink tracking-tight">
                  <AnimatedCounter value={120} prefix="$" suffix="M+" />
                </div>
                <div className="font-mono text-xs text-ink-muted mt-0.5">
                  Pipeline Value Created
                </div>
              </div>
              <div>
                <div className="font-heading font-bold text-2xl sm:text-3xl text-ink tracking-tight">
                  <AnimatedCounter value={99.98} decimals={2} suffix="%" />
                </div>
                <div className="font-mono text-xs text-ink-muted mt-0.5">
                  Production SLA Uptime
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="font-heading font-bold text-2xl sm:text-3xl text-ink tracking-tight">
                  <AnimatedCounter value={4} suffix=" Global Hubs" />
                </div>
                <div className="font-mono text-xs text-ink-muted mt-0.5">
                  US · UK · UAE · India
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Visual & Architecture HUD */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            {/* 3D Scene Container with Subtle Floating Animation */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full aspect-square max-w-[480px] rounded-3xl bg-surface/60 border border-border overflow-hidden flex items-center justify-center shadow-lg group hover:border-accent/40 transition-colors"
            >
              {/* Corner HUD markers */}
              <div className="absolute top-4 left-4 font-mono text-[10px] text-ink-muted flex items-center gap-1.5 z-10">
                <Cpu className="w-3 h-3 text-accent" />
                <span>3D_PARAMETRIC_CORE</span>
              </div>
              <div className="absolute top-4 right-4 font-mono text-[10px] text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 z-10">
                ACTIVE
              </div>

              {/* Three.js interactive 3D object */}
              <div className="w-full h-full p-4">
                <Canvas3DScene wireframeColor={0x0066FF} interactive={true} />
              </div>

              {/* Floating Tech Telemetry Chip */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-border shadow-md z-10">
                <div className="flex items-center justify-between text-xs font-mono text-ink-secondary mb-1.5">
                  <span className="flex items-center gap-1.5 font-semibold text-ink">
                    <Zap className="w-3.5 h-3.5 text-accent" />
                    Autonomous Orchestration
                  </span>
                  <span className="text-accent font-semibold">12ms latency</span>
                </div>
                <div className="w-full bg-surface rounded-full h-1.5 overflow-hidden">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '88%' }}
                    transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                    className="bg-accent h-full rounded-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Asymmetrical Floating Feature Pill */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="hidden sm:flex items-center gap-3 mt-6 self-end bg-white py-2.5 px-4 rounded-full border border-border shadow-sm text-xs font-mono text-ink-secondary hover:border-ink/20 transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>Zero-compromise Cloudflare Edge Architecture</span>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
