/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        'surface-3': 'var(--surface-3)',
        border: 'var(--border)',
        'border-subtle': 'var(--border-subtle)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        'muted-dim': 'var(--muted-dim)',
        accent: 'var(--accent)',
        'accent-bright': 'var(--accent-bright)',
        'accent-dim': 'var(--accent-dim)',
        neon: {
          green: '#00ff87',
          emerald: '#10b981',
          lime: '#22c55e',
          cyan: '#38bdf8',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        heading: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"Figtree"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        'phone': '46px',
        'phone-screen': '40px',
      },
      boxShadow: {
        'phone-3d': '0 30px 80px -15px rgba(0, 0, 0, 0.9), 0 0 35px -5px rgba(16, 185, 129, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'neon-glow': '0 0 25px -4px rgba(0, 255, 135, 0.4), 0 0 10px rgba(16, 185, 129, 0.3)',
        'card-glow': '0 10px 40px -10px rgba(0, 0, 0, 0.7), 0 0 0 1px var(--border)',
        'card-glow-hover': '0 20px 50px -10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(16, 185, 129, 0.15), 0 0 0 1px rgba(16, 185, 129, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-gentle': 'floatGentle 6s ease-in-out infinite',
      },
      keyframes: {
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        }
      }
    },
  },
  plugins: [],
}
