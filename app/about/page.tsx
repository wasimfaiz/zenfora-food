import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import styles from "./about.module.css";
import { FaSeedling, FaHandsHelping, FaGlobe, FaCertificate } from "react-icons/fa";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Zenvora Food - Premium Makhana (Fox Nuts) Brand",
  description: "Discover the journey of Zenvora Food. From the lotus ponds of Bihar to global markets, we bring 100% farm-sourced, premium quality Makhana (Fox Nuts) with our Uncle Makhana and Pure Makhana brands.",
  keywords: "about Zenvora Food, our story, Makhana, Fox Nuts, Indian superfood, Bihar makhana, healthy snacking, Uncle Makhana, Pure Makhana, FMCG company, farm to pack, directly sourced, global export",
  openGraph: {
    title: "About Us | Zenvora Food - Premium Makhana (Fox Nuts)",
    description: "Discover the journey of Zenvora Food. From the lotus ponds of Bihar to global markets, we bring 100% farm-sourced, premium quality Makhana.",
    url: "https://zenvorafood.com/about",
    siteName: "Zenvora Food",
    images: [
      {
        url: "/about-lotus.png",
        width: 1200,
        height: 630,
        alt: "Zenvora Food - Premium Makhana Harvesting in Bihar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Zenvora Food - Premium Makhana",
    description: "Premium farm-sourced Makhana from Bihar to the world.",
    images: ["/about-lotus.png"],
  },
  alternates: {
    canonical: "https://zenvorafood.com/about",
  }
};

export default function AboutPage() {
  // Structured Data for maximum SEO optimization
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Zenvora Food",
    "description": "Discover the detailed story behind Zenvora Food, bringing premium Makhana (Fox Nuts) from the heartland of Bihar to global markets.",
    "url": "https://zenvorafood.com/about",
    "publisher": {
      "@type": "Organization",
      "name": "Zenvora Food",
      "logo": {
        "@type": "ImageObject",
        "url": "https://zenvorafood.com/logo.png"
      }
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "Zenvora Food",
      "foundingLocation": {
        "@type": "Place",
        "name": "Bihar, India"
      },
      "brand": [
        {
          "@type": "Brand",
          "name": "Uncle Makhana"
        },
        {
          "@type": "Brand",
          "name": "Pure Makhana"
        }
      ]
    }
  };

  return (
    <>
      <Navbar />
      
      {/* JSON-LD Schema Script Component */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className={styles.main}>
        {/* Banner Section */}
        <header className={styles.hero}>
          <div className={styles.heroContent}>
            <p className="section-label gold" style={{ justifyContent: 'center' }}>Our Story</p>
            <h1 className={styles.heroTitle}>Born in the Heartland.<br />Built for the World.</h1>
            <p className={styles.heroSubtitle}>
              From the sacred lotus ponds of Bihar to global wellness aisles - this is the authentic journey of Zenvora Food, a premium FMCG company elevating the Indian superfood, Makhana.
            </p>
          </div>
        </header>

        {/* Story Elements Container */}
        <article className={styles.storySection}>
          <div className="container">
            
            {/* Story Part 1: Origin */}
            <section className={`${styles.storyPart} animate-fadeInUp`} aria-labelledby="heritage-heading">
              <div className={styles.grid}>
                <div className={styles.imageCol}>
                  <img 
                    src="/about-lotus.png" 
                    alt="Lotus ponds in Bihar, India - The origin of premium Makhana (Fox Nuts)" 
                    className={styles.image} 
                    loading="eager" 
                  />
                </div>
                <div className={styles.textContent}>
                  <h2 id="heritage-heading" className="section-label">01. Heritage</h2>
                  <h3>The Origin: A Centuries-Old Superfood</h3>
                  <p>
                    Born in the heartland of <strong>Bihar, India</strong>, where the sacred lotus blooms natively, Zenvora Food was founded with a profound respect for a centuries-old superfood. 
                  </p>
                  <p>
                    For generations, <strong>Makhana (Fox Nuts)</strong> was a well-kept secret of Indian households - a symbol of purity, offered to deities and consumed during fasting for its exceptional nutritional profile. High in protein, low in fat, and rich in antioxidants, we recognized that this humble seed was a nutritional powerhouse waiting to be shared with the modern world.
                  </p>
                </div>
              </div>
            </section>

            {/* Story Part 2: The Problem */}
            <section className={`${styles.storyPart} animate-fadeInUp`} style={{ animationDelay: '0.2s' }} aria-labelledby="challenge-heading">
              <div className={styles.gridReverse}>
                <div className={styles.textContent}>
                  <h2 id="challenge-heading" className="section-label gold">02. The Challenge</h2>
                  <h3>A Broken Supply Chain</h3>
                  <p>
                    Despite its immense health benefits, the journey of Makhana from the muddy ponds of Bihar to global shelves was historically broken. Complex chains of middlemen exploited local farmers, grading processes were inconsistent, and the true value of <strong>Fox Nuts</strong> remained unrealized on the world food stage.
                  </p>
                  <p>
                    Farmers who braved the difficult harvesting conditions were strictly undercompensated, while consumers received subpar, unstandardized products. Zenvora Food observed an urgent need to disrupt this with transparency, fairness, and uncompromising quality control.
                  </p>
                </div>
                <div className={styles.imageCol}>
                  <img 
                    src="/stats-bg.png" 
                    alt="Traditional Makhana processing and quality grading challenges" 
                    className={styles.image} 
                    loading="lazy" 
                  />
                </div>
              </div>
            </section>

            {/* Story Part 3: The Solution */}
            <section className={`${styles.storyPart} animate-fadeInUp`} style={{ animationDelay: '0.3s' }} aria-labelledby="revolution-heading">
              <div className={styles.grid}>
                <div className={styles.imageCol}>
                  <img 
                    src="/hero-bg.png" 
                    alt="Zenvora Food working directly with Makhana farmers in Bihar to ensure fair trade" 
                    className={styles.image} 
                    loading="lazy" 
                  />
                </div>
                <div className={styles.textContent}>
                  <h2 id="revolution-heading" className="section-label">03. The Revolution</h2>
                  <h3>The Zenvora Way: 100% Farm-to-Pack</h3>
                  <p>
                    We set out to challenge the status quo. Zenvora Food bypassed the outdated supply chain to establish a <strong>direct farm-to-pack model</strong>, working hand-in-hand directly with cultivators in Bihar. 
                  </p>
                  <p>
                    By implementing rigorous grading, strict hygiene cleaning, and state-of-the-art roasting processes right at the source, we ensure fair wages for the farmers while achieving international standards of quality. Our ethical sourcing means better livelihoods for farming families and precisely graded, superior quality Makhana for your snacking.
                  </p>
                </div>
              </div>
            </section>

            {/* Story Part 4: Innovation */}
            <section className={`${styles.storyPart} animate-fadeInUp`} style={{ animationDelay: '0.4s' }} aria-labelledby="portfolio-heading">
              <div className={styles.gridReverse}>
                <div className={styles.textContent}>
                  <h2 id="portfolio-heading" className="section-label gold">04. Our Portfolio</h2>
                  <h3>Two Distinct Ventures</h3>
                  <p>
                    Today, Zenvora Food proudly operates two powerful FMCG snack brands, each designed to cater to a unique audience seeking healthy, flavorful alternatives.
                  </p>
                  <p>
                    <strong>Uncle Makhana</strong> brings this wholesome, crunchy snack to everyday Indian families with exciting, bold, and nostalgic flavors at highly accessible pricing. Meanwhile, <strong>Pure Makhana</strong> elevates this humble seed into a luxury wellness product, exporting premium, hand-picked grades to discerning clean-eating consumers in international markets.
                  </p>
                </div>
                <div className={styles.imageCol} style={{ backgroundColor: '#fdf6ed', padding: '20px' }}>
                  <img 
                    src="/uncle-product.png" 
                    alt="Uncle Makhana delicious healthy Indian snacks portfolio" 
                    className={styles.image} 
                    style={{ objectFit: 'contain' }} 
                    loading="lazy" 
                  />
                </div>
              </div>
            </section>

            {/* Story Part 5: The Global Vision */}
            <section className={`${styles.storyPart} animate-fadeInUp`} style={{ animationDelay: '0.5s' }} aria-labelledby="global-heading">
              <div className={styles.grid}>
                <div className={styles.imageCol} style={{ backgroundColor: '#0d1b2a', padding: '20px' }}>
                  <img 
                    src="/pure-product.png" 
                    alt="Pure Makhana export quality luxury wellness brand products" 
                    className={styles.image} 
                    style={{ objectFit: 'contain' }} 
                    loading="lazy" 
                  />
                </div>
                <div className={styles.textContent}>
                  <h2 id="global-heading" className="section-label">05. The Future</h2>
                  <h3>The Global Vision</h3>
                  <p>
                    Our story is just beginning. Zenvora Food is actively expanding as a global FMCG company, proudly exporting <strong>export-grade Makhana</strong> to Germany, the UK, Hungary, and the UAE, taking a piece of rich Indian heritage straight to global wellness aisles.
                  </p>
                  <p>
                    We envision a world where Fox Nuts stand proudly alongside almonds, cashews, and walnuts as a staple global superfood. Every crunch is a testament to our commitment to health, sustainable agriculture, and the hardworking farmers who make it all possible.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Our Pillars / Stats */}
        <section className={styles.statsSection} aria-label="Zenvora Food Impact Statistics">
          <div className="container">
            {/* SEO accessibility screen reader heading */}
            <h2 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>Our Impact</h2>
            
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statIcon}><FaSeedling size={48} color="var(--zenvora-green)" aria-hidden="true" /></div>
                <div className={styles.statNumber}>100%</div>
                <div className={styles.statLabel}>Directly Farm Sourced</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statIcon}><FaHandsHelping size={48} color="var(--zenvora-green)" aria-hidden="true" /></div>
                <div className={styles.statNumber}>Zero</div>
                <div className={styles.statLabel}>Middlemen Involved</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statIcon}><FaCertificate size={48} color="var(--zenvora-green)" aria-hidden="true" /></div>
                <div className={styles.statNumber}>A+</div>
                <div className={styles.statLabel}>Export Quality Grade</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statIcon}><FaGlobe size={48} color="var(--zenvora-green)" aria-hidden="true" /></div>
                <div className={styles.statNumber}>4+</div>
                <div className={styles.statLabel}>Countries Reached</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.missionSection} aria-labelledby="cta-heading">
          <div className={styles.missionContent}>
            <h2 id="cta-heading">Join Our Journey</h2>
            <p>
              Whether you are a consumer looking for healthy snacking options, finding retail superstores, or a global partner wanting to distribute premium makhana, we invite you to be a part of the Zenvora Food story.
            </p>
            <div style={{ marginTop: '40px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/#contact" className="btn btn-gold" aria-label="Partner with Zenvora Food">Partner With Us</Link>
              <Link href="/ventures" className="btn btn-outline-white" aria-label="Explore Zenvora Ventures">Explore Ventures</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
