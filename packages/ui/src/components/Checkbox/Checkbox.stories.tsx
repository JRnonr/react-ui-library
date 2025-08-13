import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '一个功能完整的复选框组件，支持多种状态、尺寸和样式变体。'
      }
    }
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: '复选框是否被选中'
    },
    indeterminate: {
      control: 'boolean',
      description: '复选框是否处于不确定状态（部分选中）'
    },
    disabled: {
      control: 'boolean',
      description: '复选框是否被禁用'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '复选框的尺寸'
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'success', 'warning', 'danger'],
      description: '复选框的样式变体'
    },
    label: {
      control: 'text',
      description: '复选框的标签文本'
    },
    description: {
      control: 'text',
      description: '复选框的描述文本'
    },
    required: {
      control: 'boolean',
      description: '复选框是否必填'
    },
    readOnly: {
      control: 'boolean',
      description: '复选框是否只读'
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

// 基础用法
export const Default: Story = {
  args: {
    label: '接受条款和条件'
  }
};

// 带描述
export const WithDescription: Story = {
  args: {
    label: '接收营销邮件',
    description: '我们将向您发送产品更新和促销信息'
  }
};

// 不同尺寸
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
      <Checkbox size="sm" label="小尺寸复选框" />
      <Checkbox size="md" label="中等尺寸复选框" />
      <Checkbox size="lg" label="大尺寸复选框" />
    </div>
  )
};

// 不同变体
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
      <Checkbox variant="default" label="默认变体" checked />
      <Checkbox variant="primary" label="主要变体" checked />
      <Checkbox variant="success" label="成功变体" checked />
      <Checkbox variant="warning" label="警告变体" checked />
      <Checkbox variant="danger" label="危险变体" checked />
    </div>
  )
};

// 不确定状态
export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    label: '部分选中状态'
  }
};

// 禁用状态
export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
      <Checkbox disabled label="禁用的未选中复选框" />
      <Checkbox disabled checked label="禁用的已选中复选框" />
      <Checkbox disabled indeterminate label="禁用的不确定复选框" />
    </div>
  )
};

// 只读状态
export const ReadOnly: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
      <Checkbox readOnly label="只读的未选中复选框" />
      <Checkbox readOnly checked label="只读的已选中复选框" />
      <Checkbox readOnly indeterminate label="只读的不确定复选框" />
    </div>
  )
};

// 必填状态
export const Required: Story = {
  args: {
    required: true,
    label: '必填复选框'
  }
};

// 受控组件示例
export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    
    return (
      <Checkbox
        checked={checked}
        onChange={(checked) => setChecked(checked)}
        label="受控复选框"
        description="点击标签或复选框来切换状态"
      />
    );
  }
};

// 表单示例
export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      terms: false,
      marketing: false,
      notifications: false
    });

    const handleChange = (name: string, checked: boolean) => {
      setFormData(prev => ({ ...prev, [name]: checked }));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '300px' }}>
        <h3>注册表单</h3>
        
        <Checkbox
          name="terms"
          checked={formData.terms}
          onChange={(checked) => handleChange('terms', checked)}
          label="我同意服务条款和隐私政策"
          required
        />
        
        <Checkbox
          name="marketing"
          checked={formData.marketing}
          onChange={(checked) => handleChange('marketing', checked)}
          label="接收营销邮件"
          description="我们将向您发送产品更新和促销信息"
        />
        
        <Checkbox
          name="notifications"
          checked={formData.notifications}
          onChange={(checked) => handleChange('notifications', checked)}
          label="接收推送通知"
          description="及时获取重要更新和消息"
        />
        
        <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f3f4f6', borderRadius: '0.5rem' }}>
          <strong>表单数据：</strong>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      </div>
    );
  }
};

// 嵌套复选框示例
export const NestedCheckboxes: Story = {
  render: () => {
    const [parentChecked, setParentChecked] = useState(false);
    const [children, setChildren] = useState({
      child1: false,
      child2: false,
      child3: false
    });

    const handleParentChange = (checked: boolean) => {
      setParentChecked(checked);
      setChildren({
        child1: checked,
        child2: checked,
        child3: checked
      });
    };

    const handleChildChange = (name: string, checked: boolean) => {
      const newChildren = { ...children, [name]: checked };
      setChildren(newChildren);
      
      // 检查是否所有子项都被选中
      const allChecked = Object.values(newChildren).every(Boolean);
      setParentChecked(allChecked);
    };

    const isIndeterminate = !parentChecked && Object.values(children).some(Boolean);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '300px' }}>
        <h3>权限设置</h3>
        
        <Checkbox
          checked={parentChecked}
          indeterminate={isIndeterminate}
          onChange={(checked) => handleParentChange(checked)}
          label="所有权限"
          variant="primary"
        />
        
        <div style={{ marginLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Checkbox
            name="child1"
            checked={children.child1}
            onChange={(checked) => handleChildChange('child1', checked)}
            label="读取权限"
          />
          
          <Checkbox
            name="child2"
            checked={children.child2}
            onChange={(checked) => handleChildChange('child2', checked)}
            label="写入权限"
          />
          
          <Checkbox
            name="child3"
            checked={children.child3}
            onChange={(checked) => handleChildChange('child3', checked)}
            label="删除权限"
          />
        </div>
      </div>
    );
  }
};

// 无障碍示例
export const Accessibility: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '300px' }}>
      <h3>无障碍功能演示</h3>
      
      <Checkbox
        id="accessible-checkbox"
        name="accessible"
        label="这是一个无障碍复选框"
        description="支持键盘导航、屏幕阅读器和焦点管理"
        required
      />
      
      <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f3f4f6', borderRadius: '0.5rem' }}>
        <h4>无障碍特性：</h4>
        <ul>
          <li>支持键盘导航（Tab、Enter、空格键）</li>
          <li>正确的ARIA属性</li>
          <li>焦点管理</li>
          <li>屏幕阅读器支持</li>
          <li>高对比度模式支持</li>
        </ul>
      </div>
    </div>
  )
}; 