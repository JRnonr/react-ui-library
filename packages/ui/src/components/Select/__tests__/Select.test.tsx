import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Select, SelectOption } from '../Select';

const mockOptions: SelectOption[] = [
  { value: 'option1', label: '选项1' },
  { value: 'option2', label: '选项2' },
  { value: 'option3', label: '选项3' },
  { value: 'option4', label: '选项4', disabled: true }
];

describe('Select', () => {
  it('渲染基础选择器', () => {
    render(<Select options={mockOptions} placeholder="请选择" />);
    
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByText('请选择')).toBeInTheDocument();
  });

  it('显示标签和必填标记', () => {
    render(
      <Select 
        options={mockOptions} 
        label="测试标签" 
        required 
        placeholder="请选择" 
      />
    );
    
    expect(screen.getByText('测试标签')).toBeInTheDocument();
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('显示帮助文本', () => {
    render(
      <Select 
        options={mockOptions} 
        helpText="这是帮助文本" 
        placeholder="请选择" 
      />
    );
    
    expect(screen.getByText('这是帮助文本')).toBeInTheDocument();
  });

  it('显示错误文本', () => {
    render(
      <Select 
        options={mockOptions} 
        errorText="这是错误文本" 
        placeholder="请选择" 
      />
    );
    
    expect(screen.getByText('这是错误文本')).toBeInTheDocument();
  });

  it('点击打开下拉菜单', async () => {
    const user = userEvent.setup();
    render(<Select options={mockOptions} placeholder="请选择" />);
    
    const select = screen.getByRole('combobox');
    await user.click(select);
    
    expect(screen.getByText('选项1')).toBeInTheDocument();
    expect(screen.getByText('选项2')).toBeInTheDocument();
    expect(screen.getByText('选项3')).toBeInTheDocument();
  });

  it('选择选项后关闭下拉菜单', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    
    render(
      <Select 
        options={mockOptions} 
        placeholder="请选择" 
        onChange={onChange}
      />
    );
    
    const select = screen.getByRole('combobox');
    await user.click(select);
    
    const option = screen.getByText('选项1');
    await user.click(option);
    
    expect(onChange).toHaveBeenCalledWith('option1', mockOptions[0]);
    expect(screen.queryByText('选项2')).not.toBeInTheDocument();
  });

  it('支持键盘导航', async () => {
    const user = userEvent.setup();
    render(<Select options={mockOptions} placeholder="请选择" />);
    
    const select = screen.getByRole('combobox');
    await user.click(select);
    
    // 按向下箭头
    await user.keyboard('{ArrowDown}');
    expect(screen.getByText('选项1')).toHaveClass('select__option--highlighted');
    
    // 按向下箭头
    await user.keyboard('{ArrowDown}');
    expect(screen.getByText('选项2')).toHaveClass('select__option--highlighted');
    
    // 按回车选择
    await user.keyboard('{Enter}');
    expect(screen.getByText('选项2')).toBeInTheDocument();
    expect(screen.queryByText('选项1')).not.toBeInTheDocument();
  });

  it('支持搜索功能', async () => {
    const user = userEvent.setup();
    render(
      <Select 
        options={mockOptions} 
        searchable 
        placeholder="请选择" 
      />
    );
    
    const select = screen.getByRole('combobox');
    await user.click(select);
    
    const searchInput = screen.getByRole('textbox');
    await user.type(searchInput, '选项1');
    
    expect(screen.getByText('选项1')).toBeInTheDocument();
    expect(screen.queryByText('选项2')).not.toBeInTheDocument();
  });

  it('支持清除功能', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    
    render(
      <Select 
        options={mockOptions} 
        allowClear 
        value="option1"
        onChange={onChange}
        placeholder="请选择" 
      />
    );
    
    const clearButton = screen.getByLabelText('清除选择');
    await user.click(clearButton);
    
    expect(onChange).toHaveBeenCalledWith(undefined, undefined);
  });

  it('禁用状态不可交互', async () => {
    const user = userEvent.setup();
    render(
      <Select 
        options={mockOptions} 
        disabled 
        placeholder="请选择" 
      />
    );
    
    const select = screen.getByRole('combobox');
    await user.click(select);
    
    expect(screen.queryByText('选项1')).not.toBeInTheDocument();
  });

  it('只读状态不可交互', async () => {
    const user = userEvent.setup();
    render(
      <Select 
        options={mockOptions} 
        readOnly 
        value="option1"
        placeholder="请选择" 
      />
    );
    
    const select = screen.getByRole('combobox');
    await user.click(select);
    
    expect(screen.queryByText('选项2')).not.toBeInTheDocument();
  });

  it('显示加载状态', async () => {
    const user = userEvent.setup();
    render(
      <Select 
        options={[]} 
        loading 
        loadingText="加载中..." 
        placeholder="请选择" 
      />
    );
    
    const select = screen.getByRole('combobox');
    await user.click(select);
    
    expect(screen.getByText('加载中...')).toBeInTheDocument();
  });

  it('显示无数据状态', async () => {
    const user = userEvent.setup();
    render(
      <Select 
        options={[]} 
        noDataText="暂无数据" 
        placeholder="请选择" 
      />
    );
    
    const select = screen.getByRole('combobox');
    await user.click(select);
    
    expect(screen.getByText('暂无数据')).toBeInTheDocument();
  });

  it('支持空选项', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    
    render(
      <Select 
        options={mockOptions} 
        showEmptyOption 
        emptyOptionText="请选择"
        onChange={onChange}
        placeholder="请选择" 
      />
    );
    
    const select = screen.getByRole('combobox');
    await user.click(select);
    
    const emptyOption = screen.getByText('请选择选项');
    await user.click(emptyOption);
    
    expect(onChange).toHaveBeenCalledWith('', { value: '', label: '请选择' });
  });

  it('点击外部关闭下拉菜单', async () => {
    const user = userEvent.setup();
    render(<Select options={mockOptions} placeholder="请选择" />);
    
    const select = screen.getByRole('combobox');
    await user.click(select);
    
    expect(screen.getByText('选项1')).toBeInTheDocument();
    
    // 点击外部
    fireEvent.mouseDown(document.body);
    
    await waitFor(() => {
      expect(screen.queryByText('选项1')).not.toBeInTheDocument();
    }, { timeout: 2000 });
  });

  it('支持受控组件模式', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    
    render(
      <Select 
        options={mockOptions} 
        value="option1"
        onChange={onChange}
        placeholder="请选择" 
      />
    );
    
    expect(screen.getByText('选项1')).toBeInTheDocument();
    
    const select = screen.getByRole('combobox');
    await user.click(select);
    
    const option = screen.getByText('选项2');
    await user.click(option);
    
    expect(onChange).toHaveBeenCalledWith('option2', mockOptions[1]);
  });

  it('支持非受控组件模式', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    
    render(
      <Select 
        options={mockOptions} 
        defaultValue="option1"
        onChange={onChange}
        placeholder="请选择" 
      />
    );
    
    expect(screen.getByText('选项1')).toBeInTheDocument();
    
    const select = screen.getByRole('combobox');
    await user.click(select);
    
    const option = screen.getByText('选项2');
    await user.click(option);
    
    expect(onChange).toHaveBeenCalledWith('option2', mockOptions[1]);
    expect(screen.getByText('选项2')).toBeInTheDocument();
  });

  it('禁用选项不可选择', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    
    render(
      <Select 
        options={mockOptions} 
        onChange={onChange}
        placeholder="请选择" 
      />
    );
    
    const select = screen.getByRole('combobox');
    await user.click(select);
    
    const disabledOption = screen.getByText('选项4');
    await user.click(disabledOption);
    
    expect(onChange).not.toHaveBeenCalled();
  });

  it('支持不同的变体样式', () => {
    const { rerender } = render(
      <Select options={mockOptions} variant="outline" placeholder="请选择" />
    );
    
    const select = screen.getByRole('combobox');
    expect(select).toHaveClass('select--outline');
    
    rerender(<Select options={mockOptions} variant="filled" placeholder="请选择" />);
    expect(select).toHaveClass('select--filled');
    
    rerender(<Select options={mockOptions} variant="underline" placeholder="请选择" />);
    expect(select).toHaveClass('select--underline');
  });

  it('支持不同的尺寸', () => {
    const { rerender } = render(
      <Select options={mockOptions} size="sm" placeholder="请选择" />
    );
    
    const select = screen.getByRole('combobox');
    expect(select).toHaveClass('select--sm');
    
    rerender(<Select options={mockOptions} size="md" placeholder="请选择" />);
    expect(select).toHaveClass('select--md');
    
    rerender(<Select options={mockOptions} size="lg" placeholder="请选择" />);
    expect(select).toHaveClass('select--lg');
  });

  it('支持焦点和失焦事件', async () => {
    const user = userEvent.setup();
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    
    render(
      <div>
        <Select 
          options={mockOptions} 
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder="请选择" 
        />
        <button>其他元素</button>
      </div>
    );
    
    const select = screen.getByRole('combobox');
    const otherButton = screen.getByText('其他元素');
    
    // 点击获得焦点
    await user.click(select);
    expect(onFocus).toHaveBeenCalled();
    
    // 点击其他元素失去焦点
    await user.click(otherButton);
    
    await waitFor(() => {
      expect(onBlur).toHaveBeenCalled();
    });
  });

  it('支持打开和关闭事件', async () => {
    const user = userEvent.setup();
    const onOpen = jest.fn();
    const onClose = jest.fn();
    
    render(
      <Select 
        options={mockOptions} 
        onOpen={onOpen}
        onClose={onClose}
        placeholder="请选择" 
      />
    );
    
    const select = screen.getByRole('combobox');
    
    // 点击打开
    await user.click(select);
    expect(onOpen).toHaveBeenCalled();
    
    // 再次点击关闭
    await user.click(select);
    expect(onClose).toHaveBeenCalled();
  });
}); 