import React from 'react';
import 'highlight.js/styles/github.css';
import './CodeBlock.less';
export interface CodeBlockProps {
    /** 代码内容 */
    code: string;
    /** 编程语言 */
    language?: string;
    /** 是否显示行号 */
    showLineNumbers?: boolean;
    /** 是否可复制 */
    copyable?: boolean;
    /** 自定义类名 */
    className?: string;
    /** 主题 */
    theme?: 'light' | 'dark';
    /** 是否显示语言标签 */
    showLanguage?: boolean;
}
export declare const CodeBlock: React.FC<CodeBlockProps>;
