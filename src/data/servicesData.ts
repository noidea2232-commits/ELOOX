export interface SubService {
  name: string;
  description: string;
  capabilities: string[];
}

export interface ServiceDetail {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  heroDescription: string;
  overview: string;
  subServices: SubService[];
  architecturePoints: string[];
  targetIndustries: string[];
  techStack: string[];
  deliverables: string[];
  metrics: { value: string; label: string }[];
  faqs: { question: string; answer: string }[];
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    slug: 'business-systems-erp',
    number: '01',
    title: 'Business Systems & ERP',
    tagline: 'Orchestrating the Core Enterprise Operating System',
    heroDescription: 'Tailored enterprise resource planning, modular database architectures, and real-time operational telemetry built for seamless organizational coordination.',
    overview: 'Modern organizations outgrow off-the-shelf software quickly. ELOOX architects custom, modular business systems that unify departmental workflows, inventory, payroll, and student/employee records into a synchronized single source of truth.',
    subServices: [
      {
        name: 'School ERP',
        description: 'Comprehensive K-12 operational management covering admissions, grade books, parental communication portals, fee reconciliation, and bus tracking.',
        capabilities: ['Parent-teacher digital channels', 'Fee collection & automated receipts', 'Exam scoring & grade analytics', 'Transportation & route tracking'],
      },
      {
        name: 'College Management Systems',
        description: 'Modular enterprise suites for multi-faculty colleges and universities: semester enrollment, department budgeting, faculty workloads, and transcript generation.',
        capabilities: ['Credit-based course enrollment', 'Multi-campus financial consolidation', 'Faculty research and workload monitoring', 'Accreditation reporting compliance'],
      },
      {
        name: 'Office ERP',
        description: 'Centralized administrative operating system for corporate branches and SMEs, synchronizing procurement, expense tracking, and vendor management.',
        capabilities: ['Vendor procurement workflows', 'Multi-tier expense approvals', 'Asset lifecycle and depreciation', 'Cross-departmental budget controls'],
      },
      {
        name: 'Employee Management',
        description: 'End-to-end human capital management from contract generation and digital onboarding to role-based access control and performance evaluations.',
        capabilities: ['Self-service employee portal', 'Document verification & NDA signing', 'Performance reviews & KPI tracking', 'Hierarchical org charts'],
      },
      {
        name: 'Attendance & Payroll',
        description: 'Biometric and geo-fenced attendance systems feeding directly into automated multi-tier payroll calculations, deductions, and tax compliance.',
        capabilities: ['Biometric & RFID device sync', 'Leave quota management', 'Automated salary slip dispatch', 'Regulatory tax & benefit deductions'],
      },
      {
        name: 'Operations Dashboards',
        description: 'Sub-second executive decision cockpits aggregating live metrics from supply chain, cash flow, ticket volumes, and staff utilization.',
        capabilities: ['Real-time telemetry widgets', 'Customizable KPI threshold alerts', 'Role-scoped visibility permissions', 'Automated executive PDF reports'],
      },
    ],
    architecturePoints: [
      'Cloudflare Edge Worker routing for sub-50ms global API latency',
      'ACID-compliant SQLite/D1 and PostgreSQL relational schemas',
      'Strict Role-Based Access Control (RBAC) with cryptographic audit logs',
      'Immutable historical transaction logging for complete audit compliance',
    ],
    targetIndustries: ['Education', 'Small & Medium Businesses', 'Corporate Offices'],
    techStack: ['React 18', 'TypeScript', 'Cloudflare Workers', 'SQLite / D1', 'PostgreSQL', 'Tailwind CSS'],
    deliverables: [
      'Full ERP source code and system ownership',
      'Database entity-relationship and migration blueprints',
      'Executive telemetry dashboard',
      'Comprehensive staff training and video manuals',
    ],
    metrics: [
      { value: '45%', label: 'Cycle Time Reduction' },
      { value: '99.98%', label: 'Production Uptime' },
      { value: '35 hrs', label: 'Admin Time Saved Weekly' },
    ],
    faqs: [
      {
        question: 'Can ELOOX integrate with our existing accounting or biometric devices?',
        answer: 'Yes. We build custom API connectors and webhook listeners that interface with physical biometric machines, RFID readers, and accounting systems like QuickBooks, Tally, or NetSuite.',
      },
      {
        question: 'Is the data stored securely and compliant with local data regulations?',
        answer: 'All systems are deployed on Cloudflare infrastructure with TLS 1.3 encryption, parameterised queries to prevent SQL injection, and granular access tokens.',
      },
    ],
  },
  {
    slug: 'crm-sales-intelligence',
    number: '02',
    title: 'CRM & Sales Intelligence',
    tagline: 'Precision Pipeline Telemetry & Account Enrichment',
    heroDescription: 'Transforming sales pipelines into high-converting revenue engines with custom CRMs, intelligent lead scoring, and automated deal velocity analytics.',
    overview: 'A standard CRM is often just a glorified address book. ELOOX designs actionable sales intelligence systems that automatically enrich leads, enforce stage SLAs, and provide leadership with clear, predictive revenue projections.',
    subServices: [
      {
        name: 'Custom CRM Architecture',
        description: 'Bespoke CRM engines modeled specifically around your unique sales cycle, custom data entities, and multi-stakeholder approval gates.',
        capabilities: ['Custom deal stage automations', 'Multi-currency deal tracking', 'Role-based sales team permissions', 'Interactive Kanban & table views'],
      },
      {
        name: 'Lead Management & Enrichment',
        description: 'Autonomous lead ingestion from web forms, LinkedIn, and outbound campaigns with instant firmographic enrichment and duplicate de-duplication.',
        capabilities: ['Instant firmographic data lookup', 'Lead qualification scoring matrix', 'Smart round-robin rep assignment', 'Anti-spam & verification filters'],
      },
      {
        name: 'Sales Pipeline & Velocity Tracking',
        description: 'Live pipeline visualization highlighting stalled deals, rep response latencies, and conversion drop-offs across every stage.',
        capabilities: ['Stage SLA warning timers', 'Deal stall automated alerts', 'Win/loss post-mortem telemetry', 'Historical cohort conversion analytics'],
      },
      {
        name: 'Customer Onboarding Workflows',
        description: 'Automated post-sale handoff triggering welcome sequences, contract signing, kickoff meeting scheduling, and implementation milestones.',
        capabilities: ['Automated handoff from AE to CS', 'Client portal project tracker', 'Document collection checklist', 'Kickoff scheduler integration'],
      },
      {
        name: 'Reporting & Sales Analytics',
        description: 'Executive revenue telemetry showing rep quota attainment, pipeline coverage ratios, CAC payback periods, and predictive deal close forecasts.',
        capabilities: ['Rep leaderboard & quota telemetry', 'Weighted pipeline forecasting', 'Attribution channel ROI reports', 'Scheduled Slack/Email snapshots'],
      },
    ],
    architecturePoints: [
      'Bi-directional sync between sales stages and product usage databases',
      'Event-driven webhook pipelines triggering real-time rep notifications',
      'Zod-validated schemas ensuring zero corrupt contact fields',
      'Sub-10ms key-value caching of active deal pipelines',
    ],
    targetIndustries: ['Startups', 'Small & Medium Businesses', 'Corporate Offices'],
    techStack: ['HubSpot REST API', 'Salesforce Enterprise', 'Cloudflare KV', 'TypeScript', 'Webhooks'],
    deliverables: [
      'Configured CRM instance or custom-built CRM portal',
      'Automated enrichment and assignment workflows',
      'Executive sales dashboard and forecast model',
      'SDR & AE operational playbooks',
    ],
    metrics: [
      { value: '2.8x', label: 'Rep Output Capacity' },
      { value: '14 Days', label: 'Shorter Sales Cycles' },
      { value: '94%', label: 'Forecast Accuracy' },
    ],
    faqs: [
      {
        question: 'Do we have to leave HubSpot or Salesforce to work with ELOOX?',
        answer: 'Not at all. We often build intelligence layers on top of your existing HubSpot or Salesforce instances via their official APIs, or build custom standalone CRMs if you require full IP ownership.',
      },
    ],
  },
  {
    slug: 'ai-automation',
    number: '03',
    title: 'AI & Autonomous Automation',
    tagline: 'Cognitive Task Execution & Agentic Workflows',
    heroDescription: 'Empowering your operations with conversational AI agents, autonomous WhatsApp and email responders, voice intelligence, and self-healing workflow pipelines.',
    overview: 'Human teams should focus on strategic growth and relationship building. ELOOX deploys cognitive AI agents and autonomous event triggers that process inquiries, schedule meetings, parse documents, and execute back-office routines 24/7/365.',
    subServices: [
      {
        name: 'AI Agents',
        description: 'Autonomous cognitive agents equipped with company knowledge, API access, and reasoning capabilities to resolve complex operational tasks.',
        capabilities: ['Contextual multi-turn reasoning', 'Secure tool invocation & API calls', 'Automated escalation to human staff', 'Continuous evaluation telemetry'],
      },
      {
        name: 'Voice Agents',
        description: 'Ultra-low latency conversational voice assistants for inbound customer support, qualification inquiries, and automated appointment rescheduling.',
        capabilities: ['Natural human vocal cadences', 'Real-time speech-to-text & TTS', 'Telephony SIP & Twilio integration', 'Call summary and CRM logging'],
      },
      {
        name: 'WhatsApp Automation',
        description: 'Official WhatsApp Business API bots handling admissions enquiries, order updates, ticket support, and automated interactive notifications.',
        capabilities: ['Official Meta Business API verification', 'Interactive quick-reply buttons', 'Automated document and PDF dispatch', 'Live agent takeover console'],
      },
      {
        name: 'Workflow Automation',
        description: 'Cross-platform event pipelines connecting disjointed SaaS applications to eliminate manual copy-pasting and human error.',
        capabilities: ['Self-healing retry logic', 'Data transformation & cleansing', 'Multi-branch conditional routing', 'Dead-letter queue alerts'],
      },
      {
        name: 'Email Automation',
        description: 'Intelligent inbox sorting, semantic sentiment detection, and automated personalized draft composition for support and sales teams.',
        capabilities: ['Semantic intent classification', 'Automated draft response generation', 'Spam & bounce mitigation', 'Executive digest summarization'],
      },
      {
        name: 'API Integrations',
        description: 'Custom resilient middleware connecting legacy on-premise systems with modern cloud APIs, microservices, and databases.',
        capabilities: ['Rate-limiting & token bucket controls', 'Payload encryption & HMAC signatures', 'Automated schema validation', 'High-throughput concurrency'],
      },
    ],
    architecturePoints: [
      'Cloudflare Workers AI & edge vector embeddings for sub-100ms inference',
      'Granular prompt engineering with deterministic output validation',
      'Zero training on confidential client data — strict privacy compliance',
      'Automated fallback failover routines when external LLM endpoints lag',
    ],
    targetIndustries: ['Education', 'Startups', 'Small & Medium Businesses', 'Corporate Offices'],
    techStack: ['Workers AI', 'OpenAI / Claude SDKs', 'Vector DB', 'Twilio Voice', 'WhatsApp Cloud API', 'Python / TS'],
    deliverables: [
      'Deployed autonomous agent endpoints with monitoring',
      'Voice agent telephony setup with test coverage',
      'WhatsApp Business API integration and templates',
      'Self-healing webhook pipelines and error dashboards',
    ],
    metrics: [
      { value: '92%', label: 'Automated Inquiry Resolution' },
      { value: '< 2s', label: 'Average Voice Agent Latency' },
      { value: '40+ hrs', label: 'Staff Time Saved Weekly' },
    ],
    faqs: [
      {
        question: 'Will our proprietary business data be used to train public AI models?',
        answer: 'Never. We enforce strict enterprise zero-retention policies and private vector embeddings hosted exclusively on your private infrastructure.',
      },
    ],
  },
  {
    slug: 'software-digital-products',
    number: '04',
    title: 'Software & Digital Products',
    tagline: 'Commercial-Grade Web Applications & SaaS Platforms',
    heroDescription: 'From responsive corporate web experiences to complex multi-tenant SaaS platforms, we build digital products engineered for velocity, security, and global scale.',
    overview: 'Digital products are the primary vehicle through which customers experience your brand. We design and engineer bespoke software applications that look striking, load in milliseconds, and handle millions of transactions flawlessly.',
    subServices: [
      {
        name: 'Websites & Brand Portals',
        description: 'High-performance, editorial websites built on modern React stacks with dynamic animations, sub-second TTFB, and strict SEO optimization.',
        capabilities: ['Sub-second Lighthouse 95+ scores', 'Framer Motion interactive storytelling', 'Headless CMS or code-based architecture', 'Automated responsive layouts'],
      },
      {
        name: 'Web Applications',
        description: 'Dynamic single-page and progressive web applications engineered for complex user interactions, data analysis, and workflow execution.',
        capabilities: ['Client-side caching & optimistic UI', 'Complex state management', 'Role-based multi-tier navigation', 'Offline PWA synchronization'],
      },
      {
        name: 'SaaS Development',
        description: 'Multi-tenant software-as-a-service platforms with automated subscription billing, team management, usage metering, and API keys.',
        capabilities: ['Stripe billing & subscription tiers', 'Multi-tenant database tenancy', 'API key provisioning & rate limits', 'Self-serve onboarding flows'],
      },
      {
        name: 'E-commerce Platforms',
        description: 'Custom headless commerce systems with high-conversion checkout flows, inventory synchronization, and localized multi-currency pricing.',
        capabilities: ['High-speed product search & filters', 'Cart abandonment recovery hooks', 'Payment gateway tokenization', 'Automated shipping label APIs'],
      },
      {
        name: 'Customer Portals',
        description: 'Secure client-facing dashboards for document exchange, project tracking, support ticket submission, and invoice downloads.',
        capabilities: ['Secure magic link / 2FA login', 'Confidential file vault with presigned URLs', 'Live project milestone progress', 'Direct support messaging channel'],
      },
    ],
    architecturePoints: [
      'Cloudflare Pages / Workers global static asset edge distribution',
      'TypeScript strict typing throughout client and API boundary',
      'Tailwind CSS design token system ensuring visual consistency',
      'Code-splitting and tree-shaking keeping bundles under 150KB gzipped',
    ],
    targetIndustries: ['Startups', 'Education', 'Small & Medium Businesses', 'Corporate Offices'],
    techStack: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Cloudflare D1'],
    deliverables: [
      'Production-ready git repository with clean commit history',
      'Automated CI/CD build and preview deployment pipelines',
      'Design system UI component documentation',
      'Post-launch SLA maintenance and monitoring',
    ],
    metrics: [
      { value: '< 150KB', label: 'Initial Gzipped Bundle' },
      { value: '99.98%', label: 'Global Edge Uptime' },
      { value: '3.4x', label: 'Faster Load Times' },
    ],
    faqs: [
      {
        question: 'Who owns the intellectual property and source code?',
        answer: 'You retain 100% full intellectual property and source code ownership upon project completion. We do not lock you into proprietary hosting.',
      },
    ],
  },
  {
    slug: 'revenue-operations',
    number: '05',
    title: 'Revenue Operations (RevOps)',
    tagline: 'Connected Demand Generation & Pipeline Engines',
    heroDescription: 'Building resilient outbound systems, performance campaigns, cold email clusters, and sales development engines that reliably fill pipelines.',
    overview: 'Great software requires an equally intelligent revenue engine. ELOOX RevOps aligns technology, outbound marketing, and sales development to generate qualified discovery calls and drive predictable contract closes.',
    subServices: [
      {
        name: 'Performance Marketing',
        description: 'Targeted account-based advertising campaigns across Google and LinkedIn optimized for qualified B2B pipeline value rather than vanity clicks.',
        capabilities: ['High-intent search keyword harvesting', 'LinkedIn ABM account matching', 'Conversion-optimized landing pages', 'Real-time ROAS tracking'],
      },
      {
        name: 'Lead Generation',
        description: 'Comprehensive ICP (Ideal Customer Profile) modeling and automated scraping to surface verified decision-makers across target sectors.',
        capabilities: ['Zero-bounce verified email lookups', 'Direct mobile & LinkedIn profile match', 'Trigger event tracking (funding, hiring)', 'Custom TAM market sizing'],
      },
      {
        name: 'B2B Outreach & Prospecting',
        description: 'Multi-touch outbound campaigns pairing relevant personalized messaging with value-driven technical case studies.',
        capabilities: ['Multi-channel touchpoints (Email + LinkedIn)', 'Persona-specific value propositions', 'Automated follow-up cadence governance', 'Strict reply sentiment tagging'],
      },
      {
        name: 'Cold Email Infrastructure',
        description: 'Enterprise email infrastructure setup: secondary domain clusters, SPF/DKIM/DMARC alignment, automated mailbox warming, and inbox placement.',
        capabilities: ['Domain reputation protection', 'Automated mailbox warmup pools', 'Custom MX record configurations', '99%+ inbox placement rate'],
      },
      {
        name: 'Sales Development (SDR)',
        description: 'Dedicated SDR playbooks, objection-handling frameworks, and qualified outreach reps that converse directly with target prospects.',
        capabilities: ['Pre-vetted prospect qualification', 'Objection handling matrices', 'Direct CRM lead status handoff', 'Continuous call script refinement'],
      },
      {
        name: 'Appointment Setting',
        description: 'Seamless calendar booking directly into your executive calendars with verified agenda briefs and mutual qualification criteria.',
        capabilities: ['Two-way Google Calendar integration', 'Pre-call qualification questionnaires', 'Automated SMS & email reminders', 'Zero double-booking protection'],
      },
      {
        name: 'CRM Implementation',
        description: 'Full-cycle configuration of sales stages, deal pipelines, custom properties, and automated notifications in HubSpot or Salesforce.',
        capabilities: ['Pipeline stage standardization', 'Custom deal property schema', 'Automated stage change notifications', 'Data hygiene & de-duplication rules'],
      },
      {
        name: 'Conversion Optimisation (CRO)',
        description: 'Data-driven landing page optimization, copy testing, and frictionless form UX designed to maximize conversion rates.',
        capabilities: ['A/B headline and copy testing', 'Heatmap and scroll depth analytics', 'Frictionless multi-step form funnels', 'Turnstile bot-free verification'],
      },
    ],
    architecturePoints: [
      'Multi-domain DNS infrastructure with automated DMARC report monitoring',
      'Cloudflare KV lead tracking preventing duplicate outreach within 90 days',
      'Real-time webhook ingestion into CRM and Slack sales alert channels',
      'Strict GDPR and CAN-SPAM compliance with automated unsubscribe suppression',
    ],
    targetIndustries: ['Startups', 'Small & Medium Businesses', 'Corporate Offices'],
    techStack: ['Resend API', 'DMARC / DKIM', 'HubSpot / Salesforce', 'Apollo API', 'Cloudflare Edge'],
    deliverables: [
      'Warmed, secondary domain cold email cluster',
      'Verified list of 2,500+ target account decision-makers',
      'Tested multi-touch email and LinkedIn messaging sequences',
      'Executive pipeline telemetry dashboard',
    ],
    metrics: [
      { value: '310%', label: 'Pipeline Growth' },
      { value: '98.8%', label: 'Inbox Placement Rate' },
      { value: '3.5%', label: 'Meeting Booking Rate' },
    ],
    faqs: [
      {
        question: 'Does cold outreach risk our primary company domain reputation?',
        answer: 'Never. We deploy dedicated secondary domains specifically warmed and isolated from your primary corporate email domain to safeguard your core reputation.',
      },
    ],
  },
];

