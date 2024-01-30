import React from 'react';
import Dashboard from '../../../assets/Dashboard.svg';
import Savings from '../../../assets/Savings.svg';
import Groups from '../../../assets/Groups.svg';
import Transactions from '../../../assets/Transactions.svg';
import Settings from '../../../assets/Settings.svg';
import Logout from '../../../assets/Logout.svg';

export const SidebarData = [
  {
    title: 'Dashboard',
    icon: <img src={Dashboard} alt="dashboardIcon" className="house" />,
    // link: '/dashboard',
    index: 0,
  },
  {
    title: 'Savings',
    icon: <img src={Savings} alt="savingsIcon" />,
    // link: '/Personalsavings2',
    index: 1,
  },
  {
    title: 'Groups',
    icon: <img src={Groups} alt="groupIcon" />,
    // index: 2,
  },
  {
    title: 'Transactions',
    icon: <img src={Transactions} alt="transactionIcon" />,
    // index: 3,
  },
  {
    title: 'Settings',
    icon: <img src={Settings} alt="settingsIcon" />,
    // index: 4,
  },
  {
    title: 'Logout',
    icon: <img src={Logout} alt="logoutIcon" />,
    // index: 5,
  },
];
