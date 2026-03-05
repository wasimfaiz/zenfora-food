import styles from './AboutSection.module.css';
import { FaLeaf, FaTrophy, FaGlobe, FaHeart } from 'react-icons/fa';
import Link from 'next/link';

const values = [
  { icon: <FaLeaf />, label: 'Farm-to-Pack', desc: 'Direct sourcing, zero middlemen', color: '#1a5c3a' },
  { icon: <FaTrophy />, label: 'Quality First', desc: 'Rigorous grading & processing', color: '#b8860b' },
  { icon: <FaGlobe />, label: 'Global Vision', desc: 'Exporting across 4+ countries', color: '#1a5c3a' },
  { icon: <FaHeart />, label: 'Farmer First', desc: 'Fair prices, better livelihoods', color: '#c0392b' },
];

export default function AboutSection() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <div className={styles.grid}>
          {/* Left: Image */}
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <img src="/about-lotus.png" alt="Lotus field in Bihar — origin of Zenfora makhana" className={styles.image} />
              <div className={styles.imageAccentCard}>
                <div className={styles.accentIconWrap} style={{ color: '#1a5c3a' }}>
                  <FaLeaf size={22} />
                </div>
                <div>
                  <div className={styles.accentNum}>100%</div>
                  <div className={styles.accentLabel}>Farm Sourced</div>
                </div>
              </div>
              <div className={styles.imageAccentCard2}>
                <div className={styles.accentNum}>Bihar</div>
                <div className={styles.accentLabel}>Origin State</div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className={styles.contentCol}>
            <p className="section-label">Our Story</p>
            <h2 className={styles.title}>Born from the Heartland,<br />Built for the World</h2>
            <p className={styles.lead}>
              Zenfora Food is an FMCG company on a mission — to unlock the full potential of makhana,
              India's most underrated superfood, and bring it to tables across the globe.
            </p>
            <p className={styles.body}>
              Founded with a deep respect for Bihar's rich makhana heritage, we source our fox nuts
              directly from farmers who have cultivated them for generations. Every seed tells a story
              of tradition, labor, and nature's abundance.
            </p>
            <p className={styles.body}>
              Through our two distinct ventures — <strong>Uncle Makhana</strong> for the everyday
              Indian consumer and <strong>Pure Makhana</strong> for the discerning global palate —
              we're building a brand that speaks to every segment, every table, every craving.
            </p>

            {/* Values */}
            <div className={styles.values}>
              {values.map((v) => (
                <div className={styles.valueItem} key={v.label}>
                  <span className={styles.valueIcon} style={{ color: v.color, background: `${v.color}14` }}>
                    {v.icon}
                  </span>
                  <div>
                    <div className={styles.valueLabel}>{v.label}</div>
                    <div className={styles.valueDesc}>{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/about" className="btn btn-primary">Read Full Story</Link>
              <Link href="/#ventures" className="btn btn-outline">Discover Our Ventures →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
