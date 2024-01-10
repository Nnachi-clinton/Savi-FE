import * as React from 'react';
import styled from 'styled-components';

function Login(props) {
  return (
    <Div>
      <Div2>
        <Column>
          <Span>
            <Div3>Savi.</Div3>
            <Div4>Easy Group Savings</Div4>
            <Div5>
              Save collectively with rotating lump sum payouts, eliminating
              risks of traditional methods.
            </Div5>
            <Div6>
              {/* <Div7 />
              <Div8 />
              <Div9 />
              <Div10 /> */}
            </Div6>
          </Span>
        </Column>
        <Column2>
          <Div11>
            <Span2>
              <Div12>Savi.</Div12>
              <Div13>Welcome back to Savi.</Div13>
              <Span3>
                <Img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f533b741ecebbd6ade9f417d693eb178eb6f7945ff39c10dadd25ddc19cd511b?apiKey=fdd3b98f4931492c8e932a5e6619fb3c&"
                />
                <Div14>Sign in with Google</Div14>
              </Span3>
              <Span4>
                <Div15 />
                <Div16>OR</Div16>
                <Div17 />
              </Span4>
              <Div18>Email Address</Div18>
              <Span5>Enter your email</Span5>
              <Div19>Password</Div19>
              <Div20>
                <Span6>
                  <Div21>****************</Div21>
                  <Img2
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9370d1923aff735859d4ec28fd8835abe50d58141602e5905b71979670dfbd53?apiKey=fdd3b98f4931492c8e932a5e6619fb3c&"
                  />
                </Span6>
              </Div20>
              <Div22>Forgot password</Div22>
              <Span7>Login</Span7>
              <Div23>
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
              </Div23>
            </Span2>
            <Span8>
              <Div24>Privacy Policy</Div24>
              <Div25>Copyright 2022</Div25>
            </Span8>
          </Div11>
        </Column2>
      </Div2>
    </Div>
  );
}

const Div = styled.div`
  overflow: hidden;
`;

const Div2 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 47%;
  background-image: url('./images/EasyGroupImg.webp');
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Span = styled.span`
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  flex-grow: 1;

  flex-direction: column;
  width: 100%;
  padding: 50px 80px 50px 50px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 4px;
    padding: 0 20px;
  }
`;

const Div3 = styled.div`
  color: #fff;
  text-align: center;
  letter-spacing: 0.15px;
  align-self: start;
  font: 700 24px/140% Bodoni Moda, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div4 = styled.div`
  color: var(--White, #fff);
  letter-spacing: 0.25px;
  align-self: center;
  margin-top: 576px;
  white-space: nowrap;
  font: 600 32px/140% Inter, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
    white-space: initial;
  }
`;

const Div5 = styled.div`
  color: var(--White, #fff);
  text-align: center;
  letter-spacing: 0.15px;
  align-self: center;
  margin-top: 30px;
  max-width: 476px;
  font: 600 16px/22px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div6 = styled.div`
  justify-content: center;
  align-self: center;
  display: flex;
  gap: 4px;
  margin: 26px 0 122px;
  @media (max-width: 991px) {
    margin-bottom: 40px;
  }
`;

const Div7 = styled.div`
  border-radius: 50%;
  display: flex;
  width: 4px;
  height: 4px;
  flex-direction: column;
`;

const Div8 = styled.div`
  border-radius: 100px;
  background-color: #fff;
  display: flex;
  width: 20px;
  height: 4px;
  flex-direction: column;
`;

const Div9 = styled.div`
  border-radius: 50%;
  display: flex;
  width: 4px;
  height: 4px;
  flex-direction: column;
`;

const Div10 = styled.div`
  border-radius: 50%;
  display: flex;
  width: 4px;
  height: 4px;
  flex-direction: column;
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 53%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div11 = styled.div`
  align-items: center;
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  padding: 50px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 4px;
    padding: 0 20px;
  }
`;

const Span2 = styled.span`
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

const Div12 = styled.div`
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

const Div13 = styled.div`
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

const Span3 = styled.span`
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

const Div14 = styled.div`
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

const Span4 = styled.span`
  align-self: stretch;
  display: flex;
  margin-top: 16px;
  gap: 10px;
`;

const Div15 = styled.div`
  background-color: #eaebec;
  align-self: center;
  width: 140px;
  height: 1px;
  margin: auto 0;
`;

const Div16 = styled.div`
  color: var(--Grey-400, #98a2b3);
  font: 400 14px/143% Inter, sans-serif;
`;

const Div17 = styled.div`
  background-color: #eaebec;
  align-self: center;
  width: 140px;
  height: 1px;
  margin: auto 0;
`;

const Div18 = styled.div`
  color: var(--Main-Text, #101828);
  letter-spacing: 0.15px;
  align-self: stretch;
  margin-top: 24px;
  font: 600 16px/140% Inter, sans-serif;
`;

const Span5 = styled.span`
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

const Div19 = styled.div`
  color: var(--Main-Text, #101828);
  letter-spacing: 0.15px;
  align-self: stretch;
  margin-top: 16px;
  font: 600 16px/140% Inter, sans-serif;
`;

const Div20 = styled.div`
  border-radius: 8px;
  border: 1px solid var(--Grey-300, #d0d5dd);
  background-color: var(--White, #fff);
  align-self: stretch;
  display: flex;
  margin-top: 8px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 12px 17px;
`;

const Span6 = styled.span`
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Div21 = styled.div`
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

const Div22 = styled.div`
  color: var(--Blue-600, #1570ef);
  letter-spacing: 0.15px;
  text-decoration-line: underline;
  align-self: stretch;
  margin-top: 16px;
  font: 400 16px/140% Inter, sans-serif;
`;

const Span7 = styled.span`
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

const Div23 = styled.div`
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

const Span8 = styled.span`
  justify-content: space-between;
  align-self: stretch;
  display: flex;
  gap: 20px;
  margin: 212px 0 30px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    flex-wrap: wrap;
  }
`;

const Div24 = styled.div`
  color: #000;
  font: 500 18px Inter, sans-serif;
`;

const Div25 = styled.div`
  color: #000;
  font: 500 18px Inter, sans-serif;
`;
export default Login;
