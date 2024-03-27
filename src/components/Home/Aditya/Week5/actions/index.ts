import { Action } from 'redux';

export const increaseCounter = (): Action => {
  return {
    type: 'INCREMENT'
  };
};

export const decreaseCounter = (): Action => {
  return {
    type: 'DECREMENT'
  };
};
