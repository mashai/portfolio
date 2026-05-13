import { test, expect } from '@playwright/test';

const viewports = [
  { label: '375', width: 375, height: 812 },
  { label: '768', width: 768, height: 1024 },
  { label: '1280', width: 1280, height: 800 },
  { label: '1920', width: 1920, height: 840 },
] as const;

for (const viewport of viewports) {
  test(`baseline ${viewport.label}px`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto('/');
    await page.evaluate(() => document.querySelectorAll('video').forEach(v => v.pause()));
    await expect(page).toHaveScreenshot(`baseline-${viewport.label}.png`, { fullPage: true });
  });
}
