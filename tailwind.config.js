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
        'accent-dim': 'var(--accent-dim)',
      },
      fontFamily: {
        heading: ['"Bricolage Grotesque"', 'sans-serif'],
        sans: ['"Figtree"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        'phone': '44px',
        'phone-screen': '38px',
      },
      boxShadow: {
        'phone-frame': '0 25px 60px -15px rgba(0, 0, 0, 0.5), 0 0 0 1px var(--border)',
        'card-subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.12), 0 0 0 1px var(--border)',
        'card-hover': '0 12px 32px -4px rgba(0, 0, 0, 0.2), 0 0 0 1px var(--accent-dim)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}
