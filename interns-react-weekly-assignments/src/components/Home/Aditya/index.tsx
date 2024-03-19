import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AdityaWrapper } from './styles';

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
      </div>
      <Outlet></Outlet>
    </AdityaWrapper>
  );
};

export default Aditya;
