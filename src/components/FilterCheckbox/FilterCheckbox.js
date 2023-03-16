import React from 'react';

function FilterCheckbox() {
  return (
    <div className='filter-checkbox'>
      <label className='filter-checkbox__switch'>
        <input className='filter-checkbox__checkbox' type='checkbox'/>
        <span className='filter-checkbox__slider'></span>
      </label>
      <p className='filter-checkbox__label'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
