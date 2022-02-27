import React from 'react';
import './button.css';

type Props = {
  variant: string,
  label: string,
  onClick: () => void
}

/**
 * Primary UI component for user interaction
 */
const Button = ({ variant, label, ...props }: Props) => {
  return (
    <button
      className={`bttn ${variant}`}
      {...props}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  variant: "primary",
  onClick: undefined,
};

export default Button;
