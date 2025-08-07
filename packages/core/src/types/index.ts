// 通用组件属性
export interface ComponentProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

// 尺寸类型
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// 颜色类型
export type Color = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';

// 位置类型
export type Position = 'top' | 'right' | 'bottom' | 'left';

// 对齐类型
export type Alignment = 'start' | 'center' | 'end';

// 状态类型
export type Status = 'default' | 'loading' | 'success' | 'error' | 'warning'; 