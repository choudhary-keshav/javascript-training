import React from 'react';
import { FilterTaskWrapper } from './Style';
import { useToDoContext } from '../../context/ToDoContext';

const FilterTask = () => {
  const { filterValue, setFilterValue } = useToDoContext();

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setFilterValue(value);
  };

  return (
    <FilterTaskWrapper>
      <select value={filterValue} onChange={handleFilterChange} name='' id='filter'>
        <option value='showAll'>Show All Tasks</option>
        <option value='showCompleted'>Show Completed Tasks</option>
        <option value='showPending'>Show Pending Tasks</option>
        <option value='orderDueDatesEarliest'>Sort Tasks by Earliest Due Dates</option>
        <option value='orderDueDatesFurthest'>Sort Tasks by Furthest Due Dates</option>
      </select>
    </FilterTaskWrapper>
  );
};

export default FilterTask;
