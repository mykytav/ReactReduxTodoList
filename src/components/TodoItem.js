import React from 'react';

const TodoItem = props => (
  <li
    className="todo"
    onClick={props.onClick}
    style={{
      backgroundColor: props.completed ? '#512677' : 'transparent',
      color: props.completed ? '#fff' : '#000'
    }}
  >
    <span
      className="todo__text"
      style={{
        textDecoration: props.completed ? 'line-through' : 'none'
      }}
    >
      {props.text}
    </span>
    <span className="" onClick={props.onSpanClick}>
      <i className="tiny material-icons">cancel</i>
    </span>
  </li>
);

export default TodoItem;
