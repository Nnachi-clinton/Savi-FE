import styled from 'styled-components';

const Month = styled.div`
  position: relative;
  letter-spacing: 0.38px;
  line-height: 1.5rem;
  font-weight: 600;
`;
const SfIconChevronforward = styled.img`
  position: relative;
  width: 0.42rem;
  height: 0.72rem;
  object-fit: cover;
`;
const MonthYear1 = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const SfSymbolChevronbackward = styled.img`
  position: relative;
  width: 0.62rem;
  height: 1.08rem;
  object-fit: cover;
`;
const Arrows = styled.div`
  width: 3.19rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const MonthPicker = styled.div`
  position: absolute;
  width: calc(100% - 32px);
  top: 0.5rem;
  right: 1rem;
  left: 1rem;
  height: 2.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.44rem 0rem;
  box-sizing: border-box;
  text-align: left;
`;
const Day1 = styled.div`
  position: absolute;
  top: calc(50% - 9px);
  left: calc(50% - 14px);
  letter-spacing: -0.08px;
  line-height: 1.13rem;
  font-weight: 600;
`;
const Day = styled.div`
  position: relative;
  width: 2rem;
  height: 1.13rem;
`;
const Day3 = styled.div`
  position: absolute;
  top: calc(50% - 9px);
  left: calc(50% - 15.5px);
  letter-spacing: -0.08px;
  line-height: 1.13rem;
  font-weight: 600;
`;
const Day2 = styled.div`
  position: relative;
  width: 2rem;
  height: 1.13rem;
  text-align: left;
`;
const Day5 = styled.div`
  position: absolute;
  top: calc(50% - 9px);
  left: calc(50% - 13px);
  letter-spacing: -0.08px;
  line-height: 1.13rem;
  font-weight: 600;
`;
const Day11 = styled.div`
  position: absolute;
  top: calc(50% - 9px);
  left: calc(50% - 10.5px);
  letter-spacing: -0.08px;
  line-height: 1.13rem;
  font-weight: 600;
`;
const CalendarDayrow = styled.div`
  position: absolute;
  width: calc(100% - 32px);
  top: 3.5rem;
  right: 1rem;
  left: 1rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  font-size: var(--default-bold-footnote-size);
  color: var(--label-color-light-tertiary);
  font-family: var(--default-bold-footnote);
`;
const Date1 = styled.div`
  position: absolute;
  width: 100%;
  top: calc(50% - 12px);
  left: 0rem;
  letter-spacing: 0.38px;
  line-height: 1.5rem;
  display: none;
  align-items: center;
  justify-content: center;
`;
const Digit = styled.div`
  position: relative;
  width: 2rem;
  height: 2rem;
  color: var(--default-systemred-light);
`;
const Date2 = styled.div`
  position: absolute;
  width: 100%;
  top: calc(50% - 12px);
  left: 0rem;
  letter-spacing: 0.38px;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Digit2 = styled.div`
  position: relative;
  width: 2rem;
  height: 2rem;
`;
const Date5 = styled.div`
  position: absolute;
  width: 100%;
  top: calc(50% - 16px);
  left: 0rem;
  letter-spacing: 0.38px;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
`;
const CalendarDayrow1 = styled.div`
  position: absolute;
  width: calc(100% - 32px);
  top: 5.25rem;
  right: 1rem;
  left: 1rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-3xs) 0rem;
  box-sizing: border-box;
`;
const Date8 = styled.div`
  position: absolute;
  width: 100%;
  top: calc(50% - 12px);
  left: 0rem;
  letter-spacing: 0.38px;
  line-height: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Digit8 = styled.div`
  position: relative;
  border-radius: var(--br-81xl);
  background-color: var(--primary-color);
  width: 2rem;
  height: 2rem;
  color: var(--white);
`;
const CalendarDayrow2 = styled.div`
  position: absolute;
  width: calc(100% - 32px);
  top: 8.25rem;
  right: 1rem;
  left: 1rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-3xs) 0rem;
  box-sizing: border-box;
`;
const CalendarDayrow3 = styled.div`
  position: absolute;
  width: calc(100% - 32px);
  top: 11.25rem;
  right: 1rem;
  left: 1rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-3xs) 0rem;
  box-sizing: border-box;
