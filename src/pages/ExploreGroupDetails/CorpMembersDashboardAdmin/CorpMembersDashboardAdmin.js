import ContributionCard from '../ContributionCardAdmin/ContributionCardAdmin';
import SavingsGroupCard from '../SavingsGroupCard/SavingsGroupCardAdmin';
import Image from '../assets/img_2650_29411_cfdc0d.jpeg';
import '../style/reset.css';
import '../style/variables.css';
import './style.css';

function CorpMembersDashboardAdmin(props) {
  const { selectstep } = props;
  console.log(props.data);
  return (
    <div className="savings-group-container">
      <div className="savings-group-container3">
        <div className="savings-group-container2">
          <SavingsGroupCard data={props.data} selectstep={selectstep} />
          <p className="header-title">{props.data.saveName}</p>
        </div>
      </div>
      <img
        src={props.data.safePortraitImageURL}
        className="hero-imagee"
        alt=""
      />
      <p className="money-sense-text">
        {/* Bros/Sis, no dull yourself for dis service year money mata. Join Lagos
        Corp Members Thrift Saving Group sharp-sharp! We go secure your money,
        make am grow well-well, and support each other for dis money journey.
        Learn money sense, plan for your future, and enjoy the benefits of our
        community. No time to waste, come join us now! Contact [07067482633].
        Make we flex our money together! */}
        {props.data.purposeAndGoal}
      </p>
    </div>
  );
}

export default CorpMembersDashboardAdmin;
