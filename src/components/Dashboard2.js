import React from 'react';
import Sidebar from '../pages/dashboards/Savings/Sidebar';
import Navbar from '../pages/dashboards/Savings/Navbar';
import DashBoard from '../pages/dashboardmain/Dashboard';

const Dashboard2 = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div>{/* <Sidebar /> */}</div>
      <div>
        {/* <Navbar /> */}
        <div style={{ marginTop: '-5rem', height: '70vh' }}>
          <DashBoard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;
