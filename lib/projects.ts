export type ProjectCategory = 'Residential' | 'Commercial' | 'Consulting';
export type ProjectStatus = 'Completed' | 'Ongoing';

export type Project = {
  slug: string;
  name: string;
  location: string;
  year: string;
  area: string;
  system: string;
  category: ProjectCategory;
  status: ProjectStatus;
  hero: string;
  thumb: string;
  gallery: string[];
  problem: string;
  solution: string;
  outcome: string;
  summary: string;
};

// TODO: replace placeholder Unsplash URLs with real Gurukripa project shots.
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const PROJECTS: Project[] = [
  {
    slug: 'lakeview-villa-jp-nagar',
    name: 'Lakeview Villa, JP Nagar',
    location: 'JP Nagar, Bengaluru',
    year: '2023',
    area: '6,400 sq.ft',
    system: 'RCC frame · raft foundation',
    category: 'Residential',
    status: 'Completed',
    hero: u('photo-1600585154340-be6161a56a0c'),
    thumb: u('photo-1600585154340-be6161a56a0c', 900),
    gallery: [
      u('photo-1600607687939-ce8a6c25118c'),
      u('photo-1613977257363-707ba9348227'),
      u('photo-1600566753190-17f0baa2a6c3'),
    ],
    problem:
      'A sloping plot bordering a lake demanded a foundation strategy that could carry asymmetric loads without compromising the unobstructed water view from every level.',
    solution:
      'We engineered a stepped raft tied into a deep RCC frame, and re-organised the cantilevered terraces so structural loads land away from the lake-facing facade.',
    outcome:
      'Delivered eight months ahead of typical comparable timelines, with full BBMP and KSPCB clearances and zero post-handover structural revisions.',
    summary:
      'A four-bedroom residence threaded along a lake edge — engineered for view, not against it.',
  },
  {
    slug: 'sampurna-commercial-tower',
    name: 'Sampurna Commercial Tower',
    location: 'Basavanagudi, Bengaluru',
    year: '2024',
    area: '38,200 sq.ft · G+5',
    system: 'Composite steel-RCC · pile foundation',
    category: 'Commercial',
    status: 'Ongoing',
    hero: u('photo-1486325212027-8081e485255e'),
    thumb: u('photo-1486325212027-8081e485255e', 900),
    gallery: [
      u('photo-1545324418-cc1a3fa10c00'),
      u('photo-1497366811353-6870744d04b2'),
      u('photo-1564540583246-934409427776'),
    ],
    problem:
      'A tight infill site between two heritage structures with strict vibration limits during piling, and a brief that asked for column-free retail floors.',
    solution:
      'Switched to a low-vibration CFA pile system and introduced two transfer girders at level two so the upper office floors carry on a regular grid above clean retail volumes.',
    outcome:
      'On schedule for Q4 handover. Vibration monitoring has stayed within 2.5 mm/s peak particle velocity throughout — well under heritage limits.',
    summary:
      'A composite-frame mixed-use tower negotiated through a heritage neighbourhood.',
  },
  {
    slug: 'koramangala-row-houses',
    name: 'Koramangala Row Houses',
    location: '5th Block, Koramangala',
    year: '2022',
    area: '12 units · 22,000 sq.ft total',
    system: 'Load-bearing masonry · RCC slabs',
    category: 'Residential',
    status: 'Completed',
    hero: u('photo-1512917774080-9991f1c4c750'),
    thumb: u('photo-1512917774080-9991f1c4c750', 900),
    gallery: [u('photo-1568605114967-8130f3a36994'), u('photo-1502672260266-1c1ef2d93688')],
    problem:
      'Twelve identical-yet-individual homes on a narrow plot, with a brief to keep construction noise low for the surrounding residential street.',
    solution:
      'Pre-cast staircases and party walls were fabricated off-site and lifted in over three night windows. Wet trades were limited to interiors and finishing.',
    outcome:
      'All twelve units handed over inside fourteen months. Resale values in the cluster have appreciated above the micro-market average.',
    summary:
      'Twelve row houses delivered with the discipline of a product line.',
  },
  {
    slug: 'whitefield-tech-campus',
    name: 'Whitefield Tech Campus — Block C',
    location: 'Whitefield, Bengaluru',
    year: '2023',
    area: '54,000 sq.ft',
    system: 'Steel moment frame · metal deck slabs',
    category: 'Commercial',
    status: 'Completed',
    hero: u('photo-1497366216548-37526070297c'),
    thumb: u('photo-1497366216548-37526070297c', 900),
    gallery: [u('photo-1604328698692-f76ea9498e76'), u('photo-1577962917302-cd874c4e31d2')],
    problem:
      'The client needed a fast-track expansion block, fully fitted, opening within ten months of go-ahead.',
    solution:
      'Steel-frame structure with composite metal deck, MEP services routed in coordination with structural openings from day one. Façade modules detailed for tower-crane-free installation.',
    outcome:
      'Topped out in twenty-two weeks. Block C opened to its first tenant on schedule.',
    summary:
      'A fast-track steel-frame block that hit a hard deadline.',
  },
  {
    slug: 'heritage-retrofit-malleshwaram',
    name: 'Heritage Retrofit, Malleshwaram',
    location: 'Malleshwaram, Bengaluru',
    year: '2024',
    area: '4,200 sq.ft',
    system: 'FRP wrapping · micro-piling',
    category: 'Consulting',
    status: 'Completed',
    hero: u('photo-1577985043696-8bd54d9f093f'),
    thumb: u('photo-1577985043696-8bd54d9f093f', 900),
    gallery: [u('photo-1503387762-592deb58ef4e'), u('photo-1505873242700-f289a29e1e0f')],
    problem:
      'A 1940s family home with cracked beams, settling foundations, and an owner who refused to touch the original Madras-tile roof.',
    solution:
      'Retrofitted load paths with FRP wrapping on tension faces, stitched the foundation with micro-piles, and re-supported the roof on a hidden steel ring beam.',
    outcome:
      'The home is structurally certified for another fifty years. Not a single original tile was lifted.',
    summary:
      'A delicate retrofit that bought a heritage home another half-century.',
  },
  {
    slug: 'jain-residence-rajajinagar',
    name: 'Jain Residence, Rajajinagar',
    location: 'Rajajinagar, Bengaluru',
    year: '2021',
    area: '3,800 sq.ft',
    system: 'RCC frame · isolated footings',
    category: 'Residential',
    status: 'Completed',
    hero: u('photo-1505691938895-1758d7feb511'),
    thumb: u('photo-1505691938895-1758d7feb511', 900),
    gallery: [u('photo-1600585154340-be6161a56a0c'), u('photo-1564540586988-aa4e53c3d799')],
    problem:
      'A three-generation family home where every floor needed independence, but the structure had to read as one calm volume from outside.',
    solution:
      'A single tapered-column grid runs the full height. Sound-isolated slab build-ups separate floors acoustically without breaking the structural rhythm.',
    outcome:
      'Three families. One quiet building. Delivered turnkey, including joinery and lighting.',
    summary:
      'A three-generation home that reads as a single calm volume.',
  },
];

export const PROJECT_CATEGORIES: (ProjectCategory | ProjectStatus | 'All')[] = [
  'All',
  'Residential',
  'Commercial',
  'Consulting',
  'Completed',
  'Ongoing',
];
