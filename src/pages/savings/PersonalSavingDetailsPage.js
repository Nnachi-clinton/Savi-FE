import React, { useEffect, useState } from 'react';
import PersonalSavingDetails from '../../components/personalSaving/PersonalSavingDetails';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  padding: 16px 64px 16px 32px;
  width: 70%;
  margin-left: 20em;
`;
const Navbar = styled.nav`
  margin-bottom: 24px;
`;
const GoalNav = styled(Link)`
  color: #98a2b3;
  font-size: 14px;
  font-weight: 400;
  padding-right: 14px;
  text-decoration: none;
`;
const Goal = styled.span`
  color: #101828;
  font-size: 14px;
  font-weight: 600;
  padding-left: 14px;
`;
const Section = styled.section`
  position: relative;
  margin-bottom: 32px;
`;
const Heading = styled.h2`
  font-size: 32px;
  color: #101828;
  font-weight: 700;
  display: inline;
`;
const NewGoal = styled(Link)`
  color: #2f80ed;
  font-size: 16px;
  font-weight: 600;
  display: inline;
  position: absolute;
  right: 0px;
  padding-top: 10px;
  text-decoration: none;
`;

const PersonalSavingDetailsPage = ({ selectstep }) => {
  const [goalData, setGoalData] = useState({
    title: 'None',
    amountSaved: 0,
    totalTarget: 0,
    startDate: '',
    endDate: '',
  });
  const [daysLeft, setDaysLeft] = useState(0);
  const personalSavingsId = localStorage.getItem('PersonalGoalId');
  console.log(personalSavingsId);
  useEffect(() => {
    axios
      .get(
        `https://localhost:7240/api/Savings/getPersonalSavings/${personalSavingsId}`
      )
      .then((response) => {
        console.log(response.data.result);
        setGoalData({
          title: response.data.result.targetName,
          amountSaved: response.data.result.amountSaved,
          totalTarget: response.data.result.targetAmount,
          startDate: response.data.result.startDate,
          endDate: response.data.result.endDate,
        });
        const currentDate = new Date();
        const endDate = new Date(response.data.result.endDate);
        const timeDifference = endDate.getTime() - currentDate.getTime();
        const daysRemaining = Math.ceil(timeDifference / (1000 * 3600 * 24));
        setDaysLeft(Math.max(0, daysRemaining));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Container>
      <Navbar>
        <GoalNav onClick={() => selectstep(1)}>My Goal</GoalNav>
        <span style={{ color: '#98A2B3', fontSize: '20px' }}>&#8250;</span>
        <Goal>{goalData.title}</Goal>
      </Navbar>
      <Section>
        <Heading>{goalData.title}</Heading>
        <NewGoal onClick={() => selectstep(7)}>Add New Goal</NewGoal>
      </Section>

      <PersonalSavingDetails
        amountSaved={goalData.amountSaved}
        totalTarget={goalData.totalTarget}
        daysLeft={daysLeft}
      />
    </Container>
  );
};

export default PersonalSavingDetailsPage;
