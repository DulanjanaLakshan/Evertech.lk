/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          dark: '#1E40AF',
        },
        secondary: {
          DEFAULT: '#1E1E2F',
          light: '#2A2A3C',
        },
        accent: '#10B981',
        background: '#0A0A0F',
        surface: '#14141F',
        text: {
          primary: '#FFFFFF',
          secondary: '#E2E8F0',
          muted: '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
}
