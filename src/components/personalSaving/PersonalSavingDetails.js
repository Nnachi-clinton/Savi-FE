import PlusImage from '../../assets/Plus.svg';
import WithdrawImage from '../../assets/Withdraw.svg';
import styled from 'styled-components';
import CreditModal from '../dashboard/CreditModal';
import { useState } from 'react';
import WithdrawFunds from '../dashboard/WithdrawFunds';

const ParentContainer = styled.div`
  background-color: #b5179e;
  max-width: 100%;
  padding: 24px, 32px, 24px, 32px;
  border-radius: 16px;
  padding-bottom: 20px;
`;
const Details = styled.div`
  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;
const DetailColumn = styled.div`
  float: left;
  width: 33.33%;
  box-sizing: border-box;
  padding: 20px;
  text-align: center;
  color: white;
`;
const DetailText = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: inherit;
  text-align: start;
  padding-left: 24px;
`;
const Heading = styled.h2`
  font-size: 48px;
  font-weight: 700;
  color: inherit;
  text-align: start;
  padding-left: 24px;
`;
const ButtonParent = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;
const FundButton = styled.button`
  color: #b5179e;
  background-color: white;
  border-radius: 8px;
  border: none;
  margin-right: 24px;
  padding: 6px 12px;
`;
const WithdrawButton = styled.button`
  border: 1.5px solid white;
  padding: 6px 12px;
  color: white;
  background-color: inherit;
  border-radius: 8px;
`;

const PersonalSavingDetails = ({ amountSaved, totalTarget, daysLeft }) => {
  const [isCreditModalVisible, setCreditModalVisibility] = useState(false);
  const [isWithdrawModalVisible, setWithdrawModalVisibility] = useState(false);

  const handleFundButtonClick = () => {
    setCreditModalVisibility(true);
  };
  const handleWithdrawButtonClick = () => {
    setWithdrawModalVisibility(true);
  };
  const handleCloseCreditModal = () => {
    setCreditModalVisibility(false);
  };
  const handleCloseWithdrawModal = () => {
    setWithdrawModalVisibility(false);
  };
  const renderDaysText = () => {
    return daysLeft === 1 ? 'day' : 'days';
  };

  return (
    <ParentContainer>
      <Details>
        <DetailColumn>
          <DetailText>Amount Saved</DetailText>
          <Heading>
            <span>&#8358;</span>
            {amountSaved}
          </Heading>
        </DetailColumn>
        <DetailColumn>
          <DetailText>Total Target</DetailText>
          <Heading>
            <span>&#8358;</span>
            {totalTarget}
          </Heading>
        </DetailColumn>
        <DetailColumn>
          <DetailText>Days left</DetailText>
          <Heading>
            {daysLeft} {renderDaysText()}
          </Heading>
        </DetailColumn>
      </Details>
      <ButtonParent>
        <FundButton onClick={handleFundButtonClick}>
          <img src={PlusImage} alt="add-symbol"></img>
          Fund Target
        </FundButton>
        <WithdrawButton onClick={handleWithdrawButtonClick}>
          <img src={WithdrawImage} alt="withdraw-symbol"></img>
          Withdraw to Wallet
        </WithdrawButton>
      </ButtonParent>
      {isCreditModalVisible && <CreditModal onClose={handleCloseCreditModal} />}
      {isWithdrawModalVisible && (
        <WithdrawFunds onClose={handleCloseWithdrawModal} />
      )}
    </ParentContainer>
  );
};

export default PersonalSavingDetails;
