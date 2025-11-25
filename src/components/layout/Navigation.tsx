'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '#', label: 'Sobre Nós' },
  { href: '/a-floresta', label: 'A Floresta' },
  { href: '/galeria', label: 'Galeria' },
  { href: '#', label: 'Inscrições' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  return (
    <nav className="text-white text-xs font-medium tracking-widest uppercase flex items-center justify-between w-full">
      {/* Logo - Always reserve space, but only show on subpages */}
      <div className="flex-shrink-0">
        {!isHomepage ? (
          <Link href="/">
            <Image
              src="/images/crias-na-floresta-logo.png"
              alt="Crias na Floresta"
              width={300}
              height={96}
              className="h-20 md:h-24 w-auto object-contain drop-shadow-2xl cursor-pointer"
              priority
            />
          </Link>
        ) : (
          <div className="h-20 md:h-24" />
        )}
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8 items-center ml-auto">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="hover:text-[var(--color-beige-dark)] transition">
              {link.label}
            </Link>
          </li>
        ))}
        <li className="flex space-x-4 text-lg">
          <a href="https://www.instagram.com/crias_na_floresta/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100092820843772" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div
        className="md:hidden text-2xl cursor-pointer text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fa-solid fa-bars"></i>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-[var(--color-moss)] z-50 flex flex-col items-center justify-center">
          <button
            className="absolute top-8 right-8 text-3xl text-white"
            onClick={() => setIsOpen(false)}
          >
            <i className="fa-solid fa-times"></i>
          </button>
          <ul className="flex flex-col space-y-8 text-center">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-2xl text-white hover:text-[var(--color-beige-dark)] transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="flex space-x-6 justify-center text-2xl mt-8">
              <a href="https://www.instagram.com/crias_na_floresta/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100092820843772" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