`;
const CalendarDayrow4 = styled.div`
  position: absolute;
  width: calc(100% - 32px);
  top: 14.25rem;
  right: 1rem;
  left: 1rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-3xs) 0rem;
  box-sizing: border-box;
`;
const Date33 = styled.div`
  position: absolute;
  width: 100%;
  top: calc(50% - 16px);
  left: 0rem;
  letter-spacing: 0.38px;
  line-height: 1.5rem;
  display: none;
  align-items: center;
  justify-content: center;
  height: 2rem;
`;
const CalendarDayrow5 = styled.div`
  position: absolute;
  width: calc(100% - 32px);
  top: 17.25rem;
  right: 1rem;
  left: 1rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-3xs) 0rem;
  box-sizing: border-box;
`;
const Div = styled.div`
  position: absolute;
  top: calc(50% - 13px);
  left: calc(50% + 8.5px);
  letter-spacing: 0.35px;
  line-height: 1.75rem;
`;
const Div1 = styled.div`
  position: absolute;
  top: calc(50% - 15px);
  left: calc(50% - 0.5px);
  letter-spacing: 0.35px;
  line-height: 1.75rem;
`;
const Div2 = styled.div`
  position: absolute;
  top: calc(50% - 13px);
  left: calc(50% - 32.5px);
  letter-spacing: 0.35px;
  line-height: 1.75rem;
  display: inline-block;
  width: 1.75rem;
  height: 1.75rem;
`;
const Center = styled.div`
  position: absolute;
  top: calc(50% - 15px);
  left: calc(50% - 32px);
  width: 4.06rem;
  height: 1.88rem;
`;
const CalendarTimepicker = styled.div`
  position: relative;
  border-radius: var(--br-7xs);
  background-color: var(--fill-color-light-tertiary);
  width: 5.38rem;
  height: 2.25rem;
  overflow: hidden;
  flex-shrink: 0;
`;
const Separator2 = styled.div`
  position: absolute;
  height: 57.14%;
  width: 0.57%;
  top: 21.43%;
  right: 1.15%;
  bottom: 21.44%;
  left: 98.28%;
  border-radius: var(--br-12xs-5);
  background-color: var(--separator-color-light-with-transparency);
  display: none;
`;
const Label = styled.div`
  position: absolute;
  width: calc(100% - 15.5px);
  top: calc(50% - 8px);
  left: 0.5rem;
  letter-spacing: -0.08px;
  line-height: 1.25rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1rem;
`;
const SegmentedpickerOption = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  border-radius: 6.93px;
  background-color: var(--white);
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04);
  border: 0.5px solid rgba(0, 0, 0, 0.04);
`;
const Label1 = styled.div`
  position: absolute;
  width: calc(100% - 15.5px);
  top: calc(50% - 8px);
  left: 0.5rem;
  letter-spacing: -0.08px;
  line-height: 1.25rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1rem;
`;
const SegmentedpickerOption1 = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
`;
const Segmentedpicker = styled.div`
  align-self: stretch;
  border-radius: 8.91px;
  background-color: var(--fill-color-light-tertiary);
  width: 6.31rem;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs);
  box-sizing: border-box;
  text-align: center;
  font-size: var(--default-bold-footnote-size);
  font-family: var(--default-bold-footnote);
`;
const Time1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.38rem;
  text-align: right;
  font-size: var(--default-regular-title2-size);
`;
const TimePicker = styled.div`
  position: absolute;
  width: calc(100% + 1px);
  right: -0.09rem;
  bottom: 0rem;
  left: 0.03rem;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-base);
  box-sizing: border-box;
  text-align: left;
  color: var(--label-color-light-primary);
`;
const CalendarRoot = styled.div`
  position: relative;
  border-radius: 13px;
  background-color: var(--white);
  box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.1);
  width: 21.44rem;
  height: 23.75rem;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  text-align: center;
  font-size: var(--default-bold-title3-size);
  color: var(--primary-color);
  font-family: var(--default-regular-title2);
`;

