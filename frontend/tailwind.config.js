import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        heading: ['Fraunces', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: 'oklch(var(--border))',
        input: 'oklch(var(--input))',
        ring: 'oklch(var(--ring) / <alpha-value>)',
        background: 'oklch(var(--background))',
        foreground: 'oklch(var(--foreground))',
        primary: {
          DEFAULT: 'oklch(var(--primary))',
          foreground: 'oklch(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'oklch(var(--secondary))',
          foreground: 'oklch(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'oklch(var(--destructive))',
          foreground: 'oklch(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'oklch(var(--muted))',
          foreground: 'oklch(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'oklch(var(--accent))',
          foreground: 'oklch(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'oklch(var(--popover))',
          foreground: 'oklch(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'oklch(var(--card))',
          foreground: 'oklch(var(--card-foreground))',
        },
        sidebar: {
          DEFAULT: 'oklch(var(--sidebar))',
          foreground: 'oklch(var(--sidebar-foreground))',
          primary: 'oklch(var(--sidebar-primary))',
          'primary-foreground': 'oklch(var(--sidebar-primary-foreground))',
          accent: 'oklch(var(--sidebar-accent))',
          'accent-foreground': 'oklch(var(--sidebar-accent-foreground))',
          border: 'oklch(var(--sidebar-border))',
          ring: 'oklch(var(--sidebar-ring))',
        },
        // Earthy custom palette
        'earth-green': {
          DEFAULT: 'oklch(0.38 0.11 145)',
          light: 'oklch(0.52 0.13 145)',
          dark: 'oklch(0.28 0.09 145)',
        },
        'earth-amber': {
          DEFAULT: 'oklch(0.78 0.16 78)',
          light: 'oklch(0.88 0.14 82)',
          dark: 'oklch(0.62 0.16 68)',
        },
        'earth-brown': {
          DEFAULT: 'oklch(0.38 0.08 55)',
          light: 'oklch(0.52 0.08 60)',
          dark: 'oklch(0.28 0.07 50)',
        },
        'earth-cream': {
          DEFAULT: 'oklch(0.97 0.02 90)',
          dark: 'oklch(0.93 0.03 88)',
        },
        coffee: {
          DEFAULT: 'oklch(0.35 0.09 45)',
          dark: 'oklch(0.25 0.07 40)',
          light: 'oklch(0.48 0.09 50)',
        },
        // Vibrant agri-inputs palette
        'agri-lime': {
          DEFAULT: 'oklch(0.78 0.22 140)',
          dark: 'oklch(0.60 0.22 140)',
          light: 'oklch(0.90 0.16 140)',
        },
        'agri-teal': {
          DEFAULT: 'oklch(0.62 0.18 185)',
          dark: 'oklch(0.46 0.18 185)',
        },
        'agri-orange': {
          DEFAULT: 'oklch(0.72 0.20 50)',
          dark: 'oklch(0.58 0.20 50)',
        },
        'agri-yellow': {
          DEFAULT: 'oklch(0.88 0.18 95)',
          dark: 'oklch(0.72 0.18 90)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        card: '0 2px 12px oklch(0.38 0.08 55 / 0.10)',
        'card-hover': '0 8px 28px oklch(0.38 0.08 55 / 0.18)',
        logo: '0 0 0 3px oklch(0.72 0.16 78 / 0.45), 0 8px 24px oklch(0.18 0.06 55 / 0.5)',
        'agri-card': '0 4px 20px oklch(0.60 0.22 140 / 0.20)',
        'agri-card-hover': '0 10px 36px oklch(0.60 0.22 140 / 0.35)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [typography, containerQueries, animate],
};
