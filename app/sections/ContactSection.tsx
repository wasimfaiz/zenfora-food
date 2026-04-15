import styles from './ContactSection.module.css';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhoneAlt } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className="container">
        <div className={styles.grid}>
          {/* Left: Info */}
          <div className={styles.infoCol}>
            <p className="section-label">Get in Touch</p>
            <h2 className={styles.title}>Let's Build<br />Something Great</h2>
            <p className={styles.body}>
              Whether you're a retailer, distributor, investor, or just a makhana lover -
              we'd love to hear from you. Reach out and let's explore the possibilities.
            </p>

            {/* Contact options */}
            <div className={styles.contactOptions}>
              <div className={styles.contactOption}>
                <div className={styles.optionIcon}><FaEnvelope size={18} /></div>
                <div>
                  <div className={styles.optionLabel}>Email Us</div>
                  <div className={styles.optionValue}>hello@zenvorafood.com</div>
                </div>
              </div>
              <div className={styles.contactOption}>
                <div className={styles.optionIcon}><FaPhoneAlt size={18} /></div>
                <div>
                  <div className={styles.optionLabel}>Call / WhatsApp</div>
                  <div className={styles.optionValue}>+91 98765 43210</div>
                </div>
              </div>
              <div className={styles.contactOption}>
                <div className={styles.optionIcon}><FaMapMarkerAlt size={20} /></div>
                <div>
                  <div className={styles.optionLabel}>Registered Office</div>
                  <div className={styles.optionValue}>Noida, Uttar Pradesh</div>
                </div>
              </div>
            </div>

            {/* Partnership types */}
            <div className={styles.partnerTypes}>
              <div className={styles.partnerTypesLabel}>We're Looking For</div>
              <div className={styles.partnerTags}>
                {['Distributors', 'Retail Partners', 'Export Buyers', 'Investors', 'B2B Clients'].map((t) => (
                  <span className={styles.partnerTag} key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>Send Us a Message</h3>
              <form className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="firstName">First Name</label>
                    <input className={styles.input} id="firstName" type="text" placeholder="Your first name" />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="lastName">Last Name</label>
                    <input className={styles.input} id="lastName" type="text" placeholder="Your last name" />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="email">Email Address</label>
                  <input className={styles.input} id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="interest">I'm Interested In</label>
                  <select className={styles.input} id="interest">
                    <option value="">Select an option</option>
                    <option>Distributorship</option>
                    <option>Retail Partnership</option>
                    <option>Export / Wholesale</option>
                    <option>Investment</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="brand">Venture of Interest</label>
                  <select className={styles.input} id="brand">
                    <option value="">Select brand</option>
                    <option>Uncle Makhana</option>
                    <option>Pure Makhana</option>
                    <option>Both / Zenvora Food</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="message">Your Message</label>
                  <textarea className={`${styles.input} ${styles.textarea}`} id="message" rows={4} placeholder="Tell us about your requirements..." />
                </div>
                <button type="submit" className={styles.submitBtn} id="contact-submit-btn">
                  Send Message <FaPaperPlane />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
