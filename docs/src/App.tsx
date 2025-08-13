import { useState } from 'react';
import { Button, ChatInterface, Input, AIMessage, AILoading, AIPromptInput, Select, Checkbox } from '@velvet/ui';
import { CodeBlock } from './components';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('getting-started');
  const [activeComponent, setActiveComponent] = useState('button');
  const [codeExpanded, setCodeExpanded] = useState({
    basic: false,
    size: false,
    state: false,
    block: false,
    chatBasic: false,
    chatCustom: false,
    aiMessageBasic: false,
    aiMessageMarkdown: false,
    aiMessageStatus: false,
    aiMessageAvatar: false,
    aiMessageCode: false,
    aiMessageLong: false,
    aiMessageDisabled: false,
    aiMessageResponsive: false,
    aiLoadingBasic: false,
    aiLoadingTypes: false,
    aiLoadingProgress: false,
    aiPromptInputBasic: false,
    aiPromptInputSuggestions: false,
    aiPromptInputHistory: false,
    aiPromptInputTemplates: false,
    aiPromptInputShortcuts: false,
    aiPromptInputFull: false,
    selectBasic: false,
    selectLabel: false,
    selectSearchable: false,
    selectVariants: false,
    selectControlled: false
  });

  const [selectedCity, setSelectedCity] = useState<string>('');

  // 快速上手页面
  const renderGettingStarted = () => (
    <div className="content-section">
      <h1 className="content-title">快速上手</h1>
      <p className="content-description">Velvet UI 是一个现代化的 React 组件库，提供丰富的组件和完整的设计系统。</p>
      
      <div className="getting-started-demo">
        <h2>安装使用</h2>
        <CodeBlock
          code={`# 使用 npm 安装
npm install @velvet/ui

# 使用 yarn 安装
yarn add @velvet/ui

# 使用 pnpm 安装
pnpm add @velvet/ui`}
          language="bash"
          title="安装命令"
          expanded={true}
        />

        <h2 style={{ marginTop: 24 }}>引入样式</h2>
        <p className="content-description">在应用入口文件中全局引入一次样式文件。</p>
        <CodeBlock
          code={`// main.tsx 或 _app.tsx
import '@velvet/ui/style.css';`}
          language="typescript"
          title="全局样式引入"
          expanded={true}
        />

        <h2 style={{ marginTop: 24 }}>基础用法</h2>
        <CodeBlock
          code={`import React from 'react';
import '@velvet/ui/style.css';
import { Button, Checkbox, Input, Select } from '@velvet/ui';

export default function App() {
  return (
    <div style={{ padding: 16, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Button variant="primary">按钮</Button>
      <Checkbox label="我已阅读并同意" />
      <Input placeholder="请输入" style={{ width: 200 }} />
      <Select placeholder="请选择" options={[{ value: '1', label: '选项1' }]} />
    </div>
  );
}`}
          language="tsx"
          title="基础用法示例"
          expanded={true}
        />

        <h2 style={{ marginTop: 24 }}>按需导入</h2>
        <p className="content-description">仅引入使用到的组件，支持 tree-shaking；类型也可按需导入。</p>
        <CodeBlock
          code={`import { Button } from '@velvet/ui';

// 仅打包使用到的组件（支持 tree-shaking）
export function Demo() {
  return <Button variant="primary">提交</Button>;
}

// 类型按需导入
import type { ButtonOwnProps } from '@velvet/ui';`}
          language="tsx"
          title="按需导入示例"
          expanded={true}
        />

        <h2 style={{ marginTop: 24 }}>在 Next.js 中使用</h2>
        <p className="content-description">组件依赖浏览器能力，请在客户端组件中使用；样式需在全局引入。</p>
        <CodeBlock
          code={`// app/layout.tsx（App Router）
import '@velvet/ui/style.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}`}
          language="tsx"
          title="App Router: 全局样式（app/layout.tsx）"
          expanded={true}
        />
        <CodeBlock
          code={`// app/page.tsx（App Router）
"use client";
import { Button } from '@velvet/ui';

export default function Page() {
  return <Button variant="primary">Hello</Button>;
}`}
          language="tsx"
          title="App Router: 客户端页面（app/page.tsx）"
          expanded={true}
        />
        <CodeBlock
          code={`// pages/_app.tsx（Pages Router）
import '@velvet/ui/style.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}`}
          language="tsx"
          title="Pages Router: 全局样式（pages/_app.tsx）"
          expanded={true}
        />
        <CodeBlock
          code={`// 可选：按需禁用 SSR 渲染指定组件
import dynamic from 'next/dynamic';

const ClientButton = dynamic(() => import('@velvet/ui').then(m => m.Button), {
  ssr: false,
});

export default function Page() {
  return <ClientButton>Hello</ClientButton>;
}`}
          language="tsx"
          title="按需禁用 SSR（可选）"
          expanded={true}
        />
      </div>
    </div>
  );

  // 组件页面
  const renderComponents = () => (
    <div className="content-section">
      {/* <h1 className="content-title">组件</h1> */}
      
      <div className="components-layout">
        {/* 左侧导航 */}
        <aside className="components-sidebar">
          <div className="sidebar-section">
            <h2 className="sidebar-title">组件</h2>
            <ul className="sidebar-menu">
              <li className="sidebar-item">
                <a 
                  className={activeComponent === 'button' ? 'active' : ''}
                  onClick={() => setActiveComponent('button')}
                >
                  Button 按钮
                </a>
              </li>
              <li className="sidebar-item">
                <a 
                  className={activeComponent === 'input' ? 'active' : ''}
                  onClick={() => setActiveComponent('input')}
                >
                  Input 输入框
                </a>
              </li>
              <li className="sidebar-item">
                <a 
                  className={activeComponent === 'select' ? 'active' : ''}
                  onClick={() => setActiveComponent('select')}
                >
                  Select 选择器
                </a>
              </li>
              <li className="sidebar-item">
                <a 
                  className={activeComponent === 'checkbox' ? 'active' : ''}
                  onClick={() => setActiveComponent('checkbox')}
                >
                  Checkbox 复选框
                </a>
              </li>
              <li className="sidebar-item">
                <a 
                  className={activeComponent === 'chat' ? 'active' : ''}
                  onClick={() => setActiveComponent('chat')}
                >
                  ChatInterface 聊天界面
                </a>
              </li>
              <li className="sidebar-item">
                <a 
                  className={activeComponent === 'ai-message' ? 'active' : ''}
                  onClick={() => setActiveComponent('ai-message')}
                >
                  AIMessage AI消息
                </a>
              </li>
              <li className="sidebar-item">
                <a 
                  className={activeComponent === 'ai-loading' ? 'active' : ''}
                  onClick={() => setActiveComponent('ai-loading')}
                >
                  AILoading AI加载
                </a>
              </li>
              <li className="sidebar-item">
                <a 
                  className={activeComponent === 'ai-prompt-input' ? 'active' : ''}
                  onClick={() => setActiveComponent('ai-prompt-input')}
                >
                  AIPromptInput AI提示输入
                </a>
              </li>
            </ul>
          </div>
        </aside>

        {/* 右侧内容区域 */}
        <main className="components-content">
          {activeComponent === 'button' && (
            <div className="component-section">
              <h3 className="component-title">Button 按钮</h3>
              <p className="component-description">按钮组件支持多种样式变体和尺寸。</p>
              
              <div className="component-demo">
                <div className="demo-section">
                  <h4 className="demo-title">基础用法</h4>
                  <div className="demo-row">
                    <Button>默认按钮</Button>
                    <Button variant="primary">主要按钮</Button>
                    <Button variant="secondary">次要按钮</Button>
                    <Button variant="outline">描边按钮</Button>
                    <Button variant="ghost">幽灵按钮</Button>
                    <Button variant="danger">危险按钮</Button>
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import React from 'react';
import { Button } from '@velvet/ui';

const App: React.FC = () => (
  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
    <Button>默认按钮</Button>
    <Button variant="primary">主要按钮</Button>
    <Button variant="secondary">次要按钮</Button>
    <Button variant="outline">描边按钮</Button>
    <Button variant="ghost">幽灵按钮</Button>
    <Button variant="danger">危险按钮</Button>
  </div>
);

export default App;`}
                      language="typescript"
                      title="代码示例"
                      expanded={codeExpanded.basic}
                      onToggle={() => setCodeExpanded(prev => ({...prev, basic: !prev.basic}))}
                    />
                  </div>
                </div>
                
                <div className="demo-section">
                  <h4 className="demo-title">尺寸变体</h4>
                  <div className="demo-row">
                    <Button size="sm">小按钮</Button>
                    <Button size="md">中按钮</Button>
                    <Button size="lg">大按钮</Button>
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import React from 'react';
import { Button } from '@velvet/ui';

const App: React.FC = () => (
  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
    <Button size="sm">小按钮</Button>
    <Button size="md">中按钮</Button>
    <Button size="lg">大按钮</Button>
  </div>
);

export default App;`}
                      language="typescript"
                      title="代码示例"
                      expanded={codeExpanded.size}
                      onToggle={() => setCodeExpanded(prev => ({...prev, size: !prev.size}))}
                    />
                  </div>
                </div>
                
                <div className="demo-section">
                  <h4 className="demo-title">状态变体</h4>
                  <div className="demo-row">
                    <Button disabled>禁用按钮</Button>
                    <Button loading>加载中</Button>
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import React from 'react';
import { Button } from '@velvet/ui';

const App: React.FC = () => (
  <div style={{ display: 'flex', gap: '8px' }}>
    <Button disabled>禁用按钮</Button>
    <Button loading>加载中</Button>
  </div>
);

export default App;`}
                      language="typescript"
                      title="代码示例"
                      expanded={codeExpanded.state}
                      onToggle={() => setCodeExpanded(prev => ({...prev, state: !prev.state}))}
                    />
                  </div>
                </div>
                
                <div className="demo-section">
                  <h4 className="demo-title">块级按钮</h4>
                  <div className="demo-row">
                    <Button block>块级按钮</Button>
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import React from 'react';
import { Button } from '@velvet/ui';

const App: React.FC = () => (
  <div style={{ width: '100%' }}>
    <Button block>块级按钮</Button>
  </div>
);

export default App;`}
                      language="typescript"
                      title="代码示例"
                      expanded={codeExpanded.block}
                      onToggle={() => setCodeExpanded(prev => ({...prev, block: !prev.block}))}
                    />
                  </div>
                </div>
                

              </div>
              
              <div className="component-api">
                <h4 className="api-title">API</h4>
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
                        <td>variant</td>
                        <td>按钮样式变体</td>
                        <td><code>'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'</code></td>
                        <td><code>'default'</code></td>
                      </tr>
                      <tr>
                        <td>size</td>
                        <td>按钮尺寸</td>
                        <td><code>'sm' | 'md' | 'lg'</code></td>
                        <td><code>'md'</code></td>
                      </tr>
                      <tr>
                        <td>disabled</td>
                        <td>是否禁用</td>
                        <td><code>boolean</code></td>
                        <td><code>false</code></td>
                      </tr>
                      <tr>
                        <td>loading</td>
                        <td>是否显示加载状态</td>
                        <td><code>boolean</code></td>
                        <td><code>false</code></td>
                      </tr>
                      <tr>
                        <td>block</td>
                        <td>是否为块级按钮</td>
                        <td><code>boolean</code></td>
                        <td><code>false</code></td>
                      </tr>
                      <tr>
                        <td>onClick</td>
                        <td>点击事件回调</td>
                        <td><code>(event: React.MouseEvent) =&gt; void</code></td>
                        <td><code>-</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              

            </div>
          )}
          
          {activeComponent === 'input' && (
            <div className="component-section">
              <h3 className="component-title">Input 输入框</h3>
              <p className="component-description">功能丰富的输入框组件，支持多种类型、变体、尺寸和状态。</p>
              
              <div className="component-demo">
                <div className="demo-section">
                  <h4 className="demo-title">基础用法</h4>
                  <div className="demo-row">
                    <Input placeholder="基础输入框" />
                    <Input placeholder="带标签的输入框" label="用户名" />
                    <Input placeholder="必填输入框" label="邮箱" required />
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import React from 'react';
import { Input } from '@velvet/ui';

const App: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
    <Input placeholder="基础输入框" />
    <Input placeholder="带标签的输入框" label="用户名" />
    <Input placeholder="必填输入框" label="邮箱" required />
  </div>
);

export default App;`}
                      language="typescript"
                      title="代码示例"
                      expanded={codeExpanded.basic}
                      onToggle={() => setCodeExpanded(prev => ({...prev, basic: !prev.basic}))}
                    />
                  </div>
                </div>
                
                <div className="demo-section">
                  <h4 className="demo-title">不同变体</h4>
                  <div className="demo-row">
                    <Input label="Outline 变体" variant="outline" placeholder="默认变体" />
                    <Input label="Filled 变体" variant="filled" placeholder="填充变体" />
                    <Input label="Underline 变体" variant="underline" placeholder="下划线变体" />
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import React from 'react';
import { Input } from '@velvet/ui';

const App: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
    <Input label="Outline 变体" variant="outline" placeholder="默认变体" />
    <Input label="Filled 变体" variant="filled" placeholder="填充变体" />
    <Input label="Underline 变体" variant="underline" placeholder="下划线变体" />
  </div>
);

export default App;`}
                      language="typescript"
                      title="代码示例"
                      expanded={codeExpanded.size}
                      onToggle={() => setCodeExpanded(prev => ({...prev, size: !prev.size}))}
                    />
                  </div>
                </div>
                
                <div className="demo-section">
                  <h4 className="demo-title">不同尺寸</h4>
                  <div className="demo-row">
                    <Input label="Small 尺寸" size="sm" placeholder="小尺寸" />
                    <Input label="Medium 尺寸" size="md" placeholder="中尺寸" />
                    <Input label="Large 尺寸" size="lg" placeholder="大尺寸" />
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import React from 'react';
import { Input } from '@velvet/ui';

