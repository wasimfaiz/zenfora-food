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
            <span className={styles.logoBrand}>Zenfora</span>
            <span className={styles.logoSub}>Food</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className={styles.navLinks}>
          <li><a href="#about">About Us</a></li>
          <li><a href="#ventures">Our Ventures</a></li>
          <li><a href="#uncle-makhana">Uncle Makhana</a></li>
          <li><a href="#pure-makhana">Pure Makhana</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* CTA */}
        <div className={styles.navCta}>
          <a href="#contact" className="btn btn-primary">Partner With Us</a>
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
          <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="#ventures" onClick={() => setMenuOpen(false)}>Our Ventures</a>
          <a href="#uncle-makhana" onClick={() => setMenuOpen(false)}>Uncle Makhana</a>
          <a href="#pure-makhana" onClick={() => setMenuOpen(false)}>Pure Makhana</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="#contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>Partner With Us</a>
        </div>
      )}
    </nav>
  );
}
