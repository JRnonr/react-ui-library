'use client';
import React, { forwardRef } from 'react';
import './Button.css';

export type ButtonOwnProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  block?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
  as?: React.ElementType;
};

export const Button = forwardRef<Element, ButtonOwnProps & React.HTMLAttributes<HTMLElement>>(
  (
    {
      as,
      className = '',
      variant = 'primary',
      size = 'md',
      loading = false,
      block = false,
      disabled = false,
      type = 'button',
      onClick,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const Comp = as || 'button';

    // 对原生 <button> 保持默认行为
    if (Comp === 'button') {
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
          ref={ref as React.Ref<HTMLButtonElement>}
          type={type}
          className={buttonClasses}
          disabled={disabled || loading}
          onClick={handleClick}
          style={style}
          {...rest}
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
    }

    // 其它元素（如 'a' 或自定义组件）不做无障碍语义处理，只渲染
    const baseClass = 'btn';
    const variantClass = `btn--${variant}`;
    const sizeClass = `btn--${size}`;
    const blockClass = block ? 'btn--block' : '';
    const loadingClass = loading ? 'btn--loading' : '';

    const buttonClasses = [
      baseClass,
      variantClass,
      sizeClass,
      blockClass,
      loadingClass,
      className
    ]
      .filter(Boolean)
      .join(' ');

    return React.createElement(Comp, {
      ref,
      className: buttonClasses,
      style,
      ...rest
    }, [
      loading && (
        <span key="loading" className="btn__loading-spinner" aria-hidden="true" data-testid="loading-spinner">
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
      ),
      <span key="content" className="btn__content">{children}</span>
    ].filter(Boolean));
  }
);
Button.displayName = 'Button'; 