import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

// Storybook 的元信息，告诉 Storybook 这个组件的标题、组件、参数等
const meta: Meta<typeof Button> = {
  title: 'Components/Button', // Storybook 左侧菜单的名字
  component: Button, // 要展示的组件
  parameters: {
    layout: 'centered', // 整个故事居中显示
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' }, // 给 Storybook 加个勾选框控制 disabled 属性
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;  //定义了一个 Story 类型，方便后面写不同场景

// 基础按钮 这是第一个场景 名字叫 Basic（Storybook 里会显示这个名字）。
export const Basic: Story = {
  render: () => ( //render 决定怎么画这个按钮，这里是最普通的按钮。
    <div style={{ 
      display: 'flex', 
      gap: '12px', 
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px'
    }}>
      <Button>基础按钮</Button>
    </div>
  ),
};

// 禁用状态 这是第二个场景 名字叫 Disabled（Storybook 里会显示这个名字）。
export const Disabled: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: '12px', 
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px'
    }}>
      <Button disabled>禁用按钮</Button>
    </div>
  ),
}; 