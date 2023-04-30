import React, { useState } from 'react';
import { AppData } from '../../../data/planet';
import './Crew.css';

export default function Crew() {
  const [tabNumber, setTabNumber] = useState(1);
  const { crew } = AppData();

  // Find current active crew member
  const activeCrew = crew.find((val) => val.tabNumber === tabNumber) || crew[0];

  return (
    <div className="crew">
      <div className="crew-wrapper">
        <div className="crew-info-wrapper">
          <div className="crew-header">
            <h5>
              <span>02</span> Meet your crew
            </h5>
          </div>
          
          <div className="crew-details-container">
            <div className="crew-info">
              <h4>{activeCrew.role}</h4>
              <h3>{activeCrew.name}</h3>
              <p>{activeCrew.bio}</p>
            </div>

            <div className="crew-navigation">
              <button
                className={tabNumber === 1 ? 'selected' : ''}
                onClick={() => setTabNumber(1)}
                aria-label="Crew Member 1"
              />
              <button
                className={tabNumber === 2 ? 'selected' : ''}
                onClick={() => setTabNumber(2)}
                aria-label="Crew Member 2"
              />
              <button
                className={tabNumber === 3 ? 'selected' : ''}
                onClick={() => setTabNumber(3)}
                aria-label="Crew Member 3"
              />
              <button
                className={tabNumber === 4 ? 'selected' : ''}
                onClick={() => setTabNumber(4)}
                aria-label="Crew Member 4"
              />
            </div>
          </div>
        </div>

        <div className="crew-image-wrapper">
          <div className="crew-image">
            <img src={activeCrew.image} alt={activeCrew.name} />
          </div>
        </div>
      </div>
    </div>
  );
}

