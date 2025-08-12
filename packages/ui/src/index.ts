// UI 组件库入口文件
export const version = '0.0.0';

// 在这里导出你的组件
export { Button } from './components/Button';
export type { ButtonOwnProps } from './components/Button';
export { ChatInterface } from './components/ChatInterface';
export type { ChatInterfaceProps, Message } from './components/ChatInterface';
export { Input } from './components/Input';
export type { InputOwnProps } from './components/Input';
export { AIMessage } from './components/AIMessage';
export type { AIMessageOwnProps, MessageStatus } from './components/AIMessage';
export { AILoading } from './components/AILoading';
export type { AILoadingProps } from './components/AILoading';
export { AIPromptInput } from './components/AIPromptInput';
export type { AIPromptInputProps, PromptSuggestion, PromptTemplate } from './components/AIPromptInput';
export { Select } from './components/Select';
export type { SelectOption, SelectOwnProps } from './components/Select';
// 等等... 