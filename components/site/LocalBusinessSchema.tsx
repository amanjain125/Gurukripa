import { COMPANY, ADDRESS_SINGLE_LINE } from '@/lib/company';

export function LocalBusinessSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: COMPANY.name,
    description:
      'Civil construction and structural consultancy. Residential, commercial, and turnkey projects.',
    image: '/og-image.svg',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://gurukripaconstructions.com',
    telephone: COMPANY.phones,
    email: COMPANY.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${COMPANY.address.line1}, ${COMPANY.address.line2}`,
      addressLocality: 'Bengaluru',
      addressRegion: COMPANY.address.state,
      postalCode: COMPANY.address.pincode,
      addressCountry: 'IN',
    },
    areaServed: 'Bengaluru, Karnataka',
    founder: {
      '@type': 'Person',
      name: COMPANY.founder.name,
      jobTitle: COMPANY.founder.role,
    },
    foundingDate: String(COMPANY.established),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 12.9417,
      longitude: 77.5731,
    },
    openingHours: 'Mo-Sa 10:00-19:00',
    priceRange: '₹₹₹',
    sameAs: [],
    knowsAbout: [
      'Structural engineering',
      'Civil construction',
      'Turnkey project management',
      'Heritage retrofitting',
    ],
    fullAddress: ADDRESS_SINGLE_LINE,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
