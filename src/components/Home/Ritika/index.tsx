import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AppProvider } from './Week4/Context/context';
import { MainContainerWrapper } from './styles';

const Ritika: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState('');
  
  return (
    <MainContainerWrapper>
      <AppProvider>
        <div className='weekButtonsContainer'>
          <Link to='week2'>
            <button
              className={`weekButton ${selectedWeek === 'week2' ? 'active' : ''}`}
              value='week2'
              onClick={(e) => setSelectedWeek(e.currentTarget.value)}>
              Week-2
            </button>
          </Link>
          <Link to='week3'>
            <button
              className={`weekButton ${selectedWeek === 'week3' ? 'active' : ''}`}
              value='week3'
              onClick={(e) => setSelectedWeek(e.currentTarget.value)}>
              Week-3
            </button>
          </Link>
          <br></br>
          <Link to='week4'>
            <button
              className={`weekButton ${selectedWeek === 'week4' ? 'active' : ''}`}
              value='week4'
              onClick={(e) => setSelectedWeek(e.currentTarget.value)}>
              Week-4
            </button>
          </Link>
          <Outlet />
        </div>
      </AppProvider>
    </MainContainerWrapper>
  );
};

export default Ritika;
