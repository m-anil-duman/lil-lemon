// src/components/Button/Button.js
import React from 'react';
import Link from 'next/link';
import './Button.css';

const Button = ({ children, to, onClick, type = 'button', className = '' }) => {
  if (to) {
    // Use `Link` for navigation if `to` is provided
    return (
      <Link href={to}>
        <button type={type} className={`custom-button ${className}`}>
          {children}
        </button>
      </Link>
    );
  }

  // Render a standard button if `to` is not provided
  return (
    <button type={type} onClick={onClick} className={`custom-button ${className}`}>
      {children}
    </button>
  );
};

export default Button;
