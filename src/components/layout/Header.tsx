'use client';

import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="w-full z-20 flex items-center justify-end py-4 md:p-8 md:pt-4 absolute top-0">
      <div className="w-full max-w-7xl mx-auto px-0 md:px-8">
        <Navigation />
      </div>
    </header>
  );
}
