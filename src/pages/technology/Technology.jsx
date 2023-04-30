import React, { useState } from 'react';
import styles from './technology.module.css';
import { AppData } from '../../../data/planet';

export default function Technology() {
  const [tabNumber, setTabNumber] = useState(1);
  const { technology } = AppData();

  // Find the active technology item
  const activeTech = technology.find((val) => val.tabNumber === tabNumber) || technology[0];

  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles['wrapper-content']}>
          <div className={styles.header}>
            <h5>
              <span>03</span> Space Launch 101
            </h5>
          </div>

          <div className={styles['info-wrapper']}>
            <div className={styles.navigation}>
              <button
                className={tabNumber === 1 ? styles.active : ''}
                onClick={() => setTabNumber(1)}
                aria-label="Launch vehicle"
              >
                1
              </button>
              <button
                className={tabNumber === 2 ? styles.active : ''}
                onClick={() => setTabNumber(2)}
                aria-label="Spaceport"
              >
                2
              </button>
              <button
                className={tabNumber === 3 ? styles.active : ''}
                onClick={() => setTabNumber(3)}
                aria-label="Space capsule"
              >
                3
              </button>
            </div>

            <div className={styles.info}>
              <p>THE TERMINOLOGY…</p>
              <h3>{activeTech.name}</h3>
              <p>{activeTech.description}</p>
            </div>
          </div>
        </div>

        <div className={styles['image-wrapper']}>
          <div className={styles.image}>
            <picture>
              <source media="(max-width: 1024px)" srcSet={activeTech.images.mobile} />
              <img src={activeTech.images.desktop} alt={activeTech.name} />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}

