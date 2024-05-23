import React from 'react';

interface ButtonProps {
  primary?: boolean;
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={'storybook-button'}
      {...props}
    >
      {label}
    </button>
  );
};
