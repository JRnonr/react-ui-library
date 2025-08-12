#!/usr/bin/env node

/* eslint-disable no-console */

/**
 * 检查项目是否正确使用pnpm的脚本
 * 运行: node scripts/check-pnpm.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

console.log('🔍 检查项目PNPM使用情况...\n');

let hasIssues = false;

// 检查根目录
console.log('📁 检查根目录...');
const rootPackageJson = path.join(projectRoot, 'package.json');
const rootPnpmLock = path.join(projectRoot, 'pnpm-lock.yaml');
const rootPnpmWorkspace = path.join(projectRoot, 'pnpm-workspace.yaml');

if (!fs.existsSync(rootPnpmLock)) {
  console.log('❌ 根目录缺少 pnpm-lock.yaml 文件');
  hasIssues = true;
} else {
  console.log('✅ 根目录有 pnpm-lock.yaml 文件');
}

if (!fs.existsSync(rootPnpmWorkspace)) {
  console.log('❌ 根目录缺少 pnpm-workspace.yaml 文件');
  hasIssues = true;
} else {
  console.log('✅ 根目录有 pnpm-workspace.yaml 文件');
}

// 检查是否有npm的lock文件
const rootNpmLock = path.join(projectRoot, 'package-lock.json');
if (fs.existsSync(rootNpmLock)) {
  console.log('❌ 根目录发现 package-lock.json 文件，应该删除');
  hasIssues = true;
}

// 检查packages目录
console.log('\n📦 检查packages目录...');
const packagesDir = path.join(projectRoot, 'packages');
if (fs.existsSync(packagesDir)) {
  const packages = fs.readdirSync(packagesDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  for (const pkg of packages) {
    const pkgDir = path.join(packagesDir, pkg);
    const pkgPackageJson = path.join(pkgDir, 'package.json');
    const pkgNpmLock = path.join(pkgDir, 'package-lock.json');
    const pkgYarnLock = path.join(pkgDir, 'yarn.lock');

    if (fs.existsSync(pkgNpmLock)) {
      console.log(`❌ ${pkg} 包发现 package-lock.json 文件，应该删除`);
      hasIssues = true;
    }

    if (fs.existsSync(pkgYarnLock)) {
      console.log(`❌ ${pkg} 包发现 yarn.lock 文件，应该删除`);
      hasIssues = true;
    }

    if (fs.existsSync(pkgPackageJson)) {
      console.log(`✅ ${pkg} 包配置正常`);
    }
  }
}

// 检查docs目录
console.log('\n📚 检查docs目录...');
const docsDir = path.join(projectRoot, 'docs');
const docsNpmLock = path.join(docsDir, 'package-lock.json');
const docsYarnLock = path.join(docsDir, 'yarn.lock');

if (fs.existsSync(docsNpmLock)) {
  console.log('❌ docs目录发现 package-lock.json 文件，应该删除');
  hasIssues = true;
}

if (fs.existsSync(docsYarnLock)) {
  console.log('❌ docs目录发现 yarn.lock 文件，应该删除');
  hasIssues = true;
}

// 检查根目录package.json中的packageManager字段
try {
  const rootPackage = JSON.parse(fs.readFileSync(rootPackageJson, 'utf8'));
  if (rootPackage.packageManager && rootPackage.packageManager.startsWith('pnpm@')) {
    console.log('✅ 根目录package.json正确配置了pnpm版本');
  } else {
    console.log('❌ 根目录package.json缺少或错误配置了packageManager字段');
    hasIssues = true;
  }
} catch {
  console.log('❌ 无法读取根目录package.json文件');
  hasIssues = true;
}

// 总结
console.log('\n📋 检查总结:');
if (hasIssues) {
  console.log('❌ 发现一些问题需要修复:');
  console.log('   1. 删除所有 package-lock.json 文件');
  console.log('   2. 删除所有 yarn.lock 文件');
  console.log('   3. 运行 pnpm install 重新安装依赖');
  console.log('\n💡 建议运行以下命令修复:');
  console.log('   find . -name "package-lock.json" -delete');
  console.log('   find . -name "yarn.lock" -delete');
  console.log('   pnpm install');
} else {
  console.log('✅ 项目PNPM配置正常！');
  console.log('\n🎉 可以正常使用以下命令:');
  console.log('   pnpm install    # 安装依赖');
  console.log('   pnpm dev        # 启动开发服务器');
  console.log('   pnpm build      # 构建项目');
  console.log('   pnpm test       # 运行测试');
}

console.log('\n📖 更多信息请查看 PNPM_USAGE.md 文件'); 