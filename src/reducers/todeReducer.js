import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  SET_FILTER
} from '../actions/actionTypes';
import { filters } from '../actions/constants';

export const initialState = {
  filter: filters.SHOW_ALL,
  todos: []
};

export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          id: action.id,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo => {
        return todo.id === action.id
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    case REMOVE_TODO:
      return state.filter(todo => {
        return todo.id !== action.id;
      });
    default:
      return state;
  }
};

export const filter = (state = filters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
};

// All in one reducer

// export const appTodo = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           {
//             text: action.text,
//             id: action.id,
//             completed: false
//           }
//         ]
//       };
//     case TOGGLE_TODO:
//       return {
//         ...state,
//         todos: state.todos.map(todo => {
//           todo.id === action.id ? { ...todo, completed: !completed } : todo;
//         })
//       };
//     case SET_FILTER:
//       return {
//         ...state,
//         filter: filters.SHOW_ALL
//       };
//     default:
//       return state;
//   }
// };

//this is actually implementation of combine reducers

// export const appTodo = (state = {}, action) => {
//   return {
//     filter: visibilityFilter(state.filter, action),
//     todos: todos(state.todos, action)
//   };
// };
