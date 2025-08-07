import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.less';
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    /** 按钮类型 */
    type?: 'default' | 'primary' | 'dashed' | 'text' | 'link';
    /** 按钮尺寸 */
    size?: 'small' | 'middle' | 'large';
    /** 按钮形状 */
    shape?: 'default' | 'circle' | 'round';
    /** 是否禁用 */
    disabled?: boolean;
    /** 是否加载中 */
    loading?: boolean;
    /** 是否为块级元素 */
    block?: boolean;
    /** 图标（显示在文字前面） */
    icon?: ReactNode;
    /** 右侧图标（显示在文字后面） */
    iconRight?: ReactNode;
    /** HTML 按钮类型 */
    htmlType?: 'button' | 'submit' | 'reset';
    /** 点击事件 */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /** 子元素 */
    children?: ReactNode;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
