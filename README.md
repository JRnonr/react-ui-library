一个基于 React + TypeScript + Vite 的现代化组件库项目。

## 技术栈

- 基础: React 18.3.1, TypeScript 5.9.2, Node >= 20
- 构建: Vite 5.4.19
- 测试: Jest 29.7.0, Testing Library (react 14.3.1, user-event 14.6.1), jsdom 29.7.0, SWC (@swc/jest 0.2.39, @swc/core 1.13.3)
- 文档: Storybook 9.1.1
- 包管理: PNPM 10.13.1, PNPM Workspace (Monorepo)
- 代码质量: ESLint 9.33.c0
- 样式: CSS Modules


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
│   │   │   │   ├── AILoading/ # AILoading AI加载组件 (已完成)
│   │   │   │   ├── AIPromptInput/ # AIPromptInput AI提示输入组件 (已完成)
│   │   │   │   └── Select/ # Select 选择器组件 (已完成)
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
├── (tests use Jest at package level) # Vitest 已移除，统一使用 Jest
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


覆盖率 `pnpm --filter @velvet/ui test:coverage` 

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

#### **AIPromptInput AI提示输入组件** 
- **位置**: `packages/ui/src/components/AIPromptInput/`
- **特性**: 智能提示输入框独立组件，专为AI应用设计，支持自动补全、历史记录、模板选择和快捷指令
- **核心功能**:
  - **智能提示系统** - 支持自动补全建议，提升输入效率
  - **历史记录管理** - 记住用户输入历史，快速重用常用提示
  - **快捷指令系统** - 支持"/"触发的快捷指令，快速访问常用功能
  - **模板选择器** - 内置常用提示模板，一键选择专业提示
  - **多种样式变体** - 支持outline、filled、underline三种样式
  - **响应式设计** - 完美适配各种屏幕尺寸和设备
  - **深色模式支持** - 自动适配系统深色模式偏好
  - **无障碍访问** - 支持键盘导航和屏幕阅读器
- **API 特性**:
  - 支持受控/非受控模式
  - 完整的输入事件回调（onChange、onFocus、onBlur、onEnter）
  - 智能建议选择回调（onSuggestionSelect）
  - 模板选择回调（onTemplateSelect）
  - 快捷指令选择回调（onShortcutSelect）
  - 历史记录管理回调（onHistoryAdd、onHistoryClear）
  - 支持自定义触发字符和最小字符数
  - 可配置的最大历史记录和建议数量
- **技术亮点**:
  - 使用useState和useEffect实现复杂状态管理
  - 支持多面板智能切换，避免冲突
  - 完整的键盘导航支持（上下箭头、回车、ESC）
  - 实时数据过滤和性能优化
  - 支持组件卸载时的清理，防止内存泄漏
- **测试**: 包含完整的单元测试，**20 个测试用例**
- **测试状态**: **20个测试全部通过**
- **测试覆盖率**: **30.35% 语句覆盖率，39.58% 分支覆盖率，21.73% 函数覆盖率**
- **覆盖的功能**:
  - 基础组件渲染和属性设置
  - 受控和非受控模式
  - 标签、帮助文本、错误文本显示
  - 样式变体和尺寸支持
  - 智能建议面板和选择
  - 历史记录管理和选择
  - 模板选择和详细信息显示
  - 快捷指令触发和选择
  - 键盘导航和面板切换
  - 边界情况和异常处理
  - 可访问性功能和ARIA支持
  - 性能优化和状态管理

#### **Select 选择器组件** 
- **位置**: `packages/ui/src/components/Select/`
- **特性**: 功能完整的现代化选择器组件，支持单选、搜索、清除、键盘导航等高级功能
- **核心功能**:
  - **基础选择功能** - 支持单选模式，完整的选项管理
  - **搜索功能** - 支持实时搜索和过滤选项，提升用户体验
  - **清除功能** - 支持一键清除已选择的值
  - **键盘导航** - 完整的键盘操作支持（上下箭头、回车、ESC、Tab等）
  - **多种样式变体** - 支持outline（轮廓）、filled（填充）、underline（下划线）
  - **尺寸选择** - 支持sm（小）、md（中）、lg（大）三种尺寸
  - **状态管理** - 支持disabled、readOnly、error、loading等状态
  - **标签系统** - 支持标签、必填标记、帮助文本、错误文本
  - **响应式设计** - 完美适配各种屏幕尺寸和设备
  - **深色模式支持** - 自动适配系统深色模式偏好
  - **无障碍访问** - 完整的ARIA属性支持，兼容屏幕阅读器
- **API 特性**:
  - 支持受控/非受控模式
  - 完整的事件回调（onChange、onFocus、onBlur、onOpen、onClose）
  - 支持搜索和清除功能开关
  - 可配置的最大高度和空数据提示
  - 支持加载状态和空选项
  - 自定义样式和类名支持
  - 完整的无障碍访问支持
- **技术亮点**:
  - 使用forwardRef实现ref转发
  - 使用useState和useCallback优化性能
  - 支持点击外部关闭下拉面板
  - 完整的焦点管理和键盘事件处理
  - 支持组件卸载时的清理，防止内存泄漏
- **测试**: 包含完整的单元测试，**22 个测试用例**
- **测试状态**: **22个测试全部通过** 
- **测试覆盖率**: **78.63% 语句覆盖率，78.37% 分支覆盖率，92.59% 函数覆盖率**
- **覆盖的功能**:
  - 基础组件渲染和属性设置
  - 受控和非受控模式
  - 标签、帮助文本、错误文本显示
  - 样式变体和尺寸支持
  - 搜索功能和选项过滤
  - 清除功能和状态管理
  - 键盘导航和焦点管理
  - 下拉面板的打开和关闭
  - 选项选择和值更新
  - 边界情况和异常处理
  - 可访问性功能和ARIA支持
  - 性能优化和状态管理

#### **Checkbox 复选框组件** 
- **位置**: `packages/ui/src/components/Checkbox/`
- **特性**: 受控/非受控；不确定状态（indeterminate）；多尺寸（sm、md、lg）；多变体（default、primary、success、warning、danger）；无障碍支持与键盘导航；描述文本；禁用/只读；表单属性；响应式与高对比度
- **API 特性**:
  - 事件：`onChange(checked, event)`、`onFocus(event)`、`onBlur(event)`
  - ARIA：`aria-checked`（支持 mixed）、`aria-describedby`、`aria-invalid` 等
  - 可访问性：支持 Tab/Enter/Space 键操作，焦点管理
  - `ref` 转发可获取原生 `input` 引用
- **测试**: 包含完整的单元测试，**19 个测试用例**
- **测试覆盖率**: **96.61% 语句覆盖率，91.80% 分支覆盖率，100% 函数覆盖率**
- **覆盖的功能**:
  - 基础渲染与标签显示
  - 受控模式与标签点击切换
  - 键盘导航（Space/Enter 切换）
  - 不确定状态（`aria-checked="mixed"`）
  - 禁用与只读交互拦截
  - 尺寸与变体类名渲染
  - 描述文本与 `aria-describedby`
  - 必填校验（`aria-invalid`）
  - 自定义 `id`/`className`/`style`
  - 子元素作为标签、焦点事件回调
  - 表单属性 `name`/`value`

