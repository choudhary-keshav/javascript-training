import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Counter from './components/counter/Counter';

const Week5: React.FC = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default Week5;