const Calendar = () => {
  return (
    <CalendarRoot>
      <MonthPicker>
        <MonthYear1>
          <Month>June 2021</Month>
          <SfIconChevronforward alt="" src="/sf-icon--chevronforward@2x.png" />
        </MonthYear1>
        <Arrows>
          <SfSymbolChevronbackward
            alt=""
            src="/sf-symbol--chevronbackward@2x.png"
          />
          <SfSymbolChevronbackward
            alt=""
            src="/sf-symbol--chevronforward@2x.png"
          />
        </Arrows>
      </MonthPicker>
      <CalendarDayrow>
        <Day>
          <Day1>SUN</Day1>
        </Day>
        <Day2>
          <Day3>MON</Day3>
        </Day2>
        <Day>
          <Day5>TUE</Day5>
        </Day>
        <Day>
          <Day3>WED</Day3>
        </Day>
        <Day>
          <Day1>THU</Day1>
        </Day>
        <Day>
          <Day11>FRI</Day11>
        </Day>
        <Day>
          <Day5>SAT</Day5>
        </Day>
      </CalendarDayrow>
      <CalendarDayrow1>
        <Digit>
          <Date1>7</Date1>
        </Digit>
        <Digit>
          <Date1>1</Date1>
        </Digit>
        <Digit2>
          <Date2>1</Date2>
        </Digit2>
        <Digit2>
          <Date2>2</Date2>
        </Digit2>
        <Digit2>
          <Date2>3</Date2>
        </Digit2>
        <Digit2>
          <Date5>4</Date5>
        </Digit2>
        <Digit2>
          <Date2>5</Date2>
        </Digit2>
      </CalendarDayrow1>
      <CalendarDayrow2>
        <Digit2>
          <Date2>6</Date2>
        </Digit2>
        <Digit8>
          <Date8>7</Date8>
        </Digit8>
        <Digit2>
          <Date2>8</Date2>
        </Digit2>
        <Digit2>
          <Date2>9</Date2>
        </Digit2>
        <Digit2>
          <Date2>10</Date2>
        </Digit2>
        <Digit2>
          <Date5>11</Date5>
        </Digit2>
        <Digit2>
          <Date2>12</Date2>
        </Digit2>
      </CalendarDayrow2>
      <CalendarDayrow3>
        <Digit2>
          <Date2>13</Date2>
        </Digit2>
        <Digit2>
          <Date2>14</Date2>
        </Digit2>
        <Digit2>
          <Date2>15</Date2>
        </Digit2>
        <Digit2>
          <Date2>16</Date2>
        </Digit2>
        <Digit2>
          <Date2>17</Date2>
        </Digit2>
        <Digit2>
          <Date5>18</Date5>
        </Digit2>
        <Digit2>
          <Date2>19</Date2>
        </Digit2>
      </CalendarDayrow3>
      <CalendarDayrow4>
        <Digit2>
          <Date2>20</Date2>
        </Digit2>
        <Digit2>
          <Date2>21</Date2>
        </Digit2>
        <Digit2>
          <Date2>22</Date2>
        </Digit2>
        <Digit2>
          <Date2>23</Date2>
        </Digit2>
        <Digit2>
          <Date2>24</Date2>
        </Digit2>
        <Digit2>
          <Date5>25</Date5>
        </Digit2>
        <Digit2>
          <Date2>26</Date2>
        </Digit2>
      </CalendarDayrow4>
      <CalendarDayrow5>
        <Digit2>
          <Date2>27</Date2>
        </Digit2>
        <Digit2>
          <Date2>28</Date2>
        </Digit2>
        <Digit2>
          <Date2>29</Date2>
        </Digit2>
        <Digit2>
          <Date2>30</Date2>
        </Digit2>
        <Digit>
          <Date1>11</Date1>
        </Digit>
        <Digit>
          <Date33>12</Date33>
        </Digit>
        <Digit>
          <Date1>13</Date1>
        </Digit>
      </CalendarDayrow5>
      <TimePicker>
        <Month>Time</Month>
        <Time1>
          <CalendarTimepicker>
            <Center>
              <Div>41</Div>
              <Div1>:</Div1>
              <Div2>09</Div2>
            </Center>
          </CalendarTimepicker>
          <Segmentedpicker>
            <SegmentedpickerOption>
              <Separator2 />
              <Label>AM</Label>
            </SegmentedpickerOption>
            <SegmentedpickerOption1>
              <Separator2 />
              <Label1>PM</Label1>
            </SegmentedpickerOption1>
          </Segmentedpicker>
        </Time1>
      </TimePicker>
    </CalendarRoot>
  );
};

export default Calendar;
