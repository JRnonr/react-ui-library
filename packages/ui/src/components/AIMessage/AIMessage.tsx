'use client';
import React, { forwardRef, useState, useCallback } from 'react';
import { Copy, Check } from 'lucide-react';
import './AIMessage.css';

export type MessageStatus = 'sending' | 'success' | 'error' | 'streaming';

export type AIMessageOwnProps = {
  /** 消息内容，支持markdown格式 */
  content: string;
  /** 消息状态 */
  status?: MessageStatus;
  /** 是否显示时间戳 */
  showTimestamp?: boolean;
  /** 时间戳 */
  timestamp?: Date | string;
  /** 是否显示复制按钮 */
  showCopyButton?: boolean;
  /** 是否显示代码高亮 */
  enableCodeHighlight?: boolean;
  /** 自定义头像 */
  avatar?: React.ReactNode;
  /** 用户名 */
  username?: string;
  /** 是否显示用户名 */
  showUsername?: boolean;
  /** 自定义样式类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 复制成功回调 */
  onCopy?: (content: string) => void;
  /** 复制失败回调 */
  onCopyError?: (error: Error) => void;
  /** 消息点击回调 */
  onClick?: () => void;
};

// 有效的 HTML div 属性
const validDivProps = [
  'id', 'title', 'lang', 'dir', 'tabIndex', 'accessKey', 'contentEditable',
  'contextMenu', 'draggable', 'dropzone', 'hidden', 'spellCheck', 'translate',
  'aria-*', 'data-*'
];

// 过滤属性，只保留有效的 HTML 属性
const filterValidProps = (props: Record<string, unknown>) => {
  const filtered: Record<string, unknown> = {};
  
  Object.keys(props).forEach(key => {
    // 保留有效的 HTML 属性
    if (validDivProps.some(validProp => key === validProp || key.startsWith('aria-') || key.startsWith('data-'))) {
      filtered[key] = props[key];
    }
  });
  
  return filtered;
};

