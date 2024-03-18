import { Employee } from "../interfaces/interface";
import warnings from "../utils/constants.json"

export const validateInput = (name:string,currentStatus:string) => {
    if (name.trim() === '' || currentStatus === 'Employee-Status') {
      alert(warnings.properInputWarning);
      return false;
    }
    return true;
  };
  
export const validationInputAutoFocus=(name:string,phoneNumber:string)=>{
    if (!name.trim() || !phoneNumber.trim()) {
        alert('Please provide both name and phone number.');
        return;
    }
}
export const alreadyExistUser=(employees:Employee[],name:string)=>{
  if (employees.some(employee => employee.employeeName === name.trim())) {
    alert('Employee with this name already exists!');
    return;
  }
}