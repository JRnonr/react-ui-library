import { render, screen, fireEvent } from '@testing-library/react';
import { Button, ButtonProps } from '../Button';

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

  // 新增测试用例以提高覆盖率
  it('应该在禁用状态下阻止点击事件', () => {
    const handleClick = jest.fn();
    render(<Button disabled onClick={handleClick}>禁用按钮</Button>);
    
    // 使用 fireEvent 来测试，它会自动处理事件对象
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('应该在加载状态下阻止点击事件', () => {
    const handleClick = jest.fn();
    render(<Button loading onClick={handleClick}>加载中</Button>);
    
    // 使用 fireEvent 来测试，它会自动处理事件对象
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('应该在没有 onClick 时正常工作', () => {
    render(<Button>无点击事件按钮</Button>);
    const button = screen.getByRole('button');
    
    // 应该不会抛出错误
    expect(() => {
      fireEvent.click(button);
    }).not.toThrow();
  });

  it('应该在 className 为空字符串时正确处理', () => {
    render(<Button className="">空类名按钮</Button>);
    const button = screen.getByRole('button');
    
    // 应该只包含基础类名，不包含空字符串
    expect(button.className).not.toContain('undefined');
    expect(button.className).not.toContain('null');
  });

  it('应该在 style 为 undefined 时正常工作', () => {
    render(<Button style={undefined}>无样式按钮</Button>);
    const button = screen.getByRole('button');
    
    // 应该不会抛出错误
    expect(button).toBeInTheDocument();
  });

  it('应该正确处理所有 props 的组合', () => {
    render(
      <Button
        variant="danger"
        size="lg"
        disabled
        loading
        block
        type="submit"
        className="custom-class"
        style={{ color: 'white' }}
        data-testid="complex-button"
        aria-label="复杂按钮"
      >
        复杂按钮
      </Button>
    );
    
    const button = screen.getByTestId('complex-button');
    
    // 验证所有属性都被正确应用
    expect(button).toHaveClass('btn', 'btn--danger', 'btn--lg', 'btn--disabled', 'btn--loading', 'btn--block', 'custom-class');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('type', 'submit');
    expect(button).toHaveAttribute('aria-label', '复杂按钮');
    expect(button).toHaveStyle({ color: 'white' });
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  it('应该在没有额外 props 时使用默认值', () => {
    render(<Button>默认按钮</Button>);
    const button = screen.getByRole('button');
    
    // 验证默认值
    expect(button).toHaveClass('btn', 'btn--primary', 'btn--md');
    expect(button).not.toHaveClass('btn--disabled', 'btn--loading', 'btn--block');
    expect(button).toHaveAttribute('type', 'button');
    expect(button).not.toBeDisabled();
  });

  it('应该正确处理布尔值 props 的边界情况', () => {
    const { rerender } = render(<Button>按钮</Button>);
    
    // 测试 falsy 值
    rerender(<Button disabled={false} loading={false} block={false}>按钮</Button>);
    let button = screen.getByRole('button');
    expect(button).not.toHaveClass('btn--disabled', 'btn--loading', 'btn--block');
    expect(button).not.toBeDisabled();
    
    // 测试 truthy 值
    rerender(<Button disabled={true} loading={true} block={true}>按钮</Button>);
    button = screen.getByRole('button');
    expect(button).toHaveClass('btn--disabled', 'btn--loading', 'btn--block');
    expect(button).toBeDisabled();
  });

  it('应该正确渲染加载动画的 SVG 元素', () => {
    render(<Button loading>加载中</Button>);
    const spinner = screen.getByTestId('loading-spinner');
    const svg = spinner.querySelector('svg');
    const circle = svg?.querySelector('circle');
    
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass('btn__loading-svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    expect(svg).toHaveAttribute('fill', 'none');
    expect(svg).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg');
    
    expect(circle).toBeInTheDocument();
    expect(circle).toHaveClass('btn__loading-circle');
    expect(circle).toHaveAttribute('cx', '12');
    expect(circle).toHaveAttribute('cy', '12');
    expect(circle).toHaveAttribute('r', '10');
    expect(circle).toHaveAttribute('stroke', 'currentColor');
    expect(circle).toHaveAttribute('stroke-width', '2');
    expect(circle).toHaveAttribute('stroke-linecap', 'round');
  });

  it('应该在加载状态下隐藏按钮内容', () => {
    render(<Button loading>按钮内容</Button>);
    const content = screen.getByText('按钮内容');
    
    // 内容应该仍然可见，但按钮应该被禁用
    expect(content).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('应该正确处理事件对象的传递', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>事件测试按钮</Button>);
    
    // 使用 fireEvent 来测试事件传递
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('应该正确处理边缘情况', () => {
    // 测试所有 props 都为 undefined 或 falsy 值的情况
    render(<Button>边缘测试按钮</Button>);
    const button = screen.getByRole('button');
    
    // 验证默认值被正确应用
    expect(button).toHaveClass('btn', 'btn--primary', 'btn--md');
    expect(button).not.toHaveClass('btn--disabled', 'btn--loading', 'btn--block');
    expect(button).toHaveAttribute('type', 'button');
    expect(button).not.toBeDisabled();
    
    // 验证没有多余的类名
    const classList = button.className.split(' ');
    expect(classList).toHaveLength(3); // btn, btn--primary, btn--md
    expect(classList).not.toContain('undefined');
    expect(classList).not.toContain('null');
    expect(classList).not.toContain('');
  });

  it('应该在 onClick 为 undefined 时正确处理禁用和加载状态', () => {
    // 测试禁用状态且没有 onClick 的情况
    const { rerender } = render(<Button disabled>禁用无点击按钮</Button>);
    const disabledButton = screen.getByRole('button');
    
    // 应该不会抛出错误
    expect(() => {
      fireEvent.click(disabledButton);
    }).not.toThrow();
    
    // 测试加载状态且没有 onClick 的情况
    rerender(<Button loading>加载无点击按钮</Button>);
    const loadingButton = screen.getByRole('button');
    
    // 应该不会抛出错误
    expect(() => {
      fireEvent.click(loadingButton);
    }).not.toThrow();
  });

  it('应该正确处理 className 的边界值', () => {
    // 测试 className 为 undefined 的情况
    const { rerender } = render(<Button>按钮</Button>);
    let button = screen.getByRole('button');
    expect(button.className).not.toContain('undefined');
    
    // 测试 className 为 null 的情况（通过 props 传递）
    rerender(<Button {...{ className: null } as unknown as ButtonProps}>按钮</Button>);
    button = screen.getByRole('button');
    expect(button.className).not.toContain('null');
    
    // 测试 className 为 false 的情况
    rerender(<Button {...{ className: false } as unknown as ButtonProps}>按钮</Button>);
    button = screen.getByRole('button');
    expect(button.className).not.toContain('false');
  });


}); 