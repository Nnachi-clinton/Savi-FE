import SvgIcon1 from './icons/SvgIcon1';
import './style.css';
import '../style/reset.css';
import '../style/variables.css';

function SavingsGroupCard() {
  return (
    <div className="active-savings-group-container">
      <p className="savings-group-title1">Active Savings Group</p>
      <SvgIcon1 className="svg-container2" />
      <p className="savings-group-title">Lagos Corp Members</p>
    </div>
  );
}
export default SavingsGroupCard;