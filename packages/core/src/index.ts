// 导入样式
import './styles/design-system.css';
import './components/common/button/button.less';

/* PLOP_INJECT_EXPORT */

// 导出组件
export { Button } from './components/common/button';
export type { ButtonProps, ButtonType } from './components/common/button';

export { default as App } from './App';

// 导出工具函数
export { classNames } from './utils/classNames';

// 导出类型
export type { ComponentProps } from './types';