export const AIMessage = forwardRef<HTMLDivElement, AIMessageOwnProps & React.HTMLAttributes<HTMLDivElement>>(
  (
    {
      content,
      status = 'success',
      showTimestamp = true,
      timestamp,
      showCopyButton = true,
      enableCodeHighlight = true,
      avatar,
      username = 'AI Assistant',
      showUsername = true,
      className = '',
      style,
      onCopy,
      onCopyError,
      onClick,
      ...rest
    },
    ref
  ) => {
    const [copied, setCopied] = useState(false);

    // 格式化时间戳
    const formatTimestamp = useCallback((timestamp: Date | string) => {
      if (timestamp instanceof Date) {
        return timestamp.toLocaleTimeString();
      }
      return new Date(timestamp).toLocaleTimeString();
    }, []);

    // 复制内容到剪贴板
    const handleCopy = useCallback(async () => {
      try {
        await navigator.clipboard.writeText(content);
        setCopied(true);
        onCopy?.(content);
        
        // 2秒后重置复制状态
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        onCopyError?.(error as Error);
      }
    }, [content, onCopy, onCopyError]);

    // 渲染markdown内容
    const renderContent = useCallback(() => {
      if (!enableCodeHighlight) {
        return <div className="ai-message__content">{content}</div>;
      }

      // 如果没有内容，返回空div
      if (!content.trim()) {
        return <div className="ai-message__content" />;
      }

      // 简单的markdown解析和代码高亮
      const lines = content.split('\n');
      const elements: React.ReactNode[] = [];
      let currentText = '';
      let inCodeBlock = false;
      let codeBlockContent = '';

      const flushText = () => {
        if (currentText.trim()) {
          // 处理行内markdown语法
          let processedText = currentText;
          
          // 处理粗体 **text**
          processedText = processedText.replace(/\*\*(.*?)\*\*/g, (match, text) => {
            return `<strong class="ai-message__bold">${text}</strong>`;
          });
          
          // 处理斜体 *text*
          processedText = processedText.replace(/\*(.*?)\*/g, (match, text) => {
            return `<em class="ai-message__italic">${text}</em>`;
          });
          
          // 处理行内代码 `code`
          processedText = processedText.replace(/`(.*?)`/g, (match, code) => {
            return `<code class="ai-message__inline-code">${code}</code>`;
          });
          
          elements.push(
            <p key={`text-${elements.length}`} className="ai-message__text" 
               dangerouslySetInnerHTML={{ __html: processedText }} />
          );
          currentText = '';
        }
      };

      lines.forEach((line) => {
        if (line.startsWith('```')) {
          if (inCodeBlock) {
            // 结束代码块
            inCodeBlock = false;
            elements.push(
              <pre key={`code-${elements.length}`} className="ai-message__code-block">
                <code>{codeBlockContent}</code>
              </pre>
            );
            codeBlockContent = '';
          } else {
            // 开始代码块
            flushText();
            inCodeBlock = true;
          }
        } else if (inCodeBlock) {
          // 在代码块内
          codeBlockContent += (codeBlockContent ? '\n' : '') + line;
        } else {
          // 处理markdown语法
          
          // 处理标题
          if (line.startsWith('#')) {
            flushText();
            const level = line.match(/^#+/)?.[0].length || 1;
            const text = line.replace(/^#+\s*/, '');
            const HeadingTag = `h${Math.min(level, 6)}` as keyof JSX.IntrinsicElements;
            elements.push(
              <HeadingTag key={`heading-${elements.length}`} className={`ai-message__heading ai-message__heading--h${level}`}>
                {text}
              </HeadingTag>
            );
          } else if (line.trim() === '') {
            // 空行
            flushText();
            elements.push(<br key={`br-${elements.length}`} />);
          } else {
            // 普通文本 - 将换行符转换为空格，这样文本可以在同一行中查找
            currentText += (currentText ? ' ' : '') + line;
          }
        }
      });

      // 处理剩余的文本
      flushText();

      return (
        <div className="ai-message__content">
          {elements}
        </div>
      );
    }, [content, enableCodeHighlight]);

    // 渲染状态指示器
    const renderStatusIndicator = useCallback(() => {
      switch (status) {
        case 'sending':
          return (
            <div className="ai-message__status ai-message__status--sending">
              <div className="ai-message__status-dot"></div>
              <span>发送中...</span>
            </div>
          );
        case 'streaming':
          return (
            <div className="ai-message__status ai-message__status--streaming">
              <div className="ai-message__status-dot"></div>
              <span>正在输入...</span>
            </div>
          );
        case 'error':
          return (
            <div className="ai-message__status ai-message__status--error">
              <div className="ai-message__status-dot"></div>
              <span>发送失败</span>
            </div>
          );
        default:
          return null;
      }
    }, [status]);

    const baseClass = 'ai-message';
    const statusClass = `ai-message--${status}`;
    const streamingClass = status === 'streaming' ? 'ai-message--streaming' : '';

    const messageClasses = [
      baseClass,
      statusClass,
      streamingClass,
      className
    ]
      .filter(Boolean)
      .join(' ');

    // 过滤有效的 HTML 属性
    const validProps = filterValidProps(rest);

    return (
      <div
        ref={ref}
        className={messageClasses}
        style={style}
        onClick={onClick}
        data-testid="ai-message"
        {...validProps}
      >
        {/* 头像和用户信息 */}
        {(avatar || showUsername) && (
          <div className="ai-message__header">
            {avatar && (
              <div className="ai-message__avatar">
                {avatar}
              </div>
            )}
            {showUsername && (
              <div className="ai-message__user-info">
                <span className="ai-message__username">{username}</span>
                {showTimestamp && timestamp && (
                  <span className="ai-message__timestamp">
                    {formatTimestamp(timestamp)}
                  </span>
                )}
              </div>
            )}
          </div>
        )}

        {/* 消息内容 */}
        <div className="ai-message__body">
          {renderContent()}
          
          {/* 状态指示器 */}
          {renderStatusIndicator()}
        </div>

        {/* 操作按钮 */}
        {showCopyButton && (
          <div className="ai-message__actions">
            <button
              className={`ai-message__copy-btn ${copied ? 'ai-message__copy-btn--copied' : ''}`}
              onClick={handleCopy}
              disabled={status === 'sending' || status === 'streaming'}
              aria-label={copied ? '已复制' : '复制内容'}
              title={copied ? '已复制' : '复制内容'}
            >
              {copied ? (
                <>
                  <Check className="ai-message__copy-icon" size={16} />
                  已复制
                </>
              ) : (
                <>
                  <Copy className="ai-message__copy-icon" size={16} />
                  复制
                </>
              )}
            </button>
          </div>
        )}
      </div>
    );
  }
);

AIMessage.displayName = 'AIMessage'; 