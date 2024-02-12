import Groups from '../groups/Group';
import Icon from './Icon.js';
import './style.css';
import '../Glo.css';

function Cards() {
  return (
    <div style={{ marginTop: '3em' }}>
      <div className="savings-group-card">
        <div className="header-container">
          <img
            src="/assets/img_194_24282_cfdc0d.jpeg"
            className="image-container"
            alt=""
          />
        </div>
        <div className="money-palava-savers-container1">
          <div className="flex-container">
            <button className="button-waiting">Waiting</button>
            <div className="image-container-with-counter">
              <div className="image-container2">
                <div className="contribution-section1">
                  <img
                    src="/assets/img_I194_24305_115_2216_e1c0a9.jpeg"
                    className="rounded-image"
                    alt=""
                  />
                </div>
              </div>
              <Icon className="svg-container" />
            </div>
          </div>
          <Groups />
        </div>
      </div>
    </div>
  );
}

export default Cards;
