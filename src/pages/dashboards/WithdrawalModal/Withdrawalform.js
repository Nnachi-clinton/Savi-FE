import React, { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
width: 100vw;
height: 100vh;
position: absolute;
top: 0;
padding-top: 12%;
padding-left: 37%;
align-items: center;
justify-content: center; 

`;
const CardContainer = styled.div`
  width: 400px;
  height: 282px;
  display: inline-flex;
  padding: 32px 40px;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  position: relative;
  background: var(--White, #fff);
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const H1 = styled.h1`
  color: var(--Main-Text, #101828);
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  margin-bottom: 32px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
  gap: 5px; /* Adjust as needed */
  align-items: stretch; /* Ensure items stretch to full width */
`;

const Input = styled.input`
  border-radius: 8px;
  border: 1px solid var(--Grey-300, #d0d5dd);
  background: var(--White, #fff);
  padding: 12px 16px;
`;

const AmountLabel = styled.label`
  color: var(--Main-Text, #101828);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: 0.15px;
`;

const SubmitButton = styled.button`
  display: flex;
  width: 320px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #fff;
  border-radius: 8px;
  margin-top: 32px;
  background: var(--Primary-Color, #b5179e);
`;

const Withdrawalform = () => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, e.g., send the amount to the server
    console.log("Submitted amount:", amount);
  };

  return (
    <Card>
    <CardContainer>
      <H1>Access Your Wallet</H1>
      <Form onSubmit={handleSubmit}>
        <AmountLabel>Amount</AmountLabel>
        <Input
          type="text"
          placeholder="Type the amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Form>
      <SubmitButton type="submit">Submit</SubmitButton>
    </CardContainer>
    </Card>
  );
};

export default Withdrawalform;