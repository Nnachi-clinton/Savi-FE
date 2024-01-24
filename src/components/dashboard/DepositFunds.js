import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';


const Button = styled.button`
  background-color: var(--primary-color);
  color: var(--white);
  border: none;
  border-radius: var(--br-5xs);
  padding: var(--padding-xs) var(--padding-sm);
  cursor: pointer;
  font-size: var(--text-md-medium-size);
  cursor: pointer;
`;

const Text5 = styled.b`
  position: relative;
  line-height: 140%;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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
  font-size: var(--text-md-medium-size);
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
  border: 1px solid var(--grey-300);
  border-radius: var(--br-5xs);
  padding: var(--padding-xs) var(--padding-base);
  font-size: var(--input-small-medium-size);
  color: var(--grey-400);
  box-sizing: border-box;
  margin-top: var(--gap-5xs);
  background-color: var(--white);
  width: 20rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-81xl);
`;
const FrameParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  font-size: var(--headline-medium-24-size);
`;
const Text7 = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 600;
`;
const TextParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Ctadefault = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--primary-color);
  width: 20rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs) var(--padding-base);
  box-sizing: border-box;
  gap: var(--gap-5xs);
  color: var(--white);
`;
const DepositFundsRoot = styled.div`
  position: relative;
  border-radius: var(--br-base);
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-13xl) var(--padding-21xl);
  box-sizing: border-box;
  gap: var(--gap-13xl);
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  text-align: left;
  font-size: var(--text-md-medium-size);
  color: var(--main-text);
  font-family: var(--text-md-medium);
`;

const DepositFunds = () => {
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
  };
  return (
    <DepositFundsRoot>
      <FrameParent>
        <TextWrapper>
          <Text5>Add to Your Savings</Text5>
        </TextWrapper>
        <Text6>
          <TextTxt>
            <PleaseCompleteThe>{`Please complete the KYC verification process to unlock the full features and benefits of `}</PleaseCompleteThe>
            <Savi>Savi</Savi>
            <PleaseCompleteThe>.</PleaseCompleteThe>
          </TextTxt>
        </Text6>
      </FrameParent>
      <TextParent>
        <Text7>Amount to Deposit</Text7>
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
    </DepositFundsRoot>
  );
};

export default DepositFunds;
