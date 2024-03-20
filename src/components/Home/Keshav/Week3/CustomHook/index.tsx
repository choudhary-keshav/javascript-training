import React from 'react';
import { CustomHookWrapper } from './styles';
import { useUserData } from './useUserData';
import FriendStatusInput from './FriendStatusInput';
import ShowFriendStatus from './ShowFriendStatus';

const CustomHook: React.FC = () => {
  const { userData, addUser, changeStatus } = useUserData();

  return (
    <CustomHookWrapper>
      <h2>Custom Hook Demonstration</h2>
      <div className='container'>
        <FriendStatusInput userData={userData} addUser={addUser} />
        <ShowFriendStatus changeStatus={changeStatus} userData={userData} />
      </div>
    </CustomHookWrapper>
  );
};

export default CustomHook;
