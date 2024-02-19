import SvgIcon1 from './icons/SvgIcon1';
import './style.css';
import '../style/reset.css';
import '../style/variables.css';

function UserSavingsGroupCard(props) {
  console.log(props.data.saveName);
  return (
    <div className="active-savings-group-container6">
      <p className="savings-group-title16">Active Savings Group</p>
      <SvgIcon1 className="svg-container26" />
      <p className="savings-group-title16">Explore Savings Group</p>
      <SvgIcon1 className="svg-container26" />
      <p className="savings-group-title6">{props.data.saveName}</p>
    </div>
  );
}
export default UserSavingsGroupCard;
