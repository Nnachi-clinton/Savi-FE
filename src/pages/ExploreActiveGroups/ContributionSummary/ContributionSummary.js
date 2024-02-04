import SvgIcon1 from './icons/SvgIcon1';
import '../style/reset.css';
import '../style/variables.css';
import './style.css';

function ContributionSummary() {
  return (
    <div className="contribution-card1">
      <div className="contribution-info">
        <p className="contribution-amount-label">Contribution Amount</p>
        <p className="contribution-schedule">Schedule</p>
      </div>
      <div className="contribution-details">
        <p className="price-label">₦ 50,000</p>
        <p className="price-label1">Daily</p>
      </div>
      <div className="contribution-timeline3">
        <p className="contribution-timeline">Contribution Timeline</p>
        <p className="contribution-timeline">Estimated Collection</p>
      </div>
      <div className="contribution-timeline2">
        <p className="price-label">5 months</p>
        <p className="price-label1">₦ 2,000,000</p>
      </div>
      <div className="contribution-details3">
        <p className="contribution-amount-label">Start Date</p>
        <p className="contribution-schedule">End Date</p>
      </div>
      <div className="contribution-timeline1">
        <p className="date-heading">May 1, 2022</p>
        <p className="date-heading">October 1, 2022</p>
      </div>
      <div className="contribution-details3">
        <p className="contribution-amount-label">Available Slots</p>
        <p className="contribution-schedule">Total Slots</p>
      </div>
      <div className="contribution-details2">
        <div className="contribution-info">
          <p className="price-label">0</p>
          <p className="price-label1">5</p>
        </div>
        <div className="contribution-details3">
          <p className="view-flow-text">View Flow</p>
          <SvgIcon1 className="svg-container" />
        </div>
      </div>
    </div>
  );
}

export default ContributionSummary;
