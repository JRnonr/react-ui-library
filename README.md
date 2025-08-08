# Velvet UI

一个现代化的 React UI 组件库，采用 Monorepo 架构，专注于 AI 驱动的交互组件。

## 项目架构

```
velvet-ui/
├── packages/
│   ├── core/              # 核心组件库
│   │   ├── src/           # 组件源代码
│   │   │   ├── components/    # 组件目录
│   │   │   │   ├── ai/        # AI 组件目录
│   │   │   │   └── common/    # 通用组件
│   │   │   │       └── button/ # 按钮组件
│   │   │   ├── styles/        # 样式文件
│   │   │   ├── utils/         # 工具函数
│   │   │   ├── types/         # 类型定义
│   │   │   └── index.ts       # 入口文件
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
- **测试**: Jest 29.7+ + React Testing Library 14.3+
- **样式**: CSS Modules + 设计系统
- **Markdown 渲染**: react-markdown 9.0.1+
- **图标库**: lucide-react 0.294.0+

## 组件功能

### 已实现组件
- **Button** - 按钮组件
  - [x] 多种按钮类型：default（默认）、primary（主要）、dashed（虚线）、text（文本）、link（链接）
  - [x] 禁用状态支持：通过 disabled 属性
  - [x] 测试覆盖：完整的测试体系
    - **单元测试**（27个测试用例）
      - 基础渲染测试（4个测试用例）
      - 按钮类型测试（5个测试用例）
      - 禁用状态测试（2个测试用例）
      - 点击事件测试（3个测试用例）
      - HTML属性测试（3个测试用例）
      - 样式和样式属性测试（2个测试用例）
      - 无障碍性测试（3个测试用例）
      - 边界情况测试（3个测试用例）
      - 性能测试（2个测试用例）
    - **快照测试**（8个测试用例）
      - 默认按钮快照
      - 各种类型按钮快照
      - 禁用状态快照
      - 自定义样式快照
    - **测试统计**
      - 总测试用例：35个
      - 测试覆盖率：78.57%

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

# 测试相关命令
pnpm test                    # 运行所有测试
pnpm test:watch             # 运行测试（监听模式）
pnpm test:coverage          # 生成测试覆盖率报告
pnpm test:update            # 更新快照测试
pnpm test:e2e               # 运行 E2E 测试

# 代码质量
pnpm lint                   # 代码检查
pnpm lint:fix               # 自动修复代码问题
pnpm format                 # 代码格式化
```