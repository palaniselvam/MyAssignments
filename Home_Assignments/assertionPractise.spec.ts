import { expect, test } from "@playwright/test";

/* Part 1 — Navigate to the Page 
1. Launch the Playwright test.
2. Navigate to the page: https://leafground.com/input.xhtml.  
Part 2 — Validate a Disabled Textbox 
1. Locate the textbox with placeholder "Disabled". 
2. Assert that the textbox is disabled using toBeDisabled(). 
Part 3 — Validate an Enabled Textbox 
1. Locate the textbox with placeholder "Type your name".
2. Assert that the textbox is enabled/editable using toBeEditable(). 
3. Type your name into the textbox.
Part 4 — Soft Assertion Practice 
1. Pick a textbox that is not disabled.
2. Use a soft assertion with toBeDisabled().
3. Observe the test result.
4. Understand how a soft assertion behaves when the assertion fails.  
Part 5 — Fill Data 
1. Choose any enabled textbox. 
2. Clear the existing text using .fill().
3. Enter a new value, for example: "Playwright Learning".
Clear the existing text using .fill(). 
Enter a new value, for example: "Playwright Learning". */
test("Playwright Input & Assertion Practice", async ({ page }) => {
    await page.goto("https://leafground.com/input.xhtml")
    let disable_text = page.locator("//input[@placeholder='Disabled']")
    await expect(disable_text).toBeDisabled()
    let enable_text = page.locator("(//input[@role='textbox'])[1]")
    await expect(enable_text).toBeEditable()

    //Error : 
    //let enable_text_True = page.locator("//input[@aria-disabled='false']")
    //await expect.soft(enable_text_True).toBeDisabled()
    /*    Testing stopped early after 1 maximum allowed failures.
     1 failed
       [chromium] › tests\assertionPractise.spec.ts:24:5 › Playwright Input & Assertion 
       Practice ──────
     1 error was not a part of any test, see above for details
    */
    let enable_text_True = page.locator("//input[@id='j_idt106:float-input']")
    await expect.soft(enable_text_True).toBeEnabled()
    await enable_text.fill("Playwright Learning");
})