const App: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
    <Input label="Small 尺寸" size="sm" placeholder="小尺寸" />
    <Input label="Medium 尺寸" size="md" placeholder="中尺寸" />
    <Input label="Large 尺寸" size="lg" placeholder="大尺寸" />
  </div>
);

export default App;`}
                      language="typescript"
                      title="代码示例"
                      expanded={codeExpanded.state}
                      onToggle={() => setCodeExpanded(prev => ({...prev, state: !prev.state}))}
                    />
                  </div>
                </div>
                
                <div className="demo-section">
                  <h4 className="demo-title">不同状态</h4>
                  <div className="demo-row">
                    <Input label="正常状态" placeholder="正常状态" />
                    <Input label="禁用状态" placeholder="禁用状态" disabled />
                    <Input label="只读状态" placeholder="只读状态" readOnly value="只读内容" />
                    <Input label="错误状态" placeholder="错误状态" errorText="这是一个错误提示" />
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import React from 'react';
import { Input } from '@velvet/ui';

const App: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
    <Input label="正常状态" placeholder="正常状态" />
    <Input label="禁用状态" placeholder="禁用状态" disabled />
    <Input label="只读状态" placeholder="只读状态" readOnly value="只读内容" />
    <Input label="错误状态" placeholder="错误状态" errorText="这是一个错误提示" />
  </div>
);

export default App;`}
                      language="typescript"
                      title="代码示例"
                      expanded={codeExpanded.block}
                      onToggle={() => setCodeExpanded(prev => ({...prev, block: !prev.block}))}
                    />
                  </div>
                </div>
                
                <div className="demo-section">
                  <h4 className="demo-title">带图标和功能</h4>
                  <div className="demo-row">
                    <Input label="搜索框" prefix="🔍" placeholder="搜索内容..." type="search" />
                    <Input label="金额输入" suffix="¥" placeholder="请输入金额" type="number" />
                    <Input label="可清除" allowClear placeholder="输入内容后可以清除" />
                    <Input label="密码输入" type="password" showPasswordToggle allowClear placeholder="请输入密码" />
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import React from 'react';
import { Input } from '@velvet/ui';

const App: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
    <Input label="搜索框" prefix="🔍" placeholder="搜索内容..." type="search" />
    <Input label="金额输入" suffix="¥" placeholder="请输入金额" type="number" />
    <Input label="可清除" allowClear placeholder="输入内容后可以清除" />
    <Input label="密码输入" type="password" showPasswordToggle allowClear placeholder="请输入密码" />
  </div>
);

