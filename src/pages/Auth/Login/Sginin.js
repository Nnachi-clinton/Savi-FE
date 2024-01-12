import styled from 'styled-components';
import React, { useState } from 'react';
import Pix from '../EasyGroupImg.webp';
import Icon from './images/Google.svg';
import Divider from './images/Divider.svg';
import Eye from './images/EyeIcon.svg';
import CloseEye from './images/CloseEye.svg';
import WhiteLogo from './images/WhiteLogo.svg';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPassword = (password) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
  return passwordRegex.test(password);
};

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (value) => {
    setEmail(value);
    if (isValidEmail(value)) {
      setEmailError('');
    }
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    if (isValidPassword(value)) {
      setPasswordError('');
    }
  };

  const handleSignIn = async () => {
    if (!isValidEmail(email)) {
      setEmailError('Invalid email address');
      return;
    }
    if (!isValidPassword(password)) {
      setPasswordError('Invalid password');
      return;
    }
    setEmailError('');
    setPasswordError('');
    try {
      const response = await axios.post(
        'https://localhost:7240/api/Authentication/Login',
        {
          email: email,
          password: password,
        }
      );
      console.log(response.data);
      if (response.data.statusCode === 200) {
        const token = response.data.data;
        console.log(token);
        localStorage.setItem('authToken', token);
        navigate('/DashBoard');

        // Swal.fire({
        //   icon: 'success',
        //   title: 'Login successful!',
        //   showConfirmButton: false,
        //   timer: 1500,
        //   position: 'top-end',
        // });
      } else {
        console.error('Error:', response.data);
        // Swal.fire({
        //   icon: 'error',
        //   title: 'Error',
        //   text: `Error: ${response.data.message}`,
        //   confirmButtonText: 'OK',
        // });
      }
    } catch (error) {
      // Handle errors (e.g., show error message)
      console.error('Error signing in:', error);
      if (error.response) {
        console.error('Server Error:', error.response.status);
        console.error('Error Message:', error.response.data.message);

        // Swal.fire({
        //   icon: 'error',
        //   title: 'Error',
        //   text: 'An unexpected error occurred: ' + error.message,
        //   confirmButtonText: 'OK',
        // });
      } else if (error.request) {
        console.error('No Response from Server');

        // Swal.fire({
        //   icon: 'error',
        //   title: 'No Response from Server',
        //   text: 'No response from the server. Please try again.',
        //   confirmButtonText: 'OK',
        // });
      } else {
        console.error('Unexpected Error:', error.message);

        // Swal.fire({
        //   icon: 'error',
        //   title: 'Error during login.',
        //   text: 'An unexpected error occurred during login.',
        //   confirmButtonText: 'OK',
        // });
      }
    }
  };
  return (
    <Container>
      <LeftDiv>
        <Logo>
          <img src={WhiteLogo} alt="White savi logo" />
        </Logo>
        <Text4>
          <div>
            <Heading>Easy Group Savings</Heading>
          </div>
          <div>
            <Heading2>
              Save collectively with rotating lump sum payouts, eliminating
              risks of traditional method.
            </Heading2>
          </div>
        </Text4>
      </LeftDiv>
      <RightDiv>
        <CenterRight>
          <Text1>Savi</Text1>
          <Text2>Welcome back to Savi.</Text2>
          <Google>
            <GoogleIcon src={Icon} alt="Google Icon" />
            Sign in with Google
          </Google>
          <Divid>
            <Divi src={Divider} alt="Divider 1" />
            <OrText>OR</OrText>
            <Divi src={Divider} alt="Divider 2" />
          </Divid>
          <Div1>
            <Label htmlFor="email">Email Address:</Label>
            <EmailInput
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
            />
            {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
          </Div1>
          <Div22>
            <Label htmlFor="password">Password:</Label>
            <PasswordInput
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="*****************"
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
            {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
            <ShowPasswordIcon onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <img src={CloseEye} alt="Close" />
              ) : (
                <img src={Eye} alt="show password" />
              )}
            </ShowPasswordIcon>
          </Div22>
          <FP>
            <Link to="/resetpassword">Forgot Password</Link>
          </FP>
          <Button onClick={handleSignIn}>Login</Button>
          <Div2>
            Don't have an account?
            <Link to="/Singup">
              <Click> Sign Up here</Click>
            </Link>
          </Div2>
        </CenterRight>
        <Privacy>
          <Text>Privacy Policy</Text>
          <Text>Copyright 2022</Text>
        </Privacy>
      </RightDiv>
    </Container>
  );
};

