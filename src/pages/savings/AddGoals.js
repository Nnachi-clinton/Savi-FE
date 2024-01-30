import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate, Link } from 'react-router-dom';

function AddGoals({ handleStep }) {
  const [target, setTarget] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [amountToAdd, setAmountToAdd] = useState('');
  const [frequency, setFrequency] = useState('daily');
  const [startDate, setStartDate] = useState('');
  const [withdrawalDate, setWithdrawalDate] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleFrequencyChange = (e) => {
    setFrequency(e.target.value);
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'https://localhost:7240/api/Savings/SetGoal/34567098756323456',
        {
          targetName: target,
          targetAmount: targetAmount,
          amountToAdd: amountToAdd,
          frequency: frequency,
          startDate: startDate,
          withdrawalDate: withdrawalDate,
        }
      );
      // Handle the response as needed (e.g., redirect, show success message)
      console.log(response.data.result);
      if (response.data.statusCode === 200) {
        // navigate('/modal');
        Swal.fire({
          icon: 'success',
          title: 'Goal added successful!',
          showConfirmButton: false,
          timer: 1500,
          position: 'top-end',
        });
      } else {
        console.error('Error:', response.data);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: `Error: ${response.data.message}`,
          confirmButtonText: 'OK',
        });
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: `Error: ${response.data.message}`,
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      // Handle errors (e.g., show error message)
      console.error('Error submitting goals:', error);
      if (error.response) {
        console.error('Server Error:', error.response.status);
        console.error('Error Message:', error.response.data.message);

        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An unexpected error occurred: ' + error.message,
          confirmButtonText: 'OK',
        });
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An unexpected error occurred: ' + error.message,
          confirmButtonText: 'OK',
        });
      } else if (error.request) {
        console.error('No Response from Server');

        Swal.fire({
          icon: 'error',
          title: 'No Response from Server',
          text: 'No response from the server. Please try again.',
          confirmButtonText: 'OK',
        });
        Swal.fire({
          icon: 'error',
          title: 'No Response from Server',
          text: 'No response from the server. Please try again.',
          confirmButtonText: 'OK',
        });
      } else {
        console.error('Unexpected Error:', error.message);

        Swal.fire({
          icon: 'error',
          title: 'Error during login.',
          text: 'An unexpected error occurred during login.',
          confirmButtonText: 'OK',
        });
        Swal.fire({
          icon: 'error',
          title: 'Error during login.',
          text: 'An unexpected error occurred during login.',
          confirmButtonText: 'OK',
        });
      }
    }
  };
  return (
    <Main>
      <Div>Set a Target</Div>
      <Div2>
        Create and track multiple saving goals to achieve your financial targets
      </Div2>

      <Div3>Target</Div3>
      <Input
        type="text"
        value={target}
        onChange={(e) => handleInputChange(e, setTarget)}
        placeholder="Type here"
      />

      <Div4>Target Amount</Div4>
      <Input
        type="text"
        value={targetAmount}
        onChange={(e) => handleInputChange(e, setTargetAmount)}
        placeholder="Numbers only"
      />
      <Div4>Amount to Add</Div4>
      <Input
        type="text"
        value={amountToAdd}
        onChange={(e) => handleInputChange(e, setAmountToAdd)}
        placeholder="Numbers only"
      />

      <Div5>Frequency</Div5>
      <Select value={frequency} onChange={handleFrequencyChange}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </Select>

      <Div7>Start Date</Div7>
      <Input
        type="date"
        value={startDate}
        onChange={(e) => handleInputChange(e, setStartDate)}
      />

      <Div9>Withdrawal Date</Div9>
      <Input
        type="date"
        value={withdrawalDate}
        onChange={(e) => handleInputChange(e, setWithdrawalDate)}
        placeholder="pick your date"
        style={{ marginBottom: 10 }}
      />
      <div style={{ width: 320 }}>
        <label>
          <input
            type="checkbox"
            value={isChecked}
            onChange={handleCheckboxChange}
          />
          AutoSave
        </label>
        <p style={{ color: 'red' }}>
          {isChecked &&
            'Your account will be AutoDebited once this box is checked'}
        </p>
      </div>
      <div style={{ width: 320 }}>
        <label>
          Upload Picture:
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </label>
      </div>
      <Span7 onClick={handleSubmit}>Submit</Span7>
    </Main>
  );
}

const Main = styled.span`
  align-items: center;
  border-radius: 16px;
  background-color: var(--White, #fff);
  display: flex;
  max-width: 454px;
  flex-direction: column;
  padding: 32px 40px;
  margin: auto; /* Center horizontally */
  justify-content: center; /* Center vertically */
`;

const Div = styled.div`
  color: var(--Main-Text, #101828);
  align-self: center;
  white-space: nowrap;
  font: 700 24px/140% Inter, sans-serif;
`;

const Div2 = styled.div`
  justify-content: center;
  color: var(--Main-Text, #101828);
  text-align: center;
  letter-spacing: 0.15px;
  align-self: stretch;
  margin-top: 8px;
  font: 400 16px/22px Inter, sans-serif;
`;
const Input = styled.input`
  padding: 8px;
  margin-top: 8px;
  margin-bottom: -12px;
  width: 320px;
  height: 45px;
`;
const Select = styled.select`
  padding: 8px;
  margin-top: 8px;
  margin-bottom: -10px;
  width: 320px;
  height: 45px;
`;
const Div3 = styled.div`
  color: var(--Main-Text, #101828);
  letter-spacing: 0.15px;
  margin-top: 32px;
  font: 600 16px/140% Inter, sans-serif;
  margin-right: 17em;
`;
const Div4 = styled.div`
  color: var(--Main-Text, #101828);
  letter-spacing: 0.15px;
  align-self: center;
  margin-right: 13em;
  margin-top: 24px;
  white-space: nowrap;
  font: 600 16px/140% Inter, sans-serif;
`;
const Div5 = styled.div`
  color: var(--Main-Text, #101828);
  letter-spacing: 0.15px;
  align-self: center;
  margin-top: 24px;
  margin-right: 15em;
  white-space: nowrap;
  font: 600 16px/140% Inter, sans-serif;
`;
const Div7 = styled.div`
  color: var(--Main-Text, #101828);
  letter-spacing: 0.15px;
  align-self: center;
  margin-top: 24px;
  white-space: nowrap;
  margin-right: 15em;
  font: 600 16px/140% Inter, sans-serif;
`;
const Div9 = styled.div`
  color: var(--Main-Text, #101828);
  letter-spacing: 0.15px;
  align-self: center;
  margin-right: 12em;
  margin-top: 16px;
  white-space: nowrap;
  font: 600 16px/140% Inter, sans-serif;
`;
const Span7 = styled.span`
  color: var(--White, #fff);
  letter-spacing: 0.15px;
  white-space: nowrap;
  background-color: var(--Primary-Color, #b5179e);
  align-self: center;
  margin-top: 24px;
  width: 100%;
  max-width: 320px;
  padding: 12px 130px;
  font: 600 16px/140% Inter, sans-serif;
  cursor: pointer;
  //   padding-right: -9rem; !important;
  border-radius: 8px;
`;
export default AddGoals;
