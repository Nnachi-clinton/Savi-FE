import styled from 'styled-components';
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom';

const Savi = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 500;
`;
const LinkItem = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xl) var(--padding-5xs);
`;
const HeaderCtaBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const LeftNest = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const Faqs = styled.div`
  position: relative;
  line-height: 20px;
  display: none;
`;
const RightNest = styled.div`
  border-radius: var(--br-5xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: var(--neutral-gray-50);
`;
const FaqsParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
  font-size: var(--body-text-normal-16-size);
  color: var(--main-text);
  font-family: var(--body-text-normal-16);
`;
const MainHeader = styled.div`
  position: absolute;
  top: 0px;
  left: -0.5px;
  background-color: var(--white);
  box-shadow: 0px 4px 8px rgba(33, 33, 33, 0.08);
  width: 1440px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px var(--padding-111xl) 0px 120px;
  box-sizing: border-box;
  text-align: center;
  font-size: var(--font-size-13xl);
  font-family: var(--font-bodoni-moda);
`;
const AchieveFinancialSuccess1 = styled.span``;
const SmartSavings = styled.span`
  color: var(--primary-color);
`;
const AchieveFinancialSuccessContainer = styled.div`
  position: relative;
  font-size: 48px;
  letter-spacing: 0.25px;
  line-height: 140%;
  font-weight: 800;
  display: inline-block;
  width: 639px;
  font-family: Inter;

  // font-family: Inter;
  // font-size: 48px;
  // font-weight: 800;
  // line-height: 67px;
  // letter-spacing: 0.25px;
  // text-align: left;
`;
const ExperienceTheConvenience1 = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  display: inline-block;
  width: 551px;
  margine-bottom: 100px;
`;
const LearnMore = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
`;

const AchieveFinancialSuccessWithParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  font-family: Inter;
`;
const FrameChild = styled.img`
  position: relative;
  width: 534px;
  height: 479px;
  object-fit: cover;
`;
const FrameParent = styled.div`
  position: absolute;
  top: 93px;
  left: calc(50% - 721px);
  background-color: rgba(245, 185, 237, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-61xl) var(--padding-111xl);
  gap: var(--gap-5xs);
  font-size: var(--body-text-normal-16-size);
  color: var(--main-text);
`;
const UsersIcon1 = styled.img`
  position: relative;
  width: 50px;
  height: 50px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const JoinThriftGroups1 = styled.div`
  position: relative;
  font-size: var(--font-size-xl);
  letter-spacing: 0.25px;
  line-height: 140%;
  font-weight: 600;
`;
const SaveCollectivelyWith1 = styled.div`
  align-self: stretch;
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
`;
const ArrowIcon6 = styled.img`
  position: relative;
  width: 16px;
  height: 12px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const FrameDiv = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  color: var(--primary-color);
`;
const UsersParent = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) 20px;
  box-sizing: border-box;
  gap: var(--gap-xs);
`;
const HassleFreeCashouts = styled.div`
  position: relative;
  font-size: var(--font-size-xl);
  letter-spacing: 0.25px;
  line-height: 140%;
  font-weight: 600;
`;
const FrameParent1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  color: var(--primary-color);
`;
const MoneyWithdrawalParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) 22px;
  gap: var(--gap-xs);
`;
const ShieldAltParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) 17px;
  gap: var(--gap-xs);
`;
const WalletAltParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 21px 7.5px;
  gap: var(--gap-xs);
`;
const FrameGroup = styled.div`
  position: absolute;
  top: 732px;
  left: -0.5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-61xl) 147px;
  gap: var(--gap-11xl);
  font-size: var(--body-text-normal-16-size);
  color: var(--color-black);
  width: 1440px;
`;

const HowItWorks1 = styled.b`
  position: relative;
  letter-spacing: 0.25px;
  line-height: 140%;
`;
const Div = styled.div`
  position: relative;
  line-height: 140%;
`;
const Wrapper = styled.div`
  border-radius: var(--br-81xl);
  background-color: var(--color-darkmagenta-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) var(--padding-3xs);
`;
const FrameWrapper = styled.div`
  position: relative;
  width: 28px;
  height: 30px;
`;
const ContributionAnalytics = styled.div`
  position: relative;
  line-height: 140%;
  font-weight: 600;
`;
const CreateAccountWith1 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--body-text-normal-16-size);
  letter-spacing: 0.15px;
  line-height: 140%;
