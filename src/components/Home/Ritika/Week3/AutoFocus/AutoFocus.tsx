import React, { useEffect, useRef, useState } from 'react';
import { AutoFocusWrapper } from './AutoFocus.styled';
import { validateInputAutoFocus } from '../utils/validation';
import { FormData } from '../interfaces/interface';
import { toast } from 'react-toastify';
import notify from '../utils/constants.json';

const AutoFocus: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<FormData>({ name: '', phoneNumber: '' });

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateInputAutoFocus(formData.name, formData.phoneNumber);
    toast.success(notify.successMessage);
    localStorage.setItem('formData', JSON.stringify(formData));
    setFormData({ name: '', phoneNumber: '' });
  };

  return (
    <AutoFocusWrapper>
      <form onSubmit={handleSubmit} className='form'>
        <label className='headings'>Name</label>
        <input ref={inputRef} type='text' name='name' className='inputFields' value={formData.name} onChange={handleInputChange} />
        <label className='headings'>Phone number</label>
        <input type='text' name='phoneNumber' className='inputFields' value={formData.phoneNumber} onChange={handleInputChange} />
        <button type='submit' className='submitButton'>
          Submit
        </button>
      </form>
    </AutoFocusWrapper>
  );
};

export default AutoFocus;
