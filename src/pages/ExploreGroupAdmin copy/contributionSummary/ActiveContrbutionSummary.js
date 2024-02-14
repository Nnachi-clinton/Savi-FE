import './style.css';

function ActiveContributionSummary(props, { selectstep }) {
  console.log(props.data);
  const handleGroupClick = (groupId) => {
    localStorage.setItem('GroupId', groupId);
    console.log(groupId);
    selectstep(7);
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
            <span className="currency-amount">₦ 3,500</span>
          </p>
        </div>
        <div className="contribution-card2">
          <p className="contribution-label1">Saving Freq</p>
          <p className="frequency-text">Weekly</p>
        </div>
        <div className="contribution-card2">
          <p className="contribution-label1">Duration</p>
          <p className="duration-text">8 mos</p>
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