export default App;`}
                      language="typescript"
                      title="代码示例"
                      expanded={codeExpanded.chatBasic}
                      onToggle={() => setCodeExpanded(prev => ({...prev, chatBasic: !prev.chatBasic}))}
                    />
                  </div>
                </div>
              </div>
              
              <div className="component-api">
                <h4 className="api-title">API</h4>
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
                        <td>输入框类型</td>
                        <td><code>'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search'</code></td>
                        <td><code>'text'</code></td>
                      </tr>
                      <tr>
                        <td>variant</td>
                        <td>输入框变体</td>
                        <td><code>'outline' | 'filled' | 'underline'</code></td>
                        <td><code>'outline'</code></td>
                      </tr>
                      <tr>
                        <td>size</td>
                        <td>输入框尺寸</td>
                        <td><code>'sm' | 'md' | 'lg'</code></td>
                        <td><code>'md'</code></td>
                      </tr>
                      <tr>
                        <td>disabled</td>
                        <td>是否禁用</td>
                        <td><code>boolean</code></td>
                        <td><code>false</code></td>
                      </tr>
                      <tr>
                        <td>readOnly</td>
                        <td>是否只读</td>
                        <td><code>boolean</code></td>
                        <td><code>false</code></td>
                      </tr>
                      <tr>
                        <td>required</td>
                        <td>是否必填</td>
                        <td><code>boolean</code></td>
                        <td><code>false</code></td>
                      </tr>
                      <tr>
                        <td>allowClear</td>
                        <td>是否显示清除按钮</td>
                        <td><code>boolean</code></td>
                        <td><code>false</code></td>
                      </tr>
                      <tr>
                        <td>showPasswordToggle</td>
                        <td>是否显示密码切换按钮</td>
                        <td><code>boolean</code></td>
                        <td><code>false</code></td>
                      </tr>
                      <tr>
                        <td>onChange</td>
                        <td>值变化回调</td>
                        <td><code>(value: string, event: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; void</code></td>
                        <td><code>-</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          
          {activeComponent === 'select' && (
            <div className="component-section">
              <h3 className="component-title">Select 选择器</h3>
              <p className="component-description">选择器组件支持单选、搜索、清除等功能。</p>
              
              <div className="component-demo">
                <div className="demo-section">
                  <h4 className="demo-title">基础用法</h4>
                  <div className="demo-row">
                    <div style={{ width: '100%', maxWidth: '400px' }}>
                      <Select
                        placeholder="请选择城市"
                        options={[
                          { value: 'beijing', label: '北京' },
                          { value: 'shanghai', label: '上海' },
                          { value: 'guangzhou', label: '广州' },
                          { value: 'shenzhen', label: '深圳' }
                        ]}
                      />
                    </div>
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import React from 'react';
import { Select, SelectOption } from '@velvet/ui';

const options: SelectOption[] = [
  { value: 'beijing', label: '北京' },
  { value: 'shanghai', label: '上海' },
  { value: 'guangzhou', label: '广州' },
  { value: 'shenzhen', label: '深圳' }
];

const App: React.FC = () => (
  <Select
    placeholder="请选择城市"
    options={options}
  />
);

export default App;`}
                      language="typescript"
                      title="代码示例"
                      expanded={codeExpanded.selectBasic}
                      onToggle={() => setCodeExpanded(prev => ({...prev, selectBasic: !prev.selectBasic}))}
                    />
                  </div>
                </div>
                
                <div className="demo-section">
                  <h4 className="demo-title">带标签和帮助文本</h4>
                  <div className="demo-row">
                    <div style={{ width: '100%', maxWidth: '400px' }}>
                      <Select
                        label="选择城市"
                        helpText="请选择您所在的城市"
                        placeholder="请选择城市"
                        options={[
                          { value: 'beijing', label: '北京' },
                          { value: 'shanghai', label: '上海' },
                          { value: 'guangzhou', label: '广州' },
                          { value: 'shenzhen', label: '深圳' }
                        ]}
                      />
                    </div>
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import React from 'react';
import { Select, SelectOption } from '@velvet/ui';

const options: SelectOption[] = [
  { value: 'beijing', label: '北京' },
  { value: 'shanghai', label: '上海' },
  { value: 'guangzhou', label: '广州' },
  { value: 'shenzhen', label: '深圳' }
];

const App: React.FC = () => (
  <Select
    label="选择城市"
    helpText="请选择您所在的城市"
    placeholder="请选择城市"
    options={options}
  />
);

export default App;`}
                      language="typescript"
                      title="代码示例"
                      expanded={codeExpanded.selectLabel}
                      onToggle={() => setCodeExpanded(prev => ({...prev, selectLabel: !prev.selectLabel}))}
                    />
                  </div>
                </div>
                
                <div className="demo-section">
                  <h4 className="demo-title">可搜索和可清除</h4>
                  <div className="demo-row">
                    <div style={{ width: '100%', maxWidth: '400px' }}>
                      <Select
                        searchable
                        allowClear
                        placeholder="搜索并选择城市"
                        options={[
                          { value: 'beijing', label: '北京' },
                          { value: 'shanghai', label: '上海' },
                          { value: 'guangzhou', label: '广州' },
                          { value: 'shenzhen', label: '深圳' },
                          { value: 'hangzhou', label: '杭州' },
                          { value: 'nanjing', label: '南京' }
                        ]}
                      />
                    </div>
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import React from 'react';
import { Select, SelectOption } from '@velvet/ui';

const options: SelectOption[] = [
  { value: 'beijing', label: '北京' },
  { value: 'shanghai', label: '上海' },
  { value: 'guangzhou', label: '广州' },
  { value: 'shenzhen', label: '深圳' },
  { value: 'hangzhou', label: '杭州' },
  { value: 'nanjing', label: '南京' }
];

const App: React.FC = () => (
  <Select
    searchable
    allowClear
    placeholder="搜索并选择城市"
    options={options}
  />
);

export default App;`}
                      language="typescript"
                      title="代码示例"
                      expanded={codeExpanded.selectSearchable}
                      onToggle={() => setCodeExpanded(prev => ({...prev, selectSearchable: !prev.selectSearchable}))}
                    />
                  </div>
                </div>
                
                <div className="demo-section">
                  <h4 className="demo-title">不同变体和尺寸</h4>
                  <div className="demo-row">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '400px' }}>
                      <Select
                        variant="outline"
                        size="sm"
                        placeholder="Outline 小尺寸"
                        options={[
                          { value: 'option1', label: '选项1' },
                          { value: 'option2', label: '选项2' }
                        ]}
                      />
                      <Select
                        variant="filled"
                        size="md"
                        placeholder="Filled 中等尺寸"
                        options={[
                          { value: 'option1', label: '选项1' },
                          { value: 'option2', label: '选项2' }
                        ]}
                      />
                      <Select
                        variant="underline"
                        size="lg"
                        placeholder="Underline 大尺寸"
                        options={[
                          { value: 'option1', label: '选项1' },
                          { value: 'option2', label: '选项2' }
                        ]}
                      />
                    </div>
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import React from 'react';
import { Select, SelectOption } from '@velvet/ui';

const options: SelectOption[] = [
  { value: 'option1', label: '选项1' },
  { value: 'option2', label: '选项2' }
];

const App: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Select 
      variant="outline" 
      size="sm" 
      placeholder="Outline 小尺寸" 
      options={options} 
    />
    <Select 
      variant="filled" 
      size="md" 
      placeholder="Filled 中等尺寸" 
      options={options} 
    />
    <Select 
      variant="underline" 
      size="lg" 
      placeholder="Underline 大尺寸" 
      options={options} 
    />
  </div>
);

