import '@testing-library/jest-dom';

// 全局测试设置
beforeEach(() => {
  // 清理 DOM
  document.body.innerHTML = '';
});

// 模拟 ResizeObserver
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// 模拟 IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() { return undefined; }
  unobserve() { return undefined; }
  disconnect() { return undefined; }
  root = null;
  rootMargin = '';
  thresholds = [];
  takeRecords() { return []; }
};

// 模拟 matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
}); 