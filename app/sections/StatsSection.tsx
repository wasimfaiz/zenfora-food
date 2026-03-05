import styles from './StatsSection.module.css';
import { FaRocket, FaGlobeAmericas, FaFire, FaLeaf } from 'react-icons/fa';

const stats = [
  { num: '2', suffix: '+', label: 'Powerful Ventures', icon: <FaRocket />, desc: 'Mass market + luxury', color: '#c9a84c' },
  { num: '4', suffix: '+', label: 'Export Countries', icon: <FaGlobeAmericas />, desc: 'Germany, UK, Hungary, UAE', color: '#4ade80' },
  { num: '10', suffix: '+', label: 'Unique Flavours', icon: <FaFire />, desc: 'And growing', color: '#fb923c' },
  { num: '100', suffix: '%', label: 'Natural Makhana', icon: <FaLeaf />, desc: 'No additives, no compromise', color: '#86efac' },
];

export default function StatsSection() {
  return (
    <section className={styles.stats}>
      <div className={styles.statsBg}>
        <img src="/stats-bg.png" alt="" aria-hidden className={styles.statsBgImg} />
        <div className={styles.statsOverlay} />
      </div>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.statsLabel}>Zenfora by the Numbers</div>
          <div className={styles.statsGrid}>
            {stats.map((s) => (
              <div className={styles.statCard} key={s.label}>
                <span className={styles.statIcon} style={{ color: s.color, background: `${s.color}18` }}>
                  {s.icon}
                </span>
                <div className={styles.statNum}>
                  {s.num}<span className={styles.statSuffix}>{s.suffix}</span>
                </div>
                <div className={styles.statLabel}>{s.label}</div>
                <div className={styles.statDesc}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
