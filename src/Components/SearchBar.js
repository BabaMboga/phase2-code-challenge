import React from 'react'

function SearchBar({onSearch}) {
  return (
    <input
    className='input'
    type='text'
    placeholder='Filter by description'
    onChange={e => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;