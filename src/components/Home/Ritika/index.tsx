import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AppProvider } from './Week4/Context/context';
import { MainContainerWrapper } from './styles';

const weeks = [
  { id: 'week2', label: 'Week-2' },
  { id: 'week3', label: 'Week-3' },
  { id: 'week4', label: 'Week-4' }
];

const Ritika: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState<string>('');

  return (
    <MainContainerWrapper>
      <AppProvider>
        <div className='weekButtonsContainer'>
          {weeks.map((week) => (
            <Link to={week.id} key={week.id}>
              <button className={`weekButton ${selectedWeek === week.id ? 'active' : ''}`} onClick={() => setSelectedWeek(week.id)}>
                {week.label}
              </button>
            </Link>
          ))}
          <Outlet />
        </div>
      </AppProvider>
    </MainContainerWrapper>
  );
};

export default Ritika;
