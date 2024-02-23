import './style.css';

function ContributionSummary(props) {
  const handleGroupClick = (groupId) => {
    localStorage.setItem('GroupId', groupId);
    console.log(groupId);
    props.selectstep(7);
  };
  const estimatedAmount = props.data.contributionAmount * 4;

  const renderSchedule = (scheduleValue) => {
    switch (scheduleValue) {
      case 0:
        return <p>Daily</p>;
      case 1:
        return <p>Weekly</p>;
      case 2:
        return <p>Monthly</p>;
      default:
        return <p>Invalid Schedule</p>;
    }
  };
  const renderSchedule2 = (scheduleValue) => {
    switch (scheduleValue) {
      case 0:
        return <p>5 Days</p>;
      case 1:
        return <p>5 Weeks</p>;
      case 2:
        return <p>5 Months</p>;
      default:
        return <p>Invalid Schedule</p>;
    }
  };

  return (
    <div className="contribution-section1">
      <div className="contribution-section">
        <div className="contribution-card">
          <p className="contribution-label">Contribution</p>
          <p className="contribution-amount">
            <span className="currency-amount">
              ₦ {props.data.contributionAmount}
            </span>
            {/* <span className="currency-amount">500,000</span> */}
          </p>
        </div>
        <div className="contribution-card">
          <p className="contribution-label">Exp. Withdrawal</p>
          <p className="contribution-amount">
            <span className="currency-amount">₦ {estimatedAmount}</span>
          </p>
        </div>
        <div className="contribution-card">
          <p className="contribution-label">Saving Freq</p>
          <p className="frequency-text">
            {renderSchedule(props.data.schedule)}
          </p>
        </div>
        <div className="contribution-card">
          <p className="contribution-label">Duration</p>
          <p className="duration-text">
            {renderSchedule2(props.data.schedule)}
          </p>
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