export default Signin;

const Container = styled.div`
  display: flex;
  width: 100%;
`;
const LeftDiv = styled.div`
  flex: 1;
  background: url(${Pix}) no-repeat center center / cover;
  height: 100vh;
`;
const RightDiv = styled.div`
  flex: 1;
  background-color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -4em;
`;
const CenterRight = styled.div`
  align-items: center;
`;
const Text1 = styled.h1`
  color: var(--Primary-Color, #b5179e);
  text-align: center;
  font-family: Bodoni Moda;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 56px */
  letter-spacing: 0.15px;
  margin-top: 1.5em;
`;
const Text2 = styled.h1`
  color: var(--Main-Text, #101828);
  font-family: Inter;
  margin-top: 32px;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: 0.15px;
`;
const Google = styled.button`
  display: flex;
  width: 320px;
  padding: 12px 16px;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--Grey-300, #d0d5dd);
  background: var(--White, #fff);
  margin-top: 32px;
  cursor: pointer;
`;
const GoogleIcon = styled.img`
  width: 24px;
  margin-right: 8px;
`;
const Divi = styled.img`
  width: 140px;
  height: 10px;
`;
const Divid = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;
const OrText = styled.span`
  color: var(--Grey-400, #98a2b3);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin: 0 8px;
`;
const EmailInput = styled.input`
  border-radius: 8px;
  border: 1px solid var(--Grey-300, #d0d5dd);
  background: var(--White, #fff);
  display: flex;
  width: 320px;
  padding: 12px 16px;
  align-items: center;
  margin-top: 8px;
`;
const Div1 = styled.div`
  margin-top: 24px;
`;
const Div22 = styled.div`
  margin-top: 24px;
  position: relative;
`;
const PasswordInput = styled.input`
  border-radius: 8px;
  border: 1px solid var(--Grey-300, #d0d5dd);
  background: var(--White, #fff);
  display: flex;
  width: 320px;
  padding: 12px 16px;
  align-items: center;
  margin-top: 8px;
  //   position: relative;
`;
const ShowPasswordIcon = styled.div`
  position: absolute;
  top: 58.5%;
  right: 3%;
  cursor: pointer;
`;
const Label = styled.label`
  color: var(--Main-Text, #101828);

  /* Body Text Bold - 16 */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
  letter-spacing: 0.15px;
`;
const FP = styled.h1`
  color: var(--Blue-600, #1570ef);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  letter-spacing: 0.15px;
  text-decoration-line: underline;
  cursor: pointer;
  margin-top: 16px;
`;
const Button = styled.button`
  border-radius: 8px;
  background: var(--Primary-Color, #b5179e);
  display: flex;
  border: none;
  width: 320px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  cursor: pointer;
  color: #fff;
`;
const Div2 = styled.div`
  color: var(--Grey-400, #98a2b3);

  /* Body Text Normal -16 */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  letter-spacing: 0.15px;
  margin-top: 12px;
  text-align: center;
`;
const Click = styled.span`
  color: var(--Primary-Color, #b5179e);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  text-decoration-line: underline;
  cursor: pointer;
`;
const Privacy = styled.text`
  display: flex;
  width: 655px;
  height: 22px;
  justify-content: center;
  align-items: flex-end;
  gap: 400px;
`;
const Text = styled.h1`
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: -90px;
`;
const Text4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #d9d9d9;
  text-align: center;
  margin-top: 610px;
  width: 100%;
  opacity: none;
`;
const Heading = styled.h2`
  font-size: 32px !important;
  font-size: 35px !important;
  margin-top: -170px !important;
`;
const Heading2 = styled.h4`
  font-size: 16px;
  font-weight: 500;
  width: 476px;
  color: #d9d9d9 !important;
  margin-top: -110px !important;
`;
const Logo = styled.div`
  padding-left: 50px;
  padding-top: 50px;
`;
const ErrorMessage = styled.div`
  color: red;
  margin-top: 4px;
`;
