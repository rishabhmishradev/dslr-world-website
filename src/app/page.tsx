import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Your Trusted Local <span className={styles.textGold}>Camera Expert</span>
            </h1>
            <p className={styles.heroTagline}>
              "Never start a business just to make money. Start a business to make a difference."
            </p>
            <div className={styles.heroActions}>
              <Link href="/shop" className="btn-primary">Browse Cameras</Link>
              <Link href="/sell-exchange" className="btn-secondary">Sell Your Camera</Link>
            </div>
          </div>
          <div className={styles.heroImageWrapper}>
            <Image 
              src="/images/hero_camera.jpg" 
              alt="Premium Camera" 
              fill 
              style={{ objectFit: 'cover' }} 
              priority
            />
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className={styles.trustStrip}>
        <div className={`container ${styles.trustGrid}`}>
          <div className={styles.trustItem}>
            <h3 className={styles.trustStat}>30K+</h3>
            <p>Instagram Community</p>
          </div>
          <div className={styles.trustItem}>
            <h3 className={styles.trustStat}>500+</h3>
            <p>Cameras Delivered</p>
          </div>
          <div className={styles.trustItem}>
            <h3 className={styles.trustStat}>100%</h3>
            <p>Genuine Gear</p>
          </div>
          <div className={styles.trustItem}>
            <h3 className={styles.trustStat}>Trusted</h3>
            <p>Buy-Sell-Exchange</p>
          </div>
        </div>
      </section>

      {/* Featured Stock */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured Stock</h2>
          <div className={styles.stockGrid}>
            <div className={styles.stockCard}>
              <div className={styles.stockLabel}>🔥 In Stock</div>
              <div className={styles.stockImagePlaceholder}>Nikon D5600</div>
              <div className={styles.stockInfo}>
                <h3>Nikon D5600</h3>
                <p className={styles.stockCondition}>Condition: Used - Excellent</p>
                <a href="https://wa.me/916202381019?text=I'm%20interested%20in%20the%20Nikon%20D5600" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{width: '100%', marginTop: '1rem'}}>
                  Enquire Price
                </a>
              </div>
            </div>
            <div className={styles.stockCard}>
              <div className={styles.stockLabel}>✨ Available</div>
              <div className={styles.stockImagePlaceholder}>Canon R6 Mark II</div>
              <div className={styles.stockInfo}>
                <h3>Canon EOS R6 Mark II</h3>
                <p className={styles.stockCondition}>Condition: New</p>
                <a href="https://wa.me/916202381019?text=I'm%20interested%20in%20the%20Canon%20R6%20Mark%20II" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{width: '100%', marginTop: '1rem'}}>
                  Enquire Price
                </a>
              </div>
            </div>
            <div className={styles.stockCard}>
              <div className={styles.stockLabel}>⭐ Popular</div>
              <div className={styles.stockImagePlaceholder}>Sony Z-Series</div>
              <div className={styles.stockInfo}>
                <h3>Sony Alpha Series</h3>
                <p className={styles.stockCondition}>Condition: Varies</p>
                <Link href="/shop" className="btn-secondary" style={{width: '100%', marginTop: '1rem'}}>
                  View All Stock
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Deliveries */}
      <section className={`section ${styles.darkerBg}`}>
        <div className="container">
          <h2 className="section-title">Happy Customers</h2>
          <p className={styles.subtitle}>Real moments from our store in Ranchi. See more on <a href="https://instagram.com/dslrworld_official" target="_blank" rel="noopener noreferrer" className={styles.textGold}>@dslrworld_official</a></p>
          
          <div className={styles.deliveriesGrid}>
            <div className={styles.deliveryCard}>
              <div className={styles.deliveryImageWrapper}>
                <Image src="/images/customer_delivery.jpg" alt="Customer Delivery" fill style={{objectFit: 'cover'}} />
              </div>
              <p>Deal Done! 🤝</p>
            </div>
            <div className={styles.deliveryCard}>
              <div className={styles.deliveryImagePlaceholder}>Delivery Photo 2</div>
              <p>Happy Customer 📸</p>
            </div>
            <div className={styles.deliveryCard}>
              <div className={styles.deliveryImagePlaceholder}>Delivery Photo 3</div>
              <p>Upgrade Day! ✨</p>
            </div>
            <div className={styles.deliveryCard}>
              <div className={styles.deliveryImagePlaceholder}>Delivery Photo 4</div>
              <p>Another happy face! 😊</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className={styles.quickContact}>
        <div className="container">
          <div className={styles.contactWrapper}>
            <h2>Ready to upgrade your gear?</h2>
            <div className={styles.contactActions}>
              <a href="tel:+916202381019" className="btn-secondary">Call Us</a>
              <a href="https://wa.me/916202381019" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp Now</a>
              <a href="https://maps.google.com/?q=Church+Road,+RR+Plaza,+Ranchi,+Jharkhand+834001" target="_blank" rel="noopener noreferrer" className="btn-secondary">Get Directions</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
