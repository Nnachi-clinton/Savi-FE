import styled from 'styled-components';
import ContributionSummary from '../contributionSummary/ContrbutionSummary.js';
function Groups() {
  return (
    <Div>
      <P>Money Palava Savers</P>
      <PP>
        Make we save together, chop better life! Join this group if you want to
        flex and still save money for better days. We go show you as money fit
        run belle and still dey for account.
      </PP>
      <ContributionSummary />
    </Div>
  );
}

export default Groups;

const Div = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: stretch;
  justify-content: flex-start;
  margin-top: 15px;
  width: 100%;
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
