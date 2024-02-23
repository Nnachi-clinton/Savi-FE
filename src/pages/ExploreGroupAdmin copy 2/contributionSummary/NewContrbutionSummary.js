import './style.css';

function NewContributionSummary(props, { selectstep }) {
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
    <>
      <div className="contribution-section22">
        <div className="contribution-section222">
          <div className="contribution-card22">
            <p className="contribution-label12">Contribution</p>
            <p className="contribution-amount2">
              <span className="currency-amount2">
                ₦ {props.data.contributionAmount}
              </span>
            </p>
          </div>
          <div className="contribution-card22">
            <p className="contribution-label12">Exp. Withdrawal</p>
            <p className="contribution-amount2">
              <span className="currency-amount2">₦ {estimatedAmount}</span>
            </p>
          </div>
          <div className="contribution-card22">
            <p className="contribution-label12">Saving Freq</p>
            <p className="frequency-text2">
              {renderSchedule(props.data.schedule)}
            </p>
          </div>
          <div className="contribution-card22">
            <p className="contribution-label12">Duration</p>
            <p className="duration-text2">
              {renderSchedule2(props.data.schedule)}
            </p>
          </div>
          <div className="contribution-card22">
            <p className="contribution-label12">Available Slot</p>
            <p className="frequency-text2">2, 5 and 7</p>
          </div>
        </div>
      </div>
      <div>
        <p
          className="group-link12"
          onClick={() => handleGroupClick(props.data.id)}
        >
          View Group
        </p>
      </div>
    </>
  );
}

export default NewContributionSummary;
