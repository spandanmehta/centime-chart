import React from 'react';

const Button = ({ children, onClick, value, active, type }) => {
  return (
    <button
      className={`bg-slate-200 px-4 py-2 hover:bg-slate-300 shadow m-2 ${
        active ? 'border-slate-500 border-b-2' : ''
      }`}
      onClick={onClick}
      type={type}
      value={value}
    >
      {children}
    </button>
  );
};

export default Button;
