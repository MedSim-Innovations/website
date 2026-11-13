import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = ["/", "/products", "/services", "/story", "/contact", "/privacy"];

// Automated checks cover detectable regressions; CONTRIBUTING.md documents the required manual review.
for (const path of routes) {
  test(`${path} has no automated WCAG A or AA violations`, async ({ page }) => {
    await page.goto(path);

    // Contrast must be measured after the short route-entry fade reaches its final rendered colors.
    await page.locator(".section-enter").evaluate(async (element) => {
      await Promise.all(element.getAnimations({ subtree: true }).map((animation) => animation.finished));
    });

    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
    expect(results.violations).toEqual([]);
  });
}

for (const path of routes) {
  test(`${path} exposes the Privacy link through sequential keyboard navigation`, async ({ page }) => {
    await page.goto(path);
    const privacyLink = page.getByRole("link", { name: "Privacy", exact: true });
    await expect(privacyLink).toHaveCount(1);

    // Use the same sequential navigation as a keyboard user instead of focusing the link programmatically.
    for (let press = 0; press < 60; press += 1) {
      await page.keyboard.press("Tab");
      if (await privacyLink.evaluate((link) => link === document.activeElement)) break;
    }

    await expect(privacyLink).toBeFocused();
    await expect(privacyLink).toBeInViewport();
  });
}
