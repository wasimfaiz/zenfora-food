import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import styles from "./ventures.module.css";
import { FaFire, FaLeaf, FaShoppingBasket, FaPlaneDeparture, FaStar, FaGem, FaHeartbeat, FaCheckCircle, FaSeedling } from "react-icons/fa";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Ventures | Zenvora Food FMCG Portfolio - Premium Makhana Brands",
  description: "Explore Zenvora Food's premium Makhana (Fox Nuts) ventures. Uncle Makhana offers healthy, bold Indian snacks, while Pure Makhana delivers luxury export-quality wellness.",
  keywords: "Zenvora Food ventures, Uncle Makhana, Pure Makhana, FMCG brands, premium fox nuts, affordable healthy snacks, Indian export Makhana, luxury wellness snacks, roasted makhana, gluten-free vegan snacks, high protein superfood, buy makhana online",
  openGraph: {
    title: "Our Ventures | Zenvora Food - Dual Brand Portfolio",
    description: "Discover Uncle Makhana & Pure Makhana. Serving everyone from everyday families to global luxury wellness markets.",
    url: "https://zenvorafood.com/ventures",
    siteName: "Zenvora Food",
    images: [
      {
        url: "/pure-product.png",
        width: 1200,
        height: 630,
        alt: "Zenvora Food Ventures - Uncle Makhana and Pure Makhana brands",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Ventures | Zenvora Food Makhana Brands",
    description: "Premium roasted Fox Nuts for the Indian consumer and global exports.",
    images: ["/pure-product.png"],
  },
  alternates: {
    canonical: "https://zenvorafood.com/ventures",
  }
};

export default function VenturesPage() {
  // Enhanced Structured Data with FAQ Schema and Collection Schema
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Zenvora Food FMCG Ventures Portfolio",
      "description": "The FMCG portfolio of Zenvora Food, featuring premium roasted Makhana (Fox Nuts) brands: Uncle Makhana and Pure Makhana.",
      "url": "https://zenvorafood.com/ventures",
      "hasPart": [
        {
          "@type": "Brand",
          "name": "Uncle Makhana",
          "description": "Everyday healthy snacking with bold, nostalgic flavors like Smoked Paprika for the Indian consumer."
        },
        {
          "@type": "Brand",
          "name": "Pure Makhana",
          "description": "Luxury export-grade Makhana tailored for global wellness and premium markets including Germany, UK, UAE, and Hungary."
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between Uncle Makhana and Pure Makhana?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Uncle Makhana is designed as an affordable, flavorful, everyday healthy snack for the Indian demographic. Pure Makhana is our ultra-premium, luxury brand consisting of A+ export grade, hand-picked lotus seeds aimed at international wellness markets and high-end retail."
          }
        },
        {
          "@type": "Question",
          "name": "Are Zenvora Food's Makhana products gluten-free and vegan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! All Makhana (Fox Nuts) produced by Zenvora Food are 100% naturally gluten-free, vegan, non-GMO, and roasted (never fried), making them the ultimate healthy superfood snack."
          }
        },
        {
          "@type": "Question",
          "name": "Does Zenvora Food export Makhana internationally?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, through our Pure Makhana brand, we actively export premium grade Fox Nuts across the globe, including to Germany, the United Kingdom (UK), Hungary, and the United Arab Emirates (UAE)."
          }
        }
      ]
    }
  ];

  return (
    <>
      <Navbar />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className={styles.main}>
        {/* Banner Section */}
        <header className={styles.hero}>
          <div className={styles.heroContent}>
            <p className="section-label" style={{ justifyContent: 'center', color: 'white' }}>Our FMCG Portfolio</p>
            <h1 className={styles.heroTitle}>Two Distinct Visions.<br />One Exceptional Standard.</h1>
            <p className={styles.heroSubtitle}>
              At Zenvora Food, we believe exactly zero compromises should be made on quality. We have strategically segmented our world-class Makhana (Fox Nuts) into two powerful brands dedicated to diverse consumer palates and global markets.
            </p>
          </div>
        </header>

        {/* Brand 1: Uncle Makhana */}
        <article className={styles.brandSection} id="uncle-makhana" aria-labelledby="uncle-heading">
          <div className="container">
            <div className={styles.grid}>
              <div className={styles.contentCol}>
                <div className="badge badge-uncle" style={{ marginBottom: '20px' }}>Everyday Indulgence</div>
                <h2 id="uncle-heading" className={styles.uncleTitle}>Uncle Makhana</h2>
                <h3 className={styles.brandLead}>
                  The heartbeat of modern Indian snacking. Bold flavors, guilt-free crunch, and unmatched affordability.
                </h3>
                <div className={styles.brandBody}>
                  <p>
                    <strong>Uncle Makhana</strong> was born out of a simple necessity: Indian consumers deserve a highly nutritious snack that bridges the gap between deep-fried indulgences and bland health foods. As a rapidly growing FMCG brand, we sought to redefine tea-time.
                  </p>
                  <p>
                    With nostalgic spice blends, fiery masalas, and zesty tangs (including our signature spices), Uncle Makhana is expertly crafted for movie nights, late-night cravings, and family gatherings. We maintain strict farm-to-pack sourcing standards from Bihar but package it in an accessible, vibrant format so every household can experience the joy of premium roasted fox nuts.
                  </p>
                </div>
                
                <div className={styles.featureGrid}>
                  <div className={styles.featureItem}>
                    <FaFire className={styles.featureIcon} style={{ color: 'var(--uncle-orange-dark)' }} aria-hidden="true" />
                    <h4>Bold Indian Flavors</h4>
                    <p>Designed specifically for the vibrant desi palate.</p>
                  </div>
                  <div className={styles.featureItem}>
                    <FaShoppingBasket className={styles.featureIcon} style={{ color: 'var(--uncle-orange-dark)' }} aria-hidden="true" />
                    <h4>Highly Accessible</h4>
                    <p>Priced competitively for everyday guilt-free snacking.</p>
                  </div>
                  <div className={styles.featureItem}>
                    <FaLeaf className={styles.featureIcon} style={{ color: 'var(--uncle-orange-dark)' }} aria-hidden="true" />
                    <h4>Zero Junk Philosophy</h4>
                    <p>100% roasted, never fried. Free from artificial preservatives.</p>
                  </div>
                </div>
              </div>
              <div className={styles.imageCol} style={{ backgroundColor: '#fff0e6' }}>
                <div className={styles.floatingAccent}>#1 For Indian Tea Time</div>
                <img 
                  src="/uncle-product.png" 
                  alt="Uncle Makhana premium flavored healthy Indian snacks" 
                  className={styles.brandImage} 
                  loading="eager" 
                />
              </div>
            </div>
          </div>
        </article>

        {/* Brand 2: Pure Makhana */}
        <article className={`${styles.brandSection} ${styles.pureBrandSection}`} id="pure-makhana" aria-labelledby="pure-heading">
          <div className="container">
            <div className={styles.gridReverse}>
              <div className={styles.contentCol}>
                <div className="badge badge-gold" style={{ marginBottom: '20px' }}>Global Luxury Wellness</div>
                <h2 id="pure-heading" className={styles.pureTitle}>Pure Makhana</h2>
                <h3 className={styles.brandLead} style={{ color: 'var(--pure-white)' }}>
                  The absolute gold standard of wellness. Export-grade, meticulously sorted lotus seeds for the discerning global palate.
                </h3>
                <div className={styles.brandBody} style={{ color: 'var(--pure-silver)' }}>
                  <p>
                    <strong>Pure Makhana</strong> represents the absolute pinnacle of our direct-to-farm harvest. We employ rigorous multi-stage grading so that only the largest, whitest, perfectly spherical seeds make it into these luxurious, minimalist packages. 
                  </p>
                  <p>
                    Tailored expressly for premium health-food aisles, luxury hotel suites, and international wholesale markets across the globe - including <strong>Germany, the UK, Hungary, and the UAE</strong>. Pure Makhana elevates this ancient superfood with sophisticated flavorings like Himalayan Pink Salt, targeting the booming international clean-eating and vegan demographic.
                  </p>
                </div>

                <div className={styles.featureGrid}>
                  <div className={styles.featureItem} style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <FaStar className={styles.featureIcon} style={{ color: 'var(--pure-gold)' }} aria-hidden="true" />
                    <h4 style={{ color: 'white' }}>A+ Export Grade</h4>
                    <p style={{ color: 'var(--pure-silver)' }}>Strict hand-picked sizing and flawless color sorting.</p>
                  </div>
                  <div className={styles.featureItem} style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <FaPlaneDeparture className={styles.featureIcon} style={{ color: 'var(--pure-gold)' }} aria-hidden="true" />
                    <h4 style={{ color: 'white' }}>Global Reach</h4>
                    <p style={{ color: 'var(--pure-silver)' }}>Proudly exported across 4+ international continents.</p>
                  </div>
                  <div className={styles.featureItem} style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <FaGem className={styles.featureIcon} style={{ color: 'var(--pure-gold)' }} aria-hidden="true" />
                    <h4 style={{ color: 'white' }}>Luxury Aesthetics</h4>
                    <p style={{ color: 'var(--pure-silver)' }}>Minimalist packaging designed for premium retail shelves.</p>
                  </div>
                </div>
              </div>
              <div className={styles.imageCol} style={{ backgroundColor: 'transparent' }}>
                <div className={styles.floatingAccent} style={{ background: 'var(--pure-gold)', color: 'var(--pure-navy)' }}>Global Export Standard</div>
                <img 
                  src="/pure-product.png" 
                  alt="Pure Makhana luxury wellness brand export quality fox nuts" 
                  className={styles.brandImage} 
                  loading="lazy" 
                />
              </div>
            </div>
          </div>
        </article>

        {/* Nutritional Edge / Superfood Section */}
        <section className={styles.nutritionSection} aria-labelledby="nutrition-heading">
          <div className="container">
            <div className={styles.nutritionHeader}>
              <h2 id="nutrition-heading">Why Choose Fox Nuts (Makhana)?</h2>
              <p>Beyond the incredible crunch and flavor, our carefully sourced Makhana stands as a nutritional powerhouse. Here is why fitness enthusiasts and nutritionists globally are switching to Zenvora Food.</p>
            </div>
            <div className={styles.nutritionGrid}>
              <div className={styles.nutritionCard}>
                <FaHeartbeat className={styles.nutritionIcon} />
                <h3>Heart Healthy</h3>
                <p>Low in cholesterol, saturated fat, and sodium. Packed with magnesium to support optimal cardiovascular health.</p>
              </div>
              <div className={styles.nutritionCard}>
                <FaSeedling className={styles.nutritionIcon} />
                <h3>100% Vegan & Gluten-Free</h3>
                <p>A completely plant-based snack that naturally contains zero gluten, making it safe for celiac and paleo diets.</p>
              </div>
              <div className={styles.nutritionCard}>
                <FaCheckCircle className={styles.nutritionIcon} />
                <h3>High in Clean Protein</h3>
                <p>Offers an excellent plant-based protein to carbohydrate ratio, keeping you fuller for much longer without the heavy crash.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO FAQ Section */}
        <section className={styles.faqSection} aria-labelledby="faq-heading">
          <div className="container">
            <h2 id="faq-heading" className={styles.faqTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqCard}>
                <h3>What is the difference between Uncle Makhana and Pure Makhana?</h3>
                <p>Uncle Makhana is designed as an affordable, flavorful, everyday healthy snack for the Indian demographic. Pure Makhana is our ultra-premium, luxury brand consisting of A+ export grade, hand-picked lotus seeds aimed at international wellness markets and high-end retail.</p>
              </div>
              <div className={styles.faqCard}>
                <h3>Are Zenvora Food's Makhana products gluten-free and vegan?</h3>
                <p>Yes! All Makhana (Fox Nuts) produced by Zenvora Food are 100% naturally gluten-free, vegan, non-GMO, and roasted (never fried), making them the perfect healthy superfood snack.</p>
              </div>
              <div className={styles.faqCard}>
                <h3>Does Zenvora Food export Makhana internationally?</h3>
                <p>Yes, through our Pure Makhana brand, we actively export premium grade Fox Nuts across the globe, including to Germany, the United Kingdom (UK), Hungary, and the United Arab Emirates (UAE). We adhere strictly to international food safety and grading standards.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Distributor Call To Action */}
        <section className={styles.distributorCta} aria-labelledby="cta-heading">
          <div className="container">
            <div className={styles.ctaCard}>
              <h2 id="cta-heading">Ready to Stock The Best?</h2>
              <p>
                We are actively looking for dynamic distribution partners, B2B wholesale buyers, global importers, and retail chains to stock Uncle Makhana and Pure Makhana. Partner with a brand that leads with quality and reliability.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/#contact" className="btn btn-primary" aria-label="Become a distributor for Zenvora Food">Become a B2B Distributor</Link>
                <Link href="/about" className="btn btn-outline" aria-label="Learn about our farm to pack Makhana supply chain">Learn About Our Farm-to-Pack Process</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
