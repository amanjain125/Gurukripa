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
  floorCount?: string;
  commencementYear?: string;
  completionYear?: string;
};

export const PROJECTS: Project[] = [
  // REAL CONSTRUCTION PROJECTS FROM /construction DIRECTORY
  {
    slug: 'koramangala-apartment-building',
    name: 'Koramangala Apartment Building',
    location: 'Koramangala 3rd Block, Bengaluru',
    year: '2022',
    area: '8,194 sq.ft',
    system: 'RCC framed structure along with cantilever deck and terrace deck slabs; LOPC elevation system',
    category: 'Residential',
    projectType: 'construction',
    status: 'Completed',
    hero: '/construction/Koramanagala/1.jpg',
    thumb: '/construction/Koramanagala/1.jpg',
    gallery: [
      '/construction/Koramanagala/IMG_20210830_162924.jpg',
      '/construction/Koramanagala/IMG_20210830_163016.jpg',
      '/construction/Koramanagala/IMG_20210830_163050.jpg',
      '/construction/Koramanagala/IMG_20210830_163101.jpg',
      '/construction/Koramanagala/IMG_20210830_163142.jpg',
      '/construction/Koramanagala/IMG_20210830_163145.jpg',
      '/construction/Koramanagala/IMG_20210830_163210.jpg',
      '/construction/Koramanagala/IMG_20210830_163238.jpg',
      '/construction/Koramanagala/IMG_20210830_163626.jpg',
      '/construction/Koramanagala/IMG_20210830_163634.jpg',
      '/construction/Koramanagala/IMG_20210830_163706.jpg',
      '/construction/Koramanagala/IMG_20210830_163708.jpg',
      '/construction/Koramanagala/IMG_20210831_194201.jpg',
    ],
    problem:
      'Dense urban site in Koramangala with tight boundaries requiring strict sound & dust isolation during construction.',
    solution:
      'Pre-assembled shuttering and acoustic partition walls were installed with quiet night pouring schedules.',
    outcome:
      'Delivered turnkey including premium joinery and facade illumination.',
    summary:
      'High-end urban villa in Koramangala featuring spacious open-plan living and custom architectural elevation.',
    floorCount: 'G+3 floors',
    commencementYear: '2020',
    completionYear: '2021',
  },
  {
    slug: 'sports-stall-and-warehouse-building',
    name: 'Sports Stall and Warehouse Building',
    location: 'Bengaluru South',
    year: '2022',
    area: '5,500 sq.ft',
    system: 'RCC frame structure; isolated and combined footings',
    category: 'Commercial',
    projectType: 'construction',
    status: 'Completed',
    hero: '/construction/Suresh%20mutha/1.jpg',
    thumb: '/construction/Suresh%20mutha/1.jpg',
    gallery: [
      '/construction/Suresh%20mutha/IMG-20211013-WA0008.jpg',
      '/construction/Suresh%20mutha/IMG_20210914_171055.jpg',
    ],
    problem:
      'Multigenerational home brief requiring private family suites on each floor connected by a central atrium.',
    solution:
      'Designed a central light-well atrium around a stiff RCC core for maximum interior illumination.',
    outcome:
      'Handed over on time with complete structural clearance and custom interior finishes.',
    summary:
      'Bespoke multi-story family residence delivered turnkey in Bengaluru.',
    floorCount: 'G+4 floors + Terrace',
    commencementYear: '2020',
    completionYear: '2021',
  },
  {
    slug: 'residential-building-of-hennur-road',
    name: 'Residential Building of Hennur Road',
    location: 'Hennur Road, Bengaluru',
    year: '2023',
    area: '5,020 sq.ft',
    system: 'RCC frame structure; solid block masonry',
    category: 'Residential',
    projectType: 'construction',
    status: 'Completed',
    hero: '/construction/Hennur/1.jpg',
    thumb: '/construction/Hennur/1.jpg',
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
    floorCount: 'Stilt + 4 floors',
    commencementYear: '2020',
    completionYear: '2022',
  },
  {
    slug: 'residential-triplex-building-chanasandra',
    name: 'Residential Triplex Building @ Chanasandra',
    location: 'Channsandra, Bengaluru',
    year: '2024',
    area: '4,062 sq.ft',
    system: 'RCC frame structure; shallow isolated foundation',
    category: 'Commercial',
    projectType: 'construction',
    status: 'Completed',
    hero: '/construction/Channsandra/1.png',
    thumb: '/construction/Channsandra/1.png',
    gallery: [
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
    floorCount: 'G+3 floors',
    commencementYear: '2022',
    completionYear: '2024',
  },
  {
    slug: 'kunbalgodu-warehouse-building',
    name: 'Kunbalgodu Warehouse Building',
    location: 'Kumbalgodu, Mysuru Rd, Bengaluru',
    year: '2025',
    area: '29,650 sq.ft',
    system: 'RCC frame structure; Isolated + raft foundation',
    category: 'Commercial',
    projectType: 'construction',
    status: 'Completed',
    hero: '/construction/Kumbalgodu/1.jpeg',
    thumb: '/construction/Kumbalgodu/1.jpeg',
    gallery: [
      '/construction/Kumbalgodu/22.jpg.jpeg',
      '/construction/Kumbalgodu/IMG20250731120845.jpg',
      '/construction/Kumbalgodu/IMG20250908124357.jpg',
      '/construction/Kumbalgodu/IMG20250908124405.jpg',
    ],
    problem:
      'Sloped terrain demanding stepped retainment walls and high axial capacity column grid.',
    solution:
      'Engineered stepped retaining walls with sub-drainage channels to handle seasonal rainwater run-off.',
    outcome:
      'Foundation and ground tier handed over, proceeding with upper structural floor casting.',
    summary:
      'Commercial facility along Mysuru Road, Kumbalgodu, built with reinforced structural framing.',
    floorCount: 'G+M+3 floors + Terrace',
    commencementYear: '2023',
    completionYear: '2025',
  },
  {
    slug: 'villa-gurupunvaanii-exa-anekal',
    name: 'Villa @ Gurupunvaanii, Exa, Anekal',
    location: 'Anekal, Bengaluru',
    year: '2024',
    area: '2,078 sq.ft',
    system: 'RCC frame structure; isolated footings',
    category: 'Residential',
    projectType: 'construction',
    status: 'Completed',
    hero: '/construction/Anekal/EKA/1.jpg',
    thumb: '/construction/Anekal/EKA/1.jpg',
    gallery: [
      '/construction/Anekal/EKA/IMG20250822123014.jpg',
      '/construction/Anekal/EKA/WhatsApp%20Image%202026-03-17%20at%2014.03.35%20(1).jpeg',
      '/construction/Anekal/EKA/WhatsApp%20Image%202026-03-17%20at%2014.03.35.jpeg',
      '/construction/Anekal/EKA/WhatsApp%20Image%202026-03-17%20at%2014.03.51.jpeg',
    ],
    problem:
      'Designing a multi-tiered residential structure in Anekal with optimized natural ventilation while maintaining structural integrity for long spans.',
    solution:
      'Engineered an RCC framed skeleton tied into deep raft foundations with custom slab cantilevers.',
    outcome:
      'Delivered turnkey ahead of schedule with full structural safety certification.',
    summary:
      'Turnkey luxury villa project in Anekal engineered for structural longevity and modern elevation.',
    floorCount: 'G+1 floor',
    commencementYear: '2023',
    completionYear: '2024',
  },
  {
    slug: 'villa-gurupunvaanii-exotic-anekal',
    name: 'Villa @ Gurupunvaanii, Exotic, Anekal',
    location: 'Anekal, Bengaluru',
    year: '2025',
    area: '2,594 sq.ft',
    system: 'RCC frame structure; isolated footings',
    category: 'Residential',
    projectType: 'construction',
    status: 'Completed',
    hero: '/construction/Anekal/EXOTICA/1.jpg',
    thumb: '/construction/Anekal/EXOTICA/1.jpg',
    gallery: [
      '/construction/Anekal/EXOTICA/WhatsApp%20Image%202026-02-10%20at%2013.42.20.jpeg',
      '/construction/Anekal/EXOTICA/WhatsApp%20Image%202026-02-10%20at%2013.42.21.jpeg',
      '/construction/Anekal/EXOTICA/WhatsApp%20Image%202026-03-13%20at%2017.47.07%20(1).jpeg',
    ],
    problem:
      'Expansive villa layout requiring high-strength RCC column alignment and weather-resistant external masonry.',
    solution:
      'Utilized high-grade concrete mix design and continuous curing monitoring throughout footing and beam casting.',
    outcome:
      'Currently on schedule for completion with structural framing 100% inspected and verified.',
    summary:
      'Exclusive villa construction in Anekal featuring modern structural geometry and open interior spaces.',
    floorCount: 'G+1 floor',
    commencementYear: '2023',
    completionYear: '2024',
  },
  {
    slug: 'residential-building-hoskote',
    name: 'Residential Building @ Hoskote',
    location: 'Hoskote, Bengaluru',
    year: '2025',
    area: '6,911 sq.ft',
    system: 'RCC frame structure; wire cut brick masonry',
    category: 'Residential',
    projectType: 'construction',
    status: 'Completed',
    hero: '/construction/Hoskote/1.jpg',
    thumb: '/construction/Hoskote/1.jpg',
    gallery: [
      '/construction/Hoskote/IMG-20240528-WA0011.jpg',
      '/construction/Hoskote/IMG-20240528-WA0012.jpg',
      '/construction/Hoskote/IMG20250304123548.jpg',
      '/construction/Hoskote/IMG20250607101445.jpg',
      '/construction/Hoskote/IMG20250607101527.jpg',
    ],
    problem:
      'Heavy machinery movement required high load-bearing industrial floor slabs and heavy-duty RCC foundations.',
    solution:
      'Designed fiber-reinforced concrete industrial flooring over compacted aggregate sub-base.',
    outcome:
      'Phase 1 structural slab and columns completed with zero deflection under load tests.',
    summary:
      'Industrial and commercial complex in Hoskote built for heavy-duty commercial operations.',
    floorCount: 'G+3 floors',
    commencementYear: '2023',
    completionYear: '2025',
  },
  {
    slug: 'vv-puram-residential-building',
    name: 'VV Puram Residential Building',
    location: 'VV Puram, Basavanagudi, Bengaluru',
    year: '2024',
    area: '5,430 sq.ft',
    system: 'RCC frame structure; isolated and combined footings',
    category: 'Residential',
    projectType: 'construction',
    status: 'Ongoing',
    hero: '/construction/VVpuram/1.jpeg',
    thumb: '/construction/VVpuram/1.jpeg',
    gallery: [
      '/construction/VVpuram/WhatsApp%20Image%202026-04-13%20at%2017.58.33.jpeg',
    ],
    problem:
      'Tight infill property flanked by historical commercial buildings in VV Puram.',
    solution:
      'Used low-vibration bored piling and digital displacement monitoring during foundation work.',
    outcome:
      'Completed zero-damage infill structure with 100% compliance with local heritage guidelines.',
    summary:
      'Commercial building construction in the heart of VV Puram, Basavanagudi.',
    floorCount: 'G+4 floors + Terrace',
    commencementYear: '2025',
    completionYear: 'Ongoing',
  },
  {
    slug: 'vv-puram-apartment-building',
    name: 'VV Puram Apartment Building',
    location: 'VV Puram, Basavanagudi, Bengaluru',
    year: '2025',
    area: '11,300 sq.ft',
    system: 'RCC frame structure',
    category: 'Residential',
    projectType: 'construction',
    status: 'Ongoing',
    hero: '/construction/VVpuram%2010/Residential%20Building%20for%20Tyche%20Corp%20-%20%20ELEVATION.png',
    thumb: '/construction/VVpuram%2010/Residential%20Building%20for%20Tyche%20Corp%20-%20%20ELEVATION.png',
    gallery: [
      '/construction/VVpuram%2010/Residential%20Building%20for%20Tyche%20Corp%20-%20%20ELEVATION.png',
    ],
    problem:
      'Constructing a multi-family residential building in a highly congested heritage zone of VV Puram.',
    solution:
      'Engineered isolated foundations with reinforced lateral tie beams and cantilever support systems.',
    outcome:
      'Foundation stage completed, currently progressing with upper-floor RCC structure.',
    summary:
      'Modern residential apartment project underway in VV Puram, featuring optimized urban floorplans.',
    floorCount: 'G+5 floors',
    commencementYear: '2026',
    completionYear: 'Ongoing',
  },

  // REAL RENOVATION & RETROFIT PROJECTS FROM /renovation DIRECTORY
  {
    slug: '3bhk-eta-apartments',
    name: '3BHK @ ETA Apartments',
    location: 'ETA Apartments, Bengaluru',
    year: '2023',
    area: '4,800 sq.ft',
    system: 'Structural Interior Overhaul · Tile & Masonry Retrofit',
    category: 'Residential',
    projectType: 'renovation',
    status: 'Completed',
    hero: '/renovation/3BHK@%20ETA%20Apartments/1.jpg',
    thumb: '/renovation/3BHK@%20ETA%20Apartments/1.jpg',
    gallery: [
      '/renovation/3BHK@%20ETA%20Apartments/IMG_20211218_120327.jpg',
      '/renovation/3BHK@%20ETA%20Apartments/IMG_20220529_181602.jpg',
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
    slug: 'chamrajpet-3bhk-renovation',
    name: 'Chamrajpet - 3BHK Renovation',
    location: 'Chamrajpet, Bengaluru',
    year: '2024',
    area: '3,900 sq.ft',
    system: 'Structural Retrofit · Foundation Waterproofing',
    category: 'Residential',
    projectType: 'renovation',
    status: 'Completed',
    hero: '/renovation/Chamrajpet%20-%203BHK%20renovation/1.jpg',
    thumb: '/renovation/Chamrajpet%20-%203BHK%20renovation/1.jpg',
    gallery: [
      '/renovation/Chamrajpet%20-%203BHK%20renovation/IMG-20231206-WA0029.jpg',
      '/renovation/Chamrajpet%20-%203BHK%20renovation/IMG-20231209-WA0056.jpg',
      '/renovation/Chamrajpet%20-%203BHK%20renovation/IMG-20231214-WA0046.jpg',
      '/renovation/Chamrajpet%20-%203BHK%20renovation/IMG-20231215-WA0046.jpg',
      '/renovation/Chamrajpet%20-%203BHK%20renovation/IMG-20231220-WA0056.jpg',
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
    slug: 'vani-vilas-road-3bhk-civil-renovation',
    name: 'Vani Vilas Road - 3BHK Civil Renovation',
    location: 'Vani Vilas Rd, Basavanagudi, Bengaluru',
    year: '2024',
    area: '5,200 sq.ft',
    system: 'RCC Column Jacketing · Custom Elevation Upgrade',
    category: 'Residential',
    projectType: 'renovation',
    status: 'Completed',
    hero: '/renovation/Vani%20Vilas%20road%20-%203BHK%20civil%20renovation/1.jpeg',
    thumb: '/renovation/Vani%20Vilas%20road%20-%203BHK%20civil%20renovation/1.jpeg',
    gallery: [
      '/renovation/Vani%20Vilas%20road%20-%203BHK%20civil%20renovation/IMG-20231202-WA0058.jpg',
      '/renovation/Vani%20Vilas%20road%20-%203BHK%20civil%20renovation/IMG-20240304-WA0037.jpeg',
      '/renovation/Vani%20Vilas%20road%20-%203BHK%20civil%20renovation/IMG-20240304-WA0046.jpeg',
      '/renovation/Vani%20Vilas%20road%20-%203BHK%20civil%20renovation/IMG-20240308-WA0055.jpg',
      '/renovation/Vani%20Vilas%20road%20-%203BHK%20civil%20renovation/IMG-20240328-WA0016.jpg',
      '/renovation/Vani%20Vilas%20road%20-%203BHK%20civil%20renovation/IMG-20240508-WA0031.jpg',
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
    slug: 'railway-parallel-road-seshadripuram-3bhk-and-terrace-renovation',
    name: 'Railway Parallel Road, Seshadripuram - 3BHK and Terrace Renovation',
    location: 'Seshadripuram, Bengaluru',
    year: '2024',
    area: '4,100 sq.ft',
    system: 'Interior Remodeling · Lintel Support Beam Installation',
    category: 'Residential',
    projectType: 'renovation',
    status: 'Completed',
    hero: '/renovation/Railway%20parallel%20road%2C%20seshadripuram%20-%203BHK%20and%20terrace%20renovation/1.jpg',
    thumb: '/renovation/Railway%20parallel%20road%2C%20seshadripuram%20-%203BHK%20and%20terrace%20renovation/1.jpg',
    gallery: [
      '/renovation/Railway%20parallel%20road%2C%20seshadripuram%20-%203BHK%20and%20terrace%20renovation/aaa.jpeg',
      '/renovation/Railway%20parallel%20road%2C%20seshadripuram%20-%203BHK%20and%20terrace%20renovation/IMG-20231019-WA0049.jpg',
      '/renovation/Railway%20parallel%20road%2C%20seshadripuram%20-%203BHK%20and%20terrace%20renovation/IMG-20231209-WA0057.jpg',
      '/renovation/Railway%20parallel%20road%2C%20seshadripuram%20-%203BHK%20and%20terrace%20renovation/IMG-20240308-WA0126.jpeg',
      '/renovation/Railway%20parallel%20road%2C%20seshadripuram%20-%203BHK%20and%20terrace%20renovation/IMG-20240309-WA0052.jpg',
      '/renovation/Railway%20parallel%20road%2C%20seshadripuram%20-%203BHK%20and%20terrace%20renovation/IMG-20240329-WA0057.jpg',
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
    slug: 'puff-sheet-roof-and-blinds-electronics-city',
    name: 'PUFF Sheet Roof and Blinds @ Electronics City',
    location: 'Electronic City, Bengaluru',
    year: '2022',
    area: '3,400 sq.ft',
    system: 'Interior Refurbishment · Damp Proof Membrane Installation',
    category: 'Residential',
    projectType: 'renovation',
    status: 'Completed',
    hero: '/renovation/PUFF%20sheet%20roof%20and%20blinds%20%40%20Electronics%20city/1.jpeg',
    thumb: '/renovation/PUFF%20sheet%20roof%20and%20blinds%20%40%20Electronics%20city/1.jpeg',
    gallery: [
      '/renovation/PUFF%20sheet%20roof%20and%20blinds%20%40%20Electronics%20city/IMG-20220908-WA0030.jpg',
      '/renovation/PUFF%20sheet%20roof%20and%20blinds%20%40%20Electronics%20city/IMG-20220909-WA0010.jpg',
      '/renovation/PUFF%20sheet%20roof%20and%20blinds%20%40%20Electronics%20city/IMG-20221015-WA0047.jpg',
      '/renovation/PUFF%20sheet%20roof%20and%20blinds%20%40%20Electronics%20city/IMG-20221015-WA0048.jpg',
      '/renovation/PUFF%20sheet%20roof%20and%20blinds%20%40%20Electronics%20city/IMG-20221015-WA0049.jpg',
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
    slug: 'mrs-shoma-mangalore-tile-roof-nandi-hills',
    name: 'Mrs Shoma - Mangalore Tile Roof @ Nandi Hills',
    location: 'Nandi Hills, Bengaluru Foothills',
    year: '2024',
    area: '7,800 sq.ft',
    system: 'Hillside Retaining Support · Luxury Villa Restoration',
    category: 'Residential',
    projectType: 'renovation',
    status: 'Completed',
    hero: '/renovation/Mrs%20Shoma%20-%20Mangalore%20tile%20roof%20%40%20Nandi%20Hills/1.jpg',
    thumb: '/renovation/Mrs%20Shoma%20-%20Mangalore%20tile%20roof%20%40%20Nandi%20Hills/1.jpg',
    gallery: [
      '/renovation/Mrs%20Shoma%20-%20Mangalore%20tile%20roof%20%40%20Nandi%20Hills/IMG-20240118-WA0024.jpeg',
      '/renovation/Mrs%20Shoma%20-%20Mangalore%20tile%20roof%20%40%20Nandi%20Hills/IMG-20240309-WA0027.jpg',
      '/renovation/Mrs%20Shoma%20-%20Mangalore%20tile%20roof%20%40%20Nandi%20Hills/IMG20240320120953.jpg',
      '/renovation/Mrs%20Shoma%20-%20Mangalore%20tile%20roof%20%40%20Nandi%20Hills/IMG20240320121002.jpg',
      '/renovation/Mrs%20Shoma%20-%20Mangalore%20tile%20roof%20%40%20Nandi%20Hills/IMG20240320121013.jpg',
      '/renovation/Mrs%20Shoma%20-%20Mangalore%20tile%20roof%20%40%20Nandi%20Hills/IMG20240320121022.jpg',
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
