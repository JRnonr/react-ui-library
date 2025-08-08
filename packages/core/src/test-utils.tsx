import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

// 自定义渲染器，用于包装组件
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): ReturnType<typeof render> => render(ui, { wrapper: AllTheProviders, ...options });

// 重新导出所有测试工具
export * from '@testing-library/react';
export { customRender as render };

// 测试数据生成器
export const createTestProps = (overrides = {}) => ({
  children: 'Test Button',
  onClick: jest.fn(),
  ...overrides,
});

// 常用测试断言
export const expectButtonToBeDisabled = (button: HTMLElement) => {
  expect(button).toBeDisabled();
  expect(button).toHaveClass('velvet-btn--disabled');
};

export const expectButtonToBeEnabled = (button: HTMLElement) => {
  expect(button).not.toBeDisabled();
  expect(button).not.toHaveClass('velvet-btn--disabled');
};

export const expectButtonToHaveType = (button: HTMLElement, type: string) => {
  expect(button).toHaveClass(`velvet-btn--${type}`);
};

export const expectButtonToHaveSize = (button: HTMLElement, size: string) => {
  expect(button).toHaveClass(`velvet-btn--${size}`);
}; 