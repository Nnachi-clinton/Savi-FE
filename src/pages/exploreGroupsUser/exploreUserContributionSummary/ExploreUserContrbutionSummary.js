import './style.css';

function ExploreUserContributionSummary({ selectstep }) {
  const handleGroupClick = (groupId) => {
    localStorage.setItem('GroupId', groupId);
    console.log(groupId);
    selectstep(12);
  };
  return (
    <div className="contribution-section1b">
      <div className="contribution-sectionb">
        <div className="contribution-cardb">
          <p className="contribution-labelb">Contribution</p>
          <p className="contribution-amountb">
            <span className="currency-amountb">₦500,000 </span>
            {/* <span className="currency-amountb">500,000</span> */}
          </p>
        </div>
        <div className="contribution-cardb">
          <p className="contribution-labelb">Exp. Withdrawal</p>
          <p className="contribution-amountb">
            <span className="currency-amountb">₦ 3,500,000</span>
          </p>
        </div>
        <div className="contribution-cardb">
          <p className="contribution-labelb">Saving Freq</p>
          <p className="frequency-textb">Weekly</p>
        </div>
        <div className="contribution-cardb">
          <p className="contribution-labelb">Duration</p>
          <p className="duration-textb">8 months</p>
        </div>
        <div className="contribution-cardb">
          <p className="contribution-labelb">Available Slot</p>
          <p className="frequency-textb">2, 5 and 7</p>
        </div>
      </div>
      <p className="group-linkb" onClick={() => handleGroupClick(1234)}>
        View Group
      </p>
    </div>
  );
}

export default ExploreUserContributionSummary;
