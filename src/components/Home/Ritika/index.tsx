import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Ritika = () => {
  return (
    <>
      <Link to='week2'>Week-2</Link>
      <br></br>
      <Link to='week3'>Week-3</Link>
      <Outlet />
    </>
  );
};

export default Ritika;
