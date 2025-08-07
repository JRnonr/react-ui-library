# Velvet UI

一个现代化的 React UI 组件库，采用 Monorepo 架构，专注于 AI 驱动的交互组件。

## 项目架构

```
velvet-ui/
├── packages/
│   ├── core/              # 核心组件库
│   │   ├── src/           # 组件源代码
│   │   ├── components/    # 组件目录
│   │   │   ├── ai/        # AI 组件目录
│   │   │   └── common/    # 通用组件
│   │   ├── styles/        # 样式文件
│   │   ├── tests/         # 测试文件
│   │   └── package.json   # 核心包配置
│   └── docs/              # 文档网站
│       ├── src/           # 文档源代码
│       └── package.json   # 文档包配置
├── tools/                 # 构建工具
│   ├── build/             # 构建工具
│   └── scripts/           # 自动化脚本
├── package.json           # 根配置
└── pnpm-workspace.yaml    # Workspace 配置
```

## 技术栈

### 核心技术
- **框架**: React 18.2+
- **语言**: TypeScript 5.4+
- **构建工具**: Vite 5.0+
- **包管理器**: pnpm 8.15+
- **架构**: Monorepo (pnpm workspace)
- **组件开发**: Storybook 7.6+
- **代码高亮**: Highlight.js 11.9+
- **测试**: Jest + React Testing Library
- **样式**: CSS Modules + 设计系统
- **Markdown 渲染**: react-markdown 9.0.1+
- **图标库**: lucide-react 0.294.0+

## 组件功能

### 已实现组件
- **Button** - 按钮组件，支持多种样式、状态和图标

### 待实现组件
- **AIChat** - 智能聊天组件
  - [ ] 消息气泡界面
  - [ ] 输入框和发送按钮
  - [ ] 加载状态和打字机效果
  - [ ] Markdown 和代码高亮渲染
  - [ ] 消息操作（复制、重新生成）
  - [ ] 流式消息渲染
  - [ ] 消息历史管理

- **AIPromptEditor** - AI 提示词编辑器
  - [ ] 文本编辑器界面
  - [ ] 提示词模板选择
  - [ ] 实时预览效果
  - [ ] 参数配置面板
  - [ ] 历史记录管理
  - [ ] 一键优化提示词

- **AIDataTable** - AI 驱动数据表格
  - [ ] 基础数据展示
  - [ ] 排序和筛选功能
  - [ ] 操作按钮和分页
  - [ ] 智能列推荐
  - [ ] 自然语言查询
  - [ ] 自动数据可视化

- **AIImageGenerator** - AI 图像生成器
  - [ ] 提示词输入框
  - [ ] 图片预览区域
  - [ ] 生成按钮和进度条
  - [ ] 风格预设选择
  - [ ] 批量生成管理
  - [ ] 图片编辑建议

- **AIAssistant** - AI 智能助手
  - [ ] 建议面板界面
  - [ ] 快捷操作按钮
  - [ ] 帮助提示功能
  - [ ] 上下文感知
  - [ ] 学习用户习惯
  - [ ] 个性化推荐

## 快速开始

### 安装依赖

```bash
# 安装所有依赖
pnpm install
```

### 开发命令

```bash
# 启动文档网站
pnpm dev

# 启动 Storybook
pnpm storybook

# 构建核心库
pnpm build

# 构建文档网站
pnpm build:docs

# 运行测试
pnpm test

# 运行 E2E 测试
pnpm test:e2e

# 代码检查
pnpm lint

# 代码格式化
pnpm format
```
