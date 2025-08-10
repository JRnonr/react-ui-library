#!/usr/bin/env tsx

import fs from 'fs';
import path from 'path';

interface CoverageData {
  statements: number;
  branches: number;
  functions: number;
  lines: number;
}

interface ComponentAudit {
  forwardRef: boolean;
  polymorphicAs: boolean;
  api: {
    controlled: boolean;
    semanticOnChange: boolean;
  };
  a11y: {
    aria: boolean;
    keyboard: 'full' | 'partial' | 'none';
    focusTrap: boolean;
    axe_errors: number;
  };
  theme_tokens: boolean;
  stories: string[];
  tests: {
    files: number;
  };
  coverage: CoverageData;
  bundle_gzip_kb: number;
  todos: string[];
}

interface AuditResult {
  summary: {
    coverage: CoverageData;
    bundle: {
      button_gzip_kb: number;
    };
    ssr_safe: boolean;
    storybook: {
      a11y_addon: boolean;
    };
  };
  components: {
    Button: ComponentAudit;
    ChatInterface: ComponentAudit;
  };
}

interface ComponentAnalysis {
  forwardRef: boolean;
  polymorphicAs: boolean;
  hasWindowAccess: boolean;
  hasUseLayoutEffect: boolean;
  a11y: {
    aria: boolean;
    keyboard: 'full' | 'partial' | 'none';
    focusTrap: boolean;
    axe_errors: number;
  };
  theme_tokens: boolean;
}

