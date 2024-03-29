import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { LoginWrapper } from './Login.styled';
import { toast } from 'react-toastify';
import { validatePassword, validateUser } from '../Week3/utils/validation';
import message from '../Week2/utils/constants/constants.json';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const handleUserPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (!validateUser(userName, userPassword)) return;

    if (!validatePassword(userPassword)) {
      toast.error(message.passwordRequirements);
      return;
    }
    localStorage.setItem('user', JSON.stringify({ userName, userPassword }));
    setUserName('');
    setUserPassword('');
    navigate('/ritika');
    toast.success(message.successLoggedIn);
  };

  return (
    <LoginWrapper>
      <label className='labelField'>Enter UserName</label>
      <input className='inputField' type='text' value={userName} onChange={handleUserNameChange} />
      <label className='labelField'>Enter Password</label>
      <input className='inputField' type='password' value={userPassword} onChange={handleUserPasswordChange} />
      <button onClick={handleSubmit} className='submitButton'>
        Login
      </button>
    </LoginWrapper>
  );
};

export default Login;
