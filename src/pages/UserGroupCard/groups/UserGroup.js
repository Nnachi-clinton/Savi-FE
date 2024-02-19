import styled from 'styled-components';
import UserContributionSummary from '../contributionSummary/UserContrbutionSummary';
function UserGroup(props) {
  const { selectstep } = props;
  console.log(props.data);
  return (
    <Div>
      <P>{props.data.saveName}</P>
      {/* <PP>{props.data.description}</PP> */}
      <UserContributionSummary data={props.data} selectstep={selectstep} />
    </Div>
  );
}

export default UserGroup;

const Div = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: stretch;
  justify-content: flex-start;
  margin-top: 15px;
  width: 90%;
`;

const P = styled.p`
  flex: 0 0 auto;
  font: var(--font-weight-500) var(--font-size-24) 'Inter';
  color: var(--color-black);
`;

const PP = styled.p`
  flex: 0 0 auto;
  font: var(--font-weight-400) var(--font-size-16) / 140% 'Inter';
  color: var(--color-slategrey-9026d582);
  text-align: left;
  letter-spacing: 0.15px;
`;