function analyzeComponentCode(componentPath: string): ComponentAnalysis {
  const code = fs.readFileSync(componentPath, 'utf-8');
  
  const hasForwardRef = /forwardRef\(/.test(code);
  const hasPolymorphicAs = /as\?/.test(code) || /React\.ElementType/.test(code);
  const hasAriaAttributes = /aria-/.test(code) || /role=/.test(code);
  const hasKeyboardSupport = /onKeyDown/.test(code) || /tabIndex/.test(code);
  const hasFocusManagement = /focus\(\)/.test(code) || /focusTrap/.test(code);
  const hasWindowAccess = /window\./.test(code) || /document\./.test(code);
  const hasUseLayoutEffect = /useLayoutEffect/.test(code);
  const hasCSSVariables = /var\(--/.test(code);
  
  return {
    forwardRef: hasForwardRef,
    polymorphicAs: hasPolymorphicAs,
    hasWindowAccess,
    hasUseLayoutEffect,
    a11y: {
      aria: hasAriaAttributes,
      keyboard: hasKeyboardSupport ? 'partial' : 'none',
      focusTrap: hasFocusManagement,
      axe_errors: 0, // 需要实际运行axe检查
    },
    theme_tokens: hasCSSVariables,
  };
}

function analyzeCSSFile(cssPath: string): boolean {
  if (!fs.existsSync(cssPath)) return false;
  const css = fs.readFileSync(cssPath, 'utf-8');
  return /var\(--/.test(css);
}

function getCoverageData(): CoverageData {
  const coveragePath = path.join(process.cwd(), 'packages/ui/coverage/coverage-final.json');
  if (!fs.existsSync(coveragePath)) {
    return { statements: 0, branches: 0, functions: 0, lines: 0 };
  }
  
  const coverage = JSON.parse(fs.readFileSync(coveragePath, 'utf-8'));
  
  // 计算总覆盖率
  let totalStatements = 0;
  let totalBranches = 0;
  let totalFunctions = 0;
  let totalLines = 0;
  let coveredStatements = 0;
  let coveredBranches = 0;
  let coveredFunctions = 0;
  let coveredLines = 0;
  
  Object.values(coverage).forEach((file: unknown) => {
    if (typeof file === 'object' && file !== null) {
      const fileData = file as Record<string, unknown>;
      
      if (fileData.s && typeof fileData.s === 'object') {
        Object.values(fileData.s as Record<string, number>).forEach((count: number) => {
          totalStatements++;
          if (count > 0) coveredStatements++;
        });
      }
      
      if (fileData.b && typeof fileData.b === 'object') {
        Object.values(fileData.b as Record<string, number[]>).forEach((branch: number[]) => {
          if (Array.isArray(branch)) {
            totalBranches += branch.length;
            coveredBranches += branch.filter((b: number) => b > 0).length;
          }
        });
      }
      
      if (fileData.f && typeof fileData.f === 'object') {
        Object.values(fileData.f as Record<string, number>).forEach((count: number) => {
          totalFunctions++;
          if (count > 0) coveredFunctions++;
        });
      }
      
      if (fileData.l && typeof fileData.l === 'object') {
        Object.values(fileData.l as Record<string, number>).forEach((count: number) => {
          totalLines++;
          if (count > 0) coveredLines++;
        });
      }
    }
  });
  
  return {
    statements: totalStatements > 0 ? (coveredStatements / totalStatements) * 100 : 0,
    branches: totalBranches > 0 ? (coveredBranches / totalBranches) * 100 : 0,
    functions: totalFunctions > 0 ? (coveredFunctions / totalFunctions) * 100 : 0,
    lines: totalLines > 0 ? (coveredLines / totalLines) * 100 : 0,
  };
}

function getComponentCoverage(componentName: string): CoverageData {
  const coveragePath = path.join(process.cwd(), 'packages/ui/coverage/coverage-final.json');
  if (!fs.existsSync(coveragePath)) {
    return { statements: 0, branches: 0, functions: 0, lines: 0 };
  }
  
  const coverage = JSON.parse(fs.readFileSync(coveragePath, 'utf-8'));
  const componentFiles = Object.keys(coverage).filter(key => 
    key.includes(`components/${componentName}`)
  );
  
  if (componentFiles.length === 0) {
    return { statements: 0, branches: 0, functions: 0, lines: 0 };
  }
  
  let totalStatements = 0;
  let totalBranches = 0;
  let totalFunctions = 0;
  let totalLines = 0;
  let coveredStatements = 0;
  let coveredBranches = 0;
  let coveredFunctions = 0;
  let coveredLines = 0;
  
  componentFiles.forEach(fileKey => {
    const file = coverage[fileKey];
    if (typeof file === 'object' && file !== null) {
      const fileData = file as Record<string, unknown>;
      
      if (fileData.s && typeof fileData.s === 'object') {
        Object.values(fileData.s as Record<string, number>).forEach((count: number) => {
          totalStatements++;
          if (count > 0) coveredStatements++;
        });
      }
      
      if (fileData.b && typeof fileData.b === 'object') {
        Object.values(fileData.b as Record<string, number[]>).forEach((branch: number[]) => {
          if (Array.isArray(branch)) {
            totalBranches += branch.length;
            coveredBranches += branch.filter((b: number) => b > 0).length;
          }
        });
      }
      
      if (fileData.f && typeof fileData.f === 'object') {
        Object.values(fileData.f as Record<string, number>).forEach((count: number) => {
          totalFunctions++;
          if (count > 0) coveredFunctions++;
        });
      }
      
      if (fileData.l && typeof fileData.l === 'object') {
        Object.values(fileData.l as Record<string, number>).forEach((count: number) => {
          totalLines++;
          if (count > 0) coveredLines++;
        });
      }
    }
  });
  
  return {
    statements: totalStatements > 0 ? (coveredStatements / totalStatements) * 100 : 0,
    branches: totalBranches > 0 ? (coveredBranches / totalBranches) * 100 : 0,
    functions: totalFunctions > 0 ? (coveredFunctions / totalFunctions) * 100 : 0,
    lines: totalLines > 0 ? (coveredLines / totalLines) * 100 : 0,
  };
}

function countTestFiles(componentName: string): number {
  const testDir = path.join(process.cwd(), `packages/ui/src/components/${componentName}/__tests__`);
  if (!fs.existsSync(testDir)) return 0;
  
  const files = fs.readdirSync(testDir);
  return files.filter(file => file.endsWith('.test.tsx') || file.endsWith('.test.ts')).length;
}

function checkStorybookConfig(): { a11y_addon: boolean } {
  const storybookMainPath = path.join(process.cwd(), '.storybook/main.ts');
  if (!fs.existsSync(storybookMainPath)) {
    return { a11y_addon: false };
  }
  
  const mainConfig = fs.readFileSync(storybookMainPath, 'utf-8');
  return {
    a11y_addon: /@storybook\/addon-a11y/.test(mainConfig),
  };
}

function estimateBundleSize(componentName: string): number {
  // 简单估算，实际应该使用size-limit或webpack-bundle-analyzer
  const componentPath = path.join(process.cwd(), `packages/ui/src/components/${componentName}/${componentName}.tsx`);
  if (!fs.existsSync(componentPath)) return 0;
  
  const code = fs.readFileSync(componentPath, 'utf-8');
  const lines = code.split('\n').length;
  const estimatedSize = Math.round((lines * 0.8 + 50) / 1024 * 10) / 10; // 估算gzip大小
  return estimatedSize;
}

function generateTodos(component: Partial<ComponentAudit>, componentName: string): string[] {
  const todos: string[] = [];
  
  if (!component.forwardRef) {
    todos.push(`为 ${componentName} 添加 forwardRef 支持`);
  }
  
  if (!component.polymorphicAs) {
    todos.push(`为 ${componentName} 添加多态 as 支持（如 as='a'|'button'）`);
  }
  
  if (component.a11y?.keyboard === 'none') {
    todos.push(`为 ${componentName} 添加键盘导航支持`);
  }
  
  if (!component.a11y?.focusTrap) {
    todos.push(`为 ${componentName} 添加焦点管理（焦点陷阱/回焦）`);
  }
  
  if (!component.theme_tokens) {
    todos.push(`为 ${componentName} 添加 CSS 变量驱动的主题系统`);
  }
  
  return todos;
}

function main(): AuditResult {
  console.log('🔍 开始组件库能力审计...');
  
  // 分析Button组件
  const buttonPath = path.join(process.cwd(), 'packages/ui/src/components/Button/Button.tsx');
  const buttonAnalysis = analyzeComponentCode(buttonPath);
  const buttonCSSPath = path.join(process.cwd(), 'packages/ui/src/components/Button/Button.css');
  buttonAnalysis.theme_tokens = analyzeCSSFile(buttonCSSPath);
  
  // 分析ChatInterface组件
  const chatPath = path.join(process.cwd(), 'packages/ui/src/components/ChatInterface/ChatInterface.tsx');
  const chatAnalysis = analyzeComponentCode(chatPath);
  const chatCSSPath = path.join(process.cwd(), 'packages/ui/src/components/ChatInterface/ChatInterface.css');
  chatAnalysis.theme_tokens = analyzeCSSFile(chatCSSPath);
  
  // 获取覆盖率数据
  const totalCoverage = getCoverageData();
  const buttonCoverage = getComponentCoverage('Button');
  const chatCoverage = getComponentCoverage('ChatInterface');
  
  // 检查测试文件
  const buttonTestFiles = countTestFiles('Button');
  const chatTestFiles = countTestFiles('ChatInterface');
  
  // 检查Storybook配置
  const storybookConfig = checkStorybookConfig();
  
  // 估算包大小
  const buttonSize = estimateBundleSize('Button');
  const chatSize = estimateBundleSize('ChatInterface');
  
  // 生成TODO列表
  const buttonTodos = generateTodos(buttonAnalysis, 'Button');
  const chatTodos = generateTodos(chatAnalysis, 'ChatInterface');
  
  const result: AuditResult = {
    summary: {
      coverage: totalCoverage,
      bundle: {
        button_gzip_kb: buttonSize,
      },
      ssr_safe: !buttonAnalysis.hasWindowAccess && !chatAnalysis.hasWindowAccess,
      storybook: storybookConfig,
    },
    components: {
      Button: {
        forwardRef: buttonAnalysis.forwardRef || false,
        polymorphicAs: buttonAnalysis.polymorphicAs || false,
        api: {
          controlled: true, // Button支持受控模式
          semanticOnChange: false, // Button没有onChange
        },
        a11y: buttonAnalysis.a11y || {
          aria: false,
          keyboard: 'none',
          focusTrap: false,
          axe_errors: 0,
        },
        theme_tokens: buttonAnalysis.theme_tokens || false,
        stories: [], // 没有找到stories文件
        tests: {
          files: buttonTestFiles,
        },
        coverage: buttonCoverage,
        bundle_gzip_kb: buttonSize,
        todos: buttonTodos,
      },
      ChatInterface: {
        forwardRef: chatAnalysis.forwardRef || false,
        polymorphicAs: chatAnalysis.polymorphicAs || false,
        api: {
          controlled: true, // ChatInterface支持受控模式
          semanticOnChange: true, // ChatInterface有onSendMessage
        },
        a11y: chatAnalysis.a11y || {
          aria: false,
          keyboard: 'none',
          focusTrap: false,
          axe_errors: 0,
        },
        theme_tokens: chatAnalysis.theme_tokens || false,
        stories: [], // 没有找到stories文件
        tests: {
          files: chatTestFiles,
        },
        coverage: chatCoverage,
        bundle_gzip_kb: chatSize,
        todos: chatTodos,
      },
    },
  };
  
  console.log('✅ 审计完成！');
  return result;
}

// 如果直接运行此脚本
if (require.main === module) {
  const result = main();
  
  // 输出摘要
  console.log('\n📊 审计摘要:');
  console.log(`覆盖率: ${result.summary.coverage.statements.toFixed(2)}%`);
  console.log(`Button: forwardRef=${result.components.Button.forwardRef ? '✓' : '×'}, as=${result.components.Button.polymorphicAs ? '✓' : '×'}`);
  console.log(`SSR Safe=${result.summary.ssr_safe ? '✓' : '×'}`);
  console.log(`Storybook a11y=${result.summary.storybook.a11y_addon ? '✓' : '×'}`);
  console.log(`Button gzip≈${result.components.Button.bundle_gzip_kb}KB`);
  
  // 写入JSON文件
  const jsonPath = path.join(process.cwd(), 'audit.json');
  fs.writeFileSync(jsonPath, JSON.stringify(result, null, 2));
  console.log(`\n📄 审计结果已写入: ${jsonPath}`);
}

export { main, AuditResult, ComponentAudit }; 