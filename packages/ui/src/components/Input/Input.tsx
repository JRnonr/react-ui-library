'use client';
import React, { forwardRef, useState, useCallback } from 'react';
import './Input.css';

export type InputOwnProps = {
  /** 输入框类型 */
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';
  /** 输入框变体 */
  variant?: 'outline' | 'filled' | 'underline';
  /** 输入框尺寸 */
  size?: 'sm' | 'md' | 'lg';
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否只读 */
  readOnly?: boolean;
  /** 是否必填 */
  required?: boolean;
  /** 占位符文本 */
  placeholder?: string;
  /** 默认值 */
  defaultValue?: string;
  /** 当前值 */
  value?: string;
  /** 值变化回调 */
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  /** 输入框获得焦点回调 */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** 输入框失去焦点回调 */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** 输入框按键回调 */
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  /** 输入框回车回调 */
  onEnter?: (value: string) => void;
  /** 前缀图标 */
  prefix?: React.ReactNode;
  /** 后缀图标 */
  suffix?: React.ReactNode;
  /** 是否显示清除按钮 */
  allowClear?: boolean;
  /** 是否显示密码切换按钮（仅对password类型有效） */
  showPasswordToggle?: boolean;
  /** 输入框标签 */
  label?: string;
  /** 帮助文本 */
  helpText?: string;
  /** 错误文本 */
  errorText?: string;
  /** 是否显示字符计数 */
  showCount?: boolean;
  /** 最大字符数 */
  maxLength?: number;
  /** 额外的CSS类名 */
  className?: string;
  /** 额外的样式 */
  style?: React.CSSProperties;
  /** 输入框名称 */
  name?: string;
  /** 输入框ID */
  id?: string;
  /** 自动完成 */
  autoComplete?: string;
  /** 自动聚焦 */
  autoFocus?: boolean;
  /** 输入模式 */
  inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
};

export const Input = forwardRef<HTMLInputElement, InputOwnProps & React.HTMLAttributes<HTMLInputElement>>(
  (
    {
      type = 'text',
      variant = 'outline',
      size = 'md',
      disabled = false,
      readOnly = false,
      required = false,
      placeholder,
      defaultValue,
      value,
      onChange,
      onFocus,
      onBlur,
      onKeyDown,
      onEnter,
      prefix,
      suffix,
      allowClear = false,
      showPasswordToggle = false,
      label,
      helpText,
      errorText,
      showCount = false,
      maxLength,
      className = '',
      style,
      name,
      id,
      autoComplete,
      autoFocus,
      inputMode,
      ...rest
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue || '');
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    
    const currentValue = value !== undefined ? value : internalValue;
    const hasError = !!errorText;
    const isPasswordType = type === 'password';
    
    // 处理值变化
    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue, event);
    }, [value, onChange]);
    
    // 处理清除
    const handleClear = useCallback(() => {
      if (value === undefined) {
        setInternalValue('');
      }
      onChange?.('', {} as React.ChangeEvent<HTMLInputElement>);
    }, [value, onChange]);
    
    // 处理密码切换
    const handlePasswordToggle = useCallback(() => {
      setShowPassword(prev => !prev);
    }, []);
    
    // 处理键盘事件
    const handleKeyDownEvent = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        onEnter?.(currentValue);
      }
      onKeyDown?.(event);
    }, [currentValue, onEnter, onKeyDown]);
    
    // 处理焦点事件
    const handleFocusEvent = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(event);
    }, [onFocus]);
    
    const handleBlurEvent = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(event);
    }, [onBlur]);
    
    // 构建CSS类名
    const baseClass = 'input';
    const variantClass = `input--${variant}`;
    const sizeClass = `input--${size}`;
    const stateClass = disabled ? 'input--disabled' : 
                      readOnly ? 'input--readonly' : 
                      hasError ? 'input--error' : 
                      isFocused ? 'input--focused' : '';
    
    const inputClasses = [
      baseClass,
      variantClass,
      sizeClass,
      stateClass,
      className
    ]
      .filter(Boolean)
      .join(' ');
    
    // 渲染前缀图标
    const renderPrefix = () => {
      if (!prefix) return null;
      return (
        <span className="input__prefix" aria-hidden="true">
          {prefix}
        </span>
      );
    };
    
    // 渲染后缀图标
    const renderSuffix = () => {
      const elements = [];
      
      // 字符计数
      if (showCount && maxLength) {
        elements.push(
          <span key="count" className="input__count">
            {currentValue.length}/{maxLength}
          </span>
        );
      }
      
      // 密码切换按钮
      if (isPasswordType && showPasswordToggle) {
        elements.push(
          <button
            key="password-toggle"
            type="button"
            className="input__password-toggle"
            onClick={handlePasswordToggle}
            aria-label={showPassword ? '隐藏密码' : '显示密码'}
            tabIndex={-1}
          >
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </button>
        );
      }
      
      // 清除按钮
      if (allowClear && currentValue && !disabled && !readOnly) {
        elements.push(
          <button
            key="clear"
            type="button"
            className="input__clear"
            onClick={handleClear}
            aria-label="清除输入"
            tabIndex={-1}
          >
            ✕
          </button>
        );
      }
      
      // 自定义后缀
      if (suffix) {
        elements.push(
          <span key="suffix" className="input__suffix" aria-hidden="true">
            {suffix}
          </span>
        );
      }
      
      return elements.length > 0 ? (
        <span className="input__suffix-group">
          {elements}
        </span>
      ) : null;
    };
    
    return (
      <div className="input__wrapper">
        {label && (
          <label className="input__label" htmlFor={id}>
            {label}
            {required && <span className="input__required">*</span>}
          </label>
        )}
        
        <div className="input__container">
          {renderPrefix()}
          
          <input
            ref={ref}
            id={id}
            name={name}
            type={isPasswordType && showPasswordToggle ? (showPassword ? 'text' : 'password') : type}
            value={currentValue}
            onChange={handleChange}
            onFocus={handleFocusEvent}
            onBlur={handleBlurEvent}
            onKeyDown={handleKeyDownEvent}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            maxLength={maxLength}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            inputMode={inputMode}
            className={inputClasses}
            style={style}
            {...rest}
          />
          
          {renderSuffix()}
        </div>
        
        {(helpText || errorText) && (
          <div className={`input__message ${hasError ? 'input__message--error' : 'input__message--help'}`}>
            {errorText || helpText}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input'; 