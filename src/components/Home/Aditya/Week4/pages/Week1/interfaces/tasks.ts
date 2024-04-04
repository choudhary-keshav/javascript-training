export interface TaskDetails {
  id: string;
  value: string;
  isCompleted: boolean;
  date: string;
}

export interface newOrEditTaskState {
  value: string;
  date: string;
  isValidValue: boolean;
  isValidDate: boolean;
}
