import React from 'react';

import Form from './containers/Form';
import TodoList from './containers/TodoList';
import Filters from './components/Fitlers';

const App = () => (
  <React.Fragment>
    <Form className="valign-wrapper " />
    <div className="divider" />
    <TodoList className="valign-wrapper" />
    <div className="divider" />
    <Filters className="valign-wrapper" />
  </React.Fragment>
);

export default App;
