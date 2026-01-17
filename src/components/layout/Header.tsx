'use client';

import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="w-full z-20 flex items-center justify-end py-4 md:p-8 md:pt-4 absolute top-0">
      <Navigation />
    </header>
  );
}
