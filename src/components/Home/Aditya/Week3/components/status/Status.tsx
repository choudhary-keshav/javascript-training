import React, { useState } from 'react';
import { StatusDiv } from './statusStyles';
import SearchUser from '../searchUser/SearchUser';
import NewUser from '../newUser/NewUser';

const Status: React.FC = () => {
  const [isSearchDiv, setIsSearchDiv] = useState<boolean>(false);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsSearchDiv(e.target.value === 'searchUser');
  };

  return (
    <StatusDiv>
      <input type='radio' id='newUser' name='component' onChange={handleToggle} value='newUser' checked={!isSearchDiv} />
      <label htmlFor='newUser' id='newUserLabel' className='font17'>
        New User
      </label>
      <input type='radio' id='searchUser' name='component' onChange={handleToggle} value='searchUser' checked={isSearchDiv} />
      <label htmlFor='searchUser' className='font17'>
        Search User
      </label>
      <br />
      {isSearchDiv ? <SearchUser /> : <NewUser />}
    </StatusDiv>
  );
};

export default Status;
