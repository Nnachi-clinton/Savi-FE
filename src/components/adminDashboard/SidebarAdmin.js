// StyledSidebar.js
import React from 'react';
import styled from 'styled-components';
import Dashboard from '../../assets/Dashboard.svg';
import Groups from '../../assets/Groups.svg';
import User from '../../assets/User.svg';
import Transactions from '../../assets/Transactions.svg';
import Settings from '../../assets/Settings.svg';
import Logout from '../../assets/Logout.svg';
import NavbarAdmin from './NavbarAdmin.js';

const Container = styled.div`
  display: flex;
  height: 1136px;
`;

const SidebarContainer = styled.div`
  display: inline-flex;
  height: 1136px;
  width: 271px;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;
  gap: 24px;
  margin-top: 50px;
  flex-shrink: 0;
  background: var(--White, #fff);
  /* Bottom card shadow light */
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.04);
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SidebarListItem = styled.li`
  display: flex;
  width: 223px;
  padding: 10px;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &:hover {
    background-color: #b5179e;
    color: #fff;
    border-radius: 8px;
    cursor: pointer;
  }
`;

const MenuLabel = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  color: var(--Grey-400, #98a2b3);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  letter-spacing: 0.15px;
`;

function SidebarAdmin({ selectstep }) {
  return (
    <Container>
      <SidebarContainer>
        <SidebarList>
          <SidebarListItem onClick={() => selectstep(0)}>
            <div>
              <img src={Dashboard} alt="dashboardIcon" className="house" />
            </div>
            <div>Dashboard</div>
          </SidebarListItem>
          <SidebarListItem onClick={() => selectstep(1)}>
            <div>
              <img src={Groups} alt="GroupsIcon" />
            </div>
            <div>Groups</div>
          </SidebarListItem>
          <SidebarListItem onClick={() => selectstep(2)}>
            <div>
              <img src={User} alt="DefaultersIcon" />
            </div>
            <div>Defaulting Users</div>
          </SidebarListItem>
          <SidebarListItem onClick={() => selectstep(3)}>
            <div>
              <img src={User} alt="UsersIcon" />
            </div>
            <div>Users</div>
          </SidebarListItem>
          <SidebarListItem onClick={() => selectstep(4)}>
            <div>
              <img src={Transactions} alt="ComplaintsIcon" />
            </div>
            <div>Complaints</div>
          </SidebarListItem>
          <MenuLabel>Others</MenuLabel>
          <SidebarListItem onClick={() => selectstep(5)}>
            <div>
              <img src={Settings} alt="SettingsIcon" />
            </div>
            <div>Settings</div>
          </SidebarListItem>
          <SidebarListItem onClick={() => selectstep(6)}>
            <div>
              <img src={Logout} alt="LogoutIcon" />
            </div>
            <div>Logout</div>
          </SidebarListItem>
        </SidebarList>
        <NavbarAdmin />
      </SidebarContainer>
    </Container>
  );
}
export default SidebarAdmin;
