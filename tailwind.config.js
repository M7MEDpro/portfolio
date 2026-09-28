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
        background: '#07090E',
        surface: {
          50: '#1A202C',
          100: '#141824',
          200: '#0F131D',
          300: '#0B0E17',
          DEFAULT: '#0D111A',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.07)',
          glow: 'rgba(0, 229, 255, 0.25)',
        },
        cyan: {
          neon: '#00E5FF',
          dark: '#00B4D8',
          glow: 'rgba(0, 229, 255, 0.4)',
        },
        violet: {
          neon: '#8B5CF6',
          dark: '#6D28D9',
        },
        emerald: {
          neon: '#10B981',
        },
        accent: {
          amber: '#F59E0B',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-spin': 'spin 12s linear infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      boxShadow: {
        'neon-cyan': '0 0 25px -5px rgba(0, 229, 255, 0.35)',
        'neon-violet': '0 0 25px -5px rgba(139, 92, 246, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