`;
const SignUpInSecondsParent = styled.div`
  width: 266px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  font-size: var(--font-size-xl);
  color: var(--main-text);
`;
const GroupParent = styled.div`
  width: 314px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;
const Container = styled.div`
  border-radius: var(--br-81xl);
  background-color: var(--color-darkmagenta-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) var(--padding-3xs);
`;
const AutomatedContributions = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 140%;
  font-weight: 600;
`;
const JoinOrCreateThriftGroupsParent = styled.div`
  width: 303px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  font-size: var(--font-size-xl);
  color: var(--main-text);
`;
const FrameParent6 = styled.div`
  width: 340px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;
const GroupDiv = styled.div`
  position: relative;
  width: 31px;
  height: 30px;
`;
const ScheduleAutomaticTransfers1 = styled.div`
  position: relative;
  font-size: var(--body-text-normal-16-size);
  letter-spacing: 0.15px;
  line-height: 140%;
  display: inline-block;
  width: 303px;
`;
const GroupParent1 = styled.div`
  width: 332px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;
const MonitorYourSavings1 = styled.div`
  position: relative;
  font-size: var(--body-text-normal-16-size);
  letter-spacing: 0.15px;
  line-height: 140%;
  display: inline-block;
  width: 311px;
`;
const TrackAndCelebrateParent = styled.div`
  width: 311px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  font-size: var(--font-size-xl);
  color: var(--main-text);
`;
const FrameParent7 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;
const FrameParent5 = styled.div`
  width: 362px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
  font-size: var(--body-text-normal-16-size);
  color: var(--color-black);
`;
const HowItWorksParent = styled.div`
  width: 362px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xl);
`;
const FrameItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgba(245, 185, 237, 0.3);
  width: 700px;
  height: 500px;
`;
const YoungAfricanWomanSellingLoIcon = styled.img`
  position: absolute;
  top: -1.55px;
  left: 0.5px;
  width: 700px;
  height: 429px;
  object-fit: cover;
`;
const FrameInner = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-81xl);
  background-color: var(--white);
  width: 167px;
  height: 40px;
`;
const JoinedSuccessful = styled.div`
  position: absolute;
  top: 11px;
  left: 45px;
  letter-spacing: 0.35px;
  line-height: 140%;
`;
const SuccessIcon2 = styled.img`
  position: absolute;
  top: 8px;
  left: 10px;
  width: 24px;
  height: 24px;
  overflow: hidden;
  object-fit: cover;
`;
const RectangleGroup = styled.div`
  position: absolute;
  top: 210.45px;
  left: 227px;
  width: 167px;
  height: 40px;
`;
const DefaultLineChartGradient1 = styled.img`
  position: absolute;
  top: calc(50% - 29px);
  left: 60px;
  width: 107.34px;
  height: 67.12px;
  object-fit: contain;
`;
const Savings = styled.p`
  margin: 0;
`;
const SavingsGrowth = styled.div`
  position: absolute;
  top: 3px;
  left: 15px;
  letter-spacing: 0.35px;
  line-height: 140%;
  font-weight: 500;
`;
const RectangleContainer = styled.div`
  position: absolute;
  top: 345.45px;
  left: 213px;
  width: 167px;
  height: 40px;
  overflow: hidden;
`;
const JoinedSavingGroup1 = styled.div`
  position: absolute;
  top: 11px;
  left: 34px;
  letter-spacing: 0.35px;
  line-height: 140%;
`;
const RectangleParent1 = styled.div`
  position: absolute;
  top: 284.45px;
  left: 522px;
  width: 167px;
  height: 40px;
`;
const RectangleParent = styled.div`
  position: relative;
  width: 700px;
  height: 427px;
  overflow: hidden;
  flex-shrink: 0;
  font-size: var(--assistive-text-normal-12-size);
  color: var(--main-text);
`;
const FrameParent4 = styled.div`
  position: absolute;
  top: 1136px;
  left: -1px;
  width: 1441px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-61xl) 170px;
  box-sizing: border-box;
  gap: 111px;
