import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

class Form extends Component {
  state = {
    searchTerm: ''
  };

  handleChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.searchTerm.trim()) {
      return;
    }
    this.props.addTodo(this.state.searchTerm);
    this.input.value = '';
  };

  render() {
    return (
      <form
        className="form center-align hoverable"
        onSubmit={this.handleSubmit}
      >
        <div className="input-field">
          <label htmlFor="input">Add Todo Task</label>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleChange}
            className="form__input"
            ref={el => (this.input = el)}
          />
        </div>
        <button
          type="submit"
          className="form__button waves-effect waves-light btn-floating purple darken-2"
        >
          <i className="material-icons ">add</i>
        </button>
      </form>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(Form);
