import { Switch } from '@headlessui/react';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Moon, Sun } from 'phosphor-react';

export default function ThemeSwitch() {
  const [enabled, setEnabled] = useState(false);

  const doc = document.documentElement;

  useEffect(() => {
    enabled ? doc.classList.add('dark') : doc.classList.remove('dark');

    doc.className === 'dark'
      ? localStorage.setItem('theme', 'dark')
      : localStorage.setItem('theme', 'light');
  }, [enabled]);

  useLayoutEffect(() => {
    if (localStorage.theme === 'dark') {
      doc.classList.toggle('dark');
      setEnabled(true);
    }
  }, []);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`w-20 inline-flex rounded-full items-center transition-colors absolute top-4 right-4 md:top-8 md:right-8 ${
        enabled ? 'bg-zinc-800' : 'bg-zinc-100'
      }`}
    >
      <span className="sr-only">
        Alternar para o tema {enabled ? 'claro' : 'escuro'}
      </span>
      <span
        className={`inline-flex justify-center items-center h-10 w-10 transform rounded-full transition-all bg-brand-300 text-white ${
          enabled ? 'translate-x-10' : 'translate-x-0'
        }`}
      >
        {enabled ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
      </span>
    </Switch>
  );
}
