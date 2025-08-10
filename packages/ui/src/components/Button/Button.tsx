import React from 'react';
import './Button.css';

export interface ButtonProps {
  /** 按钮内容 */
  children: React.ReactNode;
  /** 按钮类型 */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  /** 按钮尺寸 */
  size?: 'sm' | 'md' | 'lg';
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否加载中 */
  loading?: boolean;
  /** 是否块级元素 */
  block?: boolean;
  /** 点击事件 */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** 按钮类型 */
  type?: 'button' | 'submit' | 'reset';
  /** 额外的 CSS 类名 */
  className?: string;
  /** 额外的样式 */
  style?: React.CSSProperties;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  block = false,
  onClick,
  type = 'button',
  className = '',
  style,
  ...props
}: ButtonProps) => {
  const baseClass = 'btn';
  const variantClass = `btn--${variant}`;
  const sizeClass = `btn--${size}`;
  const blockClass = block ? 'btn--block' : '';
  const loadingClass = loading ? 'btn--loading' : '';
  const disabledClass = disabled || loading ? 'btn--disabled' : '';

  const buttonClasses = [
    baseClass,
    variantClass,
    sizeClass,
    blockClass,
    loadingClass,
    disabledClass,
    className
  ]
    .filter(Boolean)
    .join(' ');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={handleClick}
      style={style}
      {...props}
    >
      {loading && (
        <span className="btn__loading-spinner" aria-hidden="true" data-testid="loading-spinner">
          <svg
            className="btn__loading-svg"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="btn__loading-circle"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      )}
      <span className="btn__content">{children}</span>
    </button>
  );
}; 