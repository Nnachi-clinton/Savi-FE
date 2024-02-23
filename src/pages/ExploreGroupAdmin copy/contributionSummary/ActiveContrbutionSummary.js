import './style.css';

function ActiveContributionSummary(props, { selectstep }) {
  console.log(props.data);
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
    <div className="contribution-section2">
      <div className="contribution-section22">
        <div className="contribution-card2">
          <p className="contribution-label1">Contribution</p>
          <p className="contribution-amount">
            <span className="currency-amount">
              ₦ {props.data.contributionAmount}
            </span>
          </p>
        </div>
        <div className="contribution-card2">
          <p className="contribution-label1">Exp. Withdrawal</p>
          <p className="contribution-amount">
            <span className="currency-amount">₦ {estimatedAmount}</span>
          </p>
        </div>
        <div className="contribution-card2">
          <p className="contribution-label1">Saving Freq</p>
          <p className="frequency-text">
            {renderSchedule(props.data.schedule)}
          </p>
        </div>
        <div className="contribution-card2">
          <p className="contribution-label1">Duration</p>
          <p className="duration-text">
            {renderSchedule2(props.data.schedule)}
          </p>
        </div>
        <div className="contribution-card2">
          <p className="contribution-label1">Available Slot</p>
          <p className="frequency-text">2, 5 and 7</p>
        </div>
      </div>
      <p
        className="group-link1"
        onClick={() => handleGroupClick(props.data.id)}
      >
        View Group
      </p>
    </div>
  );
}

export default ActiveContributionSummary;
