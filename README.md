# 组件库项目

一个基于 React + TypeScript + Vite 的现代化组件库项目。

## 技术栈

- **框架**: React 18.2+
- **语言**: TypeScript 5.4+
- **构建工具**: Vite 5.0+
- **包管理器**: pnpm 8.15+
- **架构**: Monorepo (pnpm workspace)
- **组件开发**: Storybook 7.6+
- **代码高亮**: Highlight.js 11.9+
- **测试**: Jest 29.7+ + React Testing Library 14.3+
- **样式**: CSS Modules + 设计系统
- **Markdown 渲染**: react-markdown 9.0.1+
- **图标库**: lucide-react 0.294.0+

## 项目结构

```
组件库项目/
├── docs/                    # 文档网站 (独立运行)
│   ├── src/                # 文档网站源码
│   ├── public/             # 静态资源
│   ├── package.json        # 文档网站依赖
│   ├── vite.config.ts      # Vite 配置
│   └── tsconfig.json       # TypeScript 配置
│
├── packages/                # 包目录
│   ├── ui/                 # UI 组件库 (核心)
│   │   ├── src/            # 组件源码
│   │   │   ├── components/ # 组件目录
│   │   │   │   ├── Button/ # Button 按钮组件 (已完成)
│   │   │   │   ├── ChatInterface/ # ChatInterface 聊天界面组件 (已完成)
│   │   │   │   ├── Input/ # Input 输入框组件 (已完成)
│   │   │   │   └── AIMessage/ # AIMessage AI消息组件 (已完成)
│   │   │   ├── stories/    # 在这里写组件故事
│   │   │   ├── __tests__/  # 在这里写组件测试
│   │   │   └── index.ts    # 在这里导出组件
│   │   ├── package.json    # 组件库依赖
│   │   ├── jest.config.cjs # 测试配置
│   │   └── tsconfig.json   # TypeScript 配置
│   │
│   ├── theme/              # 设计系统主题
│   ├── icons/              # 图标库
│   ├── hooks/              # 通用 React Hooks
│   └── utils/              # 工具函数
│
├── configs/                 # 共享配置
│   ├── jest.base.cjs       # Jest 基础配置
│   └── tsconfig.base.json  # TypeScript 基础配置
│
├── package.json             # 根目录工作区配置
├── pnpm-workspace.yaml     # pnpm 工作区配置
├── eslint.config.mjs       # ESLint 配置
├── vitest.config.ts        # Vitest 测试配置
└── README.md               # 项目说明
```

## 开发

```bash
# 安装依赖
pnpm install

# 启动文档网站 (开发模式)
pnpm dev
# 或者
pnpm run docs

# 构建所有包
pnpm build

# 测试
pnpm test

# 测试覆盖率
pnpm test:coverage

# 类型检查
pnpm typecheck

# 代码检查
pnpm lint

# Storybook (组件开发)
pnpm storybook

# 构建 Storybook
pnpm build-storybook
```

## 包管理

```bash
# 为特定包添加依赖
pnpm --filter @repo/ui add lodash

# 为特定包添加开发依赖
pnpm --filter @repo/ui add -D @types/lodash

# 运行特定包的脚本
pnpm --filter @repo/ui run build
```



## 开发流程

1. **组件开发**：在 `packages/ui/src/components/` 中创建组件
2. **故事编写**：在 `packages/ui/src/stories/` 中写组件故事
3. **组件导出**：在 `packages/ui/src/index.ts` 中导出组件
4. **组件测试**：在 `packages/ui/src/__tests__/` 中写测试用例
5. **实时预览**：运行 `pnpm storybook` 测试组件
6. **文档编写**：在 `docs/` 中编写使用文档
7. **最终展示**：运行 `pnpm dev` 查看文档网站

## 项目当前状态总结


## 组件开发指南

### **已完成的组件**：

#### **Button 按钮组件**
- **位置**: `packages/ui/src/components/Button/`
- **特性**: 支持多种样式变体、尺寸、状态
- **变体**: default, primary, secondary, outline, ghost, danger
- **尺寸**: sm, md, lg
- **状态**: disabled, loading, block
- **文档**: 在 `docs/` 中有完整的使用示例和 API 文档
- **测试**: 包含完整的单元测试，**30 个测试用例**
- **测试覆盖率**:
  - **语句覆盖率**: 87.5%
  - **分支覆盖率**: 95.23%
  - **函数覆盖率**: 100%
  - **行覆盖率**: 86.66%
