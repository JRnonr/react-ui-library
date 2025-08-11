import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AIMessage } from '../AIMessage';

// Mock navigator.clipboard
const mockClipboard = {
  writeText: jest.fn(),
};
Object.assign(navigator, {
  clipboard: mockClipboard,
});

describe('AIMessage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('基础渲染', () => {
    it('应该正确渲染消息内容', () => {
      const content = '这是一个测试消息';
      render(<AIMessage content={content} />);
      
      expect(screen.getByText(content)).toBeInTheDocument();
    });

    it('应该渲染默认用户名', () => {
      render(<AIMessage content="测试消息" />);
      
      expect(screen.getByText('AI Assistant')).toBeInTheDocument();
    });

    it('应该渲染自定义用户名', () => {
      const username = '自定义AI';
      render(<AIMessage content="测试消息" username={username} />);
      
      expect(screen.getByText(username)).toBeInTheDocument();
    });

    it('应该隐藏用户名当showUsername为false时', () => {
      render(<AIMessage content="测试消息" showUsername={false} />);
      
      expect(screen.queryByText('AI Assistant')).not.toBeInTheDocument();
    });

    it('应该渲染时间戳', () => {
      const timestamp = new Date('2024-01-01T12:00:00Z');
      render(<AIMessage content="测试消息" timestamp={timestamp} />);
      
      expect(screen.getByText(timestamp.toLocaleTimeString())).toBeInTheDocument();
    });

    it('应该隐藏时间戳当showTimestamp为false时', () => {
      const timestamp = new Date('2024-01-01T12:00:00Z');
      render(<AIMessage content="测试消息" timestamp={timestamp} showTimestamp={false} />);
      
      expect(screen.queryByText(timestamp.toLocaleTimeString())).not.toBeInTheDocument();
    });
  });

  describe('状态管理', () => {
    it('应该正确应用sending状态样式', () => {
      render(<AIMessage content="测试消息" status="sending" />);
      
      const message = screen.getByText('测试消息').closest('.ai-message');
      expect(message).toHaveClass('ai-message--sending');
    });

    it('应该正确应用streaming状态样式', () => {
      render(<AIMessage content="测试消息" status="streaming" />);
      
      const message = screen.getByText('测试消息').closest('.ai-message');
      expect(message).toHaveClass('ai-message--streaming');
    });

    it('应该正确应用error状态样式', () => {
      render(<AIMessage content="测试消息" status="error" />);
      
      const message = screen.getByText('测试消息').closest('.ai-message');
      expect(message).toHaveClass('ai-message--error');
    });

    it('应该显示状态指示器', () => {
      render(<AIMessage content="测试消息" status="sending" />);
      
      expect(screen.getByText('发送中...')).toBeInTheDocument();
    });

    it('应该显示流式状态指示器', () => {
      render(<AIMessage content="测试消息" status="streaming" />);
      
      expect(screen.getByText('正在输入...')).toBeInTheDocument();
    });

    it('应该显示错误状态指示器', () => {
      render(<AIMessage content="测试消息" status="error" />);
      
      expect(screen.getByText('发送失败')).toBeInTheDocument();
    });
  });

  describe('复制功能', () => {
    it('应该显示复制按钮', () => {
      render(<AIMessage content="测试消息" />);
      
      expect(screen.getByRole('button', { name: /复制内容/i })).toBeInTheDocument();
    });

    it('应该隐藏复制按钮当showCopyButton为false时', () => {
      render(<AIMessage content="测试消息" showCopyButton={false} />);
      
      expect(screen.queryByRole('button', { name: /复制内容/i })).not.toBeInTheDocument();
    });

    it('应该在复制成功时调用onCopy回调', async () => {
      const onCopy = jest.fn();
      const content = '测试消息';
      
      render(<AIMessage content={content} onCopy={onCopy} />);
      
      const copyButton = screen.getByRole('button', { name: /复制内容/i });
      fireEvent.click(copyButton);
      
      await waitFor(() => {
        expect(mockClipboard.writeText).toHaveBeenCalledWith(content);
        expect(onCopy).toHaveBeenCalledWith(content);
      });
    });

    it('应该在复制失败时调用onCopyError回调', async () => {
      const onCopyError = jest.fn();
      const error = new Error('复制失败');
      mockClipboard.writeText.mockRejectedValueOnce(error);
      
      render(<AIMessage content="测试消息" onCopyError={onCopyError} />);
      
      const copyButton = screen.getByRole('button', { name: /复制内容/i });
      fireEvent.click(copyButton);
      
      await waitFor(() => {
        expect(onCopyError).toHaveBeenCalledWith(error);
      });
    });

    it('应该在复制成功后显示"已复制"状态', async () => {
      render(<AIMessage content="测试消息" />);
      
      const copyButton = screen.getByRole('button', { name: /复制内容/i });
      fireEvent.click(copyButton);
      
      await waitFor(() => {
        expect(screen.getByText('已复制')).toBeInTheDocument();
      });
    });

    it('应该在复制按钮被禁用时禁用复制功能', () => {
      render(<AIMessage content="测试消息" status="sending" />);
      
      const copyButton = screen.getByRole('button', { name: /复制内容/i });
      expect(copyButton).toBeDisabled();
    });
  });

  describe('Markdown渲染', () => {
    it('应该渲染粗体文本', () => {
      const content = '这是**粗体**文本';
      render(<AIMessage content={content} enableCodeHighlight={true} />);
      
      const boldText = screen.getByText('粗体');
      expect(boldText).toHaveClass('ai-message__bold');
    });

    it('应该渲染斜体文本', () => {
      const content = '这是*斜体*文本';
      render(<AIMessage content={content} enableCodeHighlight={true} />);
      
      const italicText = screen.getByText('斜体');
      expect(italicText).toHaveClass('ai-message__italic');
    });

    it('应该渲染行内代码', () => {
      const content = '这是`行内代码`文本';
      render(<AIMessage content={content} enableCodeHighlight={true} />);
      
      const inlineCode = screen.getByText('行内代码');
      expect(inlineCode).toHaveClass('ai-message__inline-code');
    });

    it('应该渲染代码块', () => {
      const content = '```\nfunction test() {\n  return "hello";\n}\n```';
      render(<AIMessage content={content} enableCodeHighlight={true} />);
      
      // 查找代码块元素
      const codeBlock = screen.getByText(/function test\(\)/);
      expect(codeBlock.closest('pre')).toHaveClass('ai-message__code-block');
    });

    it('应该渲染标题', () => {
      const content = '# 标题1\n## 标题2';
      render(<AIMessage content={content} enableCodeHighlight={true} />);
      
      expect(screen.getByText('标题1')).toHaveClass('ai-message__heading', 'ai-message__heading--h1');
      expect(screen.getByText('标题2')).toHaveClass('ai-message__heading', 'ai-message__heading--h2');
    });

    it('应该在禁用代码高亮时不渲染markdown', () => {
      const content = '这是**粗体**文本';
      render(<AIMessage content={content} enableCodeHighlight={false} />);
      
      expect(screen.getByText('这是**粗体**文本')).toBeInTheDocument();
      expect(screen.queryByText('粗体')).not.toBeInTheDocument();
    });
  });

  describe('头像和自定义内容', () => {
    it('应该渲染自定义头像', () => {
      const avatar = <div data-testid="custom-avatar">🤖</div>;
      render(<AIMessage content="测试消息" avatar={avatar} />);
      
      expect(screen.getByTestId('custom-avatar')).toBeInTheDocument();
    });

    it('应该隐藏头像区域当没有头像且不显示用户名时', () => {
      render(<AIMessage content="测试消息" showUsername={false} />);
      
      expect(screen.queryByTestId('custom-avatar')).not.toBeInTheDocument();
    });
  });

  describe('事件处理', () => {
    it('应该在点击消息时调用onClick回调', () => {
      const onClick = jest.fn();
      render(<AIMessage content="测试消息" onClick={onClick} />);
      
      const message = screen.getByText('测试消息').closest('.ai-message');
      fireEvent.click(message!);
      
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('应该正确处理空内容', () => {
      render(<AIMessage content="" />);
      
      const message = screen.getByTestId('ai-message');
      expect(message).toBeInTheDocument();
    });

    it('应该正确处理特殊字符', () => {
      const content = '特殊字符: !@#$%^&*()_+-=[]{}|;:,.<>?';
      render(<AIMessage content={content} />);
      
      expect(screen.getByText(content)).toBeInTheDocument();
    });
  });

  describe('响应式设计', () => {
    it('应该应用正确的CSS类名', () => {
      render(<AIMessage content="测试消息" className="custom-class" />);
      
      const message = screen.getByText('测试消息').closest('.ai-message');
      expect(message).toHaveClass('ai-message', 'custom-class');
    });

    it('应该支持自定义样式', () => {
      const customStyle = { backgroundColor: 'red' };
      render(<AIMessage content="测试消息" style={customStyle} />);
      
      const message = screen.getByText('测试消息').closest('.ai-message');
      expect(message).toHaveStyle(customStyle);
    });
  });

  describe('边界情况', () => {
    it('应该处理非常长的内容', () => {
      const longContent = 'a'.repeat(10000);
      render(<AIMessage content={longContent} />);
      
      expect(screen.getByText(longContent)).toBeInTheDocument();
    });

    it('应该处理包含换行符的内容', () => {
      const content = '第一行\n第二行\n第三行';
      render(<AIMessage content={content} />);
      
      // 由于换行符被转换为空格，所以文本会连在一起
      expect(screen.getByText('第一行 第二行 第三行')).toBeInTheDocument();
    });

    it('应该处理包含HTML标签的内容', () => {
      const content = '<script>alert("xss")</script>正常文本';
      render(<AIMessage content={content} />);
      
      // HTML标签会被过滤，但文本内容仍然可见
      expect(screen.getByText('正常文本')).toBeInTheDocument();
    });
  });
}); 