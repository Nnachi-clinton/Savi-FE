import ContributionCard from '../ContributionCard/ContributionCard';
import SavingsGroupCard from '../SavingsGroupCard/SavingsGroupCard';
import '../style/reset.css';
import '../style/variables.css';
import './style.css';

function CorpMembersDashboard() {
  return (
    <div className="savings-group-container">
      <div className="savings-group-container3">
        <div className="savings-group-container2">
          <p className="header-title">Lagos Corp Members</p>
          <SavingsGroupCard />
        </div>
        <ContributionCard />
      </div>
      <img
        src="./assets/img_2650_29411_cfdc0d.jpeg"
        className="hero-image"
        alt=""
      />
      <p className="money-sense-text">
        Bros/Sis, no dull yourself for dis service year money mata. Join Lagos
        Corp Members Thrift Saving Group sharp-sharp! We go secure your money,
        make am grow well-well, and support each other for dis money journey.
        Learn money sense, plan for your future, and enjoy the benefits of our
        community. No time to waste, come join us now! Contact [07067482633].
        Make we flex our money together!
      </p>
    </div>
  );
}

export default CorpMembersDashboard;
