'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Home', href: '/' },
    { label: 'The Vision', href: '/vision' },
    { label: 'Zinema Zing Contest', href: '/zinema-zing' },
    { label: 'Catalog', href: '/catalog' },
    { label: 'Creator Network', href: '/creator-network' },
  ];

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <svg
            viewBox="0 0 260 80"
            className={styles.logoSvg}
            aria-label="Zinema Music"
          >
            {/* "zinema" text – bold geometric italic */}
            <text
              x="0"
              y="52"
              fontFamily="'Montserrat', sans-serif"
              fontWeight="900"
              fontStyle="italic"
              fontSize="56"
              fill="currentColor"
              letterSpacing="-2"
            >
              zinema
            </text>
            {/* Orange square accent on the "i" */}
            <rect x="47" y="5" width="11" height="11" rx="1" fill="var(--accent, #E88B2D)" />
            {/* "music" subtitle - small caps */}
            <text
              x="260"
              y="72"
              fontFamily="'Montserrat', sans-serif"
              fontWeight="700"
              fontSize="14"
              fill="currentColor"
              opacity="0.6"
              textAnchor="end"
              letterSpacing="4"
            >
              MUSIC
            </text>
          </svg>
        </Link>

        {/* Desktop Links */}
        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`${styles.link} ${pathname === l.href ? styles.active : ''}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link href="#join" className={`btn-gold ${styles.cta}`}>
          JOIN THE TRIBE
        </Link>

        {/* Mobile Hamburger */}
        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={styles.mobileLink}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="#join" className="btn-gold" style={{ width: '100%', marginTop: 16 }}>
            JOIN THE TRIBE
          </Link>
        </div>
      )}
    </nav>
  );
}
