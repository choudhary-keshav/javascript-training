import React, { useEffect, useState } from 'react';
import { NewUserWrapper } from './newUserStyles';
import { removeWhitespace } from '../../../../utils/functions';
import statusChoices from '../../../../../../Keshav/Week3/utils/statusOptions';
import { User } from '../../interfaces/interfaces';
import { newUserInvalidStatusWarning, newUserInvalidUserWarning } from '../../../../utils/warning';

const NewUser: React.FC = () => {
  const [users, setUsers] = useState<User[]>(JSON.parse(localStorage.getItem('users') ?? '[]'));
  const [isValidUsername, setIsValidUsername] = useState<boolean>(false);
  const [newUser, setNewUser] = useState<User>({
    name: '',
    status: ''
  });

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = e.target;
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
    const updatedUser = {
      ...newUser,
      name: newUser.name.trim()
    };
    setUsers((oldUsers) => {
      return [...oldUsers, updatedUser];
    });
    setIsValidUsername(false);
    setNewUser({
      name: '',
      status: ''
    });
  };

  return (
    <NewUserWrapper>
      <div id='newUser'>
        <h1>New User</h1>
        <form onSubmit={handleNewUser}>
          <label htmlFor='name' className='fontMedium'>
            Name:
          </label>
          <input className='wide userDetail' type='text' name='name' value={newUser.name} onChange={handleUserChange} />
          <p className='warning fontMedium'>&nbsp;{!isValidUsername && newUserInvalidUserWarning}</p>
          <label htmlFor='status' className='fontMedium'>
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
          <p className='warning fontMedium'>&nbsp;{!newUser.status && newUserInvalidStatusWarning}</p>
          <button type='submit' id='submit' disabled={!isValidUsername || !newUser.status}>
            Submit
          </button>
        </form>
      </div>
    </NewUserWrapper>
  );
};

export default NewUser;
