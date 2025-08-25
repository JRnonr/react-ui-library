'use client';
import React, { forwardRef, useId } from 'react';
import { IconCheck } from '@velvetdesign/icons';
import './Checkbox.css';

export type CheckboxOwnProps = {
  /** 复选框是否被选中 */
  checked?: boolean;
  /** 复选框是否处于不确定状态（部分选中） */
  indeterminate?: boolean;
  /** 复选框是否被禁用 */
  disabled?: boolean;
  /** 复选框的大小 */
  size?: 'sm' | 'md' | 'lg';
  /** 复选框的变体样式 */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  /** 复选框的标签文本 */
  label?: string;
  /** 复选框的描述文本 */
  description?: string;
  /** 复选框的值 */
  value?: string | number;
  /** 复选框的名称（用于表单） */
  name?: string;
  /** 复选框的ID */
  id?: string;
  /** 复选框是否必填 */
  required?: boolean;
  /** 复选框是否只读 */
  readOnly?: boolean;
  /** 复选框的onChange回调 */
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
  /** 复选框的onFocus回调 */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** 复选框的onBlur回调 */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** 自定义CSS类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 子元素 */
  children?: React.ReactNode;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxOwnProps & Omit<React.HTMLAttributes<HTMLInputElement>, 'onChange'>>(
  (
    {
      checked = false,
      indeterminate = false,
      disabled = false,
      size = 'md',
      variant = 'default',
      label,
      description,
      value,
      name,
      id,
      required = false,
      readOnly = false,
      onChange,
      onFocus,
      onBlur,
      className = '',
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const uniqueId = useId();
    const checkboxId = id || uniqueId;
    const labelId = `${checkboxId}-label`;
    const descriptionId = description ? `${checkboxId}-description` : undefined;

    const baseClass = 'checkbox';
    const sizeClass = `checkbox--${size}`;
    const variantClass = `checkbox--${variant}`;
    const disabledClass = disabled ? 'checkbox--disabled' : '';
    const indeterminateClass = indeterminate ? 'checkbox--indeterminate' : '';
    const checkedClass = checked && !indeterminate ? 'checkbox--checked' : '';

    const checkboxClasses = [
      baseClass,
      sizeClass,
      variantClass,
      disabledClass,
      indeterminateClass,
      checkedClass,
      className
    ]
      .filter(Boolean)
      .join(' ');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled || readOnly) {
        event.preventDefault();
        return;
      }
      onChange?.(event.target.checked, event);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        if (!disabled && !readOnly) {
          const newChecked = !checked;
          // 创建一个模拟的change事件
          const mockEvent = {
            target: { checked: newChecked }
          } as React.ChangeEvent<HTMLInputElement>;
          onChange?.(newChecked, mockEvent);
        }
      }
    };

    // 增强的点击处理函数
    const handleControlClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (disabled || readOnly) {
        event.preventDefault();
        return;
      }
      
      // 阻止事件冒泡，避免重复触发
      event.stopPropagation();
      
      const newChecked = !checked;
      // 创建一个模拟的change事件
      const mockEvent = {
        target: { checked: newChecked }
      } as React.ChangeEvent<HTMLInputElement>;
      onChange?.(newChecked, mockEvent);
    };

    // 标签点击处理函数
    const handleLabelClick = (event: React.MouseEvent<HTMLLabelElement>) => {
      if (disabled || readOnly) {
        event.preventDefault();
        return;
      }
      
      const newChecked = !checked;
      // 创建一个模拟的change事件
      const mockEvent = {
        target: { checked: newChecked }
      } as React.ChangeEvent<HTMLInputElement>;
      onChange?.(newChecked, mockEvent);
    };

    // 触摸事件处理
    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
      if (disabled || readOnly) {
        event.preventDefault();
        return;
      }
      
      // 添加触摸反馈样式
      const target = event.currentTarget;
      target.classList.add('checkbox--touching');
    };

    const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
      if (disabled || readOnly) {
        event.preventDefault();
        return;
      }
      
      // 移除触摸反馈样式
      const target = event.currentTarget;
      target.classList.remove('checkbox--touching');
      
      // 触发状态切换
      const newChecked = !checked;
      const mockEvent = {
        target: { checked: newChecked }
      } as React.ChangeEvent<HTMLInputElement>;
      onChange?.(newChecked, mockEvent);
    };

    return (
      <div className={checkboxClasses} style={style}>
        <div className="checkbox__container">
          <input
            ref={ref}
            id={checkboxId}
            type="checkbox"
            name={name}
            value={value}
            checked={checked}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            aria-describedby={descriptionId}
            aria-invalid={required && !checked}
            aria-checked={indeterminate ? 'mixed' : checked ? 'true' : 'false'}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyDown={handleKeyDown}
            className="checkbox__input"
            {...rest}
          />
          <div 
            className="checkbox__control"
            onClick={handleControlClick}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            role="button"
            tabIndex={disabled || readOnly ? -1 : 0}
            aria-pressed={checked}
            aria-label={label || '复选框'}
          >
            <div className="checkbox__icon">
              {checked && !indeterminate && <IconCheck size={16} />}
              {indeterminate && <div className="checkbox__indeterminate-line" />}
            </div>
          </div>
          {(label || children) && (
            <label 
              htmlFor={checkboxId} 
              id={labelId} 
              className="checkbox__label"
              onClick={handleLabelClick}
            >
              {label || children}
            </label>
          )}
        </div>
        {description && (
          <div id={descriptionId} className="checkbox__description">
            {description}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox'; 