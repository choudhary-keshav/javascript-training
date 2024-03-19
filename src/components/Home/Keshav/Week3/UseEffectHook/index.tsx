import React, { useEffect, useRef, useState } from 'react';
import { UseEffectHookWrapper } from './styles';

const UseEffectHook: React.FC = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    city: '',
    mobile: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    alert(`Name: ${formData.name}\nCity: ${formData.city}\nMobile No.: ${formData.mobile}`);
  };

  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  return (
    <UseEffectHookWrapper>
      <h2>UseEffect Hook Demonstration</h2>
      <form action=''>
        <div className='inputField'>
          <label htmlFor='text'>Name :- </label>
          <input
            name='name'
            onChange={handleChange}
            value={formData.name}
            ref={nameInputRef}
            type='text'
            required
            placeholder='Full name'
          />
        </div>
        <div className='inputField'>
          <label htmlFor='text'>City :- </label>
          <input name='city' onChange={handleChange} value={formData.city} type='text' required placeholder='Enter city' />
        </div>
        <div className='inputField'>
          <label htmlFor='text'>Mobile no. :- </label>
          <input name='mobile' onChange={handleChange} value={formData.mobile} required placeholder='Enter mobile no.' />
        </div>
        <button onClick={handleSubmit} type='submit'>
          Submit Data
        </button>
      </form>
    </UseEffectHookWrapper>
  );
};

export default UseEffectHook;
