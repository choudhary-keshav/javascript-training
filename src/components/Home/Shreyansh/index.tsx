import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ShreyanshWrapper } from './styles';

const Shreyansh = () => {
  const [selectedWeek, setSelectedWeek] = useState('');

  const handleWeekClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedWeek(e.currentTarget.value);
  };

  return (
    <ShreyanshWrapper>
      <div className='weekButtonsContainer'>
        <Link to='week4'>
          <button className={`weekButton ${selectedWeek === 'week4' ? 'active' : ''}`} value='week4' onClick={handleWeekClick}>
            Week-4
          </button>
        </Link>
      </div>
      <Outlet></Outlet>
    </ShreyanshWrapper>
  );
};

export default Shreyansh;
