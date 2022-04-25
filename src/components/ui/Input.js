import React from 'react';

const Input = ({ type, value, placeholder, onChange, max, min, required }) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      max={max}
      min={min}
      required={required}
      className='bg-slate-50 w-36 p-2 h-8 shadow mx-2'
    ></input>
  );
};

export default Input;
