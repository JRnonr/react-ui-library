import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { Search, Clock, Zap, FileText, X } from 'lucide-react';
import './AIPromptInput.css';

export interface PromptSuggestion {
  id: string;
  text: string;
  category?: string;
  usage?: number;
}

export interface PromptTemplate {
  id: string;
  name: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
}

export interface AIPromptInputProps {
  /** 输入框的值 */
  value?: string;
  /** 输入框的默认值 */
  defaultValue?: string;
  /** 输入框的占位符 */
  placeholder?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否只读 */
  readOnly?: boolean;
  /** 输入框的尺寸 */
  size?: 'sm' | 'md' | 'lg';
  /** 输入框的样式变体 */
  variant?: 'outline' | 'filled' | 'underline';
  /** 是否显示清除按钮 */
  clearable?: boolean;
  /** 是否显示历史记录 */
  showHistory?: boolean;
  /** 是否显示快捷指令 */
  showShortcuts?: boolean;
  /** 是否显示模板选择器 */
  showTemplates?: boolean;
  /** 是否显示自动补全 */
  showSuggestions?: boolean;
  /** 最大历史记录数量 */
  maxHistoryItems?: number;
  /** 最大建议数量 */
  maxSuggestions?: number;
  /** 触发自动补全的最小字符数 */
  minCharsForSuggestions?: number;
  /** 快捷指令触发字符 */
  shortcutTrigger?: string;
  /** 历史记录数据 */
  history?: string[];
  /** 建议数据 */
  suggestions?: PromptSuggestion[];
  /** 模板数据 */
  templates?: PromptTemplate[];
  /** 快捷指令数据 */
  shortcuts?: Array<{
    key: string;
    label: string;
    description: string;
    action: string;
  }>;
  /** 输入框标签 */
  label?: string;
  /** 是否必填 */
  required?: boolean;
  /** 帮助文本 */
  helpText?: string;
  /** 错误文本 */
  errorText?: string;
  /** 是否显示错误状态 */
  error?: boolean;
  /** 自定义CSS类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 值变化时的回调 */
  onChange?: (value: string) => void;
  /** 输入框获得焦点时的回调 */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** 输入框失去焦点时的回调 */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** 按下回车键时的回调 */
  onEnter?: (value: string) => void;
  /** 选择建议时的回调 */
  onSuggestionSelect?: (suggestion: PromptSuggestion) => void;
  /** 选择模板时的回调 */
  onTemplateSelect?: (template: PromptTemplate) => void;
  /** 选择快捷指令时的回调 */
  onShortcutSelect?: (shortcut: { key: string; action: string }) => void;
  /** 清除历史记录时的回调 */
  onHistoryClear?: () => void;
  /** 添加历史记录时的回调 */
  onHistoryAdd?: (item: string) => void;
}

