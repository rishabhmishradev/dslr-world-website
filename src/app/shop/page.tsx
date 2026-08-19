import type { Metadata } from "next";
import styles from './shop.module.css';

export const metadata: Metadata = {
  title: "Shop & Inventory | DSLR World",
  description: "Browse our latest stock of new and used DSLR and mirrorless cameras, lenses, and accessories.",
};

export default function Shop() {
  return (
    <div className="container">
      <div className={styles.shopHeader}>
        <h1 className="section-title" style={{textAlign: 'left', marginBottom: '1rem'}}>Current Inventory</h1>
        <p className={styles.shopDescription}>
          Our stock changes rapidly. If you don't see what you're looking for, or want to confirm availability, please message us on WhatsApp.
        </p>
      </div>

      <div className={styles.shopLayout}>
        {/* Filters Sidebar */}
        <aside className={styles.filters}>
          <h3>Filters</h3>
          
          <div className={styles.filterGroup}>
            <h4>Brand</h4>
            <label><input type="checkbox" /> Canon</label>
            <label><input type="checkbox" /> Nikon</label>
            <label><input type="checkbox" /> Sony</label>
            <label><input type="checkbox" /> Others</label>
          </div>

          <div className={styles.filterGroup}>
            <h4>Category</h4>
            <label><input type="checkbox" /> DSLR Cameras</label>
            <label><input type="checkbox" /> Mirrorless</label>
            <label><input type="checkbox" /> Lenses</label>
            <label><input type="checkbox" /> Accessories</label>
          </div>

          <div className={styles.filterGroup}>
            <h4>Condition</h4>
            <label><input type="checkbox" /> New (Sealed)</label>
            <label><input type="checkbox" /> Used (Like New)</label>
            <label><input type="checkbox" /> Used (Good)</label>
          </div>

          <button className="btn-secondary" style={{width: '100%', marginTop: '1rem'}}>Apply Filters</button>
        </aside>

        {/* Product Grid */}
        <div className={styles.productGrid}>
          {/* Item 1 */}
          <div className={styles.productCard}>
            <div className={styles.productImage}>Canon R6 Mark II</div>
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>Canon EOS R6 Mark II Body</h3>
              <div className={styles.productMeta}>
                <span className={styles.tag}>Mirrorless</span>
                <span className={styles.tag}>New</span>
              </div>
              <p className={styles.productSpecs}>24.2MP Full-Frame CMOS Sensor, 4K60 10-Bit Video, Dual Pixel CMOS AF II.</p>
              <a href="https://wa.me/916202381019?text=Enquiry:%20Canon%20R6%20Mark%20II%20Body%20(New)" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{width: '100%'}}>
                Enquire on WhatsApp
              </a>
            </div>
          </div>

          {/* Item 2 */}
          <div className={styles.productCard}>
            <div className={styles.productImage}>Nikon D5600</div>
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>Nikon D5600 with 18-55mm Lens</h3>
              <div className={styles.productMeta}>
                <span className={styles.tag}>DSLR</span>
                <span className={styles.tagUsed}>Used - Excellent</span>
              </div>
              <p className={styles.productSpecs}>24.2MP DX-Format CMOS Sensor, EXPEED 4 Image Processor, 3.2" Vari-Angle Touchscreen.</p>
              <a href="https://wa.me/916202381019?text=Enquiry:%20Nikon%20D5600%20Used" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{width: '100%'}}>
                Enquire on WhatsApp
              </a>
            </div>
          </div>

          {/* Item 3 */}
          <div className={styles.productCard}>
            <div className={styles.productImage}>Sony A7III</div>
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>Sony Alpha a7 III Body</h3>
              <div className={styles.productMeta}>
                <span className={styles.tag}>Mirrorless</span>
                <span className={styles.tagUsed}>Used - Good</span>
              </div>
              <p className={styles.productSpecs}>24.2MP Full-Frame Exmor R BSI CMOS Sensor, 693-Point Hybrid AF System.</p>
              <a href="https://wa.me/916202381019?text=Enquiry:%20Sony%20a7%20III%20Used" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{width: '100%'}}>
                Enquire on WhatsApp
              </a>
            </div>
          </div>

          {/* Item 4 */}
          <div className={styles.productCard}>
            <div className={styles.productImage}>Canon 50mm</div>
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>Canon EF 50mm f/1.8 STM</h3>
              <div className={styles.productMeta}>
                <span className={styles.tag}>Lens</span>
                <span className={styles.tag}>New</span>
              </div>
              <p className={styles.productSpecs}>Standard Prime Lens, Stepping Motor (STM) AF, 7-Blade Circular Aperture.</p>
              <a href="https://wa.me/916202381019?text=Enquiry:%20Canon%2050mm%20Lens" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{width: '100%'}}>
                Enquire on WhatsApp
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
