import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['default', 'primary', 'dashed', 'text', 'link'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'middle', 'large'],
    },
    shape: {
      control: { type: 'select' },
      options: ['default', 'circle', 'round'],
    },
    htmlType: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    block: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 基础按钮类型展示
export const Basic: Story = {
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
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="text">Text</Button>
      <Button type="link">Link</Button>
    </div>
  ),
};

// 尺寸展示
export const Size: Story = {
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
      <Button size="small">Small</Button>
      <Button size="middle">Middle</Button>
      <Button size="large">Large</Button>
    </div>
  ),
};

// 形状展示
export const Shape: Story = {
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
      <Button shape="default">Default</Button>
      <Button shape="round">Round</Button>
      <Button shape="circle" icon="🔍" />
    </div>
  ),
};

// 图标按钮展示
export const Icon: Story = {
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
      <Button icon="→">Launch</Button>
      <Button icon="↑" iconRight="↓">Upload</Button>
      <Button icon="🔍" shape="circle" />
      <Button icon="⭐" type="primary">Star</Button>
      <Button icon="💾" type="dashed">Save</Button>
    </div>
  ),
};

// 状态展示
export const States: Story = {
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
      <Button>Normal</Button>
      <Button loading>Loading</Button>
      <Button disabled>Disabled</Button>
      <Button type="primary" loading>Loading Primary</Button>
      <Button type="primary" disabled>Disabled Primary</Button>
    </div>
  ),
};

// 块级按钮展示
export const Block: Story = {
  render: () => (
    <div style={{ 
      width: '400px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px'
    }}>
      <div style={{ marginBottom: '12px' }}>
        <Button block>Block Button</Button>
      </div>
      <div style={{ marginBottom: '12px' }}>
        <Button type="primary" block>Block Primary</Button>
      </div>
      <div>
        <Button type="dashed" block>Block Dashed</Button>
      </div>
    </div>
  ),
};

// 综合展示
export const AllVariants: Story = {
  render: () => (
    <div style={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px'
    }}>
      {/* 基础类型 */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        gap: '8px',
        padding: '16px',
        backgroundColor: 'white',
        borderRadius: '6px'
      }}>
        <h4 style={{ margin: '0 0 8px 0', color: '#333' }}>基础类型</h4>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Button>Default</Button>
          <Button type="primary">Primary</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="text">Text</Button>
          <Button type="link">Link</Button>
        </div>
      </div>

      {/* 尺寸 */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        gap: '8px',
        padding: '16px',
        backgroundColor: 'white',
        borderRadius: '6px'
      }}>
        <h4 style={{ margin: '0 0 8px 0', color: '#333' }}>尺寸</h4>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="small">Small</Button>
          <Button size="middle">Middle</Button>
          <Button size="large">Large</Button>
        </div>
      </div>

      {/* 形状 */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        gap: '8px',
        padding: '16px',
        backgroundColor: 'white',
        borderRadius: '6px'
      }}>
        <h4 style={{ margin: '0 0 8px 0', color: '#333' }}>形状</h4>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button shape="default">Default</Button>
          <Button shape="round">Round</Button>
          <Button shape="circle" icon="🔍" />
        </div>
      </div>

      {/* 图标 */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        gap: '8px',
        padding: '16px',
        backgroundColor: 'white',
        borderRadius: '6px'
      }}>
        <h4 style={{ margin: '0 0 8px 0', color: '#333' }}>图标</h4>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Button icon="→">Launch</Button>
          <Button icon="↑" iconRight="↓">Upload</Button>
          <Button icon="🔍" shape="circle" />
        </div>
      </div>

      {/* 状态 */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        gap: '8px',
        padding: '16px',
        backgroundColor: 'white',
        borderRadius: '6px'
      }}>
        <h4 style={{ margin: '0 0 8px 0', color: '#333' }}>状态</h4>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Button>Normal</Button>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>

      {/* 块级 */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        gap: '8px',
        padding: '16px',
        backgroundColor: 'white',
        borderRadius: '6px',
        gridColumn: '1 / -1'
      }}>
        <h4 style={{ margin: '0 0 8px 0', color: '#333' }}>块级按钮</h4>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Button block style={{ flex: '1', minWidth: '200px' }}>Block Button</Button>
          <Button type="primary" block style={{ flex: '1', minWidth: '200px' }}>Block Primary</Button>
        </div>
      </div>
    </div>
  ),
}; 