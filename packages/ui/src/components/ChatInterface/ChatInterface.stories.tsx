import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChatInterface } from './ChatInterface';

const meta: Meta<typeof ChatInterface> = {
  title: 'Components/ChatInterface',
  component: ChatInterface,
  parameters: { a11y: { disable: false } },
  args: {
    placeholder: '输入你的问题…',
    initialMessages: [
      { id: '1', type: 'assistant', content: '你好，我是 AI 助手～', timestamp: new Date() }
    ]
  }
};
export default meta;
type Story = StoryObj<typeof ChatInterface>;

export const Basic: Story = {};
export const WithLongHistory: Story = {
  args: {
    initialMessages: Array.from({ length: 20 }).map((_, i) => ({
      id: String(i + 1),
      type: i % 2 ? 'user' : 'assistant',
      content: `消息 ${i + 1}`,
      timestamp: new Date()
    }))
  }
}; 