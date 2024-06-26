import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Counter from './Counter/Counter';

const Week5Main = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default Week5Main;
