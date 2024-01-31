import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Button = styled.button`
  background-color: var(--primary-color);
  color: var(--white);
  border: none;
  border-radius: var(--br-5xs);
  padding: var(--padding-xs) var(--padding-sm);  // Adjusted padding values
  cursor: pointer;
  font-size: var(--text-md-medium-size);
  cursor: pointer
`;
const Text5 = styled.b`
  position: relative;
  line-height: 140%;
`;
const TextWrapper = styled.div`
  color: var(--Main-Text, #101828);
  font-family: Inter;
  font-size: 24px;
  margin: 32px;
  margin-left: 110px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
`;
const PleaseCompleteThe = styled.span``;
const Savi = styled.span`
  color: var(--primary-color);
`;
const TextTxt = styled.span`
  width: 100%;
`;
const Text6 = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  text-align: center;
  display: none;
  align-items: center;
  width: 23.38rem;
  height: 3.06rem;
  flex-shrink: 0;
`;
const Input = styled.input`
  border-radius: 8px;
  border: 1px solid var(--Grey-300, #d0d5dd);
  background: var(--White, #fff);
  display: flex;
  width: 320px;
  margin: 0 auto;
  margin-bottom: 32px;
  padding: 12px 16px;
  align-items: center;
  gap: 100px;
`;
const Text7 = styled.div`
  color: var(--Main-Text, #101828);
  font-family: Inter;
  font-size: 16px;
  margin-bottom: 10px;
  margin-left: 70px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
  letter-spacing: 0.15px;
`;
const TextParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Ctadefault = styled.div`
display: flex;
width: 320px;
color: #fff;
padding: 12px 16px;
justify-content: center;
margin: 0 auto;
border: none;
align-items: center;
gap: 8px;
border-radius: 8px;
background: var(--Primary-Color, #b5179e);
`;
const WithdrawFundsRoot = styled.div`
  position: fixed; /* Fixed position to overlay on top of the page */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;
const WithdrawFundsContainer = styled.div`
  width: 460px;
  border-radius: 16px;
  background: var(--White, #fff);
  height: 310px;
`;

const WithdrawFunds = ({onClose}) => {
  const [amount, setAmount] = useState('');

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = () => {
    // Make API request using Axios
    axios.post('your-api-endpoint', { amount })
      .then(response => {
        // Handle success
        console.log(response.data);
      })
      .catch(error => {
        // Handle error
        console.error(error);
      });
    onClose();
  };

  const handleModalClick = (event) => {
    event.stopPropagation();
  }
  
  return (
    <WithdrawFundsRoot onClick={onClose}>
      <WithdrawFundsContainer onClick={handleModalClick}>
        <TextWrapper>
          <Text5>Access Your Savings</Text5>
        </TextWrapper>
        <TextParent>
          <Text7>Amount to Withdraw</Text7>
          <Input
            type="text"
            placeholder="Type the amount"
            value={amount}
            onChange={handleAmountChange}
          />
        </TextParent>
        <Ctadefault>
          <Button onClick={handleSubmit}>Submit</Button>
        </Ctadefault>
      </WithdrawFundsContainer>
    </WithdrawFundsRoot>
  );
};

export default WithdrawFunds;
