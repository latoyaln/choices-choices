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
})