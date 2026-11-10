export interface SolutionItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  summary: string;
  benefits: string[];
  connectedModules: string[];
  architectureDiagramDesc: string;
  typicalOutcome: string;
}

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: 'school-management',
    slug: 'school-management',
    title: 'Connected School Management Ecosystem',
    category: 'Education Solutions',
    tagline: 'A unified operating platform linking admissions, academics, fees, and parental channels.',
    summary: 'Replaces 4–6 disparate educational tools with a cohesive campus management architecture. Tracks the entire student journey while providing staff and parents with instant digital transparency.',
    benefits: [
      'Eliminates duplicate manual data entry across departments',
      'Instant parent notifications via automated SMS and mobile apps',
      'Real-time classroom attendance tracking and teacher workload balances',
      'Automated semester exam scheduling and digital report card distribution',
    ],
    connectedModules: ['Admissions Gateway', 'Fee Reconciliation Engine', 'Biometric Attendance', 'Parental Communication App', 'Exam Grading Suite'],
    architectureDiagramDesc: 'Edge Database -> Webhook Gateway -> Biometric Sync -> Role-Based Web & Mobile Apps',
    typicalOutcome: '65% reduction in administrative overhead and zero tuition reconciliation discrepancies.',
  },
  {
    id: 'office-operations',
    slug: 'office-operations',
    title: 'Autonomous Office Operations & Resource ERP',
    category: 'Enterprise Solutions',
    tagline: 'Frictionless inter-departmental workflows, asset tracking, and staff management.',
    summary: 'A centralized operational nervous system for modern corporate branches and multi-location companies. Manages procurement, employee requests, asset allocation, and branch budgets in one seamless portal.',
    benefits: [
      'Multi-level approval workflows for departmental purchase orders',
      'Automated payroll generation tied to biometric attendance logs',
      'Hardware and digital asset tracking with automated warranty alerts',
      'Real-time operational cash flow and expense categorization',
    ],
    connectedModules: ['Procurement Approval Hub', 'Employee Self-Service', 'Payroll & Tax Engine', 'Asset Inventory Ledger', 'Branch Expense Telemetry'],
    architectureDiagramDesc: 'Cloudflare Worker Core -> D1 Relational DB -> Email / Slack Approval Hooks -> Bank Payment Batch',
    typicalOutcome: 'Saves 35+ hours of administrative work each week across administrative teams.',
  },
  {
    id: 'admissions-management',
    slug: 'admissions-management',
    title: 'Intelligent Admissions & Enrollment Pipeline',
    category: 'Education & Institutions',
    tagline: 'Turn prospective applicants into confirmed enrollments with automated verification.',
    summary: 'A fast, mobile-first admissions portal that guides parents and students through application submissions, document verification, automated entrance exams, and fee deposit processing.',
    benefits: [
      'Zero paperwork with instant document upload and OCR verification',
      'Automated eligibility scoring and entrance test slot booking',
      'Proactive WhatsApp and email status nudges reducing drop-offs',
      'Instant generation of enrollment letters and student ID numbers',
    ],
    connectedModules: ['Online Application Portal', 'Document Verification OCR', 'Payment Deposit Gateway', 'Seat Allocation Matrix', 'Welcome Sequence Trigger'],
    architectureDiagramDesc: 'Public Form -> Turnstile Verification -> Document Parser -> Admissions CRM -> SMS Trigger',
    typicalOutcome: 'Accelerates application-to-admission cycle times from 21 days down to 48 hours.',
  },
  {
    id: 'sales-management',
    slug: 'sales-management',
    title: 'High-Velocity Sales Pipeline & CRM Architecture',
    category: 'Commercial Growth',
    tagline: 'Enforce stage governance, eliminate dead leads, and give leadership forecast certainty.',
    summary: 'Custom pipeline architecture configured around your exact B2B deal milestones. Enforces response SLAs, automates prospect research, and alerts management to deal stall risks before revenue is lost.',
    benefits: [
      'Automated lead enrichment providing firmographic data within seconds',
      'Strict stage gate checklists ensuring qualified deal progression',
      'Automated follow-up reminders preventing leads from going cold',
      'Weighted revenue forecast models calibrated to historical win rates',
    ],
    connectedModules: ['Deal Stage Kanban', 'Enrichment Telemetry', 'Rep Activity Tracker', 'SLA Alert Engine', 'Executive Forecast Model'],
    architectureDiagramDesc: 'Lead Intake -> Firmographic API -> Stage Engine -> Rep Notification -> Revenue Dashboard',
    typicalOutcome: '2.8x increase in average sales rep pipeline capacity and 14 days shaved off deal cycles.',
  },
  {
    id: 'customer-onboarding',
    slug: 'customer-onboarding',
    title: 'Automated Customer Onboarding & Activation Hub',
    category: 'Client Success & Retention',
    tagline: 'Deliver unmatched time-to-value from the minute contracts are executed.',
    summary: 'Bridges the critical gap between sales closing and active customer usage. Automatically provisions client accounts, generates secure onboarding checklists, schedules kickoffs, and monitors milestone completion.',
    benefits: [
      'Eliminates post-sale confusion with a branded client onboarding portal',
      'Automated task assignments and document upload reminders',
      'Live milestone progress tracking for both client and internal teams',
      'Automated satisfaction surveys upon completion of onboarding phases',
    ],
    connectedModules: ['Closed-Won Deal Listener', 'Branded Client Portal', 'Document Collection Vault', 'Kickoff Scheduler', 'Health Score Engine'],
    architectureDiagramDesc: 'Contract Signed -> Webhook Listener -> Auto-Provision Client Portal -> Calendar Dispatch',
    typicalOutcome: 'Cuts customer time-to-value by 60% and reduces first-quarter churn to near zero.',
  },
  {
    id: 'business-intelligence',
    slug: 'business-intelligence',
    title: 'Executive Real-Time Business Intelligence Cockpit',
    category: 'Data & Telemetry',
    tagline: 'Sub-second operational insight across every branch, team, and balance sheet.',
    summary: 'Stops leadership from flying blind between monthly accounting reports. Ingests data from ERPs, CRMs, bank accounts, and customer support into an interactive, sub-second telemetry cockpit.',
    benefits: [
      'Sub-second query response times even across millions of records',
      'Custom KPI alerts delivered directly to executive phones and Slack',
      'Drill-down capability from company-wide summaries to single transactions',
      'Granular data permissioning ensuring department heads only view authorized metrics',
    ],
    connectedModules: ['Edge Telemetry Engine', 'Multi-Source Data Ingestion', 'Cash Burn & Margin Model', 'Automated Daily Snapshot', 'Role Scoping Matrix'],
    architectureDiagramDesc: 'Operational Databases -> Edge Caching Layer -> Sub-Second Aggregate Queries -> Executive UI',
    typicalOutcome: 'Instant executive clarity on unit economics, runway, and department throughput.',
  },
  {
    id: 'marketing-to-sales-systems',
    slug: 'marketing-to-sales-systems',
    title: 'Connected Marketing-to-Sales Demand Engine',
    category: 'Revenue Operations',
    tagline: 'Seamlessly transition outbound demand and inbound clicks into booked sales calls.',
    summary: 'A unified revenue operations pipeline that ties advertising and cold email outreach directly to CRM deal creation, calendar booking, and attribution analytics without manual data transfer.',
    benefits: [
      'Zero lead leakage between marketing channels and sales reps',
      'Multi-touch attribution pinpointing exact revenue generated per campaign',
      'Frictionless calendar scheduling embedded directly in outreach flows',
      'Automated lead qualification filtering out tire-kickers before calls occur',
    ],
    connectedModules: ['Campaign Ingestion Engine', 'Lead Verification & Scoring', 'Two-Way Calendar Scheduler', 'Attribution Telemetry', 'CRM Deal Creator'],
    architectureDiagramDesc: 'Cold Email / Ad Click -> Verified Funnel -> Booking Interface -> CRM Ingestion -> Rep Calendar',
    typicalOutcome: '310% growth in qualified pipeline and a closed-loop view of customer acquisition costs.',
  },
];

