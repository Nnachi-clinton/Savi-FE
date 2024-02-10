import React from 'react';
import Image from '../assets/img_2650_29411_cfdc0d.jpeg';
import Image2 from '../assets/img_2650_29371_3de51f.jpeg';
import styled from 'styled-components';

const StyledTransactionCardSection = styled.div`
  display: flex;
  align-items: center; /* Align items vertically */
  gap: 8px; /* Space between image and flex-container */
  min-width: 328px;
  height: 50px;
  padding-left: 16px;
  margin-bottom: 1em;

  .image-container {
    box-sizing: border-box;
    display: block;
    width: 50px;
    max-width: initial;
    height: 51px;
    border-radius: 50%; /* Make the image round */
    overflow: hidden; /* Hide any overflowing content */
    border: 2px solid #ccc; /* Add a border */
    object-fit: cover;
  }

  .flex-container {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: space-between;
    min-width: 328px;
    height: 50px;
    padding-left: 16px;
  }

  .date-time-container {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    padding-top: 3px;
    padding-bottom: 3px;
  }

  .date-heading {
    flex: 0 0 auto;
    font: var(--font-weight-600) var(--font-size-14) 'Inter';
    color: var(--color-black);
  }

  .timestamp {
    flex: 0 0 auto;
    font: var(--font-weight-400) var(--font-size-14) 'Inter';
    margin-top: 4px;
    color: var(--color-darkgrey-bfcdd69);
    letter-spacing: 0.15px;
  }

  .green-text {
    flex: 0 0 auto;
    font: var(--font-weight-500) var(--font-size-16) 'Inter';
    color: var(--color-mediumseagreen-95182e6f);
  }
`;
const Green = styled.p`
  flex: 0 0 auto;
  font-weight: 500px; //var(--font-weight-500) var(--font-size-16) 'Inter';
  font-size: 16px;
  color: var(--color-mediumseagreen-95182e6f);
  //   color: ${({ isCredit }) => (isCredit ? 'green' : 'red')};
`;

function TransactionCardSection() {
  return (
    <>
      <StyledTransactionCardSection>
        <img src={Image} className="image-container" alt="" />
        <div className="flex-container">
          <div className="date-time-container">
            <p className="date-heading">Thursday, 20 July 2023</p>
            <p className="timestamp">at 2:44 PM</p>
          </div>
          <Green style={{ color: 'green' }}>+ ₦500,000</Green>
        </div>
      </StyledTransactionCardSection>
      <StyledTransactionCardSection>
        <img src={Image2} className="image-container" alt="" />
        <div className="flex-container">
          <div className="date-time-container">
            <p className="date-heading">Thursday, 20 July 2023</p>
            <p className="timestamp">at 2:44 PM</p>
          </div>
          <Green style={{ color: 'red' }}>- ₦200,000</Green>
        </div>
      </StyledTransactionCardSection>
    </>
  );
}

export default TransactionCardSection;

// function TransactionCardSection({ details }) {
//     return (
//       <>
//         {details.map((detail, index) => (
//           <StyledTransactionCardSection key={index}>
//             <img src={detail.image} className="image-container" alt="" />
//             <div className="flex-container">
//               <div className="date-time-container">
//                 <p className="date-heading">{detail.date}</p>
//                 <p className="timestamp">{detail.time}</p>
//               </div>
//               <Green isCredit={detail.description === 'credit'}>
//                 {detail.amount}
//               </Green>
//             </div>
//           </StyledTransactionCardSection>
//         ))}
//       </>
//     );
//   }

//export default TransactionCardSection;