export const AIPromptInput: React.FC<AIPromptInputProps> = ({
  value,
  defaultValue = '',
  placeholder = '输入你的提示...',
  disabled = false,
  readOnly = false,
  size = 'md',
  variant = 'outline',
  clearable = true,
  showHistory = true,
  showShortcuts = true,
  showTemplates = true,
  showSuggestions = true,
  maxHistoryItems = 10,
  maxSuggestions = 8,
  minCharsForSuggestions = 2,
  shortcutTrigger = '/',
  history = [],
  suggestions = [],
  templates = [],
  shortcuts = [],
  label,
  required = false,
  helpText,
  errorText,
  error = false,
  className = '',
  style,
  onChange,
  onFocus,
  onBlur,
  onEnter,
  onSuggestionSelect,
  onTemplateSelect,
  onShortcutSelect,
  onHistoryClear,
  onHistoryAdd,
}) => {
  const [inputValue, setInputValue] = useState(value ?? defaultValue);
  const [isFocused, setIsFocused] = useState(false);
  const [showSuggestionsPanel, setShowSuggestionsPanel] = useState(false);
  const [showHistoryPanel, setShowHistoryPanel] = useState(false);
  const [showTemplatesPanel, setShowTemplatesPanel] = useState(false);
  const [showShortcutsPanel, setShowShortcutsPanel] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [filteredSuggestions, setFilteredSuggestions] = useState<PromptSuggestion[]>([]);
  const [filteredTemplates, setFilteredTemplates] = useState<PromptTemplate[]>([]);
  const [filteredShortcuts, setFilteredShortcuts] = useState<typeof shortcuts>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);
  const templatesRef = useRef<HTMLDivElement>(null);
  const shortcutsRef = useRef<HTMLDivElement>(null);

  // 处理受控和非受控模式
  useEffect(() => {
    if (value !== undefined) {
      setInputValue(value);
    }
  }, [value]);

  // 过滤建议
  useEffect(() => {
    if (inputValue.length >= minCharsForSuggestions) {
      const filtered = suggestions.filter(suggestion =>
        suggestion.text.toLowerCase().includes(inputValue.toLowerCase())
      ).slice(0, maxSuggestions);
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  }, [inputValue, minCharsForSuggestions, maxSuggestions]);

  // 过滤模板
  useEffect(() => {
    if (inputValue.length >= minCharsForSuggestions) {
      const filtered = templates.filter(template =>
        template.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        template.description.toLowerCase().includes(inputValue.toLowerCase()) ||
        template.tags.some(tag => tag.toLowerCase().includes(inputValue.toLowerCase()))
      ).slice(0, maxSuggestions);
      setFilteredTemplates(filtered);
    } else {
      setFilteredTemplates([]);
    }
  }, [inputValue, minCharsForSuggestions, maxSuggestions]);

  // 过滤快捷指令
  useEffect(() => {
    if (inputValue.startsWith(shortcutTrigger)) {
      const query = inputValue.slice(shortcutTrigger.length).toLowerCase();
      const filtered = shortcuts.filter(shortcut =>
        shortcut.key.toLowerCase().includes(query) ||
        shortcut.label.toLowerCase().includes(query) ||
        shortcut.description.toLowerCase().includes(query)
      ).slice(0, maxSuggestions);
      setFilteredShortcuts(filtered);
    } else {
      setFilteredShortcuts([]);
    }
  }, [inputValue, shortcutTrigger, maxSuggestions]);

  // 处理输入值变化
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
    
    // 重置选择索引
    setSelectedIndex(-1);
    
    // 显示相应的面板
    if (newValue.startsWith(shortcutTrigger) && showShortcuts) {
      setShowShortcutsPanel(true);
      setShowSuggestionsPanel(false);
      setShowHistoryPanel(false);
      setShowTemplatesPanel(false);
    } else if (newValue.length >= minCharsForSuggestions && showSuggestions) {
      setShowSuggestionsPanel(true);
      setShowShortcutsPanel(false);
      setShowHistoryPanel(false);
      setShowTemplatesPanel(false);
    } else {
      setShowSuggestionsPanel(false);
      setShowShortcutsPanel(false);
      setShowHistoryPanel(false);
      setShowTemplatesPanel(false);
    }
  }, [onChange, shortcutTrigger, showShortcuts, minCharsForSuggestions, showSuggestions]);

  // 处理输入框获得焦点
  const handleFocus = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);
    
    // 如果输入框有内容，显示建议面板
    if (inputValue.length >= minCharsForSuggestions && showSuggestions) {
      setShowSuggestionsPanel(true);
    }
  }, [onFocus, inputValue, minCharsForSuggestions, showSuggestions]);

  // 处理输入框失去焦点
  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e);
    
    // 延迟隐藏面板，避免点击面板项时立即隐藏
    setTimeout(() => {
      setShowSuggestionsPanel(false);
      setShowHistoryPanel(false);
      setShowTemplatesPanel(false);
      setShowShortcutsPanel(false);
      setSelectedIndex(-1);
    }, 150);
  }, [onBlur]);

  // 处理键盘事件
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onEnter?.(inputValue);
      
      // 添加历史记录
      if (inputValue.trim() && onHistoryAdd) {
        onHistoryAdd(inputValue.trim());
      }
      
      // 隐藏所有面板
      setShowSuggestionsPanel(false);
      setShowHistoryPanel(false);
      setShowTemplatesPanel(false);
      setShowShortcutsPanel(false);
      setSelectedIndex(-1);
    } else if (e.key === 'Escape') {
      setShowSuggestionsPanel(false);
      setShowHistoryPanel(false);
      setShowTemplatesPanel(false);
      setShowShortcutsPanel(false);
      setSelectedIndex(-1);
      inputRef.current?.blur();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const currentPanels = [
        showSuggestionsPanel && filteredSuggestions.length > 0,
        showHistoryPanel && history.length > 0,
        showTemplatesPanel && filteredTemplates.length > 0,
        showShortcutsPanel && filteredShortcuts.length > 0
      ];
      
      if (currentPanels.some(Boolean)) {
        const maxIndex = Math.max(
          showSuggestionsPanel ? filteredSuggestions.length - 1 : -1,
          showHistoryPanel ? history.length - 1 : -1,
          showTemplatesPanel ? filteredTemplates.length - 1 : -1,
          showShortcutsPanel ? filteredShortcuts.length - 1 : -1
        );
        setSelectedIndex(prev => prev < maxIndex ? prev + 1 : 0);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const currentPanels = [
        showSuggestionsPanel && filteredSuggestions.length > 0,
        showHistoryPanel && history.length > 0,
        showTemplatesPanel && filteredTemplates.length > 0,
        showShortcutsPanel && filteredShortcuts.length > 0
      ];
      
      if (currentPanels.some(Boolean)) {
        const maxIndex = Math.max(
          showSuggestionsPanel ? filteredSuggestions.length - 1 : -1,
          showHistoryPanel ? history.length - 1 : -1,
          showTemplatesPanel ? filteredTemplates.length - 1 : -1,
          showShortcutsPanel ? filteredShortcuts.length - 1 : -1
        );
        setSelectedIndex(prev => prev > 0 ? prev - 1 : maxIndex);
      }
    }
  }, [
    onEnter, inputValue, onHistoryAdd, showSuggestionsPanel, showHistoryPanel, 
    showTemplatesPanel, showShortcutsPanel, filteredSuggestions, filteredTemplates, 
    filteredShortcuts, history
  ]);

  // 处理建议选择
  const handleSuggestionSelect = useCallback((suggestion: PromptSuggestion) => {
    setInputValue(suggestion.text);
    onChange?.(suggestion.text);
    onSuggestionSelect?.(suggestion);
    setShowSuggestionsPanel(false);
    setSelectedIndex(-1);
    inputRef.current?.focus();
  }, [onChange, onSuggestionSelect]);

  // 处理模板选择
  const handleTemplateSelect = useCallback((template: PromptTemplate) => {
    setInputValue(template.content);
    onChange?.(template.content);
    onTemplateSelect?.(template);
    setShowTemplatesPanel(false);
    setSelectedIndex(-1);
    inputRef.current?.focus();
  }, [onChange, onTemplateSelect]);

  // 处理快捷指令选择
  const handleShortcutSelect = useCallback((shortcut: { key: string; action: string }) => {
    setInputValue(shortcut.action);
    onChange?.(shortcut.action);
    onShortcutSelect?.(shortcut);
    setShowShortcutsPanel(false);
    setSelectedIndex(-1);
    inputRef.current?.focus();
  }, [onChange, onShortcutSelect]);

  // 处理历史记录选择
  const handleHistorySelect = useCallback((item: string) => {
    setInputValue(item);
    onChange?.(item);
    setShowHistoryPanel(false);
    setSelectedIndex(-1);
    inputRef.current?.focus();
  }, [onChange]);

  // 处理清除输入
  const handleClear = useCallback(() => {
    setInputValue('');
    onChange?.('');
    setShowSuggestionsPanel(false);
    setShowHistoryPanel(false);
    setShowTemplatesPanel(false);
    setShowShortcutsPanel(false);
    setSelectedIndex(-1);
    inputRef.current?.focus();
  }, [onChange]);

  // 处理历史记录按钮点击
  const handleHistoryClick = useCallback(() => {
    setShowHistoryPanel(!showHistoryPanel);
    setShowSuggestionsPanel(false);
    setShowTemplatesPanel(false);
    setShowShortcutsPanel(false);
    setSelectedIndex(-1);
  }, [showHistoryPanel]);

  // 处理模板按钮点击
  const handleTemplatesClick = useCallback(() => {
    setShowTemplatesPanel(!showTemplatesPanel);
    setShowSuggestionsPanel(false);
    setShowHistoryPanel(false);
    setShowShortcutsPanel(false);
    setSelectedIndex(-1);
  }, [showTemplatesPanel]);

  // 生成CSS类名
  const containerClassName = useMemo(() => {
    const baseClass = 'ai-prompt-input';
    const sizeClass = `ai-prompt-input--${size}`;
    const variantClass = `ai-prompt-input--${variant}`;
    const stateClass = error ? 'ai-prompt-input--error' : '';
    const focusClass = isFocused ? 'ai-prompt-input--focused' : '';
    const disabledClass = disabled ? 'ai-prompt-input--disabled' : '';
    
    return `${baseClass} ${sizeClass} ${variantClass} ${stateClass} ${focusClass} ${disabledClass} ${className}`.trim();
  }, [size, variant, error, isFocused, disabled, className]);

  // 渲染建议面板
  const renderSuggestionsPanel = () => {
    if (!showSuggestionsPanel || filteredSuggestions.length === 0) return null;

    return (
      <div ref={suggestionsRef} className="ai-prompt-input__panel ai-prompt-input__suggestions">
        <div className="ai-prompt-input__panel-header">
          <Search size={16} />
          <span>建议</span>
        </div>
        <div className="ai-prompt-input__panel-content">
          {filteredSuggestions.map((suggestion, index) => (
            <div
              key={suggestion.id}
              className={`ai-prompt-input__suggestion-item ${
                index === selectedIndex ? 'ai-prompt-input__suggestion-item--selected' : ''
              }`}
              onClick={() => handleSuggestionSelect(suggestion)}
            >
              <div className="ai-prompt-input__suggestion-text">{suggestion.text}</div>
              {suggestion.category && (
                <div className="ai-prompt-input__suggestion-category">{suggestion.category}</div>
              )}
              {suggestion.usage && (
                <div className="ai-prompt-input__suggestion-usage">使用 {suggestion.usage} 次</div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // 渲染历史记录面板
  const renderHistoryPanel = () => {
    if (!showHistoryPanel || history.length === 0) return null;

    return (
      <div ref={historyRef} className="ai-prompt-input__panel ai-prompt-input__history">
        <div className="ai-prompt-input__panel-header">
          <Clock size={16} />
          <span>历史记录</span>
          <button
            className="ai-prompt-input__clear-history"
            onClick={onHistoryClear}
            type="button"
          >
            <X size={14} />
          </button>
        </div>
        <div className="ai-prompt-input__panel-content">
          {history.slice(0, maxHistoryItems).map((item, index) => (
            <div
              key={index}
              className={`ai-prompt-input__history-item ${
                index === selectedIndex ? 'ai-prompt-input__history-item--selected' : ''
              }`}
              onClick={() => handleHistorySelect(item)}
            >
              <Clock size={14} />
              <span className="ai-prompt-input__history-text">{item}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // 渲染模板面板
  const renderTemplatesPanel = () => {
    if (!showTemplatesPanel) return null;

    const displayTemplates = inputValue.length >= minCharsForSuggestions 
      ? filteredTemplates 
      : templates.slice(0, maxSuggestions);

    if (displayTemplates.length === 0) return null;

    return (
      <div ref={templatesRef} className="ai-prompt-input__panel ai-prompt-input__templates">
        <div className="ai-prompt-input__panel-header">
          <FileText size={16} />
          <span>模板</span>
        </div>
        <div className="ai-prompt-input__panel-content">
          {displayTemplates.map((template, index) => (
            <div
              key={template.id}
              className={`ai-prompt-input__template-item ${
                index === selectedIndex ? 'ai-prompt-input__template-item--selected' : ''
              }`}
              onClick={() => handleTemplateSelect(template)}
            >
              <div className="ai-prompt-input__template-header">
                <div className="ai-prompt-input__template-name">{template.name}</div>
                <div className="ai-prompt-input__template-category">{template.category}</div>
              </div>
              <div className="ai-prompt-input__template-description">{template.description}</div>
              <div className="ai-prompt-input__template-tags">
                {template.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="ai-prompt-input__template-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // 渲染快捷指令面板
  const renderShortcutsPanel = () => {
    if (!showShortcutsPanel || filteredShortcuts.length === 0) return null;

    return (
      <div ref={shortcutsRef} className="ai-prompt-input__panel ai-prompt-input__shortcuts">
        <div className="ai-prompt-input__panel-header">
          <Zap size={16} />
          <span>快捷指令</span>
        </div>
        <div className="ai-prompt-input__panel-content">
          {filteredShortcuts.map((shortcut, index) => (
            <div
              key={shortcut.key}
              className={`ai-prompt-input__shortcut-item ${
                index === selectedIndex ? 'ai-prompt-input__shortcut-item--selected' : ''
              }`}
              onClick={() => handleShortcutSelect(shortcut)}
            >
              <div className="ai-prompt-input__shortcut-key">/{shortcut.key}</div>
              <div className="ai-prompt-input__shortcut-label">{shortcut.label}</div>
              <div className="ai-prompt-input__shortcut-description">{shortcut.description}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={containerClassName} style={style}>
      {label && (
        <label className="ai-prompt-input__label">
          {label}
          {required && <span className="ai-prompt-input__required">*</span>}
        </label>
      )}
      
      <div className="ai-prompt-input__wrapper">
        <div className="ai-prompt-input__input-container">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            className="ai-prompt-input__input"
            aria-label={label || placeholder}
            aria-invalid={error}
            aria-describedby={errorText ? 'error-text' : helpText ? 'help-text' : undefined}
          />
          
          <div className="ai-prompt-input__actions">
            {showHistory && (
              <button
                type="button"
                className="ai-prompt-input__action-btn ai-prompt-input__history-btn"
                onClick={handleHistoryClick}
                disabled={disabled}
                aria-label="显示历史记录"
              >
                <Clock size={16} />
              </button>
            )}
            
            {showTemplates && (
              <button
                type="button"
                className="ai-prompt-input__action-btn ai-prompt-input__templates-btn"
                onClick={handleTemplatesClick}
                disabled={disabled}
                aria-label="显示模板"
              >
                <FileText size={16} />
              </button>
            )}
            
            {clearable && inputValue && (
              <button
                type="button"
                className="ai-prompt-input__action-btn ai-prompt-input__clear-btn"
                onClick={handleClear}
                disabled={disabled}
                aria-label="清除输入"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>
        
        {/* 面板 */}
        {renderSuggestionsPanel()}
        {renderHistoryPanel()}
        {renderTemplatesPanel()}
        {renderShortcutsPanel()}
      </div>
      
      {helpText && !errorText && (
        <div id="help-text" className="ai-prompt-input__help-text">
          {helpText}
        </div>
      )}
      
      {errorText && (
        <div id="error-text" className="ai-prompt-input__error-text">
          {errorText}
        </div>
      )}
    </div>
  );
}; 