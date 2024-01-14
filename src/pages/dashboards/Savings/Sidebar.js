// StyledSidebar.js
import React from 'react';
import styled from 'styled-components';
import { SidebarData } from './Sidebardata';
import Navbar from './Navbar';

const Container = styled.div`
  display: flex;
`;

const SidebarContainer = styled.div`
  display: inline-flex;
  height: 1136px;
  width: 271px;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
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

function Sidebar() {
  return (
    <Container>
      <SidebarContainer>
        <SidebarList>
        <MenuLabel>Overview</MenuLabel>
          {SidebarData.slice(0, -2).map((val, key) => (
            <SidebarListItem
              key={key}
              // className={`row ${key === 0 ? 'first-item-slice-1' : ''}`}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div>{val.icon}</div>
              <div>{val.title}</div>
            </SidebarListItem>
          ))}
          <MenuLabel>Others</MenuLabel>
          {SidebarData.slice(-2).map((val, key) => (
            <SidebarListItem
              key={key + SidebarData.length - 2}
              // className={`row ${key === 0 ? 'first-item-slice-2' : ''}`}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div>{val.icon}</div>
              <div>{val.title}</div>
            </SidebarListItem>
          ))}
        </SidebarList>
      </SidebarContainer>
      <Navbar />
    </Container>
  );
}

export default Sidebar;