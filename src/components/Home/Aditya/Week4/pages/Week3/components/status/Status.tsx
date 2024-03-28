import React, { useState } from 'react';
import { StatusWrapper } from './statusStyles';
import SearchUser from '../searchUser/SearchUser';
import NewUser from '../newUser/NewUser';

const Status: React.FC = () => {
  const [isSearchDiv, setIsSearchDiv] = useState<boolean>(false);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsSearchDiv(e.target.value === 'searchUser');
  };

  return (
    <StatusWrapper>
      <input className='toggle' type='radio' id='newUser' name='component' onChange={handleToggle} value='newUser' checked={!isSearchDiv} />
      <label htmlFor='newUser' id='newUserLabel' className='fontMedium'>
        New User
      </label>
      <input
        className='toggle'
        type='radio'
        id='searchUser'
        name='component'
        onChange={handleToggle}
        value='searchUser'
        checked={isSearchDiv}
      />
      <label htmlFor='searchUser' className='fontMedium'>
        Search User
      </label>
      <br />
      {isSearchDiv ? <SearchUser /> : <NewUser />}
    </StatusWrapper>
  );
};

export default Status;
