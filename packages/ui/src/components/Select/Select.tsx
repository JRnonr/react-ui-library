'use client';
import React, { forwardRef, useState, useCallback, useRef, useEffect } from 'react';
import { IconChevronDown, IconX } from '@velvet/icons';
import './Select.css';

export type SelectOption = {
  value: string | number;
  label: string;
  disabled?: boolean;
  group?: string;
};

export type SelectOwnProps = {
  /** 选择器变体 */
  variant?: 'outline' | 'filled' | 'underline';
  /** 选择器尺寸 */
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
  defaultValue?: string | number;
  /** 当前值 */
  value?: string | number;
  /** 值变化回调 */
  onChange?: (value: string | number | undefined, option: SelectOption | undefined) => void;
  /** 选择器获得焦点回调 */
  onFocus?: (event: React.FocusEvent<HTMLDivElement>) => void;
  /** 选择器失去焦点回调 */
  onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void;
  /** 下拉菜单打开回调 */
  onOpen?: () => void;
  /** 下拉菜单关闭回调 */
  onClose?: () => void;
  /** 选项列表 */
  options: SelectOption[];
  /** 是否支持多选 */
  multiple?: boolean;
  /** 是否支持搜索 */
  searchable?: boolean;
  /** 是否允许清除 */
  allowClear?: boolean;
  /** 标签文本 */
  label?: string;
  /** 帮助文本 */
  helpText?: string;
  /** 错误文本 */
  errorText?: string;
  /** 是否显示箭头 */
  showArrow?: boolean;
  /** 下拉菜单最大高度 */
  maxHeight?: number;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 表单字段名 */
  name?: string;
  /** 元素ID */
  id?: string;
  /** 是否自动获得焦点 */
  autoFocus?: boolean;
  /** 是否显示空选项 */
  showEmptyOption?: boolean;
  /** 空选项文本 */
  emptyOptionText?: string;
  /** 无数据文本 */
  noDataText?: string;
  /** 是否显示加载状态 */
  loading?: boolean;
  /** 加载状态文本 */
  loadingText?: string;
};

