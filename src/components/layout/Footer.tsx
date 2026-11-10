import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Globe } from 'lucide-react';

interface FooterProps {
  onReplayIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReplayIntro }) => {
  return (
    <footer className="bg-bold-bg text-white pt-20 pb-12 border-t border-bold-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Top Big Display Header */}
        <div className="pb-16 border-b border-bold-border">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div>
              <span className="font-mono text-xs text-accent-light tracking-widest uppercase block mb-3">
                BUILD SMARTER. SCALE FURTHER.
              </span>
              <Link to="/" className="font-heading font-bold text-6xl sm:text-8xl md:text-9xl tracking-tighter text-white hover:text-accent-light transition-colors">
                ELOOX
              </Link>
            </div>

            <div className="max-w-md">
              <p className="text-bold-muted text-sm sm:text-base leading-relaxed mb-6">
                International technology and business growth company delivering mission-critical business systems, proprietary SaaS platforms, and revenue engines.
              </p>
              {onReplayIntro && (
                <button
                  onClick={onReplayIntro}
                  className="inline-flex items-center gap-2 text-xs font-mono text-accent-light hover:text-white px-3.5 py-2 rounded-lg bg-white/5 border border-bold-border hover:border-white/20 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Replay Signature Brand Animation</span>
                </button>
              )}
            </div>
          </div>

          {/* Philosophy Pillars Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 pt-8 border-t border-bold-border">
            {[
              { l: 'E', w: 'ELEVATE', d: 'Capabilities' },
              { l: 'L', w: 'LEAD', d: 'Standards' },
              { l: 'O', w: 'OPTIMIZE', d: 'Performance' },
              { l: 'O', w: 'OPERATE', d: 'Autonomous' },
              { l: 'X', w: 'XPLORE', d: 'Frontiers' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-heading font-bold text-lg text-accent-light">{item.l}</span>
                  <span className="font-mono text-xs font-semibold text-white tracking-wider">{item.w}</span>
                </div>
                <span className="text-[11px] font-mono text-bold-muted">{item.d}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Links Navigation Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-b border-bold-border">
          {/* Services */}
          <div>
            <div className="font-mono text-xs text-accent-light uppercase tracking-wider mb-4 font-semibold">
              <Link to="/services" className="hover:text-white">ELOOX Services</Link>
            </div>
            <ul className="space-y-2.5 text-xs text-bold-muted">
              <li>
                <Link to="/services/business-systems-erp" className="hover:text-white transition-colors">
                  Business Systems &amp; ERP
                </Link>
              </li>
              <li>
                <Link to="/services/crm-sales-intelligence" className="hover:text-white transition-colors">
                  CRM &amp; Sales Intelligence
                </Link>
              </li>
              <li>
                <Link to="/services/ai-automation" className="hover:text-white transition-colors">
                  AI &amp; Autonomous Automation
                </Link>
              </li>
              <li>
                <Link to="/services/software-digital-products" className="hover:text-white transition-colors">
                  Software &amp; Digital Products
                </Link>
              </li>
              <li>
                <Link to="/services/revenue-operations" className="hover:text-white transition-colors">
                  Revenue Operations (RevOps)
                </Link>
              </li>
            </ul>
          </div>

          {/* Products & Solutions */}
          <div>
            <div className="font-mono text-xs text-accent-light uppercase tracking-wider mb-4 font-semibold">
              <Link to="/products" className="hover:text-white">Products &amp; Solutions</Link>
            </div>
            <ul className="space-y-2.5 text-xs text-bold-muted">
              <li>
                <Link to="/products" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Eloox Flow™</span>
                  <span className="text-[9px] px-1.5 py-0.2 bg-white/10 rounded">Beta</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Eloox RevPulse™</span>
                  <span className="text-[9px] px-1.5 py-0.2 bg-accent/20 text-accent-light rounded">Live</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Eloox CoreERP™</span>
                  <span className="text-[9px] px-1.5 py-0.2 bg-white/10 rounded">Dev</span>
                </Link>
              </li>
              <li className="pt-2">
                <Link to="/solutions" className="text-white hover:text-accent-light transition-colors font-medium">
                  Connected Solutions →
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries & Work */}
          <div>
            <div className="font-mono text-xs text-accent-light uppercase tracking-wider mb-4 font-semibold">
              <Link to="/industries" className="hover:text-white">Industries &amp; Work</Link>
            </div>
            <ul className="space-y-2.5 text-xs text-bold-muted">
              <li>
                <Link to="/industries" className="hover:text-white transition-colors">
                  Education &amp; Universities
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition-colors">
                  Small &amp; Medium Businesses
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition-colors">
                  High-Growth Startups
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition-colors">
                  Corporate Offices &amp; Enterprises
                </Link>
              </li>
              <li className="pt-2">
                <Link to="/work" className="text-white hover:text-accent-light transition-colors font-medium">
                  Featured Case Studies →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <div className="font-mono text-xs text-accent-light uppercase tracking-wider mb-4 font-semibold">
              Company &amp; Access
            </div>
            <ul className="space-y-2.5 text-xs text-bold-muted">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About ELOOX
                </Link>
              </li>
              <li>
                <Link to="/growth" className="hover:text-white transition-colors">
                  Growth &amp; RevOps
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-white transition-colors">
                  Insights &amp; Articles
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact &amp; Offices
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-accent-light hover:underline font-semibold">
                  Book a Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Delivery Hubs */}
        <div className="py-6 border-b border-bold-border flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-bold-muted">
          <span className="text-white font-semibold">GLOBAL DELIVERY HUBS:</span>
          <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-accent-light" /> London, UK</span>
          <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-accent-light" /> San Francisco, CA</span>
          <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-accent-light" /> Dubai, UAE</span>
          <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-accent-light" /> Bengaluru, IN</span>
        </div>

        {/* Bottom Bar: Copyright & Operational SLA */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-bold-muted">
          <div>
            © {new Date().getFullYear()} ELOOX. All rights reserved.
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              EDGE NETWORK: 99.98% OPERATIONAL
            </span>
            <span>//</span>
            <span>CLOUDFLARE SECURED</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
