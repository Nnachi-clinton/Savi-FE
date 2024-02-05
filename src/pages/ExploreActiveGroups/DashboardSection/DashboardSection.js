import ContributionSummary from '../ContributionSummary/ContributionSummary';
import CorpMembersDashboard from '../CorpMembersDashboard/CorpMembersDashboard';
import TransactionCardSection from '../TransactionCardSection/TransactionCardSection';
import './style.css';

function DashboardSection() {
  return (
    <div className="money-journey-container">
      <CorpMembersDashboard />
      <div className="savings-group-info">
        <div className="contribution-details1">
          <ContributionSummary />
        </div>
        <div className="transaction-history">
          <p className="transaction-history-title">Transactions History</p>
          <TransactionCardSection />
        </div>
      </div>
    </div>
  );
}

export default DashboardSection;
