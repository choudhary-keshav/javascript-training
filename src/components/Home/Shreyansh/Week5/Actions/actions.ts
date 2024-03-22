export const increaseCounter = (): { type: string } => {
  return {
    type: "INCREMENT",
  };
};

export const decreaseCounter = (): { type: string } => {
  return {
    type: "DECREMENT",
  };
};
