import React, { useState } from 'react';
import { Button } from '@velvet-ui/core';
import {
  BasicDemo,
  SizeDemo,
  IconDemo,
  ShapeDemo,
  DisabledDemo,
  LoadingDemo,
  BlockDemo
} from './ButtonDocs/demos';
import './ButtonDocs.css';

interface DemoSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
  code?: string;
}

const DemoSection: React.FC<DemoSectionProps> = ({ title, description, children, code }) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="demo-section">
      <div className="demo-header">
        <h3 className="demo-title">{title}</h3>
        <p className="demo-description">{description}</p>
      </div>
      <div className="demo-content">
        <div className="demo-preview">
          {children}
        </div>
        {code && (
          <div className="demo-code">
            <div className="demo-code-header">
              <button 
                className="demo-code-toggle"
                onClick={() => setShowCode(!showCode)}
              >
                {showCode ? '隐藏代码' : '显示代码'}
              </button>
            </div>
            {showCode && (
              <pre className="demo-code-content">
                <code>{code}</code>
              </pre>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const ButtonDocs: React.FC = () => {
  return (
    <div className="button-docs">
      {/* 页面标题 */}
      <div className="docs-header">
        <h1 className="docs-title">Button 按钮</h1>
        <p className="docs-description">
          按钮用于开始一个即时操作。
        </p>
      </div>

      {/* 基础用法 */}
      <DemoSection
        title="基础按钮"
        description="按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。"
        code={`import { Button } from '@velvet-ui/core';

function App() {
  return (
    <div>
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="text">Text</Button>
      <Button type="link">Link</Button>
    </div>
  );
}`}
      >
        <BasicDemo />
      </DemoSection>

      {/* 按钮尺寸 */}
      <DemoSection
        title="按钮尺寸"
        description="按钮有大、中、小三种尺寸。通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。"
        code={`import { Button } from '@velvet-ui/core';

function App() {
  return (
    <div>
      <Button size="large">Large</Button>
      <Button>Default</Button>
      <Button size="small">Small</Button>
    </div>
  );
}`}
      >
        <SizeDemo />
      </DemoSection>

      {/* 图标按钮 */}
      <DemoSection
        title="图标按钮"
        description="当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。"
        code={`import { Button } from '@velvet-ui/core';

function App() {
      return (
      <div>
        <Button icon="→">Launch</Button>
        <Button icon="↑" iconRight="↓">Upload</Button>
        <Button icon="🔍" shape="circle" />
    </div>
  );
}`}
      >
        <IconDemo />
      </DemoSection>

      {/* 按钮形状 */}
      <DemoSection
        title="按钮形状"
        description="按钮有三种形状：默认、圆角、圆形。"
        code={`import { Button } from '@velvet-ui/core';

function App() {
  return (
    <div>
      <Button>Default</Button>
      <Button shape="round">Round</Button>
      <Button shape="circle" icon="🔍" />
    </div>
  );
}`}
      >
        <ShapeDemo />
      </DemoSection>

      {/* 禁用状态 */}
      <DemoSection
        title="禁用状态"
        description="添加 disabled 属性即可让按钮处于禁用状态。"
        code={`import { Button } from '@velvet-ui/core';

function App() {
  return (
    <div>
      <Button disabled>Disabled</Button>
      <Button type="primary" disabled>Disabled Primary</Button>
    </div>
  );
}`}
      >
        <DisabledDemo />
      </DemoSection>

      {/* 加载中状态 */}
      <DemoSection
        title="加载中状态"
        description="添加 loading 属性即可让按钮处于加载状态，此时按钮不可点击。"
        code={`import { Button } from '@velvet-ui/core';

function App() {
  return (
    <div>
      <Button loading>Loading</Button>
      <Button type="primary" loading>Loading Primary</Button>
    </div>
  );
}`}
      >
        <LoadingDemo />
      </DemoSection>

      {/* 块级按钮 */}
      <DemoSection
        title="块级按钮"
        description="block 属性将使按钮适合其父宽度。"
        code={`import { Button } from '@velvet-ui/core';

function App() {
  return (
    <div style={{ width: '300px' }}>
      <Button block style={{ marginBottom: '8px' }}>
        Block Button
      </Button>
      <Button type="primary" block>
        Block Primary Button
      </Button>
    </div>
  );
}`}
      >
        <BlockDemo />
      </DemoSection>

      {/* API 文档 */}
      <div className="api-section">
        <h2 className="api-title">API</h2>
        <div className="api-table">
          <table>
            <thead>
              <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>type</td>
                <td>按钮类型</td>
                <td><code>'default' | 'primary' | 'dashed' | 'text' | 'link'</code></td>
                <td><code>'default'</code></td>
              </tr>
              <tr>
                <td>size</td>
                <td>按钮尺寸</td>
                <td><code>'small' | 'middle' | 'large'</code></td>
                <td><code>'middle'</code></td>
              </tr>
              <tr>
                <td>shape</td>
                <td>按钮形状</td>
                <td><code>'default' | 'circle' | 'round'</code></td>
                <td><code>'default'</code></td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>是否禁用</td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
              </tr>
              <tr>
                <td>loading</td>
                <td>是否加载中</td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
              </tr>
              <tr>
                <td>block</td>
                <td>是否为块级元素</td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
              </tr>
              <tr>
                <td>icon</td>
                <td>图标（显示在文字前面）</td>
                <td><code>ReactNode</code></td>
                <td>-</td>
              </tr>
              <tr>
                <td>iconRight</td>
                <td>右侧图标（显示在文字后面）</td>
                <td><code>ReactNode</code></td>
                <td>-</td>
              </tr>
              <tr>
                <td>htmlType</td>
                <td>HTML 按钮类型</td>
                <td><code>'button' | 'submit' | 'reset'</code></td>
                <td><code>'button'</code></td>
              </tr>
              <tr>
                <td>onClick</td>
                <td>点击事件</td>
                <td><code>(event: React.MouseEvent) =&gt; void</code></td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ButtonDocs; 