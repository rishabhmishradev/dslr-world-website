import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoDw}>DW</span>
          <span className={styles.logoText}>DSLR WORLD</span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/shop" className={styles.navLink}>Shop</Link>
          <Link href="/sell-exchange" className={styles.navLink}>Sell / Exchange</Link>
          <Link href="/about" className={styles.navLink}>About Us</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </nav>
        <a href="https://wa.me/916202381019" target="_blank" rel="noopener noreferrer" className="btn-primary">
          WhatsApp Us
        </a>
      </div>
    </header>
  );
}
