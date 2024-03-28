import React, { useState } from 'react';
import { useNavigate } from 'react-router';

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
    localStorage.setItem('user', JSON.stringify({ userName, userPassword }));
    setUserName('');
    setUserPassword('');
    navigate('/ritika');
  };
  return (
    <div>
      <input type='text' value={userName} onChange={handleUserNameChange} />
      <input type='text' value={userPassword} onChange={handleUserPasswordChange} />
      <button onClick={handleSubmit}> Login</button>
    </div>
  );
};

export default Login;
