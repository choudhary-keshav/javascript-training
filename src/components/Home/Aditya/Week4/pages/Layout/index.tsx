import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Nav } from './styles';

const Layout: React.FC = () => {
  return (
    <>
      <Nav>
        <Link className='links' to='week1&2'>
          Week 1 and 2
        </Link>
        <Link className='links' to='week3'>
          Week 3
        </Link>
      </Nav>
      <Outlet />
    </>
  );
};

export default Layout;
