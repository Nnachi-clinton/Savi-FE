import Icon from './Icon.js';
import './style.css';
import './Glo.css';
import Cards from '../card/Cards.js';
import React, { useState } from 'react';
import ActiveCards from '../../ExploreGroupAdmin copy/card/ActiveCards.js';

function NewKeys({ selectstep }) {
  const [activeButton, setActiveButton] = useState('All');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <>
      <div className="savings-groups">
        <p className="savings-group-title">Saving Groups</p>
        <div className="saving-groups-container">
          <div className="flex-container-with-buttons-and-text">
            <button
              className={`button-all ${activeButton === 'All' ? 'active' : ''}`}
              onClick={() => handleButtonClick('All')}
            >
              All
            </button>
            <button
              className={`button-active ${
                activeButton === 'Active' ? 'active' : ''
              }`}
              onClick={() => handleButtonClick('Active')}
            >
              Active
            </button>
            <button
              className={`button-new ${activeButton === 'New' ? 'active' : ''}`}
              onClick={() => handleButtonClick('New')}
            >
              New
            </button>
          </div>
          <button className="button-container">
            <Icon className="svg-container" />
            Download PDF Report
          </button>
        </div>
      </div>
      {/* <Cards /> */}
      {activeButton === 'All' && <Cards />}
      {activeButton === 'Active' && <ActiveCards selectstep={selectstep} />}
      {activeButton === 'New' && <p>I am New Screen</p>}
    </>
  );
}

export default NewKeys;
