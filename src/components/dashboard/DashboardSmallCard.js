import React from "react";
import styled from "styled-components";

const Container = styled.div`
    padding: 8px;
    border-left: 4px solid #F38FE5;
    border-radius: 8px;
    margin-right: 60px;
    background-color: #FFFFFF;
`;
const Text = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #101828;
    line-height: 19.6px;
    font-family: Inter;
`;
const Text2 = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #101828;
    line-height: 22.4px;
    font-family: Inter;
`;
const ButtonContainer = styled.div`
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
`;
const Button = styled.button`
    border-radius: 8px;
    padding; 4px;
    border: 1px solid black;
    color: #101828;
    font-size: 14px;
`;

const DashboardSmallCard = ({heading, data, showButton}) => {
    return (
        <Container>
            <Text>{heading}</Text>
            <ButtonContainer>
                <Text2>{data}</Text2>
                {showButton && <Button>Auto-Email</Button>}
            </ButtonContainer>
        </Container>
    );
};

export default DashboardSmallCard;