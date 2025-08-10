import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: { a11y: { disable: false } },
  args: { placeholder: '请输入内容...', variant: 'outline', size: 'md' }
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};
export const Filled: Story = { args: { variant: 'filled' } };
export const Underline: Story = { args: { variant: 'underline' } };
export const WithLabel: Story = { args: { label: '用户名', required: true } };
export const WithHelpText: Story = { args: { label: '邮箱', helpText: '请输入有效的邮箱地址', type: 'email' } };
export const WithErrorText: Story = { args: { label: '密码', errorText: '密码长度至少8位', type: 'password' } };
export const Large: Story = { args: { size: 'lg' } };
export const Small: Story = { args: { size: 'sm' } };
export const Disabled: Story = { args: { disabled: true } };
export const WithPrefix: Story = { args: { prefix: '🔍', placeholder: '搜索...', type: 'search' } };
export const WithSuffix: Story = { args: { suffix: '¥', placeholder: '请输入金额', type: 'number' } };
export const Clearable: Story = { args: { allowClear: true, defaultValue: '示例文本' } };
export const PasswordToggle: Story = { args: { type: 'password', showPasswordToggle: true, label: '密码' } };
export const WithCount: Story = { args: { label: '简介', maxLength: 100, showCount: true, defaultValue: '这是一段示例文本' } }; 