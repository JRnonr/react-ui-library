import { default as React } from '../../../react';
export interface AILoadingProps {
    /** 加载类型 */
    type?: 'typing' | 'thinking' | 'processing' | 'dots';
    /** 加载文本 */
    text?: string;
    /** 自定义加载文本数组 */
    texts?: string[];
    /** 打字机效果速度（毫秒） */
    typingSpeed?: number;
    /** 是否循环播放文本 */
    loop?: boolean;
    /** 是否显示进度条 */
    showProgress?: boolean;
    /** 进度值（0-100） */
    progress?: number;
    /** 是否不确定进度 */
    indeterminate?: boolean;
    /** 自定义CSS类名 */
    className?: string;
    /** 自定义样式 */
    style?: React.CSSProperties;
    /** 加载完成回调 */
    onComplete?: () => void;
    /** 文本变化回调 */
    onTextChange?: (text: string) => void;
}
export declare const AILoading: React.FC<AILoadingProps>;
