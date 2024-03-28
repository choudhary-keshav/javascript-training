export const popupInvalidValueWarning = 'Given value is Invalid';
export const popupInvalidDateWarning = 'Given date is Invalid';
export const createTaskInvalidWarning = (isInvalidValue: boolean, isInvalidDate: boolean): string => {
  return (
    'Invalid' +
    (isInvalidValue ? ' Task ' : '') +
    (isInvalidDate ? (isInvalidValue ? 'and' : '') : '') +
    (isInvalidDate ? ' Date ' : '') +
    'Value'
  );
};