`;
const ExchangeParent = styled.div`
  width: 311px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const WalletParent = styled.div`
  width: 303px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const FrameParent8 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-41xl);
  font-size: var(--font-size-xl);
  color: var(--main-text);
`;
const WhyUseSaviParent = styled.div`
  position: absolute;
  top: 1806px;
  left: -1px;
  width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-61xl) 107.5px;
  box-sizing: border-box;
  gap: 32px;
`;
const SaviHasTransformed2 = styled.div`
  position: absolute;
  top: calc(50% - 54.55px);
  left: calc(50% - 154.5px);
  line-height: 140%;
  display: inline-block;
  width: 308px;
`;
const SaviHasTransformedTheWayIWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--white);
  border-top: 2px dashed var(--primary-color);
  box-sizing: border-box;
  width: 351px;
  height: 170px;
  overflow: hidden;
`;
const GroupChild = styled.img`
  position: absolute;
  top: 169.7px;
  left: 139.5px;
  width: 18px;
  height: 23px;
  object-fit: cover;
`;
const FrameParent10 = styled.div`
  position: relative;
  width: 351px;
  height: 192.7px;
`;
const FrameChild2 = styled.img`
  position: relative;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
`;
const WidowerAssociation = styled.div`
  position: relative;
  line-height: 140%;
  font-weight: 200;
  color: var(--grey-500);
`;
const AderemirekunAyomideParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;
const EllipseParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;
const GroupParent2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;
const IveFinallyFound1 = styled.div`
  position: absolute;
  top: calc(50% - 65.6px);
  left: calc(50% - 156.5px);
  line-height: 140%;
  display: inline-block;
  width: 313px;
`;
const GroupInner = styled.img`
  position: absolute;
  top: 169.6px;
  left: 143.5px;
  width: 18px;
  height: 23px;
  object-fit: cover;
`;
const FrameParent12 = styled.div`
  position: relative;
  width: 351px;
  height: 192.6px;
`;
const FrameParent9 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-41xl);
  font-size: var(--body-text-normal-16-size);
  color: var(--color-black);
`;
const WhatOurUsersSayParent = styled.div`
  position: absolute;
  top: 2212px;
  left: -1px;
  background-color: #f2f4f7;
  width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-61xl) 99.5px;
  box-sizing: border-box;
  gap: var(--gap-11xl);
`;
const Savi2 = styled.div`
  position: relative;
  font-size: var(--font-size-13xl);
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 500;
  font-family: var(--font-bodoni-moda);
  color: var(--white);
`;
const Testimonials = styled.div`
  position: relative;
  line-height: 20px;
`;
const LinkItem1 = styled.div`
  align-self: stretch;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xl) var(--padding-5xs);
`;
const ForMoreEnquiries1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  letter-spacing: 0.15px;
  line-height: 140%;
`;
const Helpsupporteasylendcom = styled.div`
  position: absolute;
  top: 0px;
  left: 165px;
  letter-spacing: 0.15px;
  line-height: 140%;
`;
const ForMoreEnquiriesParent = styled.div`
  position: relative;
  width: 345px;
  height: 26px;
  text-align: left;
  font-size: var(--body-text-normal-16-size);
  color: var(--white);
`;
const LeftNestParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
`;
const DividerIcon = styled.img`
  position: relative;
  width: 1278px;
  height: 1px;
  object-fit: cover;
  opacity: 0.2;
`;
const FrameParent13 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 56px;
`;
const SocialIconsWhiteInstagr1 = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  object-fit: cover;
`;
const SocialLinks = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const EasylendAllRightsReservedParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 824px;
  text-align: left;
  font-size: var(--body-text-normal-16-size);
  color: var(--white);
`;
const Footer = styled.div`
  position: absolute;
  top: 2721px;
  right: 0px;
  background-color: var(--primary-color);
  width: 1440px;
  height: 315px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 56px var(--padding-61xl);
  box-sizing: border-box;
  gap: var(--gap-5xl);
  text-align: center;
  font-size: var(--paragraph-p3-regular-size);
  color: var(--neutral-gray-900);
`;
const LandingPageRoot = styled.div`
  position: relative;
  background-color: var(--white);
  width: 1440px;
  height: 3036px;
  overflow: hidden;
  text-align: left;
  font-size: var(--headline-bold-40-size);
  color: var(--primary-color);
  font-family: var(--body-text-normal-16);
