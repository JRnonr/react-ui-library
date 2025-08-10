'use client';
import React, { useState, useRef, useEffect, useCallback, forwardRef } from 'react';
import './ChatInterface.css';

export interface Message {
  id: string;
  content: string;
  type: 'user' | 'assistant';
  timestamp: Date;
  isTyping?: boolean;
}

export interface ChatInterfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 初始消息列表 */
  initialMessages?: Message[];
  /** 占位符文本 */
  placeholder?: string;
  /** 是否禁用输入 */
  disabled?: boolean;
  /** 发送消息的回调 */
  onSendMessage?: (message: string) => void | Promise<void> | string | Promise<string>;
  /** 自定义渲染消息内容 */
  renderMessage?: (message: Message) => React.ReactNode;
  /** 额外的CSS类名 */
  className?: string;
  /** 额外的样式 */
  style?: React.CSSProperties;
}

export const ChatInterface = forwardRef<HTMLDivElement, ChatInterfaceProps>(({
  initialMessages = [],
  placeholder = '输入消息...',
  disabled = false,
  onSendMessage,
  renderMessage,
  className = '',
  style,
  ...rest
}, ref) => {
  // 确保 initialMessages 始终是数组
  const safeInitialMessages = Array.isArray(initialMessages) ? initialMessages : [];
  const [messages, setMessages] = useState<Message[]>(safeInitialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [pendingMessages, setPendingMessages] = useState<Set<string>>(new Set());
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const internalInputRef = useRef<HTMLTextAreaElement>(null);

  // 自动滚动到底部
  const scrollToBottom = useCallback(() => {
    if (messagesEndRef.current?.scrollIntoView) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // 添加消息
  const addMessage = useCallback((content: string, type: 'user' | 'assistant') => {
    const newMessage: Message = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      content,
      type,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
    return newMessage;
  }, []);

  // 模拟AI回复的打字机效果
  const simulateTyping = useCallback(async (content: string) => {
    const typingMessage: Message = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      content: '',
      type: 'assistant',
      timestamp: new Date(),
      isTyping: true,
    };
    
    setMessages(prev => [...prev, typingMessage]);
    
    // 打字机效果
    let currentContent = '';
    const words = content.split(' ');
    
    for (let i = 0; i < words.length; i++) {
      currentContent += (i > 0 ? ' ' : '') + words[i];
      setMessages(prev => 
        prev.map(msg => 
          msg.id === typingMessage.id 
            ? { ...msg, content: currentContent }
            : msg
        )
      );
      await new Promise(resolve => setTimeout(resolve, 100 + Math.random() * 50));
    }
    
    // 完成打字
    setMessages(prev => 
      prev.map(msg => 
        msg.id === typingMessage.id 
          ? { ...msg, isTyping: false }
          : msg
      )
    );
  }, []);

  // 处理发送消息
  const handleSendMessage = useCallback(async () => {
    if (!inputValue.trim() || disabled) return;

    // 当有 onSendMessage 回调时，允许并发发送
    // 当没有 onSendMessage 时，使用 isLoading 状态防止重复发送
    if (!onSendMessage && isLoading) return;

    const messageContent = inputValue.trim();
    const messageId = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    
    // 防止重复发送
    if (pendingMessages.has(messageId)) return;
    
    setPendingMessages(prev => {
      const newSet = new Set(prev);
      newSet.add(messageId);
      return newSet;
    });
    addMessage(messageContent, 'user');
    setInputValue('');
    
    // 只有在没有 onSendMessage 时才设置全局 loading 状态
    if (!onSendMessage) {
      setIsLoading(true);
    }

    try {
      if (onSendMessage) {
        const result = await onSendMessage(messageContent);
        // 如果 onSendMessage 返回字符串，使用打字机效果显示
        if (typeof result === 'string' && result.trim()) {
          await simulateTyping(result);
        }
      } else {
        // 默认AI回复（模拟）
        const aiResponse = `这是对"${messageContent}"的AI回复。我理解你的问题，让我为你提供详细的解答...`;
        await simulateTyping(aiResponse);
      }
    } catch (error) {
      console.error('发送消息失败:', error);
      addMessage('抱歉，发送消息时出现错误，请重试。', 'assistant');
    } finally {
      if (!onSendMessage) {
        setIsLoading(false);
      }
      setPendingMessages(prev => {
        const newSet = new Set(prev);
        newSet.delete(messageId);
        return newSet;
      });
    }
  }, [inputValue, disabled, isLoading, addMessage, onSendMessage, simulateTyping, pendingMessages]);

  // 处理键盘事件
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  }, [handleSendMessage]);

  // 默认消息渲染
  const defaultRenderMessage = (message: Message) => (
    <div className={`chat-message chat-message--${message.type}`} key={message.id}>
      <div className="chat-message__avatar">
        {message.type === 'user' ? '👤' : '🤖'}
      </div>
      <div className="chat-message__content">
        <div className="chat-message__text">
          {message.content}
          {message.isTyping && <span className="chat-message__typing-indicator">|</span>}
        </div>
        <div className="chat-message__timestamp">
          {message.timestamp.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );

  return (
    <div ref={ref} className={`chat-interface ${className}`} style={style} {...rest}>
      <div className="chat-interface__header">
        <h3 className="chat-interface__title">AI 助手</h3>
        <div className="chat-interface__status">
          {(!onSendMessage && isLoading) ? '正在思考...' : '在线'}
        </div>
      </div>
      
      <div className="chat-interface__messages">
        {messages.length === 0 ? (
          <div className="chat-interface__empty">
            <div className="chat-interface__empty-icon">💬</div>
            <p>开始与AI助手对话吧！</p>
          </div>
        ) : (
          messages.map(message => (
            <div key={message.id}>
              {renderMessage ? renderMessage(message) : defaultRenderMessage(message)}
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="chat-interface__input">
        <textarea
          ref={internalInputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled || (!onSendMessage && isLoading)}
          className="chat-interface__textarea"
          rows={1}
        />
        <button
          onClick={handleSendMessage}
          disabled={!inputValue.trim() || disabled || (!onSendMessage && isLoading)}
          className="chat-interface__send-btn"
          aria-label="发送消息"
        >
          {(!onSendMessage && isLoading) ? (
            <span className="chat-interface__loading-spinner" />
          ) : (
            '发送'
          )}
        </button>
      </div>
    </div>
  );
});

ChatInterface.displayName = 'ChatInterface'; 