'use client';

import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="w-full z-20 flex items-center justify-end p-8 pt-4 absolute top-0">
      <Navigation />
    </header>
  );
}
