import { default as React } from '../../../react';
export type SelectOption = {
    value: string | number;
    label: string;
    disabled?: boolean;
    group?: string;
};
export type SelectOwnProps = {
    /** 选择器变体 */
    variant?: 'outline' | 'filled' | 'underline';
    /** 选择器尺寸 */
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
    defaultValue?: string | number;
    /** 当前值 */
    value?: string | number;
    /** 值变化回调 */
    onChange?: (value: string | number | undefined, option: SelectOption | undefined) => void;
    /** 选择器获得焦点回调 */
    onFocus?: (event: React.FocusEvent<HTMLDivElement>) => void;
    /** 选择器失去焦点回调 */
    onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void;
    /** 下拉菜单打开回调 */
    onOpen?: () => void;
    /** 下拉菜单关闭回调 */
    onClose?: () => void;
    /** 选项列表 */
    options: SelectOption[];
    /** 是否支持多选 */
    multiple?: boolean;
    /** 是否支持搜索 */
    searchable?: boolean;
    /** 是否允许清除 */
    allowClear?: boolean;
    /** 标签文本 */
    label?: string;
    /** 帮助文本 */
    helpText?: string;
    /** 错误文本 */
    errorText?: string;
    /** 是否显示箭头 */
    showArrow?: boolean;
    /** 下拉菜单最大高度 */
    maxHeight?: number;
    /** 自定义类名 */
    className?: string;
    /** 自定义样式 */
    style?: React.CSSProperties;
    /** 表单字段名 */
    name?: string;
    /** 元素ID */
    id?: string;
    /** 是否自动获得焦点 */
    autoFocus?: boolean;
    /** 是否显示空选项 */
    showEmptyOption?: boolean;
    /** 空选项文本 */
    emptyOptionText?: string;
    /** 无数据文本 */
    noDataText?: string;
    /** 是否显示加载状态 */
    loading?: boolean;
    /** 加载状态文本 */
    loadingText?: string;
};
export declare const Select: React.ForwardRefExoticComponent<SelectOwnProps & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
