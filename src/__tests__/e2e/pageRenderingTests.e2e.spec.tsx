import { test, expect } from '@playwright/test';

test.describe('Page Rendering', () => {
  test('Dashboard Page', async ({ page }) => {
    await page.goto('/'); 
  });

  test('Classes Page', async ({ page }) => {
    await page.goto('/classes'); 
  });

  test('Student Page', async ({ page }) => {
    await page.goto('/students'); 
  });

  test('Attendance Page', async ({ page }) => {
    await page.goto('/attendance'); 
  });

  test('Score Page', async ({ page }) => {
    await page.goto('/scores'); 
  });

  test('Setting Page', async ({ page }) => {
    await page.goto('/settings');  
  });

  test('Calendar Page', async ({ page }) => {
    await page.goto('/calendar'); 
  });
});