export default App;`}
                      language="typescript"
                      title="代码示例"
                      expanded={codeExpanded.selectVariants}
                      onToggle={() => setCodeExpanded(prev => ({...prev, selectVariants: !prev.selectVariants}))}
                    />
                  </div>
                </div>
                
                <div className="demo-section">
                  <h4 className="demo-title">受控组件</h4>
                  <div className="demo-row">
                    <div style={{ width: '100%', maxWidth: '400px' }}>
                      <Select
                        value={selectedCity}
                        onChange={(value: string | number | undefined) => setSelectedCity(value as string)}
                        placeholder="受控组件"
                        options={[
                          { value: 'beijing', label: '北京' },
                          { value: 'shanghai', label: '上海' },
                          { value: 'guangzhou', label: '广州' },
                          { value: 'shenzhen', label: '深圳' }
                        ]}
                      />
                      <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#6b7280' }}>
                        当前选择: {selectedCity || '未选择'}
                      </div>
                    </div>
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import React, { useState } from 'react';
import { Select, SelectOption } from '@velvet/ui';

const options: SelectOption[] = [
  { value: 'beijing', label: '北京' },
  { value: 'shanghai', label: '上海' },
  { value: 'guangzhou', label: '广州' },
  { value: 'shenzhen', label: '深圳' }
];

const App: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>('');

  return (
    <div>
      <Select
        value={selectedCity}
        onChange={(value: string | number | undefined) => setSelectedCity(value as string)}
        placeholder="受控组件"
        options={options}
      />
      <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#6b7280' }}>
        当前选择: {selectedCity || '未选择'}
      </div>
    </div>
  );
};

export default App;`}
                      language="typescript"
                      title="代码示例"
                      expanded={codeExpanded.selectControlled}
                      onToggle={() => setCodeExpanded(prev => ({...prev, selectControlled: !prev.selectControlled}))}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeComponent === 'checkbox' && (
            <div className="component-section">
              <h3 className="component-title">Checkbox 复选框</h3>
              <p className="component-description">复选框组件支持多种状态和组合。</p>
              
              <div className="component-demo">
                
                
                
                <div className="demo-section">
                  <h4 className="demo-title">基础用法</h4>
                  <div className="demo-row">
                    <Checkbox label="基础复选框" />
                    <Checkbox label="已选中的复选框" checked />
                    <Checkbox label="不确定状态" indeterminate />
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import { Checkbox } from '@velvet/ui';

<Checkbox label="基础复选框" />
<Checkbox label="已选中的复选框" checked />
<Checkbox label="不确定状态" indeterminate />`}
                      language="tsx"
                      title="基础用法代码"
                      expanded={codeExpanded.basic}
                      onToggle={() => setCodeExpanded(prev => ({ ...prev, basic: !prev.basic }))}
                    />
                  </div>
                </div>

                <div className="demo-section">
                  <h4 className="demo-title">不同尺寸</h4>
                  <div className="demo-row">
                    <Checkbox size="sm" label="小尺寸" />
                    <Checkbox size="md" label="中等尺寸" />
                    <Checkbox size="lg" label="大尺寸" />
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import { Checkbox } from '@velvet/ui';

<Checkbox size="sm" label="小尺寸" />
<Checkbox size="md" label="中等尺寸" />
<Checkbox size="lg" label="大尺寸" />`}
                      language="tsx"
                      title="尺寸代码"
                      expanded={codeExpanded.size}
                      onToggle={() => setCodeExpanded(prev => ({ ...prev, size: !prev.size }))}
                    />
                  </div>
                </div>

                <div className="demo-section">
                  <h4 className="demo-title">不同变体</h4>
                  <div className="demo-row">
                    <Checkbox variant="default" label="默认变体" checked />
                    <Checkbox variant="primary" label="主要变体" checked />
                    <Checkbox variant="success" label="成功变体" checked />
                    <Checkbox variant="warning" label="警告变体" checked />
                    <Checkbox variant="danger" label="危险变体" checked />
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import { Checkbox } from '@velvet/ui';

