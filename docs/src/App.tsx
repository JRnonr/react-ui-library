import { useState } from 'react';
import { Button, ChatInterface } from '@velvet/ui';
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
      <h1 className="content-title">组件</h1>
      
      <div className="components-layout">
        {/* 左侧导航 */}
        <aside className="components-sidebar">
          <div className="sidebar-section">
            <h3 className="sidebar-title">组件</h3>
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
              <p className="component-description">输入框组件支持多种类型和状态。</p>
              <div className="component-placeholder">
                <h3>开发中</h3>
                <p>Input 组件正在开发中，敬请期待...</p>
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