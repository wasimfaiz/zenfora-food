import styles from './VenturesSection.module.css';

export default function VenturesSection() {
  return (
    <section className={`section ${styles.ventures}`} id="ventures">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <p className="section-label">Our Ventures</p>
          <h2 className={styles.title}>Two Brands, One Mission</h2>
          <p className={styles.subtitle}>
            We built two distinct identities to serve two distinct worlds —
            without compromising quality at either end of the spectrum.
          </p>
        </div>

        {/* Venture Cards */}
        <div className={styles.grid}>
          {/* Uncle Makhana Card */}
          <div className={styles.uncleCard}>
            <div className={styles.cardTopBadge}>
              <span>🟠 Venture 01</span>
            </div>
            <div className={styles.cardLogo}>
              <span className={styles.logoLetter} style={{ background: 'linear-gradient(135deg, #e07b39, #b85e1f)' }}>U</span>
              <div>
                <div className={styles.cardBrandName}>Uncle Makhana</div>
                <div className={styles.cardTagline}>Tasty · Affordable · For Everyone</div>
              </div>
            </div>
            <p className={styles.cardDesc}>
              The people's makhana brand. Uncle Makhana makes healthy fox nut snacking 
              accessible to every Indian household — full of flavour, light on the pocket, 
              and made with the same farm-fresh quality we stand for.
            </p>
            <div className={styles.cardFeatures}>
              {['Bold Indian Flavours', 'Pocket-Friendly Pricing', 'Everyday Snacking', 'Mass Market Retail', 'High Nutritional Value'].map(f => (
                <span className={styles.featureTag} key={f}>✓ {f}</span>
              ))}
            </div>
            <div className={styles.cardDivider} />
            <div className={styles.cardMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaNum}>10+</span>
                <span className={styles.metaLabel}>Flavours</span>
              </div>
              <div className={styles.metaDivider} />
              <div className={styles.metaItem}>
                <span className={styles.metaNum}>₹50</span>
                <span className={styles.metaLabel}>Starts At</span>
              </div>
              <div className={styles.metaDivider} />
              <div className={styles.metaItem}>
                <span className={styles.metaNum}>Mass</span>
                <span className={styles.metaLabel}>Market</span>
              </div>
            </div>
            <a href="#uncle-makhana" className={styles.uncleBtn}>View Uncle Makhana →</a>
          </div>

          {/* VS divider */}
          <div className={styles.vsCol}>
            <div className={styles.vsCircle}>VS</div>
            <div className={styles.vsLine} />
          </div>

          {/* Pure Makhana Card */}
          <div className={styles.pureCard}>
            <div className={styles.pureBg} />
            <div className={styles.cardTopBadge} style={{ color: '#c9a84c', border: '1px solid rgba(201,168,76,0.4)', background: 'rgba(201,168,76,0.1)' }}>
              <span>⭐ Venture 02</span>
            </div>
            <div className={styles.cardLogo}>
              <span className={styles.logoLetter} style={{ background: 'linear-gradient(135deg, #c9a84c, #8b6914)' }}>P</span>
              <div>
                <div className={styles.cardBrandName} style={{ color: '#c9a84c' }}>Pure Makhana</div>
                <div className={styles.cardTagline} style={{ color: 'rgba(201,168,76,0.65)' }}>Premium · Luxury · Global</div>
              </div>
            </div>
            <p className={styles.cardDesc} style={{ color: '#8a9bb0' }}>
              Where makhana meets luxury. Pure Makhana caters to the health-conscious, 
              premium consumer seeking the finest lotus seeds — minimally processed, 
              beautifully packaged, and exported across the globe.
            </p>
            <div className={styles.cardFeatures}>
              {['Luxury Packaging', 'International Export', 'Gourmet Flavours', 'Health & Wellness', 'Premium Positioning'].map(f => (
                <span className={styles.featureTagGold} key={f}>✓ {f}</span>
              ))}
            </div>
            <div className={styles.cardDivider} style={{ borderColor: 'rgba(201,168,76,0.2)' }} />
            <div className={styles.cardMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaNum} style={{ color: '#c9a84c' }}>4+</span>
                <span className={styles.metaLabel} style={{ color: '#8a9bb0' }}>Countries</span>
              </div>
              <div className={styles.metaDivider} style={{ background: 'rgba(201,168,76,0.2)' }} />
              <div className={styles.metaItem}>
                <span className={styles.metaNum} style={{ color: '#c9a84c' }}>₹500+</span>
                <span className={styles.metaLabel} style={{ color: '#8a9bb0' }}>Starts At</span>
              </div>
              <div className={styles.metaDivider} style={{ background: 'rgba(201,168,76,0.2)' }} />
              <div className={styles.metaItem}>
                <span className={styles.metaNum} style={{ color: '#c9a84c' }}>Luxury</span>
                <span className={styles.metaLabel} style={{ color: '#8a9bb0' }}>Segment</span>
              </div>
            </div>
            <a href="#pure-makhana" className={styles.pureBtn}>View Pure Makhana →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
