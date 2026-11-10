export interface IndustryDetail {
  slug: string;
  name: string;
  badge: string;
  heroHeadline: string;
  tagline: string;
  description: string;
  keyChallenges: { title: string; desc: string }[];
  tailoredSolutions: { title: string; desc: string; icon: string }[];
  architectureFocus: string[];
  metrics: { value: string; label: string }[];
  caseStudyPreview: {
    title: string;
    result: string;
    summary: string;
  };
}

export const INDUSTRIES_DATA: IndustryDetail[] = [
  {
    slug: 'education',
    name: 'Education & Academic Institutions',
    badge: 'K-12 · UNIVERSITIES · EDTECH',
    heroHeadline: 'Modern campus operating systems and student lifecycle intelligence.',
    tagline: 'Eliminating administrative bottlenecks across admissions, fees, grades, and communication.',
    description: 'Educational institutions today face increasing complexity: fragmented student databases, cumbersome fee collections, manual grading, and disjointed parental communication. ELOOX builds unified digital campus platforms that streamline operations from enrollment to alumni relations.',
    keyChallenges: [
      {
        title: 'Fragmented Student Records',
        desc: 'Admissions, examinations, fee status, and attendance data trapped in incompatible spreadsheets or legacy local software.',
      },
      {
        title: 'Manual Fee & Tuition Reconciliation',
        desc: 'Delayed payment verification, cash flow discrepancies, and time-consuming manual generation of receipts.',
      },
      {
        title: 'Complex Parental & Faculty Channels',
        desc: 'Inefficient WhatsApp groups, missed circulars, and lack of real-time visibility into student performance.',
      },
      {
        title: 'High Regulatory Reporting Overhead',
        desc: 'Weeks spent aggregating compliance reports, accreditation records, and government audits.',
      },
    ],
    tailoredSolutions: [
      {
        title: 'Unified Student Lifecycle ERP',
        desc: 'Complete student profiles tracking attendance, exam records, medical notes, and disciplinary records in one secure database.',
        icon: 'GraduationCap',
      },
      {
        title: 'Automated Tuition & Fee Gateway',
        desc: 'Multi-currency digital fee payments, automated SMS/email payment reminders, installment tracking, and instant digital receipts.',
        icon: 'CreditCard',
      },
      {
        title: 'Biometric & RFID Smart Attendance',
        desc: 'Direct device integration triggering instant SMS alerts to parents when students check in or check out of school premises.',
        icon: 'Fingerprint',
      },
      {
        title: 'Automated Academic Reporting',
        desc: 'One-click generation of report cards, transcripts, teacher workload dashboards, and regulatory accreditation documents.',
        icon: 'FileCheck',
      },
    ],
    architectureFocus: [
      'FERPA / GDPR-compliant encrypted student database tenancy',
      'High-concurrency exam results portal handling 50k+ simultaneous visitors',
      'Offline-capable campus gateways that sync automatically upon reconnection',
      'Role-based portals: Student, Parent, Teacher, Administrator, Principal',
    ],
    metrics: [
      { value: '-65%', label: 'Admissions Processing Time' },
      { value: '100%', label: 'Automated Fee Reconciliation' },
      { value: '65,000+', label: 'Active Students Managed' },
    ],
    caseStudyPreview: {
      title: 'Multi-Campus Institutional Operations Modernization',
      result: '72% drop in administrative inquiries within 90 days',
      summary: 'Deployed a unified student lifecycle ERP across 12 campuses, streamlining admissions, fee collection, and gradebook operations for 65,000+ enrolled students.',
    },
  },
  {
    slug: 'small-medium-businesses',
    name: 'Small & Medium Businesses',
    badge: 'OPERATIONAL EXCELLENCE · SUPPLY CHAIN · SCALE',
    heroHeadline: 'Replace fragmented spreadsheets with enterprise-grade operational systems.',
    tagline: 'Bridging the technology gap to allow regional companies to scale with zero administrative drag.',
    description: 'Ambitious SMBs often hit a revenue ceiling when spreadsheets and patchwork tools begin to cause order mismatches, delayed invoices, and lack of cash flow visibility. ELOOX equips growing businesses with custom ERP and workflow automation engines built for their exact operations.',
    keyChallenges: [
      {
        title: 'Spreadsheet Sprawl & Data Silos',
        desc: 'Critical business data scattered across Excel, WhatsApp chats, and local hard drives with no single source of truth.',
      },
      {
        title: 'Inventory & Order Fulfillment Discrepancies',
        desc: 'Stockouts, over-purchasing, and lost orders between the sales team, warehouse, and fulfillment dispatch.',
      },
      {
        title: 'Opaque Margin & Cash Flow Telemetry',
        desc: 'Owners cannot determine true project or product profitability until months later when accountant reports arrive.',
      },
      {
        title: 'Manual Repetitive Back-Office Labor',
        desc: 'Valuable staff spending half their work week copying invoice details and chasing overdue payments.',
      },
    ],
    tailoredSolutions: [
      {
        title: 'Synchronized Inventory & Order ERP',
        desc: 'Real-time stock tracking across multiple warehouses, automated purchase order reorder triggers, and barcode scanning.',
        icon: 'Boxes',
      },
      {
        title: 'Automated Invoicing & Collections Engine',
        desc: 'Instant invoice creation upon dispatch, automated multi-stage payment nudges, and integration with banking APIs.',
        icon: 'Receipt',
      },
      {
        title: 'Executive Financial Cockpit',
        desc: 'Real-time dashboard displaying daily revenue, receivables aging, cost of goods, and net operating margins.',
        icon: 'BarChart2',
      },
      {
        title: 'Self-Healing Workflow Automation',
        desc: 'Autonomous pipelines linking e-commerce, CRM, warehouse dispatch, and accounting with zero manual touchpoints.',
        icon: 'Zap',
      },
    ],
    architectureFocus: [
      'Cloudflare Edge database with instant mobile synchronization for field workers',
      'Immutable audit logging ensuring zero stock shrinkage or unauthorized edits',
      'Fast 2-week phased rollout with zero downtime for daily operations',
      'Low total cost of ownership without recurring per-user SaaS license fees',
    ],
    metrics: [
      { value: '35 hrs', label: 'Admin Time Saved Per Week' },
      { value: '48%', label: 'Cycle Time Reduction' },
      { value: '$4.2M', label: 'Client Operational Savings' },
    ],
    caseStudyPreview: {
      title: 'Global Freight & Multi-Warehouse ERP Modernization',
      result: '$4.2M in annual operational savings and 100% billing accuracy',
      summary: 'Consolidated 6 legacy systems into a single modular ERP, synchronizing 1.4 million shipping records with real-time GPS telemetry.',
    },
  },
  {
    slug: 'startups',
    name: 'High-Growth Tech Startups',
    badge: 'ZERO TO ONE · SEED TO SERIES B · SCALE',
    heroHeadline: 'Rapid MVP engineering, scalable edge backends, and predictable CAC engines.',
    tagline: 'Partnering with venture-backed founders to turn technical debt into compounding product velocity.',
    description: 'Founders must move with unmatched speed without sacrificing architectural rigor. ELOOX works directly with startup leadership to architect production-ready digital products, deploy sub-50ms serverless architectures, and construct high-converting outbound pipeline engines.',
    keyChallenges: [
      {
        title: 'Urgent Time-to-Market Demands',
        desc: 'Need to ship commercial-grade MVPs in 6–8 weeks to validate market thesis and secure follow-on financing.',
      },
      {
        title: 'Fragile Architectures & Technical Debt',
        desc: 'Early prototypes crashing under load, slow API response times, and unmaintainable spaghetti codebases.',
      },
      {
        title: 'Unpredictable Customer Acquisition Costs (CAC)',
        desc: 'Inability to generate consistent, qualified B2B enterprise demos without burning unsustainable ad spend.',
      },
      {
        title: 'Engineering Bandwidth Constraints',
        desc: 'Founding teams stretched thin between customer support, bug fixing, and critical core roadmap development.',
      },
    ],
    tailoredSolutions: [
      {
        title: 'High-Velocity React & TypeScript MVPs',
        desc: 'Clean, modular frontend and backend architectures built to scale gracefully from 100 to 100,000 active users.',
        icon: 'Code',
      },
      {
        title: 'Cloudflare Edge Infrastructure',
        desc: 'Serverless, globally distributed database and compute architecture with near-zero idle infrastructure cost.',
        icon: 'Cloud',
      },
      {
        title: 'Turnkey Outbound RevOps Engine',
        desc: 'Secondary domain setup, verified B2B prospecting lists, and automated email sequences that deliver warm executive calls.',
        icon: 'TrendingUp',
      },
      {
        title: 'Modular SaaS Subscription Architecture',
        desc: 'Pre-built Stripe billing, team roles, usage metering, and developer API authentication ready out-of-the-box.',
        icon: 'CreditCard',
      },
    ],
    architectureFocus: [
      'Zero-cold-start edge workers with sub-20ms global execution time',
      'Type-safe end-to-end contracts using Zod schemas and TypeScript',
      'Automated preview environments for every git branch pull request',
      'Cost-optimized architecture that remains free/low-cost until significant scale',
    ],
    metrics: [
      { value: '2.5x', label: 'Faster Time-to-Market' },
      { value: '310%', label: 'Pipeline Growth' },
      { value: '< 20ms', label: 'Global Edge Execution' },
    ],
    caseStudyPreview: {
      title: 'Autonomous Outbound & B2B Pipeline Engine for FinTech SaaS',
      result: '310% increase in qualified sales pipeline within 60 days',
      summary: 'Engineered a multi-domain outbound engine with AI intent scoring, reducing average sales cycle time from 42 days to 28 days.',
    },
  },
  {
    slug: 'corporate-offices',
    name: 'Corporate Offices & Enterprises',
    badge: 'GOVERNANCE · COMPLIANCE · INTER-DEPARTMENTAL',
    heroHeadline: 'Resilient, compliant, and integrated operational ecosystems for enterprise scale.',
    tagline: 'Bridging enterprise software silos with low-latency middleware, granular RBAC, and executive telemetry.',
    description: 'Large enterprise offices often struggle with software bloat, disconnected departmental databases, and slow quarterly reporting cycles. ELOOX designs bespoke enterprise middleware, centralized business intelligence cockpits, and automated governance workflows.',
    keyChallenges: [
      {
        title: 'Disconnected Departmental Silos',
        desc: 'Finance, HR, Operations, and Sales using isolated software that fails to share real-time operational data.',
      },
      {
        title: 'Strict Security & Compliance Gates',
        desc: 'Need for SOC2 / GDPR compliance, granular access controls, single sign-on (SSO), and immutable audit logs.',
      },
      {
        title: 'Lagging Executive Decision Telemetry',
        desc: 'C-suite relying on monthly backward-looking reports rather than live operational performance data.',
      },
      {
        title: 'Slow Legacy Software Interfaces',
        desc: 'Clunky enterprise tools causing employee frustration, slow customer response times, and high training costs.',
      },
    ],
    tailoredSolutions: [
      {
        title: 'Enterprise Middleware & Data Lakes',
        desc: 'Bi-directional synchronization bridges connecting legacy SAP, Oracle, or Microsoft databases with modern web interfaces.',
        icon: 'Layers',
      },
      {
        title: 'Executive Real-Time Intelligence Cockpit',
        desc: 'Live telemetry displaying enterprise-wide headcount, cash burn, compliance status, and operational throughput.',
        icon: 'Gauge',
      },
      {
        title: 'Zero-Trust Role-Based Access Control',
        desc: 'Granular permissions, hardware key FIDO2 / 2FA integration, and tamper-evident cryptographic event logging.',
        icon: 'Shield',
      },
      {
        title: 'Departmental Workflow Orchestration',
        desc: 'Automated multi-level approval hierarchies for vendor contracts, employee promotions, and capital expenditures.',
        icon: 'Workflow',
      },
    ],
    architectureFocus: [
      'Edge deployment with Cloudflare enterprise network redundancy and DDoS protection',
      'SOC2 / ISO 27001 readiness with comprehensive audit trail schemas',
      'Isolated VPC and secure tunnel connectivity to on-premise mainframes',
      'Sub-second query response times across multi-million record enterprise tables',
    ],
    metrics: [
      { value: '< 200ms', label: 'Inter-Departmental Sync' },
      { value: '100%', label: 'Immutable Audit Trail' },
      { value: '99.99%', label: 'High Availability Target' },
    ],
    caseStudyPreview: {
      title: 'Corporate Multi-Entity Financial Telemetry Portal',
      result: 'Consolidated 14 regional branch ledgers into a live sub-second cockpit',
      summary: 'Built a secure Cloudflare edge portal allowing corporate executives to review unified balance sheets, cash liquidity, and tax compliance across 4 countries.',
    },
  },
];

