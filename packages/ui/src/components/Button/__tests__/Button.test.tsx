import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
  it('应该正确渲染按钮内容', () => {
    render(<Button>测试按钮</Button>);
    expect(screen.getByRole('button', { name: '测试按钮' })).toBeInTheDocument();
  });

  it('应该应用正确的 CSS 类名', () => {
    render(<Button variant="primary" size="lg">按钮</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('btn', 'btn--primary', 'btn--lg');
  });

  it('应该支持不同的变体', () => {
    const { rerender } = render(<Button variant="primary">按钮</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn--primary');

    rerender(<Button variant="secondary">按钮</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn--secondary');

    rerender(<Button variant="outline">按钮</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn--outline');

    rerender(<Button variant="ghost">按钮</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn--ghost');

    rerender(<Button variant="danger">按钮</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn--danger');
  });

  it('应该支持不同的尺寸', () => {
    const { rerender } = render(<Button size="sm">按钮</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn--sm');

    rerender(<Button size="md">按钮</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn--md');

    rerender(<Button size="lg">按钮</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn--lg');
  });

  it('应该支持禁用状态', () => {
    render(<Button disabled>禁用按钮</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('btn--disabled');
  });

  it('应该支持加载状态', () => {
    render(<Button loading>加载中</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('btn--loading');
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  it('应该支持块级显示', () => {
    render(<Button block>块级按钮</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn--block');
  });

  it('应该正确处理点击事件', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>点击按钮</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('应该在禁用状态下阻止点击事件', () => {
    const handleClick = jest.fn();
    render(<Button disabled onClick={handleClick}>禁用按钮</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('应该在加载状态下阻止点击事件', () => {
    const handleClick = jest.fn();
    render(<Button loading onClick={handleClick}>加载中</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('应该支持自定义类名', () => {
    render(<Button className="custom-class">按钮</Button>);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });

  it('应该支持自定义样式', () => {
    const customStyle = { backgroundColor: 'red' };
    render(<Button style={customStyle}>按钮</Button>);
    expect(screen.getByRole('button')).toHaveStyle(customStyle);
  });

  it('应该支持不同的按钮类型', () => {
    const { rerender } = render(<Button type="submit">提交按钮</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');

    rerender(<Button type="reset">重置按钮</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'reset');

    rerender(<Button type="button">普通按钮</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('应该正确渲染加载动画', () => {
    render(<Button loading>加载中</Button>);
    const spinner = screen.getByTestId('loading-spinner');
    expect(spinner).toBeInTheDocument();
    expect(spinner.querySelector('svg')).toBeInTheDocument();
  });

  it('应该支持额外的 props', () => {
    render(<Button data-testid="custom-button" aria-label="自定义标签">按钮</Button>);
    const button = screen.getByTestId('custom-button');
    expect(button).toHaveAttribute('aria-label', '自定义标签');
  });
}); 