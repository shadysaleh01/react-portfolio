import React from 'react';
import "./Button.css";



export const Button = ({ children, type, onClick, buttonStyle, buttonSize, href }) => {
   const STYLES = ["btn--primary", "btn--outline"];
   const SIZES = ["btn--medium", "btn--large"];
   
   const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
   const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize :
      SIZES[0];

   return (
      <a href={href} className="btn-mobile">
         <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
         >
            {children}
         </button>
      </a>
   )
};