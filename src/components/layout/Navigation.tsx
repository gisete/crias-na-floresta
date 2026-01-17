'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/a-floresta', label: 'A Floresta' },
  { href: '/guardioes', label: 'Guardiões' },
  { href: '/galeria', label: 'Galeria' },
  {
    href: 'https://linktr.ee/criasnafloresta?utm_source=linktree_profile_share&ltsid=4f33675b-3a69-4f1f-a42e-a8866159c4ca',
    label: 'Inscrições',
    target: '_blank',
  },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  return (
    <nav className="text-white text-sm font-medium tracking-widest uppercase flex items-center justify-between w-full">
      {/* Logo - Always reserve space, but only show on subpages */}
      <div className="flex-shrink-0 pl-6 md:pl-0">
        {!isHomepage ? (
          <Link href="/">
            <Image
              src="/images/crias-na-floresta-logo.png"
              alt="Crias na Floresta"
              width={300}
              height={96}
              className="h-28 md:h-24 w-auto object-contain drop-shadow-2xl cursor-pointer"
              priority
            />
          </Link>
        ) : (
          <div className="h-28 md:h-24" />
        )}
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8 items-center ml-auto">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              target={link.target}
              className="hover:text-[var(--color-beige-dark)] transition"
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li className="flex space-x-4 text-lg">
          <a
            href="https://www.instagram.com/crias_na_floresta/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100092820843772"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div
        className="md:hidden text-2xl cursor-pointer text-white pr-6"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fa-solid fa-bars"></i>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-[var(--color-light-beige)] z-50 flex flex-col items-center justify-center animate-slide-in-right">
          <button
            className="absolute top-8 right-8 text-3xl text-[var(--color-fog-gray)]"
            onClick={() => setIsOpen(false)}
          >
            <i className="fa-solid fa-times"></i>
          </button>
          <ul className="flex flex-col space-y-8 text-center">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-2xl text-[var(--color-fog-gray)] hover:text-[var(--color-mossy-green)] transition"
                  onClick={() => setIsOpen(false)}
                  target={link.target}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="flex space-x-6 justify-center text-2xl mt-8 text-[var(--color-fog-gray)]">
              <a
                href="https://www.instagram.com/crias_na_floresta/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100092820843772"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
