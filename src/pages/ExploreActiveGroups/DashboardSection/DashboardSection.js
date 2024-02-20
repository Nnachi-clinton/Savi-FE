import ContributionSummary from '../ContributionSummary/ContributionSummary';
import CorpMembersDashboard from '../CorpMembersDashboard/CorpMembersDashboard';
import TransactionCardSection from '../TransactionCardSection/TransactionCardSection';
import './style.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function DashboardSection() {
  const [userData, setUserData] = useState({});
  const GroupId = localStorage.getItem('GroupId');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7240/api/GroupSavings/GroupSavingsDetails?groupId=${GroupId}` // !groupId to be changed and made dynamic, this was used for testing purposes
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
    <div className="money-journey-containeraa">
      <CorpMembersDashboard data={userData} />
      <div className="savings-group-info">
        <div className="contribution-details1">
          <ContributionSummary data={userData} />
        </div>
        <div className="transaction-history">
          <p className="transaction-history-title">Transactions History</p>
          {/* <TransactionCardSection /> */}
        </div>
      </div>
    </div>
  );
}

export default DashboardSection;
