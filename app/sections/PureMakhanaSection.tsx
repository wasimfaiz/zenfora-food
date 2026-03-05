import styles from './PureMakhanaSection.module.css';
import {
  FaStar, FaBox, FaFlask, FaPlaneDeparture,
  FaBolt, FaDumbbell, FaHeart, FaBrain, FaLeaf, FaCut
} from 'react-icons/fa';

const exportCountries = [
  { flagCode: 'de', name: 'Germany', desc: 'Health & wellness market' },
  { flagCode: 'gb', name: 'United Kingdom', desc: 'Premium grocery chain' },
  { flagCode: 'hu', name: 'Hungary', desc: 'European distribution' },
  { flagCode: 'ae', name: 'UAE', desc: 'Middle East luxury retail' },
];

const benefits = [
  { icon: <FaBolt />, label: 'High Energy', value: '347 kcal/100g', color: '#f1c40f' },
  { icon: <FaDumbbell />, label: 'Rich Protein', value: '9.7g protein', color: '#c9a84c' },
  { icon: <FaHeart />, label: 'Heart Healthy', value: 'Low GI Food', color: '#e74c3c' },
  { icon: <FaBrain />, label: 'Brain Food', value: 'Rich in Thiamine', color: '#9b59b6' },
  { icon: <FaLeaf />, label: 'Antioxidants', value: 'Natural Flavonoids', color: '#27ae60' },
  { icon: <FaCut />, label: 'Low Calorie', value: 'Diet Friendly', color: '#1a5c3a' },
];

const usps = [
  { icon: <FaStar />, title: 'Premium Grading', desc: 'Only AAA-grade lotus seeds selected' },
  { icon: <FaBox />, title: 'Luxury Packaging', desc: 'Premium matte boxes with gold foil' },
  { icon: <FaFlask />, title: 'Lab Tested', desc: 'Every batch tested for purity' },
  { icon: <FaPlaneDeparture />, title: 'Export Ready', desc: 'Compliant with international standards' },
];

export default function PureMakhanaSection() {
  return (
    <section className={styles.pure} id="pure-makhana">
      <div className={styles.pureBgGradient} />
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className="badge badge-gold">
            <FaStar style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
            Pure Makhana
          </span>
          <h2 className={styles.title}>
            Where Luxury Meets<br />
            <span className={styles.titleAccent}>Nature's Finest</span>
          </h2>
          <p className={styles.subtitle}>
            Pure Makhana is our premium, export-ready brand for the discerning consumer
            who values purity, elegance, and exceptional quality in every bite.
          </p>
        </div>

        {/* Main Grid */}
        <div className={styles.grid}>
          {/* Left: Product Image */}
          <div className={styles.imageCol}>
            <div className={styles.imageFrame}>
              <div className={styles.imageBg} />
              <img src="/pure-product.png" alt="Pure Makhana luxury product" className={styles.productImg} />
              <div className={styles.certBadge}>
                <FaStar color="#c9a84c" size={20} />
                <div>
                  <div className={styles.certNum}>Premium</div>
                  <div className={styles.certLabel}>Certified Grade</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className={styles.contentCol}>
            <h3 className={styles.contentTitle}>Crafted for the Conscious Connoisseur</h3>
            <p className={styles.contentBody}>
              Every Pure Makhana product is carefully handpicked, minimally processed,
              and packed in our signature luxury packaging. We work with a strict
              QA process to ensure only the finest lotus seeds reach our consumers.
            </p>

            {/* USPs */}
            <div className={styles.usps}>
              {usps.map(u => (
                <div className={styles.usp} key={u.title}>
                  <span className={styles.uspIcon}>{u.icon}</span>
                  <div>
                    <div className={styles.uspTitle}>{u.title}</div>
                    <div className={styles.uspDesc}>{u.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className={styles.cta}>Request Catalogue →</a>
          </div>
        </div>

        {/* Export Countries */}
        <div className={styles.exportSection}>
          <div className={styles.exportHeader}>
            <p className="section-label gold" style={{ justifyContent: 'center' }}>Global Reach</p>
            <h3 className={styles.exportTitle}>Exporting to 4+ Countries</h3>
          </div>
          <div className={styles.countryGrid}>
            {exportCountries.map(c => (
              <div className={styles.countryCard} key={c.name}>
                <div className={styles.countryFlagWrap}>
                  <img
                    src={`https://flagcdn.com/w80/${c.flagCode}.png`}
                    alt={`${c.name} flag`}
                    className={styles.countryFlagImg}
                  />
                </div>
                <div className={styles.countryName}>{c.name}</div>
                <div className={styles.countryDesc}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Health Benefits */}
        <div className={styles.benefitsSection}>
          <div className={styles.benefitsHeader}>
            <h3 className={styles.benefitsTitle}>The Makhana Advantage</h3>
            <p className={styles.benefitsSubtitle}>Why the world is falling in love with lotus seeds</p>
          </div>
          <div className={styles.benefitsGrid}>
            {benefits.map(b => (
              <div className={styles.benefitCard} key={b.label}>
                <span className={styles.benefitIcon} style={{ color: b.color }}>{b.icon}</span>
                <div className={styles.benefitLabel}>{b.label}</div>
                <div className={styles.benefitValue}>{b.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
