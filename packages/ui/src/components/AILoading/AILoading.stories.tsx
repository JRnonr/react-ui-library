import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { AILoading } from './AILoading';

const meta: Meta<typeof AILoading> = {
  title: 'Components/AILoading',
  component: AILoading,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'AI Loading 组件 - 专门用于AI处理时的加载动画，支持多种加载类型和动画效果。',
      },
    },
  },
  tags: ['docs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['typing', 'thinking', 'processing', 'dots'],
      description: '加载类型',
    },
    text: {
      control: { type: 'text' },
      description: '加载文本',
    },
    typingSpeed: {
      control: { type: 'range', min: 50, max: 500, step: 50 },
      description: '打字机效果速度（毫秒）',
    },
    loop: {
      control: { type: 'boolean' },
      description: '是否循环播放文本',
    },
    showProgress: {
      control: { type: 'boolean' },
      description: '是否显示进度条',
    },
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 5 },
      description: '进度值（0-100）',
    },
    indeterminate: {
      control: { type: 'boolean' },
      description: '是否不确定进度',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 基础故事
export const Default: Story = {
  args: {
    type: 'typing',
    text: 'AI正在思考中...',
  },
};

// 打字机效果
export const Typing: Story = {
  args: {
    type: 'typing',
    text: 'AI正在分析您的问题，请稍候...',
    typingSpeed: 100,
  },
};

// 思考动画
export const Thinking: Story = {
  args: {
    type: 'thinking',
    text: 'AI正在思考',
  },
};

// 处理中动画
export const Processing: Story = {
  args: {
    type: 'processing',
    text: 'AI正在处理您的请求',
  },
};

// 纯点动画
export const Dots: Story = {
  args: {
    type: 'dots',
  },
};

// 带进度条
export const WithProgress: Story = {
  args: {
    type: 'processing',
    text: 'AI正在生成内容',
    showProgress: true,
    progress: 65,
  },
};

// 不确定进度
export const IndeterminateProgress: Story = {
  args: {
    type: 'processing',
    text: 'AI正在处理中',
    showProgress: true,
    indeterminate: true,
  },
};

// 循环播放文本
export const LoopTexts: Story = {
  args: {
    type: 'typing',
    texts: [
      'AI正在分析问题...',
      'AI正在搜索相关信息...',
      'AI正在生成答案...',
      'AI正在优化回答...',
    ],
    loop: true,
    typingSpeed: 80,
  },
};

// 快速打字机效果
export const FastTyping: Story = {
  args: {
    type: 'typing',
    text: 'AI正在快速处理您的请求，请耐心等待...',
    typingSpeed: 50,
  },
};

// 慢速打字机效果
export const SlowTyping: Story = {
  args: {
    type: 'typing',
    text: 'AI正在仔细思考您的问题，这需要一些时间...',
    typingSpeed: 200,
  },
};

// 自定义样式
export const CustomStyle: Story = {
  args: {
    type: 'thinking',
    text: 'AI正在思考中',
    className: 'custom-loading',
    style: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      borderRadius: '20px',
      padding: '2rem',
    },
  },
};

// 交互式进度条示例
export const InteractiveProgress: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);
    
    const simulateProgress = () => {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 200);
    };
    
    return (
      <div style={{ textAlign: 'center' }}>
        <AILoading
          type="processing"
          text="AI正在生成内容"
          showProgress={true}
          progress={progress}
        />
        <button
          onClick={simulateProgress}
          style={{
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: '#3b82f6',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          重新开始进度
        </button>
      </div>
    );
  },
};

// 组合使用示例
export const CombinedUsage: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
      <AILoading
        type="typing"
        text="AI正在分析您的问题"
        typingSpeed={120}
      />
      <AILoading
        type="thinking"
        text="AI正在思考解决方案"
      />
      <AILoading
        type="processing"
        text="AI正在生成答案"
        showProgress={true}
        progress={75}
      />
    </div>
  ),
};

// 响应式设计展示
export const ResponsiveDesign: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
      <div style={{ width: '100%', maxWidth: '400px' }}>
        <AILoading
          type="typing"
          text="AI正在处理您的请求"
          showProgress={true}
          progress={45}
        />
      </div>
      <div style={{ width: '100%', maxWidth: '300px' }}>
        <AILoading
          type="thinking"
          text="AI正在思考"
        />
      </div>
      <div style={{ width: '100%', maxWidth: '200px' }}>
        <AILoading
          type="dots"
        />
      </div>
    </div>
  ),
}; 