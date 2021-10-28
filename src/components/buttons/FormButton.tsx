import React from "react";
import './button.styles.scss';

interface ButtonProps {
    children?: React.ReactNode;
    onClick: (e: any) => void;
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
        className="form-button"
        id={id}
      >
      {children}
      </button>
    );
  }
  
  export default Button;