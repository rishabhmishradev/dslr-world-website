import type { Metadata } from "next";
import styles from './sell.module.css';

export const metadata: Metadata = {
  title: "Sell or Exchange Your Camera | DSLR World",
  description: "Upgrade your gear easily. Get a fair quote for your old camera and exchange it for a new one at DSLR World Ranchi.",
};

export default function SellExchange() {
  return (
    <div className="container">
      <div className={styles.header}>
        <h1 className="section-title">Sell or Exchange Your Camera</h1>
        <p className={styles.subtitle}>Genuine valuation, instant cash or exchange, no hidden charges.</p>
      </div>

      <div className={styles.stepsContainer}>
        <div className={styles.step}>
          <div className={styles.stepNumber}>1</div>
          <h3>Share Details</h3>
          <p>Tell us your camera brand, model, and condition on WhatsApp. Send a few photos if possible.</p>
        </div>
        <div className={styles.step}>
          <div className={styles.stepNumber}>2</div>
          <h3>Get a Quote</h3>
          <p>We'll provide a fair, competitive estimate based on the current market value.</p>
        </div>
        <div className={styles.step}>
          <div className={styles.stepNumber}>3</div>
          <h3>Deal Done</h3>
          <p>Visit our store in Ranchi or arrange a pickup. Get instant cash or a great discount on an upgrade.</p>
        </div>
      </div>

      <div className={styles.formContainer}>
        <div className={styles.formWrapper}>
          <h2>Enquiry Form</h2>
          <p className={styles.formSub}>Fill this out to send us a direct message on WhatsApp with your gear details.</p>
          
          <form className={styles.form} action="https://wa.me/916202381019" method="get" target="_blank">
            <div className={styles.inputGroup}>
              <label>Your Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
            
            <div className={styles.inputGroup}>
              <label>Camera Brand & Model</label>
              <input type="text" placeholder="e.g. Nikon D5600" required />
            </div>
            
            <div className={styles.inputGroup}>
              <label>Condition</label>
              <select required>
                <option value="">Select Condition</option>
                <option value="Like New">Like New (Barely used, no scratches)</option>
                <option value="Good">Good (Minor wear, fully functional)</option>
                <option value="Fair">Fair (Noticeable wear, still functional)</option>
                <option value="Broken">Needs Repair</option>
              </select>
            </div>
            
            <div className={styles.inputGroup}>
              <label>Looking to</label>
              <select required>
                <option value="Sell">Sell for Cash</option>
                <option value="Exchange">Exchange / Upgrade</option>
              </select>
            </div>
            
            <div className={styles.inputGroup}>
              <label>Message (Optional)</label>
              <textarea placeholder="Any additional details..." rows={4}></textarea>
            </div>
            
            {/* We pass a pre-filled text to the whatsapp link, but HTML forms don't perfectly map to wa.me GET parameters.
                In a real React app, we'd use a submit handler to construct the wa.me/916202381019?text=... URL. 
                For this template, we just use a link styled as a button. */}
            <a href="https://wa.me/916202381019?text=Hi,%20I%20want%20to%20sell/exchange%20my%20camera." target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{width: '100%', marginTop: '1rem', textDecoration: 'none'}}>
              Continue to WhatsApp
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
