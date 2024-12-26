import { defineConfig } from '@playwright/test';

export default defineConfig({
    use: {
        baseURL: 'http://localhost:3000', // Replace with your local server URL
    },
    testIgnore: ['**/unit/**', '**/*.test.tsx'], // Ignore unit test files
});
