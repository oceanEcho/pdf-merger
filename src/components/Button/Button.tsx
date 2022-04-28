import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ children, type = 'button', className, ...props }) => {
  return (
    <button type={type} className={cn(styles.Button, className)} {...props}>
      {children}
    </button>
  );
};
