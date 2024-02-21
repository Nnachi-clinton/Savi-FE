// import Icon from './Icon.js';
// import './style.css';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import './Glo.css';
// import Cards from '../card/Cards.js';
// import React, { useState, useRef } from 'react';
// import ActiveCards from '../../ExploreGroupAdmin copy/card/ActiveCards.js';
// import NewCards from '../../ExploreGroupAdmin copy 2/card/NewCards.js';

// // function NewKeys({ selectstep }) {
// //   const [activeButton, setActiveButton] = useState('All');

// //   const handleButtonClick = (buttonName) => {
// //     setActiveButton(buttonName);
// //   };
// //   return (
// //     <>
// //       <div className="savings-groups">
// //         <p className="savings-group-title">Saving Groups</p>
// //         <div className="saving-groups-container">
// //           <div className="flex-container-with-buttons-and-text">
// //             <button
// //               className={`button-all ${activeButton === 'All' ? 'active' : ''}`}
// //               onClick={() => handleButtonClick('All')}
// //             >
// //               All
// //             </button>
// //             <button
// //               className={`button-active ${
// //                 activeButton === 'Active' ? 'active' : ''
// //               }`}
// //               onClick={() => handleButtonClick('Active')}
// //             >
// //               Active
// //             </button>
// //             <button
// //               className={`button-new ${activeButton === 'New' ? 'active' : ''}`}
// //               onClick={() => handleButtonClick('New')}
// //             >
// //               New
// //             </button>
// //           </div>
// //           <button className="button-container">
// //             <Icon className="svg-container" />
// //             Download PDF Report
// //           </button>
// //         </div>
// //       </div>
// //       {/* <Cards /> */}
// //       {activeButton === 'All' && <Cards />}
// //       {activeButton === 'Active' && <ActiveCards selectstep={selectstep} />}
// //       {activeButton === 'New' && <p>I am New Screen</p>}
// //     </>
// //   );
// // }

// // export default NewKeys;

// function NewKeys({ selectstep }) {
//   const [activeButton, setActiveButton] = useState('All');
//   const activeCardsRef = useRef(null);
//   const handleButtonClick = (buttonName) => {
//     setActiveButton(buttonName);
//   };

//   const handleDownloadButtonClick = async () => {
//     const doc = new jsPDF();

//     // Get the element containing the content to be captured
//     const contentElement = document.getElementById('content-to-capture');

//     // Use html2canvas to capture the content as an image
//     const canvas = await html2canvas(contentElement);

//     // Add the captured image to the PDF
//     doc.addImage(canvas.toDataURL(), 'PNG', 10, 10, 180, 160);

//     // Save the PDF
//     doc.save('report.pdf');
//   };

//   return (
//     <>
//       <div className="savings-groups">
//         <p className="savings-group-title">Saving Groups</p>
//         <div className="saving-groups-container">
//           <div className="flex-container-with-buttons-and-text">
//             <button
//               className={`button-all ${activeButton === 'All' ? 'active' : ''}`}
//               onClick={() => handleButtonClick('All')}
//             >
//               All
//             </button>
//             <button
//               className={`button-active ${
//                 activeButton === 'Active' ? 'active' : ''
//               }`}
//               onClick={() => handleButtonClick('Active')}
//             >
//               Active
//             </button>
//             <button
//               className={`button-new ${activeButton === 'New' ? 'active' : ''}`}
//               onClick={() => handleButtonClick('New')}
//             >
//               New
//             </button>
//           </div>
//           <button
//             className="button-container"
//             onClick={handleDownloadButtonClick}
//           >
//             <Icon className="svg-container" />
//             Download PDF Report
//           </button>
//         </div>
//       </div>
//       <div id="content-to-capture">
//         {activeButton === 'All' && <Cards selectstep={selectstep} />}
//         {activeButton === 'Active' && <ActiveCards selectstep={selectstep} />}
//         {activeButton === 'New' && <NewCards selectstep={selectstep} />}
//       </div>
//     </>
//   );
// }

// export default NewKeys;
