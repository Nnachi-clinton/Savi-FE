import './style.css';

function ContributionSummary(props) {
  const handleGroupClick = (groupId) => {
    localStorage.setItem('GroupId', groupId);
    console.log(groupId);
    props.selectstep(7);
  };
  return (
    <div className="contribution-section1">
      <div className="contribution-section">
        <div className="contribution-card">
          <p className="contribution-label">Contribution</p>
          <p className="contribution-amount">
            <span className="currency-amount">₦500,000 </span>
            {/* <span className="currency-amount">500,000</span> */}
          </p>
        </div>
        <div className="contribution-card">
          <p className="contribution-label">Exp. Withdrawal</p>
          <p className="contribution-amount">
            <span className="currency-amount">₦ 3,500,000</span>
          </p>
        </div>
        <div className="contribution-card">
          <p className="contribution-label">Saving Freq</p>
          <p className="frequency-text">Weekly</p>
        </div>
        <div className="contribution-card">
          <p className="contribution-label">Duration</p>
          <p className="duration-text">8 months</p>
        </div>
        <div className="contribution-card">
          <p className="contribution-label">Available Slot</p>
          <p className="frequency-text">2, 5 and 7</p>
        </div>
      </div>
      <p className="group-link" onClick={() => handleGroupClick(props.data.id)}>
        View Group
      </p>
    </div>
  );
}

export default ContributionSummary;
