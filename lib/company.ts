export const COMPANY = {
  name: 'Gurukripa Constructions',
  tagline: 'Consultants & Builders',
  founder: {
    name: 'Anuj Jain',
    credentials: 'B.E. Civil · M.Tech Structural',
    role: 'Founder & Principal Consultant',
  },
  city: 'Bengaluru',
  phones: ['+91 98860 96523', '+91 95909 82854'],
  email: 'gurukripaconstructions3@gmail.com',
  address: {
    line1: 'D7A, 3rd Floor, Sampurna Chambers',
    line2: 'Vasavi Temple St, Vishweshwarapura',
    line3: 'Basavanagudi, Bengaluru',
    state: 'Karnataka',
    pincode: '560004',
    country: 'India',
  },
  hours: 'Mon–Sat · 10:00 — 19:00 IST',
  established: 2010,
};

export const ADDRESS_SINGLE_LINE = `${COMPANY.address.line1}, ${COMPANY.address.line2}, ${COMPANY.address.line3}, ${COMPANY.address.state} ${COMPANY.address.pincode}`;

export const NAV_ITEMS = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Process', href: '/process' },
  { label: 'Journal', href: '/journal' },
  { label: 'Contact', href: '/contact' },
];
