import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas3DScene } from './Canvas3DScene';

interface BrandIntroProps {
  onComplete: () => void;
  forceShow?: boolean;
}

const BRAND_LETTERS = [
  { letter: 'E', word: 'ELEVATE', desc: 'Raise business capabilities' },
  { letter: 'L', word: 'LEAD', desc: 'Define industry standards' },
  { letter: 'O', word: 'OPTIMIZE', desc: 'Maximize performance and capital' },
  { letter: 'O', word: 'OPERATE', desc: 'Flawless autonomous execution' },
  { letter: 'X', word: 'XPLORE', desc: 'Pioneer the technological frontier' },
];

export const BrandIntro: React.FC<BrandIntroProps> = ({ onComplete, forceShow = false }) => {
  const [phase, setPhase] = useState<'letters' | 'words' | 'tagline' | 'exit'>('letters');
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches && !forceShow) {
      setIsReducedMotion(true);
      onComplete();
      return;
    }

    // Sequence timing
    // Step 1: ELOOX appears letter by letter (0s - 1.2s)
    const timer1 = setTimeout(() => {
      setPhase('words');
    }, 1400);

    // Step 2 & 3: Words reveal & 3D background object activates (1.4s - 3.4s)
    const timer2 = setTimeout(() => {
      setPhase('tagline');
    }, 3600);

    // Step 4: Tagline transition (3.6s - 5.0s)
    const timer3 = setTimeout(() => {
      setPhase('exit');
    }, 5200);

    // Step 5: Complete and reveal Hero (5.6s)
    const timer4 = setTimeout(() => {
      onComplete();
    }, 5700);

    // ESC key listener to skip
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete, forceShow]);

  if (isReducedMotion && !forceShow) {
    return null;
  }

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-ink overflow-hidden select-none"
        >
          {/* Subtle architectural grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

          {/* Elegant 3D object in the background (appears active during intro) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: phase === 'words' || phase === 'tagline' ? 0.85 : 0.25,
              scale: 1,
            }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] md:w-[650px] md:h-[650px]">
              <Canvas3DScene wireframeColor={0x0066FF} interactive={false} />
            </div>
          </motion.div>

          {/* Top Bar with Brand Badge & Skip button */}
          <div className="absolute top-6 left-6 right-6 md:top-8 md:left-10 md:right-10 flex items-center justify-between z-20">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span className="font-mono text-xs tracking-widest text-ink-secondary uppercase">
                ELOOX // OS IDENTITY V1.0
              </span>
            </div>
            <button
              onClick={onComplete}
              className="text-xs font-mono uppercase tracking-wider text-ink-secondary hover:text-ink px-3 py-1.5 rounded border border-border hover:border-ink/40 transition-colors bg-white/80 backdrop-blur-sm"
              aria-label="Skip Brand Introduction"
            >
              Skip Intro [ESC]
            </button>
          </div>

          {/* Main Visual Animation Container */}
          <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center justify-center min-h-[380px]">
            {/* Step 1 & 2: Letter by letter & Philosophy words */}
            {phase !== 'tagline' && (
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8">
                  {BRAND_LETTERS.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center">
                      {/* Letter */}
                      <motion.div
                        initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{
                          duration: 0.6,
                          delay: idx * 0.18,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-ink font-heading"
                      >
                        {item.letter}
                      </motion.div>

                      {/* Philosophy word revelation */}
                      <div className="h-8 sm:h-10 mt-2 sm:mt-4 overflow-hidden">
                        <AnimatePresence>
                          {phase === 'words' && (
                            <motion.div
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{
                                duration: 0.5,
                                delay: idx * 0.12,
                                ease: 'easeOut',
                              }}
                              className="flex flex-col items-center"
                            >
                              <span className="text-xs sm:text-sm font-mono tracking-widest font-semibold text-accent">
                                {item.word}
                              </span>
                              <span className="hidden sm:block text-[10px] text-ink-secondary font-mono tracking-tight opacity-75">
                                0{idx + 1}
                              </span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Tagline Transition */}
            {phase === 'tagline' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <motion.div
                  initial={{ opacity: 0, letterSpacing: '0.4em' }}
                  animate={{ opacity: 1, letterSpacing: '0.15em' }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="font-mono text-xs sm:text-sm uppercase text-accent font-semibold tracking-widest"
                >
                  BRAND PHILOSOPHY ACTIVATED
                </motion.div>

                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tight text-ink max-w-4xl">
                  BUILD SMARTER.
                  <br />
                  <span className="text-stroke text-transparent hover:text-ink transition-colors">
                    SCALE FURTHER.
                  </span>
                </h1>

                <p className="font-mono text-xs sm:text-sm text-ink-secondary tracking-wide mt-2">
                  ELEVATE · LEAD · OPTIMIZE · OPERATE · XPLORE
                </p>
              </motion.div>
            )}
          </div>

          {/* Bottom Progress Bar & Coordinates */}
          <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-10 md:right-10 flex items-center justify-between text-[11px] font-mono text-ink-muted">
            <span>SYS_INIT: OK</span>
            <div className="w-32 sm:w-48 h-[2px] bg-border overflow-hidden rounded-full">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 5.2, ease: 'linear' }}
                className="h-full bg-accent"
              />
            </div>
            <span>EST. 2026 // GLOBAL</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

