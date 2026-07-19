export type ProjectCategory = 'Residential' | 'Commercial' | 'Consulting';
export type ProjectStatus = 'Completed' | 'Ongoing';
export type ProjectType = 'construction' | 'renovation';

export type Project = {
  slug: string;
  name: string;
  location: string;
  year: string;
  area: string;
  system: string;
  category: ProjectCategory;
  projectType: ProjectType;
  status: ProjectStatus;
  hero: string;
  thumb: string;
  gallery: string[];
  problem: string;
  solution: string;
  outcome: string;
  summary: string;
};

export const PROJECTS: Project[] = [
  // REAL CONSTRUCTION PROJECTS FROM /construction DIRECTORY
  {
    slug: 'eka-residence-anekal',
    name: 'EKA Residence, Anekal',
    location: 'Anekal, Bengaluru',
    year: '2024',
    area: '5,800 sq.ft',
    system: 'RCC Framed Structure · Raft Foundation',
    category: 'Residential',
    projectType: 'construction',
    status: 'Completed',
    hero: '/construction/Anekal/EKA/WhatsApp%20Image%202026-03-17%20at%2014.03.34.jpeg',
    thumb: '/construction/Anekal/EKA/WhatsApp%20Image%202026-03-17%20at%2014.03.34.jpeg',
    gallery: [
      '/construction/Anekal/EKA/WhatsApp%20Image%202026-03-17%20at%2014.03.35.jpeg',
      '/construction/Anekal/EKA/WhatsApp%20Image%202026-03-17%20at%2014.03.41.jpeg',
      '/construction/Anekal/EKA/WhatsApp%20Image%202026-03-17%20at%2014.03.51.jpeg',
      '/construction/Anekal/EKA/IMG20250822122835.jpg',
    ],
    problem:
      'Designing a multi-tiered residential structure in Anekal with optimized natural ventilation while maintaining structural integrity for long spans.',
    solution:
      'Engineered an RCC framed skeleton tied into deep raft foundations with custom slab cantilevers.',
    outcome:
      'Delivered turnkey ahead of schedule with full structural safety certification.',
    summary:
      'Turnkey luxury villa project in Anekal engineered for structural longevity and modern elevation.',
  },
  {
    slug: 'exotica-villa-anekal',
    name: 'Exotica Villa & Enclave, Anekal',
    location: 'Anekal, Bengaluru',
    year: '2025',
    area: '7,200 sq.ft',
    system: 'RCC Frame · Isolated Footings',
    category: 'Residential',
    projectType: 'construction',
    status: 'Ongoing',
    hero: '/construction/Anekal/EXOTICA/WhatsApp%20Image%202026-02-10%20at%2013.42.20.jpeg',
    thumb: '/construction/Anekal/EXOTICA/WhatsApp%20Image%202026-02-10%20at%2013.42.20.jpeg',
    gallery: [
      '/construction/Anekal/EXOTICA/WhatsApp%20Image%202026-02-10%20at%2013.42.21.jpeg',
      '/construction/Anekal/EXOTICA/WhatsApp%20Image%202026-03-13%20at%2017.47.06.jpeg',
      '/construction/Anekal/EXOTICA/WhatsApp%20Image%202026-03-13%20at%2017.47.07.jpeg',
    ],
    problem:
      'Expansive villa layout requiring high-strength RCC column alignment and weather-resistant external masonry.',
    solution:
      'Utilized high-grade concrete mix design and continuous curing monitoring throughout footing and beam casting.',
    outcome:
      'Currently on schedule for completion with structural framing 100% inspected and verified.',
    summary:
      'Exclusive villa construction in Anekal featuring modern structural geometry and open interior spaces.',
  },
  {
    slug: 'channsandra-complex',
    name: 'Channsandra Mixed-Use Complex',
    location: 'Channsandra, Bengaluru',
    year: '2024',
    area: '18,500 sq.ft · G+4',
    system: 'Composite RCC & Steel Frame',
    category: 'Commercial',
    projectType: 'construction',
    status: 'Ongoing',
    hero: '/construction/Channsandra/render%201.png',
    thumb: '/construction/Channsandra/render%201.png',
    gallery: [
      '/construction/Channsandra/IMG20251108123046.jpg',
      '/construction/Channsandra/IMG20251108123048.jpg',
      '/construction/Channsandra/IMG20251108123101.jpg',
      '/construction/Channsandra/IMG20251108123210.jpg',
    ],
    problem:
      'Creating column-free retail display spaces on lower levels while carrying multi-story residential floors above.',
    solution:
      'Implemented transfer girders at level two to transfer heavy upper loads cleanly to perimeter columns.',
    outcome:
      'Structural frame completed, meeting all BBMP commercial safety compliance standards.',
    summary:
      'Contemporary commercial-cum-residential tower in Channsandra with column-free ground floors.',
  },
  {
    slug: 'hennur-residence',
    name: 'Hennur Villa Development',
    location: 'Hennur Road, Bengaluru',
    year: '2023',
    area: '4,600 sq.ft',
    system: 'RCC Frame · AAC Block Masonry',
    category: 'Residential',
    projectType: 'construction',
    status: 'Completed',
    hero: '/construction/Hennur/Anuj%2003.jpg',
    thumb: '/construction/Hennur/Anuj%2003.jpg',
    gallery: [
      '/construction/Hennur/IMG-20230908-WA0031.jpg',
      '/construction/Hennur/IMG-20230908-WA0032.jpg',
    ],
    problem:
      'High water-table site condition requiring deep waterproofed footings and moisture barrier protection.',
    solution:
      'Integrated crystalline waterproofing system into foundation footings and soil retaining walls.',
    outcome:
      'Handed over turnkey with zero dampness or structural settlement.',
    summary:
      'Luxury single-family residence in Hennur engineered for long-term climate resilience.',
  },
  {
    slug: 'hoskote-commercial-project',
    name: 'Hoskote Commercial & Industrial Site',
    location: 'Hoskote, Bengaluru',
    year: '2025',
    area: '24,000 sq.ft',
    system: 'Heavy RCC Footings · Industrial Steel Trusses',
    category: 'Commercial',
    projectType: 'construction',
    status: 'Ongoing',
    hero: '/construction/Hoskote/IMG20250607101445.jpg',
    thumb: '/construction/Hoskote/IMG20250607101445.jpg',
    gallery: [
      '/construction/Hoskote/IMG20250607101527.jpg',
      '/construction/Hoskote/IMG20250304123548.jpg',
      '/construction/Hoskote/IMG-20240528-WA0010.jpg',
      '/construction/Hoskote/IMG-20240528-WA0011.jpg',
    ],
    problem:
      'Heavy machinery movement required high load-bearing industrial floor slabs and heavy-duty RCC foundations.',
    solution:
      'Designed fiber-reinforced concrete industrial flooring over compacted aggregate sub-base.',
    outcome:
      'Phase 1 structural slab and columns completed with zero deflection under load tests.',
    summary:
      'Industrial and commercial complex in Hoskote built for heavy-duty commercial operations.',
  },
  {
    slug: 'koramangala-luxury-residence',
    name: 'Koramangala Executive Villa',
    location: 'Koramangala 3rd Block, Bengaluru',
    year: '2022',
    area: '6,100 sq.ft',
    system: 'RCC Framed Skeleton · Post-Tensioned Slabs',
    category: 'Residential',
    projectType: 'construction',
    status: 'Completed',
    hero: '/construction/Koramanagala/IMG_20210831_194201.jpg',
    thumb: '/construction/Koramanagala/IMG_20210831_194201.jpg',
    gallery: [
      '/construction/Koramanagala/IMG_20210831_194201.jpg',
      '/construction/Koramanagala/IMG_20210830_163145.jpg',
      '/construction/Koramanagala/IMG_20210830_163050.jpg',
      '/construction/Koramanagala/IMG_20210830_163016.jpg',
      '/construction/Koramanagala/IMG_20210830_163101.jpg',
      '/construction/Koramanagala/IMG_20210830_163142.jpg',
      '/construction/Koramanagala/IMG_20210830_163210.jpg',
      '/construction/Koramanagala/IMG_20210830_163238.jpg',
      '/construction/Koramanagala/IMG_20210830_163634.jpg',
    ],
    problem:
      'Dense urban site in Koramangala with tight boundaries requiring strict sound & dust isolation during construction.',
    solution:
      'Pre-assembled shuttering and acoustic partition walls were installed with quiet night pouring schedules.',
    outcome:
      'Delivered turnkey including premium joinery and facade illumination.',
    summary:
      'High-end urban villa in Koramangala featuring spacious open-plan living and custom architectural elevation.',
  },
  {
    slug: 'kumbalgodu-project',
    name: 'Kumbalgodu Commercial Facility',
    location: 'Kumbalgodu, Mysuru Rd, Bengaluru',
    year: '2025',
    area: '16,200 sq.ft',
    system: 'RCC Columns · Pre-Stressed Beams',
    category: 'Commercial',
    projectType: 'construction',
    status: 'Ongoing',
    hero: '/construction/Kumbalgodu/IMG20250908124403.jpg',
    thumb: '/construction/Kumbalgodu/IMG20250908124403.jpg',
    gallery: [
      '/construction/Kumbalgodu/IMG20250908124357.jpg',
      '/construction/Kumbalgodu/IMG20250908124405.jpg',
      '/construction/Kumbalgodu/IMG20250731120845.jpg',
    ],
    problem:
      'Sloped terrain demanding stepped retainment walls and high axial capacity column grid.',
    solution:
      'Engineered stepped retaining walls with sub-drainage channels to handle seasonal rainwater run-off.',
    outcome:
      'Foundation and ground tier handed over, proceeding with upper structural floor casting.',
    summary:
      'Commercial facility along Mysuru Road, Kumbalgodu, built with reinforced structural framing.',
  },
  {
    slug: 'suresh-mutha-residence',
    name: 'Suresh Mutha Residence',
    location: 'Bengaluru South',
    year: '2022',
    area: '5,000 sq.ft',
    system: 'RCC Frame · Isolated Footings',
    category: 'Residential',
    projectType: 'construction',
    status: 'Completed',
    hero: '/construction/Suresh%20mutha/Mr%20Suresh%20Mutha%2003.jpg',
    thumb: '/construction/Suresh%20mutha/Mr%20Suresh%20Mutha%2003.jpg',
    gallery: [
      '/construction/Suresh%20mutha/IMG_20210914_171055.jpg',
      '/construction/Suresh%20mutha/IMG-20211013-WA0008.jpg',
    ],
    problem:
      'Multigenerational home brief requiring private family suites on each floor connected by a central atrium.',
    solution:
      'Designed a central light-well atrium around a stiff RCC core for maximum interior illumination.',
    outcome:
      'Handed over on time with complete structural clearance and custom interior finishes.',
    summary:
      'Bespoke multi-story family residence delivered turnkey in Bengaluru.',
  },
  {
    slug: 'vvpuram-commercial-project',
    name: 'VV Puram Structural Project',
    location: 'VV Puram, Basavanagudi, Bengaluru',
    year: '2024',
    area: '8,400 sq.ft',
    system: 'Micro-piled Footings · RCC Beam Grid',
    category: 'Commercial',
    projectType: 'construction',
    status: 'Completed',
    hero: '/construction/VVpuram/WhatsApp%20Image%202026-04-13%20at%2017.57.21.jpeg',
    thumb: '/construction/VVpuram/WhatsApp%20Image%202026-04-13%20at%2017.57.21.jpeg',
    gallery: [
      '/construction/VVpuram/WhatsApp%20Image%202026-04-13%20at%2017.58.33.jpeg',
    ],
    problem:
      'Tight infill property flanked by historical commercial buildings in VV Puram.',
    solution:
      'Used low-vibration bored piling and continuous digital displacement monitoring during foundation work.',
    outcome:
      'Completed zero-damage infill structure with 100% compliance with local heritage guidelines.',
    summary:
      'Commercial building construction in the heart of VV Puram, Basavanagudi.',
  },

  // REAL RENOVATION & RETROFIT PROJECTS FROM /renovation DIRECTORY
  {
    slug: 'arham-residency-renovation',
    name: 'Arham Residency Renovation',
    location: 'Bengaluru',
    year: '2023',
    area: '4,800 sq.ft',
    system: 'Structural Interior Overhaul · Tile & Masonry Retrofit',
    category: 'Residential',
    projectType: 'renovation',
    status: 'Completed',
    hero: '/renovation/Arham%20Residency/IMG-20230828-WA0054.jpg',
    thumb: '/renovation/Arham%20Residency/IMG-20230828-WA0054.jpg',
    gallery: [
      '/renovation/Arham%20Residency/IMG-20230828-WA0054.jpg',
      '/renovation/Arham%20Residency/IMG-20230828-WA0025.jpg',
      '/renovation/Arham%20Residency/IMG-20230819-WA0019.jpg',
      '/renovation/Arham%20Residency/IMG-20230822-WA0026.jpg',
      '/renovation/Arham%20Residency/IMG-20230828-WA0060.jpg',
      '/renovation/Arham%20Residency/IMG-20230817-WA0041.jpg',
    ],
    problem:
      'Older apartment layout requiring structural wall opening and complete modern interior refurbishment.',
    solution:
      'Engineered hidden steel lintel support beams to remove load-bearing interior partition walls cleanly.',
    outcome:
      'Created open-plan living areas with zero floor deflection or plaster settlement.',
    summary:
      'Turnkey luxury apartment renovation and structural interior upgrade for Arham Residency.',
  },
  {
    slug: 'arun-bhansali-chamrajpet',
    name: 'Arun Bhansali Residence',
    location: 'Chamrajpet, Bengaluru',
    year: '2024',
    area: '3,900 sq.ft',
    system: 'Structural Retrofit · Foundation Waterproofing',
    category: 'Residential',
    projectType: 'renovation',
    status: 'Completed',
    hero: '/renovation/Arun%20Bhansali-Chamrajpet/IMG-20231214-WA0036.jpg',
    thumb: '/renovation/Arun%20Bhansali-Chamrajpet/IMG-20231214-WA0036.jpg',
    gallery: [
      '/renovation/Arun%20Bhansali-Chamrajpet/IMG-20231214-WA0036.jpg',
      '/renovation/Arun%20Bhansali-Chamrajpet/IMG-20231213-WA0048.jpg',
      '/renovation/Arun%20Bhansali-Chamrajpet/IMG-20231209-WA0056.jpg',
      '/renovation/Arun%20Bhansali-Chamrajpet/IMG-20231205-WA0018.jpg',
      '/renovation/Arun%20Bhansali-Chamrajpet/IMG-20231209-WA0044.jpg',
    ],
    problem:
      'Traditional Chamrajpet home requiring structural elevation modernization and moisture barrier reinforcement.',
    solution:
      'Stitched column bases with FRP wraps and replaced aging exterior plaster with polymer-modified weather coats.',
    outcome:
      'Extended building lifecycle by 35+ years without disturbing core structure.',
    summary:
      'Full structural renovation and facade modernization for classic home in Chamrajpet.',
  },
  {
    slug: 'ashwin-jain-vani-vilas',
    name: 'Ashwin Jain Residence',
    location: 'Vani Vilas Rd, Basavanagudi, Bengaluru',
    year: '2024',
    area: '5,200 sq.ft',
    system: 'RCC Column Jacketing · Custom Elevation Upgrade',
    category: 'Residential',
    projectType: 'renovation',
    status: 'Completed',
    hero: '/renovation/Ashwin%20Jain-%20Vani%20Vilas%20rd/IMG-20240417-WA0033.jpeg',
    thumb: '/renovation/Ashwin%20Jain-%20Vani%20Vilas%20rd/IMG-20240417-WA0033.jpeg',
    gallery: [
      '/renovation/Ashwin%20Jain-%20Vani%20Vilas%20rd/IMG-20240417-WA0033.jpeg',
      '/renovation/Ashwin%20Jain-%20Vani%20Vilas%20rd/IMG-20240417-WA0050.jpeg',
      '/renovation/Ashwin%20Jain-%20Vani%20Vilas%20rd/IMG-20240417-WA0025.jpeg',
      '/renovation/Ashwin%20Jain-%20Vani%20Vilas%20rd/IMG-20240328-WA0016.jpg',
      '/renovation/Ashwin%20Jain-%20Vani%20Vilas%20rd/IMG-20240423-WA0026.jpg',
    ],
    problem:
      'Structural reconfiguration of a multi-tier family home along Vani Vilas Road.',
    solution:
      'Reinforced core RCC columns using high-tensile steel jacketing and modern architectural joinery.',
    outcome:
      'Handed over with structural safety certification and contemporary glass elevation.',
    summary:
      'Executive villa renovation and structural column strengthening along Vani Vilas Road.',
  },
  {
    slug: 'deepak-reddy-koramangala',
    name: 'Deepak Reddy Residence',
    location: 'Koramangala, Bengaluru',
    year: '2021',
    area: '6,500 sq.ft',
    system: 'Facade Retrofit · Structural Slab Extension',
    category: 'Residential',
    projectType: 'renovation',
    status: 'Completed',
    hero: '/renovation/Deepak%20Reddy-%20Koramangala/IMG_20210831_194222.jpg',
    thumb: '/renovation/Deepak%20Reddy-%20Koramangala/IMG_20210831_194222.jpg',
    gallery: [
      '/renovation/Deepak%20Reddy-%20Koramangala/IMG_20210831_194222.jpg',
      '/renovation/Deepak%20Reddy-%20Koramangala/IMG_20210831_194201.jpg',
      '/renovation/Deepak%20Reddy-%20Koramangala/IMG_20210831_173556.jpg',
      '/renovation/Deepak%20Reddy-%20Koramangala/IMG_20200120_121207.jpg',
      '/renovation/Deepak%20Reddy-%20Koramangala/IMG_20200120_121203.jpg',
    ],
    problem:
      'Comprehensive exterior elevation overhaul and floor slab extension in prime Koramangala.',
    solution:
      'Constructed cantilevered structural extensions tied into existing column grid using chemical anchor bolts.',
    outcome:
      'Expanded total usable floor area by 25% with zero foundation settlement.',
    summary:
      'Major structural renovation and architectural facade overhaul in Koramangala.',
  },
  {
    slug: 'kunal-residence-seshadripuram',
    name: 'Kunal Residence Renovation',
    location: 'Seshadripuram, Bengaluru',
    year: '2024',
    area: '4,100 sq.ft',
    system: 'Interior Remodeling · Lintel Support Beam Installation',
    category: 'Residential',
    projectType: 'renovation',
    status: 'Completed',
    hero: '/renovation/Kunal-%20Seshadripuram/IMG-20240308-WA0126.jpeg',
    thumb: '/renovation/Kunal-%20Seshadripuram/IMG-20240308-WA0126.jpeg',
    gallery: [
      '/renovation/Kunal-%20Seshadripuram/IMG-20240308-WA0126.jpeg',
      '/renovation/Kunal-%20Seshadripuram/IMG-20240301-WA0050.jpeg',
      '/renovation/Kunal-%20Seshadripuram/IMG-20240308-WA0103.jpeg',
      '/renovation/Kunal-%20Seshadripuram/IMG-20240309-WA0052.jpg',
      '/renovation/Kunal-%20Seshadripuram/IMG-20231209-WA0057.jpg',
      '/renovation/Kunal-%20Seshadripuram/IMG-20231019-WA0049.jpg',
    ],
    problem:
      'Urban residence in Seshadripuram requiring wall removal and open-plan kitchen-living integration.',
    solution:
      'Switched load paths to ceiling steel channels and completed turnkey interior finishes.',
    outcome:
      'Delivered ahead of schedule with full interior and electrical rewiring completed.',
    summary:
      'Modern home renovation and structural interior redesign in Seshadripuram.',
  },
  {
    slug: 'mrs-lakshmi-ecity',
    name: 'Mrs. Lakshmi Residence',
    location: 'Electronic City, Bengaluru',
    year: '2022',
    area: '3,400 sq.ft',
    system: 'Interior Refurbishment · Damp Proof Membrane Installation',
    category: 'Residential',
    projectType: 'renovation',
    status: 'Completed',
    hero: '/renovation/Mrs%20Lakshmi-%20Ecity/IMG-20220909-WA0022.jpeg',
    thumb: '/renovation/Mrs%20Lakshmi-%20Ecity/IMG-20220909-WA0022.jpeg',
    gallery: [
      '/renovation/Mrs%20Lakshmi-%20Ecity/IMG-20220909-WA0022.jpeg',
      '/renovation/Mrs%20Lakshmi-%20Ecity/IMG-20221015-WA0047.jpg',
      '/renovation/Mrs%20Lakshmi-%20Ecity/IMG-20221015-WA0048.jpg',
      '/renovation/Mrs%20Lakshmi-%20Ecity/IMG-20221015-WA0049.jpg',
    ],
    problem:
      'Ground water dampness seepage on ground floor walls and outdated room partitions.',
    solution:
      'Applied chemical damp-proof membrane and installed moisture-resistant interior wall panels.',
    outcome:
      'Eliminated seepage completely with certified 10-year waterproofing warranty.',
    summary:
      'Turnkey residence renovation and waterproofing solution in Electronic City.',
  },
  {
    slug: 'mrs-shoma-nandi-hills',
    name: 'Mrs. Shoma Villa & Estate',
    location: 'Nandi Hills, Bengaluru Foothills',
    year: '2024',
    area: '7,800 sq.ft',
    system: 'Hillside Retaining Support · Luxury Villa Restoration',
    category: 'Residential',
    projectType: 'renovation',
    status: 'Completed',
    hero: '/renovation/mrs%20-%20Shoma%20Nandi%20Hills/IMG20240320123631.jpg',
    thumb: '/renovation/mrs%20-%20Shoma%20Nandi%20Hills/IMG20240320123631.jpg',
    gallery: [
      '/renovation/mrs%20-%20Shoma%20Nandi%20Hills/IMG20240320123631.jpg',
      '/renovation/mrs%20-%20Shoma%20Nandi%20Hills/IMG20240320123618.jpg',
      '/renovation/mrs%20-%20Shoma%20Nandi%20Hills/IMG20240320120953.jpg',
      '/renovation/mrs%20-%20Shoma%20Nandi%20Hills/IMG20240320121002.jpg',
      '/renovation/mrs%20-%20Shoma%20Nandi%20Hills/IMG20240320121013.jpg',
      '/renovation/mrs%20-%20Shoma%20Nandi%20Hills/IMG20240320121022.jpg',
    ],
    problem:
      'Hillside villa estate requiring structural retaining wall stabilization and luxury deck expansion.',
    solution:
      'Built stepped stone-gabion retaining walls and cantilevered steel deck overlooking Nandi Hills valley.',
    outcome:
      'Delivered breathtaking hillside villa restoration certified for high-wind and slope stability.',
    summary:
      'Luxury villa restoration and hillside terrace expansion at Nandi Hills foothills.',
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
