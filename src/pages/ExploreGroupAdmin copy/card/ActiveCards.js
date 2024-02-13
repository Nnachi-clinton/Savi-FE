import Groups from '../groups/ActiveGroup.js';
import Icon from './Icon.js';
import './style.css';
import '../Glo.css';

function ActiveCards() {
  return (
    <div style={{ marginTop: '3em', marginLeft: '-5em' }}>
      <div className="savings-group-card1">
        <div className="header-container1">
          <img
            src="/assets/img_194_24282_cfdc0d.jpeg"
            className="image-container1"
            alt=""
          />
        </div>
        <div className="money-palava-savers-container11">
          <div className="flex-container1">
            <button className="button-waiting1">Waiting</button>
            <div className="image-container-with-counter1">
              <div className="image-container21">
                <div className="contribution-section11">
                  <img
                    src="/assets/img_I194_24305_115_2216_e1c0a9.jpeg"
                    className="rounded-image1"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <Icon className="svg-container1" />
              </div>
            </div>
          </div>
          <Groups />
        </div>
      </div>
    </div>
  );
}

export default ActiveCards;
