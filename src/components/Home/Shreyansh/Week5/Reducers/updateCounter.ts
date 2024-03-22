const initialState: number = 0;

const updateCounter = (
  state: number = initialState,
  action: { type: string }
): number => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default updateCounter;
