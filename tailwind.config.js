/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rounds: {
          950: '#06101E',
          900: '#0A2540',
          800: '#14385C',
          700: '#1E4C7A',
          600: '#0055FF',
          500: '#0066FF',
          400: '#2563EB',
          300: '#60A5FA',
          100: '#E0F2FE',
          50: '#F0F7FF',
        },
        paper: {
          DEFAULT: '#FFFFFF',
          subtle: '#F6F9FC',
          blue: '#F0F7FF',
        },
        ink: {
          DEFAULT: '#172033',
          muted: '#5F6B7A',
          light: '#8C98A8',
        },
        line: {
          DEFAULT: '#E4EAF0',
          dark: '#CBD5E1',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        none: '0px',
        sm: '6px',
        DEFAULT: '10px',
        md: '10px',
        lg: '12px',
        xl: '14px',
        '2xl': '16px',
      }
    },
  },
  plugins: [],
}