<Checkbox variant="default" label="默认变体" checked />
<Checkbox variant="primary" label="主要变体" checked />
<Checkbox variant="success" label="成功变体" checked />
<Checkbox variant="warning" label="警告变体" checked />
<Checkbox variant="danger" label="危险变体" checked />`}
                      language="tsx"
                      title="变体代码"
                      expanded={codeExpanded.state}
                      onToggle={() => setCodeExpanded(prev => ({ ...prev, state: !prev.state }))}
                    />
                  </div>
                </div>

                <div className="demo-section">
                  <h4 className="demo-title">状态示例</h4>
                  <div className="demo-row">
                    <Checkbox disabled label="禁用的复选框" />
                    <Checkbox disabled checked label="禁用的已选中复选框" />
                    <Checkbox readOnly label="只读复选框" />
                    <Checkbox required label="必填复选框" />
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import { Checkbox } from '@velvet/ui';

<Checkbox disabled label="禁用的复选框" />
<Checkbox disabled checked label="禁用的已选中复选框" />
<Checkbox readOnly label="只读复选框" />
<Checkbox required label="必填复选框" />`}
                      language="tsx"
                      title="状态代码"
                      expanded={codeExpanded.block}
                      onToggle={() => setCodeExpanded(prev => ({ ...prev, block: !prev.block }))}
                    />
                  </div>
                </div>

                <div className="demo-section">
                  <h4 className="demo-title">带描述文本</h4>
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
                  <div className="demo-code">
                    <CodeBlock
                      code={`import { Checkbox } from '@velvet/ui';

<Checkbox
  label="接收营销邮件"
  description="我们将向您发送产品更新和促销信息"
/>
<Checkbox
  label="接收推送通知"
  description="及时获取重要更新和消息"
/>`}
                      language="tsx"
                      title="描述文本代码"
                      expanded={codeExpanded.chatBasic}
                      onToggle={() => setCodeExpanded(prev => ({ ...prev, chatBasic: !prev.chatBasic }))}
                    />
                  </div>
                </div>
              </div>
              
              <div className="component-api">
                <h4 className="api-title">API</h4>
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
                        <td>checked</td>
                        <td>复选框是否被选中</td>
                        <td><code>boolean</code></td>
                        <td><code>false</code></td>
                      </tr>
                      <tr>
                        <td>indeterminate</td>
                        <td>复选框是否处于不确定状态</td>
                        <td><code>boolean</code></td>
                        <td><code>false</code></td>
                      </tr>
                      <tr>
                        <td>disabled</td>
                        <td>复选框是否被禁用</td>
                        <td><code>boolean</code></td>
                        <td><code>false</code></td>
                      </tr>
                      <tr>
                        <td>size</td>
                        <td>复选框的尺寸</td>
                        <td><code>'sm' | 'md' | 'lg'</code></td>
                        <td><code>'md'</code></td>
                      </tr>
                      <tr>
                        <td>variant</td>
                        <td>复选框的样式变体</td>
                        <td><code>'default' | 'primary' | 'success' | 'warning' | 'danger'</code></td>
                        <td><code>'default'</code></td>
                      </tr>
                      <tr>
                        <td>label</td>
                        <td>复选框的标签文本</td>
                        <td><code>string</code></td>
                        <td><code>-</code></td>
                      </tr>
                      <tr>
                        <td>description</td>
                        <td>复选框的描述文本</td>
                        <td><code>string</code></td>
                        <td><code>-</code></td>
                      </tr>
                      <tr>
                        <td>required</td>
                        <td>复选框是否必填</td>
                        <td><code>boolean</code></td>
                        <td><code>false</code></td>
                      </tr>
                      <tr>
                        <td>readOnly</td>
                        <td>复选框是否只读</td>
                        <td><code>boolean</code></td>
                        <td><code>false</code></td>
                      </tr>
                      <tr>
                        <td>onChange</td>
                        <td>状态变化回调</td>
                        <td><code>(checked: boolean, event: ChangeEvent&lt;HTMLInputElement&gt;) =&gt; void</code></td>
                        <td><code>-</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          
          {activeComponent === 'chat' && (
            <div className="component-section">
              <h3 className="component-title">ChatInterface 聊天界面</h3>
              <p className="component-description">AI聊天界面组件，支持实时对话、打字机效果和自定义消息渲染。</p>
              
              <div className="component-demo">
                <div className="demo-section">
                  <h4 className="demo-title">基础用法</h4>
                  <div className="demo-row">
                    <div style={{ width: '100%', maxWidth: '600px' }}>
                      <ChatInterface 
                        placeholder="输入你的问题..."
                        initialMessages={[
                          {
                            id: '1',
                            content: '你好！我是AI助手，有什么可以帮助你的吗？',
                            type: 'assistant',
                            timestamp: new Date(),
                          }
                        ]}
                      />
                    </div>
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import React from 'react';
import { ChatInterface } from '@velvet/ui';

const App: React.FC = () => (
  <ChatInterface 
    placeholder="输入你的问题..."
    initialMessages={[
      {
        id: '1',
        content: '你好！我是AI助手，有什么可以帮助你的吗？',
        type: 'assistant',
        timestamp: new Date(),
      }
    ]}
  />
);

export default App;`}
                      language="typescript"
                      title="代码示例"
                      expanded={codeExpanded.chatBasic}
                      onToggle={() => setCodeExpanded(prev => ({...prev, chatBasic: !prev.chatBasic}))}
                    />
                  </div>
                </div>
                
                <div className="demo-section">
                  <h4 className="demo-title">自定义消息处理</h4>
                  <div className="demo-row">
                    <div style={{ width: '100%', maxWidth: '600px' }}>
                      <ChatInterface 
                        placeholder="输入消息..."
                                                 onSendMessage={async (message: string) => {
                           // 这里可以集成真实的AI API
                           console.log('发送消息:', message);
                           // 模拟AI回复
                           return new Promise<void>(resolve => {
                             setTimeout(() => {
                               console.log('AI回复:', `这是对"${message}"的回复`);
                               resolve();
                             }, 1000);
                           });
                         }}
                      />
                    </div>
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import React from 'react';
import { ChatInterface } from '@velvet/ui';

const App: React.FC = () => {
  const handleSendMessage = async (message: string) => {
    // 集成OpenAI、Claude等AI服务
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
    
    const data = await response.json();
    return data.reply;
  };

  return (
    <ChatInterface 
      placeholder="输入消息..."
      onSendMessage={handleSendMessage}
    />
  );
};

export default App;`}
                      language="typescript"
                      title="代码示例"
                      expanded={codeExpanded.chatCustom}
                      onToggle={() => setCodeExpanded(prev => ({...prev, chatCustom: !prev.chatCustom}))}
                    />
                  </div>
                </div>
              </div>
              
              <div className="component-api">
                <h4 className="api-title">API</h4>
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
                        <td>initialMessages</td>
                        <td>初始消息列表</td>
                        <td><code>Message[]</code></td>
                        <td><code>[]</code></td>
                      </tr>
                      <tr>
                        <td>placeholder</td>
                        <td>输入框占位符</td>
                        <td><code>string</code></td>
                        <td><code>'输入消息...'</code></td>
                      </tr>
                      <tr>
                        <td>disabled</td>
                        <td>是否禁用输入</td>
                        <td><code>boolean</code></td>
                        <td><code>false</code></td>
                      </tr>
                      <tr>
                        <td>onSendMessage</td>
                        <td>发送消息回调</td>
                        <td><code>(message: string) =&gt; void | Promise&lt;void&gt;</code></td>
                        <td><code>-</code></td>
                      </tr>
                      <tr>
                        <td>renderMessage</td>
                        <td>自定义消息渲染</td>
                        <td><code>(message: Message) =&gt; React.ReactNode</code></td>
                        <td><code>-</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          
          {activeComponent === 'ai-message' && (
            <div className="component-section">
              <h3 className="component-title">AIMessage AI消息</h3>
              <p className="component-description">专门用于显示AI对话消息的独立组件，支持markdown渲染、代码高亮、消息状态和可复制的代码块。</p>
              
              <div className="component-demo">
                <div className="demo-section">
                  <h4 className="demo-title">基础用法</h4>
                  <div className="demo-row">
                    <div style={{ width: '100%', maxWidth: '600px' }}>
                      <AIMessage 
                        content="你好！我是AI助手，有什么可以帮助你的吗？"
                        status="success"
                        timestamp={new Date()}
                      />
                    </div>
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import React from 'react';
import { AIMessage } from '@velvet/ui';

const App: React.FC = () => (
  <AIMessage 
    content="你好！我是AI助手，有什么可以帮助你的吗？"
    status="success"
    timestamp={new Date()}
  />
);

export default App;`}
                      language="typescript"
                      title="代码示例"
                      expanded={codeExpanded.aiMessageBasic}
                      onToggle={() => setCodeExpanded(prev => ({...prev, aiMessageBasic: !prev.aiMessageBasic}))}
                    />
                  </div>
                </div>
                
                <div className="demo-section">
                  <h4 className="demo-title">Markdown 渲染</h4>
                  <div className="demo-row">
                    <div style={{ width: '100%', maxWidth: '600px' }}>
                      <AIMessage 
                        content="这是一个**粗体文本**，这是*斜体文本*，这是\`行内代码\`。\\n\\n\\`\\`\\`javascript\\nfunction hello() {\\n  console.log('Hello World!');\\n}\\n\\`\\`\\`"
                        status="success"
                        timestamp={new Date()}
                        enableCodeHighlight={true}
                      />
                    </div>
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import React from 'react';
import { AIMessage } from '@velvet/ui';

const App: React.FC = () => (
  <AIMessage 
    content="这是一个**粗体文本**，这是*斜体文本*，这是行内代码。\\n\\n代码块示例"
    status="success"
    timestamp={new Date()}
    enableCodeHighlight={true}
  />
);

export default App;`}
                      language="typescript"
                      title="代码示例"
                      expanded={codeExpanded.aiMessageMarkdown}
                      onToggle={() => setCodeExpanded(prev => ({...prev, aiMessageMarkdown: !prev.aiMessageMarkdown}))}
                    />
                  </div>
                </div>
                
                <div className="demo-section">
                  <h4 className="demo-title">不同状态</h4>
                  <div className="demo-row">
                    <div style={{ width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <AIMessage 
                        content="正在发送中的消息..."
                        status="sending"
                        timestamp={new Date()}
                      />
                      <AIMessage 
                        content="发送成功的消息"
                        status="success"
                        timestamp={new Date()}
                      />
                      <AIMessage 
                        content="发送失败的消息"
                        status="error"
                        timestamp={new Date()}
                      />
                      <AIMessage 
                        content="流式响应中的消息..."
                        status="streaming"
                        timestamp={new Date()}
                      />
                    </div>
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import React from 'react';
import { AIMessage } from '@velvet/ui';

const App: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <AIMessage 
      content="正在发送中的消息..."
      status="sending"
      timestamp={new Date()}
    />
    <AIMessage 
      content="发送成功的消息"
      status="success"
      timestamp={new Date()}
    />
    <AIMessage 
      content="发送失败的消息"
      status="error"
      timestamp={new Date()}
    />
    <AIMessage 
      content="流式响应中的消息..."
      status="streaming"
      timestamp={new Date()}
    />
  </div>
);

export default App;`}
                      language="typescript"
                      title="代码示例"
                      expanded={codeExpanded.aiMessageStatus}
                      onToggle={() => setCodeExpanded(prev => ({...prev, aiMessageStatus: !prev.aiMessageStatus}))}
                    />
                  </div>
                </div>
                
                <div className="demo-section">
                  <h4 className="demo-title">自定义头像</h4>
                  <div className="demo-row">
                    <div style={{ width: '100%', maxWidth: '600px' }}>
                      <AIMessage 
                        content="这是自定义头像的AI消息"
                        status="success"
                        timestamp={new Date()}
                        avatar="🤖"
                        username="Claude"
                      />
                    </div>
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import React from 'react';
import { AIMessage } from '@velvet/ui';

const App: React.FC = () => (
  <AIMessage 
    content="这是自定义头像的AI消息"
    status="success"
    timestamp={new Date()}
    avatar="🤖"
    username="Claude"
  />
);

export default App;`}
                      language="typescript"
                      title="代码示例"
                      expanded={codeExpanded.aiMessageAvatar}
                      onToggle={() => setCodeExpanded(prev => ({...prev, aiMessageAvatar: !prev.aiMessageAvatar}))}
                    />
                  </div>
                </div>
                
                <div className="demo-section">
                  <h4 className="demo-title">代码高亮</h4>
                  <div className="demo-row">
                    <div style={{ width: '100%', maxWidth: '600px' }}>
                      <AIMessage 
                        content={`这是一个JavaScript代码示例：

\`\`\`javascript
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
\`\`\``}
                        status="success"
                        timestamp={new Date()}
                        enableCodeHighlight={true}
                        username="Code Assistant"
                      />
                    </div>
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import React from 'react';
import { AIMessage } from '@velvet/ui';

const App: React.FC = () => (
  <AIMessage 
    content={\`这是一个JavaScript代码示例：

\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
\`\`\`

你也可以使用\`行内代码\`来突出显示特定的代码片段。\`}
    status="success"
    timestamp={new Date()}
    enableCodeHighlight={true}
    username="Code Assistant"
  />
);

export default App;`}
                      language="typescript"
                      title="代码示例"
                      expanded={codeExpanded.aiMessageCode}
                      onToggle={() => setCodeExpanded(prev => ({...prev, aiMessageCode: !prev.aiMessageCode}))}
                    />
                  </div>
                </div>
                
                <div className="demo-section">
                  <h4 className="demo-title">长文本消息</h4>
                  <div className="demo-row">
                    <div style={{ width: '100%', maxWidth: '600px' }}>
                      <AIMessage 
                        content="这是一个很长的消息示例，用来测试组件在长文本情况下的表现。\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\n\\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        status="success"
                        timestamp={new Date()}
                        username="Long Text Assistant"
                      />
                    </div>
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import React from 'react';
import { AIMessage } from '@velvet/ui';

const App: React.FC = () => (
  <AIMessage 
    content="这是一个很长的消息示例，用来测试组件在长文本情况下的表现。\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit..."
    status="success"
    timestamp={new Date()}
    username="Long Text Assistant"
  />
);

export default App;`}
                      language="typescript"
                      title="代码示例"
                      expanded={codeExpanded.aiMessageLong}
                      onToggle={() => setCodeExpanded(prev => ({...prev, aiMessageLong: !prev.aiMessageLong}))}
                    />
                  </div>
                </div>
                
                <div className="demo-section">
                  <h4 className="demo-title">禁用功能</h4>
                  <div className="demo-row">
                    <div style={{ width: '100%', maxWidth: '600px' }}>
                      <AIMessage 
                        content={`# 标题

这是**粗体**文本，这是*斜体*文本。

\`\`\`
function example() {
  return "代码块";
}
\`\`\`

\`行内代码\``}
                        status="success"
                        timestamp={new Date()}
                        enableCodeHighlight={false}
                        showCopyButton={false}
                        username="Simple Assistant"
                      />
                    </div>
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import React from 'react';
import { AIMessage } from '@velvet/ui';

const App: React.FC = () => (
  <AIMessage 
    content={\`# 标题

这是**粗体**文本，这是*斜体*文本。

\`\`\`
function example() {
  return "代码块";
}
\`\`\`\`}
    status="success"
    timestamp={new Date()}
    enableCodeHighlight={false}
    showCopyButton={false}
    username="Simple Assistant"
  />
);

export default App;`}
                      language="typescript"
                      title="代码示例"
                      expanded={codeExpanded.aiMessageDisabled}
                      onToggle={() => setCodeExpanded(prev => ({...prev, aiMessageDisabled: !prev.aiMessageDisabled}))}
                    />
                  </div>
                </div>
                
                <div className="demo-section">
                  <h4 className="demo-title">响应式设计</h4>
                  <div className="demo-row">
                    <div style={{ width: '100%', maxWidth: '600px' }}>
                      <AIMessage 
                        content="这是一个响应式设计的测试消息。\\n\\n在不同屏幕尺寸下，组件会自动调整布局和样式。\\n\\n- 桌面端：完整布局\\n- 平板端：适中布局  \\n- 移动端：紧凑布局\\n\\n\\`\\`\\`css\\n@media (max-width: 768px) {\\n  .ai-message {\\n    padding: 12px;\\n    border-radius: 8px;\\n  }\\n}\\n\\`\\`\\`"
                        status="success"
                        timestamp={new Date()}
                        username="Responsive Assistant"
                      />
                    </div>
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import React from 'react';
import { AIMessage } from '@velvet/ui';

const App: React.FC = () => (
  <AIMessage 
    content="这是一个响应式设计的测试消息。\\n\\n在不同屏幕尺寸下，组件会自动调整布局和样式。"
    status="success"
    timestamp={new Date()}
    username="Responsive Assistant"
  />
);

export default App;`}
                      language="typescript"
                      title="代码示例"
                      expanded={codeExpanded.aiMessageResponsive}
                      onToggle={() => setCodeExpanded(prev => ({...prev, aiMessageResponsive: !prev.aiMessageResponsive}))}
                    />
                  </div>
                </div>
              </div>
              
              <div className="component-api">
                <h4 className="api-title">API</h4>
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
                        <td>content</td>
                        <td>消息内容，支持markdown</td>
                        <td><code>string</code></td>
                        <td><code>''</code></td>
                      </tr>
                      <tr>
                        <td>status</td>
                        <td>消息状态</td>
                        <td><code>'sending' | 'success' | 'error' | 'streaming'</code></td>
                        <td><code>'success'</code></td>
                      </tr>
                      <tr>
                        <td>timestamp</td>
                        <td>消息时间戳</td>
                        <td><code>Date</code></td>
                        <td><code>new Date()</code></td>
                      </tr>
                      <tr>
                        <td>avatar</td>
                        <td>头像内容</td>
                        <td><code>string | React.ReactNode</code></td>
                        <td><code>'🤖'</code></td>
                      </tr>
                      <tr>
                        <td>username</td>
                        <td>用户名</td>
                        <td><code>string</code></td>
                        <td><code>'AI Assistant'</code></td>
                      </tr>
                      <tr>
                        <td>enableCodeHighlight</td>
                        <td>是否显示代码高亮</td>
                        <td><code>boolean</code></td>
                        <td><code>true</code></td>
                      </tr>
                      <tr>
                        <td>showCopyButton</td>
                        <td>是否显示复制按钮</td>
                        <td><code>boolean</code></td>
                        <td><code>true</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          
          {activeComponent === 'ai-loading' && (
            <div className="component-section">
              <h3 className="component-title">AILoading AI加载</h3>
              <p className="component-description">专门用于AI处理时的加载动画组件，支持多种加载类型和动画效果。</p>
              
              <div className="component-demo">
                <div className="demo-section">
                  <h4 className="demo-title">基础用法</h4>
                  <div className="demo-row">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '400px' }}>
                      <AILoading type="typing" text="AI正在思考中..." />
                      <AILoading type="thinking" text="AI正在思考" />
                      <AILoading type="processing" text="AI正在处理" />
                      <AILoading type="dots" />
                    </div>
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import React from 'react';
import { AILoading } from '@velvet/ui';

const App: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <AILoading type="typing" text="AI正在思考中..." />
    <AILoading type="thinking" text="AI正在思考" />
    <AILoading type="processing" text="AI正在处理" />
    <AILoading type="dots" />
  </div>
);

export default App;`}
                      language="typescript"
                      title="代码示例"
                      expanded={codeExpanded.aiLoadingBasic}
                      onToggle={() => setCodeExpanded(prev => ({...prev, aiLoadingBasic: !prev.aiLoadingBasic}))}
                    />
                  </div>
                </div>
                
                <div className="demo-section">
                  <h4 className="demo-title">不同加载类型</h4>
                  <div className="demo-row">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '400px' }}>
                      <AILoading type="typing" text="AI正在分析您的问题，请稍候..." typingSpeed={100} />
                      <AILoading type="typing" texts={[
                        'AI正在分析问题...',
                        'AI正在搜索相关信息...',
                        'AI正在生成答案...'
                      ]} loop={true} typingSpeed={80} />
                    </div>
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import React from 'react';
import { AILoading } from '@velvet/ui';

