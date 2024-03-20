import React, { useEffect, useState } from 'react';
import { NewUserDiv } from './newUserStyles';
import { removeWhitespace } from '../../utils/utils';

interface User {
  name: string;
  status: string;
}

const NewUser: React.FC = () => {
  const [users, setUsers] = useState<User[]>(JSON.parse(localStorage.getItem('users') ?? '[]'));
  const [isValidUsername, setIsValidUsername] = useState<boolean>(false);
  const [newUser, setNewUser] = useState<User>({
    name: '',
    status: ''
  });

  const statusChoices: string[] = ['Busy', 'Active', 'Do not disturb', 'Idle'];

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>): void => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === 'name') {
      setIsValidUsername(!users.find((user) => user.name === value) && value.length < 13 && !!value);
    }
    setNewUser((oldState) => {
      const newState = { ...oldState };
      newState[name as keyof User] = removeWhitespace(value);
      return newState;
    });
  };

  const handleNewUser = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setUsers((oldUsers) => {
      return [...oldUsers, newUser];
    });
    setIsValidUsername(false);
    setNewUser({
      name: '',
      status: ''
    });
  };

  return (
    <NewUserDiv>
      <div id='newUser'>
        <h1>New User</h1>
        <form onSubmit={handleNewUser}>
          <label htmlFor='name' className='font17'>
            Name:
          </label>
          <input className='wide userDetail' type='text' name='name' value={newUser.name} onChange={handleUserChange} />
          <p className='warning font17'>&nbsp;{!isValidUsername && 'Invalid Username'}</p>
          <label htmlFor='status' className='font17'>
            Status:
          </label>
          <select className='wide userDetail' name='status' id='selectStatus' value={newUser.status} onChange={handleUserChange}>
            <option value='' disabled>
              Select An Option
            </option>
            {statusChoices.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
          <p className='warning font17'>&nbsp;{!newUser.status && 'Invalid Status'}</p>
          <button type='submit' id='submit' disabled={!isValidUsername || !newUser.status}>
            Submit
          </button>
        </form>
      </div>
    </NewUserDiv>
  );
};

export default NewUser;
