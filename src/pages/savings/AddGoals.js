import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function AddGoals(props) {
  const [target, setTarget] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [frequency, setFrequency] = useState('daily');
  const [startDate, setStartDate] = useState('');
  const [withdrawalDate, setWithdrawalDate] = useState('');

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleFrequencyChange = (e) => {
    setFrequency(e.target.value);
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post('your-backend-api-endpoint', {
        target: target,
        targetAmount: targetAmount,
        frequency: frequency,
        startDate: startDate,
        withdrawalDate: withdrawalDate,
      });

      // Handle the response as needed (e.g., redirect, show success message)
      console.log(response.data);
    } catch (error) {
      // Handle errors (e.g., show error message)
      console.error('Error submitting goals:', error);
    }
  };
  return (
    <Main>
      <Div>Set a Target</Div>
      <Div2>
        Create and track multiple saving goals to achieve your financial targets
      </Div2>

      <Div3>Target</Div3>
      <Input
        type="text"
        value={target}
        onChange={(e) => handleInputChange(e, setTarget)}
        placeholder="Type here"
      />

      <Div4>Target Amount</Div4>
      <Input
        type="text"
        value={targetAmount}
        onChange={(e) => handleInputChange(e, setTargetAmount)}
        placeholder="Numbers only"
      />

      <Div5>Frequency</Div5>
      <Select value={frequency} onChange={handleFrequencyChange}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </Select>

      <Div7>Start Date</Div7>
      <Input
        type="date"
        value={startDate}
        onChange={(e) => handleInputChange(e, setStartDate)}
      />

      <Div9>Withdrawal Date</Div9>
      <Input
        type="date"
        value={withdrawalDate}
        onChange={(e) => handleInputChange(e, setWithdrawalDate)}
        placeholder="pick your date"
      />

      <Span7 onClick={handleSubmit}>Submit</Span7>
    </Main>
  );
}

const Main = styled.span`
  align-items: center;
  border-radius: 16px;
  background-color: var(--White, #fff);
  display: flex;
  max-width: 454px;
  flex-direction: column;
  padding: 32px 40px;
  margin: auto; /* Center horizontally */
  justify-content: center; /* Center vertically */
`;

const Div = styled.div`
  color: var(--Main-Text, #101828);
  align-self: center;
  white-space: nowrap;
  font: 700 24px/140% Inter, sans-serif;
`;

const Div2 = styled.div`
  justify-content: center;
  color: var(--Main-Text, #101828);
  text-align: center;
  letter-spacing: 0.15px;
  align-self: stretch;
  margin-top: 8px;
  font: 400 16px/22px Inter, sans-serif;
`;
const Input = styled.input`
  padding: 8px;
  margin-top: 8px;
  width: 320px;
  height: 45px;
`;
const Select = styled.select`
  /* Add your select styles here */
  /* For example: */
  padding: 8px;
  margin-top: 8px;
  width: 320px;
  height: 45px;
`;
const Div3 = styled.div`
  color: var(--Main-Text, #101828);
  letter-spacing: 0.15px;
  margin-top: 32px;
  font: 600 16px/140% Inter, sans-serif;
  margin-right: 17em;
`;
const Div4 = styled.div`
  color: var(--Main-Text, #101828);
  letter-spacing: 0.15px;
  align-self: center;
  margin-right: 13em;
  margin-top: 24px;
  white-space: nowrap;
  font: 600 16px/140% Inter, sans-serif;
`;
const Div5 = styled.div`
  color: var(--Main-Text, #101828);
  letter-spacing: 0.15px;
  align-self: center;
  margin-top: 24px;
  margin-right: 15em;
  white-space: nowrap;
  font: 600 16px/140% Inter, sans-serif;
`;
const Div7 = styled.div`
  color: var(--Main-Text, #101828);
  letter-spacing: 0.15px;
  align-self: center;
  margin-top: 24px;
  white-space: nowrap;
  margin-right: 15em;
  font: 600 16px/140% Inter, sans-serif;
`;
const Div9 = styled.div`
  color: var(--Main-Text, #101828);
  letter-spacing: 0.15px;
  align-self: center;
  margin-right: 12em;
  margin-top: 16px;
  white-space: nowrap;
  font: 600 16px/140% Inter, sans-serif;
`;
const Span7 = styled.span`
  color: var(--White, #fff);
  letter-spacing: 0.15px;
  white-space: nowrap;
  background-color: var(--Primary-Color, #b5179e);
  align-self: center;
  margin-top: 24px;
  width: 100%;
  max-width: 320px;
  padding: 12px 130px;
  font: 600 16px/140% Inter, sans-serif;
  cursor: pointer;
  //   padding-right: -9rem; !important;
  border-radius: 8px;
`;
export default AddGoals;