- **覆盖的功能**:
  - 基础渲染和内容显示
  - 所有样式变体 (primary, secondary, outline, ghost, danger)
  - 所有尺寸 (sm, md, lg)
  - 状态管理 (disabled, loading, block)
  - 事件处理 (onClick, 事件阻止)
  - 自定义样式和类名
  - 边界情况和边缘值
  - SVG 加载动画
  - 属性组合和默认值

#### **ChatInterface 聊天界面组件**
- **位置**: `packages/ui/src/components/ChatInterface/`
- **特性**: 现代化的AI聊天界面，支持实时对话和打字机效果
- **核心功能**:
  - 现代化设计 - 渐变色彩和圆角设计
  - 实时对话 - 支持用户和AI助手的消息交互
  - 打字机效果 - AI回复支持逐字显示动画
  - 响应式设计 - 完美适配桌面端和移动端
  - 可访问性 - 支持键盘导航和屏幕阅读器
  - 高度可定制 - 支持自定义消息渲染和样式
  - 状态管理 - 内置加载状态和错误处理
- **API 特性**:
  - 支持初始消息列表
  - 自定义占位符文本
  - 禁用状态控制
  - 发送消息回调函数
  - 自定义消息渲染函数
  - 支持回车发送和Shift+Enter换行
- **测试**: 包含完整的单元测试，**89 个测试用例**
- **测试覆盖率**:
  - **语句覆盖率**: 93.75%
  - **分支覆盖率**: 88.46%
  - **函数覆盖率**: 100%
  - **行覆盖率**: 98.59%
- **覆盖的功能**:
  - 基础组件渲染
  - 消息发送和接收
  - 键盘事件处理
  - 初始消息显示
  - 禁用状态管理
  - 自定义消息渲染
  - 边界情况处理
  - 错误处理和异常情况
  - 异步操作和状态更新
  - 用户交互和事件响应

#### **Input 输入框组件**
- **位置**: `packages/ui/src/components/Input/`
- **特性**: 功能完整的现代化输入框组件，支持多种输入类型和交互功能
- **核心功能**:
  - 多种输入类型 - 支持text、password、email、number、tel、url、search等
  - 样式变体 - outline（轮廓）、filled（填充）、underline（下划线）
  - 尺寸选择 - sm（小）、md（中）、lg（大）
  - 状态管理 - 支持disabled、readOnly、error、focused等状态
  - 前缀后缀 - 支持图标、文本等前缀后缀内容
  - 清除功能 - 支持一键清除输入内容
  - 密码切换 - 支持密码显示/隐藏切换
  - 字符计数 - 支持最大长度限制和字符计数显示
  - 标签系统 - 支持标签、必填标记、帮助文本、错误文本
  - 响应式设计 - 完美适配各种屏幕尺寸
  - 深色模式 - 自动适配系统深色模式
- **API 特性**:
  - 受控/非受控模式支持
  - 完整的事件回调（onChange、onFocus、onBlur、onKeyDown、onEnter）
  - 丰富的属性支持（maxLength、autoComplete、autoFocus、inputMode等）
  - 自定义样式和类名支持
  - 无障碍访问支持（aria-label、tabIndex等）
- **测试**: 包含完整的单元测试，**29 个测试用例**
- **测试覆盖率**:
  - **语句覆盖率**: 77.61%
  - **分支覆盖率**: 100%
  - **函数覆盖率**: 100%
  - **行覆盖率**: 76.56%
- **覆盖的功能**:
  - 基础组件渲染和属性设置
  - 受控和非受控模式
  - 标签、帮助文本、错误文本显示
  - 前缀后缀图标渲染
  - 清除功能和密码切换功能
  - 字符计数功能
  - 事件处理（onChange、onFocus、onBlur、onEnter）
  - 状态管理（disabled、readOnly、error）
  - 样式变体和尺寸
  - 输入类型和属性设置
  - ref转发和边界情况处理

