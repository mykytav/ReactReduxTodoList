import React from 'react';

import { filters } from '../actions/constants';
import FilterLink from '../containers/FilterLink';

const Filters = () => (
  <div className="filters center-align">
    <FilterLink filter={filters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={filters.SHOW_COMPLETED}>Completed</FilterLink>
    <FilterLink filter={filters.SHOW_ACTIVE}>Active</FilterLink>
  </div>
);

export default Filters;
