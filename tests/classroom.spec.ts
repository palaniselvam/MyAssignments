// 1. Bring in the tools
import { test } from '@playwright/test';

test('Open Google homepage', async ({ page }) => {
    // Navigate to the Salesforce login page
    await page.goto('https://login.salesforce.com/?locale=in');
    
    // Pause execution for 3 seconds to let the page visually load
    await page.waitForTimeout(3000);
    
    // Locate the username input field and enter the email address
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
    
    // Click the login button (triggers initial validation/password prompt)
    await page.locator('#Login').click();
    
    // Locate the password input field and enter the password
    await page.locator('#password').fill('TestLeaf@2025');
    
    // Click the login button again to submit the credentials
    await page.locator('#Login').click();
    
    // Retrieve the title of the current page and log it to the console
    let pageTitle = await page.title();
    console.log(pageTitle);
    
    // Retrieve the URL of the current page and log it to the console
    let pageUrl = page.url();
    console.log(pageUrl);
});