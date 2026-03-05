import styles from './UncleMakhanaSection.module.css';
import {
  FaTag, FaStore, FaFire, FaDumbbell,
  FaPepperHot, FaWind
} from 'react-icons/fa';
import { GiChiliPepper, GiButterToast, GiLemon } from 'react-icons/gi';
import { TbSalt } from 'react-icons/tb';

const flavours = [
  { icon: <GiChiliPepper />, name: 'Spicy Chaat', desc: 'Tangy, punchy, street-style', color: '#e07b39' },
  { icon: <GiButterToast />, name: 'Butter Masala', desc: 'Creamy, indulgent, rich', color: '#c9a84c' },
  { icon: <GiLemon />, name: 'Nimbu Masala', desc: 'Zesty lemon with spices', color: '#d4ac16' },
  { icon: <FaWind />, name: 'Mint Magic', desc: 'Cool, refreshing finish', color: '#27ae60' },
  { icon: <FaPepperHot />, name: 'Pudina Chilli', desc: 'Mint meets heat & bold', color: '#c0392b' },
  { icon: <TbSalt />, name: 'Classic Salted', desc: 'Pure, simple, satisfying', color: '#7f8c8d' },
];

export default function UncleMakhanaSection() {
  return (
    <section className={styles.uncle} id="uncle-makhana">
      <div className="container">
        <div className={styles.grid}>
          {/* Left Content */}
          <div className={styles.content}>
            <span className="badge badge-uncle" style={{ marginBottom: '20px' }}>Uncle Makhana</span>
            <h2 className={styles.title}>
              The Snack India<br />
              <span className={styles.titleAccent}>Deserves to Love</span>
            </h2>

            <p className={styles.tagline}>"Har Ghar Ka Zaika" — The Taste of Every Home</p>

            <p className={styles.body}>
              Uncle Makhana is our flagship mass-market brand, designed to make healthy snacking
              a reality for every Indian family. We believe great taste shouldn't be a luxury.
              Our bold flavours, vibrant packaging, and honest pricing put healthy snacking
              within reach of every household across India.
            </p>

            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <div className={styles.highlightIcon} style={{ background: '#fff0e6', color: '#b85e1f' }}>
                  <FaTag size={20} />
                </div>
                <div>
                  <div className={styles.highlightTitle}>Budget Friendly</div>
                  <div className={styles.highlightDesc}>Starting at just ₹50 per pack</div>
                </div>
              </div>
              <div className={styles.highlight}>
                <div className={styles.highlightIcon} style={{ background: '#e8f5ee', color: '#1a5c3a' }}>
                  <FaStore size={20} />
                </div>
                <div>
                  <div className={styles.highlightTitle}>Wide Distribution</div>
                  <div className={styles.highlightDesc}>Kirana stores, supermarkets, online</div>
                </div>
              </div>
              <div className={styles.highlight}>
                <div className={styles.highlightIcon} style={{ background: '#fff0e6', color: '#c0392b' }}>
                  <FaFire size={20} />
                </div>
                <div>
                  <div className={styles.highlightTitle}>10+ Bold Flavours</div>
                  <div className={styles.highlightDesc}>Inspired by India's diverse food culture</div>
                </div>
              </div>
              <div className={styles.highlight}>
                <div className={styles.highlightIcon} style={{ background: '#e8f5ee', color: '#1a5c3a' }}>
                  <FaDumbbell size={20} />
                </div>
                <div>
                  <div className={styles.highlightTitle}>High Protein</div>
                  <div className={styles.highlightDesc}>9g protein per serving, low calorie</div>
                </div>
              </div>
            </div>

            <a href="#contact" className={styles.cta}>Become a Distributor →</a>
          </div>

          {/* Right: Product + Flavours */}
          <div className={styles.rightCol}>
            {/* Product Display */}
            <div className={styles.productFrame}>
              <div className={styles.productBg} />
              <img src="/uncle-product.png" alt="Uncle Makhana product" className={styles.productImg} />
              <div className={styles.productBadge}>
                <FaFire size={11} style={{ marginRight: 4 }} /> Most Popular
              </div>
            </div>

            {/* Flavours Grid */}
            <div className={styles.flavoursBox}>
              <div className={styles.flavoursTitle}>Our Flavour Lineup</div>
              <div className={styles.flavoursGrid}>
                {flavours.map(f => (
                  <div className={styles.flavourCard} key={f.name}>
                    <span className={styles.flavourIcon} style={{ color: f.color }}>{f.icon}</span>
                    <div className={styles.flavourName}>{f.name}</div>
                    <div className={styles.flavourDesc}>{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
