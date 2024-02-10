import ContributionSummary from '../ContributionSummary/ContributionSummaryAdmin';
import CorpMembersDashboard from '../CorpMembersDashboardAdmin/CorpMembersDashboardAdmin';
import TransactionCardSection from '../TransactionCardSection/TransactionCardSection';
import './style.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function DashboardSectionAdmin() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7240/api/GroupSavings/GroupSavingsDetails?groupId=112233` // groupId to be changed and made dynamic, this was used for testing purposes
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
      <CorpMembersDashboard data={userData} />
      <div className="savings-group-info">
        <div className="contribution-details1">
          <ContributionSummary data={userData} />
        </div>
        <div className="transaction-history">
          <p className="transaction-history-title">Members</p>
          {/* <TransactionCardSection /> */}
        </div>
      </div>
    </div>
  );
}

export default DashboardSectionAdmin;
