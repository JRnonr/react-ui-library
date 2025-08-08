# 测试指南

## 测试技术栈

本项目使用 **Jest + React Testing Library** 作为测试框架，这是目前最主流和推荐的React组件测试方案。

### 为什么选择Jest？

1. **行业标准** - 大厂广泛使用，面试官更熟悉
2. **生态丰富** - 大量的测试工具和插件
3. **学习资源多** - 文档和教程丰富
4. **稳定性好** - 经过多年验证，稳定可靠

## 测试命令

```bash
# 运行所有测试
pnpm test

# 运行特定测试文件
pnpm test button.test.tsx

# 监听模式（开发时推荐）
pnpm test:watch

# 生成覆盖率报告
pnpm test:coverage

# 更新快照
pnpm test:update

# 运行E2E测试
pnpm test:e2e
```

## 测试文件结构

```
src/
├── components/
│   └── common/
│       └── button/
│           ├── __tests__/           # 测试文件目录
│           │   └── button.test.tsx  # 测试文件
│           ├── button.tsx           # 组件文件
│           └── index.ts             # 导出文件
└── setupTests.ts                    # 全局测试配置
```

## 测试编写规范

### 1. 测试文件命名

- 测试文件以 `.test.tsx` 或 `.spec.tsx` 结尾
- 测试文件放在 `__tests__` 目录下
- 测试文件名与组件文件名对应

### 2. 测试结构

```typescript
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
  });
});
```

### 3. 测试用例组织

- 使用 `describe` 块组织相关测试
- 使用 `it` 或 `test` 编写具体测试用例
- 测试用例名称应该清晰描述测试内容
- 按照功能模块分组测试

### 4. 测试覆盖范围

每个组件应该测试以下方面：

#### 基础功能
- ✅ 组件正确渲染
- ✅ 属性正确传递
- ✅ 默认值正确设置

#### 交互功能
- ✅ 点击事件
- ✅ 键盘事件
- ✅ 禁用状态

#### 样式和外观
- ✅ CSS类名正确应用
- ✅ 内联样式正确应用
- ✅ 不同状态下的样式

#### 无障碍性
- ✅ ARIA属性正确设置
- ✅ 键盘导航支持
- ✅ 屏幕阅读器友好

#### 边界情况
- ✅ 空值处理
- ✅ 异常情况
- ✅ 性能测试

## 常用测试工具

### 1. React Testing Library

```typescript
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

// 渲染组件
const { container, debug } = render(<Button>点击我</Button>);

// 查找元素
const button = screen.getByRole('button');
const button = screen.getByText('点击我');
const button = screen.getByTestId('test-button');

// 用户交互
await userEvent.click(button);
await userEvent.type(input, 'hello');
fireEvent.keyDown(button, { key: 'Enter' });
```

### 2. Jest Matchers

```typescript
// 元素存在性
expect(element).toBeInTheDocument();
expect(element).not.toBeInTheDocument();

// 元素属性
expect(element).toHaveClass('button');
expect(element).toHaveAttribute('disabled');
expect(element).toHaveTextContent('点击我');

// 事件调用
expect(mockFn).toHaveBeenCalled();
expect(mockFn).toHaveBeenCalledTimes(1);
expect(mockFn).toHaveBeenCalledWith(arg);
```

### 3. 用户事件

```typescript
import userEvent from '@testing-library/user-event';

// 模拟用户点击
await userEvent.click(button);

// 模拟用户输入
await userEvent.type(input, 'hello world');

// 模拟键盘事件
await userEvent.keyboard('{Enter}');
await userEvent.keyboard('{Space}');
```

## 测试最佳实践

### 1. 测试用户行为

```typescript
// ❌ 不好的测试 - 测试实现细节
it('应该调用onClick函数', () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick} />);
  fireEvent.click(screen.getByRole('button'));
  expect(onClick).toHaveBeenCalled();
});

// ✅ 好的测试 - 测试用户行为
it('用户点击按钮时应该触发点击事件', async () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick}>点击我</Button>);
  
  await userEvent.click(screen.getByRole('button', { name: '点击我' }));
  
  expect(onClick).toHaveBeenCalledTimes(1);
});
```

### 2. 使用语义化查询

```typescript
// ❌ 不好的查询 - 依赖实现细节
screen.getByTestId('button');

// ✅ 好的查询 - 语义化查询
screen.getByRole('button', { name: '点击我' });
screen.getByText('点击我');
screen.getByLabelText('提交按钮');
```

### 3. 测试可访问性

```typescript
it('应该支持键盘导航', () => {
  render(<Button>点击我</Button>);
  const button = screen.getByRole('button');
  
  // 测试可以通过Tab键聚焦
  expect(button).not.toHaveAttribute('tabIndex', '-1');
  
  // 测试有正确的ARIA属性
  expect(button).toHaveAttribute('aria-disabled', 'false');
});
```

### 4. 测试边界情况

```typescript
it('应该正确处理空的children', () => {
  render(<Button>{null}</Button>);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent('');
});

it('应该正确处理undefined的onClick', async () => {
  render(<Button onClick={undefined}>点击我</Button>);
  const button = screen.getByRole('button');
  
  // 不应该抛出错误
  await expect(userEvent.click(button)).resolves.not.toThrow();
});
```

## 覆盖率目标

- **语句覆盖率**: ≥80%
- **分支覆盖率**: ≥80%
- **函数覆盖率**: ≥90%
- **行覆盖率**: ≥80%

## 常见问题

### 1. 如何处理异步测试？

```typescript
it('应该处理异步操作', async () => {
  const asyncFn = jest.fn().mockResolvedValue('result');
  render(<AsyncComponent onAsync={asyncFn} />);
  
  await userEvent.click(screen.getByRole('button'));
  
  await waitFor(() => {
    expect(screen.getByText('result')).toBeInTheDocument();
  });
});
```

### 2. 如何测试组件内部状态？

```typescript
it('应该正确更新内部状态', () => {
  render(<Counter />);
  const button = screen.getByRole('button');
  const count = screen.getByText('0');
  
  await userEvent.click(button);
  
  expect(screen.getByText('1')).toBeInTheDocument();
});
```

### 3. 如何模拟外部依赖？

```typescript
// 模拟模块
jest.mock('../api', () => ({
  fetchData: jest.fn().mockResolvedValue({ data: 'test' }),
}));

// 模拟浏览器API
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
```

## 总结

使用Jest + React Testing Library进行测试可以：

1. **提高代码质量** - 及早发现bug
2. **增强信心** - 重构时更有把握
3. **改善设计** - 测试驱动开发
4. **文档作用** - 测试即文档
5. **面试加分** - 展示专业能力

记住：**测试不是为了测试而测试，而是为了确保代码质量和用户体验**。 