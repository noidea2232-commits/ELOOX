import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { BrandIntro } from '@/components/brand/BrandIntro';
import { CustomCursor } from '@/components/ui/CustomCursor';

export const Layout: React.FC = () => {
  const location = useLocation();

  const [introFinished, setIntroFinished] = useState<boolean>(() => {
    return sessionStorage.getItem('eloox_intro_completed') === 'true';
  });
  const [replayIntro, setReplayIntro] = useState<boolean>(false);

  const handleIntroComplete = () => {
    sessionStorage.setItem('eloox_intro_completed', 'true');
    setIntroFinished(true);
    setReplayIntro(false);
  };

  const handleTriggerReplay = () => {
    setReplayIntro(true);
  };

  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink relative selection:bg-accent selection:text-white">
      {/* Subtle Desktop Custom Cursor (auto-disabled on touch / reduced-motion) */}
      <CustomCursor />

      {/* Signature Brand Animation (shows on home if not completed, or when user triggers replay) */}
      {(replayIntro || (!introFinished && isHome)) && (
        <BrandIntro onComplete={handleIntroComplete} forceShow={replayIntro} />
      )}

      {/* Floating Pill Navigation */}
      <Navbar onReplayIntro={handleTriggerReplay} />

      {/* Page Content with Subtle Smooth Transition */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer onReplayIntro={handleTriggerReplay} />
    </div>
  );
};
