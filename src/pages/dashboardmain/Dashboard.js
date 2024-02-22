import { useState, useCallback, useEffect } from 'react';
import DepositFunds from '../../components/dashboard/DepositFunds';
import PortalPopup from '../../components/dashboard/PortalPopup';
import WithdrawFunds from '../../components/dashboard/WithdrawFunds';
import KYC from '../../components/dashboard/KYC';
import styled from 'styled-components';
import axios from 'axios';
import Sidebar from '../dashboards/Savings/Sidebar';
import Personalsavings2 from '../savings/PersonalSavings2';
import AddGoals from '../savings/AddGoals';
import Modal from '../savings/SavingUpdateModal';
import PersonalSavingDetailsPage from '../savings/PersonalSavingDetailsPage';
import ProgressBar from '../../components/dashboard/ProgressBar';
import { useNavigate } from 'react-router-dom';
import EmptyGroupSavings from '../../pages/GroupSavings/EmptyGroupSavings';
import AddGroupSavings from '../GroupSavings/AddGroupSavings.js';
import UserGroupCards from '../UserGroupCard/card/UserGroupCards.js';
import DashboardSection from '../ExploreActiveGroups/DashboardSection/DashboardSection.js';
import ActiveCards from '../ExploreGroupAdmin copy/card/ActiveCards.js';
import ExploreUserGroupCard from '../exploreGroupsUser/exploreUserCard/ExploreUserCards.js';
import UserDashboardSection from '../ExploreActiveGroups copy/userDashboardSection/UserDashboardSection2.js';

const WelcomeBackJohn1 = styled.b`
  position: relative;
  line-height: 140%;
`;
const EmojiIcon1 = styled.img`
  position: relative;
  width: 1rem;
  height: 1.12rem;
  object-fit: cover;
`;
const Savi = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
`;
const EmojiParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xk);
  font-size: var(--text-md-medium-size);
  color: var(--grey-400);
`;
const WelcomeBackJohnDoeParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xc);
  font-size: var(--headline-medium-24-size);
`;
const AccountBalanceWalletIcon1 = styled.img`
  position: relative;
  width: 2rem;
  height: 2rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  margin-right: 45px;
`;
const DotsVerticalIcon4 = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  display: none;
`;
const AccountBalanceWalletParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const GlobalWallet = styled.div`
  position: relative;
  line-height: 1.25rem;
  font-weight: 600;
`;
const Div = styled.div`
  position: relative;
  font-size: var(--headline-medium-24-size);
  letter-spacing: 0.01em;
  line-height: 1.25rem;
  font-weight: 600;
`;
const GlobalWalletParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-9xc);
  font-size: var(--input-small-medium-size);
`;
const Div1 = styled.div`
  position: relative;
  letter-spacing: 0.01em;
  line-height: 1.25rem;
  font-weight: 600;
`;
const ArrowIcon4 = styled.img`
  position: relative;
  width: 1rem;
  height: 1rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const Parent1 = styled.div`
  border-radius: var(--br-81xl);
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) var(--padding-3xk);
`;
const ThanLastMonth4 = styled.div`
  position: relative;
  font-size: var(--input-small-medium-size);
  line-height: 1.25rem;
  color: var(--grey-200);
`;
const AddIcon8 = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  cursor: pointer;
`;
const SendIcon5 = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.52rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  cursor: pointer;
`;
const AddParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xk);
`;
const FrameParent1 = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base1);
  color: var(--red);
`;
const Deposit = styled.div`
  position: relative;
  line-height: 1.5rem;
  font-weight: 500;
`;
const AddGroup = styled.div`
  border-radius: var(--br-base);
  background-color: rgba(245, 185, 237, 0.6);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xf) var(--padding-5xc);
  gap: var(--gap-5xk);
`;
const SendParent = styled.div`
  border-radius: var(--br-base);
  border: 1px solid var(--white);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xf) var(--padding-5xc);
  gap: var(--gap-5xk);
`;
const FrameParent2 = styled.div`
  width: 16.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const FrameDiv = styled.div`
  border-radius: var(--br-base);
  background-color: var(--savi-500);
  box-shadow: var(--bottom-card-shadow-light);
  border: 1px solid var(--grey-200);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base1);
  gap: var(--gap-5xk);
  color: var(--white);
`;
const SafeLock = styled.div`
  position: relative;
  line-height: 1.25rem;
`;
const AddContainer = styled.div`
  align-self: stretch;
  border-radius: var(--br-base);
  background-color: var(--primary-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-9xf) var(--padding-13xl) var(--padding-9xf)
    var(--padding-base1);
  color: var(--white);
`;
const Group = styled.div`
  border-radius: var(--br-81xl);
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xf) var(--padding-3xk);
`;
const ThanLastMonth5 = styled.div`
  position: relative;
  font-size: var(--input-small-medium-size);
  line-height: 1.25rem;
  color: var(--grey-400);
  display: none;
`;
const DepositAndWithdraw3 = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xk);
`;
const FrameParent3 = styled.div`
  border-radius: var(--br-base);
  background-color: var(--white);
  box-shadow: var(--bottom-card-shadow-light);
  border: 1px solid var(--grey-200);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base1) var(--padding-5xc) var(--padding-base1)
    var(--padding-base1);
  gap: var(--gap-5xk);
`;
const ArrowIcon6 = styled.img`
  position: relative;
  width: 1rem;
  height: 1rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: contain;
`;
const FrameParent6 = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base1);
  color: var(--main-primary-color);
`;
const FrameParent5 = styled.div`
  border-radius: var(--br-base);
  background-color: var(--white);
  box-shadow: var(--bottom-card-shadow-light);
  border: 1px solid var(--grey-200);
  box-sizing: border-box;
  width: 11.81rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base1) var(--padding-5xc) var(--padding-base1)
    var(--padding-base1);
  gap: var(--gap-5xk);
`;
const FrameParent7 = styled.div`
  border-radius: var(--br-base);
  background-color: var(--white);
  box-shadow: var(--bottom-card-shadow-light);
  border: 1px solid var(--grey-200);
  box-sizing: border-box;
  width: 11.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base1) var(--padding-5xc) var(--padding-base1)
    var(--padding-base1);
  gap: var(--gap-5xk);
`;
const FrameGroup = styled.div`
  background-color: var(--grey-50);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-5xm) 1.06rem;
  gap: 2.25rem;
  text-align: center;
  font-size: var(--text-md-medium-size);
`;
const TotalIncome = styled.div`
  position: relative;
  line-height: 1.25rem;
  text-transform: uppercase;
`;
const ChevronDownIcon2 = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const TotalIncomeParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-5xk);
`;
const Last12Months1 = styled.div`
  position: relative;
  letter-spacing: 0.01em;
  font-weight: 500;
`;
const Last12MonthsParent = styled.div`
  border-radius: var(--br-5xs);
  border: 1px solid var(--grey-500);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-11xs) var(--padding-9xf);
  color: #475569;
`;
const FrameParent11 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Div8 = styled.div`
  position: absolute;
  top: 0%;
  left: -62.94%;
  letter-spacing: 0.01em;
  line-height: 0.65rem;
  font-weight: 500;
`;
const LineChartAxesLabel = styled.div`
  position: relative;
  width: 0.89rem;
  height: 0.65rem;
`;
const Feb = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  letter-spacing: 0.01em;
  line-height: 0.65rem;
  font-weight: 500;
