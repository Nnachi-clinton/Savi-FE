import './contributionstyle.css';
import '../style/reset.css';
import '../style/variables.css';

function ContributionCard() {
  return (
    <div className="contribution-card">
      <div className="contribution-container">
        <p className="contribution-title">JUNE CONTRIBUTION</p>
        <div className="contribution-container1">
          <div className="payment-details">
            <p className="date-text">Jun 1, 2023</p>
            <p className="price-label2">₦50,000</p>
          </div>
          {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <button className="payment-button">Pay Now</button>
        </div>
        <p className="payment-details1">
          <span>Your payment will be debited from your </span>
          <span className="wallet-amount">WALLET (</span>
          <span className="payment-amount-text">₦500,000</span>
          <span className="wallet-amount">)</span>
          <span>.&nbsp;&nbsp;</span>
        </p>
      </div>
      <div className="payment-dismiss-button">
        {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
        <button className="dismiss-button">DISMISS</button>
      </div>
    </div>
  );
}

export default ContributionCard;
