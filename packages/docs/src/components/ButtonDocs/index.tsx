import React, { useState, useEffect } from 'react';
import hljs from 'highlight.js';
import typescript from 'highlight.js/lib/languages/typescript';
import 'highlight.js/styles/github.css';
import './index.css';
import BasicDemo from './demos/basic';
import DisabledDemo from './demos/disabled';

// 注册 TypeScript 语言
hljs.registerLanguage('typescript', typescript);

interface DemoSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
  code?: string;
}

const DemoSection: React.FC<DemoSectionProps> = ({ title, description, children, code }) => {
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    if (showCode && code) {
      // 使用 requestAnimationFrame 确保 DOM 已更新
      requestAnimationFrame(() => {
        hljs.highlightAll();
      });
    }
  }, [showCode, code]);

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
                <code className="language-typescript">{code}</code>
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
          基础按钮组件，用于开始一个即时操作。
        </p>
      </div>

      {/* 基础用法 */}
      <DemoSection
        title="基础按钮"
        description="基础按钮组件，支持多种类型和状态。"
        code={`import React from 'react';
import { Button } from '@velvet-ui/core';

export default function ButtonExample() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button type="default">
        默认按钮
      </Button>
      <Button type="primary">
        主要按钮
      </Button>
      <Button type="dashed">
        虚线按钮
      </Button>
      <Button type="text">
        文本按钮
      </Button>
      <Button type="link">
        链接按钮
      </Button>
    </div>
  );
}`}
      >
        <BasicDemo />
      </DemoSection>

      {/* 禁用状态 */}
      <DemoSection
        title="禁用状态"
        description="添加 disabled 属性即可禁用按钮。"
        code={`import React from 'react';
import { Button } from '@velvet-ui/core';

export default function DisabledButtonExample() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button disabled>
        默认禁用
      </Button>
      <Button type="primary" disabled>
        主要禁用
      </Button>
      <Button type="dashed" disabled>
        虚线禁用
      </Button>
      <Button type="link" disabled>
        链接禁用
      </Button>
      <Button type="text" disabled>
        文本禁用
      </Button>
    </div>
  );
}`}
      >
        <DisabledDemo />
      </DemoSection>

      {/* API 文档 */}
      <div className="api-section">
        <h2 className="api-title">API</h2>
        <div className="api-table">
          <table>
            <thead>
              <tr>
                <th>属性</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>type</td>
                <td>按钮类型</td>
                <td><code>'default' | 'primary' | 'dashed' | 'link' | 'text'</code></td>
                <td><code>'default'</code></td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>是否禁用</td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
              </tr>
              <tr>
                <td>onClick</td>
                <td>点击事件的回调函数</td>
                <td><code>(event: React.MouseEvent&lt;HTMLButtonElement&gt;) =&gt; void</code></td>
                <td><code>-</code></td>
              </tr>
              <tr>
                <td>children</td>
                <td>按钮内部的子节点</td>
                <td><code>ReactNode</code></td>
                <td><code>-</code></td>
              </tr>
              <tr>
                <td>htmlType</td>
                <td>原生按钮类型</td>
                <td><code>'submit' | 'reset' | 'button'</code></td>
                <td><code>'button'</code></td>
              </tr>
              <tr>
                <td>className</td>
                <td>自定义类名</td>
                <td><code>string</code></td>
                <td><code>-</code></td>
              </tr>
              <tr>
                <td>style</td>
                <td>自定义样式</td>
                <td><code>React.CSSProperties</code></td>
                <td><code>-</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ButtonDocs; 