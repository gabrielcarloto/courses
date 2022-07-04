import { useEffect } from 'react';
import ThemeSwitch from './components/ThemeSwitch';
import { Widget } from './components/Widget';

export function App() {
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });

  return (
    <>
      <ThemeSwitch />
      <Widget />
    </>
  );
}
