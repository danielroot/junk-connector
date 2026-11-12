import { expect, test } from "@playwright/test";

test("homepage exposes booking and approved regions", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Book junk removal online" })).toBeVisible();
  const locationsMenu = page.locator(".nav-menu").filter({ hasText: "Locations" });
  await locationsMenu.getByRole("button", { name: "Locations" }).click();
  await expect(locationsMenu.getByRole("link", { name: "New York City, NY" })).toHaveAttribute(
    "href",
    "/locations/ny/new-york/",
  );
  const itemsMenu = page.locator(".nav-menu").filter({ hasText: "Items for Removal" });
  await itemsMenu.getByRole("button", { name: "Items for Removal" }).click();
  await expect(itemsMenu.getByRole("link", { name: "Mattress Removal" })).toHaveAttribute(
    "href",
    "/junk-removal/mattress-removal/",
  );
  await page.getByRole("link", { name: "Get a Free Quote", exact: true }).click();
  await expect(page).toHaveURL(/\/book\/\?campaign=homepage&back=%2F$/);
  await expect(page.getByRole("region", { name: "Booking page" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Back to guide" })).toHaveAttribute("href", "/");
  await expect(page.locator("#quote-form")).toHaveAttribute(
    "data-attribution-source",
    /replace-with-booking-partner-attribution-source/,
  );
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(page.locator('iframe[title="Booking form"]')).toHaveAttribute(
    "src",
    /order\.goloadup\.com\/retail\/orders\/new/,
  );
  await expect(page.locator('iframe[title="Booking form"]')).toHaveAttribute(
    "src",
    /host_source=replace-with-booking-partner-attribution-source/,
  );
  await expect(page.locator('iframe[title="Booking form"]')).toHaveClass(/booking-iframe/);
  await page.goto("/");
  await expect(page.getByRole("link", { name: "View booking guide" }).first()).toBeVisible();
});

test("location page has local signals and booking module", async ({ page }) => {
  await page.goto("/locations/il/chicago/");
  await expect(page.getByRole("heading", { name: "Book Junk Removal in Chicago, IL" })).toBeVisible();
  await expect(page.getByText("Apartment and condo cleanouts")).toBeVisible();
  await page.locator(".booking-module").click();
  await expect(page).toHaveURL(
    /\/book\/\?campaign=chicago-il&region=chicago&back=%2Flocations%2Fil%2Fchicago%2F%23booking$/,
  );
  await expect(page.getByRole("region", { name: "Booking page" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Back to guide" })).toHaveAttribute(
    "href",
    "/locations/il/chicago/#booking",
  );
  await expect(page.locator('iframe[title="Booking form"]')).toHaveAttribute(
    "src",
    /order\.goloadup\.com\/retail\/orders\/new/,
  );
  await expect(page.getByRole("link", { name: "Open booking page" })).toHaveCount(0);
  await expect(page.locator('iframe[title="Booking form"]')).toHaveAttribute(
    "src",
    /utm_campaign=chicago-il/,
  );
  await expect(page.locator('iframe[title="Booking form"]')).not.toHaveAttribute(
    "src",
    /zip=/,
  );
  await expect(page.locator('iframe[title="Booking form"]')).toHaveClass(/booking-iframe/);
});

test("expanded city guides render their local pages", async ({ page }) => {
  const cities = [
    ["/locations/ny/new-york/", "Book Junk Removal in New York City, NY"],
    ["/locations/ca/los-angeles/", "Book Junk Removal in Los Angeles, CA"],
    ["/locations/tx/houston/", "Book Junk Removal in Houston, TX"],
  ] as const;

  for (const [path, heading] of cities) {
    await page.goto(path);
    await expect(page.getByRole("heading", { name: heading })).toBeVisible();
    await expect(page.locator(".booking-module")).toBeVisible();
  }
});

test("item page has prep notes and FAQ", async ({ page }) => {
  await page.goto("/junk-removal/mattress-removal/");
  await expect(page.getByRole("heading", { name: "Book Mattress Removal Online" })).toBeVisible();
  await expect(page.getByText("Count each mattress and box spring separately.")).toBeVisible();
  await expect(page.locator("summary", { hasText: /Can I book mattress removal/ })).toBeVisible();
});

test("FAQ page groups booking, pricing, and item questions", async ({ page }) => {
  await page.goto("/faq/");
  await expect(page.getByRole("heading", { name: "Junk removal FAQ" })).toBeVisible();
  await expect(page.locator("summary", { hasText: "What is Junk Connector?" })).toBeVisible();
  await expect(
    page.locator("summary", { hasText: "How does online junk removal pricing work?" }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Chicago, Illinois" })).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "Mattress Removal" })).toBeVisible();
  await expect(page.getByRole("link", { name: "View guide" })).toHaveCount(0);
  await expect(page.getByRole("link", { name: "View prep notes" }).first()).toHaveAttribute(
    "href",
    "/junk-removal/mattress-removal/",
  );
});
