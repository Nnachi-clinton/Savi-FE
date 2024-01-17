import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Logo from './images/Logo.svg';

function Personalsavings2(props) {
  const [goals, setGoals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [goalsPerPage] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://localhost:7240/api/Savings/listAllGoals/34567098756323456'
        );
        console.log(response.data);

        // Check if the data is an array, if true use it, otherwise create an array with the single object
        console.log(response.data.result);
        console.log(response.data.result.length);
        // setGoals(
        //   Array.isArray(response.data.result)
        //     ? response.data.result
        //     : [response.data.result]
        // );
        setGoals(response.data.result || []);
      } catch (error) {
        console.error('Error fetching goals:', error);
      }
    };
    fetchData();
  }, []);

  // const indexOfLastGoal = currentPage * goalsPerPage;
  // const indexOfFirstGoal = indexOfLastGoal - goalsPerPage;
  // const currentGoals = goals.slice(indexOfFirstGoal, indexOfLastGoal)[0];
  const numberOfPages = Math.ceil(goals.length / goalsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Div>
      <Span>
        <Div2>My Goals</Div2>
        <Div3>Add New Goal</Div3>
      </Span>
      {Array.isArray(goals) && goals.length > 0 ? (
        goals
          .slice((currentPage - 1) * goalsPerPage, currentPage * goalsPerPage)
          .map((currentGoal, index) => (
            <Div4 key={index}>
              <Span2>
                <Div5>
                  <Img loading="lazy" src={Logo} />
                  <Span3>
                    <Span4>{currentGoal.targetName}</Span4>
                    <Div6>{currentGoal.description}</Div6>
                    <Div7>
                      {`₦ ${currentGoal.amountToAdd.toFixed(
                        2
                      )} / ₦ ${currentGoal.targetAmount.toFixed(2)}`}
                    </Div7>
                  </Span3>
                </Div5>
                <Div8>
                  {(
                    (currentGoal.amountToAdd / currentGoal.targetAmount) *
                    100
                  ).toFixed(0)}
                  %
                </Div8>
              </Span2>
              <Div9>
                <Div10
                  style={{
                    width: `${(
                      (currentGoal.amountToAdd / currentGoal.targetAmount) *
                      100
                    ).toFixed(0)}%`,
                  }}
                />
              </Div9>
            </Div4>
          ))
      ) : (
        <SpanS>
          <Div44>You don’t have any active saving target, you can</Div44>
          <Div55>create a new target</Div55>
        </SpanS>
      )}
      {/* <Pagination>
        {Array.from({ length: numberOfPages }, (_, index) => (
          <PaginationButton key={index} onClick={() => paginate(index + 1)}>
            <img src="path/to/pagination-image.png" alt={`Page ${index + 1}`} />
          </PaginationButton>
        ))}
      </Pagination> */}
      <Pagination>
        <PaginationButton onClick={() => paginate(currentPage - 1)}>
          &lt;
        </PaginationButton>
        {Array.from({ length: numberOfPages }, (_, index) => (
          <PaginationButton
            key={index}
            onClick={() => paginate(index + 1)}
            className={index + 1 === currentPage ? 'active' : ''}
          >
            {index + 1}
          </PaginationButton>
        ))}
        <PaginationButton onClick={() => paginate(currentPage + 1)}>
          &gt;
        </PaginationButton>
      </Pagination>
    </Div>
  );
}

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;
const PaginationButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0 4px;
  cursor: pointer;
  border-radius: 4px;

  img {
    width: 32px;
    height: 32px;
    object-fit: cover;
    border-radius: 4px;
  }

  &:hover {
    background-color: var(--Blue-2, #1c5db4);
  }
  &.active {
    background-color: var(--Active-Color, #b5179e);
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-top: 10em;
  overflow: hidden;
  margin-left: 25em;
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
  font: 700 32px/140% Inter, sans-serif;
`;
const Div3 = styled.div`
  color: var(--Blue-1, #2f80ed);
  letter-spacing: 0.08px;
  margin: auto 0;
  font: 500 16px/100% Inter, sans-serif;
  cursor: pointer;
`;
const Div4 = styled.div`
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.04);
  background-color: var(--White, #fff);
  display: flex;
  margin-top: 24px;
  width: 100%;
  flex-direction: column;
  padding: 24px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;
const Span2 = styled.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;
const Div5 = styled.div`
  padding-right: 57px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding-right: 20px;
  }
`;
const Img = styled.img`
  aspect-ratio: 1.32;
  object-fit: contain;
  object-position: center;
  width: 131px;
  overflow: hidden;
  max-width: 100%;
`;
const Span3 = styled.span`
  align-items: start;
  align-self: center;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  margin: auto 0;
`;
const Span4 = styled.span`
  color: var(--Teal-500, #14b8a6);
  letter-spacing: 0.07px;
  white-space: nowrap;
  border-radius: 999px;
  background-color: var(--Teal-100, #ccfbf1);
  aspect-ratio: 2.2857142857142856;
  justify-content: center;
  padding: 6px 10px;
  font: 500 14px/114% Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;
const Div6 = styled.div`
  color: #000;
  letter-spacing: 0.12px;
  align-self: stretch;
  margin-top: 10px;
  font: 600 24px/83% Inter, sans-serif;
`;
const Div7 = styled.div`
  color: #000;
  letter-spacing: 0.08px;
  align-self: stretch;
  margin-top: 10px;
  white-space: nowrap;
  font: 600 16px/125% Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;
const Div8 = styled.div`
  color: #000;
  letter-spacing: 0.12px;
  align-self: start;
  font: 500 24px/67% Inter, sans-serif;
`;
const Div9 = styled.div`
  border-radius: 8px;
  background-color: var(--Grey-100, #f2f4f7);
  display: flex;
  margin-top: 24px;
  padding-right: 0px;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  width: 100%;

  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
  }
`;
const Div10 = styled.div`
  border-radius: 8px;
  background-color: var(--Primary-Color, #b5179e);
  display: flex;
  width: 75%;
  max-width: 100%;
  height: 4px;
  flex-direction: column;
`;
const SpanS = styled.span`
  align-self: center;
  display: flex;
  margin-top: 330px;
  flex-direction: column;
  padding: 10px 10px 0;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;
const Div44 = styled.div`
  color: #000;
  text-align: center;
  letter-spacing: 0.08px;
  white-space: nowrap;
  font: 500 16px/168% Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;
const Div55 = styled.div`
  color: #2f80ed;
  text-align: center;
  letter-spacing: 0.08px;
  align-self: center;
  margin-top: 10px;
  cursor: pointer;
  white-space: nowrap;
  font: 500 16px/168% Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export default Personalsavings2;
