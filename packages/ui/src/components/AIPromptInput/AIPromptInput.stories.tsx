import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { AIPromptInput } from './AIPromptInput';
import type { PromptSuggestion, PromptTemplate } from './AIPromptInput';

const meta: Meta<typeof AIPromptInput> = {
  title: 'Components/AIPromptInput',
  component: AIPromptInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
AIPromptInput 是一个智能提示输入框组件，专为AI应用设计。

## 主要特性

- **智能提示**: 支持自动补全建议，提升输入效率
- **历史记录**: 记住用户输入历史，快速重用
- **快捷指令**: 支持"/"触发的快捷指令系统
- **模板选择**: 内置常用提示模板，一键选择
- **多种样式**: 支持outline、filled、underline三种样式变体
- **响应式设计**: 完美适配各种屏幕尺寸
- **深色模式**: 自动适配系统深色模式偏好
- **无障碍访问**: 支持键盘导航和屏幕阅读器

## 使用场景

- AI聊天应用的提示输入
- 代码编辑器的智能补全
- 搜索框的搜索建议
- 表单的智能输入增强
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '输入框尺寸',
    },
    variant: {
      control: { type: 'select' },
      options: ['outline', 'filled', 'underline'],
      description: '输入框样式变体',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '是否禁用',
    },
    readOnly: {
      control: { type: 'boolean' },
      description: '是否只读',
    },
    clearable: {
      control: { type: 'boolean' },
      description: '是否显示清除按钮',
    },
    showHistory: {
      control: { type: 'boolean' },
      description: '是否显示历史记录',
    },
    showShortcuts: {
      control: { type: 'boolean' },
      description: '是否显示快捷指令',
    },
    showTemplates: {
      control: { type: 'boolean' },
      description: '是否显示模板选择器',
    },
    showSuggestions: {
      control: { type: 'boolean' },
      description: '是否显示自动补全',
    },
    error: {
      control: { type: 'boolean' },
      description: '是否显示错误状态',
    },
    required: {
      control: { type: 'boolean' },
      description: '是否必填',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 示例数据
const mockSuggestions: PromptSuggestion[] = [
  {
    id: '1',
    text: '请帮我写一个React组件的代码',
    category: '编程',
    usage: 156,
  },
  {
    id: '2',
    text: '解释一下什么是机器学习',
    category: 'AI',
    usage: 89,
  },
  {
    id: '3',
    text: '帮我优化这个SQL查询语句',
    category: '数据库',
    usage: 234,
  },
  {
    id: '4',
    text: '写一个关于春天的诗歌',
    category: '文学',
    usage: 67,
  },
  {
    id: '5',
    text: '分析这个数据集的特征',
    category: '数据分析',
    usage: 123,
  },
];

const mockTemplates: PromptTemplate[] = [
  {
    id: '1',
    name: '代码审查',
    description: '帮助审查代码质量和潜在问题',
    content: '请帮我审查以下代码，指出可能的问题和改进建议：\n\n[代码]',
    category: '编程',
    tags: ['代码', '审查', '质量'],
  },
  {
    id: '2',
    name: '学习计划',
    description: '制定个性化的学习计划',
    content: '我想学习[技能]，请帮我制定一个为期[时间]的学习计划，包括学习路径、资源推荐和里程碑。',
    category: '教育',
    tags: ['学习', '计划', '技能'],
  },
  {
    id: '3',
    name: '创意写作',
    description: '激发创意写作灵感',
    content: '请以"[主题]"为主题，写一篇[类型]的文章，要求[要求]。',
    category: '写作',
    tags: ['创意', '写作', '灵感'],
  },
  {
    id: '4',
    name: '问题分析',
    description: '系统性地分析问题',
    content: '我遇到了[问题]，请帮我分析问题的根本原因，并提供解决方案。',
    category: '问题解决',
    tags: ['分析', '问题', '解决'],
  },
];

const mockShortcuts = [
  {
    key: 'code',
    label: '代码生成',
    description: '生成指定功能的代码',
    action: '请帮我生成一个[功能]的代码，使用[技术栈]。',
  },
  {
    key: 'explain',
    label: '概念解释',
    description: '解释复杂概念',
    action: '请用简单易懂的方式解释[概念]。',
  },
  {
    key: 'translate',
    label: '翻译助手',
    description: '翻译文本内容',
    action: '请将以下内容翻译成[目标语言]：\n\n[内容]',
  },
  {
    key: 'summarize',
    label: '内容总结',
    description: '总结长文本内容',
    action: '请帮我总结以下内容的核心要点：\n\n[内容]',
  },
];

const mockHistory = [
  '请帮我写一个React组件的代码',
  '解释一下什么是机器学习',
  '帮我优化这个SQL查询语句',
  '写一个关于春天的诗歌',
  '分析这个数据集的特征',
];

// 基础用法
export const Basic: Story = {
  args: {
    placeholder: '输入你的提示...',
    label: 'AI提示输入',
    helpText: '输入你想要AI帮助的内容',
  },
};

// 带建议的输入框
export const WithSuggestions: Story = {
  args: {
    placeholder: '输入你的提示...',
    label: '智能提示输入',
    helpText: '输入时会显示相关建议',
    suggestions: mockSuggestions,
    showSuggestions: true,
    minCharsForSuggestions: 1,
  },
};

// 带历史记录的输入框
export const WithHistory: Story = {
  args: {
    placeholder: '输入你的提示...',
    label: '带历史记录的输入框',
    helpText: '点击时钟图标查看历史记录',
    history: mockHistory,
    showHistory: true,
    maxHistoryItems: 5,
  },
};

// 带模板的输入框
export const WithTemplates: Story = {
  args: {
    placeholder: '输入你的提示...',
    label: '模板选择器',
    helpText: '点击文档图标选择模板',
    templates: mockTemplates,
    showTemplates: true,
  },
};

// 带快捷指令的输入框
export const WithShortcuts: Story = {
  args: {
    placeholder: '输入"/"查看快捷指令...',
    label: '快捷指令输入框',
    helpText: '输入"/"触发快捷指令',
    shortcuts: mockShortcuts,
    showShortcuts: true,
    shortcutTrigger: '/',
  },
};

// 完整功能的输入框
export const FullFeatured: Story = {
  args: {
    placeholder: '输入你的提示或使用"/"快捷指令...',
    label: '完整功能输入框',
    helpText: '支持建议、历史、模板和快捷指令',
    suggestions: mockSuggestions,
    history: mockHistory,
    templates: mockTemplates,
    shortcuts: mockShortcuts,
    showSuggestions: true,
    showHistory: true,
    showTemplates: true,
    showShortcuts: true,
    minCharsForSuggestions: 1,
    maxHistoryItems: 5,
  },
};

// 不同尺寸
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '400px' }}>
      <AIPromptInput
        size="sm"
        placeholder="小尺寸输入框"
        label="小尺寸 (sm)"
      />
      <AIPromptInput
        size="md"
        placeholder="中等尺寸输入框"
        label="中等尺寸 (md)"
      />
      <AIPromptInput
        size="lg"
        placeholder="大尺寸输入框"
        label="大尺寸 (lg)"
      />
    </div>
  ),
};

