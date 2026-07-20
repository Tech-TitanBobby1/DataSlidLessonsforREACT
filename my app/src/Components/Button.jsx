import React from 'react';
import './Button.css';

const Button = ({ children = 'Click Me', onClick, variant = 'primary' }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      <span className="btn-text">{children}</span>
    </button>
  );
};

export default Button;