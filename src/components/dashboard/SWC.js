import React from 'react';
import styled from 'styled-components';
import TopArrow from '../../assets/TopArrow.svg';

const Container = styled.div`
    width: 134px;
    border-left: 4px solid #E7EAEE;
    margin-right: 40px;
`;
const Header = styled.h5`
    font-size: 16px;
    line-height: 21.86px;
    font-weight: 400px;
    font-family: Manrope;
    padding-left:4px;
`;
const Data = styled.div`
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
`;
const Text = styled.p`
    font-size: 22px;
    line-height: 30.05px;
    font-weight: 700;
    color: #191D23;
    padding-left:4px;
`;
const Diff = styled.p`
    color: #CA4AB7;
    font-weight: 600px;
    font-size: 16px;
`;

const SWC = ({heading, data, differential}) => {
    return (
        <Container>
            <Header>
                {heading}
            </Header>
            <Data>
                <Text>{data}%</Text>
                <Diff>
                    <img src={TopArrow}/> {differential}%
                </Diff>
            </Data>
        </Container>
    );
};

export default SWC;