`;
const YaxesLabels = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;
const GridLine6 = styled.div`
  position: relative;
  background-color: var(--gray-200);
  width: 36.56rem;
  height: 0.04rem;
  z-index: 0;
`;
const GridLine7 = styled.div`
  position: relative;
  background-color: var(--gray-200);
  width: 36.56rem;
  height: 0.04rem;
  z-index: 1;
`;
const GridLine8 = styled.div`
  position: relative;
  background-color: var(--gray-200);
  width: 36.56rem;
  height: 0.04rem;
  z-index: 2;
`;
const GridLine9 = styled.div`
  position: relative;
  background-color: var(--gray-200);
  width: 36.56rem;
  height: 0.04rem;
  z-index: 3;
`;
const GridLine10 = styled.div`
  position: relative;
  background-color: var(--gray-200);
  width: 36.56rem;
  height: 0.04rem;
  z-index: 4;
`;
const GridLine11 = styled.div`
  position: relative;
  background-color: var(--gray-200);
  width: 36.56rem;
  height: 0.04rem;
  z-index: 5;
`;
const DefaultLineChart1 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 46.8px);
  left: 0rem;
  width: 36.56rem;
  height: 6.22rem;
  object-fit: cover;
  z-index: 6;
`;
const DefaultLineChartGradient1 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 46.8px);
  left: 0rem;
  width: 36.56rem;
  height: 6.22rem;
  object-fit: cover;
  z-index: 7;
`;
const PointerIcon46 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 8.17rem;
  left: 0.2rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 8;
`;
const PointerIcon47 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 5.2rem;
  left: 3.49rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 9;
`;
const PointerIcon48 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 4.71rem;
  left: 6.7rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 10;
`;
const PointerIcon49 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.62rem;
  left: 9.91rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 11;
`;
const PointerIcon50 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 2.32rem;
  left: 13.28rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 12;
`;
const PointerIcon51 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 5.48rem;
  left: 16.45rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 13;
`;
const PointerIcon52 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.91rem;
  left: 19.66rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 14;
`;
const PointerIcon53 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 5.61rem;
  left: 22.99rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 15;
`;
const PointerIcon54 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 3.05rem;
  left: 26.2rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 16;
`;
const PointerIcon55 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 3.74rem;
  left: 29.41rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 17;
`;
const PointerIcon56 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 5.04rem;
  left: 32.7rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 18;
`;
const PointerIcon57 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 4.92rem;
  left: 35.95rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 19;
`;
const SecondaryChartIcon = styled.img`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 34.45px);
  left: 0rem;
  width: 36.56rem;
  height: 4.67rem;
  object-fit: cover;
  display: none;
  z-index: 20;
`;
const SecondaryChartGradient1 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 34.45px);
  left: 0rem;
  width: 36.56rem;
  height: 4.67rem;
  object-fit: cover;
  display: none;
  z-index: 21;
`;
const PointerIcon58 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 7.56rem;
  left: 0.2rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 22;
`;
const PointerIcon59 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.42rem;
  left: 3.49rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 23;
`;
const PointerIcon60 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 4.47rem;
  left: 6.7rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 24;
`;
const PointerIcon61 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 3.17rem;
  left: 9.91rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 25;
`;
const PointerIcon62 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.54rem;
  left: 13.28rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 26;
`;
const PointerIcon63 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 5.73rem;
  left: 16.45rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 27;
`;
const PointerIcon64 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 5.61rem;
  left: 19.66rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 28;
`;
const PointerIcon65 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 7.52rem;
  left: 22.99rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 29;
`;
const PointerIcon66 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.58rem;
  left: 26.2rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 30;
`;
const PointerIcon67 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 7.64rem;
  left: 29.41rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 31;
`;
const PointerIcon68 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.18rem;
  left: 32.7rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 32;
`;
const PointerIcon69 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 4.14rem;
  left: 35.95rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 33;
`;
const Title = styled.b`
  position: relative;
  letter-spacing: 0.01em;
  line-height: 0.65rem;
  color: var(--gray-400);
  z-index: 0;
`;
const SecondaryContent = styled.div`
  position: relative;
  letter-spacing: 0.01em;
  line-height: 0.65rem;
  font-weight: 500;
  color: var(--gray-300);
  display: none;
  z-index: 1;
`;
const CommandIcon4 = styled.img`
  position: relative;
  width: 0.49rem;
  height: 0.49rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const Shortcut = styled.div`
  border-radius: var(--br-11xs-3);
  background-color: var(--white-white-15);
  height: 0.65rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0rem 0.16rem;
  box-sizing: border-box;
`;
const ShortcutHints = styled.div`
  align-self: stretch;
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-10xs-6);
  z-index: 2;
`;
const LegendIndicator8 = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: var(--blue-500);
  width: 0.33rem;
  height: 0.33rem;
`;
const K = styled.div`
  position: relative;
  letter-spacing: 0.01em;
  line-height: 0.65rem;
  font-weight: 500;
`;
const Indicator1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-10xs-6);
  z-index: 3;
`;
const LegendIndicator9 = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: var(--teal-500);
  width: 0.33rem;
  height: 0.33rem;
`;
const Indicator2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-10xs-6);
  z-index: 4;
`;
const TopBeakIcon4 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: -0.41rem;
  left: calc(50% - 8.1px);
  border-radius: 0.65px;
  width: 0.98rem;
  height: 0.61rem;
  object-fit: cover;
  display: none;
  z-index: 5;
`;
const RightBeakIcon4 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 8.4px);
  right: -1.22rem;
  border-radius: 0.65px;
  width: 0.73rem;
  height: 0.98rem;
  object-fit: contain;
  display: none;
  z-index: 6;
`;
const BottomBeakIcon4 = styled.img`
  position: absolute;
  margin: 0 !important;
  bottom: -1.07rem;
  left: calc(50% - 8.1px);
  border-radius: 0.65px;
  width: 0.98rem;
  height: 0.61rem;
  object-fit: cover;
  display: none;
  z-index: 7;
`;
const LeftBeakIcon4 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 8.4px);
  left: -0.41rem;
  border-radius: 0.65px;
  width: 0.61rem;
  height: 0.98rem;
  object-fit: contain;
  z-index: 8;
`;
const Tooltip1 = styled.div`
  border-radius: var(--br-9xs-9);
  background-color: var(--label-color-light-primary);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.33rem 0.41rem;
  position: relative;
  gap: var(--gap-10xs-6);
`;
const Tooltips = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 3.13rem;
  left: 24.74rem;
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 34;
`;
const OnHoverIndicator1 = styled.div`
  position: absolute;
  margin: 0 !important;
  height: 100%;
  width: 0.11%;
  top: 0.37%;
  right: 34.89%;
  bottom: -0.37%;
  left: 65%;
  background-color: var(--gray-200);
  display: none;
  z-index: 35;
`;
const TopBeakIcon5 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: -0.41rem;
  left: calc(50% - 7.75px);
  border-radius: 0.65px;
  width: 0.98rem;
  height: 0.61rem;
  object-fit: cover;
  display: none;
  z-index: 5;
`;
const RightBeakIcon5 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 8.4px);
  right: -1.24rem;
  border-radius: 0.65px;
  width: 0.73rem;
  height: 0.98rem;
  object-fit: contain;
  display: none;
  z-index: 6;
