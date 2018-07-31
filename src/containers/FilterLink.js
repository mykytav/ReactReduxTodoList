import React from 'react';
import { connect } from 'react-redux';

import { setFilter } from '../actions';

const FilterLink = props => {
  if (props.active) {
    return (
      <span className="waves-effect waves-light btn-small purple darken-2">
        {props.children}
      </span>
    );
  }

  return (
    <button
      className="waves-effect waves-teal btn-flat"
      onClick={() => props.setFilter(props.filter)}
    >
      {props.children}
    </button>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.filter
  };
};

export default connect(
  mapStateToProps,
  { setFilter }
)(FilterLink);
