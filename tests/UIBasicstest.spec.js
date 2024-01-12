const { test, expect } = require("@playwright/test"); //Need to import this package

// This is considered as one test case
// Would need to put await in every step if not there will be error as they will perform the codes asynchronously in JavaScript
// A function without any name is called anonymous function
//in playwright we have this fixture call browser which is available globally in every test
//need to wrap it in {} to allow it to identify as playwright fixtures
test("Browser Context Playwright test", async ({ browser }) => {
  //   this method will help you to open a fresh new browser similar like incognito
  const context = await browser.newContext();
  //create a page in browser
  const page = await context.newPage();
  //hit an url, you can skip the 2 lines above if you dont need any special configurations for browser instance and just use page fixture
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());
  //storing our css selector into a variable
  const userName = page.locator("#username");
  const signIn = page.locator("#signInBtn");
  const cardTitles = page.locator(".card-body a");
  //ccs
  // to input anything in text box, you have 1 method: fill
  await userName.fill("rahulshetty");
  await page.locator("[type='password']").fill("learning");
  await signIn.click();
  //playwright will wait for the locator to show up in the DOM and extract the value of the text displayed as error message
  //the waiting time depends on the time you set in the configuration file
  console.log(await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText("Incorrect ");
  //clear existing content from the text box
  await userName.fill("");
  await userName.fill("rahulshettyacademy");
  await signIn.click();
  console.log(await cardTitles.first().textContent());
  const allTitles = await cardTitles.allTextContents();
  console.log(allTitles);
});

// You can use test.only when you want to run this single test
test.only("UI Controls", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  //storing our css selector into a variable
  const userName = page.locator("#username");
  const signIn = page.locator("#signInBtn");
  const dropdown = page.locator("select.form-control");

  await dropdown.selectOption("consult");
  page.pause();
  //To select user radio button
  await page.locator(".radiotextsty").last().click();

  //There will be a pop up when you change role selection then click Okay
  await page.locator("#okayBtn").click();

  //assertion to check if radio button has been selected
  await expect(page.locator(".radiotextsty").last()).isChecked();
  await page.locator("#terms").click();
  await expect(page.locator("#terms").last()).toBeChecked();
  //you can also uncheck a check box
  await page.locator("#terms").uncheck();
  expect(await page.locator("#terms"))
    .isChecked()
    .toBeFalsy();
});