// 不同样式变体
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '400px' }}>
      <AIPromptInput
        variant="outline"
        placeholder="轮廓样式输入框"
        label="轮廓样式 (outline)"
      />
      <AIPromptInput
        variant="filled"
        placeholder="填充样式输入框"
        label="填充样式 (filled)"
      />
      <AIPromptInput
        variant="underline"
        placeholder="下划线样式输入框"
        label="下划线样式 (underline)"
      />
    </div>
  ),
};

// 状态示例
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '400px' }}>
      <AIPromptInput
        placeholder="正常状态"
        label="正常状态"
        helpText="这是正常的输入框"
      />
      <AIPromptInput
        placeholder="错误状态"
        label="错误状态"
        error={true}
        errorText="输入内容有误，请检查"
      />
      <AIPromptInput
        placeholder="禁用状态"
        label="禁用状态"
        disabled={true}
        helpText="此输入框已被禁用"
      />
      <AIPromptInput
        placeholder="只读状态"
        label="只读状态"
        readOnly={true}
        value="这是只读的内容"
        helpText="此输入框为只读"
      />
    </div>
  ),
};

// 受控组件示例
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [history, setHistory] = useState<string[]>([]);

    const handleChange = (newValue: string) => {
      setValue(newValue);
    };

    const handleEnter = (newValue: string) => {
      if (newValue.trim()) {
        setHistory(prev => [newValue.trim(), ...prev.slice(0, 9)]);
        setValue('');
        alert(`提交了: ${newValue}`);
      }
    };

    const handleHistoryAdd = (item: string) => {
      setHistory(prev => [item, ...prev.filter(h => h !== item).slice(0, 9)]);
    };

    const handleHistoryClear = () => {
      setHistory([]);
    };

    return (
      <div style={{ width: '500px' }}>
        <AIPromptInput
          value={value}
          onChange={handleChange}
          onEnter={handleEnter}
          onHistoryAdd={handleHistoryAdd}
          onHistoryClear={handleHistoryClear}
          placeholder="输入内容并按回车提交..."
          label="受控组件示例"
          helpText="输入内容会保存到历史记录中"
          history={history}
          showHistory={true}
          suggestions={mockSuggestions}
          showSuggestions={true}
          templates={mockTemplates}
          showTemplates={true}
          shortcuts={mockShortcuts}
          showShortcuts={true}
          clearable={true}
        />
        <div style={{ marginTop: '20px', padding: '16px', background: '#f9fafb', borderRadius: '8px' }}>
          <h4 style={{ margin: '0 0 12px 0' }}>当前值:</h4>
          <p style={{ margin: '0', wordBreak: 'break-all' }}>{value || '(空)'}</p>
          <h4 style={{ margin: '16px 0 12px 0' }}>历史记录 ({history.length}):</h4>
          {history.length > 0 ? (
            <ul style={{ margin: '0', paddingLeft: '20px' }}>
              {history.map((item, index) => (
                <li key={index} style={{ marginBottom: '4px' }}>{item}</li>
              ))}
            </ul>
          ) : (
            <p style={{ margin: '0', color: '#6b7280' }}>暂无历史记录</p>
          )}
        </div>
      </div>
    );
  },
};

