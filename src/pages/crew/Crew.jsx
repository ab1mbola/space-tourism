import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppData } from '../../../data/planet';
import './Crew.css';

export default function Crew() {
  const [tabNumber, setTabNumber] = useState(1);

  const crewOneActive = () => {
    setTabNumber(1);
  };
  const crewTwoActive = () => {
    setTabNumber(2);
  };
  const crewThreeActive = () => {
    setTabNumber(3);
  };
  const crewFourActive = () => {
    setTabNumber(4);
  };

  const { crew } = AppData();

  return (
    <div className="crew">
      <>
        <div className="crew-wrapper">
          {crew.map((val, idx) => (
            <>
              {val.tabNumber === tabNumber && (
                <>
                  <div className="crew-info-wrapper">
                    <div className="crew-header">
                      <h5>
                        <span>02</span> Meet your crew
                      </h5>
                    </div>
                    <div className="crew-info">
                      <h4>{val.role}</h4>
                      <h3>{val.name}</h3>
                      <p>{val.bio}</p>
                    </div>

                    <div className="crew-navigation">
                      <Link
                        className={tabNumber === 1 ? 'selected' : ''}
                        onClick={() => crewOneActive()}
                      >
                        <div className="crew-one"></div>
                      </Link>

                      <Link
                        className={tabNumber === 2 ? 'selected' : ''}
                        onClick={() => crewTwoActive()}
                      >
                        <div className="crew-two"></div>
                      </Link>

                      <Link
                        className={tabNumber === 3 ? 'selected' : ''}
                        onClick={() => crewThreeActive()}
                      >
                        <div className="crew-three"></div>
                      </Link>

                      <Link
                        className={tabNumber === 4 ? 'selected' : ''}
                        onClick={() => crewFourActive()}
                      >
                        <div className="crew-four"></div>
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </>
          ))}

          <div className="crew-image-wrapper">
            {crew.map((val, idx) => (
              <>
                {val.tabNumber === tabNumber && (
                  <div className="crew-image">
                    <img src={val.image} alt="" />
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