`;
const BottomBeakIcon5 = styled.img`
  position: absolute;
  margin: 0 !important;
  bottom: -1.07rem;
  left: calc(50% - 7.75px);
  border-radius: 0.65px;
  width: 0.98rem;
  height: 0.61rem;
  object-fit: cover;
  z-index: 7;
`;
const LeftBeakIcon5 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 8.4px);
  left: -0.41rem;
  border-radius: 0.65px;
  width: 0.61rem;
  height: 0.98rem;
  object-fit: contain;
  display: none;
  z-index: 8;
`;
const Tooltips1 = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 1.5rem;
  left: 17.96rem;
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 36;
`;
const Title2 = styled.div`
  position: relative;
  font-size: var(--font-size-3xs-1);
  letter-spacing: 0.01em;
  line-height: 0.81rem;
  font-weight: 600;
  color: var(--gray-400);
  display: none;
  z-index: 0;
`;
const LegendIndicator12 = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: var(--primary-color);
  width: 0.33rem;
  height: 0.33rem;
`;
const B = styled.b``;
const K5 = styled.span`
  font-weight: 500;
`;
const K4 = styled.div`
  position: relative;
  letter-spacing: 0.01em;
  line-height: 0.65rem;
`;
const Indicator12 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-10xs-6);
  z-index: 3;
  font-size: var(--input-small-medium-size);
`;
const Indicator22 = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-10xs-6);
  z-index: 4;
`;
const TopBeakIcon6 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: -0.41rem;
  left: calc(50% - 8.15px);
  border-radius: 0.65px;
  width: 0.98rem;
  height: 0.61rem;
  object-fit: cover;
  display: none;
  z-index: 5;
`;
const RightBeakIcon6 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 7.3px);
  right: -0.52rem;
  border-radius: 0.65px;
  width: 0.73rem;
  height: 0.98rem;
  object-fit: contain;
  display: none;
  z-index: 6;
`;
const BottomBeakIcon6 = styled.img`
  position: absolute;
  margin: 0 !important;
  bottom: -1.02rem;
  left: calc(50% - 8.15px);
  border-radius: 0.65px;
  width: 0.98rem;
  height: 0.61rem;
  object-fit: cover;
  z-index: 7;
`;
const LeftBeakIcon6 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 7.3px);
  left: -0.41rem;
  border-radius: 0.65px;
  width: 0.61rem;
  height: 0.98rem;
  object-fit: contain;
  display: none;
  z-index: 8;
`;
const Tooltips2 = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 2.28rem;
  left: 14.75rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 37;
`;
const Title3 = styled.div`
  position: relative;
  font-size: var(--font-size-3xs-1);
  letter-spacing: 0.01em;
  line-height: 0.81rem;
  font-weight: 600;
  color: var(--gray-400);
  z-index: 0;
`;
const SecondaryContent3 = styled.div`
  position: relative;
  letter-spacing: 0.01em;
  line-height: 0.65rem;
  font-weight: 500;
  z-index: 1;
`;
const LegendIndicator14 = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: var(--blue-500);
  width: 0.33rem;
  height: 0.33rem;
  display: none;
`;
const Indicator13 = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-10xs-6);
  z-index: 3;
`;
const LegendIndicator15 = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: var(--teal-500);
  width: 0.33rem;
  height: 0.33rem;
  display: none;
`;
const TopBeakIcon7 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: -0.41rem;
  left: calc(50% - 7.2px);
  border-radius: 0.65px;
  width: 0.98rem;
  height: 0.61rem;
  object-fit: cover;
  display: none;
  z-index: 5;
`;
const RightBeakIcon7 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 7.1px);
  right: -1.21rem;
  border-radius: 0.65px;
  width: 0.73rem;
  height: 0.98rem;
  object-fit: contain;
  display: none;
  z-index: 6;
`;
const BottomBeakIcon7 = styled.img`
  position: absolute;
  margin: 0 !important;
  bottom: -1.04rem;
  left: calc(50% - 7.2px);
  border-radius: 0.65px;
  width: 0.98rem;
  height: 0.61rem;
  object-fit: cover;
  z-index: 7;
`;
const LeftBeakIcon7 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 7.1px);
  left: -0.41rem;
  border-radius: 0.65px;
  width: 0.61rem;
  height: 0.98rem;
  object-fit: contain;
  display: none;
  z-index: 8;
`;
const Tooltips3 = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 4.27rem;
  left: 10.2rem;
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 38;
`;
const DefaultStrongLineChart1 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 5.56rem;
  left: 0rem;
  width: 36.56rem;
  height: 2.32rem;
  object-fit: cover;
  display: none;
  z-index: 39;
`;
const PointerIcon70 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.38rem;
  left: 1.3rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 40;
`;
const PointerIcon71 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.7rem;
  left: 2.97rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 41;
`;
const PointerIcon72 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.01rem;
  left: 4.59rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 42;
`;
const PointerIcon73 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 7.23rem;
  left: 6.13rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 43;
`;
const PointerIcon74 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 7.11rem;
  left: 7.68rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 44;
`;
const PointerIcon75 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.13rem;
  left: 9.26rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 45;
`;
const PointerIcon76 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 7.11rem;
  left: 10.85rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 46;
`;
const PointerIcon77 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 7.64rem;
  left: 12.43rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 47;
`;
const PointerIcon78 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.34rem;
  left: 14.02rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 48;
`;
const PointerIcon79 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 5.93rem;
  left: 15.6rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 49;
`;
const PointerIcon80 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.91rem;
  left: 17.18rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 50;
`;
const PointerIcon81 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 5.36rem;
  left: 18.81rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 51;
`;
const PointerIcon82 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.38rem;
  left: 20.35rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 52;
`;
const PointerIcon83 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.7rem;
  left: 21.94rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 53;
`;
const PointerIcon84 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.09rem;
  left: 23.52rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 54;
`;
const PointerIcon85 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 7.23rem;
  left: 25.11rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 55;
`;
const PointerIcon86 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 7.11rem;
  left: 26.69rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 56;
`;
const PointerIcon87 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.13rem;
  left: 28.28rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 57;
`;
const PointerIcon88 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 7.11rem;
  left: 29.86rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 58;
`;
const PointerIcon89 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 7.64rem;
  left: 31.44rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 59;
`;
const PointerIcon90 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.38rem;
  left: 33.03rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 60;
`;
const PointerIcon91 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 5.93rem;
  left: 34.61rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 61;
`;
const SecondaryDashedLineChart1 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 9.03rem;
  left: 0rem;
  width: 36.56rem;
  height: 0.31rem;
  object-fit: cover;
  display: none;
  z-index: 62;
`;
const ChartContent = styled.div`
  height: 10.97rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  text-align: center;
  font-size: var(--font-size-5xs-8);
  color: var(--white);
`;
const Inline = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xs-5);
`;
const Jan = styled.div`
  position: absolute;
  top: 1.92%;
  left: -33.57%;
  letter-spacing: 0.01em;
  line-height: 0.65rem;
`;
const XaxesLabels = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0rem 0rem 0rem 1.3rem;
`;
const LineChart1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xs-5);
`;
const LineChart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: var(--gray-400);
`;
const FrameParent10 = styled.div`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xm);
  gap: var(--gap-5xm);
`;
const ViewAll = styled.div`
  position: relative;
  line-height: 1.25rem;
  font-weight: 600;
  color: var(--blue-1);