const App: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <AILoading type="typing" text="AI正在分析您的问题，请稍候..." typingSpeed={100} />
    <AILoading type="typing" texts={[
      'AI正在分析问题...',
      'AI正在搜索相关信息...',
      'AI正在生成答案...'
    ]} loop={true} typingSpeed={80} />
  </div>
);

export default App;`}
                      language="typescript"
                      title="代码示例"
                      expanded={codeExpanded.aiLoadingTypes}
                      onToggle={() => setCodeExpanded(prev => ({...prev, aiLoadingTypes: !prev.aiLoadingTypes}))}
                    />
                  </div>
                </div>
                
                <div className="demo-section">
                  <h4 className="demo-title">进度条功能</h4>
                  <div className="demo-row">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '400px' }}>
                      <AILoading type="processing" text="AI正在生成内容" showProgress={true} progress={65} />
                      <AILoading type="processing" text="AI正在处理中" showProgress={true} indeterminate={true} />
                    </div>
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import React from 'react';
import { AILoading } from '@velvet/ui';

const App: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <AILoading type="processing" text="AI正在生成内容" showProgress={true} progress={65} />
    <AILoading type="processing" text="AI正在处理中" showProgress={true} indeterminate={true} />
  </div>
);

export default App;`}
                      language="typescript"
                      title="代码示例"
                      expanded={codeExpanded.aiLoadingProgress}
                      onToggle={() => setCodeExpanded(prev => ({...prev, aiLoadingProgress: !prev.aiLoadingProgress}))}
                    />
                  </div>
                </div>
              </div>
              
              <div className="component-api">
                <h4 className="api-title">API</h4>
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
                        <td>加载类型</td>
                        <td><code>'typing' | 'thinking' | 'processing' | 'dots'</code></td>
                        <td><code>'typing'</code></td>
                      </tr>
                      <tr>
                        <td>text</td>
                        <td>加载文本</td>
                        <td><code>string</code></td>
                        <td><code>'AI正在思考中...'</code></td>
                      </tr>
                      <tr>
                        <td>texts</td>
                        <td>自定义加载文本数组</td>
                        <td><code>string[]</code></td>
                        <td><code>[]</code></td>
                      </tr>
                      <tr>
                        <td>typingSpeed</td>
                        <td>打字机效果速度（毫秒）</td>
                        <td><code>number</code></td>
                        <td><code>100</code></td>
                      </tr>
                      <tr>
                        <td>loop</td>
                        <td>是否循环播放文本</td>
                        <td><code>boolean</code></td>
                        <td><code>false</code></td>
                      </tr>
                      <tr>
                        <td>showProgress</td>
                        <td>是否显示进度条</td>
                        <td><code>boolean</code></td>
                        <td><code>false</code></td>
                      </tr>
                      <tr>
                        <td>progress</td>
                        <td>进度值（0-100）</td>
                        <td><code>number</code></td>
                        <td><code>0</code></td>
                      </tr>
                      <tr>
                        <td>indeterminate</td>
                        <td>是否不确定进度</td>
                        <td><code>boolean</code></td>
                        <td><code>false</code></td>
                      </tr>
                      <tr>
                        <td>onComplete</td>
                        <td>加载完成回调</td>
                        <td><code>() =&gt; void</code></td>
                        <td><code>-</code></td>
                      </tr>
                      <tr>
                        <td>onTextChange</td>
                        <td>文本变化回调</td>
                        <td><code>(text: string) =&gt; void</code></td>
                        <td><code>-</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          
          {activeComponent === 'ai-prompt-input' && (
            <div className="component-section">
              <h3 className="component-title">AIPromptInput AI提示输入</h3>
              <p className="component-description">智能提示输入框组件，专为AI应用设计，支持自动补全、历史记录、模板选择和快捷指令。</p>
              
              <div className="component-demo">
                <div className="demo-section">
                  <h4 className="demo-title">基础用法</h4>
                  <div className="demo-row">
                    <div style={{ width: '100%', maxWidth: '500px' }}>
                      <AIPromptInput 
                        placeholder="输入你的提示..."
                        label="AI提示输入"
                        helpText="输入你想要AI帮助的内容"
                      />
                    </div>
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import React from 'react';
import { AIPromptInput } from '@velvet/ui';

const App: React.FC = () => (
  <AIPromptInput 
    placeholder="输入你的提示..."
    label="AI提示输入"
    helpText="输入你想要AI帮助的内容"
  />
);

export default App;`}
                      language="typescript"
                      title="代码示例"
                      expanded={codeExpanded.aiPromptInputBasic}
                      onToggle={() => setCodeExpanded(prev => ({...prev, aiPromptInputBasic: !prev.aiPromptInputBasic}))}
                    />
                  </div>
                </div>
                
                <div className="demo-section">
                  <h4 className="demo-title">智能建议</h4>
                  <div className="demo-row">
                    <div style={{ width: '100%', maxWidth: '500px' }}>
                      <AIPromptInput 
                        placeholder="输入你的提示..."
                        label="智能提示输入"
                        helpText="输入时会显示相关建议"
                        suggestions={[
                          { id: '1', text: '请帮我写一个React组件的代码', category: '编程', usage: 156 },
                          { id: '2', text: '解释一下什么是机器学习', category: 'AI', usage: 89 },
                          { id: '3', text: '帮我优化这个SQL查询语句', category: '数据库', usage: 234 }
                        ]}
                        showSuggestions={true}
                        minCharsForSuggestions={1}
                      />
                    </div>
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import React from 'react';
import { AIPromptInput } from '@velvet/ui';

const App: React.FC = () => (
  <AIPromptInput 
    placeholder="输入你的提示..."
    label="智能提示输入"
    helpText="输入时会显示相关建议"
    suggestions={[
      { id: '1', text: '请帮我写一个React组件的代码', category: '编程', usage: 156 },
      { id: '2', text: '解释一下什么是机器学习', category: 'AI', usage: 89 },
      { id: '3', text: '帮我优化这个SQL查询语句', category: '数据库', usage: 234 }
    ]}
    showSuggestions={true}
    minCharsForSuggestions={1}
  />
);

export default App;`}
                      language="typescript"
                      title="代码示例"
                      expanded={codeExpanded.aiPromptInputSuggestions}
                      onToggle={() => setCodeExpanded(prev => ({...prev, aiPromptInputSuggestions: !prev.aiPromptInputSuggestions}))}
                    />
                  </div>
                </div>
                
                <div className="demo-section">
                  <h4 className="demo-title">历史记录</h4>
                  <div className="demo-row">
                    <div style={{ width: '100%', maxWidth: '500px' }}>
                      <AIPromptInput 
                        placeholder="输入你的提示..."
                        label="带历史记录的输入框"
                        helpText="点击时钟图标查看历史记录"
                        history={[
                          '请帮我写一个React组件的代码',
                          '解释一下什么是机器学习',
                          '帮我优化这个SQL查询语句'
                        ]}
                        showHistory={true}
                        maxHistoryItems={5}
                      />
                    </div>
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import React from 'react';
import { AIPromptInput } from '@velvet/ui';

const App: React.FC = () => (
  <AIPromptInput 
    placeholder="输入你的提示..."
    label="带历史记录的输入框"
    helpText="点击时钟图标查看历史记录"
    history={[
      '请帮我写一个React组件的代码',
      '解释一下什么是机器学习',
      '帮我优化这个SQL查询语句'
    ]}
    showHistory={true}
    maxHistoryItems={5}
  />
);

export default App;`}
                      language="typescript"
                      title="代码示例"
                      expanded={codeExpanded.aiPromptInputHistory}
                      onToggle={() => setCodeExpanded(prev => ({...prev, aiPromptInputHistory: !prev.aiPromptInputHistory}))}
                    />
                  </div>
                </div>
                
                <div className="demo-section">
                  <h4 className="demo-title">模板选择</h4>
                  <div className="demo-row">
                    <div style={{ width: '100%', maxWidth: '500px' }}>
                      <AIPromptInput 
                        placeholder="输入你的提示..."
                        label="模板选择器"
                        helpText="点击文档图标选择模板"
                        templates={[
                          {
                            id: '1',
                            name: '代码审查',
                            description: '帮助审查代码质量和潜在问题',
                            content: '请帮我审查以下代码，指出可能的问题和改进建议：\\n\\n[代码]',
                            category: '编程',
                            tags: ['代码', '审查', '质量']
                          },
                          {
                            id: '2',
                            name: '学习计划',
                            description: '制定个性化的学习计划',
                            content: '我想学习[技能]，请帮我制定一个为期[时间]的学习计划。',
                            category: '教育',
                            tags: ['学习', '计划', '技能']
                          }
                        ]}
                        showTemplates={true}
                      />
                    </div>
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import React from 'react';
import { AIPromptInput } from '@velvet/ui';

const App: React.FC = () => (
  <AIPromptInput 
    placeholder="输入你的提示..."
    label="模板选择器"
    helpText="点击文档图标选择模板"
    templates={[
      {
        id: '1',
        name: '代码审查',
        description: '帮助审查代码质量和潜在问题',
        content: '请帮我审查以下代码，指出可能的问题和改进建议：\\\\n\\\\n[代码]',
        category: '编程',
        tags: ['代码', '审查', '质量']
      },
      {
        id: '2',
        name: '学习计划',
        description: '制定个性化的学习计划',
        content: '我想学习[技能]，请帮我制定一个为期[时间]的学习计划。',
        category: '教育',
        tags: ['学习', '计划', '技能']
      }
    ]}
    showTemplates={true}
  />
);

export default App;`}
                      language="typescript"
                      title="代码示例"
                      expanded={codeExpanded.aiPromptInputTemplates}
                      onToggle={() => setCodeExpanded(prev => ({...prev, aiPromptInputTemplates: !prev.aiPromptInputTemplates}))}
                    />
                  </div>
                </div>
                
                <div className="demo-section">
                  <h4 className="demo-title">快捷指令</h4>
                  <div className="demo-row">
                    <div style={{ width: '100%', maxWidth: '500px' }}>
                      <AIPromptInput 
                        placeholder='输入"/"查看快捷指令...'
                        label="快捷指令输入框"
                        helpText='输入"/"触发快捷指令'
                        shortcuts={[
                          {
                            key: 'code',
                            label: '代码生成',
                            description: '生成指定功能的代码',
                            action: '请帮我生成一个[功能]的代码，使用[技术栈]。'
                          },
                          {
                            key: 'explain',
                            label: '概念解释',
                            description: '解释复杂概念',
                            action: '请用简单易懂的方式解释[概念]。'
                          }
                        ]}
                        showShortcuts={true}
                        shortcutTrigger="/"
                      />
                    </div>
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import React from 'react';
import { AIPromptInput } from '@velvet/ui';

