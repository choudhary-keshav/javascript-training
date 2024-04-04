import React, { useState } from 'react';
import { MainWrapper } from './styles';
import { Link, Outlet } from 'react-router-dom';

const Aditya: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState<string>('');

  const handleWeekClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setSelectedWeek(e.currentTarget.value);
  };

  const links = {
    week3: 'Week-3',
    week4: 'Week-4',
    week5: 'Week-5'
  };

  return (
    <MainWrapper>
      <div className='weekButtonsContainer'>
        {Object.entries(links).map(([key, value]) => {
          return (
            <Link key={key} to={key}>
              <button className={`weekButton ${selectedWeek === key ? 'active' : ''}`} value={key} onClick={handleWeekClick}>
                {value}
              </button>
            </Link>
          );
        })}
      </div>
      <Outlet />
    </MainWrapper>
  );
};

export default Aditya;
