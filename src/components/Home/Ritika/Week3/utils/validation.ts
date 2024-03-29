import { toast } from 'react-toastify';
import { Employee } from '../interfaces/interface';
import warnings from '../utils/constants.json';

export const validateInput = (name: string, currentStatus: string) => {
  if (name.trim() === '' || currentStatus === 'Employee-Status') {
    toast.warn(warnings.properInputWarning);
    return false;
  }
  return true;
};

export const validateInputAutoFocus = (name: string, phoneNumber: string) => {
  if (!name.trim() || !phoneNumber.trim()) {
    toast.warn(warnings.autoFocusInputWarning);
    return;
  }
};
export const validateAlreadyExistUser = (employees: Employee[], name: string) => {
  if (employees.some((employee) => employee.employeeName === name.trim())) {
    toast.warn(warnings.alreadyExistUser);
    return false;
  }
  return true;
};
export const validateUser = (userName: string, userPassword: string) => {
  if (!userName.trim() || !userPassword.trim()) {
    toast.error('Please enter the details');
    return false;
  }
  return true;
};
export const validatePassword = (password: string) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};
