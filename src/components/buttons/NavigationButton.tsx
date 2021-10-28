import React from "react";
import './button.styles.scss';

interface ButtonProps {
    children?: React.ReactNode;
    onClick: () => void;
    id?: string
  }
  
  const Button = ({ 
      children,
      onClick,
      id
    }: ButtonProps ) => { 
    return (
      <button 
        onClick={onClick}
        className="navigation-button"
        id={id}
      >
      {children}
      </button>
    );
  }
  
  export default Button;