import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button, ButtonProps } from '../button';

// 测试数据
const defaultProps: ButtonProps = {
  children: '测试按钮',
};

// 测试工具函数
const renderButton = (props: Partial<ButtonProps> = {}) => {
  const mergedProps = { ...defaultProps, ...props };
  return render(<Button {...mergedProps} />);
};

describe('Button 组件', () => {
  describe('基础渲染', () => {
    it('应该正确渲染按钮文本', () => {
      renderButton();
      expect(screen.getByRole('button', { name: '测试按钮' })).toBeInTheDocument();
    });

    it('应该正确渲染自定义内容', () => {
      renderButton({ children: <span>自定义内容</span> });
      expect(screen.getByText('自定义内容')).toBeInTheDocument();
    });

    it('应该应用默认的CSS类名', () => {
      renderButton();
      const button = screen.getByRole('button');
      expect(button).toHaveClass('velvet-btn');
    });

    it('应该正确应用自定义className', () => {
      renderButton({ className: 'custom-class' });
      const button = screen.getByRole('button');
      expect(button).toHaveClass('velvet-btn', 'custom-class');
    });
  });

  describe('按钮类型', () => {
    it('应该正确渲染默认类型按钮', () => {
      renderButton({ type: 'default' });
      const button = screen.getByRole('button');
      expect(button).toHaveClass('velvet-btn');
      expect(button).not.toHaveClass('velvet-btn--default');
    });

    it('应该正确渲染primary类型按钮', () => {
      renderButton({ type: 'primary' });
      const button = screen.getByRole('button');
      expect(button).toHaveClass('velvet-btn', 'velvet-btn--primary');
    });

    it('应该正确渲染dashed类型按钮', () => {
      renderButton({ type: 'dashed' });
      const button = screen.getByRole('button');
      expect(button).toHaveClass('velvet-btn', 'velvet-btn--dashed');
    });

    it('应该正确渲染link类型按钮', () => {
      renderButton({ type: 'link' });
      const button = screen.getByRole('button');
      expect(button).toHaveClass('velvet-btn', 'velvet-btn--link');
    });

    it('应该正确渲染text类型按钮', () => {
      renderButton({ type: 'text' });
      const button = screen.getByRole('button');
      expect(button).toHaveClass('velvet-btn', 'velvet-btn--text');
    });
  });

  describe('禁用状态', () => {
    it('应该正确渲染禁用状态的按钮', () => {
      renderButton({ disabled: true });
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveClass('velvet-btn--disabled');
      expect(button).toHaveAttribute('aria-disabled', 'true');
    });

    it('禁用状态下不应该触发onClick事件', async () => {
      const handleClick = jest.fn();
      renderButton({ disabled: true, onClick: handleClick });
      
      const button = screen.getByRole('button');
      await userEvent.click(button);
      
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('点击事件', () => {
    it('应该正确触发onClick事件', async () => {
      const handleClick = jest.fn();
      renderButton({ onClick: handleClick });
      
      const button = screen.getByRole('button');
      await userEvent.click(button);
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('应该传递正确的事件对象', async () => {
      const handleClick = jest.fn();
      renderButton({ onClick: handleClick });
      
      const button = screen.getByRole('button');
      await userEvent.click(button);
      
      expect(handleClick).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'click',
          target: button,
        })
      );
    });

    it('应该支持多次点击', async () => {
      const handleClick = jest.fn();
      renderButton({ onClick: handleClick });
      
      const button = screen.getByRole('button');
      await userEvent.click(button);
      await userEvent.click(button);
      await userEvent.click(button);
      
      expect(handleClick).toHaveBeenCalledTimes(3);
    });
  });

  describe('HTML属性', () => {
    it('应该正确设置htmlType属性', () => {
      renderButton({ htmlType: 'submit' });
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'submit');
    });

    it('应该正确设置默认htmlType', () => {
      renderButton();
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'button');
    });

    it('应该正确传递其他HTML属性', () => {
      renderButton({ 
        'aria-label': '测试按钮',
        title: '按钮提示'
      } as ButtonProps);
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', '测试按钮');
      expect(button).toHaveAttribute('title', '按钮提示');
    });
  });

  describe('样式和样式属性', () => {
    it('应该正确应用内联样式', () => {
      const customStyle = { backgroundColor: 'red', color: 'white' };
      renderButton({ style: customStyle });
      
      const button = screen.getByRole('button');
      expect(button).toHaveStyle('background-color: rgb(255, 0, 0)');
      expect(button).toHaveStyle('color: rgb(255, 255, 255)');
    });

    it('应该正确应用ref', () => {
      const ref = React.createRef<HTMLButtonElement>();
      render(<Button {...defaultProps} ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
      expect(ref.current).toHaveTextContent('测试按钮');
    });
  });

  describe('无障碍性', () => {
    it('应该正确设置aria-disabled属性', () => {
      renderButton({ disabled: true });
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-disabled', 'true');
    });

    it('非禁用状态下应该有aria-disabled="false"属性', () => {
      renderButton({ disabled: false });
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-disabled', 'false');
    });

    it('应该支持基本的键盘可访问性', () => {
      const handleClick = jest.fn();
      renderButton({ onClick: handleClick });
      
      const button = screen.getByRole('button');
      
      // 测试按钮可以通过Tab键聚焦（HTML button元素默认就可以）
      expect(button).not.toHaveAttribute('tabIndex', '-1');
      
      // 测试按钮有正确的type属性
      expect(button).toHaveAttribute('type', 'button');
      
      // 测试按钮可以通过getByRole找到（说明有正确的语义化角色）
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  describe('边界情况', () => {
    it('应该正确处理空的children', () => {
      renderButton({ children: null });
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent('');
    });

    it('应该正确处理undefined的onClick', async () => {
      renderButton({ onClick: undefined });
      const button = screen.getByRole('button');
      
      // 不应该抛出错误
      await expect(userEvent.click(button)).resolves.not.toThrow();
    });

    it('应该正确处理复杂的children结构', () => {
      const complexChildren = (
        <div>
          <span>文本</span>
          <strong>粗体</strong>
        </div>
      );
      
      renderButton({ children: complexChildren });
      
      expect(screen.getByText('文本')).toBeInTheDocument();
      expect(screen.getByText('粗体')).toBeInTheDocument();
    });
  });

  describe('性能测试', () => {
    it('应该正确处理快速连续点击', async () => {
      const handleClick = jest.fn();
      renderButton({ onClick: handleClick });
      
      const button = screen.getByRole('button');
      
      // 快速连续点击
      await userEvent.click(button);
      await userEvent.click(button);
      await userEvent.click(button);
      
      expect(handleClick).toHaveBeenCalledTimes(3);
    });

    it('应该正确处理大量props', () => {
      const manyProps: ButtonProps = {
        className: 'test-class',
        style: { color: 'red' },
        'aria-label': 'test',
        title: 'test',
        onClick: jest.fn(),
        disabled: false,
        type: 'primary',
        htmlType: 'button',
        children: '测试按钮',
      };
      
      renderButton(manyProps);
      const button = screen.getByRole('button');
      
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('velvet-btn', 'velvet-btn--primary', 'test-class');
    });
  });
}); 