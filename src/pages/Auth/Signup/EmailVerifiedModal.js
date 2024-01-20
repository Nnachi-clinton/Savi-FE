import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function EmailVerifiedModal(props) {
  const navigate = useNavigate();
  const [verificationStatus, setVerificationStatus] = useState('Verifying...');
  const [redirectMessage, setRedirectMessage] = useState('');
  const [showResendButton, setShowResendButton] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');
    const token = urlParams.get('token');
    console.log(userId, token);

    axios
      .get(
        `https://localhost:7240/api/Authentication/ConfirmEmail?userId=${userId}&token=${token}`
      )
      .then((response) => {
        if (response.data.statusCode === 200) {
          setVerificationStatus('Email verified successfully');
          setRedirectMessage('Hold on! while we Redirect you to login...');
          console.log(response.data);
          console.log(response.data.statusCode);
          setTimeout(() => {
            navigate('/login');
          }, 5000);
        } else {
          setVerificationStatus(response.data.message);
          setRedirectMessage('Unable to verify your email...');
          setShowResendButton(true);
          console.log(response.data);
          console.log(response.data.statusCode);
        }
      })
      .catch((error) => {
        setVerificationStatus('Email verification failed');
        setShowResendButton(true);
      });
  }, [navigate]);

  const handleResendVerification = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');
    axios
      .post(
        `https://localhost:7240/api/Authentication/resend-verification-email?userId=${userId}`
      )
      .then((response) => {
        if (response.data.statusCode === 200) {
          setVerificationStatus('Email Resent successfully');
          setRedirectMessage(
            'You can check your inbox for further instructions...'
          );
          console.log(response.data);
          console.log(response.data.statusCode);
        } else {
          setVerificationStatus(response.data.message);
          setRedirectMessage('Unable to resend email verification link...');
          console.log(response.data);
          console.log(response.data.statusCode);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Container>
      <Main>
        <Img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f693738bf88e5205f55c409ec99d53f81fc7cafcdf2fbf6a3b7e184935cf242?apiKey=fdd3b98f4931492c8e932a5e6619fb3c&"
        />
        <Img2
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/10c75299a2e9e7b2c37b26c6e9f167e12b7715ed840f3fb8fdcf1efd5786114e?apiKey=fdd3b98f4931492c8e932a5e6619fb3c&"
        />
        <Div>{verificationStatus}</Div>
        <Div2>{redirectMessage}</Div2>
        {showResendButton && (
          <ResendButton onClick={handleResendVerification}>
            Resend Verification Email
          </ResendButton>
        )}
      </Main>
    </Container>
  );
}
const Main = styled.div`
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  height: 310px;
  max-width: 400px;
  flex-direction: column;
  padding: 14px 0 50px 10px;
  margin: auto;
  justify-content: center;
  margin-top: 10em;
`;
const Img = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  overflow: hidden;
  align-self: end;
  max-width: 100%;
  cursor: pointer;
`;
const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 70px;
  overflow: hidden;
  align-self: center;
  margin-top: 21px;
  max-width: 100%;
`;
const Div = styled.div`
  color: var(--Main-Text, #101828);
  align-self: center;
  margin-top: 22px;
  white-space: nowrap;
  font: 500 24px/140% Inter, sans-serif;
`;
const Div2 = styled.div`
  color: var(--Main-Text, #101828);
  text-align: center;
  letter-spacing: 0.15px;
  align-self: stretch;
  width: 100%;
  margin: 22px 0 9px;
  font: 400 16px/22px Inter, sans-serif;
`;
const Container = styled.div`
  height: auto;
  overflow: hidden;
`;
const ResendButton = styled.button`
  background-color: #b51780;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #b5179e;
  }
`;
export default EmailVerifiedModal;
