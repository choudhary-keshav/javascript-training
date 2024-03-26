import React from 'react';
import Counter from './Counter';
import { Provider } from 'react-redux';
import store from './redux/store/store';

const Week5: React.FC = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default Week5;
