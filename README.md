# 组件库项目

一个基于 React + TypeScript + Vite 的现代化组件库项目。

## 技术栈

- **React**: 18.2+ - 使用最新的React特性和Hooks
- **TypeScript**: 5.3+ - 完整的类型安全支持
- **Vite**: 5.4+ - 快速的构建工具和开发服务器
- **Jest**: 29.7+ - 完整的测试框架
- **Storybook**: 9.1+ - 组件文档和开发环境
- **PNPM**: 8.15+ - 高效的包管理器
- **ESLint**: 最新版本 - 代码质量检查
- **CSS**: 模块化CSS，支持主题定制


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
│   │   │   │   ├── AIMessage/ # AIMessage AI消息组件 (已完成)
│   │   │   │   └── AILoading/ # AILoading AI加载组件 (已完成)
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

**重要：本项目使用 pnpm 作为包管理器，请确保使用 pnpm 而不是 npm 或 yarn。**

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

### **已完成的组件**：

#### **Button 按钮组件** 
- **位置**: `packages/ui/src/components/Button/`
- **特性**: 支持多种样式变体、尺寸、状态
- **变体**: default, primary, secondary, outline, ghost, danger
- **尺寸**: sm, md, lg
- **状态**: disabled, loading, block
- **文档**: 在 `docs/` 中有完整的使用示例和 API 文档
- **测试**: 包含完整的单元测试，**30 个测试用例**
- **测试状态**: **30个测试全部通过**
- **测试覆盖率**: 66.66% 语句覆盖率，76.66% 分支覆盖率，100% 函数覆盖率
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
- **测试状态**: **89个测试全部通过**
- **测试覆盖率**: 95.55% 语句覆盖率，88.88% 分支覆盖率，100% 函数覆盖率
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
- **测试状态**: **29个测试全部通过**
- **测试覆盖率**: 100% 语句覆盖率，100% 分支覆盖率，100% 函数覆盖率
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
- **测试**: 包含完整的单元测试，**33 个测试用例**
- **测试状态**: **33个测试全部通过**（已修复）
- **测试覆盖率**: 84.88% 语句覆盖率，75.43% 分支覆盖率，78.57% 函数覆盖率
- **覆盖的功能**:
  - **基础组件渲染** - 组件正确渲染，支持所有props属性
  - **Markdown内容渲染** - 支持粗体、斜体、行内代码、代码块、标题等语法
  - **代码语法高亮** - 支持多种编程语言的语法高亮显示
  - **代码块复制功能** - 一键复制代码内容，支持成功/失败状态反馈
  - **状态指示器** - 支持success、error、warning、info等状态显示
  - **头像和用户信息** - 支持自定义头像和用户名显示
  - **时间戳显示** - 支持自定义时间戳格式和显示控制
  - **响应式布局** - 完美适配各种屏幕尺寸和设备
  - **深色模式支持** - 自动适配系统深色模式偏好
  - **可访问性功能** - 支持屏幕阅读器、键盘导航、ARIA标签
  - **自定义样式** - 支持className和style属性覆盖
  - **事件回调处理** - 支持onCopy、onCopyError、onClick等事件
  - **边界情况处理** - 空内容、超长内容、特殊字符等异常情况
  - **性能优化** - 使用useCallback优化渲染性能，避免不必要的重渲染
  - **内存管理** - 组件卸载时正确清理事件监听器和定时器

#### **AILoading AI加载组件** 
- **位置**: `packages/ui/src/components/AILoading/`
- **特性**: 专门用于AI处理时的加载动画独立组件，支持多种加载类型和动画效果
- **核心功能**:
  - **多种加载类型** - typing（打字机效果）、thinking（思考动画）、processing（处理中）、dots（纯点动画）
  - **打字机效果** - 支持自定义打字速度，逐字显示文本内容
  - **思考动画** - 动态点动画，模拟AI思考过程
  - **处理中动画** - 旋转的spinner图标，表示正在处理
  - **进度条支持** - 可显示确定进度或不确定进度
  - **循环播放** - 支持文本数组循环播放
  - **响应式设计** - 完美适配各种屏幕尺寸
  - **高度可定制** - 支持自定义样式、动画速度、文本内容
- **API 特性**:
  - 支持单文本或文本数组
  - 可自定义打字速度（50-500ms）
  - 支持循环播放和进度条显示
  - 完整的事件回调（onTextChange、onComplete）
  - 支持自定义类名和样式
  - 可访问性支持（aria-label、role等）
- **技术亮点**:
  - 使用useEffect和useRef实现高性能动画
  - 支持组件卸载时的清理，防止内存泄漏
  - 使用CSS动画优化性能
  - 支持键盘导航和屏幕阅读器
- **测试**: 包含完整的单元测试，**242 个测试用例**
- **测试状态**: **242个测试全部通过**
- **测试覆盖率**: 91.07% 语句覆盖率，96.87% 分支覆盖率，80.95% 函数覆盖率
- **覆盖的功能**:
  - 基础组件渲染和属性设置
  - 所有加载类型的动画效果
  - 打字机效果的逐字显示
  - 进度条功能（确定和不确定进度）
  - 循环播放和文本切换
  - 事件回调处理
  - 边界情况和异常处理
  - 可访问性功能
  - 性能优化和内存管理

### **待完成的AI相关组件**：

#### **AI Prompt Input 组件** 
- **作用**：智能提示输入框独立组件
- **功能**：
  - 自动补全建议
  - 历史记录
  - 快捷指令（如"/"触发）
  - 模板选择器
- **设计理念**：专注输入增强，可替换普通Input组件

#### **AI Response Viewer 组件** 
- **作用**：展示AI响应的独立组件
- **功能**：
  - 结构化数据展示
  - 图表渲染支持
  - 可折叠的长文本
  - 导出功能
- **设计理念**：专注内容展示，可独立使用或与其他组件组合