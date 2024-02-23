import './style.css';

function ExploreUserContributionSummary(props) {
  const { selectstep } = props;
  console.log(props.data);
  const handleGroupClick = (groupId) => {
    localStorage.setItem('GroupId', groupId);
    console.log(groupId);
    selectstep(12);
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
    <div className="contribution-section1b">
      <div className="contribution-sectionb">
        <div className="contribution-cardb">
          <p className="contribution-labelb">Contribution</p>
          <p className="contribution-amountb">
            <span className="currency-amountb">
              ₦ {props.data.contributionAmount}
            </span>
            {/* <span className="currency-amountb">500,000</span> */}
          </p>
        </div>
        <div className="contribution-cardb">
          <p className="contribution-labelb">Exp. Withdrawal</p>
          <p className="contribution-amountb">
            <span className="currency-amountb">₦ {estimatedAmount}</span>
          </p>
        </div>
        <div className="contribution-cardb">
          <p className="contribution-labelb">Saving Freq</p>
          <p className="frequency-textb">
            {renderSchedule(props.data.schedule)}
          </p>
        </div>
        <div className="contribution-cardb">
          <p className="contribution-labelb">Duration</p>
          <p className="duration-textb">
            {renderSchedule2(props.data.schedule)}
          </p>
        </div>
        <div className="contribution-cardb">
          <p className="contribution-labelb">Available Slot</p>
          <p className="frequency-textb">2, 5 and 7</p>
        </div>
      </div>
      <p
        className="group-linkb"
        onClick={() => handleGroupClick(props.data.id)}
      >
        View Group
      </p>
    </div>
  );
}

export default ExploreUserContributionSummary;
