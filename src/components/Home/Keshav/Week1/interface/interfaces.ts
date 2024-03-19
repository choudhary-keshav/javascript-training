import { SetStateAction, Dispatch } from 'react';

export interface Task {
  id: number;
  dueDate: string;
  description: string;
  isCompleted: boolean;
}

export interface TaskSummary {
  pendingTasks: number;
  completedTasks: number;
  totalTasks: number;
}

export interface ToDoContextType {
  tasks: Task[];
  filterValue: string;
  addTask: (task: Task) => void;
  updateTaskStatus: (taskId: number, value: string) => void;
  updateDueDate: (taskId: number, dueDate: string) => void;
  updateTaskDescription: (taskId: number, description: string) => void;
  setTasks: Dispatch<SetStateAction<Task[]>>;
  setFilterValue: Dispatch<SetStateAction<string>>;
}