`;

const LandingPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Redirect to the signup page
    navigate('/signup');
  };

  return (
    <LandingPageRoot>
      <MainHeader>
        <LeftNest>
          <HeaderCtaBlock>
            <LinkItem>
              <Savi>Savi.</Savi>
            </LinkItem>
          </HeaderCtaBlock>
        </LeftNest>
        <FaqsParent>
          <Faqs>FAQs</Faqs>
          <RightNest>
            <HeaderCtaBlock>
              <Button onClick={handleButtonClick}>Get Started</Button>
            </HeaderCtaBlock>
          </RightNest>
        </FaqsParent>
      </MainHeader>
      <FrameParent>
        <AchieveFinancialSuccessWithParent>
          <AchieveFinancialSuccessContainer>
            <AchieveFinancialSuccess1>{`Achieve Financial Success with `}</AchieveFinancialSuccess1>
            <SmartSavings>{`Savi: `}</SmartSavings>
            <AchieveFinancialSuccess1>{`The Future of `}</AchieveFinancialSuccess1>
            <SmartSavings>Smart Savings</SmartSavings>
            <AchieveFinancialSuccess1>.</AchieveFinancialSuccess1>
          </AchieveFinancialSuccessContainer>
          <ExperienceTheConvenience1>
            Experience the convenience of secure group savings and personalized
            savings plans with Savi. Take control of your finances and unlock a
            brighter financial future.
          </ExperienceTheConvenience1>
          <HeaderCtaBlock>
            <Button onClick={handleButtonClick}>Get Started</Button>
          </HeaderCtaBlock>
        </AchieveFinancialSuccessWithParent>
        <FrameChild alt="my picture" src="/frame-38813701@2x.png" />
      </FrameParent>
      <FrameGroup>
        <UsersParent>
          <UsersIcon1 alt="" src="/users@2x.png" />
          <JoinThriftGroups1>Join Thrift Groups</JoinThriftGroups1>
          <SaveCollectivelyWith1>
            Save collectively with rotating lump sum payouts, eliminating risks
            of traditional methods.
          </SaveCollectivelyWith1>
          <FrameDiv>
            <HeaderCtaBlock>
              <LearnMore>Learn more</LearnMore>
            </HeaderCtaBlock>
            <ArrowIcon6 alt="" src="/arrow@2x.png" />
          </FrameDiv>
        </UsersParent>
        <MoneyWithdrawalParent>
          <UsersIcon1 alt="" src="/moneywithdrawal@2x.png" />
          <HassleFreeCashouts>Hassle-Free Cashouts</HassleFreeCashouts>
          <SaveCollectivelyWith1>
            Enjoy rotating lump sum payouts, ensuring fair distribution among
            group members.
          </SaveCollectivelyWith1>
          <FrameParent1>
            <HeaderCtaBlock>
              <LearnMore>Learn more</LearnMore>
            </HeaderCtaBlock>
            <ArrowIcon6 alt="" src="/arrow@2x.png" />
          </FrameParent1>
        </MoneyWithdrawalParent>
        <ShieldAltParent>
          <UsersIcon1 alt="" src="/shieldalt@2x.png" />
          <HassleFreeCashouts>Secure and Convenient</HassleFreeCashouts>
          <SaveCollectivelyWith1>
            Enjoy peace of mind with robust security measures and user-friendly
            wallet management.
          </SaveCollectivelyWith1>
          <FrameParent1>
            <HeaderCtaBlock>
              <LearnMore>Learn more</LearnMore>
            </HeaderCtaBlock>
            <ArrowIcon6 alt="" src="/arrow@2x.png" />
          </FrameParent1>
        </ShieldAltParent>
        <WalletAltParent>
          <UsersIcon1 alt="" src="/walletalt@2x.png" />
          <HassleFreeCashouts>Easy Wallet Management</HassleFreeCashouts>
          <SaveCollectivelyWith1>
            Seamlessly manage your funds, add money, and withdraw when you need
            it.
          </SaveCollectivelyWith1>
          <FrameParent1>
            <HeaderCtaBlock>
              <LearnMore>Learn more</LearnMore>
            </HeaderCtaBlock>
            <ArrowIcon6 alt="" src="/arrow@2x.png" />
          </FrameParent1>
        </WalletAltParent>
      </FrameGroup>
      <FrameParent4>
        <HowItWorksParent>
          <HowItWorks1>{`How It Works `}</HowItWorks1>
          <FrameParent5>
            <GroupParent>
              <FrameWrapper>
                <Wrapper>
                  <Div>1</Div>
                </Wrapper>
              </FrameWrapper>
              <SignUpInSecondsParent>
                <ContributionAnalytics>
                  Sign Up in Seconds
                </ContributionAnalytics>
                <CreateAccountWith1>
                  Create account with Savvi and start saving.
                </CreateAccountWith1>
              </SignUpInSecondsParent>
            </GroupParent>
            <FrameParent6>
              <Container>
                <Div>2</Div>
              </Container>
              <JoinOrCreateThriftGroupsParent>
                <AutomatedContributions>
                  Join or Create Thrift Groups
                </AutomatedContributions>
                <CreateAccountWith1>
                  Create your account quickly and start your savings journey
                  within moments.
                </CreateAccountWith1>
              </JoinOrCreateThriftGroupsParent>
            </FrameParent6>
            <GroupParent1>
              <GroupDiv>
                <Wrapper>
                  <Div>3</Div>
                </Wrapper>
              </GroupDiv>
              <JoinOrCreateThriftGroupsParent>
                <AutomatedContributions>
                  Automated Contributions
                </AutomatedContributions>
                <ScheduleAutomaticTransfers1>
                  Schedule automatic transfers from your wallet to your savings
                  group for hassle-free saving.
                </ScheduleAutomaticTransfers1>
              </JoinOrCreateThriftGroupsParent>
            </GroupParent1>
            <FrameParent7>
              <Container>
                <Div>4</Div>
              </Container>
              <TrackAndCelebrateParent>
                <AutomatedContributions>
                  Track and Celebrate
                </AutomatedContributions>
                <MonitorYourSavings1>
                  Monitor your savings growth, view contributions, and celebrate
                  milestones on our user-friendly dashboard.
                </MonitorYourSavings1>
              </TrackAndCelebrateParent>
            </FrameParent7>
          </FrameParent5>
        </HowItWorksParent>
        <RectangleParent>
          <FrameItem />
          <YoungAfricanWomanSellingLoIcon
            alt=""
            src="/youngafricanwomansellinglocalmarketsmilingusinghermobilephoneyoungafricanwomansellinglocalmarket166609762-1@2x.png"
          />
          <RectangleGroup>
            <FrameInner />
            <JoinedSuccessful>Joined successful</JoinedSuccessful>
            <SuccessIcon2 alt="" src="/success@2x.png" />
          </RectangleGroup>
          <RectangleContainer>
            <FrameInner />
            <DefaultLineChartGradient1
              alt=""
              src="/default-line-chart-gradient@2x.png"
            />
            <SavingsGrowth>
              <Savings>{`Savings `}</Savings>
              <Savings>growth</Savings>
            </SavingsGrowth>
          </RectangleContainer>
          <RectangleParent1>
            <FrameInner />
            <JoinedSavingGroup1>Joined Saving Group</JoinedSavingGroup1>
            <SuccessIcon2 alt="" src="/success@2x.png" />
          </RectangleParent1>
        </RectangleParent>
      </FrameParent4>
      <WhyUseSaviParent>
        <HowItWorks1>Why use Savi?</HowItWorks1>
        <FrameParent8>
          <ExchangeParent>
            <UsersIcon1 alt="" src="/exchange@2x.png" />
            <ContributionAnalytics>
              Contribution Analytics
            </ContributionAnalytics>
            <CreateAccountWith1>
              Admins gain valuable insights into group contributions and track
              member participation.
            </CreateAccountWith1>
          </ExchangeParent>
          <WalletParent>
            <UsersIcon1 alt="" src="/wallet@2x.png" />
            <AutomatedContributions>Wallet Integration</AutomatedContributions>
            <CreateAccountWith1>
              Add funds to your wallet easily using various payment methods and
              withdraw securely.
            </CreateAccountWith1>
          </WalletParent>
          <WalletParent>
            <UsersIcon1 alt="" src="/notification@2x.png" />
            <AutomatedContributions>
              Notifications and Reminders
            </AutomatedContributions>
            <ScheduleAutomaticTransfers1>
              Stay informed about group activities, cashouts, and important
              updates.
            </ScheduleAutomaticTransfers1>
          </WalletParent>
        </FrameParent8>
      </WhyUseSaviParent>
      <WhatOurUsersSayParent>
        <HowItWorks1>What our users say?</HowItWorks1>
        <FrameParent9>
          <GroupParent2>
            <FrameParent10>
              <SaviHasTransformedTheWayIWrapper>
                <SaviHasTransformed2>
                  "Savi has transformed the way I save money. Being part of a
                  thrift group has made it easier to stay motivated and
                  accountable. With Savi, I've achieved my savings goals faster
                  than ever before!"
                </SaviHasTransformed2>
              </SaviHasTransformedTheWayIWrapper>
              <GroupChild alt="" src="/polygon-1@2x.png" />
            </FrameParent10>
            <EllipseParent>
              <FrameChild2 alt="" src="/ellipse-4@2x.png" />
              <AderemirekunAyomideParent>
                <Div>Aderemirekun Ayomide</Div>
                <WidowerAssociation>Widower Association</WidowerAssociation>
              </AderemirekunAyomideParent>
            </EllipseParent>
          </GroupParent2>
          <GroupParent2>
            <FrameParent10>
              <SaviHasTransformedTheWayIWrapper>
                <SaviHasTransformed2>
                  "Savi has transformed the way I save money. Being part of a
                  thrift group has made it easier to stay motivated and
                  accountable. With Savi, I've achieved my savings goals faster
                  than ever before!"
                </SaviHasTransformed2>
              </SaviHasTransformedTheWayIWrapper>
              <GroupChild alt="" src="/polygon-1@2x.png" />
            </FrameParent10>
            <EllipseParent>
              <FrameChild2 alt="" src="/ellipse-4@2x.png" />
              <AderemirekunAyomideParent>
                <Div>Aderemirekun Ayomide</Div>
                <WidowerAssociation>Widower Association</WidowerAssociation>
              </AderemirekunAyomideParent>
            </EllipseParent>
          </GroupParent2>
          <GroupParent2>
            <FrameParent12>
              <SaviHasTransformedTheWayIWrapper>
                <IveFinallyFound1>
                  I've finally found a savings platform that understands my
                  needs. Savi's personal savings feature has made it effortless
                  for me to reach my financial milestones. It's empowering to
                  have control over my savings journey
                </IveFinallyFound1>
              </SaviHasTransformedTheWayIWrapper>
              <GroupInner alt="" src="/polygon-1@2x.png" />
            </FrameParent12>
            <EllipseParent>
              <FrameChild2 alt="" src="/ellipse-4@2x.png" />
              <AderemirekunAyomideParent>
                <Div>Aderemirekun Ayomide</Div>
                <WidowerAssociation>Widower Association</WidowerAssociation>
              </AderemirekunAyomideParent>
            </EllipseParent>
          </GroupParent2>
        </FrameParent9>
      </WhatOurUsersSayParent>
      <Footer>
        <FrameParent13>
          <LeftNestParent>
            <LeftNest>
              <HeaderCtaBlock>
                <Savi2>Savi.</Savi2>
                <LinkItem1>
                  <Testimonials>Testimonials</Testimonials>
                </LinkItem1>
                <LinkItem1>
                  <Testimonials>FAQs</Testimonials>
                </LinkItem1>
              </HeaderCtaBlock>
            </LeftNest>
            <ForMoreEnquiriesParent>
              <ForMoreEnquiries1>For more enquiries:</ForMoreEnquiries1>
              <Helpsupporteasylendcom>
                helpsupport@easylend.com
              </Helpsupporteasylendcom>
            </ForMoreEnquiriesParent>
          </LeftNestParent>
          <DividerIcon alt="" src="/divider@2x.png" />
        </FrameParent13>
        <EasylendAllRightsReservedParent>
          <LearnMore>© 2023 EasyLend. All rights reserved</LearnMore>
          <SocialLinks>
            <SocialIconsWhiteInstagr1
              alt=""
              src="/social-icons--white--instagram@2x.png"
            />
            <SocialIconsWhiteInstagr1
              alt=""
              src="/social-icons--white--twitter@2x.png"
            />
            <SocialIconsWhiteInstagr1
              alt=""
              src="/social-icons--white--youtube@2x.png"
            />
          </SocialLinks>
        </EasylendAllRightsReservedParent>
      </Footer>
    </LandingPageRoot>
  );
};

export default LandingPage;
