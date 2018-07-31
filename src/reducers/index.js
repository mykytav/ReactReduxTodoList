import { combineReducers } from 'redux';
import { todos, filter } from './todeReducer';

const rootReducer = combineReducers({
  filter,
  todos
});

export default rootReducer;
