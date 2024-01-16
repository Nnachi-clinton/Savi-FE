import * as React from 'react';
import {useState} from "react";
import axios from "axios";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const result = await axios.post('https://localhost:7240/api/Authentication/forgot-password', formData);
        
        // Handle success (redirect, show message, etc.)
        console.log(result.data);
  
      } catch (error) {
        // Handle error (display error message, log, etc.)
        console.error('Password reset failed:', error.message);
      }
    }

  return (
    <>
    <GlobalDiv>
    <Header>Savi.</Header>
    <Div>
      <Span>
      <form onSubmit={handleSubmit}>
          <Div2>Forgot your password</Div2>
          <Div3>
            Enter your email below and we’ll send you
            <br />
            instructions on how to reset your password.
          </Div3>
          <Div4>Email Address</Div4>
          <StyledInput
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            id="email"
            placeholder="Enter your email"
          />
          <StyledButton type="submit">
            Send reset instructions
          </StyledButton>
          <Div5>
            Go back to{' '}
            <span>
              <StyledLink to={'/login'}>Sign in here</StyledLink>
            </span>
          </Div5>
        </form>
      </Span>
      <Span4>
        <Div6>Privacy Policy</Div6>
        <Div6>Copyright 2024</Div6>
      </Span4>
    </Div>
    </GlobalDiv>
    </>
  );
};

const StyledLink = styled(Link)`
  color: var(--Primary-Color, #b5179e);
  text-decoration: underline;
`;

const GlobalDiv = styled.div`
  display: flex;
  justify-content: center;
  // height: 1024px;
  padding-right: 342px;
  align-items: flex-start;
  gap: 189px;
  background: var(--White, #FFF);
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Header = styled.h3`
  display: flex;
  padding: 50px;
  align-items: flex-start;
  gap: 10px;
  color: var(--Primary-Color, #b5179e);
  width: Hug (154px);
  height: Hug (134px);
  padding: 50px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Div = styled.div`
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  display: flex;
  max-width: 755px;
  flex-direction: column;
  padding: 50px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Span = styled.span`
  align-items: center;
  border-radius: 16px;
  background-color: var(--White, #fff);
  display: flex;
  margin-top: 30px;
  width: 418px;
  max-width: 100%;
  flex-direction: column;
  padding: 32px 40px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Div2 = styled.div`
  color: var(--Main-Text, #101828);
  align-self: center;
  white-space: nowrap;
  font: 700 24px/140% Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div3 = styled.div`
  color: var(--Grey-400, #98a2b3);
  text-align: center;
  letter-spacing: 0.15px;
  align-self: stretch;
  margin-top: 8px;
  font: 400 16px/22px Inter, sans-serif;
`;

const Div4 = styled.div`
  color: var(--Main-Text, #101828);
  letter-spacing: 0.15px;
  align-self: stretch;
  margin-top: 32px;
  font: 600 16px/140% Inter, sans-serif;
`;

const StyledInput = styled.input`
  color: var(--Grey-400, #98a2b3);
  letter-spacing: 0.15px;
  white-space: nowrap;
  align-items: start;
  border-radius: 8px;
  border: 1px solid var(--Grey-300, #d0d5dd);
  background-color: var(--White, #fff);
  align-self: stretch;
  margin-top: 8px;
  padding: 12px 16px; /* Adjust padding as needed */
  font: 400 16px/140% Inter, sans-serif;
  width: 100%;

  @media (max-width: 991px) {
    white-space: initial;
    padding-right: 20px;
  }
`;

const StyledButton = styled.button`
  color: var(--White, #fff);
  letter-spacing: 0.15px;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  border: none; /* Remove default button border */
  border-radius: 8px;
  background-color: var(--Primary-Color, #b5179e);
  align-self: stretch;
  margin-top: 24px;
  padding: 12px 60px;
  font: 500 16px/140% Inter, sans-serif;
  cursor: pointer; /* Add a pointer cursor to indicate it's clickable */
  width: 100%;

  &:hover {
    background-color: #8c0c74;
  }    

  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const Div5 = styled.div`
  display: flex;
  justify-content: center;
  color: var(--Grey-400, #98a2b3);
  letter-spacing: 0.15px;
  align-self: center;
  margin-top: 16px;
  white-space: nowrap;
  font: 400 14px/20px Inter, sans-serif;
  gap: 5px;

  & > span {
    font-weight: 600;
    text-decoration: underline;
  }

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Span4 = styled.span`
  justify-content: space-between;
  align-self: stretch;
  display: flex;
  gap: 20px;
  margin: 50px 0;
//   margin: 476px 0 30px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    flex-wrap: wrap;
  }
`;

const Div6 = styled.div`
  color: #000;
  font: 500 18px Inter, sans-serif;
`;
