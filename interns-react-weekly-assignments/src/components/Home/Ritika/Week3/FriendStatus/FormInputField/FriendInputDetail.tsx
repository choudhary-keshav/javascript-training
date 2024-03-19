import React, { useState } from 'react';
import statusOptions from '../../../../Keshav/Week3/utils/statusOptions';
import { FriendInputDetailProps } from '../../interfaces/interface';
import { validateInput, validateAlreadyExistUser } from '../../utils/validation';

const FriendInputDetail: React.FC<FriendInputDetailProps> = ({ addEmployee, employees }) => {
  const [currentStatus, setCurrentStatus] = useState<string>('');
  const [name, setName] = useState<string>('');

  const handleAddEmployee = (): void => {
    if (!validateInput(name, currentStatus)) return;
    if (!validateAlreadyExistUser(employees, name)) return;
    addEmployee(name, currentStatus);
    setCurrentStatus('');
    setName('');
  };

  const handleEmployeeNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  return (
    <div className='mainContainer'>
      <label className='headings'>Employee-Name</label>
      <input type='text' value={name} onChange={handleEmployeeNameChange} className='inputFields' />

      <label className='headings'>Employee-Status</label>
      <select value={currentStatus} onChange={(e) => setCurrentStatus(e.target.value)} className='inputFields'>
        <option>Employee-Status</option>

        {statusOptions.map((Status: string) => (
          <option key={Status} value={Status}>
            {Status}
          </option>
        ))}
      </select>

      <button onClick={handleAddEmployee} className='submitButton'>
        Add Employee
      </button>
    </div>
  );
};

export default FriendInputDetail;
