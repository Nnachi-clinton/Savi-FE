import Groups from '../groups/ActiveGroup.js';
import Icon from './Icon.js';
import './style.css';
import '../Glo.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// function ActiveCards() {
//   const [userData, setUserData] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `https://localhost:7240/api/GroupSavings/ExploreGroups`
//         );

//         setUserData(response.data.result);
//         console.log(response);
//         console.log(response.data.result);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchData();
//   }, []);
//   console.log(userData);
//   return (
//     <div style={{ marginTop: '3em', marginLeft: '-5em' }}>
//       <div className="savings-group-card1">
//         <div className="header-container1">
//           <img
//             src="/assets/img_194_24282_cfdc0d.jpeg"
//             className="image-container1"
//             alt=""
//           />
//         </div>
//         <div className="money-palava-savers-container11">
//           <div className="flex-container1">
//             <button className="button-waiting1">Waiting</button>
//             <div className="image-container-with-counter1">
//               <div className="image-container21">
//                 <div className="contribution-section11">
//                   <img
//                     src="/assets/img_I194_24305_115_2216_e1c0a9.jpeg"
//                     className="rounded-image1"
//                     alt=""
//                   />
//                 </div>
//               </div>
//               <div>
//                 <Icon className="svg-container1" />
//               </div>
//             </div>
//           </div>
//           <Groups data={userData} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ActiveCards;

function ActiveCards({ selectstep }) {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7240/api/GroupSavings/ListOfActiveGroups`
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
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
    console.log('toggleDropdown');
  };
  const handleGroupClick = (groupId) => {
    localStorage.setItem('GroupId', groupId);
    console.log(groupId);
    selectstep(7);
  };
  return (
    <div className="savings-group-card1" style={{ marginBottom: '1em' }}>
      <div className="header-container1">
        <img
          src={user.safePortraitImageURL}
          className="image-container1"
          alt=""
        />
      </div>
      <div className="money-palava-savers-container11">
        <div className="flex-container1">
          <button className="button-waiting1">Ongoing</button>
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
            <div className="dropdown-container1">
              <Icon
                className="svg-container1"
                onClick={() => toggleDropdown()}
              />
              {dropdownVisible && (
                <div className="dropdown-content1">
                  <div style={{ marginBottom: '4px', cursor: 'pointer' }}>
                    Edit
                  </div>
                  <div style={{ marginBottom: '4px', cursor: 'pointer' }}>
                    Delete
                  </div>
                  <div style={{ marginBottom: '4px', cursor: 'pointer' }}>
                    Disable
                  </div>
                  <div style={{ marginBottom: '4px', cursor: 'pointer' }}>
                    Enable
                  </div>
                  <div
                    style={{ marginBottom: '4px', cursor: 'pointer' }}
                    onClick={() => handleGroupClick(user.id)}
                  >
                    View details
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <Groups data={user} selectstep={selectstep} />
      </div>
    </div>
  );
}

export default ActiveCards;
