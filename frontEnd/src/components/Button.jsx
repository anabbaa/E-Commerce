import React from 'react';
import { radii, shadows, sizes, variants } from "../styles/globals";


const Button = ({
  children,
  variant = "primary",
  size = "sm",
  rounded = "md",
  shadow = "md",
  width,
  onClick,
  disabled,
  ...props
}) => {
  return (
    <button
     className={`${variants[variant]} ${sizes[size]} ${radii[rounded]} ${shadows[shadow]} px-2 py-1 rounded ${
  disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
}`}
     style={width ? { width } : undefined}
      onClick={onClick}
      disabled={disabled}
         {...props}
    
    >
      {children}
    </button>
  );
};

export default Button;