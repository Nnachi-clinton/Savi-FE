import React from "react";
import Dashboard from "../../../assets/Dashboard.svg";
import Savings from "../../../assets/Savings.svg";
import Groups from "../../../assets/Groups.svg";
import Transactions from "../../../assets/Transactions.svg";
import Settings from "../../../assets/Settings.svg";
import Logout from "../../../assets/Logout.svg";

export const SidebarData = [
  {
    title: "Dashboard",
    icon: <img src={Dashboard} alt="dashboardIcon" className="house"/>,
    link: "/dashboard",
  },
  {
    title: "Savings",
    icon: <img src={Savings} alt="savingsIcon" />,
    link: "/savings",
  },
  {
    title: "Groups",
    icon: <img src={Groups} alt="groupIcon" />,
    link: "/groups",
  },
  {
    title: "Transactions",
    icon: <img src={Transactions} alt="transactionIcon" />,
    link: "/transactions",
  },
  {
    title: "Settings",
    icon: <img src={Settings} alt="settingsIcon" />,
    link: "/settings",
  },
  {
    title: "Logout",
    icon: <img src={Logout} alt="logoutIcon" />,
    link: "/logout",
  },
];