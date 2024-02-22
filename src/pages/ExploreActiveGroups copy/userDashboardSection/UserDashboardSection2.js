// import ContributionSummary from '../ContributionSummary/ContributionSummary';
// import CorpMembersDashboard from '../CorpMembersDashboard/CorpMembersDashboard';
// import TransactionCardSection from '../TransactionCardSection/TransactionCardSection';
import './style6.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserContributionSummary from '../ContributionSummary/UserContributionSummary';
import UserCorpMembersDashboard from '../userCorpMembersDashboard/UserCorpMembersDashboard';

function UserDashboardSection({ selectstep }) {
  const [userData, setUserData] = useState({});
  const groupId = localStorage.getItem('GroupId');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7240/api/GroupSavings/ExploreGroupDetails?groupId=${groupId}` // !  Don't change this url please
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
    <div className="money-journey-container">
      <UserCorpMembersDashboard data={userData} selectstep={selectstep} />
      <div className="savings-group-info">
        <div className="contribution-details1">
          <UserContributionSummary data={userData} />
        </div>
        <div className="transaction-history">
          <p className="transaction-history-title">Members</p>
          {/* <TransactionCardSection /> */}
        </div>
      </div>
    </div>
  );
}

export default UserDashboardSection;
