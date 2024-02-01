// StyledSidebar.js
import React from 'react';
import styled from 'styled-components';
import { SidebarData } from './Sidebardata';
import Navbar from '../../dashboards/Savings/Navbar';
import Dashboard from '../../../assets/Dashboard.svg';
import Savings from '../../../assets/Savings.svg';
import Groups from '../../../assets/Groups.svg';
import Transactions from '../../../assets/Transactions.svg';
import Settings from '../../../assets/Settings.svg';
import Logout from '../../../assets/Logout.svg';
import { Link } from 'react-router-dom';

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

function Sidebar({ selectstep }) {
  return (
    <Container>
      <SidebarContainer>
        <SidebarList>
          <MenuLabel>Overview</MenuLabel>
          {/* {SidebarData.slice(0, -2).map((val, key, index) => (
            // <NavLink
            //   key={key}
            //   to={val.link}
            //   style={{ textDecoration: 'none', color: 'inherit' }}
            // >
            <SidebarListItem key={val.index} onClick={selectstep(val.index)}>
              <div>{val.icon}</div>
              <div>{val.title}</div>
            </SidebarListItem>
          ))} */}
          <SidebarListItem onClick={() => selectstep(0)}>
            <div>
              <img src={Dashboard} alt="dashboardIcon" className="house" />
            </div>
            <div>Dashboard</div>
          </SidebarListItem>
          <SidebarListItem onClick={() => selectstep(1)}>
            <div>
              <img src={Savings} alt="savingsIcon" />
            </div>
            <div>Savings</div>
          </SidebarListItem>
          <SidebarListItem onClick={() => selectstep(2)}>
            <div>
              <img src={Groups} alt="groupIcon" />
            </div>
            <div>Groups</div>
          </SidebarListItem>
          <SidebarListItem onClick={() => selectstep(3)}>
            <div>
              <img src={Transactions} alt="transactionIcon" />
            </div>
            <div>Transactions</div>
          </SidebarListItem>
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
        <Navbar />
      </SidebarContainer>
    </Container>
  );
}

// function Sidebar({ step, selectstep }) {
//   // const [step, setStep] = useState(0);
//   const handleItemClick = (index) => {
//     selectstep(index);
//     console.log(step);
//   };
//   return (
//     <Container>
//       {/* <>
//         {step === 0 && (
//           <> */}
//       <SidebarContainer>
//         <SidebarList>
//           <MenuLabel>Overview</MenuLabel>
//           {SidebarData.slice(0, -2).map((val, key) => (
//             <SidebarListItem
//               key={key}
//               // className={`row ${key === 0 ? 'first-item-slice-1' : ''}`}
//               // onClick={() => {
//               //   window.location.pathname = step;
//               // }}
//               onClick={() => handleItemClick(val.index)}
//             >
//               <div>{val.icon}</div>
//               <div>{val.title}</div>
//             </SidebarListItem>
//           ))}
//           <MenuLabel>Others</MenuLabel>
//           {SidebarData.slice(-2).map((val, key) => (
//             <SidebarListItem
//               key={key + SidebarData.length - 2}
//               // className={`row ${key === 0 ? 'first-item-slice-2' : ''}`}
//               // onClick={() => {
//               //   window.location.pathname = val.link;
//               // }}
//               onClick={() => handleItemClick(val.index)}
//             >
//               <div>{val.icon}</div>
//               <div>{val.title}</div>
//             </SidebarListItem>
//           ))}
//         </SidebarList>
//         <Navbar />
//       </SidebarContainer>
//     </Container>
//   );
// }

// function Sidebar() {
//   const [step, setStep] = useState(0);

//   const handleItemClick = (index) => {
//     setStep(index);
//   };

//   return (
//     <>
//       <Container>
//         <SidebarContainer>
//           <SidebarList>
//             {SidebarData.map((item) => (
//               <SidebarListItem
//                 key={item.title}
//                 onClick={() => handleItemClick(item.index)} // Update step to item's index when clicked
//               >
//                 <div>{item.icon}</div>
//                 <div>{item.title}</div>
//               </SidebarListItem>
//             ))}
//           </SidebarList>
//           <Navbar />
//         </SidebarContainer>
//         {step === 0 && <Dashboard />}
//         {/* Render Dashboard only when step === 0 */}
//       </Container>
//     </>
//   );
// }

export default Sidebar;