export const Select = forwardRef<HTMLDivElement, SelectOwnProps & React.HTMLAttributes<HTMLDivElement>>(
  (
    {
      variant = 'outline',
      size = 'md',
      disabled = false,
      readOnly = false,
      required = false,
      placeholder = '请选择',
      defaultValue,
      value,
      onChange,
      onFocus,
      onBlur,
      onOpen,
      onClose,
      options = [],

      searchable = false,
      allowClear = false,
      label,
      helpText,
      errorText,
      showArrow = true,
      maxHeight = 300,
      className = '',
      style,
      name,
      id,
      autoFocus = false,
      showEmptyOption = false,
      emptyOptionText = '请选择',
      noDataText = '暂无数据',
      loading = false,
      loadingText = '加载中...',
      ...rest
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | number | undefined>(value ?? defaultValue);
    const [searchValue, setSearchValue] = useState('');
    const [focusedIndex, setFocusedIndex] = useState(-1);
    
    const containerRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    // 生成唯一ID
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

    // 过滤后的选项
    const filteredOptions = React.useMemo(() => {
      if (!searchable || !searchValue) return options;
      return options.filter(option => 
        option.label.toLowerCase().includes(searchValue.toLowerCase())
      );
    }, [options, searchable, searchValue]);

    // 当前选中的选项
    const selectedOption = React.useMemo(() => {
      return options.find(option => option.value === selectedValue);
    }, [options, selectedValue]);

    // 处理值变化
    const handleValueChange = useCallback((newValue: string | number | undefined) => {
      let option = options.find(opt => opt.value === newValue);
      
      // 如果是空选项且没有找到匹配的option，创建一个空选项对象
      if (newValue === '' && !option && showEmptyOption) {
        option = { value: '', label: emptyOptionText };
      }
      
      setSelectedValue(newValue);
      onChange?.(newValue, option);
    }, [options, onChange, showEmptyOption, emptyOptionText]);

    // 处理选择器点击
    const handleClick = useCallback(() => {
      if (disabled || readOnly) return;
      
      const newIsOpen = !isOpen;
      setIsOpen(newIsOpen);
      
      if (newIsOpen) {
        onOpen?.();
        if (searchable && searchInputRef.current) {
          setTimeout(() => searchInputRef.current?.focus(), 0);
        }
      } else {
        onClose?.();
      }
    }, [disabled, readOnly, isOpen, onOpen, onClose, searchable]);

    // 处理选项点击
    const handleOptionClick = useCallback((option: SelectOption) => {
      if (option.disabled) return;
      
      handleValueChange(option.value);
      setIsOpen(false);
      onClose?.();
      setSearchValue('');
      setFocusedIndex(-1);
    }, [handleValueChange, onClose]);

    // 处理清除
    const handleClear = useCallback((e: React.MouseEvent) => {
      e.stopPropagation();
      handleValueChange(undefined);
    }, [handleValueChange]);

    // 处理键盘导航
    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
      if (disabled || readOnly) return;

      switch (e.key) {
        case 'Enter':
        case ' ':
          e.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
            onOpen?.();
          } else if (focusedIndex >= 0 && filteredOptions[focusedIndex]) {
            handleOptionClick(filteredOptions[focusedIndex]);
          }
          break;
        case 'Escape':
          if (isOpen) {
            setIsOpen(false);
            onClose?.();
            setFocusedIndex(-1);
          }
          break;
        case 'ArrowDown':
          e.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
            onOpen?.();
            setFocusedIndex(0);
          } else {
            setFocusedIndex(prev => 
              prev < filteredOptions.length - 1 ? prev + 1 : 0
            );
          }
          break;
        case 'ArrowUp':
          e.preventDefault();
          if (isOpen) {
            setFocusedIndex(prev => 
              prev > 0 ? prev - 1 : filteredOptions.length - 1
            );
          }
          break;
        case 'Tab':
          if (isOpen) {
            setIsOpen(false);
            onClose?.();
            setFocusedIndex(-1);
          }
          break;
      }
    }, [disabled, readOnly, isOpen, focusedIndex, filteredOptions, onOpen, onClose, handleOptionClick]);

    // 处理焦点
    const handleFocus = useCallback((e: React.FocusEvent<HTMLDivElement>) => {
      onFocus?.(e);
    }, [onFocus]);

    // 处理失焦
    const handleBlur = useCallback((e: React.FocusEvent<HTMLDivElement>) => {
      onBlur?.(e);
    }, [onBlur]);

    // 处理搜索输入
    const handleSearchInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
      setFocusedIndex(-1);
    }, []);

    // 处理搜索输入键盘事件
    const handleSearchInputKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && focusedIndex >= 0 && filteredOptions[focusedIndex]) {
        handleOptionClick(filteredOptions[focusedIndex]);
      }
    }, [focusedIndex, filteredOptions, handleOptionClick]);

    // 点击外部关闭下拉菜单
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false);
          onClose?.();
          setFocusedIndex(-1);
        }
      };

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }
    }, [isOpen, onClose]);

    // 自动聚焦
    useEffect(() => {
      if (autoFocus && containerRef.current) {
        containerRef.current.focus();
      }
    }, [autoFocus]);

    // 同步外部值变化
    useEffect(() => {
      if (value !== undefined) {
        setSelectedValue(value);
      }
    }, [value]);

    // 构建CSS类名
    const selectClasses = [
      'select',
      `select--${variant}`,
      `select--${size}`,
      className,
      {
        'select--disabled': disabled,
        'select--readonly': readOnly,
        'select--error': !!errorText,
        'select--open': isOpen
      }
    ].filter(Boolean).join(' ');

    const selectorClasses = [
      'select__selector',
      {
        'select__selector--disabled': disabled,
        'select__selector--readonly': readOnly,
        'select__selector--error': !!errorText,
        'select__selector--open': isOpen
      }
    ].filter(Boolean).join(' ');

    return (
      <div className="select__wrapper">
        {label && (
          <label htmlFor={selectId} className="select__label" id={`${selectId}-label`}>
            {label}
            {required && <span className="select__required">*</span>}
          </label>
        )}
        
        <div
          ref={(node) => {
            (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
            if (typeof ref === 'function') ref(node);
            else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
          }}
          className={selectClasses}
          style={style}
          tabIndex={disabled || readOnly ? -1 : 0}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          onClick={handleClick}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-labelledby={label ? `${selectId}-label` : undefined}
          aria-describedby={errorText ? `${selectId}-error` : helpText ? `${selectId}-help` : undefined}
          {...rest}
        >
          <div className={selectorClasses}>
            <div className="select__content">
              {selectedOption ? (
                <span className="select__selected">{selectedOption.label}</span>
              ) : (
                <span className="select__placeholder">{placeholder}</span>
              )}
            </div>
            
            <div className="select__actions">
              {allowClear && selectedValue && (
                <button
                  type="button"
                  className="select__clear"
                  onClick={handleClear}
                  aria-label="清除选择"
                >
                  <IconX size={16} />
                </button>
              )}
              
              {showArrow && (
                <IconChevronDown 
                  size={16} 
                  className={`select__arrow ${isOpen ? 'select__arrow--open' : ''}`}
                />
              )}
            </div>
          </div>

          {isOpen && (
            <div className="select__dropdown" ref={dropdownRef} style={{ maxHeight }}>
              {searchable && (
                <div className="select__search">
                  <input
                    ref={searchInputRef}
                    type="text"
                    className="select__search-input"
                    placeholder="搜索..."
                    value={searchValue}
                    onChange={handleSearchInputChange}
                    onKeyDown={handleSearchInputKeyDown}
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              )}

              <div className="select__options" role="listbox">
                {loading ? (
                  <div className="select__loading">
                    <div className="select__loading-spinner"></div>
                    <span>{loadingText}</span>
                  </div>
                ) : filteredOptions.length === 0 ? (
                  <div className="select__no-data">{noDataText}</div>
                ) : (
                  <>
                    {showEmptyOption && (
                      <div
                        className={`select__option ${focusedIndex === -1 ? 'select__option--highlighted' : ''}`}
                        onClick={() => handleOptionClick({ value: '', label: emptyOptionText })}
                        role="option"
                        aria-selected={selectedValue === ''}
                      >
                        {emptyOptionText === placeholder ? '请选择选项' : emptyOptionText}
                      </div>
                    )}
                    
                    {filteredOptions.map((option, index) => (
                      <div
                        key={option.value}
                        className={`select__option ${
                          option.value === selectedValue ? 'select__option--selected' : ''
                        } ${
                          option.disabled ? 'select__option--disabled' : ''
                        } ${
                          index === focusedIndex ? 'select__option--highlighted' : ''
                        }`}
                        onClick={() => handleOptionClick(option)}
                        role="option"
                        aria-selected={option.value === selectedValue}
                        aria-disabled={option.disabled}
                      >
                        {option.label}
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {helpText && (
          <div className="select__help" id={`${selectId}-help`}>
            {helpText}
          </div>
        )}

        {errorText && (
          <div className="select__error" id={`${selectId}-error`}>
            {errorText}
          </div>
        )}

        {name && (
          <input
            type="hidden"
            name={name}
            value={selectedValue || ''}
          />
        )}
      </div>
    );
  }
);

Select.displayName = 'Select'; 