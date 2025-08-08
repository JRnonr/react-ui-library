import React, { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import '../../../styles/design-system.css';
import './button.less';

export type ButtonType = 'default' | 'primary' | 'dashed' | 'link' | 'text';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** 按钮类型 */
  type?: ButtonType;
  /** 是否禁用按钮 */
  disabled?: boolean;
  /** 点击事件的回调函数 */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** 按钮内部的子节点 */
  children?: ReactNode;
  /** 原生按钮类型 */
  htmlType?: 'submit' | 'reset' | 'button';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      type = 'default',
      disabled = false,
      onClick,
      children,
      style,
      htmlType = 'button',
      ...rest
    },
    ref
  ) => {
    const buttonClasses = classNames(
      'velvet-btn',
      {
        [`velvet-btn--${type}`]: type && type !== 'default',
        'velvet-btn--disabled': disabled
      },
      className
    );

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      onClick?.(event);
    };

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled}
        onClick={handleClick}
        style={style}
        type={htmlType}
        aria-disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
