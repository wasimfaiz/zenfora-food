import styles from './FloatingWhatsApp.module.css';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsApp() {
  // Use your actual WhatsApp business number with country code (e.g., +91 for India)
  // For example: 919876543210
  const phoneNumber = "919000000000"; // Placeholder! Replace with actual number
  const message = "Hello! I am interested in partnering with Zenvora Food or buying your Makhana products. I would like to know more.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      className={styles.float} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <div className={styles.iconWrapper}>
        <FaWhatsapp className={styles.icon} />
      </div>
      <div className={styles.tooltip}>Chat with us</div>
    </a>
  );
}
