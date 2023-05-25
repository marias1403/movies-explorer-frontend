import React from 'react';

function FilterCheckbox(props) {
  function handleCheckboxChange() {
    props.onSetShortMoviesOnly(!props.shortMoviesOnly);
  }

  return (
    <div className='filter-checkbox'>
      <label className='filter-checkbox__switch'>
        <input
          className='filter-checkbox__checkbox'
          type='checkbox'
          checked={props.shortMoviesOnly}
          onChange={handleCheckboxChange}
        />
        <span className='filter-checkbox__slider'></span>
      </label>
      <p className='filter-checkbox__label'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
