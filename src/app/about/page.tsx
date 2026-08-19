import type { Metadata } from "next";
import Image from "next/image";
import styles from './about.module.css';

export const metadata: Metadata = {
  title: "About Us | DSLR World",
  description: "Learn more about DSLR World, Ranchi's trusted camera store. Built on trust and passion for photography.",
};

export default function About() {
  return (
    <div className="container">
      <div className={styles.aboutHeader}>
        <h1 className="section-title">About DSLR World</h1>
        <p className={styles.aboutSubtitle}>More than just a camera store. We are a community of creators.</p>
      </div>

      <div className={styles.storySection}>
        <div className={styles.storyContent}>
          <h2>Our Story</h2>
          <p>
            DSLR World started with a simple belief: <strong>"Never start a business just to make money. Start a business to make a difference."</strong> 
          </p>
          <p>
            Located in the heart of Ranchi at RR Plaza, we have grown into the city's most trusted destination for photography gear. We don't just sell boxes; we match creators with the tools they need to tell their stories.
          </p>
          <p>
            With over 30,000 passionate followers on Instagram and thousands of happy customers, we take pride in our transparent pricing, genuine products, and expert advice. Whether you are buying your first DSLR or upgrading to the latest full-frame mirrorless system, you are family here.
          </p>
        </div>
        <div className={styles.storyImage}>
          <div className={styles.imageWrapper}>
            <Image src="/images/store_interior.jpg" alt="Store Interior" fill style={{objectFit: 'cover'}} />
          </div>
        </div>
      </div>

      <div className={styles.valuesSection}>
        <div className={styles.valueCard}>
          <h3>Trust & Authenticity</h3>
          <p>We only deal in 100% genuine products with official warranties. No grey market gear, ever.</p>
        </div>
        <div className={styles.valueCard}>
          <h3>Fair Valuations</h3>
          <p>When you sell or exchange with us, you get a transparent, market-driven quote for your old gear.</p>
        </div>
        <div className={styles.valueCard}>
          <h3>Community First</h3>
          <p>We celebrate every delivery. We aren't just salespeople; we are photography enthusiasts just like you.</p>
        </div>
      </div>
    </div>
  );
}
