import React from 'react';
import { Provider } from 'react-redux';
import Counter from './Counter/Counter';
import store from './Store/store';

const Week5: React.FC = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};
export default Week5;
