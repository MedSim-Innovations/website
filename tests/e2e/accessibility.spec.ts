import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = ["/", "/products", "/services", "/story", "/contact"];

for (const path of routes) {
  test(`${path} has no serious automated accessibility violations`, async ({ page }) => {
    await page.goto(path);
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
    const seriousViolations = results.violations.filter(({ impact }) => impact === "serious" || impact === "critical");
    expect(seriousViolations).toEqual([]);
  });
}
