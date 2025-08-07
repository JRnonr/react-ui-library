# Velvet UI Monorepo 结构

## 📁 目录结构

```
velvet-ui/
├── packages/                    # 包目录
│   ├── core/                   # 核心组件库
│   │   ├── src/               # 源代码
│   │   │   ├── components/    # 组件目录
│   │   │   │   ├── Button/    # Button 组件
│   │   │   │   └── CodeBlock/ # CodeBlock 组件
│   │   │   ├── styles/        # 样式文件
│   │   │   ├── utils/         # 工具函数
│   │   │   ├── types/         # 类型定义
│   │   │   ├── App.tsx        # 主应用组件
│   │   │   ├── App.css        # 应用样式
│   │   │   ├── index.css      # 全局样式
│   │   │   └── index.ts       # 入口文件
│   │   ├── tests/             # 测试文件
│   │   ├── scripts/           # 构建脚本
│   │   ├── templates/         # 组件模板
│   │   ├── .storybook/        # Storybook 配置
│   │   ├── .dumi/             # Dumi 配置
│   │   ├── .husky/            # Git hooks
│   │   ├── package.json       # 核心包配置
│   │   ├── vite.config.ts     # Vite 配置
│   │   ├── tsconfig.json      # TypeScript 配置
│   │   ├── jest.config.js     # Jest 配置
│   │   └── .babelrc.js        # Babel 配置
│   └── docs/                  # 文档网站
│       ├── src/               # 文档源代码
│       │   ├── App.tsx        # 文档应用
│       │   ├── App.css        # 文档样式
│       │   ├── index.css      # 全局样式
│       │   └── main.tsx       # 文档入口
│       ├── package.json       # 文档包配置
│       └── vite.config.ts     # 文档 Vite 配置
├── tools/                      # 工具目录
│   ├── build/                 # 构建工具
│   │   └── package.json       # 构建工具配置
│   └── scripts/               # 自动化脚本
│       └── package.json       # 脚本配置
├── package.json               # 根配置
├── pnpm-workspace.yaml        # Workspace 配置
├── README.md                  # 项目说明
└── MONOREPO_STRUCTURE.md      # 本文档
```

## 🏗️ 架构说明

### 1. 根目录配置

**package.json (根)**
- 定义 workspace 配置
- 提供全局脚本命令
- 管理共享的开发依赖

**pnpm-workspace.yaml**
- 定义 workspace 包路径
- 配置 `packages/*` 和 `tools/*`

### 2. 核心包 (@velvet-ui/core)

**功能**
- 包含所有 React 组件
- 提供完整的类型定义
- 支持多种构建格式 (ESM, CJS, UMD)

**构建输出**
- `lib/` - CommonJS 格式
- `esm/` - ES Modules 格式
- TypeScript 声明文件

**开发工具**
- Storybook - 组件开发和文档
- Jest + RTL - 单元测试
- Playwright - E2E 测试
- ESLint + Prettier - 代码质量

### 3. 文档包 (@velvet-ui/docs)

**功能**
- 展示组件使用示例
- 提供完整的文档网站
- 支持组件交互演示

**技术栈**
- React + TypeScript
- Vite 构建
- 引用核心包组件

### 4. 工具包

**@velvet-ui/build**
- 构建工具和脚本
- 自动化构建流程

**@velvet-ui/scripts**
- 开发脚本
- 代码生成工具

## 🚀 开发流程

### 1. 安装依赖
```bash
pnpm install
```

### 2. 开发命令
```bash
# 启动文档网站
pnpm dev

# 启动 Storybook
pnpm storybook

# 构建核心库
pnpm build

# 运行测试
pnpm test
```

### 3. 包间依赖
```bash
# 在 docs 包中引用 core 包
import { Button } from '@velvet-ui/core';
```

## 📦 包管理

### 添加新包
1. 在 `packages/` 下创建新目录
2. 添加 `package.json`
3. 运行 `pnpm install`

### 包间依赖
```json
{
  "dependencies": {
    "@velvet-ui/core": "workspace:*"
  }
}
```

### 发布流程
```bash
# 构建所有包
pnpm build

# 发布核心包
cd packages/core
pnpm publish
```

## 🎯 优势

1. **统一管理** - 所有相关项目在一个仓库
2. **共享配置** - 统一的工具链和配置
3. **依赖管理** - 包间依赖简单管理
4. **开发效率** - 跨包重构和开发
5. **版本控制** - 统一的版本管理

## 🔧 配置说明

### TypeScript 配置
- 根目录：基础配置
- 各包：特定配置

### ESLint 配置
- 根目录：共享规则
- 各包：特定规则

### Vite 配置
- core 包：库模式构建
- docs 包：应用模式构建

## 📋 注意事项

1. **包名规范** - 使用 `@velvet-ui/*` 命名空间
2. **依赖管理** - 使用 `workspace:*` 引用本地包
3. **构建顺序** - 先构建 core，再构建 docs
4. **版本同步** - 保持包版本一致性 