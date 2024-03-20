export interface Employee {
  employeeID: number;
  employeeName: string;
  employeeStatus: string;
}
export interface FormData {
  name: string;
  phoneNumber: string;
}
export interface FriendInputDetailProps {
  addEmployee: (name: string, status: string) => void;
  employees: Employee[];
}
export interface EmployeeDetailsHook {
  employees: Employee[];
  addEmployee: (name: string, status: string) => void;
  updateState: (employeeArray: Employee[]) => void;
}
