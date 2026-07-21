export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating?: number;
  date?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Anuj walked us through every load path before we approved the slab. That alone changed how we trust a contractor.',
    author: 'Sridhar M.',
    role: 'Owner, Lakeview Villa',
    rating: 5,
  },
  {
    quote:
      'The site report arrived every Friday for fourteen months without exception. That kind of discipline is rare.',
    author: 'Ananya R.',
    role: 'Director, Sampurna Holdings',
    rating: 5,
  },
  {
    quote:
      'We came to Gurukripa for a peer review. We stayed for the full structural design. Calm, careful, technically sharp.',
    author: 'Rohan K.',
    role: 'Partner, Studio K Architects',
    rating: 5,
  },
  {
    quote:
      'Our heritage home now has another fifty years in it. Not a single original tile was disturbed.',
    author: 'Mrs. Latha B.',
    role: 'Owner, Malleshwaram Retrofit',
    rating: 5,
  },
  {
    quote:
      'They handed over Block C on the date they quoted six months earlier. Nobody else would commit to that.',
    author: 'Vikram S.',
    role: 'COO, Whitefield Campus',
    rating: 5,
  },
];
