import SvgIcon1 from './icons/SvgIcon1';
import './style.css';
import '../style/reset.css';
import '../style/variables.css';

function SavingsGroupCardAdmin(props) {
  console.log(props.data.saveName);
  return (
    <div className="active-savings-group-container">
      <p className="savings-group-title1" onClick={() => props.selectstep(1)}>
        Saving Groups
      </p>
      <SvgIcon1 className="svg-container2" />
      <p className="savings-group-title11" onClick={() => props.selectstep(1)}>
        Explore Groups
      </p>
      <SvgIcon1 className="svg-container2" />
      <p className="savings-group-title">{props.data.saveName}</p>
    </div>
  );
}
export default SavingsGroupCardAdmin;