const App: React.FC = () => (
  <AIPromptInput 
    placeholder="输入"/"查看快捷指令..."
    label="快捷指令输入框"
    helpText="输入"/"触发快捷指令"
    shortcuts={[
      {
        key: 'code',
        label: '代码生成',
        description: '生成指定功能的代码',
        action: '请帮我生成一个[功能]的代码，使用[技术栈]。'
      },
      {
        key: 'explain',
        label: '概念解释',
        description: '解释复杂概念',
        action: '请用简单易懂的方式解释[概念]。'
      }
    ]}
    showShortcuts={true}
    shortcutTrigger="/"
  />
);

export default App;`}
                      language="typescript"
                      title="代码示例"
                      expanded={codeExpanded.aiPromptInputShortcuts}
                      onToggle={() => setCodeExpanded(prev => ({...prev, aiPromptInputShortcuts: !prev.aiPromptInputShortcuts}))}
                    />
                  </div>
                </div>
                
                <div className="demo-section">
                  <h4 className="demo-title">完整功能</h4>
                  <div className="demo-row">
                    <div style={{ width: '100%', maxWidth: '500px' }}>
                      <AIPromptInput 
                        placeholder='输入你的提示或使用"/"快捷指令...'
                        label="完整功能输入框"
                        helpText="支持建议、历史、模板和快捷指令"
                        suggestions={[
                          { id: '1', text: '请帮我写一个React组件的代码', category: '编程', usage: 156 },
                          { id: '2', text: '解释一下什么是机器学习', category: 'AI', usage: 89 }
                        ]}
                        history={[
                          '请帮我写一个React组件的代码',
                          '解释一下什么是机器学习'
                        ]}
                        templates={[
                          {
                            id: '1',
                            name: '代码审查',
                            description: '帮助审查代码质量和潜在问题',
                            content: '请帮我审查以下代码，指出可能的问题和改进建议：\\n\\n[代码]',
                            category: '编程',
                            tags: ['代码', '审查', '质量']
                          }
                        ]}
                        shortcuts={[
                          {
                            key: 'code',
                            label: '代码生成',
                            description: '生成指定功能的代码',
                            action: '请帮我生成一个[功能]的代码，使用[技术栈]。'
                          }
                        ]}
                        showSuggestions={true}
                        showHistory={true}
                        showTemplates={true}
                        showShortcuts={true}
                        minCharsForSuggestions={1}
                        maxHistoryItems={5}
                      />
                    </div>
                  </div>
                  <div className="demo-code">
                    <CodeBlock
                      code={`import React from 'react';
