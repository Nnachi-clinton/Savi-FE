import * as React from 'react';
import styled from 'styled-components';
import MyComponent from './MyComponent.js';
import Pix from './EasyGroupImg.webp';

function Login(props) {
  return (
    <Div>
      <ImageContainer>{/* <HeaderText>Savi.</HeaderText> */}</ImageContainer>
      <MyComponent />
    </Div>
  );
}

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ImageContainer = styled.div`
  position: relative;
  background: url(${Pix}) no-repeat center center / cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  display: flex;`;

// const HeaderText = styled.div`
//   text-align: center;
//   font-size: 18px;
//   font-weight: bold;
//   color: white; /* Set the text color */
// `;

export default Login;