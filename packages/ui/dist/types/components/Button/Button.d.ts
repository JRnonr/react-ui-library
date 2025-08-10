import { default as React } from 'react';
export interface ButtonProps {
    /** 按钮内容 */
    children: React.ReactNode;
    /** 按钮类型 */
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    /** 按钮尺寸 */
    size?: 'sm' | 'md' | 'lg';
    /** 是否禁用 */
    disabled?: boolean;
    /** 是否加载中 */
    loading?: boolean;
    /** 是否块级元素 */
    block?: boolean;
    /** 点击事件 */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /** 按钮类型 */
    type?: 'button' | 'submit' | 'reset';
    /** 额外的 CSS 类名 */
    className?: string;
    /** 额外的样式 */
    style?: React.CSSProperties;
}
export declare const Button: ({ children, variant, size, disabled, loading, block, onClick, type, className, style, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
