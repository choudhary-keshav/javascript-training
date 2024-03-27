import { combineReducers } from 'redux';
import changeCounter from './reducers/changeCounter';

const rootReducer = combineReducers({
  counter: changeCounter
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
