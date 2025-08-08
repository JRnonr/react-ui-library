import React, { useState } from 'react';
import ButtonDocs from './components/ButtonDocs';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('components');
  const [activeComponent, setActiveComponent] = useState('button');

  // 快速上手页面
  const renderGettingStarted = () => (
    <div className="content-section">
      <h1 className="content-title">快速上手</h1>
      <p className="content-description">Velvet UI 是一个现代化的 React 组件库，提供丰富的组件和完整的设计系统。</p>
    </div>
  );

  // Button 组件页面
  const renderButtonComponent = () => {
    return <ButtonDocs />;
  };

  // 组件页面
  const renderComponents = () => {
    if (activeComponent === 'button') {
      return renderButtonComponent();
    }
    
    return (
      <div className="content-section">
        <h1 className="content-title">组件</h1>
        <p className="content-description">选择左侧组件查看详细文档。</p>
      </div>
    );
  };

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
        {/* 左侧导航 */}
        {activeSection === 'components' && (
          <aside className="sidebar">
            <div className="sidebar-section">
              <h3 className="sidebar-title">组件总览</h3>
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
        )}

        {/* 主内容区域 */}
        <main className={`main-content ${activeSection === 'getting-started' ? 'full-width' : ''}`}>
          {activeSection === 'getting-started' && renderGettingStarted()}
          {activeSection === 'components' && renderComponents()}
        </main>

        {/* 右侧目录 */}
        {activeSection === 'components' && activeComponent === 'button' && (
          <aside className="toc-sidebar">
            <div className="toc-section">
              <h3 className="toc-title">目录</h3>
              <ul className="toc-menu">
                <li className="toc-item">
                  <a href="#basic">基础按钮</a>
                </li>
                <li className="toc-item">
                  <a href="#size">按钮尺寸</a>
                </li>
                <li className="toc-item">
                  <a href="#icon">图标按钮</a>
                </li>
                <li className="toc-item">
                  <a href="#shape">按钮形状</a>
                </li>
                <li className="toc-item">
                  <a href="#disabled">禁用状态</a>
                </li>
                <li className="toc-item">
                  <a href="#loading">加载中状态</a>
                </li>
                <li className="toc-item">
                  <a href="#block">块级按钮</a>
                </li>
                <li className="toc-item">
                  <a href="#api">API</a>
                </li>
              </ul>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}

export default App; 