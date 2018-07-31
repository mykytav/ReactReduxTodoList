import { createStore } from 'redux';

import rootReducer from '../reducers';
import { initialState } from '../reducers/todeReducer';

const localStorageState = localStorage.getItem('todoState')
  ? JSON.parse(localStorage.getItem('todoState'))
  : initialState;

const store = createStore(
  rootReducer,
  localStorageState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  localStorage.setItem('todoState', JSON.stringify(store.getState()));
});

export default store;
