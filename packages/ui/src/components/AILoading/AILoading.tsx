import React, { useState, useEffect, useCallback } from 'react';
import './AILoading.css';

export interface AILoadingProps {
  /** 加载类型 */
  type?: 'typing' | 'thinking' | 'processing' | 'dots';
  /** 加载文本 */
  text?: string;
  /** 自定义加载文本数组 */
  texts?: string[];
  /** 打字机效果速度（毫秒） */
  typingSpeed?: number;
  /** 是否循环播放文本 */
  loop?: boolean;
  /** 是否显示进度条 */
  showProgress?: boolean;
  /** 进度值（0-100） */
  progress?: number;
  /** 是否不确定进度 */
  indeterminate?: boolean;
  /** 自定义CSS类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 加载完成回调 */
  onComplete?: () => void;
  /** 文本变化回调 */
  onTextChange?: (text: string) => void;
}

export const AILoading: React.FC<AILoadingProps> = ({
  type = 'typing',
  text = 'AI正在思考中...',
  texts = [],
  typingSpeed = 100,
  loop = false,
  showProgress = false,
  progress = 0,
  indeterminate = false,
  className = '',
  style = {},
  onComplete,
  onTextChange,
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [dotIndex, setDotIndex] = useState(0);

  // 获取要显示的文本数组
  const displayTexts = texts.length > 0 ? texts : [text];

  // 打字机效果
  const typeText = useCallback(async (targetText: string) => {
    setIsTyping(true);
    let current = '';
    
    for (let i = 0; i < targetText.length; i++) {
      current += targetText[i];
      setCurrentText(current);
      onTextChange?.(current);
      await new Promise(resolve => setTimeout(resolve, typingSpeed));
    }
    
    setIsTyping(false);
    onComplete?.();
  }, [typingSpeed, onTextChange, onComplete]);

  // 思考动画效果
  const thinkingAnimation = useCallback(() => {
    const interval = setInterval(() => {
      setDotIndex(prev => (prev + 1) % 4);
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  // 处理文本变化
  useEffect(() => {
    if (type === 'typing' && displayTexts.length > 0) {
      const currentText = displayTexts[currentIndex];
      typeText(currentText);
    }
  }, [type, currentIndex, displayTexts.length, typingSpeed, onTextChange, onComplete]);

  // 处理循环播放
  useEffect(() => {
    if (loop && type === 'typing' && !isTyping) {
      const timer = setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % displayTexts.length);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [loop, type, isTyping, displayTexts.length, currentIndex]);

  // 处理思考动画
  useEffect(() => {
    if (type === 'thinking') {
      return thinkingAnimation();
    }
  }, [type, thinkingAnimation]);

  // 处理点动画
  useEffect(() => {
    if (type === 'dots') {
      const interval = setInterval(() => {
        setDotIndex(prev => (prev + 1) % 4);
      }, 300);
      
      return () => clearInterval(interval);
    }
  }, [type]);

  // 渲染不同类型的加载动画
  const renderLoadingContent = () => {
    switch (type) {
      case 'typing':
        return (
          <div className="ai-loading-typing">
            <span className="ai-loading-text">{currentText}</span>
            <span className="ai-loading-cursor">|</span>
          </div>
        );
      
      case 'thinking':
        return (
          <div className="ai-loading-thinking">
            <span className="ai-loading-text">{text}</span>
            <div className="ai-loading-dots">
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  className={`ai-loading-dot ${i === dotIndex ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
        );
      
      case 'processing':
        return (
          <div className="ai-loading-processing">
            <div className="ai-loading-spinner" />
            <span className="ai-loading-text">{text}</span>
          </div>
        );
      
      case 'dots':
        return (
          <div className="ai-loading-dots-only">
            {[0, 1, 2, 3].map(i => (
              <span
                key={i}
                className={`ai-loading-dot ${i === dotIndex ? 'active' : ''}`}
              />
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  // 渲染进度条
  const renderProgress = () => {
    if (!showProgress) return null;
    
    return (
      <div className="ai-loading-progress">
        <div className="ai-loading-progress-bar">
          <div
            className={`ai-loading-progress-fill ${
              indeterminate ? 'indeterminate' : ''
            }`}
            style={{
              width: indeterminate ? '100%' : `${progress}%`,
            }}
          />
        </div>
        {!indeterminate && (
          <span className="ai-loading-progress-text">{Math.round(progress)}%</span>
        )}
      </div>
    );
  };

  return (
    <div
      className={`ai-loading ai-loading-${type} ${className}`}
      style={style}
      role="status"
      aria-label={`AI加载中，类型：${type}`}
    >
      {renderLoadingContent()}
      {renderProgress()}
    </div>
  );
}; 