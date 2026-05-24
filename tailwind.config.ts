import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: 'var(--brand-red)',
          'red-deep': 'var(--brand-red-deep)',
          teal: 'var(--brand-teal)',
          'teal-deep': 'var(--brand-teal-deep)',
        },
        ink: 'var(--ink)',
        bone: 'var(--bone)',
        steel: 'var(--steel)',
        gold: 'var(--gold-accent)',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
      },
      lineHeight: {
        body: '1.6',
      },
      fontSize: {
        display: ['clamp(48px, 9vw, 128px)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        hero: ['clamp(40px, 7vw, 96px)', { lineHeight: '1', letterSpacing: '-0.025em' }],
        h1: ['clamp(32px, 5vw, 64px)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        h2: ['clamp(24px, 3.5vw, 44px)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
      },
      spacing: {
        section: 'clamp(96px, 12vw, 192px)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      backgroundImage: {
        'noise': "url('/noise.svg')",
        'teal-fade': 'linear-gradient(135deg, var(--brand-teal) 0%, var(--brand-teal-deep) 100%)',
        'red-fade': 'linear-gradient(135deg, var(--brand-red) 0%, var(--brand-red-deep) 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
