// @ts-check
const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests", //a folder that contains all your test files, test runner will scan this test directory and executed
  /* Maximum time out test can run for 30 seconds */
  timeout: 30 * 1000,
  expect: {
    timeout: 5000, //5 seconds of waiting time is set for expect time out
  },
  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  // you can declare what browser to test
  // want to capture screenshot logs
  use: {
    browserName: "chromium",
    headless: false,
  },
});
