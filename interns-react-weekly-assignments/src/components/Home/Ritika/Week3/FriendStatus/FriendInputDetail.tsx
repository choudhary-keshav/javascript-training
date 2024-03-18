import React, {  useState } from 'react';
import useEmployeeDetails from './useEmployeeDetails';
import statusOptions from '../../../Keshav/Week3/utils/statusOptions';
import {validateInput,alreadyExistUser} from '../utils/validation'

const FriendInputDetail = () => {
  const [currentStatus, setCurrentStatus] = useState<string>('');
  const [name, setName] = useState<string>('');
  const { employees, addEmployee } = useEmployeeDetails();

  const handleAddEmployee = () => {
    alreadyExistUser(employees,name)
    validateInput(name,currentStatus)
    addEmployee(name, currentStatus);
    setCurrentStatus('');
    setName('');
  };
  
  const handleEmployeeNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div className='mainContainer'>
      <label className='headings'>Employee-Name</label>
      <input type='text' value={name} onChange={handleEmployeeNameChange}  className='inputFields'  />

      <label className='headings'>Employee-Status</label>
      <select value={currentStatus} onChange={(e) => setCurrentStatus(e.target.value)}  className='inputFields' >

      <option>Employee-Status</option>

        {statusOptions.map((Status) => (
          <option key={Status} value={Status}>
            {Status}
          </option>
        ))}
      </select>

      <button onClick={handleAddEmployee} className='submitButton'>Add Employee</button>
    </div>
  );
};

export default FriendInputDetail;
