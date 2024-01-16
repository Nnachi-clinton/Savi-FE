import * as React from "react";
import {useState} from "react";
import styled from "styled-components";
import axios from "axios";

export const ResetPassword = () => {

  const [formData, setFormData] = useState({
    password: '',
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleResetPassword = async () => {
    try {
      const result = await axios.post('https://localhost:7240/api/Authentication/reset-password', formData);
      // Handle success (redirect, show message, etc.)
      console.log(result.data);
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Password Reset failed:', error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Trigger password reset functionality
    handleResetPassword();
  };

  const closeSuccessModal = () => {
    // Close the success modal
    setShowSuccessModal(false);
  };

  return (
    <>
    <GlobalDiv>
    <Header>Savi.</Header>
    <Div>
      <Span>
        <form onSubmit={handleSubmit}>
        <Div2>Reset your password</Div2>
        <Div3>New Password</Div3>
        <StyledInput1
            type="pasword"
            name="password"
            value={formData.password}
            onChange={handleChange}
            id="password"
            placeholder="New Password"
          />
        <Div4>Confirm New Password</Div4>
        <StyledInput2
            type="pasword"
            name="password"
            value={formData.password}
            onChange={handleChange}
            id="password"
            placeholder="Confirm New Password"
          />
          <StyledButton type="submit">
        Reset password
      </StyledButton>
        </form>
      </Span>
      <Span5>
        <Div5>Privacy Policy</Div5>
        <Div5>Copyright 2024</Div5>
      </Span5>
    </Div>
    </GlobalDiv>
    {showSuccessModal && (
        <ModalOverlay>
          <SuccessModal>
            <h2>Password Reset Successful!</h2>
            <p>Your password has been reset successfully.</p>
            <button onClick={closeSuccessModal}>Close</button>
          </SuccessModal>
        </ModalOverlay>
      )}
    </>
  );
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SuccessModal = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;

  h2 {
    color: green;
  }

  button {
    margin-top: 15px;
    padding: 10px;
    cursor: pointer;
  }
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
  padding: 80px 50px;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  display: flex;
  max-width: 755px;
  flex-direction: column;
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
  width: 400px;
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
  color: var(--Main-Text, #101828);
  letter-spacing: 0.15px;
  align-self: stretch;
  margin-top: 32px;
  font: 600 16px/140% Inter, sans-serif;
`;

const StyledInput1 = styled.input`
  color: var(--Grey-400, #98a2b3);
  width: 320px;
  white-space: nowrap;
  align-items: start;
  border-radius: 8px;
  border: 1px solid var(--Grey-300, #d0d5dd);
  background-color: var(--White, #fff);
  align-self: stretch;
  margin-top: 8px;
  justify-content: center;
  padding: 12px 60px 12px 16px;
  font: 400 14px/143% Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-right: 20px;
  }
`;

const Div4 = styled.div`
  color: var(--Main-Text, #101828);
  letter-spacing: 0.15px;
  align-self: stretch;
  margin-top: 24px;
  font: 600 16px/140% Inter, sans-serif;
`;

const StyledInput2 = styled.input`
  color: var(--Grey-400, #98a2b3);
  width: 320px;
  white-space: nowrap;
  align-items: start;
  border-radius: 8px;
  border: 1px solid var(--Grey-300, #d0d5dd);
  background-color: var(--White, #fff);
  align-self: stretch;
  margin-top: 8px;
  justify-content: center;
  padding: 12px 60px 12px 16px;
  font: 400 14px/143% Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-right: 20px;
  }
`;

const StyledButton = styled.button`
  width: 320px;
  color: var(--White, #fff);
  letter-spacing: 0.15px;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: var(--Primary-Color, #b5179e);
  align-self: stretch;
  margin-top: 24px;
  padding: 12px 60px;
  font: 500 16px/140% Inter, sans-serif;

  &:hover {
    background-color: #8c0c74;
  }    

  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const Span5 = styled.span`
  justify-content: space-between;
  align-self: stretch;
  display: flex;
  margin: 25px 0;
  // margin: 470px 0 30px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    flex-wrap: wrap;
  }
`;

const Div5 = styled.div`
  color: #000;
  font: 500 18px Inter, sans-serif;
`;
