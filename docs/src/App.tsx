import { useState } from 'react';
import { Button, ChatInterface, Input, AIMessage } from '@velvet/ui';
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
    chatCustom: false
  });

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
                  className={activeComponent === 'radio' ? 'active' : ''}
                  onClick={() => setActiveComponent('radio')}
                >
                  Radio 单选框
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
              <p className="component-description">选择器组件支持单选和多选模式。</p>
              <div className="component-placeholder">
                <h3>开发中</h3>
                <p>Select 组件正在开发中，敬请期待...</p>
              </div>
            </div>
          )}
          
          {activeComponent === 'checkbox' && (
            <div className="component-section">
              <h3 className="component-title">Checkbox 复选框</h3>
              <p className="component-description">复选框组件支持多种状态和组合。</p>
              <div className="component-placeholder">
                <h3>开发中</h3>
                <p>Checkbox 组件正在开发中，敬请期待...</p>
              </div>
            </div>
          )}
          
          {activeComponent === 'radio' && (
            <div className="component-section">
              <h3 className="component-title">Radio 单选框</h3>
              <p className="component-description">单选框组件支持单选模式和组合。</p>
              <div className="component-placeholder">
                <h3>开发中</h3>
                <p>Radio 组件正在开发中，敬请期待...</p>
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
                      expanded={false}
                      onToggle={() => {}}
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
                      expanded={false}
                      onToggle={() => {}}
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
                      expanded={false}
                      onToggle={() => {}}
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
                      expanded={false}
                      onToggle={() => {}}
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
                      expanded={false}
                      onToggle={() => {}}
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
                      expanded={false}
                      onToggle={() => {}}
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
                      expanded={false}
                      onToggle={() => {}}
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
                      expanded={false}
                      onToggle={() => {}}
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