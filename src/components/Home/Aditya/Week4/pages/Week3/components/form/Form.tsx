import React, { useEffect, useState, useRef } from 'react';
import { FormWrapper } from './formStyles';
import { getTodayDate, removeWhitespace } from '../../utils/functions';
import { Profile } from '../../interfaces/interfaces';

const Form: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [profile, setProfile] = useState<Profile>({
    name: '',
    dob: '',
    phone: '',
    email: ''
  });

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === 'name') {
      value = removeWhitespace(value);
    }
    setProfile((oldProfile) => {
      oldProfile[name] = value;
      return { ...oldProfile };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setProfile({
      name: '',
      dob: '',
      phone: '',
      email: ''
    });
    alert('Your submission was successful!');
  };

  return (
    <FormWrapper>
      <h1 id='heading'>Form App</h1>
      <div id='container'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name:</label>
          <input name='name' type='text' value={profile.name} onChange={handleChange} ref={inputRef} required />
          <label htmlFor='dob'>Date of Birth:</label>
          <input name='dob' type='date' min='1900-01-01' max={getTodayDate()} value={profile.dob} onChange={handleChange} required />
          <label htmlFor='phone'>Phone:</label>
          <input
            name='phone'
            type=''
            value={profile.phone}
            placeholder='123-456-7890'
            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
            onChange={handleChange}
            required
          />
          <label htmlFor='email'>Email:</label>
          <input name='email' type='email' value={profile.email} onChange={handleChange} required />
          <button id='submit' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </FormWrapper>
  );
};

export default Form;
