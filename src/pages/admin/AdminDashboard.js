import React from 'react';
import Calender from '../../assets/Calender.svg';
import DashboardSmallCard from '../../components/dashboard/DashboardSmallCard';
import DashboardLargeCard from '../../components/dashboard/DashboardLargeCard';
import styled from 'styled-components';
import Users from '../../assets/Users.svg';
import Money from '../../assets/Money.svg';
import Withdrawal from '../../assets/Withdrawal.svg';
import SWC from '../../components/dashboard/SWC';
import SearchIcon from '../../assets/SearchIcon.svg';
import SWCBarChart from '../../components/dashboard/SWCBarChart';
import SidebarAdmin from '../../components/adminDashboard/SidebarAdmin';
import { useState } from 'react';
import NewKeys from '../ExploreGroupAdmin/top/NewKeys';
import DashboardSectionAdmin from '../ExploreGroupDetails/DashboardSectionAdmin/DashboardSectionAdmin';
import ActiveContributionSummary from '../ExploreGroupAdmin copy/contributionSummary/ActiveContrbutionSummary';

const Container = styled.div`
  // padding: 16px;
  // background-color: #eaecf0;
`;
const Section = styled.section`
  padding: 36px 0px 18px 36px;
  display: flex;
  flex-direction: row;
  // margin: 5px;
  background-color: #ffffff;
  margin-bottom: -0.5em;
`;
const SectionCard = styled.section`
  padding: 36px 18px;
  display: flex;
  flex-direction: row;
  // margin: 0px;
  background-color: #ffffff;
  margin-bottom: -2em;
`;
const Main = styled.main`
  padding: 36px 18px;
  margin: 3px 0px;
  background-color: #ffffff;
`;
const Image = styled.img`
  padding-right: 8px;
`;
const SwcHeading = styled.div`
  border-bottom: 1px solid #e7eaee;
  padding: 16px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 28px;
`;
const InputContainer = styled.div`
  position: relative;
  left: 300px;
  display: flex;
  align-items: center;
  margin-left: auto;
`;
const Input = styled.input`
  padding: 10px 30px 10px 30px;
  border-radius: 5px;
  border: 1px solid #cccccc;
  outline: none;
  width: 200px;
  font-size: 14px;
  ::placeholder {
    color: #cccccc;
  }
`;
const Icon = styled.img`
  position: absolute;
  left: 10px;
  fill: #cccccc;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const AdminDashboard = () => {
  const currentDate = new Date().toLocaleDateString('en-NG', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  const [step, setStep] = useState(0);
  const handleStep = (step) => {
    setStep(step);
  };

  return (
    <>
      <SidebarAdmin selectstep={handleStep} />
      <Container>
        <>
          {step === 0 && (
            <>
              <div style={{ marginTop: '-66em', marginLeft: '20em' }}>
                <header style={{ backgroundColor: 'white' }}>
                  <h1> Welcome back Admin,</h1>
                  <p>
                    <Image src={Calender} alt="Calendar" />
                    {currentDate}
                  </p>
                </header>
                <Section>
                  <DashboardSmallCard
                    heading="New Registrations"
                    data="300"
                    showButton={false}
                  />
                  <DashboardSmallCard
                    heading="New Saving Groups"
                    data="50"
                    showButton={false}
                  />
                  <DashboardSmallCard
                    heading="New Defaulting Users"
                    data="100"
                    showButton={true}
                  />
                </Section>
                <SectionCard>
                  <DashboardLargeCard
                    imageSrc={Users}
                    heading="Total Saving Groups"
                    amount="3,000"
                  />
                  <DashboardLargeCard
                    imageSrc={Money}
                    heading="Total Funds Saved"
                    amount="500,000"
                  />
                  <DashboardLargeCard
                    imageSrc={Withdrawal}
                    heading="Total Funds Withdrawn"
                    amount="300,000"
                  />
                </SectionCard>
                <Main>
                  <SwcHeading>
                    <h2>Financial Overview</h2>
                    <p>Your Financial Review summary and activity.</p>
                  </SwcHeading>
                  <Content>
                    <SWC heading="Saving" data={'62'} differential={'10.78'} />
                    <SWC
                      heading="Withdrawals"
                      data={'12'}
                      differential={'1.08'}
                    />
                    <SWC heading="Saving" data={'62'} differential={'5.90'} />
                    <div>
                      <InputContainer>
                        <Input placeholder="Search" />
                        <Icon src={SearchIcon} alt="Search-icon" />
                      </InputContainer>
                    </div>
                  </Content>
                  <SWCBarChart />
                </Main>
              </div>
            </>
          )}
          {step === 1 && <NewKeys selectstep={handleStep} />}
          {/* {step === 8 && <ActiveContributionSummary selectstep={handleStep} />} */}
          {step === 7 && <DashboardSectionAdmin selectstep={handleStep} />}
        </>
      </Container>
    </>
  );
};

export default AdminDashboard;
