import type { Metadata } from "next";
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: "Contact Us | DSLR World",
  description: "Visit our store at Church Road, RR Plaza, Ranchi, or contact us via WhatsApp for inquiries about cameras and equipment.",
};

export default function Contact() {
  return (
    <div className="container">
      <div className={styles.contactHeader}>
        <h1 className="section-title">Get in Touch</h1>
        <p className={styles.subtitle}>We're here to help you find the perfect gear.</p>
      </div>

      <div className={styles.contactLayout}>
        <div className={styles.contactInfo}>
          <div className={styles.infoCard}>
            <h3>Visit Our Store</h3>
            <p>Church Road, RR Plaza<br/>Ranchi, Jharkhand 834001<br/>India</p>
            <div className={styles.statusOpen}>● Open Today: 10:30 AM - 8:30 PM</div>
          </div>

          <div className={styles.infoCard}>
            <h3>Contact Details</h3>
            <p><strong>Phone / WhatsApp:</strong> +91 6202381019</p>
            <p><strong>Email:</strong> info@dslrworldranchi.com <em>(Placeholder)</em></p>
          </div>

          <div className={styles.infoCard}>
            <h3>Follow Us</h3>
            <div className={styles.socialLinks}>
              <a href="https://instagram.com/dslrworld_official" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Instagram (@dslrworld_official)</a>
              <a href="https://youtube.com/@dslrworld94" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>YouTube (@dslrworld94)</a>
            </div>
          </div>
        </div>

        <div className={styles.mapContainer}>
          {/* Using a placeholder iframe for the map to avoid API keys, but pointing to Ranchi */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14660.187311756539!2d85.32172785!3d23.3684803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5d759f%3A0xc31a58dbd54e17be!2sChurch%20Rd%2C%20Ranchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="DSLR World Store Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