`;
const UpcomingActivitiesParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8.63rem;
`;
const FrameChild = styled.img`
  border-radius: var(--br-4xs);
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const May2920233 = styled.div`
  position: relative;
  line-height: 1.25rem;
  color: var(--grey-400);
`;
const ContributionToLagosCorpGroParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-12xs);
`;
const Div14 = styled.div`
  position: relative;
  line-height: 1.25rem;
  color: var(--red);
`;
const FrameParent14 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-15xl);
`;
const Divider7 = styled.div`
  position: relative;
  background-color: var(--grey-300);
  width: 22.63rem;
  height: 0.06rem;
`;
const Div15 = styled.div`
  position: relative;
  line-height: 1.25rem;
  color: var(--main-primary-color);
`;
const FrameParent13 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xl);
`;
const FrameParent12 = styled.div`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base1);
  gap: var(--gap-base1);
  text-align: center;
`;
const FrameParent9 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xm);
`;
const RecentlyWrapper = styled.div`
  border-bottom: 1px solid var(--blue-1);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-9xf);
  color: var(--blue-1);
`;
const FrameParent22 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base1);
  color: var(--grey-500);
`;
const TransactionHistoryParent = styled.div`
  width: 38.56rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;
const TypeParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7.5rem;
`;
const ReceiverParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 12.5rem;
  color: var(--grey-500);
`;
const LagosCorpGroupParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-31xl);
`;
const BoladeAdegbeteParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-111xl);
`;
const Divider10 = styled.div`
  position: relative;
  background-color: var(--gray-2001);
  width: 39.19rem;
  height: 0.06rem;
`;
const FrameParent23 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.56rem;
`;
const FrameParent21 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base1);
  gap: var(--gap-base1);
`;
const MyGoals = styled.div`
  position: relative;
  letter-spacing: 0.01em;
  line-height: 1.25rem;
  text-transform: uppercase;
`;
const ViewAll1 = styled.div`
  position: relative;
  line-height: 1.25rem;
  color: var(--blue-1);
  cursor: pointer;
`;
const MyGoalsParent = styled.div`
  background-color: var(--white);
  width: 21.75rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;
const AirplaneIcon1 = styled.img`
  position: relative;
  width: 1.88rem;
  height: 1.88rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const Span3 = styled.span``;
const Span = styled.span`
  color: var(--color-gainsboro-100);
`;
const AirplaneParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xd);
`;
const FrameParent26 = styled.div`
  width: 21.13rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-22xl);
`;
const RectangleDiv = styled.div`
  position: relative;
  border-radius: var(--br-5xs);
  background-color: var(--primary-color);
  width: 1.25rem;
  height: 0.25rem;
`;
const FrameChild5 = styled.div`
  position: relative;
  border-radius: var(--br-5xs);
  background-color: var(--color-gainsboro-100);
  width: 1.25rem;
  height: 0.25rem;
`;
const RectangleParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xk);
  gap: var(--gap-3xs);
`;
const FrameParent25 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FrameParent28 = styled.div`
  width: 21.19rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0rem 4.25rem 0rem 0rem;
  box-sizing: border-box;
  gap: var(--gap-22xl);
`;
const FrameParent27 = styled.div`
  width: 21.19rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FrameParent30 = styled.div`
  width: 21.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-22xl);
`;
const FrameParent24 = styled.div`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base1);
  gap: var(--gap-base1);
`;
const FrameParent = styled.div`
  position: absolute;
  top: 8.63rem;
  left: 19.44rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
`;
const VuesaxbulkmessageQuestionIcon1 = styled.img`
  position: absolute;
  top: 65.56rem;
  left: 84.88rem;
  width: 3.13rem;
  height: 3.13rem;
  object-fit: cover;
  cursor: pointer;
`;
const CompleteAccountSetup1 = styled.span`
  font-weight: 600;
  font-family: var(--text-md-medium);
`;
const ClickHere = styled.span`
  text-decoration: underline;
`;
const CompleteAccountSetupContainer = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  cursor: pointer;
`;
const CompleteAccountSetupClickWrapper = styled.div`
  background-color: var(--primary-color);
  width: 73.44rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-3xk);
  box-sizing: border-box;
  color: var(--white);
`;
const NavbardefaultTypeParent = styled.div`
  position: absolute;
  top: 0rem;
  left: 16.94rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--text-md-medium-size);
`;
const DashboardRoot = styled.div`
  position: relative;
  background-color: var(--grey-50);
  width: 1446px;
  height: 69.81rem !important;
  overflow: hidden;
  text-align: left;
  font-size: var(--input-small-medium-size);
  color: var(--main-text);
  font-family: var(--text-md-medium);
  margin-top: -76em;
`;
const BoldText = styled.span`
  font-weight: bold;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 8px;
