import SvgIcon1 from './icons/SvgIcon1';
import '../style/reset.css';
import '../style/variables.css';
import './style.css';

function ContributionSummaryAdmin(props) {
  console.log(props.data.schedule);
  const estimatedAmount = props.data.contributionAmount * 4;
  const expectedStartDate = formatDate(props.data.expectedStartDate);
  const expectedEndDate = formatDate(props.data.expectedEndDate);
  console.log(expectedEndDate);
  console.log(expectedStartDate);
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
    <div className="contribution-card1">
      <div className="contribution-info">
        <p className="contribution-amount-label">Contribution Amount</p>
        <p className="contribution-schedule">Estimated Collection</p>
      </div>
      <div className="contribution-details">
        <p className="price-label">₦ {props.data.contributionAmount}</p>
        <p className="price-label1">₦ {estimatedAmount}</p>
      </div>
      <div className="contribution-timeline3">
        <p className="contribution-amount-label">Schedule</p>
        <p className="contribution-timeline">Group Type</p>
      </div>
      <div className="contribution-timeline2">
        <p className="price-label">{renderSchedule(props.data.schedule)}</p>
        <p className="price-label1">Cash</p>
      </div>
      <div className="contribution-details3">
        <p className="contribution-amount-label">Latest Start Date</p>
        <p className="contribution-schedule">Contribution Timeline</p>
      </div>
      <div className="contribution-timeline1">
        <p className="price-label">{expectedStartDate}</p>
        <p className="price-label1">{renderSchedule2(props.data.schedule)}</p>
      </div>
      <div className="contribution-details3">
        <p className="contribution-amount-label">Total Slots</p>
        <p className="contribution-schedule">Available Slots</p>
      </div>
      <div className="contribution-details2">
        <div className="contribution-info">
          <p className="price-label">5</p>
          <p className="price-label1">2 of 5</p>
        </div>
        {/* <div className="contribution-details3">
          <p className="view-flow-text">View Flow</p>
          <SvgIcon1 className="svg-container" />
        </div> */}
      </div>
    </div>
  );
}

export default ContributionSummaryAdmin;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};