#### **AIMessage AI消息组件** 
- **位置**: `packages/ui/src/components/AIMessage/`
- **特性**: 专门用于显示AI对话消息的独立组件，支持markdown渲染和代码高亮
- **核心功能**:
  - **Markdown渲染** - 完整支持Markdown语法，包括标题、列表、链接、图片等
  - **代码高亮** - 支持多种编程语言的语法高亮显示
  - **代码复制** - 一键复制代码块内容，提升用户体验
  - **响应式设计** - 完美适配各种屏幕尺寸和设备
  - **深色模式** - 自动适配系统深色模式偏好
  - **可访问性** - 支持屏幕阅读器和键盘导航
  - **高度可定制** - 支持自定义样式、主题和渲染逻辑
- **API 特性**:
  - 支持传入markdown格式的content内容
  - 可自定义代码高亮主题（支持github、vs、atom-one-dark等）
  - 支持自定义CSS类名和样式覆盖
  - 支持自定义代码块渲染逻辑
  - 完整的事件回调支持
- **技术亮点**:
  - 使用react-markdown进行安全的Markdown解析
  - 集成highlight.js实现代码语法高亮
  - 实现代码块复制功能，提升用户交互体验
  - 响应式设计，完美适配移动端和桌面端
- **测试**: 包含完整的单元测试，**多个测试用例**
- **测试覆盖率**: 待补充
- **覆盖的功能**:
  - Markdown内容渲染
  - 代码语法高亮
  - 代码块复制功能
  - 响应式布局适配
  - 深色模式支持
  - 可访问性功能
  - 自定义样式支持

### **实现组件时需要动的文件/文件夹**：

#### 1. **核心组件库** - `packages/ui/`：
- `packages/ui/src/components/` ← **在这里添加新组件**
- `packages/ui/src/index.ts` ← **在这里导出组件**
- `packages/ui/src/stories/` ← **在这里写组件故事**
- `packages/ui/src/__tests__/` ← **在这里写组件测试**
- `packages/ui/package.json` ← **添加组件依赖**

### **待完成的AI相关组件**：

#### **AI Loading 组件** ⭐⭐⭐⭐
- **作用**：AI处理时的加载动画独立组件
- **功能**：
  - 打字机效果
  - 思考中的动画（如旋转的圆点）
  - 进度指示器
  - 可自定义的加载文本
- **设计理念**：专注加载状态，可与其他组件组合使用

#### **AI Prompt Input 组件** ⭐⭐⭐⭐
- **作用**：智能提示输入框独立组件
- **功能**：
  - 自动补全建议
  - 历史记录
  - 快捷指令（如"/"触发）
  - 模板选择器
- **设计理念**：专注输入增强，可替换普通Input组件

#### **AI Response Viewer 组件** ⭐⭐⭐
- **作用**：展示AI响应的独立组件
- **功能**：
  - 结构化数据展示
  - 图表渲染支持
  - 可折叠的长文本
  - 导出功能
- **设计理念**：专注内容展示，可独立使用或与其他组件组合

#### 组件组合使用示例**：
```
// 可以这样组合使用
<AIMessage content={aiResponse} />
<AILoading type="thinking" />
<AIPromptInput suggestions={prompts} />
<AIResponseViewer data={structuredData} />

// 或者单独使用
<AIMessage content="Hello AI!" />
<AILoading type="typing" />
```

#### 2. **组件开发环境**：
- 运行 `pnpm storybook` 启动组件开发环境
- 在 Storybook 中实时预览和测试组件

#### 3. **文档展示**：
- 运行 `pnpm dev` 启动文档网站
- 在 `docs/src/` 中展示组件使用方法

### **实现组件时不需要动的文件/文件夹**：

#### 1. **配置类文件**（一次性配置）：
- `pnpm-workspace.yaml`、`eslint.config.mjs`、`vitest.config.ts`
- `configs/` 目录下的所有配置文件
- `docs/` 下的配置文件

#### 2. **根目录管理文件**：
- `package.json`（根目录）、`README.md`（根目录）


#### **进行中**
- **AI Loading组件** - AI处理时的加载动画组件
- **AI Prompt Input组件** - 智能提示输入框组件
- **AI Response Viewer组件** - AI响应展示组件


#### **已解决的技术难题**
1. **复杂异步状态管理** - 使用useReducer优化聊天界面状态管理
2. **TypeScript类型安全** - 解决forwardRef和多态组件的类型问题
3. **Markdown渲染优化** - 实现高性能的Markdown解析和代码高亮
4. **性能优化** - 打字机效果、懒加载、内存管理等优化

