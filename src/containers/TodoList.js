import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import TodoItem from '../components/TodoItem';
import { toggleTodo, removeTodo } from '../actions';
import { filters } from '../actions/constants';

const TodoList = props => (
  <TransitionGroup className="todos">
    {props.todos.length > 0 ? (
      props.todos.map(todo => {
        return (
          <CSSTransition key={todo.id} timeout={600} classNames="fade">
            <TodoItem
              {...todo}
              onClick={() => props.toggleTodo(todo.id)}
              onSpanClick={() => props.removeTodo(todo.id)}
            />
          </CSSTransition>
        );
      })
    ) : (
      <CSSTransition timeout={600} classNames="fade">
        <li className="todos__notask">
          You have no active tasks for this filter
        </li>
      </CSSTransition>
    )}
  </TransitionGroup>
);

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case filters.SHOW_ALL:
      return todos;
    case filters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case filters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.filter)
  };
};

export default connect(
  mapStateToProps,
  { toggleTodo, removeTodo }
)(TodoList);
