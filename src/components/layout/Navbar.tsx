import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onReplayIntro?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  // Main centered nav links as specified
  const centerLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Industries', path: '/industries' },
    { label: 'Products', path: '/products' },
    { label: 'Insights', path: '/insights' },
  ];

  // Extended links for mobile drawer
  const allMobileLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Industries', path: '/industries' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Products', path: '/products' },
    { label: 'Work / Case Studies', path: '/work' },
    { label: 'Growth / RevOps', path: '/growth' },
    { label: 'Insights', path: '/insights' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActiveLink = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Floating Centered Pill Container */}
      <div className="fixed top-3 sm:top-5 inset-x-0 mx-auto w-[calc(100%-1.5rem)] sm:w-[calc(100%-2.5rem)] max-w-5xl z-50 pointer-events-none">
        <header className="pointer-events-auto bg-white/95 backdrop-blur-md border border-black/[0.08] rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.06)] px-4 sm:px-6 h-14 sm:h-15 flex items-center justify-between transition-all duration-300">
          
          {/* LEFT: Full ELOOX Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2 group cursor-pointer shrink-0"
            aria-label="ELOOX Homepage"
          >
            <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-ink group-hover:text-accent transition-colors">
              ELOOX
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 hidden sm:inline-block" />
          </Link>

          {/* CENTER: Main Navigation Links */}
          <nav className="hidden md:flex items-center gap-0.5 lg:gap-1">
            {centerLinks.map((link) => {
              const active = isActiveLink(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3.5 py-1.5 text-xs font-sans font-medium transition-colors rounded-full ${
                    active
                      ? 'text-ink font-semibold'
                      : 'text-ink-secondary hover:text-ink'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {active && (
                    <motion.span
                      layoutId="navActivePill"
                      className="absolute inset-0 bg-surface rounded-full border border-black/[0.04] -z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT: Contact Link & Premium Black CTA */}
          <div className="hidden sm:flex items-center gap-2 md:gap-3 shrink-0">
            <Link
              to="/contact"
              className={`text-xs font-sans font-medium px-3 py-1.5 rounded-full transition-colors ${
                location.pathname === '/contact'
                  ? 'text-ink font-semibold'
                  : 'text-ink-secondary hover:text-ink'
              }`}
            >
              Contact
            </Link>

            <Link
              to="/book"
              className="inline-flex items-center justify-center gap-1.5 bg-ink text-white text-xs font-sans font-medium px-4 py-2 rounded-full hover:bg-black/85 active:scale-[0.98] transition-all duration-200 shadow-sm group"
            >
              <span>Book a Meeting</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* MOBILE TOGGLE: Complete wordmark visible + Menu Icon */}
          <div className="flex items-center gap-2 md:hidden shrink-0">
            <Link
              to="/book"
              className="inline-flex items-center justify-center bg-ink text-white text-[11px] font-sans font-medium px-3 py-1.5 rounded-full"
            >
              Book
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full text-ink hover:bg-surface border border-border focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed inset-x-3 top-20 z-40 bg-white rounded-3xl border border-border shadow-2xl p-6 md:hidden flex flex-col justify-between max-h-[85vh] overflow-y-auto"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-border mb-4">
                <span className="font-heading font-extrabold text-lg tracking-tight text-ink">
                  ELOOX
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full hover:bg-surface border border-border"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4 text-ink" />
                </button>
              </div>

              <div className="space-y-2 py-2">
                {allMobileLinks.map((link) => {
                  const active = isActiveLink(link.path);
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-2 text-base font-heading font-semibold transition-colors ${
                        active ? 'text-accent' : 'text-ink hover:text-accent'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-border mt-4 space-y-3">
              <Link
                to="/book"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-ink text-white text-sm font-sans font-medium py-3 rounded-xl shadow-sm"
              >
                <span>Book a Meeting</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <div className="text-center font-mono text-[10px] text-ink-muted">
                BUILD SMARTER. SCALE FURTHER.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
