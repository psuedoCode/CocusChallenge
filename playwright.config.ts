
import { defineConfig } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  retries: 2,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'https://www.asos.com/',
    headless: false,
    video: 'on',
    screenshot: 'only-on-failure',
  },
});
