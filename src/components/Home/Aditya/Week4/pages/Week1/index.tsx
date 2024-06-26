import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import App from './app';

const AppWithProvider: React.FC = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWithProvider;
