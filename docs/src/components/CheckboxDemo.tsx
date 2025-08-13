import React, { useState } from 'react';
import { Checkbox } from '../../../packages/ui/src';

export const CheckboxDemo: React.FC = () => {
  const [formData, setFormData] = useState({
    terms: false,
    marketing: false,
    notifications: false
  });

  const [permissions, setPermissions] = useState({
    read: false,
    write: false,
    delete: false
  });

  const handleFormChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handlePermissionChange = (name: string, checked: boolean) => {
    setPermissions(prev => ({ ...prev, [name]: checked }));
  };

  const allPermissionsChecked = Object.values(permissions).every(Boolean);
  const somePermissionsChecked = Object.values(permissions).some(Boolean);

  const handleAllPermissions = (checked: boolean) => {
    setPermissions({
      read: checked,
      write: checked,
      delete: checked
    });
  };

  return (
    <div className="checkbox-demo">
      <h2>Checkbox 复选框组件 - 增强交互版</h2>
      
      <section>
        <h3>🎯 交互功能演示</h3>
        <div className="demo-row">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '300px' }}>
            <div style={{ padding: '1rem', backgroundColor: '#f3f4f6', borderRadius: '0.5rem' }}>
              <h4>点击交互说明：</h4>
              <ul>
                <li>✅ 点击复选框：切换选中/未选中状态</li>
                <li>✅ 点击标签：同样可以切换状态</li>
                <li>✅ 键盘导航：Tab、Enter、空格键</li>
                <li>✅ 触摸支持：移动端触摸反馈</li>
                <li>✅ 视觉反馈：悬停、点击动画效果</li>
              </ul>
            </div>
            
            <Checkbox label="试试点击我！" />
            <Checkbox label="点击标签也可以！" />
            <Checkbox label="键盘导航：Tab到这里，按Enter或空格" />
          </div>
        </div>
      </section>
      
      <section>
        <h3>基础用法</h3>
        <div className="demo-row">
          <Checkbox label="基础复选框" />
          <Checkbox label="已选中的复选框" checked />
          <Checkbox label="不确定状态" indeterminate />
        </div>
      </section>

      <section>
        <h3>不同尺寸</h3>
        <div className="demo-row">
          <Checkbox size="sm" label="小尺寸" />
          <Checkbox size="md" label="中等尺寸" />
          <Checkbox size="lg" label="大尺寸" />
        </div>
      </section>

      <section>
        <h3>不同变体</h3>
        <div className="demo-row">
          <Checkbox variant="default" label="默认变体" checked />
          <Checkbox variant="primary" label="主要变体" checked />
          <Checkbox variant="success" label="成功变体" checked />
          <Checkbox variant="warning" label="警告变体" checked />
          <Checkbox variant="danger" label="危险变体" checked />
        </div>
      </section>

      <section>
        <h3>状态示例</h3>
        <div className="demo-row">
          <Checkbox disabled label="禁用的复选框" />
          <Checkbox disabled checked label="禁用的已选中复选框" />
          <Checkbox readOnly label="只读复选框" />
          <Checkbox required label="必填复选框" />
        </div>
      </section>

      <section>
        <h3>带描述的复选框</h3>
        <div className="demo-row">
          <Checkbox
            label="接收营销邮件"
            description="我们将向您发送产品更新和促销信息"
          />
          <Checkbox
            label="接收推送通知"
            description="及时获取重要更新和消息"
          />
        </div>
      </section>

      <section>
        <h3>表单示例</h3>
        <div className="form-example">
          <Checkbox
            name="terms"
            checked={formData.terms}
            onChange={(checked) => handleFormChange('terms', checked)}
            label="我同意服务条款和隐私政策"
            required
          />
          
          <Checkbox
            name="marketing"
            checked={formData.marketing}
            onChange={(checked) => handleFormChange('marketing', checked)}
            label="接收营销邮件"
            description="我们将向您发送产品更新和促销信息"
          />
          
          <Checkbox
            name="notifications"
            checked={formData.notifications}
            onChange={(checked) => handleFormChange('notifications', checked)}
            label="接收推送通知"
            description="及时获取重要更新和消息"
          />
          
          <div className="form-data">
            <strong>表单数据：</strong>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
          </div>
        </div>
      </section>

      <section>
        <h3>嵌套复选框示例</h3>
        <div className="nested-example">
          <Checkbox
            checked={allPermissionsChecked}
            indeterminate={somePermissionsChecked && !allPermissionsChecked}
            onChange={(checked) => handleAllPermissions(checked)}
            label="所有权限"
            variant="primary"
          />
          
          <div className="nested-children">
            <Checkbox
              name="read"
              checked={permissions.read}
              onChange={(checked) => handlePermissionChange('read', checked)}
              label="读取权限"
            />
            
            <Checkbox
              name="write"
              checked={permissions.write}
              onChange={(checked) => handlePermissionChange('write', checked)}
              label="写入权限"
            />
            
            <Checkbox
              name="delete"
              checked={permissions.delete}
              onChange={(checked) => handlePermissionChange('delete', checked)}
              label="删除权限"
            />
          </div>
        </div>
      </section>

      <section>
        <h3>无障碍特性</h3>
        <div className="accessibility-info">
          <Checkbox
            id="accessible-checkbox"
            name="accessible"
            label="这是一个无障碍复选框"
            description="支持键盘导航、屏幕阅读器和焦点管理"
            required
          />
          
          <div className="accessibility-features">
            <h4>无障碍特性：</h4>
            <ul>
              <li>✅ 支持键盘导航（Tab、Enter、空格键）</li>
              <li>✅ 正确的ARIA属性</li>
              <li>✅ 焦点管理</li>
              <li>✅ 屏幕阅读器支持</li>
              <li>✅ 高对比度模式支持</li>
              <li>✅ 触摸设备优化</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}; 