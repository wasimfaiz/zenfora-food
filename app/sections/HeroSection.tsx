import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero} id="home">
      {/* Background Image */}
      <div className={styles.heroBg}>
        <img src="/hero-bg.png" alt="Makhana field" className={styles.heroBgImg} />
        <div className={styles.heroOverlay} />
      </div>

      {/* Floating decorative elements */}
      <div className={styles.floatDot1} />
      <div className={styles.floatDot2} />
      <div className={styles.floatDot3} />

      <div className={`container ${styles.heroContent}`}>
        {/* Badge */}
        <div className={styles.heroBadge}>
          <span className={styles.badgeDot} />
          FMCG Company · Est. 2026
        </div>

        {/* Main Heading */}
        <h1 className={styles.heroTitle}>
          From Bihar Fields<br />
          <span className={styles.heroTitleAccent}>To Every Table</span>
        </h1>

        {/* Subtext */}
        <p className={styles.heroSubtitle}>
          Zenvora Food is redefining makhana for India and the world -<br />
          bringing premium quality fox nuts from farm to consumer<br />
          through two powerful ventures built for every segment.
        </p>

        {/* Two venture pills */}
        <div className={styles.heroPills}>
          <a href="#uncle-makhana" className={styles.pillUncle}>
            <span className={styles.pillIcon}>ðŸŸ </span>
            Uncle Makhana
            <span className={styles.pillTag}>Affordable</span>
          </a>
          <a href="#pure-makhana" className={styles.pillPure}>
            <span className={styles.pillIcon}>*</span>
            Pure Makhana
            <span className={styles.pillTag}>Luxury</span>
          </a>
        </div>

        {/* CTAs */}
        <div className={styles.heroCtas}>
          <a href="#ventures" className="btn btn-gold">Explore Our Ventures</a>
          <a href="#about" className="btn btn-outline-white">Our Story</a>
        </div>

        {/* Mini stats */}
        <div className={styles.heroStats}>
          <div className={styles.heroStat}>
            <span className={styles.heroStatNum}>2+</span>
            <span className={styles.heroStatLabel}>Ventures</span>
          </div>
          <div className={styles.heroStatDivider} />
          <div className={styles.heroStat}>
            <span className={styles.heroStatNum}>4+</span>
            <span className={styles.heroStatLabel}>Countries</span>
          </div>
          <div className={styles.heroStatDivider} />
          <div className={styles.heroStat}>
            <span className={styles.heroStatNum}>100%</span>
            <span className={styles.heroStatLabel}>Natural</span>
          </div>
          <div className={styles.heroStatDivider} />
          <div className={styles.heroStat}>
            <span className={styles.heroStatNum}>Bihar</span>
            <span className={styles.heroStatLabel}>Origin</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
