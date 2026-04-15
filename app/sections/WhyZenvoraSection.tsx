import styles from './WhyZenvoraSection.module.css';
import { FaSeedling, FaFlask, FaLightbulb, FaChartLine, FaHandshake, FaGlobe } from 'react-icons/fa';

const reasons = [
  {
    icon: <FaSeedling />,
    title: 'Traceable Origin',
    desc: "Every batch is sourced directly from verified farmers in Bihar's fertile makhana belt. Full supply chain transparency.",
    color: '#1a5c3a',
  },
  {
    icon: <FaFlask />,
    title: 'Rigorous Quality Control',
    desc: 'Our state-of-the-art processing facility ensures every makhana meets the highest standards before packaging.',
    color: '#0d4f7a',
  },
  {
    icon: <FaLightbulb />,
    title: 'Dual Market Strategy',
    desc: "We pioneer the market with two brands - making us the only FMCG company serving both mass and luxury makhana.",
    color: '#6b21a8',
  },
  {
    icon: <FaChartLine />,
    title: 'Explosive Market Growth',
    desc: 'The global makhana market is projected to grow at 20%+ CAGR. We are positioned at the forefront of this revolution.',
    color: '#b85e1f',
  },
  {
    icon: <FaHandshake />,
    title: 'Farmer Partnership Model',
    desc: 'We pay farmers fair prices and invest in their communities, ensuring sustainable and ethical sourcing for the long term.',
    color: '#065f46',
  },
  {
    icon: <FaGlobe />,
    title: 'Export-First Vision',
    desc: 'With active distribution in Germany, UK, Hungary and UAE, we are building a globally recognised Indian food brand.',
    color: '#7c3aed',
  },
];

export default function WhyZenvoraSection() {
  return (
    <section className={`section ${styles.why}`} id="why-zenvora">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <p className="section-label">Why Choose Us</p>
          <h2 className={styles.title}>Why Zenvora Food is<br />the Future of Makhana</h2>
          <p className={styles.subtitle}>
            We don't just sell makhana - we're building an ecosystem.
            From Bihar's farms to global shelves, here's what makes us different.
          </p>
        </div>

        {/* Cards Grid */}
        <div className={styles.grid}>
          {reasons.map((r) => (
            <div className={styles.card} key={r.title} style={{ '--card-color': r.color } as React.CSSProperties}>
              <div className={styles.cardIcon} style={{ background: `${r.color}15`, color: r.color }}>
                {r.icon}
              </div>
              <h3 className={styles.cardTitle}>{r.title}</h3>
              <p className={styles.cardDesc}>{r.desc}</p>
              <div className={styles.cardAccent} style={{ background: r.color }} />
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaLeft}>
            <h3 className={styles.ctaTitle}>Ready to grow with Zenvora?</h3>
            <p className={styles.ctaSubtitle}>We welcome distributor partnerships, investors, and retail chains.</p>
          </div>
          <div className={styles.ctaRight}>
            <a href="#contact" className="btn btn-gold">Start a Conversation -&gt;</a>
          </div>
        </div>
      </div>
    </section>
  );
}
