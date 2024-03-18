export const removeWhitespace = (str: string): string => {
  let currentTask = str.replace(/\s+/g, " ");
  if (currentTask) {
    if (currentTask[0] === " ") {
      currentTask = currentTask.slice(1);
    }
    return currentTask;
  }
  return "";
};

export const getTodayDate = (): string => {
  return new Date().toISOString().slice(0, 10);
};
