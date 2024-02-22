import './contributionstyle.css';
import '../style/reset.css';
import '../style/variables.css';

function ContributionCard(props) {
  console.log(props.data);
  const expectedStartDate = formatDate(props.data.expectedStartDate);
  const month = formatMonth(props.data.expectedStartDate);
  console.log(month);
  const balance = localStorage.getItem('walletBalance');
  console.log(balance);

  return (
    <div className="contribution-cardd">
      <div className="contribution-container">
        <p className="contribution-title">{month} CONTRIBUTION</p>
        <div className="contribution-container1">
          <div className="payment-details">
            <p className="date-text">{expectedStartDate}</p>
            <p className="price-label2">₦ {props.data.contributionAmount}</p>
          </div>
          {/* 
          <button className="payment-button">Pay Now</button> */}
        </div>
        <p className="payment-details1">
          <span>Your payment will be debited from your </span>
          <span className="wallet-amount">WALLET (</span>
          <span className="payment-amount-text">₦ {balance}</span>
          <span className="wallet-amount">)</span>
          <span>.&nbsp;&nbsp;</span>
        </p>
      </div>
      {/* <div className="payment-dismiss-button">
        <button className="dismiss-button">DISMISS</button>
      </div> */}
    </div>
  );
}

export default ContributionCard;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

const formatMonth = (dateString) => {
  const date = new Date(dateString);
  const month = date.toLocaleDateString('en-US', { month: 'long' });
  return month;
};
