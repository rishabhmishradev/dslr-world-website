import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.footerCol}>
          <div className={styles.logo}>
            <span className={styles.logoDw}>DW</span>
            <span className={styles.logoText}>DSLR WORLD</span>
          </div>
          <p className={styles.tagline}>"Never start a business just to make money. Start a business to make a difference."</p>
          <div className={styles.social}>
            <a href="https://instagram.com/dslrworld_official" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://youtube.com/@dslrworld94" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
        
        <div className={styles.footerCol}>
          <h3>Quick Links</h3>
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/sell-exchange">Sell / Exchange</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className={styles.footerCol}>
          <h3>Contact Us</h3>
          <p>Church Road, RR Plaza<br/>Ranchi, Jharkhand 834001<br/>India</p>
          <p>Phone: +91 6202381019</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} DSLR World, Ranchi. All rights reserved.</p>
      </div>
    </footer>
  );
}
