import './style.css';

function UserContributionSummary(props, { selectstep }) {
  console.log(props.data);
  const handleGroupClick = (groupId) => {
    localStorage.setItem('GroupId', groupId);
    console.log(groupId);
    props.selectstep(10);
  };
  return (
    <>
      <div className="contribution-section22">
        <div className="contribution-section222">
          <div className="contribution-card22">
            <p className="contribution-label12">Saving</p>
            <p className="contribution-amount2">
              <span className="currency-amount2">
                ₦ {props.data.contributionAmount}
              </span>
            </p>
          </div>
          <div className="contribution-card22">
            <p className="contribution-label12">Withdrawal</p>
            <p className="contribution-amount2">
              <span className="currency-amount2">₦ 3,500</span>
            </p>
          </div>
          <div className="contribution-card22">
            <p className="contribution-label12">Saving Freq</p>
            <p className="frequency-text2">Weekly</p>
          </div>
          <div className="contribution-card22">
            <p className="contribution-label12">Duration</p>
            <p className="duration-text2">8 mos</p>
          </div>
          <div className="contribution-card22">
            <p className="contribution-label12">Cash Out date</p>
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

export default UserContributionSummary;
