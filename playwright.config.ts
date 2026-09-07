import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./test/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: "http://localhost:5173",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },

  projects: [
    // The only project today. There is no authentication in this baseline, so
    // there is no `setup` project and no storageState to inherit — every spec
    // starts from a clean context and may run fully parallel.
    //
    // `testMatch` names its specs explicitly rather than globbing `*.spec.ts`,
    // which is what gives test/arch/e2eSpecRouting.test.ts something to
    // enforce: a new spec that nobody routed here fails that arch test instead
    // of being silently skipped at runtime.
    {
      name: "smoke",
      testMatch: /smoke\.spec\.ts/,
      use: { ...devices["Desktop Chrome"] },
    },
  ],

  webServer: {
    command: "npm run dev",
    url: "http://localhost:5173",
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
