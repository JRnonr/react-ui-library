import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../Input';

describe('Input', () => {
  it('应该正确渲染基础输入框', () => {
    render(<Input placeholder="请输入内容" />);
    const input = screen.getByPlaceholderText('请输入内容');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('input');
  });

  it('应该支持受控组件模式', () => {
    const handleChange = jest.fn();
    render(<Input value="测试值" onChange={handleChange} />);
    const input = screen.getByDisplayValue('测试值');
    expect(input).toHaveValue('测试值');
  });

  it('应该支持非受控组件模式', () => {
    render(<Input defaultValue="默认值" />);
    const input = screen.getByDisplayValue('默认值');
    expect(input).toHaveValue('默认值');
  });

  it('应该正确渲染标签', () => {
    render(<Input label="用户名" id="test-input" />);
    expect(screen.getByText('用户名')).toBeInTheDocument();
    expect(screen.getByText('用户名')).toHaveAttribute('for', 'test-input');
  });

  it('应该显示必填标记', () => {
    render(<Input label="用户名" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
    expect(screen.getByText('*')).toHaveClass('input__required');
  });

  it('应该正确渲染帮助文本', () => {
    render(<Input helpText="这是帮助文本" />);
    expect(screen.getByText('这是帮助文本')).toBeInTheDocument();
    expect(screen.getByText('这是帮助文本')).toHaveClass('input__message--help');
  });

  it('应该正确渲染错误文本', () => {
    render(<Input errorText="这是错误文本" />);
    expect(screen.getByText('这是错误文本')).toBeInTheDocument();
    expect(screen.getByText('这是错误文本')).toHaveClass('input__message--error');
  });

  it('应该支持前缀图标', () => {
    render(<Input prefix="🔍" />);
    expect(screen.getByText('🔍')).toBeInTheDocument();
    expect(screen.getByText('🔍')).toHaveClass('input__prefix');
  });

  it('应该支持后缀图标', () => {
    render(<Input suffix="¥" />);
    expect(screen.getByText('¥')).toBeInTheDocument();
    expect(screen.getByText('¥')).toHaveClass('input__suffix');
  });

  it('应该支持清除功能', () => {
    const handleChange = jest.fn();
    render(<Input defaultValue="测试文本" allowClear onChange={handleChange} />);
    
    const clearButton = screen.getByLabelText('清除输入');
    expect(clearButton).toBeInTheDocument();
    
    fireEvent.click(clearButton);
    expect(handleChange).toHaveBeenCalledWith('', expect.any(Object));
  });

  it('应该支持密码切换功能', () => {
    render(<Input type="password" showPasswordToggle />);
    
    const toggleButton = screen.getByLabelText('显示密码');
    expect(toggleButton).toBeInTheDocument();
    
    const input = screen.getByDisplayValue('');
    expect(input).toHaveAttribute('type', 'password');
    
    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute('type', 'text');
    expect(toggleButton).toHaveAttribute('aria-label', '隐藏密码');
  });

  it('应该支持字符计数', () => {
    render(<Input maxLength={100} showCount defaultValue="测试文本" />);
    expect(screen.getByText('4/100')).toBeInTheDocument();
  });

  it('应该正确处理onChange事件', () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '测试' } });
    
    expect(handleChange).toHaveBeenCalledWith('测试', expect.any(Object));
  });

  it('应该正确处理onFocus事件', () => {
    const handleFocus = jest.fn();
    render(<Input onFocus={handleFocus} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.focus(input);
    
    expect(handleFocus).toHaveBeenCalled();
  });

  it('应该正确处理onBlur事件', () => {
    const handleBlur = jest.fn();
    render(<Input onBlur={handleBlur} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.focus(input);
    fireEvent.blur(input);
    
    expect(handleBlur).toHaveBeenCalled();
  });

  it('应该正确处理onEnter事件', () => {
    const handleEnter = jest.fn();
    render(<Input onEnter={handleEnter} defaultValue="测试文本" />);
    
    const input = screen.getByRole('textbox');
    fireEvent.keyDown(input, { key: 'Enter' });
    
    expect(handleEnter).toHaveBeenCalledWith('测试文本');
  });

  it('应该支持禁用状态', () => {
    render(<Input disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
    expect(input).toHaveClass('input--disabled');
  });

  it('应该支持只读状态', () => {
    render(<Input readOnly />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('readonly');
    expect(input).toHaveClass('input--readonly');
  });

  it('应该支持不同的变体', () => {
    const { rerender } = render(<Input variant="outline" />);
    expect(screen.getByRole('textbox')).toHaveClass('input--outline');
    
    rerender(<Input variant="filled" />);
    expect(screen.getByRole('textbox')).toHaveClass('input--filled');
    
    rerender(<Input variant="underline" />);
    expect(screen.getByRole('textbox')).toHaveClass('input--underline');
  });

  it('应该支持不同的尺寸', () => {
    const { rerender } = render(<Input size="sm" />);
    expect(screen.getByRole('textbox')).toHaveClass('input--sm');
    
    rerender(<Input size="md" />);
    expect(screen.getByRole('textbox')).toHaveClass('input--md');
    
    rerender(<Input size="lg" />);
    expect(screen.getByRole('textbox')).toHaveClass('input--lg');
  });

  it('应该支持不同的输入类型', () => {
    const { rerender } = render(<Input type="email" />);
    expect(screen.getByDisplayValue('')).toHaveAttribute('type', 'email');
    
    rerender(<Input type="number" />);
    expect(screen.getByDisplayValue('')).toHaveAttribute('type', 'number');
    
    rerender(<Input type="tel" />);
    expect(screen.getByDisplayValue('')).toHaveAttribute('type', 'tel');
  });

  it('应该正确设置maxLength属性', () => {
    render(<Input maxLength={50} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('maxLength', '50');
  });

  it('应该正确设置name和id属性', () => {
    render(<Input name="username" id="user-input" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('name', 'username');
    expect(input).toHaveAttribute('id', 'user-input');
  });

  it('应该正确设置placeholder属性', () => {
    render(<Input placeholder="请输入用户名" />);
    const input = screen.getByPlaceholderText('请输入用户名');
    expect(input).toBeInTheDocument();
  });

  it('应该支持ref转发', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('应该正确处理错误状态样式', () => {
    render(<Input errorText="错误信息" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('input--error');
  });

  it('应该在密码类型下正确切换显示状态', () => {
    render(<Input type="password" showPasswordToggle />);
    
    const input = screen.getByDisplayValue('');
    const toggleButton = screen.getByLabelText('显示密码');
    
    // 初始状态应该是password类型
    expect(input).toHaveAttribute('type', 'password');
    
    // 点击切换按钮
    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute('type', 'text');
    expect(toggleButton).toHaveAttribute('aria-label', '隐藏密码');
    
    // 再次点击切换回来
    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute('type', 'password');
    expect(toggleButton).toHaveAttribute('aria-label', '显示密码');
  });

  it('应该在清除按钮点击后正确更新值', () => {
    const handleChange = jest.fn();
    render(<Input defaultValue="测试文本" allowClear onChange={handleChange} />);
    
    const clearButton = screen.getByLabelText('清除输入');
    fireEvent.click(clearButton);
    
    expect(handleChange).toHaveBeenCalledWith('', expect.any(Object));
  });

  it('应该在输入时正确更新字符计数', () => {
    render(<Input maxLength={100} showCount />);
    
    const input = screen.getByRole('textbox');
    expect(screen.getByText('0/100')).toBeInTheDocument();
    
    fireEvent.change(input, { target: { value: '测试' } });
    expect(screen.getByText('2/100')).toBeInTheDocument();
    
    fireEvent.change(input, { target: { value: '测试文本' } });
    expect(screen.getByText('4/100')).toBeInTheDocument();
  });
}); 