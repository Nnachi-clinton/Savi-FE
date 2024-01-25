// StyledNavbar.js
// import React from 'react';
import styled from 'styled-components';
import SaviLogo from '../../../assets/SaviLogo.svg';
import SearchIcon from '../../../assets/SearchIcon.svg';
import EmptyImage from './EmptyImage.png';
import { useState, useEffect } from 'react';
import axios from 'axios';

const StyledNavbar = styled.div`
  width: 100%;
  height: 72px;
  background: var(--White, #fff);
  z-index: 1;
  display: flex;
  position: fixed;
  top: 0;
  padding: 0 24px;
  box-sizing: border-box;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.04);
`;

const Text = styled.h1`
  //styleName: Body Text Normal -16;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.15000000596046448px;
  text-align: left;
`;

const EmptyImg = styled.img`
  width: 32px;
  height: 32px;
  background-color: #ccc;
  border-radius: 50%;
`;

const Logo = styled.img`
  font-family: Bodoni Moda;
  font-size: 32px;
  font-weight: 500;
  line-height: 45px;
  margin-left: 10px;
  letter-spacing: 0.15000000596046448px;
  text-align: center;
  width: 71px;
`;

const Searchbox = styled.div`
  width: 308px;
  height: 35px;
  border-radius: 100px;
  margin: 15px 0 0 250px;
  border: 1px solid;
  padding: 0.75rem;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  flex: 1;
  margin-left: 10px;

  &:focus {
    outline: none;
  }
`;

const MagnifyIcon = styled.img`
  height: 1rem;
  margin-right: 10px;
`;

const Display = styled.div`
  width: 113px;
  height: 32px;
  position: absolute;
  top: 20px;
  left: 1350px;
  display: flex;
  gap: 8px;
`;

function Navbar() {
  const [userData, setUserData] = useState({});

  const Id = localStorage.getItem('Id');
  console.log(Id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7240/api/User/${Id}`
        );
        setUserData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount
  console.log(userData.firstName);
  return (
    <StyledNavbar>
      <Logo src={SaviLogo} alt="Savi-Logo" />
      <Searchbox>
        <MagnifyIcon src={SearchIcon} alt="SearchIcon" />
        <SearchInput type="text" placeholder="Search..." />
      </Searchbox>
      <Display>
        {<img src={userData.imageUrl} alt="" />}
        <Text>{userData.firstName}</Text>
      </Display>
    </StyledNavbar>
  );
}

export default Navbar;
