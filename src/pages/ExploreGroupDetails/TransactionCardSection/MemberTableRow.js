import './style1.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function MemberTableRow() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7240/api/GroupSavings/GetMembers?GroupId=dc3c343c-322b-4fb5-a115-2dd6cce10297` // groupId to be changed and made dynamic, this was used for testing purposes
        );

        setUserData(response.data.result);
        console.log(response.data);
        console.log(response.data.result);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);
  console.log(userData);
  return (
    <>
      {Object.entries(userData).map(([name, action], index) => (
        <tr className="member-row" Key={index}>
          <td className="slot-name-cell">
            <p className="member-info">{index + 1}</p>
          </td>
          <td className="slot-info">
            <p className="member-info">{name}</p>
          </td>
          <td className="slot-info">
            <p className="member-info">Nill</p>
          </td>
          <td className="table-cell-action">
            <p className="payment-status-text">{action}</p>
          </td>
        </tr>
      ))}
    </>
  );
}

export default MemberTableRow;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `https://localhost:7240/api/GroupSavings/GetMembers?GroupId=dc3c343c-322b-4fb5-a115-2dd6cce10297`
//         );
//         console.log('API Response:', response.data); // Log the API response
//         setUserData(response.data.result);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   console.log('userData:', userData); // Log the userData state

//   return (
//     <table>
//       <tbody>
//         {Object.entries(userData).map(([name, action], index) => (
//           <tr className="member-row" key={index}>
//             <td className="slot-name-cell">
//               <p className="member-info">{index + 1}</p>
//             </td>
//             <td className="slot-info">
//               <p className="member-info">{name}</p>
//             </td>
//             <td className="slot-info">
//               <p className="member-info">{action}</p>
//             </td>
//             {/* Add more columns as needed */}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default MemberTableRow;
