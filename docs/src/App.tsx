import React, { useState } from 'react';
import { Button } from '@velvet/ui';
import '../../packages/ui/src/components/Button/Button.css';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('getting-started');

  // 快速上手页面
  const renderGettingStarted = () => (
    <div className="content-section">
      <h1 className="content-title">快速上手</h1>
      <p className="content-description">Velvet UI 是一个现代化的 React 组件库，提供丰富的组件和完整的设计系统。</p>
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
                <a className="disabled">Button 按钮</a>
              </li>
              <li className="sidebar-item">
                <a className="disabled">Input 输入框</a>
              </li>
              <li className="sidebar-item">
                <a className="disabled">Select 选择器</a>
              </li>
              <li className="sidebar-item">
                <a className="disabled">Checkbox 复选框</a>
              </li>
              <li className="sidebar-item">
                <a className="disabled">Radio 单选框</a>
              </li>
            </ul>
          </div>
        </aside>

        {/* 右侧内容区域 */}
        <main className="components-content">
          <div className="component-section">
            <h3 className="component-title">Button 按钮</h3>
            <p className="component-description">按钮组件支持多种样式变体和尺寸。</p>
            
            <div className="component-demo">
              <h4>基础用法</h4>
              <div className="demo-row">
                <Button>默认按钮</Button>
                <Button variant="primary">主要按钮</Button>
                <Button variant="secondary">次要按钮</Button>
                <Button variant="outline">描边按钮</Button>
                <Button variant="ghost">幽灵按钮</Button>
                <Button variant="danger">危险按钮</Button>
              </div>
              
              <h4>尺寸变体</h4>
              <div className="demo-row">
                <Button size="sm">小按钮</Button>
                <Button size="md">中按钮</Button>
                <Button size="lg">大按钮</Button>
              </div>
              
              <h4>状态变体</h4>
              <div className="demo-row">
                <Button disabled>禁用按钮</Button>
                <Button loading>加载中</Button>
                <Button block>块级按钮</Button>
              </div>
            </div>
          </div>
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