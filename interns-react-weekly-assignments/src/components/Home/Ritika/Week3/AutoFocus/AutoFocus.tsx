import React, { useEffect, useRef, useState } from 'react';
import { AutoFocusWrapper } from './AutoFocus.styled';
import { validationInputAutoFocus } from '../utils/validation';

const AutoFocus = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [formData, setFormData] = useState({ name: '', phoneNumber: '' });

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        validationInputAutoFocus(formData.name,formData.phoneNumber)
        localStorage.setItem('formData', JSON.stringify(formData));
        setFormData({name:"" ,phoneNumber:""})
    };

    return (
        <AutoFocusWrapper>
            <form onSubmit={handleSubmit} className='form'>
                <label className='headings'>Name</label>
                <input ref={inputRef} type="text" name="name" className='inputFields' value={formData.name} onChange={handleInputChange} />
                <label className='headings'>Phone number</label>
                <input type="text" name="phoneNumber" className='inputFields' value={formData.phoneNumber} onChange={handleInputChange} />
                <button type="submit" className='submitButton'>Submit</button>
            </form>
        </AutoFocusWrapper>
    );
};

export default AutoFocus;
