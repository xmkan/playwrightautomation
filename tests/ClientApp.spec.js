const { test, expect } = require("@playwright/test"); //Need to import this package

test.only("Browser Context Playwright test", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill("ngxueminlta@gmail.com");
  await page.locator("#userPassword").fill("S83384534a$A");
  await page.locator("[value='Login']").click();
  await page.locator(".card-body b").first().waitFor();
  // It will wait until the network comes to an idle state
  //await page.waitForLoadState("networkidle");
  const titles = await page.locator(".card-body b").allTextContents();
  console.log(titles);
});
