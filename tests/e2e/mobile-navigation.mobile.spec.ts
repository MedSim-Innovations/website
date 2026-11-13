import { expect, test } from "@playwright/test";

test("mobile navigation opens, traps focus, and closes with Escape", async ({ page }) => {
  await page.goto("/");
  const menuButton = page.getByRole("button", { name: /open navigation menu/i });

  await menuButton.click();
  await expect(page.getByRole("dialog", { name: /mobile navigation/i })).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog", { name: /mobile navigation/i })).toBeHidden();
  await expect(menuButton).toBeFocused();
});
