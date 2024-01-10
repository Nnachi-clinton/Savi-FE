import * as React from 'react';
import styled from 'styled-components';

function Modal(props) {
  return (
    <Main>
      <Img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f693738bf88e5205f55c409ec99d53f81fc7cafcdf2fbf6a3b7e184935cf242?apiKey=fdd3b98f4931492c8e932a5e6619fb3c&"
      />
      <Img2
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/10c75299a2e9e7b2c37b26c6e9f167e12b7715ed840f3fb8fdcf1efd5786114e?apiKey=fdd3b98f4931492c8e932a5e6619fb3c&"
      />
      <Div>Success!</Div>
      <Div2>
        You’ve updated your Saving Goals List. Good Luck in achieving your
        target!
      </Div2>
    </Main>
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
  margin: auto; /* Center horizontally */
  justify-content: center; /* Center vertically */
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
export default Modal;
