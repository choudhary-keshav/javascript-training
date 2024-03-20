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