`;

const DashBoard = () => {
  const navigate = useNavigate();
  const [isDepositFundsOpen, setDepositFundsOpen] = useState(false);
  const [isWithdrawFundsOpen, setWithdrawFundsOpen] = useState(false);
  const [isDepositFunds1Open, setDepositFunds1Open] = useState(false);
  const [isWithdrawFunds1Open, setWithdrawFunds1Open] = useState(false);
  const [isDepositFunds2Open, setDepositFunds2Open] = useState(false);
  const [isDepositFunds3Open, setDepositFunds3Open] = useState(false);
  const [isWithdrawFunds2Open, setWithdrawFunds2Open] = useState(false);
  const [isDepositFunds4Open, setDepositFunds4Open] = useState(false);
  const [isDepositFunds5Open, setDepositFunds5Open] = useState(false);
  const [isWithdrawFunds3Open, setWithdrawFunds3Open] = useState(false);
  const [isDepositFunds6Open, setDepositFunds6Open] = useState(false);
  const [isDepositFunds7Open, setDepositFunds7Open] = useState(false);
  const [isWithdrawFunds4Open, setWithdrawFunds4Open] = useState(false);
  const [isMessagePopupOpen, setMessagePopupOpen] = useState(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isKYCOpen, setKYCOpen] = useState(false);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const currentDate = new Date().toLocaleDateString('en-US', options);
  const [step, setStep] = useState(0);
  const handleStep = (step) => {
    setStep(step);
  };

  const openDepositFunds = useCallback(() => {
    setDepositFundsOpen(true);
  }, []);

  const closeDepositFunds = useCallback(() => {
    setDepositFundsOpen(false);
  }, []);

  const openWithdrawFunds = useCallback(() => {
    setWithdrawFundsOpen(true);
  }, []);

  const closeWithdrawFunds = useCallback(() => {
    setWithdrawFundsOpen(false);
  }, []);

  const openDepositFunds1 = useCallback(() => {
    setDepositFunds1Open(true);
  }, []);

  const closeDepositFunds1 = useCallback(() => {
    setDepositFunds1Open(false);
  }, []);

  const openWithdrawFunds1 = useCallback(() => {
    setWithdrawFunds1Open(true);
  }, []);

  const closeWithdrawFunds1 = useCallback(() => {
    setWithdrawFunds1Open(false);
  }, []);

  const openDepositFunds2 = useCallback(() => {
    setDepositFunds2Open(true);
  }, []);

  const closeDepositFunds2 = useCallback(() => {
    setDepositFunds2Open(false);
  }, []);

  const openDepositFunds3 = useCallback(() => {
    setDepositFunds3Open(true);
  }, []);

  const closeDepositFunds3 = useCallback(() => {
    setDepositFunds3Open(false);
  }, []);

  const openWithdrawFunds2 = useCallback(() => {
    setWithdrawFunds2Open(true);
  }, []);

  const closeWithdrawFunds2 = useCallback(() => {
    setWithdrawFunds2Open(false);
  }, []);

  const openDepositFunds4 = useCallback(() => {
    setDepositFunds4Open(true);
  }, []);

  const closeDepositFunds4 = useCallback(() => {
    setDepositFunds4Open(false);
  }, []);

  const openDepositFunds5 = useCallback(() => {
    setDepositFunds5Open(true);
  }, []);

  const closeDepositFunds5 = useCallback(() => {
    setDepositFunds5Open(false);
  }, []);

  const openWithdrawFunds3 = useCallback(() => {
    setWithdrawFunds3Open(true);
  }, []);

  const closeWithdrawFunds3 = useCallback(() => {
    setWithdrawFunds3Open(false);
  }, []);

  const openDepositFunds6 = useCallback(() => {
    setDepositFunds6Open(true);
  }, []);

  const closeDepositFunds6 = useCallback(() => {
    setDepositFunds6Open(false);
  }, []);

  const openDepositFunds7 = useCallback(() => {
    setDepositFunds7Open(true);
  }, []);

  const closeDepositFunds7 = useCallback(() => {
    setDepositFunds7Open(false);
  }, []);

  const openWithdrawFunds4 = useCallback(() => {
    setWithdrawFunds4Open(true);
  }, []);

  const closeWithdrawFunds4 = useCallback(() => {
    setWithdrawFunds4Open(false);
  }, []);

  // const onViewAllText1Click = useCallback(() => {
  //   // Please sync "Personal Saving" to the project
  // }, []);

  const openMessagePopup = useCallback(() => {
    setMessagePopupOpen(true);
  }, []);

  const closeMessagePopup = useCallback(() => {
    setMessagePopupOpen(false);
  }, []);

  const closeLogoutModal = useCallback(() => {
    setLogoutModalOpen(false);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const openKYC = useCallback(() => {
    setKYCOpen(true);
  }, []);

  const closeKYC = useCallback(() => {
    setKYCOpen(false);
  }, []);
  const [userData, setUserData] = useState({});
  const [walletData, setWalletData] = useState({});
  const [walletData2, setWalletData2] = useState({});
  const [goals, setGoals] = useState([]);
  const [displayedGoals, setDisplayedGoals] = useState(3);

  const Id = localStorage.getItem('Id');
  console.log(Id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7240/api/User/${Id}`
        );

        setUserData(response.data);
        console.log(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response2 = await axios.get(
          `https://localhost:7240/api/Wallet/${Id}`
        );
        setWalletData(response2.data.result);
        console.log(response2.data);
        console.log(response2.data.result);
        console.log(response2.data.result.balance);
        localStorage.setItem('walletBalance', response2.data.result.balance);
        const wallet = response2.data.result.id;
        console.log(wallet);
        localStorage.setItem('walletId', wallet);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);
  console.log(userData.firstName);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response3 = await axios.get(
          `https://localhost:7240/api/Savings/totalGoalAmount/${Id}`
        );
        setWalletData2(response3.data);
        console.log(response3.data);
        console.log(response3.data.result);
        // console.log(response3.data.result.balance);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!Id) {
          console.error('User ID is missing.'); // Log an error if ID is missing
          return;
        }

        const response = await axios.get(
          `https://localhost:7240/api/Savings/listAllGoals/${Id}`
        );

        // Update the goals state with the data from the API
        setGoals(response.data.result);
      } catch (error) {
        console.error('Error fetching goals:', error);

        // Check if it's an Axios error with a response
        if (error.response) {
          console.error(
            'Server responded with:',
            error.response.status,
            error.response.data
          );
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error setting up the request:', error.message);
        }
      }
    };

    fetchData();
  }, [Id]);

  // const onViewAllText1Click = () => {
  //   setDisplayedGoals(goals.length);
  // };
  const onViewAllText1Click = () => {
    navigate('/personalsavings2');
  };

  return (
    <>
      <Sidebar selectstep={handleStep} />
      <DashboardRoot>
        <>
          {step === 0 && (
            <>
              <div style={{ marginTop: '6em' }}>
                <FrameParent>
                  <WelcomeBackJohnDoeParent>
                    <WelcomeBackJohn1>{`Welcome back ${
                      userData?.lastName ?? 'loading'
                    } ${
                      userData?.firstName ?? 'loading...'
                    },`}</WelcomeBackJohn1>
                    <EmojiParent>
                      <EmojiIcon1 alt="" src="/emoji@2x.png" />
                      <Savi>{currentDate}.</Savi>
                    </EmojiParent>
                  </WelcomeBackJohnDoeParent>
                  <FrameGroup>
                    <FrameDiv>
                      <AccountBalanceWalletParent>
                        <AccountBalanceWalletIcon1
                          alt=""
                          src="/account-balance-wallet@2x.png"
                        />
                        <Text>
                          Savi Account Number
                          <BoldText>
                            {`${walletData?.walletNumber ?? 'loading...'}`}
                          </BoldText>
                        </Text>
                        <DotsVerticalIcon4 alt="" />
                      </AccountBalanceWalletParent>
                      <GlobalWalletParent>
                        <GlobalWallet>Global Wallet</GlobalWallet>
                        <Div>{`₦ ${walletData?.balance ?? 'loading...'}`}</Div>
                      </GlobalWalletParent>
                      <FrameParent1>
                        <Parent1>
                          <ArrowIcon4 alt="" />
                        </Parent1>
                        <ThanLastMonth4>than last month</ThanLastMonth4>
                        <AddParent>
                          <AddIcon8 alt="" onClick={openDepositFunds} />
                          <SendIcon5 alt="" onClick={openWithdrawFunds} />
                        </AddParent>
                      </FrameParent1>
                      <FrameParent2>
                        <AddGroup>
                          <AddIcon8
                            alt=""
                            src="/add@2x.png"
                            onClick={openDepositFunds1}
                          />
                          <Deposit>Deposit</Deposit>
                        </AddGroup>
                        <SendParent>
                          <SendIcon5
                            alt=""
                            src="/send@2x.png"
                            onClick={openWithdrawFunds1}
                          />
                          <Deposit>Withdraw</Deposit>
                        </SendParent>
                      </FrameParent2>
                    </FrameDiv>
                    <FrameParent3>
                      <AccountBalanceWalletParent>
                        <AccountBalanceWalletIcon1 alt="" src="/group@2x.png" />
                        <DotsVerticalIcon4 alt="" />
                      </AccountBalanceWalletParent>
                      <GlobalWalletParent>
                        <SafeLock>{`Total Group Savings `}</SafeLock>
                        <Div>₦ 0.00</Div>
                      </GlobalWalletParent>
                      <AddContainer>
                        <AddIcon8
                          alt=""
                          src="/add@2x.png"
                          onClick={openDepositFunds2}
                        />
                        <Deposit>Add money</Deposit>
                      </AddContainer>
                      <FrameParent1>
                        <Group>
                          <Div1>- 15%</Div1>
                          <ArrowIcon4 alt="" />
                        </Group>
                        <ThanLastMonth5>than last month</ThanLastMonth5>
                        <DepositAndWithdraw3>
                          <AddIcon8 alt="" onClick={openDepositFunds3} />
                          <SendIcon5 alt="" onClick={openWithdrawFunds2} />
                        </DepositAndWithdraw3>
                      </FrameParent1>
                    </FrameParent3>
                    <FrameParent5>
                      <AccountBalanceWalletParent>
                        <AccountBalanceWalletIcon1
                          alt=""
                          src="/profile@2x.png"
                        />
                        <DotsVerticalIcon4 alt="" />
                      </AccountBalanceWalletParent>
                      <GlobalWalletParent>
                        <SafeLock>Total Personal Savings</SafeLock>
                        <Div>{`₦ ${walletData2?.result ?? 'loading...'}`}</Div>
                      </GlobalWalletParent>
                      <AddContainer>
                        <AddIcon8
                          alt=""
                          src="/add@2x.png"
                          onClick={openDepositFunds4}
                        />
                        <Deposit>Add money</Deposit>
                      </AddContainer>
                      <FrameParent6>
                        <Group>
                          <Div1>+ 15%</Div1>
                          <ArrowIcon6 alt="" />
                        </Group>
                        <ThanLastMonth5>than last month</ThanLastMonth5>
                        <DepositAndWithdraw3>
                          <AddIcon8 alt="" onClick={openDepositFunds5} />
                          <SendIcon5 alt="" onClick={openWithdrawFunds3} />
                        </DepositAndWithdraw3>
                      </FrameParent6>
                    </FrameParent5>
                    <FrameParent7>
                      <AccountBalanceWalletParent>
                        <AccountBalanceWalletIcon1 alt="" src="/hide@2x.png" />
                        <DotsVerticalIcon4 alt="" />
                      </AccountBalanceWalletParent>
                      <GlobalWalletParent>
                        <SafeLock>Safe Lock</SafeLock>
                        <Div>₦ ****</Div>
                      </GlobalWalletParent>
                      <AddContainer>
                        <AddIcon8
                          alt=""
                          src="/add@2x.png"
                          onClick={openDepositFunds6}
                        />
                        <Deposit>Add money</Deposit>
                      </AddContainer>
                      <FrameParent6>
                        <Group>
                          <Div1>+ 15%</Div1>
                          <ArrowIcon6 alt="" />
                        </Group>
                        <ThanLastMonth5>than last month</ThanLastMonth5>
                        <DepositAndWithdraw3>
                          <AddIcon8 alt="" onClick={openDepositFunds7} />
                          <SendIcon5 alt="" onClick={openWithdrawFunds4} />
                        </DepositAndWithdraw3>
                      </FrameParent6>
                    </FrameParent7>
                  </FrameGroup>
                  <FrameParent9>
                    <FrameParent10>
                      <FrameParent11>
                        <TotalIncomeParent>
                          <TotalIncome>{`Total Income `}</TotalIncome>
                          <ChevronDownIcon2 alt="" src="/chevrondown@2x.png" />
                        </TotalIncomeParent>
                        <Last12MonthsParent>
                          <Last12Months1>Last 12 Months</Last12Months1>
                          <DotsVerticalIcon4 alt="" />
                        </Last12MonthsParent>
                      </FrameParent11>
                      <LineChart>
                        <LineChart1>
                          <Inline>
                            <YaxesLabels>
                              <LineChartAxesLabel>
                                <Div8>100</Div8>
                              </LineChartAxesLabel>
                              <LineChartAxesLabel>
                                <Feb>80</Feb>
                              </LineChartAxesLabel>
                              <LineChartAxesLabel>
                                <Feb>60</Feb>
                              </LineChartAxesLabel>
                              <LineChartAxesLabel>
                                <Feb>40</Feb>
                              </LineChartAxesLabel>
                              <LineChartAxesLabel>
                                <Feb>20</Feb>
                              </LineChartAxesLabel>
                              <LineChartAxesLabel>
                                <Feb>0</Feb>
                              </LineChartAxesLabel>
                            </YaxesLabels>
                            <ChartContent>
                              <GridLine6 />
                              <GridLine7 />
                              <GridLine8 />
                              <GridLine9 />
                              <GridLine10 />
                              <GridLine11 />
                              <DefaultLineChart1
                                alt=""
                                src="/default-line-chart@2x.png"
                              />
                              <DefaultLineChartGradient1
                                alt=""
                                src="/default-line-chart-gradient@2x.png"
                              />
                              <PointerIcon46 alt="" />
                              <PointerIcon47 alt="" />
                              <PointerIcon48 alt="" />
                              <PointerIcon49 alt="" />
                              <PointerIcon50 alt="" />
                              <PointerIcon51 alt="" />
                              <PointerIcon52 alt="" />
                              <PointerIcon53 alt="" />
                              <PointerIcon54 alt="" />
                              <PointerIcon55 alt="" />
                              <PointerIcon56 alt="" />
                              <PointerIcon57 alt="" />
                              <SecondaryChartIcon alt="" />
                              <SecondaryChartGradient1 alt="" />
                              <PointerIcon58 alt="" />
                              <PointerIcon59 alt="" />
                              <PointerIcon60 alt="" />
                              <PointerIcon61 alt="" />
                              <PointerIcon62 alt="" />
                              <PointerIcon63 alt="" />
                              <PointerIcon64 alt="" />
                              <PointerIcon65 alt="" />
                              <PointerIcon66 alt="" />
                              <PointerIcon67 alt="" />
                              <PointerIcon68 alt="" />
                              <PointerIcon69 alt="" />
                              <Tooltips>
                                <Tooltip1>
                                  <Title>June 2022</Title>
                                  <SecondaryContent>
                                    Secondary text
                                  </SecondaryContent>
                                  <ShortcutHints>
                                    <Shortcut>
                                      <CommandIcon4 alt="" />
                                    </Shortcut>
                                    <Shortcut>
                                      <CommandIcon4 alt="" />
                                    </Shortcut>
                                  </ShortcutHints>
                                  <Indicator1>
                                    <LegendIndicator8 />
                                    <K>$88k</K>
                                  </Indicator1>
                                  <Indicator2>
                                    <LegendIndicator9 />
                                    <K>$77k</K>
                                  </Indicator2>
                                  <TopBeakIcon4 alt="" />
                                  <RightBeakIcon4 alt="" />
                                  <BottomBeakIcon4 alt="" />
                                  <LeftBeakIcon4 alt="" />
                                </Tooltip1>
                              </Tooltips>
                              <OnHoverIndicator1 />
                              <Tooltips1>
                                <Tooltip1>
                                  <Title>June 2022</Title>
                                  <SecondaryContent>
                                    Secondary text
                                  </SecondaryContent>
                                  <ShortcutHints>
                                    <Shortcut>
                                      <CommandIcon4 alt="" />
                                    </Shortcut>
                                    <Shortcut>
                                      <CommandIcon4 alt="" />
                                    </Shortcut>
                                  </ShortcutHints>
                                  <Indicator1>
                                    <LegendIndicator8 />
                                    <K>$88k</K>
                                  </Indicator1>
                                  <Indicator2>
                                    <LegendIndicator9 />
                                    <K>$77k</K>
                                  </Indicator2>
                                  <TopBeakIcon5 alt="" />
                                  <RightBeakIcon5 alt="" />
                                  <BottomBeakIcon5 alt="" />
                                  <LeftBeakIcon5 alt="" />
                                </Tooltip1>
                              </Tooltips1>
                              <Tooltips2>
                                <Tooltip1>
                                  <Title2>6:08 PM, Jun 20</Title2>
                                  <SecondaryContent>
                                    Secondary text
                                  </SecondaryContent>
                                  <ShortcutHints>
                                    <Shortcut>
                                      <CommandIcon4 alt="" />
                                    </Shortcut>
                                    <Shortcut>
                                      <CommandIcon4 alt="" />
                                    </Shortcut>
                                  </ShortcutHints>
                                  <Indicator12>
                                    <LegendIndicator12 />
                                    <K4>
                                      <B>₦</B>
                                      <K5>88k</K5>
                                    </K4>
                                  </Indicator12>
                                  <Indicator22>
                                    <LegendIndicator9 />
                                    <K>$77k</K>
                                  </Indicator22>
                                  <TopBeakIcon6 alt="" />
                                  <RightBeakIcon6 alt="" />
                                  <BottomBeakIcon6
                                    alt=""
                                    src="/bottom-beak@2x.png"
                                  />
                                  <LeftBeakIcon6 alt="" />
                                </Tooltip1>
                              </Tooltips2>
                              <Tooltips3>
                                <Tooltip1>
                                  <Title3>6:08 PM, 2022</Title3>
                                  <SecondaryContent3>$31</SecondaryContent3>
                                  <ShortcutHints>
                                    <Shortcut>
                                      <CommandIcon4 alt="" />
                                    </Shortcut>
                                    <Shortcut>
                                      <CommandIcon4 alt="" />
                                    </Shortcut>
                                  </ShortcutHints>
                                  <Indicator13>
                                    <LegendIndicator14 />
                                    <K>$88k</K>
                                  </Indicator13>
                                  <Indicator22>
                                    <LegendIndicator15 />
                                    <K>$77k</K>
                                  </Indicator22>
                                  <TopBeakIcon7 alt="" />
                                  <RightBeakIcon7 alt="" />
                                  <BottomBeakIcon7 alt="" />
                                  <LeftBeakIcon7 alt="" />
                                </Tooltip1>
                              </Tooltips3>
                              <DefaultStrongLineChart1 alt="" />
                              <PointerIcon70 alt="" />
                              <PointerIcon71 alt="" />
                              <PointerIcon72 alt="" />
                              <PointerIcon73 alt="" />
                              <PointerIcon74 alt="" />
                              <PointerIcon75 alt="" />
                              <PointerIcon76 alt="" />
                              <PointerIcon77 alt="" />
                              <PointerIcon78 alt="" />
                              <PointerIcon79 alt="" />
                              <PointerIcon80 alt="" />
                              <PointerIcon81 alt="" />
                              <PointerIcon82 alt="" />
                              <PointerIcon83 alt="" />
                              <PointerIcon84 alt="" />
                              <PointerIcon85 alt="" />
                              <PointerIcon86 alt="" />
                              <PointerIcon87 alt="" />
                              <PointerIcon88 alt="" />
                              <PointerIcon89 alt="" />
                              <PointerIcon90 alt="" />
                              <PointerIcon91 alt="" />
                              <SecondaryDashedLineChart1 alt="" />
                            </ChartContent>
                          </Inline>
                          <XaxesLabels>
                            <LineChartAxesLabel>
                              <Jan>Jan</Jan>
                            </LineChartAxesLabel>
                            <LineChartAxesLabel>
                              <Feb>Feb</Feb>
                            </LineChartAxesLabel>
                            <LineChartAxesLabel>
                              <Feb>Mar</Feb>
                            </LineChartAxesLabel>
                            <LineChartAxesLabel>
                              <Feb>Apr</Feb>
                            </LineChartAxesLabel>
                            <LineChartAxesLabel>
                              <Feb>May</Feb>
                            </LineChartAxesLabel>
                            <LineChartAxesLabel>
                              <Feb>Jun</Feb>
                            </LineChartAxesLabel>
                            <LineChartAxesLabel>
                              <Feb>Jul</Feb>
                            </LineChartAxesLabel>
                            <LineChartAxesLabel>
                              <Feb>Aug</Feb>
                            </LineChartAxesLabel>
                            <LineChartAxesLabel>
                              <Feb>Sep</Feb>
                            </LineChartAxesLabel>
                            <LineChartAxesLabel>
                              <Feb>Oct</Feb>
                            </LineChartAxesLabel>
                            <LineChartAxesLabel>
                              <Feb>Nov</Feb>
                            </LineChartAxesLabel>
                            <LineChartAxesLabel>
                              <Feb>Dec</Feb>
                            </LineChartAxesLabel>
                          </XaxesLabels>
                        </LineChart1>
                      </LineChart>
                    </FrameParent10>
                    <FrameParent12>
                      <UpcomingActivitiesParent>
                        <SafeLock>UPCOMING ACTIVITIES</SafeLock>
                        <ViewAll>View all</ViewAll>
                      </UpcomingActivitiesParent>
                      <FrameParent13>
                        <FrameParent14>
                          <TotalIncomeParent>
                            <FrameChild alt="" src="/frame-38813497@2x.png" />
                            <ContributionToLagosCorpGroParent>
                              <SafeLock>
                                Contribution to Lagos Corp Group
                              </SafeLock>
                              <May2920233>May 29, 2023 at 11:30 AM</May2920233>
                            </ContributionToLagosCorpGroParent>
                          </TotalIncomeParent>
                          <Div14>-₦5,000</Div14>
                        </FrameParent14>
                        <Divider7 />
                        <FrameParent14>
                          <TotalIncomeParent>
                            <FrameChild alt="" src="/frame-38813497@2x.png" />
                            <ContributionToLagosCorpGroParent>
                              <SafeLock>
                                Contribution to Lagos Corp Group
                              </SafeLock>
                              <May2920233>May 29, 2023 at 11:30 AM</May2920233>
                            </ContributionToLagosCorpGroParent>
                          </TotalIncomeParent>
                          <Div15>+₦5,000</Div15>
                        </FrameParent14>
                        <Divider7 />
                        <FrameParent14>
                          <TotalIncomeParent>
                            <FrameChild alt="" src="/frame-38813497@2x.png" />
                            <ContributionToLagosCorpGroParent>
                              <SafeLock>
                                Contribution to Lagos Corp Group
                              </SafeLock>
                              <May2920233>May 29, 2023 at 11:30 AM</May2920233>
                            </ContributionToLagosCorpGroParent>
                          </TotalIncomeParent>
                          <Div15>+₦5,000</Div15>
                        </FrameParent14>
                        <Divider7 />
                      </FrameParent13>
                    </FrameParent12>
                  </FrameParent9>
                  <FrameParent9>
                    <FrameParent21>
                      <TransactionHistoryParent>
                        <TotalIncome>Transaction history</TotalIncome>
                        <FrameParent22>
                          <RecentlyWrapper>
                            <SafeLock>Recently</SafeLock>
                          </RecentlyWrapper>
                          <SafeLock>Oldest</SafeLock>
                          <SafeLock>More</SafeLock>
                        </FrameParent22>
                      </TransactionHistoryParent>
                      <FrameParent23>
                        <ReceiverParent>
                          <SafeLock>Receiver</SafeLock>
                          <TypeParent>
                            <SafeLock>Type</SafeLock>
                            <SafeLock>Date</SafeLock>
                            <SafeLock>Amount</SafeLock>
                          </TypeParent>
                        </ReceiverParent>
                        <BoladeAdegbeteParent>
                          <SafeLock>Bolade Adegbete</SafeLock>
                          <LagosCorpGroupParent>
                            <SafeLock>Lagos Corp Group</SafeLock>
                            <SafeLock>30 May 2023</SafeLock>
                            <SafeLock>₦ 5,000</SafeLock>
                          </LagosCorpGroupParent>
                        </BoladeAdegbeteParent>
                        <Divider10 />
                        <BoladeAdegbeteParent>
                          <SafeLock>Bolade Adegbete</SafeLock>
                          <LagosCorpGroupParent>
                            <SafeLock>Lagos Corp Group</SafeLock>
                            <SafeLock>30 May 2023</SafeLock>
                            <SafeLock>₦ 5,000</SafeLock>
                          </LagosCorpGroupParent>
                        </BoladeAdegbeteParent>
                        <Divider10 />
                        <BoladeAdegbeteParent>
                          <SafeLock>Bolade Adegbete</SafeLock>
                          <LagosCorpGroupParent>
                            <SafeLock>Lagos Corp Group</SafeLock>
                            <SafeLock>30 May 2023</SafeLock>
                            <SafeLock>₦ 5,000</SafeLock>
                          </LagosCorpGroupParent>
                        </BoladeAdegbeteParent>
                        <Divider10 />
                        <BoladeAdegbeteParent>
                          <SafeLock>Bolade Adegbete</SafeLock>
                          <LagosCorpGroupParent>
                            <SafeLock>Lagos Corp Group</SafeLock>
                            <SafeLock>30 May 2023</SafeLock>
                            <SafeLock>₦ 5,000</SafeLock>
                          </LagosCorpGroupParent>
                        </BoladeAdegbeteParent>
                        <Divider10 />
                      </FrameParent23>
                    </FrameParent21>
                    <FrameParent24>
                      <MyGoalsParent>
                        <MyGoals>My Goals</MyGoals>
                        <ViewAll1 onClick={onViewAllText1Click}>
                          View all
                        </ViewAll1>
                      </MyGoalsParent>
                      {goals && goals.length > 0 ? (
                        goals.slice(0, displayedGoals).map((goal) => (
                          // goals.map((goal) => (
                          <FrameParent25 key={goal.id}>
                            <FrameParent26>
                              <AirplaneParent>
                                <AirplaneIcon1
                                  alt=""
                                  src={goal.avatar || '/airplane@2x.png'}
                                />
                                <ContributionToLagosCorpGroParent>
                                  <SafeLock>{goal.targetName}</SafeLock>
                                  <SafeLock>
                                    <Span3>{`₦ ${
                                      goal.amountToAdd
                                        ? goal.amountToAdd.toLocaleString()
                                        : 'N/A'
                                    } `}</Span3>
                                    <Span>{`/ ₦ ${
                                      goal.targetAmount
                                        ? goal.targetAmount.toLocaleString()
                                        : 'N/A'
                                    } `}</Span>
                                  </SafeLock>
                                </ContributionToLagosCorpGroParent>
                              </AirplaneParent>
                              <SafeLock>{`${(
                                (goal.amountToAdd / goal.targetAmount) *
                                100
                              ).toFixed(2)}%`}</SafeLock>
                            </FrameParent26>
                            <RectangleParent>
                              {console.log(
                                (goal.amountSaved / goal.goalAmount) * 100
                              )}
                              <ProgressBar
                                percentage={
                                  (goal.amountSaved / goal.goalAmount) * 100
                                }
                              />
                            </RectangleParent>
                          </FrameParent25>
                        ))
                      ) : (
                        <p>No goals available.</p>
                      )}
                    </FrameParent24>
                  </FrameParent9>
                </FrameParent>
                <VuesaxbulkmessageQuestionIcon1
                  alt=""
                  src="/vuesaxbulkmessagequestion@2x.png"
                  onClick={openMessagePopup}
                />
                <NavbardefaultTypeParent>
                  <CompleteAccountSetupClickWrapper>
                    <CompleteAccountSetupContainer onClick={openKYC}>
                      <CompleteAccountSetup1>
                        Complete account setup
                      </CompleteAccountSetup1>
                      <Span3>{`. `}</Span3>
                      <Span3>
                        <ClickHere>Click here</ClickHere>
                      </Span3>
                    </CompleteAccountSetupContainer>
                  </CompleteAccountSetupClickWrapper>
                </NavbardefaultTypeParent>
              </div>
            </>
          )}
          {step === 1 && <Personalsavings2 selectstep={handleStep} />}
          {step === 2 && <UserGroupCards selectstep={handleStep} />}
          {/*NOTE -
          Active Group Screen*/}
          {step === 7 && <AddGoals />}
          {step === 8 && <PersonalSavingDetailsPage selectstep={handleStep} />}
          {step === 9 && <AddGroupSavings />}
          {step === 10 && <DashboardSection selectstep={handleStep} />}
          {step === 11 && <ExploreUserGroupCard selectstep={handleStep} />}
          {/*NOTE -
          Explore Group Screen*/}
          {step === 12 && <UserDashboardSection selectstep={handleStep} />}
        </>
      </DashboardRoot>
      {isDepositFundsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDepositFunds}
        >
          <DepositFunds onClose={closeDepositFunds} />
        </PortalPopup>
      )}
      {isWithdrawFundsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeWithdrawFunds}
        >
          <WithdrawFunds onClose={closeWithdrawFunds} />
        </PortalPopup>
      )}
      {isDepositFunds1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDepositFunds1}
        >
          <DepositFunds onClose={closeDepositFunds1} />
        </PortalPopup>
      )}
      {isWithdrawFunds1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeWithdrawFunds1}
        >
          <WithdrawFunds onClose={closeWithdrawFunds1} />
        </PortalPopup>
      )}
      {isDepositFunds2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDepositFunds2}
        >
          <DepositFunds onClose={closeDepositFunds2} />
        </PortalPopup>
      )}
      {isDepositFunds3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDepositFunds3}
        >
          <DepositFunds onClose={closeDepositFunds3} />
        </PortalPopup>
      )}
      {isWithdrawFunds2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeWithdrawFunds2}
        >
          <WithdrawFunds onClose={closeWithdrawFunds2} />
        </PortalPopup>
      )}
      {isDepositFunds4Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDepositFunds4}
        >
          <DepositFunds onClose={closeDepositFunds4} />
        </PortalPopup>
      )}
      {isDepositFunds5Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDepositFunds5}
        >
          <DepositFunds onClose={closeDepositFunds5} />
        </PortalPopup>
      )}
      {isWithdrawFunds3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeWithdrawFunds3}
        >
          <WithdrawFunds onClose={closeWithdrawFunds3} />
        </PortalPopup>
      )}
      {isDepositFunds6Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDepositFunds6}
        >
          <DepositFunds onClose={closeDepositFunds6} />
        </PortalPopup>
      )}
      {isDepositFunds7Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDepositFunds7}
        >
          <DepositFunds onClose={closeDepositFunds7} />
        </PortalPopup>
      )}
      {isWithdrawFunds4Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeWithdrawFunds4}
        >
          <WithdrawFunds onClose={closeWithdrawFunds4} />
        </PortalPopup>
      )}
      {isKYCOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeKYC}
        >
          <KYC onClose={closeKYC} />
        </PortalPopup>
      )}
    </>
  );
};

export default DashBoard;
