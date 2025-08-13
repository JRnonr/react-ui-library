# Checkbox 复选框组件

一个功能完整的复选框组件，支持多种状态、尺寸和样式变体。

## 特性

- ✅ 支持受控和非受控模式
- ✅ 支持不确定状态（部分选中）
- ✅ 多种尺寸：sm、md、lg
- ✅ 多种样式变体：default、primary、success、warning、danger
- ✅ 完整的无障碍支持
- ✅ 键盘导航支持
- ✅ 支持描述文本
- ✅ 支持表单验证
- ✅ 支持只读和禁用状态
- ✅ 响应式设计
- ✅ 高对比度模式支持

## 基础用法

```tsx
import { Checkbox } from '@your-org/ui';

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      onChange={(checked, event) => setChecked(checked)}
      label="接受条款和条件"
    />
  );
}
```

## 不同状态

### 基础状态

```tsx
<Checkbox label="基础复选框" />
<Checkbox label="已选中的复选框" checked />
<Checkbox label="不确定状态" indeterminate />
```

### 禁用和只读状态

```tsx
<Checkbox disabled label="禁用的复选框" />
<Checkbox readOnly label="只读复选框" />
<Checkbox required label="必填复选框" />
```

## 尺寸变体

```tsx
<Checkbox size="sm" label="小尺寸" />
<Checkbox size="md" label="中等尺寸" />
<Checkbox size="lg" label="大尺寸" />
```

## 样式变体

```tsx
<Checkbox variant="default" label="默认变体" checked />
<Checkbox variant="primary" label="主要变体" checked />
<Checkbox variant="success" label="成功变体" checked />
<Checkbox variant="warning" label="警告变体" checked />
<Checkbox variant="danger" label="危险变体" checked />
```

## 带描述文本

```tsx
<Checkbox
  label="接收营销邮件"
  description="我们将向您发送产品更新和促销信息"
/>
```

## 表单集成

```tsx
function RegistrationForm() {
  const [formData, setFormData] = useState({
    terms: false,
    marketing: false
  });

  const handleChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  return (
    <form>
      <Checkbox
        name="terms"
        checked={formData.terms}
        onChange={(checked) => handleChange('terms', checked)}
        label="我同意服务条款"
        required
      />
      
      <Checkbox
        name="marketing"
        checked={formData.marketing}
        onChange={(checked) => handleChange('marketing', checked)}
        label="接收营销邮件"
        description="产品更新和促销信息"
      />
    </form>
  );
}
```

## 嵌套复选框

```tsx
function PermissionSettings() {
  const [permissions, setPermissions] = useState({
    read: false,
    write: false,
    delete: false
  });

  const allChecked = Object.values(permissions).every(Boolean);
  const someChecked = Object.values(permissions).some(Boolean);

  const handleAllChange = (checked: boolean) => {
    setPermissions({
      read: checked,
      write: checked,
      delete: checked
    });
  };

  return (
    <div>
      <Checkbox
        checked={allChecked}
        indeterminate={someChecked && !allChecked}
        onChange={handleAllChange}
        label="所有权限"
        variant="primary"
      />
      
      <div style={{ marginLeft: '2rem' }}>
        <Checkbox
          checked={permissions.read}
          onChange={(checked) => setPermissions(prev => ({ ...prev, read: checked }))}
          label="读取权限"
        />
        <Checkbox
          checked={permissions.write}
          onChange={(checked) => setPermissions(prev => ({ ...prev, write: checked }))}
          label="写入权限"
        />
        <Checkbox
          checked={permissions.delete}
          onChange={(checked) => setPermissions(prev => ({ ...prev, delete: checked }))}
          label="删除权限"
        />
      </div>
    </div>
  );
}
```

## API 参考

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `checked` | `boolean` | `false` | 复选框是否被选中 |
| `indeterminate` | `boolean` | `false` | 复选框是否处于不确定状态 |
| `disabled` | `boolean` | `false` | 复选框是否被禁用 |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 复选框的尺寸 |
| `variant` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger'` | `'default'` | 复选框的样式变体 |
| `label` | `string` | - | 复选框的标签文本 |
| `description` | `string` | - | 复选框的描述文本 |
| `value` | `string \| number` | - | 复选框的值 |
| `name` | `string` | - | 复选框的名称（用于表单） |
| `id` | `string` | - | 复选框的ID |
| `required` | `boolean` | `false` | 复选框是否必填 |
| `readOnly` | `boolean` | `false` | 复选框是否只读 |
| `onChange` | `(checked: boolean, event: ChangeEvent<HTMLInputElement>) => void` | - | 状态变化回调 |
| `onFocus` | `(event: FocusEvent<HTMLInputElement>) => void` | - | 获得焦点回调 |
| `onBlur` | `(event: FocusEvent<HTMLInputElement>) => void` | - | 失去焦点回调 |
| `className` | `string` | - | 自定义CSS类名 |
| `style` | `CSSProperties` | - | 自定义样式 |
| `children` | `ReactNode` | - | 子元素（可作为标签使用） |

### 事件

#### onChange

当复选框状态改变时触发。

```tsx
onChange={(checked: boolean, event: ChangeEvent<HTMLInputElement>) => {
  console.log('复选框状态:', checked);
  console.log('事件对象:', event);
}}
```

#### onFocus / onBlur

当复选框获得或失去焦点时触发。

```tsx
onFocus={(event: FocusEvent<HTMLInputElement>) => {
  console.log('获得焦点');
}}

onBlur={(event: FocusEvent<HTMLInputElement>) => {
  console.log('失去焦点');
}}
```

## 无障碍支持

- 支持键盘导航（Tab、Enter、空格键）
- 正确的ARIA属性（aria-checked、aria-describedby等）
- 焦点管理
- 屏幕阅读器支持
- 高对比度模式支持

## 键盘快捷键

| 按键 | 功能 |
|------|------|
| `Tab` | 移动到下一个可聚焦元素 |
| `Enter` | 切换复选框状态 |
| `Space` | 切换复选框状态 |

## 样式定制

组件使用CSS自定义属性，可以通过CSS变量进行主题定制：

```css
.checkbox {
  --checkbox-border-color: #d1d5db;
  --checkbox-checked-color: #3b82f6;
  --checkbox-hover-color: #9ca3af;
}
```

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 注意事项

1. 当使用`indeterminate`属性时，`checked`属性会被忽略
2. `required`属性只在表单提交时生效，不会阻止用户交互
3. 组件会自动生成唯一的ID，除非通过`id`属性指定
4. 支持ref转发，可以获取原生input元素的引用 