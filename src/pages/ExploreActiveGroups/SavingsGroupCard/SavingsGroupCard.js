import SvgIcon1 from './icons/SvgIcon1';
import './style.css';
import '../style/reset.css';
import '../style/variables.css';

function SavingsGroupCard(props) {
  console.log(props.data.saveName);
  return (
    <div className="active-savings-group-containeraa">
      <p className="savings-group-title1a">Active Savings Group</p>
      <SvgIcon1 className="svg-container2" />
      <p className="savings-group-titlea">{props.data.saveName}</p>
    </div>
  );
}
export default SavingsGroupCard;
