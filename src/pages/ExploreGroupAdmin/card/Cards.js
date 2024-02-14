import Groups from '../groups/Group';
import Icon from './Icon.js';
import './style.css';
import '../Glo.css';
import styled from 'styled-components';

function Cards() {
  return (
    <div style={{ marginTop: '3em', marginLeft: '-5em' }}>
      <GroupCard>
        <Header>
          <img
            src="/assets/img_194_24282_cfdc0d.jpeg"
            className="image-container"
            alt=""
          />
        </Header>
        <Group>
          <Container>
            <Button>Waiting</Button>
            <ImageContainer>
              <ImageContainer2>
                <div className="contribution-section1">
                  <img
                    src="/assets/img_I194_24305_115_2216_e1c0a9.jpeg"
                    className="rounded-image"
                    alt=""
                    style={{ marginLeft: '-8em' }}
                  />
                </div>
              </ImageContainer2>
              <Icon className="svg-container" />
            </ImageContainer>
          </Container>
          <Groups />
        </Group>
      </GroupCard>
    </div>
  );
}

export default Cards;

const GroupCard = styled.div`
  background: var(--color-white);
  // padding: 10px;
  display: flex;
  padding-right: 25px;
  margin-left: 410px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: auto;
  max-width: 892px;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.16);
`;
const Header = styled.div`
  flex: 0 0 auto;
  padding-top: 54px;
  padding-bottom: 55px;
  margin-left: 5em;
`;

const Group = styled.div`
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  margin-left: 29px;
`;

const Container = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 70%;
`;

const ImageContainer = styled.div`
  flex: 0 1 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: 380px;
`;
const ImageContainer2 = styled.div`
  flex: 0 1 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  height: 47px;
  margin-left: 16em;
`;

const Button = styled.button`
  flex: 0 0 auto;
  border: none;
  border-radius: var(--border-radius-1678);
  font: var(--font-weight-500) var(--font-size-16) 'Inter';
  background: var(--color-lavender-d88d7bed);
  box-sizing: border-box;
  display: block;
  width: 92px;
  min-width: 92px;
  height: 48px;
  color: var(--color-dodgerblue-8a8544b8);
  letter-spacing: 0.08px;
`;
