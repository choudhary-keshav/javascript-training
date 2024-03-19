import React from 'react';
import { MainWrapper } from './index.styled';
import { Link, Outlet } from 'react-router-dom';

const Ritika = () => {
  return (
      <MainWrapper>
         <Link to="week2">Week-2</Link><br></br>
         <Link to="week3">Week-3</Link>
         <Outlet/>
      </MainWrapper>
  );
};

export default Ritika;
