import type { Meta, StoryObj } from '@storybook/react';
import { AIMessage } from './AIMessage';

const meta: Meta<typeof AIMessage> = {
  title: 'Components/AIMessage',
  component: AIMessage,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'AI Message组件是一个专门用于显示AI对话消息的独立组件，支持markdown渲染、代码高亮、消息状态管理等功能。'
      }
    }
  },
  argTypes: {
    content: {
      control: 'text',
      description: '消息内容，支持markdown格式'
    },
    status: {
      control: 'select',
      options: ['sending', 'success', 'error', 'streaming'],
      description: '消息状态'
    },
    showTimestamp: {
      control: 'boolean',
      description: '是否显示时间戳'
    },
    timestamp: {
      control: 'date',
      description: '时间戳'
    },
    showCopyButton: {
      control: 'boolean',
      description: '是否显示复制按钮'
    },
    enableCodeHighlight: {
      control: 'boolean',
      description: '是否启用代码高亮'
    },
    showUsername: {
      control: 'boolean',
      description: '是否显示用户名'
    },
    username: {
      control: 'text',
      description: '用户名'
    },
    onCopy: {
      action: 'copied',
      description: '复制成功回调'
    },
    onCopyError: {
      action: 'copy-error',
      description: '复制失败回调'
    },
    onClick: {
      action: 'clicked',
      description: '消息点击回调'
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

// 基础用法
export const Default: Story = {
  args: {
    content: '你好！我是AI助手，有什么可以帮助你的吗？',
    username: 'AI Assistant',
    timestamp: new Date()
  }
};

// 带markdown格式的消息
export const WithMarkdown: Story = {
  args: {
    content: `# 欢迎使用AI助手

这是一个**支持markdown格式**的消息示例。

## 功能特性

- 支持**粗体**和*斜体*文本
- 支持\`行内代码\`
- 支持代码块：

\`\`\`
function hello() {
  console.log("Hello, World!");
}
\`\`\`

> 这是一个引用块

### 列表支持

1. 有序列表项1
2. 有序列表项2
3. 有序列表项3

- 无序列表项1
- 无序列表项2
- 无序列表项3`,
    username: 'AI Assistant',
    timestamp: new Date(),
    enableCodeHighlight: true
  }
};

// 代码高亮示例
export const CodeHighlight: Story = {
  args: {
    content: `这是一个JavaScript代码示例：

\`\`\`
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 使用示例
console.log(fibonacci(10)); // 输出: 55
\`\`\`

你也可以使用\`行内代码\`来突出显示特定的代码片段。

\`\`\`python
def greet(name):
    return f"Hello, {name}!"
\`\`\``,
    username: 'AI Assistant',
    timestamp: new Date(),
    enableCodeHighlight: true
  }
};

// 不同状态的消息
export const DifferentStatuses: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <AIMessage
        content="正在发送消息..."
        status="sending"
        username="AI Assistant"
        timestamp={new Date()}
      />
      <AIMessage
        content="正在生成回复..."
        status="streaming"
        username="AI Assistant"
        timestamp={new Date()}
      />
      <AIMessage
        content="消息发送失败，请重试。"
        status="error"
        username="AI Assistant"
        timestamp={new Date()}
      />
      <AIMessage
        content="消息发送成功！"
        status="success"
        username="AI Assistant"
        timestamp={new Date()}
      />
    </div>
  )
};

// 自定义头像
export const CustomAvatar: Story = {
  args: {
    content: '这是一个带有自定义头像的消息示例。',
    username: 'Custom AI',
    timestamp: new Date(),
    avatar: (
      <div style={{ 
        width: '32px', 
        height: '32px', 
        background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '16px',
        fontWeight: 'bold'
      }}>
        🤖
      </div>
    )
  }
};

// 长文本消息
export const LongMessage: Story = {
  args: {
    content: `这是一个很长的消息示例，用来测试组件在长文本情况下的表现。

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
    username: 'AI Assistant',
    timestamp: new Date()
  }
};

// 禁用复制按钮
export const NoCopyButton: Story = {
  args: {
    content: '这个消息没有复制按钮。',
    username: 'AI Assistant',
    timestamp: new Date(),
    showCopyButton: false
  }
};

// 禁用代码高亮
export const NoCodeHighlight: Story = {
  args: {
    content: `# 标题

这是**粗体**文本，这是*斜体*文本。

\`\`\`
function example() {
  return "代码块";
}
\`\`\`

\`行内代码\``,
    username: 'AI Assistant',
    timestamp: new Date(),
    enableCodeHighlight: false
  }
};

// 响应式设计测试
export const ResponsiveDesign: Story = {
  args: {
    content: `这是一个响应式设计的测试消息。

在不同屏幕尺寸下，组件会自动调整布局和样式。

- 桌面端：完整布局
- 平板端：适中布局  
- 移动端：紧凑布局

\`\`\`css
@media (max-width: 768px) {
  .ai-message {
    padding: 12px;
    border-radius: 8px;
  }
}
\`\`\``,
    username: 'AI Assistant',
    timestamp: new Date()
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
};

// 深色模式测试
export const DarkMode: Story = {
  args: {
    content: `这是一个深色模式的测试消息。

组件会自动适配系统的深色模式设置，提供更好的视觉体验。

\`\`\`javascript
// 检测深色模式
const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
\`\`\``,
    username: 'AI Assistant',
    timestamp: new Date()
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}; 