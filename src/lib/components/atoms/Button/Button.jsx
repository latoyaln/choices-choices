import React from 'react';
import './Button.css';

const Button = ({
  type = 'button', // default value for type
  variant = '',
  size = '',
  href = '',
  title = '',
  iconColor = '',
  children,
  ...restProps
})=> {
    // If href exists, render an anchor tag, else render a button
    if (href) {
      return (
        <a href={href} className={`btn btn-${variant} btn-${size}`} {...restProps}>
          {title}
          {Icon && (
            <span className="btn-icon">
              <Icon svgColor={iconColor} {...restProps} />
            </span>
          )}
          {children}
        </a>
      );
    }
  
    return (
      <button type={type} className={`btn btn-${variant} btn-${size}`} {...restProps}>
        {title}
        {Icon && (
          <span className="btn-icon">
            <Icon svgColor={iconColor} {...restProps} />
          </span>
        )}
        {children}
      </button>
    );
  };
  
  export default Button;