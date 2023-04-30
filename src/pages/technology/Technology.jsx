import React, { useState } from 'react';
import styles from './technology.module.css';
import { Link } from 'react-router-dom';
import { AppData } from '../../../data/planet';

export default function Technology() {
  const [tabNumber, setTabNumber] = useState(1);

  const technologyOneActive = () => {
    setTabNumber(1);
  };

  const technologyTwoActive = () => {
    setTabNumber(2);
  };

  const technologyThreeActive = () => {
    setTabNumber(3);
  };

  const { technology } = AppData();

  return (
    <div className={styles.main}>
      <>
        <div className={styles.wrapper}>
          <div className={styles['wrapper-content']}>
            <div className={styles.header}>
              <h5>
                <span>03</span>Space Launch 101
              </h5>
            </div>

            <div className={styles['content-wrapper']}>
              {technology.map((val, idx) => (
                <>
                  {val.tabNumber === tabNumber && (
                    <div className={styles['info-wrapper']}>
                      <div className={styles.navigation}>
                        <Link
                          className={styles[tabNumber === 1 ? 'active' : '']}
                          onClick={() => technologyOneActive()}
                        >
                          <h4 className={styles.one}>1</h4>
                        </Link>

                        <Link
                          className={styles[tabNumber === 2 ? 'active' : '']}
                          onClick={() => technologyTwoActive()}
                        >
                          <h4 className={styles.two}>2</h4>
                        </Link>

                        <Link
                          className={styles[tabNumber === 3 ? 'active' : '']}
                          onClick={() => technologyThreeActive()}
                        >
                          <h4 className={styles.three}>3</h4>
                        </Link>
                      </div>

                      <div className={styles.info}>
                        <p>THE TERMINOLOGY…</p>
                        <h3>{val.name}</h3>
                        <p>{val.description}</p>
                      </div>
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>

          <div className={styles['image-wrapper']}>
            {technology.map((val, idx) => (
              <>
                {val.tabNumber === tabNumber && (
                  <div className={styles.image}>
                    <img src={val.images.desktop} alt="technology images" />
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </>
    </div>
  );
}
