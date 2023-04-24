import React from 'react';
import { useState, useEffect } from 'react';
import './Destination.css';
import { AppData } from '../../../data/planet';
// import { Data } from '../../../data/data.json'

export default function Destination() {
  const [tabNumber, setTabNumber] = useState(1);

  const moonActive = () => {
    setTabNumber(1);
  };
  const marsActive = () => {
    setTabNumber(2);
  };
  const europaActive = () => {
    setTabNumber(3);
  };
  const titanActive = () => {
    setTabNumber(4);
  };

  const { planets } = AppData();
  return (
    <div className="destination-hero">
      <div id="moon">
        <div className="container">
          {planets.map((val, idx) => (
            <>
              {val.tabNumber === tabNumber && (
                <div className="destination-left">
                  <div className="left-title">
                    <h5>
                      <span>01</span> Pick Your Destination
                    </h5>
                  </div>

                  <div className="left-img">
                    <img src={val.image} alt="moon" />
                  </div>
                </div>
              )}
            </>
          ))}

          <div className="destination-right">
            <div className="destination-nav">
              <a
                className={tabNumber === 1 ? 'active' : ''}
                onClick={() => moonActive()}
              >
                Moon
              </a>
              <a
                className={tabNumber === 2 ? 'active' : ''}
                onClick={() => marsActive()}
              >
                Mars
              </a>
              <a
                href="#europa"
                className={tabNumber === 3 ? 'active' : ''}
                onClick={() => europaActive()}
              >
                Europa
              </a>
              <a
                href="#titan"
                className={tabNumber === 4 ? 'active' : ''}
                onClick={() => titanActive()}
              >
                Titan
              </a>
            </div>
            <div className="right-content">
              {planets.map((val, idx) => (
                <>
                  {val.tabNumber === tabNumber && (
                    <>
                      <h2>{val.name}</h2>
                      <p>{val.description}</p>

                      <div className="line"></div>

                      <div>
                        <div className="avg-dist">
                          <p>Avg. Distance</p>
                          <p>{val.distance}</p>
                        </div>

                        <div className="est-time">
                          <p>Est. Travel Time</p>
                          <p>{val.travel}</p>
                        </div>
                      </div>
                    </>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
