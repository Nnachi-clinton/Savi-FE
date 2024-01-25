import React from 'react';
import styled from 'styled-components';

function CreditSuccessfulModal(props) {
  return (
    <Main>
      <InnerWrapper>
        <div>
          <Img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f287bfbc1df6727b51f04401539f9d0a98ea876348f696fbf7016ba3de15852?apiKey=fdd3b98f4931492c8e932a5e6619fb3c&"
          />
        </div>
        <DivM>
          <Img2
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8847da288809b758a6f20a2af7af50820a17196986685a5de6ba1a729f5b54e?apiKey=fdd3b98f4931492c8e932a5e6619fb3c&"
          />

          <Div>Congratulations!</Div>
          <Div1>Your deposit was successful.</Div1>
        </DivM>
      </InnerWrapper>
    </Main>
  );
}

const Main = styled.span`
  background-color: black;
  height: 100vh; /* 100% of viewport height */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
`;
const InnerWrapper = styled.div`
  border-radius: 16px;
  background: var(--White, #fff);
  height: 310px;
  display: flex;
  width: 460px;
  flex-direction: column;
  padding: 14px 14px 50px 80px;
`;
const Img = styled.img`
  width: 24px;
  max-width: 100%;
  cursor: pointer;
  margin-left: 21em;
`;
const Img2 = styled.img`
  width: 70px;
  margin-top: 32px;
  max-width: 100%;
  margin-bottom: 22px;
  margin-left: 110px;
`;
const Div = styled.div`
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  margin-right: 80px;
  line-height: 140%;
  text-align: center;
  margin-bottom: 22px;
`;
const Div1 = styled.div`
  color: var(--Main-Text, #101828);
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  margin-right: 80px;
  line-height: 140%; /* 22.4px */
  letter-spacing: 0.15px;
`;
const DivM = styled.div`
  display: flex;
  flex-direction: column;
`;
export default CreditSuccessfulModal;
