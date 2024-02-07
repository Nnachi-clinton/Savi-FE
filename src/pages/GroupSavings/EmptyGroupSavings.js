// import * as React from 'react';
// import styled from 'styled-components';

// function EmptyGroupSavings(props) {
//   return (
//     <Div>
//       <Span>
//         <Div2>Active Savings</Div2>
//         <Div3>Explore Groups</Div3>
//       </Span>
//       <Span2>
//         <Div4>You don’t have any active saving group, you can</Div4>
//         <Div5>create a new group</Div5> or <Div5>explore groups</Div5>
//       </Span2>
//     </Div>
//   );
// }

// const Div = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-top: 10em;
//   width: 70%;
//   margin-left: 27em;
// `;

// const Span = styled.span`
//   justify-content: space-between;
//   display: flex;
//   width: 100%;
//   gap: 20px;
//   padding: 0 20px;
//   @media (max-width: 991px) {
//     max-width: 100%;
//     flex-wrap: wrap;
//   }
// `;

// const Div2 = styled.div`
//   color: #000;
//   letter-spacing: 0.15px;
//   flex-grow: 1;
//   flex-basis: auto;
//   margin-right: 0em;
//   font: 700 32px/140% Inter, sans-serif;
// `;

// const Div3 = styled.div`
//   color: var(--Blue-1, #2f80ed);
//   letter-spacing: 0.08px;
//   margin: auto 0;
//   cursor: pointer;
//   font: 500 16px/100% Inter, sans-serif;
// `;

// const Span2 = styled.span`
//   align-self: center;
//   display: flex;
//   margin-top: 330px;
//   flex-direction: column;
//   padding: 10px 10px 0;
//   @media (max-width: 991px) {
//     margin-top: 40px;
//   }
// `;

// const Div4 = styled.div`
//   color: #000;
//   text-align: center;
//   letter-spacing: 0.08px;
//   white-space: nowrap;
//   font: 500 16px/168% Inter, sans-serif;
//   @media (max-width: 991px) {
//     white-space: initial;
//   }
// `;

// const Div5 = styled.div`
//   color: #2f80ed;
//   text-align: center;
//   letter-spacing: 0.08px;
//   align-self: center;
//   margin-top: 10px;
//   cursor: pointer;
//   white-space: nowrap;
//   font: 500 16px/168% Inter, sans-serif;
//   @media (max-width: 991px) {
//     white-space: initial;
//   }
// `;
// export default EmptyGroupSavings;

import * as React from 'react';
import styled from 'styled-components';

function EmptyGroupSavings(props) {
  return (
    <Div>
      <Span>
        <Div2>Active Savings</Div2>
        <Div3>Explore Groups</Div3>
      </Span>
      <Span2>
        <Div4>You don’t have any active saving group, you can</Div4>
        <LinkText>
          <span>Create a new group</span>   or   <span>explore groups</span>
        </LinkText>
      </Span2>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10em;
  width: 70%;
  margin-left: 27em;
`;

const Span = styled.span`
  justify-content: space-between;
  display: flex;
  width: 100%;
  gap: 20px;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div2 = styled.div`
  color: #000;
  letter-spacing: 0.15px;
  flex-grow: 1;
  flex-basis: auto;
  margin-right: 0em;
  font: 700 32px/140% Inter, sans-serif;
`;

const Div3 = styled.div`
  color: var(--Blue-1, #2f80ed);
  letter-spacing: 0.08px;
  margin: auto 0;
  cursor: pointer;
  font: 500 16px/100% Inter, sans-serif;
`;

const Span2 = styled.span`
  align-self: center;
  display: flex;
  margin-top: 330px;
  flex-direction: column;
  padding: 10px 10px 0;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div4 = styled.div`
  color: #000;
  text-align: center;
  letter-spacing: 0.08px;
  white-space: nowrap;
  font: 500 16px/168% Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const LinkText = styled.div`
  display: flex;

  span {
    color: #2f80ed;
    text-align: center;
    letter-spacing: 0.08px;
    white-space: nowrap;
    font: 500 16px/168% Inter, sans-serif;
    cursor: pointer;
    margin-top: 10px;

    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  @media (max-width: 991px) {
    flex-direction: column;
    span {
      margin-top: 0;
      margin-right: 0;
    }
  }
`;

export default EmptyGroupSavings;

