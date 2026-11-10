/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#FFFFFF',
        surface: '#F5F5F5',
        'surface-subtle': '#FAFAFA',
        ink: {
          DEFAULT: '#0A0A0A',
          secondary: '#5A5A5A',
          muted: '#8A8A8A',
        },
        accent: {
          DEFAULT: '#0066FF',
          dark: '#0047B3',
          light: '#3385FF',
          subtle: '#EBF3FF',
        },
        bold: {
          bg: '#0A0A0A',
          surface: '#141414',
          border: '#262626',
          text: '#FFFFFF',
          muted: '#A3A3A3',
        },
        border: {
          DEFAULT: '#E5E5E5',
          dark: '#262626',
          light: '#F0F0F0',
        }
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'Sora', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
        widest: '0.15em',
        ultra: '0.25em',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
      },
      boxShadow: {
        'sm': '0 1px 3px rgba(0,0,0,0.08)',
        'md': '0 4px 16px rgba(0,0,0,0.08)',
        'lg': '0 12px 40px rgba(0,0,0,0.10)',
        'xl': '0 24px 64px rgba(0,0,0,0.12)',
        'glow': '0 0 40px rgba(0, 102, 255, 0.25)',
        'dark-card': '0 20px 40px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

