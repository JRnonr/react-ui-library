import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox } from '../Checkbox';

describe('Checkbox', () => {
  it('渲染基础复选框', () => {
    render(<Checkbox label="测试复选框" />);
    
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByText('测试复选框')).toBeInTheDocument();
  });

  it('支持受控模式', () => {
    const handleChange = jest.fn();
    render(
      <Checkbox
        checked={false}
        onChange={handleChange}
        label="受控复选框"
      />
    );
    
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    
    expect(handleChange).toHaveBeenCalledWith(true, expect.any(Object));
  });

  it('支持标签点击', () => {
    const handleChange = jest.fn();
    render(
      <Checkbox
        checked={false}
        onChange={handleChange}
        label="点击标签"
      />
    );
    
    const label = screen.getByText('点击标签');
    fireEvent.click(label);
    
    expect(handleChange).toHaveBeenCalledWith(true, expect.any(Object));
  });

  it('支持键盘导航', () => {
    const handleChange = jest.fn();
    render(
      <Checkbox
        checked={false}
        onChange={handleChange}
        label="键盘导航"
      />
    );
    
    const checkbox = screen.getByRole('checkbox');
    checkbox.focus();
    
    // 测试空格键
    fireEvent.keyDown(checkbox, { key: ' ' });
    expect(handleChange).toHaveBeenCalledWith(true, expect.any(Object));
    
    // 重置mock函数
    handleChange.mockClear();
    
    // 测试回车键
    fireEvent.keyDown(checkbox, { key: 'Enter' });
    expect(handleChange).toHaveBeenCalledWith(true, expect.any(Object));
  });

  it('支持不确定状态', () => {
    render(
      <Checkbox
        indeterminate={true}
        label="不确定状态"
      />
    );
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-checked', 'mixed');
  });

  it('支持禁用状态', () => {
    const handleChange = jest.fn();
    render(
      <Checkbox
        disabled={true}
        onChange={handleChange}
        label="禁用复选框"
      />
    );
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
    
    fireEvent.click(checkbox);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('支持只读状态', () => {
    const handleChange = jest.fn();
    render(
      <Checkbox
        readOnly={true}
        onChange={handleChange}
        label="只读复选框"
      />
    );
    
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('支持不同尺寸', () => {
    const { rerender } = render(
      <Checkbox size="sm" label="小尺寸" />
    );
    
    let checkbox = screen.getByRole('checkbox');
    expect(checkbox.closest('.checkbox')).toHaveClass('checkbox--sm');
    
    rerender(<Checkbox size="lg" label="大尺寸" />);
    checkbox = screen.getByRole('checkbox');
    expect(checkbox.closest('.checkbox')).toHaveClass('checkbox--lg');
  });

  it('支持不同变体', () => {
    const { rerender } = render(
      <Checkbox variant="primary" label="主要变体" />
    );
    
    let checkbox = screen.getByRole('checkbox');
    expect(checkbox.closest('.checkbox')).toHaveClass('checkbox--primary');
    
    rerender(<Checkbox variant="success" label="成功变体" />);
    checkbox = screen.getByRole('checkbox');
    expect(checkbox.closest('.checkbox')).toHaveClass('checkbox--success');
  });

  it('支持描述文本', () => {
    render(
      <Checkbox
        label="带描述的复选框"
        description="这是描述文本"
      />
    );
    
    expect(screen.getByText('这是描述文本')).toBeInTheDocument();
  });

  it('支持必填属性', () => {
    render(
      <Checkbox
        required={true}
        label="必填复选框"
      />
    );
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-invalid', 'true');
  });

  it('支持自定义ID', () => {
    render(
      <Checkbox
        id="custom-id"
        label="自定义ID"
      />
    );
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('id', 'custom-id');
  });

  it('支持自定义类名', () => {
    render(
      <Checkbox
        className="custom-class"
        label="自定义类名"
      />
    );
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox.closest('.checkbox')).toHaveClass('custom-class');
  });

  it('支持自定义样式', () => {
    const customStyle = { backgroundColor: 'red' };
    render(
      <Checkbox
        style={customStyle}
        label="自定义样式"
      />
    );
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox.closest('.checkbox')).toHaveStyle(customStyle);
  });

  it('支持子元素作为标签', () => {
    render(
      <Checkbox>
        <span>自定义标签</span>
      </Checkbox>
    );
    
    expect(screen.getByText('自定义标签')).toBeInTheDocument();
  });

  it('正确处理焦点事件', () => {
    const handleFocus = jest.fn();
    const handleBlur = jest.fn();
    
    render(
      <Checkbox
        onFocus={handleFocus}
        onBlur={handleBlur}
        label="焦点事件"
      />
    );
    
    const checkbox = screen.getByRole('checkbox');
    
    fireEvent.focus(checkbox);
    expect(handleFocus).toHaveBeenCalled();
    
    fireEvent.blur(checkbox);
    expect(handleBlur).toHaveBeenCalled();
  });

  it('支持表单属性', () => {
    render(
      <Checkbox
        name="test-checkbox"
        value="test-value"
        label="表单复选框"
      />
    );
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('name', 'test-checkbox');
    expect(checkbox).toHaveAttribute('value', 'test-value');
  });

  it('正确处理ARIA属性', () => {
    render(
      <Checkbox
        label="无障碍复选框"
        description="描述文本"
      />
    );
    
    const checkbox = screen.getByRole('checkbox');
    const description = screen.getByText('描述文本');
    
    expect(checkbox).toHaveAttribute('aria-describedby', description.id);
  });

  it('支持ref转发', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(
      <Checkbox
        ref={ref}
        label="Ref测试"
      />
    );
    
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
}); 

describe('Checkbox 交互覆盖增强', () => {
  it('控制区点击应触发 onChange 并切换状态', () => {
    const handleChange = jest.fn();
    const { container } = render(
      <Checkbox checked={false} onChange={handleChange} label="控制区点击" />
    );

    const control = container.querySelector('.checkbox__control') as HTMLDivElement;
    expect(control).toBeInTheDocument();

    fireEvent.click(control);
    expect(handleChange).toHaveBeenCalledWith(true, expect.any(Object));
  });

  it('触摸开始/结束应添加/移除触摸样式并触发 onChange', () => {
    const handleChange = jest.fn();
    const { container } = render(
      <Checkbox checked={false} onChange={handleChange} label="触摸交互" />
    );

    const control = container.querySelector('.checkbox__control') as HTMLDivElement;
    expect(control).toBeInTheDocument();

    fireEvent.touchStart(control);
    expect(control.classList.contains('checkbox--touching')).toBe(true);

    fireEvent.touchEnd(control);
    expect(control.classList.contains('checkbox--touching')).toBe(false);
    expect(handleChange).toHaveBeenCalledWith(true, expect.any(Object));
  });

  it('禁用或只读时控制区与触摸不应触发 onChange', () => {
    const handleChange = jest.fn();
    const { container, rerender } = render(
      <Checkbox disabled checked={false} onChange={handleChange} label="禁用" />
    );

    let control = container.querySelector('.checkbox__control') as HTMLDivElement;
    fireEvent.click(control);
    fireEvent.touchStart(control);
    fireEvent.touchEnd(control);
    expect(handleChange).not.toHaveBeenCalled();

    rerender(<Checkbox readOnly checked={false} onChange={handleChange} label="只读" />);
    control = container.querySelector('.checkbox__control') as HTMLDivElement;
    fireEvent.click(control);
    fireEvent.touchStart(control);
    fireEvent.touchEnd(control);
    expect(handleChange).not.toHaveBeenCalled();
  });
}); 