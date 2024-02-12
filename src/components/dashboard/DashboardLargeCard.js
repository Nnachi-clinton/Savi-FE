import React from "react";
import styled from "styled-components";

const Container = styled.div`   
    padding: 8px;
    border-radius: 8px;
    margin-right: 24px;
    border 24px solid #EAECF0;
    box-shadow: 4px -2px 8px rgba(0, 0, 0, 0.1);
    box-shadow: -2px 4px 8px rgba(0, 0, 0, 0.1);
    width: 248px;
    background-color: #FFFFFF;
`;
const Header = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #101828;
    font-family: Inter;
    margin: 12px 0px;
`;
const Text = styled.p`
    font-weight: 600;
    font-size: 24px;
    line-height: 29.05px;
    color: #101828;
    font-family: Inter;
    margin: 12px 0px;
`;

const DashboardLargeCard = ({imageSrc, heading, amount}) => {
    return (
        <Container>
            <div>
                <img src={imageSrc}/>
            </div>
            <Header>
                {heading}
            </Header>
            <Text>&#8358;{amount}</Text>
        </Container>
    );
};

export default DashboardLargeCard;