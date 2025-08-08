import React, { useState } from 'react';
import { Button } from './components/common/button';
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
      {/* <p className="content-description">探索 Velvet UI 提供的各种组件。</p> */}
      
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
          <div className="component-placeholder">
            <h3>选择组件</h3>
            <p>从左侧选择要查看的组件</p>
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