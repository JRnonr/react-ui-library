import { default as React } from '../../../react';
export type MessageStatus = 'sending' | 'success' | 'error' | 'streaming';
export type AIMessageOwnProps = {
    /** 消息内容，支持markdown格式 */
    content: string;
    /** 消息状态 */
    status?: MessageStatus;
    /** 是否显示时间戳 */
    showTimestamp?: boolean;
    /** 时间戳 */
    timestamp?: Date | string;
    /** 是否显示复制按钮 */
    showCopyButton?: boolean;
    /** 是否显示代码高亮 */
    enableCodeHighlight?: boolean;
    /** 自定义头像 */
    avatar?: React.ReactNode;
    /** 用户名 */
    username?: string;
    /** 是否显示用户名 */
    showUsername?: boolean;
    /** 自定义样式类名 */
    className?: string;
    /** 自定义样式 */
    style?: React.CSSProperties;
    /** 复制成功回调 */
    onCopy?: (content: string) => void;
    /** 复制失败回调 */
    onCopyError?: (error: Error) => void;
    /** 消息点击回调 */
    onClick?: () => void;
};
export declare const AIMessage: React.ForwardRefExoticComponent<AIMessageOwnProps & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
