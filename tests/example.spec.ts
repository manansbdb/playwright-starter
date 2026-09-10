import { test, expect } from "@playwright/test";

/** EN: Smoke visit. PT: Visita smoke. */
test("homepage has title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Example Domain/i);
});