import { AIPromptInput } from '@velvet/ui';

const App: React.FC = () => (
  <AIPromptInput 
    placeholder="输入你的提示或使用"/"快捷指令..."
    label="完整功能输入框"
    helpText="支持建议、历史、模板和快捷指令"
    suggestions={[
      { id: '1', text: '请帮我写一个React组件的代码', category: '编程', usage: 156 },
      { id: '2', text: '解释一下什么是机器学习', category: 'AI', usage: 89 }
    ]}
    history={[
      '请帮我写一个React组件的代码',
      '解释一下什么是机器学习'
    ]}
    templates={[
      {
        id: '1',
        name: '代码审查',
        description: '帮助审查代码质量和潜在问题',
        content: '请帮我审查以下代码，指出可能的问题和改进建议：\\\\n\\\\n[代码]',
        category: '编程',
        tags: ['代码', '审查', '质量']
      }
    ]}
    shortcuts={[
      {
        key: 'code',
        label: '代码生成',
        description: '生成指定功能的代码',
        action: '请帮我生成一个[功能]的代码，使用[技术栈]。'
      }
    ]}
    showSuggestions={true}
    showHistory={true}
    showTemplates={true}
    showShortcuts={true}
    minCharsForSuggestions={1}
    maxHistoryItems={5}
  />
);

export default App;`}
                      language="typescript"
                      title="代码示例"
                      expanded={codeExpanded.aiPromptInputFull}
                      onToggle={() => setCodeExpanded(prev => ({...prev, aiPromptInputFull: !prev.aiPromptInputFull}))}
                    />
                  </div>
                </div>
              </div>
              
              <div className="component-api">
                <h4 className="api-title">API</h4>
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
                        <td>value</td>
                        <td>输入框的值</td>
                        <td><code>string</code></td>
                        <td><code>-</code></td>
                      </tr>
                      <tr>
                        <td>placeholder</td>
                        <td>输入框的占位符</td>
                        <td><code>string</code></td>
                        <td><code>'输入你的提示...'</code></td>
                      </tr>
                      <tr>
                        <td>label</td>
                        <td>输入框标签</td>
                        <td><code>string</code></td>
                        <td><code>-</code></td>
                      </tr>
                      <tr>
                        <td>size</td>
                        <td>输入框尺寸</td>
                        <td><code>'sm' | 'md' | 'lg'</code></td>
                        <td><code>'md'</code></td>
                      </tr>
                      <tr>
                        <td>variant</td>
                        <td>输入框样式变体</td>
                        <td><code>'outline' | 'filled' | 'underline'</code></td>
                        <td><code>'outline'</code></td>
                      </tr>
                      <tr>
                        <td>showSuggestions</td>
                        <td>是否显示自动补全</td>
                        <td><code>boolean</code></td>
                        <td><code>true</code></td>
                      </tr>
                      <tr>
                        <td>showHistory</td>
                        <td>是否显示历史记录</td>
                        <td><code>boolean</code></td>
                        <td><code>true</code></td>
                      </tr>
                      <tr>
                        <td>showTemplates</td>
                        <td>是否显示模板选择器</td>
                        <td><code>boolean</code></td>
                        <td><code>true</code></td>
                      </tr>
                      <tr>
                        <td>showShortcuts</td>
                        <td>是否显示快捷指令</td>
                        <td><code>boolean</code></td>
                        <td><code>true</code></td>
                      </tr>
                      <tr>
                        <td>onChange</td>
                        <td>值变化时的回调</td>
                        <td><code>(value: string) =&gt; void</code></td>
                        <td><code>-</code></td>
                      </tr>
                      <tr>
                        <td>onEnter</td>
                        <td>按下回车键时的回调</td>
                        <td><code>(value: string) =&gt; void</code></td>
                        <td><code>-</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );

  return (
    <div className="app">
      {/* 顶部导航栏 */}
      <header className="app-header">
        <div className="header-left">
          <div className="logo">
            <div className="logo-icon">V</div>
            <h1>Velvet UI</h1>
          </div>
          <nav className="main-nav">
            <a 
              href="#getting-started" 
              className={activeSection === 'getting-started' ? 'active' : ''}
              onClick={() => setActiveSection('getting-started')}
            >
              快速上手
            </a>
            <a 
              href="#components" 
              className={activeSection === 'components' ? 'active' : ''}
              onClick={() => setActiveSection('components')}
            >
              组件
            </a>
          </nav>
        </div>
        <div className="header-right">
          <div className="search-box">
            <span className="search-icon">搜索</span>
            <input 
              type="text" 
              placeholder="输入关键字搜索..." 
              className="search-input"
            />
            <span className="search-shortcut">⌘ K</span>
          </div>
        </div>
      </header>

      <div className="app-container">
        {/* 主内容区域 */}
        <main className={`main-content ${activeSection === 'getting-started' ? 'full-width' : ''}`}>
          {activeSection === 'getting-started' && renderGettingStarted()}
          {activeSection === 'components' && renderComponents()}
        </main>
      </div>
    </div>
  );
}

export default App; 