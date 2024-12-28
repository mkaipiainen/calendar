/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        action: '0px 2px 4px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary-900)',
          foreground: 'var(--color-primary-text)',
          900: 'var(--color-primary-900)',
          800: 'var(--color-primary-800)',
          700: 'var(--color-primary-700)',
          600: 'var(--color-primary-600)',
          500: 'var(--color-primary-500)',
          400: 'var(--color-primary-400)',
          300: 'var(--color-primary-300)',
          200: 'var(--color-primary-200)',
          100: 'var(--color-primary-100)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary-900)',
          foreground: 'var(--color-secondary-text)',
          900: 'var(--color-secondary-900)',
          800: 'var(--color-secondary-800)',
          700: 'var(--color-secondary-700)',
          600: 'var(--color-secondary-600)',
          500: 'var(--color-secondary-500)',
          400: 'var(--color-secondary-400)',
          300: 'var(--color-secondary-300)',
          200: 'var(--color-secondary-200)',
          100: 'var(--color-secondary-100)',
        },
        tertiary: {
          DEFAULT: 'var(--color-tertiary-900)',
          foreground: 'var(--color-tertiary-text)',
          900: 'var(--color-tertiary-900)',
          800: 'var(--color-tertiary-800)',
          700: 'var(--color-tertiary-700)',
          600: 'var(--color-tertiary-600)',
          500: 'var(--color-tertiary-500)',
          400: 'var(--color-tertiary-400)',
          300: 'var(--color-tertiary-300)',
          200: 'var(--color-tertiary-200)',
          100: 'var(--color-tertiary-100)',
        },
        'background-primary': {
          DEFAULT: 'var(--color-background-primary)',
          foreground: 'var(--color-background-primary-text)',
          900: 'var(--color-background-primary-900)',
          800: 'var(--color-background-primary-800)',
          700: 'var(--color-background-primary-700)',
          600: 'var(--color-background-primary-600)',
          500: 'var(--color-background-primary-500)',
          400: 'var(--color-background-primary-400)',
          300: 'var(--color-background-primary-300)',
          200: 'var(--color-background-primary-200)',
          100: 'var(--color-background-primary-100)',
        },
        'background-secondary': {
          DEFAULT: 'var(--color-background-secondary)',
          foreground: 'var(--color-background-secondary-text)',
          900: 'var(--color-background-secondary-900)',
          800: 'var(--color-background-secondary-800)',
          700: 'var(--color-background-secondary-700)',
          600: 'var(--color-background-secondary-600)',
          500: 'var(--color-background-secondary-500)',
          400: 'var(--color-background-secondary-400)',
          300: 'var(--color-background-secondary-300)',
          200: 'var(--color-background-secondary-200)',
          100: 'var(--color-background-secondary-100)',
        },
        success: {
          DEFAULT: 'var(--color-success)',
          foreground: 'var(--color-success-foreground)',
        },
        danger: 'var(--color-danger)',
        warning: 'var(--color-warning)',
        info: 'var(--color-info)',
      },
    },
  },
  plugins: [],
};
