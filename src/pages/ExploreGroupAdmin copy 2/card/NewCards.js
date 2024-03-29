import Icon from './Icon.js';
import './style.css';
import '../Glo.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NewGroups from '../groups/NewGroup.js';

function NewCards({ selectstep }) {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7240/api/GroupSavings/GetGroupsCreatedToday`
        );

        setUserData(response.data.result);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ marginTop: '3em', marginLeft: '-5em' }}>
      {userData.length === 0 ? (
        <div style={{ marginLeft: '45em', marginTop: '20em' }}>
          No new Group Created Today
        </div>
      ) : (
        userData.map((user, index) => (
          <ActiveCard key={index} user={user} selectstep={selectstep} />
        ))
      )}
    </div>
  );
}

function ActiveCard({ user, selectstep }) {
  return (
    <div className="savings-group-card12" style={{ marginBottom: '1em' }}>
      <div className="header-container12">
        <img
          src={user.safePortraitImageURL}
          className="image-container12"
          alt=""
        />
      </div>
      <div className="money-palava-savers-container112">
        <div className="flex-container12">
          <button className="button-waiting12">Waiting</button>
          <div className="image-container-with-counter12">
            <div className="image-container212">
              <div className="contribution-section112">
                <img
                  src="/assets/img_I194_24305_115_2216_e1c0a9.jpeg"
                  className="rounded-image12"
                  alt=""
                />
              </div>
            </div>
            <div>
              <Icon className="svg-container12" />
            </div>
          </div>
        </div>
        <NewGroups data={user} selectstep={selectstep} />
      </div>
    </div>
  );
}

export default NewCards;
