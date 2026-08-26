export type SubService = {
  title: string;
  caption: string;
  description: string;
  bullets: string[];
};

export type Service = {
  slug: string;
  title: string;
  divisionCode: string;
  caption: string;
  description: string;
  items: SubService[];
  bullets: string[];
  motif: 'rebar' | 'villa' | 'tower' | 'gantt' | 'beam';
};

export const SERVICES: Service[] = [
  {
    slug: 'construction-services',
    title: 'Construction Services',
    divisionCode: 'DIVISION 01',
    caption: 'Turnkey New Builds & Engineering Execution',
    description:
      'End-to-end turnkey building and structural engineering construction are taken up across Bengaluru. Guided by Founder Anuj Jain (B.E. Civil, M.Tech Structural), every villa, apartment building, commercial tower, and RCC frame is built with ETABS load modelling and zero-compromise engineering.',
    bullets: [
      'Residential Construction (Villas, row houses, custom homes)',
      'Commercial Building Construction (Offices, retail, mixed-use towers)',
    ],
    motif: 'villa',
    items: [
      {
        title: 'Residential Construction',
        caption: 'Villas, row houses, custom homes, apartment buildings',
        description:
          'Homes are the work we are most known for. We build for owners who plan to live in the house for decades. That means honest materials, generous tolerances, and a finishes schedule signed off before the slab is poured.',
        bullets: [
          'Independent villas (G+1 to G+3)',
          'Row-house and small-cluster developments',
          'Apartment and duplex buildings',
          'Vaastu-aligned planning',
        ],
      },
      {
        title: 'Commercial Building Construction',
        caption: 'Offices, retail, mixed-use towers',
        description:
          'Commercial projects live and die by their schedule. We plan critical-path activity at the modelling stage, not on site, and we share weekly cost-and-schedule reports our clients can take straight to a board meeting.',
        bullets: [
          'Warehouse buildings',
          'Retail and showroom fit-outs',
          'Mixed-use towers up to G+7',
          'Institutional buildings',
        ],
      },
    ],
  },
  {
    slug: 'renovation-retrofitting',
    title: 'Renovation & Structural Retrofitting',
    divisionCode: 'DIVISION 02',
    caption: 'Structural Repair, Strengthening & Remodeling',
    description:
      'Diagnosing and strengthening existing buildings with structural wrapping, steel jacketing, load-bearing wall removals, and floor extensions. We extend building lifecycles by 10-20 years while maintaining structural integrity.',
    bullets: [
      'Renovation & Retrofitting (Heritage repair, structural strengthening)',
      'Turnkey Project Management (One contract, one accountable team)',
    ],
    motif: 'beam',
    items: [
      {
        title: 'Renovation & Retrofitting',
        caption: 'Structural repair, structural strengthening.',
        description:
          'Old buildings deserve careful hands. We diagnose with non-destructive testing, design a retrofit that respects the original materials & execute with crew who have spent years on retrofitting work.',
        bullets: [
          'Structural retrofitting',
          'Cantilever slab extension',
          'Steel Jacketing / FRP column wrapping',
          'Home / Villa / Apartment Remodelling or renovation',
          'Facade Remodelling',
        ],
      },
      {
        title: 'Turnkey Project Management',
        caption: 'One contract. One accountable team.',
        description:
          'When a client wants a single point of accountability, we hold the entire scope: design, statutory, procurement, construction, finishes, handover. We bring our own QS, MEP and interiors leads, and we report against a single locked schedule.',
        bullets: [
          'Single-point-responsibility contracts',
          'In-house QS, MEP and interiors',
          'Statutory liaison (BBMP, BWSSB, BESCOM)',
          'Locked schedules with weekly variance reports',
        ],
      },
    ],
  },
  {
    slug: 'structural-consulting',
    title: 'Architectural & Structural Consulting',
    divisionCode: 'DIVISION 03',
    caption: '3D Load Modeling, Peer Review & Vaastu',
    description:
      'We take a quiet, evidence-led approach to structural design. Every member is sized to a load case we can defend on a board. We work in ETABS and SAFE.',
    bullets: [
      'Architectural & Structural Consulting (Analysis, modelling, peer review)',
    ],
    motif: 'rebar',
    items: [
      {
        title: 'Architectural & Structural Consulting',
        caption: 'Analysis, modelling, peer review.',
        description:
          'We take a quiet, evidence-led approach to structural design. Every member is sized to a load case we can defend on a board. We work in ETABS and SAFE, and we put our drawings on site only after our lead engineer has reviewed them.',
        bullets: [
          'Load analysis & structural modelling',
          'Foundation design for difficult soils',
          'Seismic & wind load calculation',
          'Independent peer review for other firms',
          'Architectural planning design',
        ],
      },
    ],
  },
];

