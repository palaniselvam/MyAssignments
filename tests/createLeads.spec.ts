import { test, expect } from "@playwright/test"

test("TiTle", async ({ page }) => {
    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.locator("#username").fill("democsr")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    let pageTitle = await page.title()
    console.log(pageTitle)
    await expect(page).toHaveTitle(pageTitle)
    await page.locator(".crmsfa").click()
    let pageLeadTitle = await page.title()
    console.log(pageLeadTitle)
    await expect(page).toHaveTitle(pageLeadTitle)
    await page.locator('[href="/crmsfa/control/leadsMain"]').click();
    await page.locator('[href="/crmsfa/control/createLeadForm"]').click();
    let pageCreateLeadTitle = await page.title()
    console.log(pageCreateLeadTitle)
    await expect(page).toHaveTitle(pageCreateLeadTitle)
    await page.locator("#createLeadForm_companyName").fill("Test_Company")
    await page.locator("#createLeadForm_firstName").fill("Test_PalaniSelvam")
    await page.locator("#createLeadForm_lastName").fill("Test_Jeyakani")
    await page.locator("#createLeadForm_personalTitle").fill("Mr")
    await page.locator("#createLeadForm_generalProfTitle").fill("Test_Playwright")
    await page.locator("#createLeadForm_annualRevenue").fill("1000")
    await page.locator("#createLeadForm_departmentName").fill("Test_QADepartment")
    // 1. Click the dropdown toggle to display the options menu
    await page.locator('#createLeadForm_dataSourceId').click();
    const dropdown = page.locator('#createLeadForm_dataSourceId');
    // 1. Select the option "Employee" (you can pass the visible text or the internal value)
    await dropdown.selectOption({ label: 'Employee' });
    // Alternative using value: await dropdown.selectOption({ value: 'LEAD_EMPLOYEE' });
    // 2. Loop through and log all available option texts
    // We use a CSS selector to target the child 'option' tags inside the select element
    const optionElements = await dropdown.locator('option').all();
    console.log(`Found ${optionElements.length} options:`);
    for (const option of optionElements) {
        const text = await option.textContent();
        console.log(text); // .trim() removes empty spaces like &nbsp;
    }
    await page.locator(".smallSubmit").click()
    //logout
    await page.locator('[href="/crmsfa/control/logout"]').click();
})

/*  /* //username
    //password
    //decorativeSubmit
    //button
    //Leads
    //Create Lead
    //createLeadForm_companyName
    //createLeadForm_firstName
    //createLeadForm_lastName
    //createLeadForm_personalTitle
    //createLeadForm_generalProfTitle
    //createLeadForm_annualRevenue
    //createLeadForm_departmentName
    //createLeadForm_dataSourceId
    //createLeadForm_primaryPhoneNumber
    //smallSubmit */
