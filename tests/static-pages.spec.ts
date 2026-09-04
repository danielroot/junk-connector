import { expect, test } from "@playwright/test";

test("homepage exposes booking and approved regions", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Book junk removal online" })).toBeVisible();
  await page.getByRole("link", { name: "Start booking" }).click();
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
  await page.locator(".booking-module").getByRole("link", { name: "Book", exact: true }).click();
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

test("item page has prep notes and FAQ", async ({ page }) => {
  await page.goto("/junk-removal/mattress-removal/");
  await expect(page.getByRole("heading", { name: "Book Mattress Removal Online" })).toBeVisible();
  await expect(page.getByText("Count each mattress and box spring separately.")).toBeVisible();
  await expect(page.getByRole("button", { name: /Can I book mattress removal/ })).toBeVisible();
});

test("FAQ page groups booking, pricing, and item questions", async ({ page }) => {
  await page.goto("/faq/");
  await expect(page.getByRole("heading", { name: "Junk removal FAQ" })).toBeVisible();
  await expect(page.getByRole("button", { name: "What is Junk Connector?" })).toBeVisible();
  await expect(page.getByRole("button", { name: "How does online junk removal pricing work?" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Chicago, Illinois" })).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "Mattress Removal" })).toBeVisible();
  await expect(page.getByRole("link", { name: "View guide" })).toHaveCount(0);
  await expect(page.getByRole("link", { name: "View prep notes" }).first()).toHaveAttribute(
    "href",
    "/junk-removal/mattress-removal/",
  );
});
