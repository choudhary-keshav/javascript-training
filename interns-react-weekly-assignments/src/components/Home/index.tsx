import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { HomeWrapper } from './styles';

const Home: React.FC = () => {
  const [selectedIntern, setSelectedIntern] = useState('');

  const handleInternClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedIntern(e.currentTarget.value);
  };

  return (
    <HomeWrapper>
      <h1 className='mainHeading'>Interns - React Weekly Assignments</h1>
      <div className='internButtonsContainer'>
        <Link to='keshav'>
          <button
            className={`internButton ${selectedIntern === 'Keshav Choudhary' ? 'active' : ''}`}
            value='Keshav Choudhary'
            onClick={handleInternClick}>
            Keshav Choudhary
          </button>
        </Link>
        <Link to='aditya'>
          <button
            className={`internButton ${selectedIntern === 'Aditya Sharma' ? 'active' : ''}`}
            value='Aditya Sharma'
            onClick={handleInternClick}>
            Aditya Sharma
          </button>
        </Link>
        <Link to='shreyansh'>
          <button
            className={`internButton ${selectedIntern === 'Shreyansh Khatri' ? 'active' : ''}`}
            value='Shreyansh Khatri'
            onClick={handleInternClick}>
            Shreyansh Khatri
          </button>
        </Link>
        <Link to='ritika'>
          <button
            className={`internButton ${selectedIntern === 'Ritika Garg' ? 'active' : ''}`}
            value='Ritika Garg'
            onClick={handleInternClick}>
            Ritika Garg
          </button>
        </Link>
      </div>
      <Outlet></Outlet>
    </HomeWrapper>
  );
};

export default Home;
