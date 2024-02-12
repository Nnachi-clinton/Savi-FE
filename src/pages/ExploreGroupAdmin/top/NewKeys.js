import Icon from './Icon.js';
import './style.css';
import './Glo.css';
import Cards from '../card/Cards.js';

function NewKeys() {
  return (
    <>
      <div className="savings-groups">
        <p className="savings-group-title">Saving Groups</p>
        <div className="saving-groups-container">
          <div className="flex-container-with-buttons-and-text">
            <button className="button-all">All</button>
            <p className="text-container">Active</p>
            <p className="text-container">New</p>
          </div>
          <button className="button-container">
            <Icon className="svg-container" />
            Download PDF Report
          </button>
        </div>
      </div>
      <Cards />
    </>
  );
}

export default NewKeys;
