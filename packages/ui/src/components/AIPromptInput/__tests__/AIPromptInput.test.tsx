import React from 'react';
import { render, screen } from '@testing-library/react';
import { AIPromptInput } from '../AIPromptInput';

describe('AIPromptInput', () => {
  describe('基础渲染', () => {
    it('应该正确渲染输入框', () => {
      render(<AIPromptInput />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('应该应用正确的默认 CSS 类名', () => {
      render(<AIPromptInput />);
      const container = screen.getByRole('textbox').closest('.ai-prompt-input');
      expect(container).toHaveClass('ai-prompt-input', 'ai-prompt-input--md', 'ai-prompt-input--outline');
    });

    it('应该支持不同的尺寸', () => {
      const { rerender } = render(<AIPromptInput size="sm" />);
      let container = screen.getByRole('textbox').closest('.ai-prompt-input');
      expect(container).toHaveClass('ai-prompt-input--sm');

      rerender(<AIPromptInput size="lg" />);
      container = screen.getByRole('textbox').closest('.ai-prompt-input');
      expect(container).toHaveClass('ai-prompt-input--lg');
    });

    it('应该支持不同的变体', () => {
      const { rerender } = render(<AIPromptInput variant="filled" />);
      let container = screen.getByRole('textbox').closest('.ai-prompt-input');
      expect(container).toHaveClass('ai-prompt-input--filled');

      rerender(<AIPromptInput variant="underline" />);
      container = screen.getByRole('textbox').closest('.ai-prompt-input');
      expect(container).toHaveClass('ai-prompt-input--underline');
    });

    it('应该支持标签', () => {
      render(<AIPromptInput label="提示标签" />);
      expect(screen.getByText('提示标签')).toBeInTheDocument();
    });

    it('应该支持必填标记', () => {
      render(<AIPromptInput label="提示标签" required />);
      expect(screen.getByText('*')).toBeInTheDocument();
    });

    it('应该支持帮助文本', () => {
      render(<AIPromptInput helpText="这是帮助文本" />);
      expect(screen.getByText('这是帮助文本')).toBeInTheDocument();
    });

    it('应该支持错误文本', () => {
      render(<AIPromptInput errorText="这是错误文本" error />);
      expect(screen.getByText('这是错误文本')).toBeInTheDocument();
    });

    it('应该支持自定义类名', () => {
      render(<AIPromptInput className="custom-class" />);
      const container = screen.getByRole('textbox').closest('.ai-prompt-input');
      expect(container).toHaveClass('custom-class');
    });

    it('应该支持自定义样式', () => {
      const customStyle = { backgroundColor: 'red' };
      render(<AIPromptInput style={customStyle} />);
      const container = screen.getByRole('textbox').closest('.ai-prompt-input');
      expect(container).toHaveStyle(customStyle);
    });
  });

  describe('输入值处理', () => {
    it('应该正确处理受控模式', () => {
      const { rerender } = render(<AIPromptInput value="受控值" />);
      expect(screen.getByRole('textbox')).toHaveValue('受控值');

      rerender(<AIPromptInput value="新值" />);
      expect(screen.getByRole('textbox')).toHaveValue('新值');
    });

    it('应该正确处理非受控模式', () => {
      render(<AIPromptInput defaultValue="默认值" />);
      expect(screen.getByRole('textbox')).toHaveValue('默认值');
    });
  });

  describe('状态管理', () => {
    it('应该正确处理禁用状态', () => {
      render(<AIPromptInput disabled />);
      const input = screen.getByRole('textbox');
      expect(input).toBeDisabled();
    });

    it('应该正确处理只读状态', () => {
      render(<AIPromptInput readOnly />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('readonly');
    });

    it('应该正确处理错误状态', () => {
      render(<AIPromptInput error />);
      const container = screen.getByRole('textbox').closest('.ai-prompt-input');
      expect(container).toHaveClass('ai-prompt-input--error');
    });
  });

  describe('功能开关', () => {
    it('应该显示历史记录按钮', () => {
      render(<AIPromptInput showHistory />);
      expect(screen.getByLabelText('显示历史记录')).toBeInTheDocument();
    });

    it('应该显示模板按钮', () => {
      render(<AIPromptInput showTemplates />);
      expect(screen.getByLabelText('显示模板')).toBeInTheDocument();
    });
  });

  describe('可访问性', () => {
    it('应该支持 ARIA 属性', () => {
      render(
        <AIPromptInput 
          label="提示输入"
          helpText="帮助信息"
        />
      );
      
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('aria-label', '提示输入');
      expect(input).toHaveAttribute('aria-describedby', 'help-text');
    });

    it('应该在错误状态下正确设置 ARIA 属性', () => {
      render(
        <AIPromptInput 
          label="提示输入"
          errorText="错误信息"
          error
        />
      );
      
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('aria-label', '提示输入');
      expect(input).toHaveAttribute('aria-describedby', 'error-text');
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });

    it('应该为按钮提供正确的 aria-label', () => {
      render(
        <AIPromptInput 
          showHistory
          showTemplates
        />
      );
      
      expect(screen.getByLabelText('显示历史记录')).toBeInTheDocument();
      expect(screen.getByLabelText('显示模板')).toBeInTheDocument();
    });
  });
});
