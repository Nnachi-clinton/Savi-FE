import React, { useState } from 'react';
import styled from 'styled-components';

function CreditModal(props) {
  const [amount, setAmount] = useState('');
  //   const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    if (/^\d*\.?\d+$/.test(inputValue) && parseFloat(inputValue) > 0) {
      setAmount(inputValue);
      //   setErrorMessage('');
    } else {
      setAmount('');
      //   setErrorMessage('Please enter a valid amount greater than 0.');
    }
  };
  const handleSubmit = () => {
    // Handle the submission with the validated amount
    console.log('Submitted amount:', amount);
  };
  return (
    <Span>
      <InnerWrapper>
        <Text>Add to Your Savings</Text>
        <Text2 htmlFor="numberInput">Amount to Deposit</Text2>
        <Input
          type="number"
          id="numberInput"
          placeholder="Type the amount"
          value={amount}
          onChange={handleInputChange}
        />
        <Button
          type="submit"
          onClick={handleSubmit}
          disabled={parseFloat(amount) <= 0}
        >
          Submit
        </Button>
        {/* {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>} */}
      </InnerWrapper>
    </Span>
  );
}

const Span = styled.span`
  background-color: black;
  height: 100vh; /* 100% of viewport height */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
`;
const InnerWrapper = styled.div`
  width: 460px;
  border-radius: 16px;
  background: var(--White, #fff);
  height: 310px;
`;
const Text = styled.div`
  color: var(--Main-Text, #101828);
  font-family: Inter;
  font-size: 24px;
  margin: 32px;
  margin-left: 110px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
`;
const Text2 = styled.label`
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
const Button = styled.button`
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
// const ErrorMessage = styled.p`
//   color: red;
//   margin: 0 auto;
//   margin-top: -4px;
// `;
export default CreditModal;
