export interface ProductDetail {
  id: string;
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  status: 'Live' | 'Beta' | 'Coming Soon';
  badge: string;
  features: string[];
  specs: { label: string; value: string }[];
  uiPreviewDetails: {
    dashboardTitle: string;
    metrics: { label: string; value: string; change: string }[];
    recentLogs: { timestamp: string; event: string; status: string }[];
  };
  demoLink: string;
}

export const PRODUCTS_DATA: ProductDetail[] = [
  {
    id: 'eloox-flow',
    slug: 'eloox-flow',
    name: 'Eloox Flow™',
    category: 'Autonomous Workflow & Event Orchestrator',
    tagline: 'Self-healing enterprise event triggers and automated multi-system pipelines.',
    description: 'An enterprise event-driven automation platform that bridges internal databases, external SaaS tools, and AI agents. Executes complex multi-step validations, document processing, and system updates in sub-millisecond speeds with cryptographic audit trails.',
    status: 'Beta',
    badge: 'PRIVATE BETA // V0.9',
    features: [
      'Visual directed acyclic graph (DAG) workflow builder with TypeScript code escape hatches',
      'Autonomous error handling with exponential backoff and dead-letter retry buffers',
      'Enterprise webhook multiplexing and zero-drop message queues',
      'Tamper-evident audit logging with SHA-256 event hashing',
      'Native edge connectors for Cloudflare D1, PostgreSQL, HubSpot, Stripe, and Slack',
    ],
    specs: [
      { label: 'Event Propagation', value: '< 4ms' },
      { label: 'Runtime Environment', value: 'Cloudflare Edge V8' },
      { label: 'Max Throughput', value: '100,000 req/sec' },
      { label: 'Encryption Standard', value: 'TLS 1.3 / AES-256' },
    ],
    uiPreviewDetails: {
      dashboardTitle: 'Eloox Flow // Event Pipeline Telemetry',
      metrics: [
        { label: 'Events Processed (24h)', value: '1.42M', change: '+14.2%' },
        { label: 'Mean Execution Time', value: '3.8ms', change: '-12%' },
        { label: 'Autonomous Recovery Rate', value: '99.98%', change: 'Optimal' },
        { label: 'Dead Letter Queue', value: '0 items', change: 'Clean' },
      ],
      recentLogs: [
        { timestamp: '10:42:01.024', event: 'order.payment_verified -> trigger_invoice', status: 'COMPLETED (3.2ms)' },
        { timestamp: '10:42:02.110', event: 'student.attendance_marked -> sms_parent_dispatch', status: 'COMPLETED (4.1ms)' },
        { timestamp: '10:42:04.552', event: 'lead.high_intent_detected -> enrich_hubspot', status: 'COMPLETED (2.9ms)' },
        { timestamp: '10:42:06.890', event: 'crm.deal_won -> provision_client_portal', status: 'COMPLETED (5.4ms)' },
      ],
    },
    demoLink: '/book?product=eloox-flow',
  },
  {
    id: 'eloox-revpulse',
    slug: 'eloox-revpulse',
    name: 'Eloox RevPulse™',
    category: 'Predictive Revenue Telemetry & Pipeline Intelligence',
    tagline: 'Real-time sales velocity monitoring, deal risk alerts, and ARR forecasting.',
    description: 'A predictive revenue operations engine designed to eliminate surprise quarter-end revenue misses. RevPulse continuously monitors email response rates, prospect engagement velocity, and CRM stage durations to forecast closed revenue with mathematical precision.',
    status: 'Live',
    badge: 'GENERAL AVAILABILITY // V1.2',
    features: [
      'Multi-touch revenue attribution identifying highest-ROI acquisition channels',
      'Automated deal stall warnings when prospect response latency exceeds thresholds',
      'Bayesian forecast simulation engine replacing subjective sales manager gut-feel',
      'Bi-directional synchronization with HubSpot, Salesforce, Stripe, and QuickBooks',
      'Automated executive PDF and Slack digest snapshots delivered weekly',
    ],
    specs: [
      { label: 'Forecast Accuracy', value: '94.2% verified' },
      { label: 'Sync Latency', value: 'Sub-minute bi-directional' },
      { label: 'Supported CRM Platforms', value: 'HubSpot, Salesforce, Pipedrive' },
      { label: 'Security Verification', value: 'SOC2 Type II Aligned' },
    ],
    uiPreviewDetails: {
      dashboardTitle: 'Eloox RevPulse // Executive Revenue Cockpit',
      metrics: [
        { label: 'Q4 Forecasted ARR', value: '$11.8M', change: '94% Confidence' },
        { label: 'Active Pipeline Coverage', value: '3.8x', change: '+0.4x' },
        { label: 'Average Deal Velocity', value: '24.2 Days', change: '-5.2 Days' },
        { label: 'At-Risk Deal Pipeline', value: '$420,000', change: '3 Deals Flagged' },
      ],
      recentLogs: [
        { timestamp: '10:14:22', event: 'Acme Corp Deal: Buyer stalled at Security Review (Day 8)', status: 'WARNING' },
        { timestamp: '10:28:44', event: 'GlobalTech Ltd: Exec Sponsor viewed proposal 4x today', status: 'HIGH INTENT' },
        { timestamp: '10:35:10', event: 'Quarterly ARR forecast revised upward by $280,000', status: 'TELEMETRY' },
        { timestamp: '10:41:00', event: 'Outbound campaign B2B-Enterprise achieved 4.1% meeting rate', status: 'OUTPERFORMING' },
      ],
    },
    demoLink: '/book?product=eloox-revpulse',
  },
  {
    id: 'eloox-coreerp',
    slug: 'eloox-coreerp',
    name: 'Eloox CoreERP™',
    category: 'Modular Next-Gen Enterprise Operating System',
    tagline: 'Lightweight, ultra-fast ERP engineered for modern distributed operations.',
    description: 'A modular, cloud-native enterprise operating system designed to replace cumbersome legacy monoliths. Built specifically on Cloudflare Edge infrastructure, CoreERP provides instant page loads, customizable data modules, and zero user-seat licensing penalties.',
    status: 'Coming Soon',
    badge: 'IN ACTIVE DEVELOPMENT // Q1 2027',
    features: [
      'Pluggable operational modules: Inventory, HR, Procurement, Asset Ledger, and Billing',
      'Global edge database distribution with sub-50ms reads in 320+ cities worldwide',
      'Custom visual schema generator with automatic type-safe API generation',
      'Granular multi-tenant RBAC with hardware key FIDO2 / biometric authentication',
      'Zero per-seat licensing model — pay only for system compute, not headcounts',
    ],
    specs: [
      { label: 'Page Load Speed', value: '< 200ms globally' },
      { label: 'Data Architecture', value: 'Decoupled Relational Edge' },
      { label: 'Offline Mode', value: 'PWA IndexedDB Sync' },
      { label: 'Deployment Options', value: 'Private Cloud / Cloudflare' },
    ],
    uiPreviewDetails: {
      dashboardTitle: 'Eloox CoreERP // Multi-Entity Operations Overview',
      metrics: [
        { label: 'Consolidated Cash Flow', value: '$4.82M', change: '+8.4%' },
        { label: 'Global Inventory Turns', value: '6.4x', change: '+1.2x' },
        { label: 'Open Vendor Invoices', value: '14 Pending', change: 'All within SLA' },
        { label: 'Staff Attendance Today', value: '98.4%', change: 'Across 4 branches' },
      ],
      recentLogs: [
        { timestamp: '09:00:12', event: 'London Branch: Daily inventory ledger balanced (0 discrepancies)', status: 'VERIFIED' },
        { timestamp: '09:15:30', event: 'Bengaluru Campus: 1,840 biometric check-ins synchronized', status: 'COMPLETED' },
        { timestamp: '09:30:45', event: 'Dubai Office: Vendor PO-8841 approved by Finance Director', status: 'DISPATCHED' },
        { timestamp: '09:55:18', event: 'Global backup snapshot encrypted and stored in secondary region', status: 'SUCCESS' },
      ],
    },
    demoLink: '/book?product=eloox-coreerp',
  },
];

