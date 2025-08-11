import { default as React } from '../../../react';
export type InputOwnProps = {
    /** 输入框类型 */
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';
    /** 输入框变体 */
    variant?: 'outline' | 'filled' | 'underline';
    /** 输入框尺寸 */
    size?: 'sm' | 'md' | 'lg';
    /** 是否禁用 */
    disabled?: boolean;
    /** 是否只读 */
    readOnly?: boolean;
    /** 是否必填 */
    required?: boolean;
    /** 占位符文本 */
    placeholder?: string;
    /** 默认值 */
    defaultValue?: string;
    /** 当前值 */
    value?: string;
    /** 值变化回调 */
    onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
    /** 输入框获得焦点回调 */
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /** 输入框失去焦点回调 */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /** 输入框按键回调 */
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    /** 输入框回车回调 */
    onEnter?: (value: string) => void;
    /** 前缀图标 */
    prefix?: React.ReactNode;
    /** 后缀图标 */
    suffix?: React.ReactNode;
    /** 是否显示清除按钮 */
    allowClear?: boolean;
    /** 是否显示密码切换按钮（仅对password类型有效） */
    showPasswordToggle?: boolean;
    /** 输入框标签 */
    label?: string;
    /** 帮助文本 */
    helpText?: string;
    /** 错误文本 */
    errorText?: string;
    /** 是否显示字符计数 */
    showCount?: boolean;
    /** 最大字符数 */
    maxLength?: number;
    /** 额外的CSS类名 */
    className?: string;
    /** 额外的样式 */
    style?: React.CSSProperties;
    /** 输入框名称 */
    name?: string;
    /** 输入框ID */
    id?: string;
    /** 自动完成 */
    autoComplete?: string;
    /** 自动聚焦 */
    autoFocus?: boolean;
    /** 输入模式 */
    inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
};
export declare const Input: React.ForwardRefExoticComponent<InputOwnProps & React.HTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>;
