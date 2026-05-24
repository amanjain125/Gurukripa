export type Service = {
  slug: string;
  title: string;
  caption: string;
  description: string;
  bullets: string[];
  motif: 'rebar' | 'villa' | 'tower' | 'gantt' | 'beam';
};

export const SERVICES: Service[] = [
  {
    slug: 'structural-consulting',
    title: 'Structural Consulting',
    caption: 'Analysis, modelling, peer review.',
    description:
      'We take a quiet, evidence-led approach to structural design. Every member is sized to a load case we can defend on a board. We work in STAAD, ETABS and SAFE, and we put our drawings on site only after a second engineer has reviewed them.',
    bullets: [
      'Load analysis and structural modelling',
      'Foundation design for difficult soils',
      'Seismic and wind certification',
      'Independent peer review for other firms',
    ],
    motif: 'rebar',
  },
  {
    slug: 'residential-construction',
    title: 'Residential Construction',
    caption: 'Villas, row houses, custom homes.',
    description:
      'Homes are the work we are most known for. We build for owners who plan to live in the house for decades. That means honest materials, generous tolerances, and a finishes schedule signed off before the slab is poured.',
    bullets: [
      'Independent villas (G+1 to G+3)',
      'Row-house and small-cluster developments',
      'Apartment and duplex interiors',
      'Vaastu-aligned planning, on request',
    ],
    motif: 'villa',
  },
  {
    slug: 'commercial-builds',
    title: 'Commercial Builds',
    caption: 'Offices, retail, mixed-use towers.',
    description:
      'Commercial projects live and die by their schedule. We plan critical-path activity at the modelling stage, not on site, and we share weekly cost-and-schedule reports our clients can take straight to a board meeting.',
    bullets: [
      'Office and IT-park blocks',
      'Retail and showroom fit-outs',
      'Mixed-use towers up to G+8',
      'BMS and façade coordination',
    ],
    motif: 'tower',
  },
  {
    slug: 'turnkey-project-management',
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
    motif: 'gantt',
  },
  {
    slug: 'renovation-retrofitting',
    title: 'Renovation & Retrofitting',
    caption: 'Heritage repair, structural strengthening.',
    description:
      'Old buildings deserve careful hands. We diagnose with non-destructive testing, design a retrofit that respects the original fabric, and execute with crews who have spent years on heritage work.',
    bullets: [
      'Non-destructive condition assessment',
      'FRP wrapping and section enlargement',
      'Micro-piling and underpinning',
      'Heritage roof and façade restoration',
    ],
    motif: 'beam',
  },
];