// 自定义样式示例
export const CustomStyling: Story = {
  render: () => (
    <div style={{ width: '500px' }}>
      <AIPromptInput
        placeholder="自定义样式的输入框..."
        label="自定义样式"
        helpText="使用自定义CSS变量和样式"
        suggestions={mockSuggestions}
        showSuggestions={true}
        style={{
          '--ai-prompt-input-bg': '#f0f9ff',
          '--ai-prompt-input-border-color': '#0ea5e9',
          '--ai-prompt-input-focus-color': '#0ea5e9',
          '--ai-prompt-input-panel-bg': '#f0f9ff',
          '--ai-prompt-input-panel-border-color': '#0ea5e9',
        } as React.CSSProperties}
        className="custom-prompt-input"
      />
    </div>
  ),
};

// 响应式设计示例
export const Responsive: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '600px' }}>
      <AIPromptInput
        placeholder="响应式设计的输入框..."
        label="响应式设计"
        helpText="在不同屏幕尺寸下自适应"
        suggestions={mockSuggestions}
        showSuggestions={true}
        templates={mockTemplates}
        showTemplates={true}
        shortcuts={mockShortcuts}
        showShortcuts={true}
        history={mockHistory}
        showHistory={true}
      />
      <div style={{ marginTop: '20px', padding: '16px', background: '#f9fafb', borderRadius: '8px', fontSize: '14px' }}>
        <p style={{ margin: '0 0 8px 0' }}><strong>响应式特性:</strong></p>
        <ul style={{ margin: '0', paddingLeft: '20px' }}>
          <li>移动端自动调整按钮大小</li>
          <li>面板高度在小屏幕上自动调整</li>
          <li>触摸友好的交互设计</li>
          <li>防止iOS键盘缩放</li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
  },
}; 