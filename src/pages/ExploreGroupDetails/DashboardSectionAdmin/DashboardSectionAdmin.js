import ContributionSummary from '../ContributionSummary/ContributionSummaryAdmin';
import CorpMembersDashboard from '../CorpMembersDashboardAdmin/CorpMembersDashboardAdmin';
import './style.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MemberTable from '../TransactionCardSection/MemberTable';

function DashboardSectionAdmin({ selectstep }) {
  const [userData, setUserData] = useState({});
  const GroupId = localStorage.getItem('GroupId');
  console.log(GroupId);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7240/api/GroupSavings/GetAnyGroupDetails?groupId=${GroupId}` // groupId to be changed and made dynamic, this was used for testing purposes
        );

        setUserData(response.data.result);
        console.log(response.data);
        console.log(response.data.result);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);
  console.log(userData);
  return (
    <div className="money-journey-container11">
      <CorpMembersDashboard data={userData} selectstep={selectstep} />
      <div className="savings-group-info">
        <div className="contribution-details1">
          <ContributionSummary data={userData} />
        </div>
        <div className="transaction-history">
          <p className="transaction-history-title" style={{ padding: 14 }}>
            Members
          </p>
          <MemberTable />
        </div>
      </div>
    </div>
  );
}

export default DashboardSectionAdmin;
