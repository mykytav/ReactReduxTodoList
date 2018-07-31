import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, SET_FILTER } from './actionTypes';

export const addTodo = text => {
  return {
    type: ADD_TODO,
    text,
    id: new Date().valueOf()
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  };
};

export const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    id
  };
};

export const setFilter = filter => {
  return {
    type: SET_FILTER,
    filter
  };
};
