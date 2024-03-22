import React, { useState } from 'react';
import { AdityaWrapper } from './styles';
import { Link, Outlet } from 'react-router-dom';

const Aditya: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState<string>('');

  const handleWeekClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedWeek(e.currentTarget.value);
  };

  return (
    <AdityaWrapper>
      <div className='weekButtonsContainer'>
        <Link to='week3'>
          <button className={`weekButton ${selectedWeek === 'week3' ? 'active' : ''}`} value='week3' onClick={handleWeekClick}>
            Week-3
          </button>
        </Link>
        <Link to='week4'>
          <button className={`weekButton ${selectedWeek === 'week4' ? 'active' : ''}`} value='week4' onClick={handleWeekClick}>
            Week-4
          </button>
        </Link>
      </div>
      <Outlet />
    </AdityaWrapper>
  );
};

export default Aditya;
