import { default as React } from '../../../react';
export interface PromptSuggestion {
    id: string;
    text: string;
    category?: string;
    usage?: number;
}
export interface PromptTemplate {
    id: string;
    name: string;
    description: string;
    content: string;
    category: string;
    tags: string[];
}
export interface AIPromptInputProps {
    /** 输入框的值 */
    value?: string;
    /** 输入框的默认值 */
    defaultValue?: string;
    /** 输入框的占位符 */
    placeholder?: string;
    /** 是否禁用 */
    disabled?: boolean;
    /** 是否只读 */
    readOnly?: boolean;
    /** 输入框的尺寸 */
    size?: 'sm' | 'md' | 'lg';
    /** 输入框的样式变体 */
    variant?: 'outline' | 'filled' | 'underline';
    /** 是否显示清除按钮 */
    clearable?: boolean;
    /** 是否显示历史记录 */
    showHistory?: boolean;
    /** 是否显示快捷指令 */
    showShortcuts?: boolean;
    /** 是否显示模板选择器 */
    showTemplates?: boolean;
    /** 是否显示自动补全 */
    showSuggestions?: boolean;
    /** 最大历史记录数量 */
    maxHistoryItems?: number;
    /** 最大建议数量 */
    maxSuggestions?: number;
    /** 触发自动补全的最小字符数 */
    minCharsForSuggestions?: number;
    /** 快捷指令触发字符 */
    shortcutTrigger?: string;
    /** 历史记录数据 */
    history?: string[];
    /** 建议数据 */
    suggestions?: PromptSuggestion[];
    /** 模板数据 */
    templates?: PromptTemplate[];
    /** 快捷指令数据 */
    shortcuts?: Array<{
        key: string;
        label: string;
        description: string;
        action: string;
    }>;
    /** 输入框标签 */
    label?: string;
    /** 是否必填 */
    required?: boolean;
    /** 帮助文本 */
    helpText?: string;
    /** 错误文本 */
    errorText?: string;
    /** 是否显示错误状态 */
    error?: boolean;
    /** 自定义CSS类名 */
    className?: string;
    /** 自定义样式 */
    style?: React.CSSProperties;
    /** 值变化时的回调 */
    onChange?: (value: string) => void;
    /** 输入框获得焦点时的回调 */
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /** 输入框失去焦点时的回调 */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /** 按下回车键时的回调 */
    onEnter?: (value: string) => void;
    /** 选择建议时的回调 */
    onSuggestionSelect?: (suggestion: PromptSuggestion) => void;
    /** 选择模板时的回调 */
    onTemplateSelect?: (template: PromptTemplate) => void;
    /** 选择快捷指令时的回调 */
    onShortcutSelect?: (shortcut: {
        key: string;
        action: string;
    }) => void;
    /** 清除历史记录时的回调 */
    onHistoryClear?: () => void;
    /** 添加历史记录时的回调 */
    onHistoryAdd?: (item: string) => void;
}
export declare const AIPromptInput: React.FC<AIPromptInputProps>;
