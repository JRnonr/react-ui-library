import React, { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import './Button.less';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** 按钮类型 */
  type?: 'default' | 'primary' | 'dashed' | 'text' | 'link';
  /** 按钮尺寸 */
  size?: 'small' | 'middle' | 'large';
  /** 按钮形状 */
  shape?: 'default' | 'circle' | 'round';
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否加载中 */
  loading?: boolean;
  /** 是否为块级元素 */
  block?: boolean;
  /** 图标（显示在文字前面） */
  icon?: ReactNode;
  /** 右侧图标（显示在文字后面） */
  iconRight?: ReactNode;
  /** HTML 按钮类型 */
  htmlType?: 'button' | 'submit' | 'reset';
  /** 点击事件 */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** 子元素 */
  children?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      type = 'default',
      size = 'middle',
      shape = 'default',
      disabled = false,
      loading = false,
      block = false,
      icon,
      iconRight,
      htmlType = 'button',
      onClick,
      children,
      ...rest
    },
    ref
  ) => {
    const buttonClasses = classNames(
      'velvet-btn',
      {
        [`velvet-btn--${type}`]: type !== 'default',
        [`velvet-btn--${size}`]: size !== 'middle',
        [`velvet-btn--${shape}`]: shape !== 'default',
        'velvet-btn--loading': loading,
        'velvet-btn--block': block,
        'velvet-btn--disabled': disabled || loading,
      },
      className
    );

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || loading) {
        event.preventDefault();
        return;
      }
      onClick?.(event);
    };

    const renderIcon = (iconNode: ReactNode, position: 'left' | 'right') => {
      if (!iconNode) return null;
      
      return (
        <span className={classNames('velvet-btn__icon', `velvet-btn__icon--${position}`)}>
          {iconNode}
        </span>
      );
    };

    const renderContent = () => {
      if (loading) {
        return (
          <>
            <span className="velvet-btn__loading-icon" />
            {children && <span className="velvet-btn__text">{children}</span>}
          </>
        );
      }

      return (
        <>
          {renderIcon(icon, 'left')}
          {children && <span className="velvet-btn__text">{children}</span>}
          {renderIcon(iconRight, 'right')}
        </>
      );
    };

    return (
      <button
        ref={ref}
        type={htmlType}
        className={buttonClasses}
        disabled={disabled || loading}
        onClick={handleClick}
        {...rest}
      >
        {renderContent()}
      </button>
    );
  }
);

Button.displayName = 'Button'; 