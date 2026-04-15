'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>Z</div>
          <div className={styles.logoText}>
            <span className={styles.logoBrand}>Zenvora</span>
            <span className={styles.logoSub}>Food</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className={styles.navLinks}>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/ventures">Our Ventures</Link></li>
          <li><Link href="/ventures#uncle-makhana">Uncle Makhana</Link></li>
          <li><Link href="/ventures#pure-makhana">Pure Makhana</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
        </ul>

        {/* CTA */}
        <div className={styles.navCta}>
          <Link href="/#contact" className="btn btn-primary">Partner With Us</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link href="/ventures" onClick={() => setMenuOpen(false)}>Our Ventures</Link>
          <Link href="/ventures#uncle-makhana" onClick={() => setMenuOpen(false)}>Uncle Makhana</Link>
          <Link href="/ventures#pure-makhana" onClick={() => setMenuOpen(false)}>Pure Makhana</Link>
          <Link href="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/#contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>Partner With Us</Link>
        </div>
      )}
    </nav>
  );
}
