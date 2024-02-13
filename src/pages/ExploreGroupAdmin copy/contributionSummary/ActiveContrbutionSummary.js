import './style.css';

function ActiveContributionSummary() {
  return (
    <div className="contribution-section2">
      <div className="contribution-section22">
        <div className="contribution-card2">
          <p className="contribution-label">Contribution</p>
          <p className="contribution-amount">
            <span className="currency-amount">₦ </span>
            <span className="currency-amount">500,000</span>
          </p>
        </div>
        <div className="contribution-card2">
          <p className="contribution-label">Exp. Withdrawal</p>
          <p className="contribution-amount">
            <span className="currency-amount">₦ 3,5</span>
            <span className="currency-amount">00,000</span>
          </p>
        </div>
        <div className="contribution-card2">
          <p className="contribution-label">Saving Freq</p>
          <p className="frequency-text">Weekly</p>
        </div>
        <div className="contribution-card2">
          <p className="contribution-label">Duration</p>
          <p className="duration-text">8 mos</p>
        </div>
        <div className="contribution-card2">
          <p className="contribution-label">Available Slot</p>
          <p className="frequency-text">2, 5 and 7</p>
        </div>
      </div>
      <p className="group-link1">View Group</p>
    </div>
  );
}

export default ActiveContributionSummary;
