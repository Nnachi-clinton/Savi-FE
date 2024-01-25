// Button.js
import styled from 'styled-components';

const Button = styled.button`
    border-radius: 8px;
    background-color: var(--primary-color);
    color: white; /* Set the text color to white */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-xs) 18px;
    cursor: pointer;
    width: 150px;
//   &:hover {
//     background-color: darken(var(--secondary-color), 100%, 100);
//   }
`;

export default Button;
