import * as React from 'react';
import styled from 'styled-components';

function MyComponent(props) {
  return (
    <Div>
      <Span>
        <Div2>Savi.</Div2>
        <Div3>Welcome back to Savi.</Div3>
        <Span2>
          <Img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f533b741ecebbd6ade9f417d693eb178eb6f7945ff39c10dadd25ddc19cd511b?apiKey=fdd3b98f4931492c8e932a5e6619fb3c&"
          />
          <Div4>Sign in with Google</Div4>
        </Span2>
        <Span3>
          <Div5 />
          <Div6>OR</Div6>
          <Div7 />
        </Span3>
        <Div8>Email Address</Div8>
        <Span4>Enter your email</Span4>
        <Div9>Password</Div9>
        <Div10>
          <Span5>
            <Div11>****************</Div11>
            <Img2
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9370d1923aff735859d4ec28fd8835abe50d58141602e5905b71979670dfbd53?apiKey=fdd3b98f4931492c8e932a5e6619fb3c&"
            />
          </Span5>
        </Div10>
        <Div12>Forgot password</Div12>
        <Span6>Login</Span6>
        <Div13>
          <span
            style={{
              fontSize: '16px',
              lineHeight: '22.4px',
              letterSpacing: '0.15px',
            }}
          >
            Don’t have an account?{' '}
          </span>
          <span
            style={{
              fontWeight: 600,
              textDecoration: 'underline',
              color: 'rgba(181,23,158,1)',
            }}
          >
            Sign Up here
          </span>
        </Div13>
      </Span>
      <Span7>
        <Div14>Privacy Policy</Div14>
        <Div15>Copyright 2022</Div15>
      </Span7>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  max-width: 655px;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 2em;
  margin-right: -8em;
`;

const Span = styled.span`
  align-items: center;
  border-radius: 16px;
  background-color: var(--White, #fff);
  display: flex;
  width: 400px;
  max-width: 100%;
  flex-direction: column;
  padding: 32px 40px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Div2 = styled.div`
  color: var(--Primary-Color, #b5179e);
  text-align: center;
  letter-spacing: 0.15px;
  align-self: center;
  white-space: nowrap;
  font: 700 40px/140% Bodoni Moda, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div3 = styled.div`
  color: var(--Main-Text, #101828);
  letter-spacing: 0.15px;
  align-self: center;
  margin-top: 32px;
  white-space: nowrap;
  font: 600 16px/140% Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Span2 = styled.span`
  justify-content: space-between;
  border-radius: 8px;
  border: 1px solid var(--Grey-300, #d0d5dd);
  background-color: var(--White, #fff);
  align-self: stretch;
  display: flex;
  margin-top: 32px;
  gap: 8px;
  padding: 12px 70px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Img = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  overflow: hidden;
  max-width: 100%;
`;

const Div4 = styled.div`
  color: var(--Grey-400, #98a2b3);
  letter-spacing: 0.15px;
  align-self: start;
  flex-grow: 1;
  white-space: nowrap;
  font: 400 16px/140% Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Span3 = styled.span`
  align-self: stretch;
  display: flex;
  margin-top: 16px;
  gap: 10px;
`;

const Div5 = styled.div`
  background-color: #eaebec;
  align-self: center;
  width: 140px;
  height: 1px;
  margin: auto 0;
`;

const Div6 = styled.div`
  color: var(--Grey-400, #98a2b3);
  font: 400 14px/143% Inter, sans-serif;
`;

const Div7 = styled.div`
  background-color: #eaebec;
  align-self: center;
  width: 140px;
  height: 1px;
  margin: auto 0;
`;

const Div8 = styled.div`
  color: var(--Main-Text, #101828);
  letter-spacing: 0.15px;
  align-self: stretch;
  margin-top: 24px;
  font: 600 16px/140% Inter, sans-serif;
`;

const Span4 = styled.span`
  color: var(--Grey-400, #98a2b3);
  letter-spacing: 0.15px;
  white-space: nowrap;
  align-items: start;
  border-radius: 8px;
  border: 1px solid var(--Grey-300, #d0d5dd);
  background-color: var(--White, #fff);
  align-self: stretch;
  margin-top: 8px;
  justify-content: center;
  padding: 12px 60px 12px 16px;
  font: 400 16px/140% Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-right: 20px;
  }
`;

const Div9 = styled.div`
  color: var(--Main-Text, #101828);
  letter-spacing: 0.15px;
  align-self: stretch;
  margin-top: 16px;
  font: 600 16px/140% Inter, sans-serif;
`;

const Div10 = styled.div`
  border-radius: 8px;
  border: 1px solid var(--Grey-300, #d0d5dd);
  background-color: var(--White, #fff);
  align-self: stretch;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  margin: 8px 0 0 -1px;
  padding: 12px 17px;
`;

const Span5 = styled.span`
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Div11 = styled.div`
  color: var(--Grey-400, #98a2b3);
  margin: auto 0;
  font: 400 14px/143% Inter, sans-serif;
`;

const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  overflow: hidden;
  align-self: stretch;
  max-width: 100%;
`;

const Div12 = styled.div`
  color: var(--Blue-600, #1570ef);
  letter-spacing: 0.15px;
  text-decoration-line: underline;
  align-self: stretch;
  margin-top: 16px;
  font: 400 16px/140% Inter, sans-serif;
`;

const Span6 = styled.span`
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
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const Div13 = styled.div`
  color: var(--Primary-Color, #b5179e);
  letter-spacing: 0.15px;
  text-decoration-line: underline;
  align-self: center;
  margin-top: 16px;
  white-space: nowrap;
  font: 400 14px/20px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Span7 = styled.span`
  justify-content: space-between;
  align-self: stretch;
  display: flex;
  margin-top: 60px;
  width: 100%;
  gap: 20px;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    flex-wrap: wrap;
  }
`;

const Div14 = styled.div`
  color: #000;
  flex: 1;
  font: 500 18px Inter, sans-serif;
`;

const Div15 = styled.div`
  color: #000;
  flex: 1;
  font: 500 18px Inter, sans-serif;
`;

export default MyComponent;