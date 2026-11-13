import { expect, test } from "@playwright/test";

const routes = [
  ["/", /practice for the moments that matter/i],
  ["/products", /designed for practice/i],
  ["/services", /from first idea to measured results/i],
  ["/story", /training that moves care forward/i],
  ["/contact", /plan your next/i],
  ["/privacy", /privacy notice/i],
] as const;

// Route-level smoke coverage catches broken compositions without coupling tests to implementation details.
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
  expect(response.headers()["content-security-policy"]).toContain("frame-src https://www.google.com");
  expect(response.headers()["strict-transport-security"]).toBe("max-age=31536000");
  expect(response.headers()["x-content-type-options"]).toBe("nosniff");
  expect(response.headers()["x-frame-options"]).toBe("DENY");
});

test("pages use browser-level document scrolling", async ({ page }) => {
  await page.goto("/services");
  const scrollingElement = await page.evaluate(() => document.scrollingElement?.tagName);
  expect(scrollingElement).toBe("HTML");
  const overflow = await page.locator("body").evaluate((element) => getComputedStyle(element).overflowY);
  expect(overflow).not.toBe("hidden");
});

test("contact embeds an accessible Google Map and links to directions", async ({ page }) => {
  await page.goto("/contact");

  const map = page.getByTitle("Map showing the MedSim Innovations location");
  await expect(map).toHaveCount(1);
  await expect(map).toHaveAttribute("src", /google\.com\/maps.*output=embed/);
  await expect(map).toHaveAttribute("loading", "lazy");
  await expect(map).not.toHaveAttribute("tabindex", "-1");

  const directions = page.getByRole("link", { name: /open in google maps/i });
  await expect(directions).toHaveAttribute("href", /google\.com\/maps/);
  await expect(directions).toHaveAttribute("target", "_blank");
});

test("contact methods expose distinct labels and values to assistive technology", async ({ page }) => {
  await page.goto("/contact");

  await expect(page.getByRole("link", { name: "Business enquiries: sales@medsiminnovations.com" })).toHaveAttribute(
    "href",
    "mailto:sales@medsiminnovations.com",
  );
  await expect(page.getByRole("link", { name: "Phone: +91 997 146 6122" })).toHaveAttribute(
    "href",
    "tel:+919971466122",
  );
});

test("legacy home-page hashes do not replace the current route", async ({ page }) => {
  await page.goto("/#products");
  await expect(page.getByRole("heading", { level: 1, name: /practice for the moments that matter/i })).toBeVisible();
  await expect(page).toHaveURL(/\/#products$/);
});

test("all pages reflow without horizontal document scrolling at 320 CSS pixels", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });

  for (const [path] of routes) {
    await page.goto(path);
    const dimensions = await page.locator("html").evaluate((element) => ({
      clientWidth: element.clientWidth,
      scrollWidth: element.scrollWidth,
    }));
    expect(dimensions.scrollWidth, `${path} should not overflow horizontally`).toBeLessThanOrEqual(
      dimensions.clientWidth,
    );
  }
});
