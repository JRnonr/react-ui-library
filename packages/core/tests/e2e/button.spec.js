const { test, expect } = require('@playwright/test');

test.describe('Button Component', () => {
  test('should render button correctly', async ({ page }) => {
    await page.goto('/');
    
    // 等待页面加载
    await page.waitForLoadState('networkidle');
    
    // 检查按钮是否存在
    const button = page.locator('button');
    await expect(button).toBeVisible();
  });

  test('should handle click events', async ({ page }) => {
    await page.goto('/');
    
    // 点击按钮
    const button = page.locator('button');
    await button.click();
    
    // 验证点击事件被触发（这里需要根据实际组件行为调整）
    // await expect(page.locator('.clicked')).toBeVisible();
  });

  test('should be accessible', async ({ page }) => {
    await page.goto('/');
    
    // 检查按钮的可访问性
    const button = page.locator('button');
    await expect(button).toHaveAttribute('role', 'button');
  });
}); 