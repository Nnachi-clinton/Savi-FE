import React, { useState } from 'react';
import styled from 'styled-components';
import cheveron from './cheveron.svg';
import Frame from './Frame.svg';
//import rasp from './rasp.svg';

const Container = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  margin-top: 5vw;
  background-color: #f5f5f5;
  height: 100vh;
  width: 1000px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Name1 = styled.div`
  font-weight: 700;
  font-size: 32px;
  width: 338px;
  height: 45px;
`;

const Head1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Head = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  gap: 12px;
`;

const But = styled.button`
  background-color: #b5179e;
  width: 133px;
  height: 51px;
  border-radius: 8px;
  font-size: 16px;
  color: white;
  cursor: pointer;
  border: none;
  margin-top: -8em;
`;

const Tex = styled.div`
  color: #667085;
  font-size: 16px;
  height: 96px;
  margin-top: 1vh;
`;

const Report = styled.div`
  display: grid;
  width: 422px;
  height: 250px;
  background-color: white;
  border-radius: 10px;
  border-color: grey;
`;

const Rep2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 150px;
`;

const Rep = styled.div`
  color: #98a2b3;
  font-size: 14px;
  font-weight: 400;
  width: 142px;
  margin-top: 1.4vh;
`;

const Rep1 = styled.div`
  color: #101828;
  font-size: 14px;
  font-weight: 600;
  margin-top: 0.5vh;
  margin-bottom: 0.7vh;
`;

const Mem = styled.div`
  color: gray;
`;

const Tabb = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tab = styled.div`
  height: 216px;
  width: 378px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #ddd;
  color: grey;
`;

const Td = styled.td`
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

const Content = styled.div`
  display: flex;
  gap: 50px;
  margin-right: 20vw !important;
`;

function ExploreGroupSavings() {
  return (
    <>
      <Container>
        <Top>
          <Name1>Lagos Corp Members</Name1>
          <Head1>
            <Head>
              <div>Active saving Group</div>
              <div>
                <img src={cheveron} alt="" />
              </div>
              <div>Explore Savings group</div>
              <div>
                <img src={cheveron} alt="" />
              </div>
              <div>Lagos Corp Members</div>
            </Head>
            <div>
              <But>join</But>
            </div>
          </Head1>
        </Top>
        <div>
          <img src={Frame} alt="groupphoto" />
          <Tex>
            Bros/Sis, no dull yourself for dis service year money mata. Join
            Lagos Corp Members Thrift Saving Group sharp-sharp! We go secure
            your money, make am grow well-well, and support each other for dis
            money journey. Learn money sense, plan for your future, and enjoy
            the benefits of our community. No time to waste, come join us now!
            Contact [07067482633]. Make we flex our money together!
          </Tex>
        </div>
        <Content>
          <Report>
            <Rep2>
              <Rep>
                Contribution Amount
                <Rep1>
                  {/* {group.amount} */}
                  500,000
                </Rep1>
              </Rep>
              <Rep>
                Schedule Daily
                <Rep1>Daily</Rep1>
              </Rep>
            </Rep2>
            <Rep2>
              <Rep>
                contribution Timeline
                <Rep1>{/* {group.timelime} */}5 months</Rep1>
              </Rep>
              <Rep>
                Estimated Collection
                <Rep1>2,000,000</Rep1>
              </Rep>
            </Rep2>
            <Rep2>
              <Rep>
                Start Date
                <Rep1>May 1,2022</Rep1>
              </Rep>
              <Rep>
                End Date
                <Rep1> October 1, 2022</Rep1>
              </Rep>
            </Rep2>
            <Rep2>
              {' '}
              <Rep>
                Available Slot <Rep1>2 and 6</Rep1>
              </Rep>
              <Rep>
                Total slot
                <Rep1>6</Rep1>
              </Rep>
            </Rep2>
          </Report>
          <Tabb>
            <Mem>Members</Mem>
            <Tab>
              <Table>
                <thead>
                  <tr>
                    <Th>Slot</Th>
                    <Th>Name</Th>
                    <Th>Performance</Th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <Td>1</Td>
                    <Td>Oluwatomilola Eze</Td>
                    <Td>90.23%</Td>
                  </tr>
                  <tr>
                    <Td>2</Td>
                    <Td>Mohammed Adebayo</Td>
                    <Td>45.50%</Td>
                  </tr>
                  <tr>
                    <Td>3</Td>
                    <Td>Oluwadamilare Idowu</Td>
                    <Td>90.23%</Td>
                  </tr>
                  <tr>
                    <Td>4</Td>
                    <Td>Harry Smith</Td>
                    <Td>New user</Td>
                  </tr>
                </tbody>
              </Table>
            </Tab>
          </Tabb>
        </Content>
      </Container>
    </>
  );
}

export default ExploreGroupSavings;
