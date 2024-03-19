import React, { useState } from 'react';
import { FriendStatusInputWrapper } from './styles';
import statusOptions from '../../utils/statusOptions';
import { User } from '../../interface/interface';

interface FriendStatusInputProps {
  addUser: (newUser: { username: string; status: string; userId: number }) => void;
  userData: User[];
}

const FriendStatusInput: React.FC<FriendStatusInputProps> = ({ addUser, userData }) => {
  const [username, setUsername] = useState('');
  const [status, setStatus] = useState('');

  const isButtonEnabled = !!username.trim() && !!status && !userData.filter((user) => user.username === username.trim()).length;

  const handleAddUser = () => {
    addUser({ username: username.trim(), status: status, userId: userData.length });
    setUsername('');
    setStatus('');
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <FriendStatusInputWrapper>
      <input type='text' value={username} onChange={handleUsernameChange} name='' id='' placeholder='Enter username' />

      <select value={status} onChange={(e) => setStatus(e.target.value)} name='' id='filter'>
        <option value='' disabled>
          Set Status
        </option>
        {statusOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <button className='addUserButton' onClick={handleAddUser} disabled={!isButtonEnabled}>
        Add User
      </button>
    </FriendStatusInputWrapper>
  );
};

export default FriendStatusInput;
