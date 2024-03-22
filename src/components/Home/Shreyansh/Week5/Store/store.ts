import { configureStore } from '@reduxjs/toolkit';
import reducers from '../Reducers/mainReducer';

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION__?: () => Window;
}

declare const window: ExtendedWindow;

const store = configureStore({
  reducer: reducers,
  devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});

export default store;
