import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ShreyanshWrapper } from './styles';

const Shreyansh: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState('');
  return (
    <ShreyanshWrapper>
      <div className='weekButtonsContainer'>
        <Link to='week4'>
          <button
            className={`weekButton ${selectedWeek === 'week4' ? 'active' : ''}`}
            value='week4'
            onClick={(e) => setSelectedWeek(e.currentTarget.value)}>
            Week-4
          </button>
        </Link>
        <Link to='week5'>
          <button
            className={`weekButton ${selectedWeek === 'week5' ? 'active' : ''}`}
            value='week5'
            onClick={(e) => setSelectedWeek(e.currentTarget.value)}>
            Week-5
          </button>
        </Link>
      </div>
      <Outlet />
    </ShreyanshWrapper>
  );
};

export default Shreyansh;
