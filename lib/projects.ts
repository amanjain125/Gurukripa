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
    year: '2021',
    area: '8,194 sq.ft',
    system: 'RCC framed structure along with cantilever deck and terrace deck slabs; WPC elevation system',
    category: 'Residential',
    projectType: 'construction',
    status: 'Completed',
    hero: '/construction/Koramanagala/1_upright.jpg',
    thumb: '/construction/Koramanagala/1_upright.jpg',
    gallery: [
      '/construction/Koramanagala/1_upright.jpg',
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
      'High-end urban apartment building in Koramangala featuring spacious open-plan living and custom architectural elevation.',
    floorCount: 'G+3 floors',
    commencementYear: '2020',
    completionYear: '2021',
  },
  {
    slug: 'sports-stall-and-warehouse-building',
    name: 'Sports Store and Warehouse Building',
    location: 'BVK Iyengar Road, Bengaluru',
    year: '2021',
    area: '5,500 sq.ft',
    system: 'RCC frame structure; isolated and combined footings',
    category: 'Commercial',
    projectType: 'construction',
    status: 'Completed',
    hero: '/construction/Suresh mutha/1.jpg',
    thumb: '/construction/Suresh mutha/1.jpg',
    gallery: [
      '/construction/Suresh mutha/1.jpg',
      '/construction/Suresh mutha/IMG-20211013-WA0008.jpg',
      '/construction/Suresh mutha/IMG_20210914_171055.jpg',
    ],
    problem:
      'Constructing a multi-tier commercial showroom with high floor load ratings for warehouse storage.',
    solution:
      'Engineered heavy-duty RCC frame with reinforced floor slabs to accommodate retail display and heavy storage.',
    outcome:
      'Handed over on time with complete structural clearance and custom interior finishes.',
    summary:
      'Multi story sports showroom and warehouse building in the heart of bengaluru',
    floorCount: 'G+4 floors + Terrace',
    commencementYear: '2020',
    completionYear: '2021',
  },
  {
    slug: 'residential-building-of-hennur-road',
    name: 'Residential Building off Hennur Main Road',
    location: 'Hennur Road, Bengaluru',
    year: '2022',
    area: '5,020 sq.ft',
    system: 'RCC frame structure; solid block masonry',
    category: 'Residential',
    projectType: 'construction',
    status: 'Completed',
    hero: '/construction/Hennur/1.jpg',
    thumb: '/construction/Hennur/1.jpg',
    gallery: [
      '/construction/Hennur/1.jpg',
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
    category: 'Residential',
    projectType: 'construction',
    status: 'Completed',
    hero: '/construction/Channsandra/1.png',
    thumb: '/construction/Channsandra/1.png',
    gallery: [
      '/construction/Channsandra/1.png',
      '/construction/Channsandra/IMG20251108123048.jpg',
      '/construction/Channsandra/IMG20251108123101.jpg',
      '/construction/Channsandra/IMG20251108123210.jpg',
    ],
    problem:
      'Designing a modern multi-story residential triplex structure in Channsandra with optimal interior layout and space utilization.',
    solution:
      'Implemented robust RCC structural frame with cantilever slab projections for maximum living area.',
    outcome:
      'Completed structure handed over with full structural clearance and premium finishes.',
    summary:
      'Contemporary residential tower in Channsandra.',
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
      '/construction/Kumbalgodu/1.jpeg',
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
      'RCC warehouse building off Mysuru Road, Kumbalgodu, built with reinforced structural framing.',
    floorCount: 'G+M+3 floors + Terrace',
    commencementYear: '2023',
    completionYear: '2025',
  },
  {
    slug: 'villa-gurupunvaanii-exa-anekal',
    name: 'Villa @ Guru Punvaanii, Eka, Anekal',
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
      '/construction/Anekal/EKA/1.jpg',
      '/construction/Anekal/EKA/IMG20250822123014.jpg',
      '/construction/Anekal/EKA/WhatsApp Image 2026-03-17 at 14.03.35 (1).jpeg',
      '/construction/Anekal/EKA/WhatsApp Image 2026-03-17 at 14.03.35.jpeg',
      '/construction/Anekal/EKA/WhatsApp Image 2026-03-17 at 14.03.51.jpeg',
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
    name: 'Villa @ Guru Punvaanii, Exotica, Anekal',
    location: 'Anekal, Bengaluru',
    year: '2024',
    area: '2,594 sq.ft',
    system: 'RCC frame structure; isolated footings',
    category: 'Residential',
    projectType: 'construction',
    status: 'Completed',
    hero: '/construction/Anekal/EXOTICA/1.jpg',
    thumb: '/construction/Anekal/EXOTICA/1.jpg',
    gallery: [
      '/construction/Anekal/EXOTICA/1.jpg',
      '/construction/Anekal/EXOTICA/WhatsApp Image 2026-02-10 at 13.42.20.jpeg',
      '/construction/Anekal/EXOTICA/WhatsApp Image 2026-02-10 at 13.42.21.jpeg',
      '/construction/Anekal/EXOTICA/WhatsApp Image 2026-03-13 at 17.47.07 (1).jpeg',
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
    system: 'RCC frame structure; wide cut red brick masonry',
    category: 'Residential',
    projectType: 'construction',
    status: 'Completed',
    hero: '/construction/Hoskote/1.jpg',
    thumb: '/construction/Hoskote/1.jpg',
    gallery: [
      '/construction/Hoskote/1.jpg',
      '/construction/Hoskote/IMG-20240528-WA0011.jpg',
      '/construction/Hoskote/IMG-20240528-WA0012.jpg',
      '/construction/Hoskote/IMG20250304123548.jpg',
      '/construction/Hoskote/IMG20250607101445.jpg',
      '/construction/Hoskote/IMG20250607101527.jpg',
    ],
    problem:
      'Constructing a spacious multi-story residential building in Hoskote utilizing high-quality wide cut red brick masonry.',
    solution:
      'Engineered a robust RCC framed skeleton integrated with precision wide cut red brick masonry for enhanced thermal performance and visual elevation.',
    outcome:
      'Successfully delivered turnkey residential structure with exposed red brick aesthetic and full structural clearance.',
    summary:
      'Residential building @ Hoskote built with wide cut red brick masonry.',
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
      '/construction/VVpuram/1.jpeg',
      '/construction/VVpuram/WhatsApp Image 2026-04-13 at 17.58.33.jpeg',
    ],
    problem:
      'Tight infill property flanked by historical commercial buildings in VV Puram.',
    solution:
      'Used low-vibration bored piling and digital displacement monitoring during foundation work.',
    outcome:
      'Completed zero-damage infill structure with 100% compliance with local heritage guidelines.',
    summary:
      '4 storey residential building construction in the heart of VV Puram, Basavanagudi.',
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
    hero: '/construction/VVpuram 10/Residential Building for Tyche Corp -  ELEVATION.png',
    thumb: '/construction/VVpuram 10/Residential Building for Tyche Corp -  ELEVATION.png',
    gallery: [
      '/construction/VVpuram 10/Residential Building for Tyche Corp -  ELEVATION.png',
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
    completionYear: '2023',
    area: '1,850 sq.ft',
    system: 'Structural Retrofit & Modern Interior Renovation',
    category: 'Residential',
    projectType: 'renovation',
    status: 'Completed',
    hero: '/renovation/3BHK@ ETA Apartments/1.jpg',
    thumb: '/renovation/3BHK@ ETA Apartments/1.jpg',
    gallery: [
      '/renovation/3BHK@ ETA Apartments/1.jpg',
      '/renovation/3BHK@ ETA Apartments/IMG_20211218_120327.jpg',
      '/renovation/3BHK@ ETA Apartments/IMG_20220529_181602.jpg',
    ],
    problem:
      'Older apartment layout requiring structural wall opening and complete modern interior refurbishment.',
    solution:
      'Engineered hidden steel lintel support beams to remove load-bearing interior partition walls cleanly.',
    outcome:
      'Created open-plan living areas with zero floor deflection or plaster settlement.',
    summary:
      'Turnkey luxury apartment renovation and structural interior upgrade @ ETA Apartments.',
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
    hero: '/renovation/Chamrajpet - 3BHK renovation/1.jpg',
    thumb: '/renovation/Chamrajpet - 3BHK renovation/1.jpg',
    gallery: [
      '/renovation/Chamrajpet - 3BHK renovation/1.jpg',
      '/renovation/Chamrajpet - 3BHK renovation/IMG-20231206-WA0029.jpg',
      '/renovation/Chamrajpet - 3BHK renovation/IMG-20231209-WA0056.jpg',
      '/renovation/Chamrajpet - 3BHK renovation/IMG-20231214-WA0046.jpg',
      '/renovation/Chamrajpet - 3BHK renovation/IMG-20231215-WA0046.jpg',
      '/renovation/Chamrajpet - 3BHK renovation/IMG-20231220-WA0056.jpg',
    ],
    problem:
      'Traditional Chamrajpet home requiring structural elevation modernization and moisture barrier reinforcement.',
    solution:
      'Stitched column bases with FRP wraps and replaced aging exterior plaster with polymer-modified weather coats.',
    outcome:
      'Extended building lifecycle by 35+ years without disturbing core structure.',
    summary:
      'Full home renovation and remodelling in Chamrajpet.',
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
    hero: '/renovation/Vani Vilas road - 3BHK civil renovation/1.jpeg',
    thumb: '/renovation/Vani Vilas road - 3BHK civil renovation/1.jpeg',
    gallery: [
      '/renovation/Vani Vilas road - 3BHK civil renovation/1.jpeg',
      '/renovation/Vani Vilas road - 3BHK civil renovation/IMG-20231202-WA0058.jpg',
      '/renovation/Vani Vilas road - 3BHK civil renovation/IMG-20240304-WA0037.jpeg',
      '/renovation/Vani Vilas road - 3BHK civil renovation/IMG-20240304-WA0046.jpeg',
      '/renovation/Vani Vilas road - 3BHK civil renovation/IMG-20240308-WA0055.jpg',
      '/renovation/Vani Vilas road - 3BHK civil renovation/IMG-20240328-WA0016.jpg',
      '/renovation/Vani Vilas road - 3BHK civil renovation/IMG-20240508-WA0031.jpg',
    ],
    problem:
      'Structural reconfiguration of a multi-tier family home along Vani Vilas Road.',
    solution:
      'Reinforced core RCC columns using high-tensile steel jacketing and modern architectural joinery.',
    outcome:
      'Handed over with structural safety certification and contemporary glass elevation.',
    summary:
      'Executive apartment renovation along Vani Vilas Road.',
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
    hero: '/renovation/Railway parallel road, seshadripuram - 3BHK and terrace renovation/1.jpg',
    thumb: '/renovation/Railway parallel road, seshadripuram - 3BHK and terrace renovation/1.jpg',
    gallery: [
      '/renovation/Railway parallel road, seshadripuram - 3BHK and terrace renovation/1.jpg',
      '/renovation/Railway parallel road, seshadripuram - 3BHK and terrace renovation/aaa.jpeg',
      '/renovation/Railway parallel road, seshadripuram - 3BHK and terrace renovation/IMG-20231019-WA0049.jpg',
      '/renovation/Railway parallel road, seshadripuram - 3BHK and terrace renovation/IMG-20231209-WA0057.jpg',
      '/renovation/Railway parallel road, seshadripuram - 3BHK and terrace renovation/IMG-20240308-WA0126.jpeg',
      '/renovation/Railway parallel road, seshadripuram - 3BHK and terrace renovation/IMG-20240309-WA0052.jpg',
      '/renovation/Railway parallel road, seshadripuram - 3BHK and terrace renovation/IMG-20240329-WA0057.jpg',
    ],
    problem:
      'Urban residence in Seshadripuram requiring wall removal and open-plan kitchen-living integration.',
    solution:
      'Switched load paths to ceiling steel channels and completed turnkey interior finishes.',
    outcome:
      'Delivered ahead of schedule with full interior and electrical rewiring completed.',
    summary:
      'Modern home renovation and terrace uplift project @ Railway Parallel Road, Seshadripuram.',
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
    hero: '/renovation/PUFF sheet roof and blinds @ Electronics city/1.jpeg',
    thumb: '/renovation/PUFF sheet roof and blinds @ Electronics city/1.jpeg',
    gallery: [
      '/renovation/PUFF sheet roof and blinds @ Electronics city/1.jpeg',
      '/renovation/PUFF sheet roof and blinds @ Electronics city/IMG-20220908-WA0030.jpg',
      '/renovation/PUFF sheet roof and blinds @ Electronics city/IMG-20220909-WA0010.jpg',
      '/renovation/PUFF sheet roof and blinds @ Electronics city/IMG-20221015-WA0047.jpg',
      '/renovation/PUFF sheet roof and blinds @ Electronics city/IMG-20221015-WA0048.jpg',
      '/renovation/PUFF sheet roof and blinds @ Electronics city/IMG-20221015-WA0049.jpg',
    ],
    problem:
      'Ground water dampness seepage on ground floor walls and outdated room partitions.',
    solution:
      'Applied chemical damp-proof membrane and installed moisture-resistant interior wall panels.',
    outcome:
      'Eliminated seepage completely with certified 10-year waterproofing warranty.',
    summary:
      'Fabrication of PUFF sheet for a penthouse apartment @ Electronic City.',
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
    hero: '/renovation/Mrs Shoma - Mangalore tile roof @ Nandi Hills/1.jpg',
    thumb: '/renovation/Mrs Shoma - Mangalore tile roof @ Nandi Hills/1.jpg',
    gallery: [
      '/renovation/Mrs Shoma - Mangalore tile roof @ Nandi Hills/1.jpg',
      '/renovation/Mrs Shoma - Mangalore tile roof @ Nandi Hills/IMG-20240118-WA0024.jpeg',
      '/renovation/Mrs Shoma - Mangalore tile roof @ Nandi Hills/IMG-20240309-WA0027.jpg',
      '/renovation/Mrs Shoma - Mangalore tile roof @ Nandi Hills/IMG20240320120953.jpg',
      '/renovation/Mrs Shoma - Mangalore tile roof @ Nandi Hills/IMG20240320121002.jpg',
      '/renovation/Mrs Shoma - Mangalore tile roof @ Nandi Hills/IMG20240320121013.jpg',
      '/renovation/Mrs Shoma - Mangalore tile roof @ Nandi Hills/IMG20240320121022.jpg',
    ],
    problem:
      'Hillside villa estate requiring structural retaining wall stabilization and luxury deck expansion.',
    solution:
      'Built stepped stone-gabion retaining walls and cantilevered steel deck overlooking Nandi Hills valley.',
    outcome:
      'Delivered breathtaking hillside villa restoration certified for high-wind and slope stability.',
    summary:
      'Fabrication of Mangalore tiles roof for a farmhouse project @ Nandi Hills.',
  },
  {
    slug: 'bathroom-civil-renovation-kumarapark',
    name: 'Bathroom and Civil Renovation @ Kumarapark',
    location: 'Kumarapark, Bengaluru',
    year: '2024',
    area: '2,500 sq.ft',
    system: 'Bathroom Overhaul · Civil & Waterproofing Membrane',
    category: 'Residential',
    projectType: 'renovation',
    status: 'Completed',
    hero: '/renovation/Bathroom and civil renovation @ Kumarapark.    D- Complete bathroom renovation along with civil and waterproofing work/1.jpeg',
    thumb: '/renovation/Bathroom and civil renovation @ Kumarapark.    D- Complete bathroom renovation along with civil and waterproofing work/1.jpeg',
    gallery: [
      '/renovation/Bathroom and civil renovation @ Kumarapark.    D- Complete bathroom renovation along with civil and waterproofing work/1.jpeg',
    ],
    problem:
      'Outdated bathroom layout requiring complete civil strip-down, plumbing overhaul, and high-performance waterproofing.',
    solution:
      'Executed end-to-end civil demolition, multi-coat elastomeric waterproofing, premium tiling, and sanitaryware fitting.',
    outcome:
      'Delivered leak-proof, high-end modern bathroom upgrade certified with complete waterproofing warranty.',
    summary:
      'Complete bathroom renovation along with civil and waterproofing work.',
  },
  {
    slug: 'industrial-property-renovation-kiadb-doddaballapur',
    name: 'Industrial Property Renovation @ KIADB, Doddaballapur',
    location: 'KIADB, Doddaballapur, Bengaluru',
    year: '2026',
    area: '12,500 sq.ft',
    system: 'Industrial Structural Retrofit · Heavy Flooring & Roof Refurbishment',
    category: 'Commercial',
    projectType: 'renovation',
    status: 'Completed',
    hero: '/renovation/Industrial Property Renovation @ KIADB, Doddaballapur.  D-Complete industrial property renovation at a Industrial property/1.jpeg',
    thumb: '/renovation/Industrial Property Renovation @ KIADB, Doddaballapur.  D-Complete industrial property renovation at a Industrial property/1.jpeg',
    gallery: [
      '/renovation/Industrial Property Renovation @ KIADB, Doddaballapur.  D-Complete industrial property renovation at a Industrial property/1.jpeg',
      '/renovation/Industrial Property Renovation @ KIADB, Doddaballapur.  D-Complete industrial property renovation at a Industrial property/2.jpeg',
      '/renovation/Industrial Property Renovation @ KIADB, Doddaballapur.  D-Complete industrial property renovation at a Industrial property/3.jpeg',
      '/renovation/Industrial Property Renovation @ KIADB, Doddaballapur.  D-Complete industrial property renovation at a Industrial property/4.jpeg',
    ],
    problem:
      'Aging industrial shed requiring floor load strengthening, structural roof repairs, and wall refurbishment.',
    solution:
      'Reinforced concrete floor slab for heavy equipment loads and restored industrial roof cladding and wall masonry.',
    outcome:
      'Fully modernized industrial plant space meeting factory safety compliance and heavy-duty operational standards.',
    summary:
      'Complete industrial property renovation at an industrial property.',
  },
  {
    slug: 'strong-room-civil-renovation-thippasandra',
    name: 'Strong Room & Civil Renovation @ Thippasandra, Bengaluru',
    location: 'Thippasandra, Bengaluru',
    year: '2025',
    area: '3,800 sq.ft',
    system: 'Bank Locker RCC Vault Construction · High-Security Civil Works',
    category: 'Commercial',
    projectType: 'renovation',
    status: 'Completed',
    hero: '/renovation/Strong Room & Civil renovation @ Thippasandra, Bengaluru. D - Civil work and building a strong room for a bank locker facility @ Thippasandra,/1.jpeg',
    thumb: '/renovation/Strong Room & Civil renovation @ Thippasandra, Bengaluru. D - Civil work and building a strong room for a bank locker facility @ Thippasandra,/1.jpeg',
    gallery: [
      '/renovation/Strong Room & Civil renovation @ Thippasandra, Bengaluru. D - Civil work and building a strong room for a bank locker facility @ Thippasandra,/1.jpeg',
      '/renovation/Strong Room & Civil renovation @ Thippasandra, Bengaluru. D - Civil work and building a strong room for a bank locker facility @ Thippasandra,/WhatsApp Image 2026-08-09 at 11.52.16 AM.jpeg',
      '/renovation/Strong Room & Civil renovation @ Thippasandra, Bengaluru. D - Civil work and building a strong room for a bank locker facility @ Thippasandra,/WhatsApp Image 2026-08-09 at 11.52.17 AM.jpeg',
    ],
    problem:
      'Bank facility requiring RBI-standard RCC reinforced strong room construction within existing commercial layout.',
    solution:
      'Cast heavy-duty reinforced RCC vault walls with steel armor mesh integration and specialized security door casing.',
    outcome:
      'Successfully handed over certified bank locker strong room facility built strictly to institutional security norms.',
    summary:
      'Civil work and building a strong room for a bank locker facility @ Thippasandra.',
  },
  {
    slug: 'swimming-pool-installation-sadahalli',
    name: 'Swimming Pool Installation & Civil Work @ Sadahalli, Bengaluru',
    location: 'Sadahalli, Bengaluru',
    year: '2026',
    area: '6,200 sq.ft',
    system: 'RCC Swimming Pool Construction · Site Boundary Green Fencing',
    category: 'Residential',
    projectType: 'renovation',
    status: 'Completed',
    hero: '/renovation/Swimming pool installation and civil work @ Sadahalli, Bengaluru .  D- New swimming pool installation with associated civil work with the site boundary green fencing/1.jpeg',
    thumb: '/renovation/Swimming pool installation and civil work @ Sadahalli, Bengaluru .  D- New swimming pool installation with associated civil work with the site boundary green fencing/1.jpeg',
    gallery: [
      '/renovation/Swimming pool installation and civil work @ Sadahalli, Bengaluru .  D- New swimming pool installation with associated civil work with the site boundary green fencing/1.jpeg',
      '/renovation/Swimming pool installation and civil work @ Sadahalli, Bengaluru .  D- New swimming pool installation with associated civil work with the site boundary green fencing/WhatsApp Image 2026-08-09 at 11.55.16 AM.jpeg',
      '/renovation/Swimming pool installation and civil work @ Sadahalli, Bengaluru .  D- New swimming pool installation with associated civil work with the site boundary green fencing/WhatsApp Image 2026-08-09 at 11.55.17 AM (1).jpeg',
      '/renovation/Swimming pool installation and civil work @ Sadahalli, Bengaluru .  D- New swimming pool installation with associated civil work with the site boundary green fencing/WhatsApp Image 2026-08-09 at 11.55.17 AM.jpeg',
      '/renovation/Swimming pool installation and civil work @ Sadahalli, Bengaluru .  D- New swimming pool installation with associated civil work with the site boundary green fencing/WhatsApp Image 2026-08-09 at 11.55.18 AM (1).jpeg',
      '/renovation/Swimming pool installation and civil work @ Sadahalli, Bengaluru .  D- New swimming pool installation with associated civil work with the site boundary green fencing/WhatsApp Image 2026-08-09 at 11.55.19 AM.jpeg',
    ],
    problem:
      'Private property requiring custom in-ground RCC swimming pool construction, pool filtration decking, and perimeter security fencing.',
    solution:
      'Excavated and cast monolithic RCC pool shell with dual-stage waterproofing, balance tank, and eco-friendly perimeter green fencing.',
    outcome:
      'Completed resort-grade swimming pool facility with full filtration deck and landscape boundary integration.',
    summary:
      'New swimming pool installation with associated civil work with the site boundary green fencing.',
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
