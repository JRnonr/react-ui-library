import { default as React } from '../../../react';
export interface Message {
    id: string;
    content: string;
    type: 'user' | 'assistant';
    timestamp: Date;
    isTyping?: boolean;
}
export interface ChatInterfaceProps extends React.HTMLAttributes<HTMLDivElement> {
    /** 初始消息列表 */
    initialMessages?: Message[];
    /** 占位符文本 */
    placeholder?: string;
    /** 是否禁用输入 */
    disabled?: boolean;
    /** 发送消息的回调 */
    onSendMessage?: (message: string) => void | Promise<void> | string | Promise<string>;
    /** 自定义渲染消息内容 */
    renderMessage?: (message: Message) => React.ReactNode;
    /** 额外的CSS类名 */
    className?: string;
    /** 额外的样式 */
    style?: React.CSSProperties;
}
export declare const ChatInterface: React.ForwardRefExoticComponent<ChatInterfaceProps & React.RefAttributes<HTMLDivElement>>;
