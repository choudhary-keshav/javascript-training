import warning from '../constants/constants.json';

export const addFormValidations = (taskName: string, taskDescription: string, taskCompletionDate: string) => {
  const presentDate = new Date().toISOString().split('T')[0];
  if (!taskName.trim() || !taskDescription.trim() || !taskCompletionDate.trim()) {
    return warning.properDetailsWarning;
  }

  if (!taskCompletionDate.trim() || taskCompletionDate < presentDate) {
    return warning.validDateWarning;
  }
};
