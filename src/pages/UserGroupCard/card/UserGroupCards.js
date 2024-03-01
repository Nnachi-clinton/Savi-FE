import Icon from './Icon.js';
import './style.css';
import '../Glo.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserGroup from '../groups/UserGroup.js';
import styled from 'styled-components';

function UserGroupCards({ selectstep }) {
  const [userData, setUserData] = useState([]);
  const handleGroupClick = () => {
    selectstep(9);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7240/api/GroupSavings/ListOfActiveGroups` //! pls, don't change this url
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
      <Span style={{ marginBottom: '2em' }}>
        <Div2 style={{ marginLeft: '13em' }}>Active Savings</Div2>
        <Div3 style={{ marginRight: '8em' }} onClick={() => selectstep(11)}>
          Explore Groups
        </Div3>
      </Span>
      {userData.length === 0 ? (
        <Span2>
          <Div4>You don’t have any active saving group, you can</Div4>
          <LinkText>
            <span
              onClick={() => handleGroupClick()}
              style={{ paddingRight: '0.3em' }}
            >
              Create a new group
            </span>
            or <span>explore groups</span>
          </LinkText>
        </Span2>
      ) : (
        userData.map((user, index) => (
          <UserGroupSection key={index} user={user} selectstep={selectstep} />
        ))
      )}
    </div>
  );
}

function UserGroupSection({ user, selectstep }) {
  const [dropdownVisible, setDropdownVisible] = useState({});
  const toggleDropdown = (groupId) => {
    setDropdownVisible((prevState) => ({
      ...prevState,
      [groupId]: !prevState[groupId],
    }));
  };
  const handleGroupClick = (groupId) => {
    localStorage.setItem('GroupId', groupId);
    console.log(groupId);
    selectstep(10);
  };
  return (
    <div className="savings-group-card-user" style={{ marginBottom: '1em' }}>
      <div className="header-container12">
        <img
          src={user.safePortraitImageURL}
          className="image-container12"
          alt=""
        />
      </div>
      <div className="money-palava-savers-container112">
        <div className="flex-container12">
          <button className="button-waiting12">Ongoing</button>
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
              <Icon
                className="svg-container12"
                onClick={() => toggleDropdown(user.id)}
              />
              {dropdownVisible[user.id] && (
                <div
                  className="dropdown-content"
                  style={{ marginLeft: '6em', marginTop: '-2em' }}
                >
                  <div style={{ marginBottom: '4px', cursor: 'pointer' }}>
                    Leave Group
                  </div>
                  <div style={{ marginBottom: '4px', cursor: 'pointer' }}>
                    Report Group
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
        <UserGroup data={user} selectstep={selectstep} />
      </div>
    </div>
  );
}

export default UserGroupCards;

const Div2 = styled.div`
  color: #000;
  letter-spacing: 0.15px;
  flex-grow: 1;
  flex-basis: auto;
  margin-right: 0em;
  font: 700 32px/140% Inter, sans-serif;
`;

const Div3 = styled.div`
  color: var(--Blue-1, #2f80ed);
  letter-spacing: 0.08px;
  margin: auto 0;
  cursor: pointer;
  font: 500 16px/100% Inter, sans-serif;
`;
const Span = styled.span`
  justify-content: space-between;
  display: flex;
  width: 100%;
  gap: 10px;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;
const Span2 = styled.span`
  align-self: center;
  display: flex;
  margin-top: 330px;
  margin-left: 32em;
  flex-direction: column;
  padding: 10px 10px 0;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div4 = styled.div`
  color: #000;
  text-align: center;
  letter-spacing: 0.08px;
  white-space: nowrap;
  font: 500 16px/168% Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const LinkText = styled.div`
  // display: flex;
  margin-left: 28em;
  gap: 0.5em !important;
  padding: 0.5em;

  span {
    color: #2f80ed;
    text-align: center;
    letter-spacing: 0.08px;
    white-space: nowrap;
    font: 500 16px/168% Inter, sans-serif;
    cursor: pointer;
    margin-top: 10px;

    &:not(:last-child) {
    }
  }

  @media (max-width: 991px) {
    flex-direction: column;
    span {
      margin-top: 0;
      margin-right: 0;
    }
  }
`;
