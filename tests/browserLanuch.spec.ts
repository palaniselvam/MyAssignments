/*
   Browser
   Browser Context
   Page
*/
//It tells your code to pull in the test function from the official Playwright 
//Test runner library so you can use it to write and run your test cases.

/*
import { test }: This grabs the specific test block creator from the package. 
The test function is what you use to declare a new test case (e.g., test('should login successfully', async ({ page }) => { ... })).from "@playwright/test": This specifies the exact npm package 
where that function lives (@playwright/test is Playwright's official, built-in test runner).
import {test} from "@playwright/test"
*/
// 1. Bring in the tools
import { test } from '@playwright/test';

test('Open Google homepage', async ({ page }) => {
  // 1. Navigate to the URL
  await page.goto('https://www.redbus.in');

  // 2. Wait for 3 seconds just so you can see it before it closes
  await page.waitForTimeout(3000); 
});