import { defineConfig } from "@playwright/test";

/** EN: Minimal config. PT: Config mínima. */
export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  use: {
    headless: true,
    baseURL: process.env.BASE_URL || "https://example.com",
  },
});
