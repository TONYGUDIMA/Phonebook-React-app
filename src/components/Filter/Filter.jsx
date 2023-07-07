import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contactsApi/slice';

function Filter() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Filter Contacts"
      value={filter}
      onChange={handleFilterChange}
    />
  );
}

export default Filter;
