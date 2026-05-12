import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      surface: '#ffffff',
      'surface-muted': '#f5f5f5',
      border: '#e5e5e5',
      text: '#111111',
      'text-muted': '#6b6b6b',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
