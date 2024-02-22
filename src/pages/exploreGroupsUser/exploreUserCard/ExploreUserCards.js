import Icon from './Icon.js';
import './style.css';
import '../Glo.css';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExploreUserGroups from '../exploreUserGroups/ExploreUserGroup.js';
import Icon2 from './icons/Icon2.js';
import Icon1 from './icons/Icon1.js';

// function ExploreUserGroupCard({ selectstep }) {
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const [userData, setUserData] = useState([]);

//   const toggleDropdown = () => {
//     setDropdownVisible(!dropdownVisible);
//     console.log('toggleDropdown');
//   };
//   const handleGroupClick = (groupId) => {
//     localStorage.setItem('GroupId', groupId);
//     console.log(groupId);
//     selectstep(12);
//   };
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `https://localhost:7240/api/GroupSavings/ListOfExploreGroups` //! pls, don't toouch the url
//         );

//         setUserData(response.data.result);
//         console.log(userData);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchData();
//   }, []);
//   return (
//     <>
//       <div className="group-card-container22">
//         <div className="group-info-container2">
//           <p className="group-title-text-style32" onClick={() => selectstep(2)}>
//             Active Savings Group
//           </p>
//           <Icon1 className="svg-container42" />
//           <p className="group-title-text-style2">Explore Groups</p>
//         </div>
//         <div className="group-card-container12">
//           <p
//             className="group-title-text-style22"
//             style={{ marginLeft: '9.5em' }}
//           >
//             Explore Groups
//           </p>
//           <div
//             className="settings-button-container2"
//             style={{ marginRight: '10em' }}
//           >
//             <Icon2 className="svg-container222" />
//             <p className="filter-text-display-style2">Filter</p>
//           </div>
//         </div>
//       </div>
//       <div style={{ marginTop: '3em', marginLeft: '-5em' }}>
//         <GroupCard>
//           <Header>
//             <img
//               src="/assets/img_194_24282_cfdc0d.jpeg"
//               className="image-container"
//               alt=""
//             />
//           </Header>
//           <Group>
//             <Container>
//               <Button>Waiting</Button>
//               <ImageContainer>
//                 <ImageContainer2>
//                   <div className="contribution-section1">
//                     <img
//                       src="/assets/img_I194_24305_115_2216_e1c0a9.jpeg"
//                       className="rounded-image"
//                       alt=""
//                       style={{ marginLeft: '-14em' }}
//                     />
//                   </div>
//                 </ImageContainer2>
//                 <button className="join-button-style">Join</button>

//                 <div className="dropdown-container">
//                   <Icon
//                     className="svg-container111"
//                     onClick={() => toggleDropdown()}
//                   />
//                   {dropdownVisible && (
//                     <div className="dropdown-content">
//                       <div style={{ marginBottom: '4px', cursor: 'pointer' }}>
//                         Leave Group
//                       </div>
//                       <div style={{ marginBottom: '4px', cursor: 'pointer' }}>
//                         Report Group
//                       </div>
//                       <div
//                         style={{ marginBottom: '4px', cursor: 'pointer' }}
//                         onClick={() => handleGroupClick(1234)}
//                       >
//                         View details
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </ImageContainer>
//             </Container>
//             <ExploreUserGroups selectstep={selectstep} data={userData} />
//           </Group>
//         </GroupCard>
//       </div>
//     </>
//   );
// }

function ExploreUserGroupCard({ selectstep }) {
  const [dropdownVisible, setDropdownVisible] = useState({});
  const [userData, setUserData] = useState([]);

  const toggleDropdown = (groupId) => {
    setDropdownVisible((prevState) => ({
      ...prevState,
      [groupId]: !prevState[groupId],
    }));
  };
  const handleJoinClick = (name) => {
    console.log(name);
  };

  const handleGroupClick = (groupId) => {
    localStorage.setItem('GroupId', groupId);
    console.log(groupId);
    selectstep(12);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7240/api/GroupSavings/ListOfExploreGroups`
        );

        setUserData(response.data.result);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="group-card-container22">
        <div className="group-info-container2">
          <p className="group-title-text-style32" onClick={() => selectstep(2)}>
            Active Savings Group
          </p>
          <Icon1 className="svg-container42" />
          <p className="group-title-text-style2">Explore Groups</p>
        </div>
        <div className="group-card-container12">
          <p
            className="group-title-text-style22"
            style={{ marginLeft: '9.5em' }}
          >
            Explore Groups
          </p>
          <div
            className="settings-button-container2"
            style={{ marginRight: '10em' }}
          >
            <Icon2 className="svg-container222" />
            <p className="filter-text-display-style2">Filter</p>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '2em', marginLeft: '-5em' }}>
        {userData.map((group, index) => (
          <GroupCard key={index} style={{ marginBottom: '1em' }}>
            <Header>
              <img
                src={group.safePortraitImageURL}
                className="image-container"
                alt=""
              />
            </Header>
            <Group>
              <Container>
                <Button>Waiting</Button>
                <ImageContainer>
                  <ImageContainer2>
                    <div className="contribution-section1">
                      <img
                        src="/assets/img_I194_24305_115_2216_e1c0a9.jpeg"
                        className="rounded-image"
                        alt=""
                        style={{ marginLeft: '-14em' }}
                      />
                    </div>
                  </ImageContainer2>
                  <button
                    className="join-button-style"
                    onClick={() => handleJoinClick(group.saveName)}
                  >
                    Join
                  </button>

                  <div className="dropdown-container">
                    <Icon
                      className="svg-container111"
                      onClick={() => toggleDropdown(group.id)}
                    />
                    {dropdownVisible[group.id] && (
                      <div className="dropdown-content">
                        <div style={{ marginBottom: '4px', cursor: 'pointer' }}>
                          Leave Group
                        </div>
                        <div style={{ marginBottom: '4px', cursor: 'pointer' }}>
                          Report Group
                        </div>
                        <div
                          style={{ marginBottom: '4px', cursor: 'pointer' }}
                          onClick={() => handleGroupClick(group.id)}
                        >
                          View details
                        </div>
                      </div>
                    )}
                  </div>
                </ImageContainer>
              </Container>
              <ExploreUserGroups selectstep={selectstep} data={group} />
            </Group>
          </GroupCard>
        ))}
      </div>
    </>
  );
}

export default ExploreUserGroupCard;

const GroupCard = styled.div`
  background: var(--color-white);
  // padding: 10px;
  display: flex;
  padding-right: 25px;
  margin-left: 410px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: auto;
  max-width: 892px;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.16);
`;
const Header = styled.div`
  flex: 0 0 auto;
  padding-top: 54px;
  padding-bottom: 55px;
  margin-left: 3em;
  position: relative;
  left: 9em;
`;

const Group = styled.div`
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  margin-left: 29px;
`;

const Container = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 70%;
`;

const ImageContainer = styled.div`
  flex: 0 1 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: 380px;
`;
const ImageContainer2 = styled.div`
  flex: 0 1 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  height: 47px;
  margin-left: 16em;
`;

const Button = styled.button`
  flex: 0 0 auto;
  border: none;
  border-radius: var(--border-radius-1678);
  font: var(--font-weight-500) var(--font-size-16) 'Inter';
  background: var(--color-lavender-d88d7bed);
  box-sizing: border-box;
  display: block;
  width: 92px;
  min-width: 92px;
  height: 48px;
  color: var(--color-dodgerblue-8a8544b8);
  letter-spacing: 0.08px;
  margin-left: 8em;
`;
