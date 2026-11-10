export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  clientCategory: string;
  industry: string;
  serviceCategory: string;
  summary: string;
  problem: string;
  solution: string;
  technologies: string[];
  verifiedOutcomes: { value: string; label: string }[];
  architectureHighlights: string[];
  systemArtifacts: string[];
}

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'global-freight-erp',
    slug: 'global-freight-erp',
    title: 'Global Freight & Multi-Warehouse ERP Modernization',
    clientCategory: 'Mid-Market Enterprise',
    industry: 'Small & Medium Businesses',
    serviceCategory: 'Business Systems & ERP',
    summary: 'Consolidated six fragmented spreadsheet and desktop systems into a unified Cloudflare Edge ERP, synchronizing 1.4 million shipping records with real-time GPS telemetry.',
    problem: 'The client handled over 15,000 monthly freight shipments across 8 regional warehouses. Information was siloed across legacy Microsoft Access databases, paper waybills, and Excel spreadsheets. Invoicing was delayed by an average of 18 days, and inventory shrinkage exceeded 4.5% annually due to lack of real-time audit trails.',
    solution: 'ELOOX engineered a modular, cloud-native ERP application on Cloudflare Workers and D1 database. The system integrates barcode scanner terminals, automatic GPS waybill tracking, automated invoice generation upon delivery confirmation, and role-based operational dashboards for warehouse staff and executives.',
    technologies: ['React 18', 'TypeScript', 'Cloudflare Workers', 'Cloudflare D1', 'Tailwind CSS', 'Docker'],
    verifiedOutcomes: [
      { value: '48%', label: 'Cycle Time Reduction' },
      { value: '$4.2M', label: 'Annual Operational Cost Savings' },
      { value: '18 -> 0 Days', label: 'Invoicing Lag Eliminated' },
      { value: '100%', label: 'Billing Discrepancy Reconciliation' },
    ],
    architectureHighlights: [
      'Sub-50ms query responses across 1.4M shipment rows via parameterised D1 indexes',
      'Offline-capable PWA scanner interface for warehouse floor personnel',
      'Immutable cryptographic event log for every inventory movement',
      'Automated nightly database snapshots with multi-region failover',
    ],
    systemArtifacts: [
      'Warehouse Dispatch & Waybill Management Console',
      'Real-time Fleet Telemetry & Container Tracker',
      'Automated Accounts Receivable & Billing Engine',
      'Executive Profitability & Margin Dashboard',
    ],
  },
  {
    id: 'multi-campus-student-erp',
    slug: 'multi-campus-student-erp',
    title: 'Multi-Campus Unified Student Lifecycle Platform',
    clientCategory: 'Higher Education Network',
    industry: 'Education & Universities',
    serviceCategory: 'Software & Digital Products',
    summary: 'Constructed an institutional digital campus operating platform supporting 65,000+ students across 12 faculties, unifying admissions, academic scheduling, and fee collection.',
    problem: 'A collegiate university group with 12 faculties operated with separate local student databases for each department. Admissions processing took up to 3 weeks per candidate, fee reconciliation required manual bank receipt matching, and examination result publication regularly crashed campus servers due to traffic spikes.',
    solution: 'Designed and deployed an institutional student information system with a high-throughput public admissions portal, biometric campus gate integrations, automated online payment reconciliation, and a serverless student portal capable of serving 50,000 concurrent page requests during result announcements.',
    technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Cloudflare Edge KV', 'PostgreSQL', 'Twilio SMS'],
    verifiedOutcomes: [
      { value: '65,000+', label: 'Active Students Handled' },
      { value: '72%', label: 'Drop in Administrative Enquiries' },
      { value: '48 Hours', label: 'Average Admissions Decision Time' },
      { value: '99.99%', label: 'Exam Portal Peak Uptime' },
    ],
    architectureHighlights: [
      'Edge-cached exam result distribution preventing database load spikes',
      'Biometric attendance sync pushing instant SMS check-in alerts to parents',
      'Integrated payment gateway handling multi-currency tuition installments',
      'Granular role-based portals for students, professors, and campus administration',
    ],
    systemArtifacts: [
      'Mobile-First Student & Parent Self-Service Portal',
      'Biometric Attendance & Leave Tracking Hub',
      'Institutional Admissions & Seat Allocation Engine',
      'Automated Tuition & Bank Reconciliation Ledger',
    ],
  },
  {
    id: 'autonomous-fintech-revops',
    slug: 'autonomous-fintech-revops',
    title: 'Autonomous Outbound & B2B Pipeline Engine for FinTech SaaS',
    clientCategory: 'Venture-Backed Startup',
    industry: 'Startups',
    serviceCategory: 'Revenue Operations',
    summary: 'Constructed a full-funnel outbound sales infrastructure combining secondary domain clusters, AI-driven prospect qualification, and bi-directional CRM orchestration.',
    problem: 'A B2B FinTech software provider with a $35,000 average contract value was struggling with unpredictable demo bookings, a long 42-day sales cycle, and email deliverability issues caused by sending mass cold emails from their primary company domain.',
    solution: 'ELOOX engineered a dedicated RevOps outbound system: configured 12 secondary domain inboxes with strict SPF/DKIM/DMARC protocols, built an automated prospect enrichment scraper identifying companies actively hiring compliance teams, and automated calendar appointment booking directly into AE schedules.',
    technologies: ['Resend API', 'Cloudflare KV', 'HubSpot API', 'DMARC / DKIM', 'TypeScript', 'Webhooks'],
    verifiedOutcomes: [
      { value: '310%', label: 'Qualified Pipeline Growth' },
      { value: '14 Days', label: 'Sales Cycle Reduction (42 -> 28 Days)' },
      { value: '98.8%', label: 'Inbox Placement Rate' },
      { value: '$3.8M', label: 'Closed ARR Generated in 12 Months' },
    ],
    architectureHighlights: [
      'Zero-risk secondary domain cluster safeguarding primary corporate brand email',
      'Autonomous intent scoring filtering out prospects with under $5M revenue',
      'Bi-directional deal stage sync between outreach software and HubSpot CRM',
      'Real-time Slack alerts notifying sales reps 15 minutes before discovery calls',
    ],
    systemArtifacts: [
      'Outbound Account Identification & Enrichment Pipeline',
      'Multi-Touch Cold Email & LinkedIn Cadence Engine',
      'Two-Way Executive Calendar Scheduler with Turnstile Defense',
      'Executive Pipeline Velocity & Conversion Analytics Cockpit',
    ],
  },
  {
    id: 'corporate-financial-portal',
    slug: 'corporate-financial-portal',
    title: 'Corporate Multi-Entity Financial Telemetry Portal',
    clientCategory: 'Multinational Corporation',
    industry: 'Corporate Offices',
    serviceCategory: 'Business Systems & ERP',
    summary: 'Consolidated 14 regional branch ledgers into a live sub-second executive portal, delivering unified balance sheets, currency reconciliation, and automated tax compliance.',
    problem: 'A multinational corporate entity with 14 operating branches across 4 countries relied on month-end spreadsheet consolidation that arrived 25 days after month-close. Executive leadership had zero visibility into real-time group-level cash positions or inter-company loan liabilities.',
    solution: 'ELOOX built an edge-deployed financial telemetry portal that connects via secure API bridges to each branch’s local accounting software. The system performs automated currency conversions, flags inter-company invoice mismatches, and renders live consolidated group P&L statements in under 200ms.',
    technologies: ['React 18', 'TypeScript', 'Cloudflare Workers', 'PostgreSQL', 'Tailwind CSS', 'FIDO2 Auth'],
    verifiedOutcomes: [
      { value: '< 200ms', label: 'Financial Data Query Latency' },
      { value: '25 -> 0 Days', label: 'Lag to View Group Cash Positions' },
      { value: '100%', label: 'Audit Trail Verification' },
      { value: '14 Branches', label: 'Real-Time Connected Entities' },
    ],
    architectureHighlights: [
      'Hardware-key MFA enforcement for all executive financial viewers',
      'Immutable database audit logging for all journal entry adjustments',
      'Automated daily multi-currency exchange rate calculation',
      'One-click export of IFRS-compliant consolidated audit packs',
    ],
    systemArtifacts: [
      'Group Consolidated Balance Sheet & P&L Cockpit',
      'Inter-Company Transaction Reconciliation Ledger',
      'Real-Time Cash Liquidity & FX Exposure Matrix',
      'Regulatory Tax & Compliance Filing Vault',
    ],
  },
];

