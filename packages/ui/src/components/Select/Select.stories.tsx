import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Select, SelectOption } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Select 选择器组件，支持单选、搜索、清除等功能。'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['outline', 'filled', 'underline'],
      description: '选择器变体'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '选择器尺寸'
    },
    disabled: {
      control: { type: 'boolean' },
      description: '是否禁用'
    },
    readOnly: {
      control: { type: 'boolean' },
      description: '是否只读'
    },
    required: {
      control: { type: 'boolean' },
      description: '是否必填'
    },
    searchable: {
      control: { type: 'boolean' },
      description: '是否支持搜索'
    },
    allowClear: {
      control: { type: 'boolean' },
      description: '是否支持清除'
    },
    showArrow: {
      control: { type: 'boolean' },
      description: '是否显示下拉箭头'
    },
    loading: {
      control: { type: 'boolean' },
      description: '加载状态'
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

// 示例数据
const sampleOptions: SelectOption[] = [
  { value: 'beijing', label: '北京' },
  { value: 'shanghai', label: '上海' },
  { value: 'guangzhou', label: '广州' },
  { value: 'shenzhen', label: '深圳' },
  { value: 'hangzhou', label: '杭州' },
  { value: 'nanjing', label: '南京' },
  { value: 'wuhan', label: '武汉' },
  { value: 'chengdu', label: '成都' },
  { value: 'xian', label: '西安' },
  { value: 'tianjin', label: '天津' }
];

const disabledOptions: SelectOption[] = [
  { value: 'option1', label: '选项1' },
  { value: 'option2', label: '选项2', disabled: true },
  { value: 'option3', label: '选项3' },
  { value: 'option4', label: '选项4', disabled: true }
];

// 基础用法
export const Basic: Story = {
  args: {
    placeholder: '请选择城市',
    options: sampleOptions
  }
};

// 带标签和帮助文本
export const WithLabel: Story = {
  args: {
    label: '选择城市',
    helpText: '请选择您所在的城市',
    placeholder: '请选择城市',
    options: sampleOptions
  }
};

// 带错误状态
export const WithError: Story = {
  args: {
    label: '选择城市',
    errorText: '请选择一个城市',
    placeholder: '请选择城市',
    options: sampleOptions
  }
};

// 必填字段
export const Required: Story = {
  args: {
    label: '选择城市',
    required: true,
    helpText: '此字段为必填项',
    placeholder: '请选择城市',
    options: sampleOptions
  }
};

// 不同变体
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Select
        variant="outline"
        placeholder="Outline 变体"
        options={sampleOptions}
      />
      <Select
        variant="filled"
        placeholder="Filled 变体"
        options={sampleOptions}
      />
      <Select
        variant="underline"
        placeholder="Underline 变体"
        options={sampleOptions}
      />
    </div>
  )
};

// 不同尺寸
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Select
        size="sm"
        placeholder="小尺寸"
        options={sampleOptions}
      />
      <Select
        size="md"
        placeholder="中等尺寸"
        options={sampleOptions}
      />
      <Select
        size="lg"
        placeholder="大尺寸"
        options={sampleOptions}
      />
    </div>
  )
};

// 可搜索
export const Searchable: Story = {
  args: {
    searchable: true,
    placeholder: '搜索并选择城市',
    options: sampleOptions
  }
};

// 可清除
export const Clearable: Story = {
  args: {
    allowClear: true,
    placeholder: '选择城市（可清除）',
    options: sampleOptions
  }
};

// 禁用状态
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: '禁用状态',
    options: sampleOptions
  }
};

// 只读状态
export const ReadOnly: Story = {
  args: {
    readOnly: true,
    value: 'beijing',
    placeholder: '只读状态',
    options: sampleOptions
  }
};

// 包含禁用选项
export const WithDisabledOptions: Story = {
  args: {
    placeholder: '包含禁用选项',
    options: disabledOptions
  }
};

// 加载状态
export const Loading: Story = {
  args: {
    loading: true,
    loadingText: '加载中...',
    placeholder: '加载状态',
    options: []
  }
};

// 空选项
export const WithEmptyOption: Story = {
  args: {
    showEmptyOption: true,
    emptyOptionText: '请选择',
    placeholder: '包含空选项',
    options: sampleOptions
  }
};

// 受控组件示例
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<string | number | undefined>('beijing');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
        <Select
          value={value}
          onChange={(newValue) => {
            if (typeof newValue === 'string' || typeof newValue === 'number') {
              setValue(newValue);
            }
          }}
          placeholder="受控组件"
          options={sampleOptions}
        />
        <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          当前选择: {value}
        </div>
      </div>
    );
  }
};

// 复杂用法示例
export const Complex: Story = {
  render: () => {
    const [value, setValue] = useState<string | number | undefined>();
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' }}>
        <Select
          label="选择您喜欢的城市"
          required
          searchable
          allowClear
          showArrow
          value={value}
          onChange={(newValue) => {
            if (typeof newValue === 'string' || typeof newValue === 'number') {
              setValue(newValue);
            }
          }}
          placeholder="搜索并选择城市"
          options={sampleOptions}
          helpText="支持搜索功能，可以输入城市名称进行筛选"
        />
        
        {value && (
          <div style={{ 
            padding: '1rem', 
            backgroundColor: '#f3f4f6', 
            borderRadius: '0.375rem',
            fontSize: '0.875rem'
          }}>
            <strong>已选择:</strong> {sampleOptions.find(opt => opt.value === value)?.label}
          </div>
        )}
      </div>
    );
  }
};

// 表单集成示例
export const FormIntegration: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      city: '',
      country: ''
    });
    
    const countryOptions: SelectOption[] = [
      { value: 'china', label: '中国' },
      { value: 'usa', label: '美国' },
      { value: 'japan', label: '日本' },
      { value: 'uk', label: '英国' }
    ];
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' }}>
        <h3 style={{ margin: '0 0 1rem 0' }}>表单示例</h3>
        
        <Select
          label="国家"
          required
          value={formData.country}
          onChange={(value) => setFormData(prev => ({ ...prev, country: value as string }))}
          placeholder="请选择国家"
          options={countryOptions}
        />
        
        <Select
          label="城市"
          required
          searchable
          value={formData.city}
          onChange={(value) => {
            if (typeof value === 'string' || typeof value === 'number') {
              setFormData(prev => ({ ...prev, city: value as string }));
            }
          }}
          placeholder="请选择城市"
          options={sampleOptions}
          disabled={!formData.country}
          helpText={!formData.country ? '请先选择国家' : undefined}
        />
        
        <div style={{ 
          padding: '1rem', 
          backgroundColor: '#f3f4f6', 
          borderRadius: '0.375rem',
          fontSize: '0.875rem'
        }}>
          <strong>表单数据:</strong>
          <pre style={{ margin: '0.5rem 0 0 0', fontSize: '0.75rem' }}>
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </div>
    );
  }
}; 