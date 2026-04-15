import Image from 'next/image';
import { FaGem, FaMapMarkerAlt } from 'react-icons/fa';
import { GiChiliPepper } from 'react-icons/gi';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Top section */}
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <Image
                  src="/zenvora_logo.png"
                  alt="Zenvora Food logo"
                  width={56}
                  height={56}
                  className={styles.logoImage}
                />
              </div>
              <div>
                <div className={styles.logoBrand}>Zenvora</div>
                <div className={styles.logoSub}>Food &middot; FMCG Company</div>
              </div>
            </div>
            <p className={styles.brandDesc}>
              Redefining makhana for India and the world - from Bihar&apos;s
              heartland to global shelves. Two brands, one vision.
            </p>
            <div className={styles.ventures}>
              <a href="#uncle-makhana" className={styles.ventureUncle}>
                <GiChiliPepper />
                Uncle Makhana
              </a>
              <a href="#pure-makhana" className={styles.venturePure}>
                <FaGem />
                Pure Makhana
              </a>
            </div>
          </div>

          {/* Links */}
          <div className={styles.linkCol}>
            <div className={styles.linkGroup}>
              <div className={styles.linkGroupTitle}>Company</div>
              <a href="#about" className={styles.link}>About Us</a>
              <a href="#ventures" className={styles.link}>Our Ventures</a>
              <a href="#why-zenvora" className={styles.link}>Why Zenvora</a>
              <a href="#contact" className={styles.link}>Contact</a>
            </div>
            <div className={styles.linkGroup}>
              <div className={styles.linkGroupTitle}>Ventures</div>
              <a href="#uncle-makhana" className={styles.link}>Uncle Makhana</a>
              <a href="#pure-makhana" className={styles.link}>Pure Makhana</a>
              <a href="#contact" className={styles.link}>Distributors</a>
              <a href="#contact" className={styles.link}>Export Enquiry</a>
            </div>
            <div className={styles.linkGroup}>
              <div className={styles.linkGroupTitle}>Connect</div>
              <a href="mailto:hello@zenvorafood.com" className={styles.link}>Email Us</a>
              <a href="#" className={styles.link}>LinkedIn</a>
              <a href="#" className={styles.link}>Instagram</a>
              <a href="#" className={styles.link}>WhatsApp</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom */}
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            &copy; 2026 Zenvora Food Pvt. Ltd. &middot; All rights reserved.
          </div>
          <div className={styles.madeIn}>
            <FaMapMarkerAlt />
            Proudly Made in Bihar, India
          </div>
        </div>
      </div>
    </footer>
  );
}
