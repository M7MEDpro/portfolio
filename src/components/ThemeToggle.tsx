import { useState, useSyncExternalStore } from 'react';
import { Sun, Moon } from 'lucide-react';

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const saved = localStorage.getItem('badawy-theme');
      if (saved === 'light' || saved === 'dark') return saved;
      if (typeof window !== 'undefined' && window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
      }
      return 'dark';
    } catch {
      return 'dark';
    }
  });

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);

    if (nextTheme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    try {
      localStorage.setItem('badawy-theme', nextTheme);
    } catch {
      // Ignore storage errors
    }
  };

  if (!isClient) {
    return <div className="w-11 h-11" aria-hidden="true" />;
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="relative flex items-center justify-center w-11 h-11 rounded-full border border-border bg-surface text-muted hover:text-text hover:border-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/40"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Sun
          className={`w-4 h-4 absolute transition-transform duration-500 ease-out-expo ${
            theme === 'light'
              ? 'opacity-100 rotate-0 scale-100 text-amber-500'
              : 'opacity-0 rotate-90 scale-50 pointer-events-none'
          }`}
          aria-hidden="true"
        />
        <Moon
          className={`w-4 h-4 absolute transition-transform duration-500 ease-out-expo ${
            theme === 'dark'
              ? 'opacity-100 rotate-0 scale-100 text-accent'
              : 'opacity-0 -rotate-90 scale-50 pointer-events-none'
          }`}
          aria-hidden="true"
        />
      </div>
    </button>
  );
}
