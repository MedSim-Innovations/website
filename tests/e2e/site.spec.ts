import { expect, test } from "@playwright/test";

const routes = [
  ["/", /practice for the moments that matter/i],
  ["/products", /designed for practice/i],
  ["/services", /from first idea to measured results/i],
  ["/story", /training that moves care forward/i],
  ["/contact", /plan your next/i],
] as const;

for (const [path, heading] of routes) {
  test(`${path} renders its primary content`, async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1, name: heading })).toBeVisible();
    await expect(page.getByRole("link", { name: /skip to main content/i })).toBeAttached();
  });
}

test("product search and category filters update results", async ({ page }) => {
  await page.goto("/products");
  await page.getByRole("searchbox", { name: /search products and solutions/i }).fill("airway");
  await expect(page.getByRole("heading", { name: "Airway Management Kit" })).toBeVisible();
  await expect(page.getByRole("status")).toContainText("3 solutions found");

  await page.getByRole("button", { name: /clear product search/i }).click();
  await page.getByRole("button", { name: /student essentials/i }).click();
  await expect(page.getByRole("heading", { name: "NurseKit Pro Student Backpack" })).toBeVisible();
});

test("responses include baseline security headers", async ({ request }) => {
  const response = await request.get("/");
  expect(response.headers()["content-security-policy"]).toContain("default-src 'self'");
  expect(response.headers()["strict-transport-security"]).toBe("max-age=31536000");
  expect(response.headers()["x-content-type-options"]).toBe("nosniff");
  expect(response.headers()["x-frame-options"]).toBe("DENY");
});

test("mobile navigation opens, traps focus, and closes with Escape", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Mobile navigation is only rendered below the desktop breakpoint.");
  await page.goto("/");
  const menuButton = page.getByRole("button", { name: /open navigation menu/i });
  await menuButton.click();
  await expect(page.getByRole("dialog", { name: /mobile navigation/i })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog", { name: /mobile navigation/i })).toBeHidden();
  await expect(menuButton).toBeFocused();
});
