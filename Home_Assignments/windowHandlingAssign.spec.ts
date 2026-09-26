import { expect, test } from "@playwright/test"
/* Precondition: 
- Launch Chromium in non-headless mode 
- Use required fixtures 
- Navigate to http://leaftaps.com/opentaps/control/main  
    Use below credentials for Windows HA.
    Username: demosalesmanager
    Password: crmsfa
Requirements: 
- Enter the username. 
- Enter the password. 
- Click the Login button. 
- Click CRM/SFA 
- Click Leads 
- Click Merge Leads 
- Click From Lead widget 
- Select the first resulting lead id 
- Click To Lead widget 
- Select the second resulting lead id 
- Click Merge button 
- Get the message and type of the alert 
- Accept the alert 
- Click Merge button 
- Assert the title of the page 
 */

// Define a test block named ' Window Handling ' using Playwright's test runner, exposing the 'page' and 'context' fixtures
test(' Window Handling ', async ({ page, context }) => {
    
    // Register a one-time event listener on the main page to catch the next dialog/alert that appears
    page.once('dialog', async (alert) => {
        // Retrieve and store the type of the dialog (e.g., 'alert', 'confirm', 'prompt')
        let alertType = alert.type()
        // Print the dialog type to the console log
        console.log(alertType)
        // Check if the dialog is a confirmation box (which requires an OK/Cancel choice)
        if (alertType === "confirm") {
            // Click 'OK' on the confirmation dialog to accept it
            await alert.accept()
        }
    })

    // Navigate the main browser window to the Leaftaps login page URL
    await page.goto("http://leaftaps.com/opentaps/control/main")

    // Locate the Username input field using its accessible role ('textbox') and visible label/name ('Username')
    const userNameInput = page.getByRole('textbox', { name: 'Username' })

    // Fill the Username input field with the text value "demosalesmanager"
    await userNameInput.fill("demosalesmanager")

    // Locate the Password input field using its accessible role ('textbox') and visible label/name ('Password')
    const passportInput = page.getByRole('textbox', { name: 'Password' })

    // Fill the Password input field with the text value "crmsfa"
    await passportInput.fill("crmsfa")

    // Locate the Login button using its accessible role ('button') and visible label/name ('Login')
    const submitButton = page.getByRole('button', { name: 'Login' })

    // Click the Login button to submit the credentials
    await submitButton.click()

    // Locate the CRM/SFA link on the homepage using its exact text content
    const clickLink = page.getByText('CRM/SFA')

    // Click the CRM/SFA link to navigate into the module application
    await clickLink.click()

    // Locate the 'Leads' navigation tab link using its accessible role ('link') and visible name ('Leads')
    let clickLeads = page.getByRole('link', { name: 'Leads' })

    // Click the 'Leads' link to open the Leads management dashboard
    await clickLeads.click()

    // Locate the 'Merge Leads' shortcut link using its accessible role ('link') and visible name ('Merge Leads')
    let clickMerge = page.getByRole('link', { name: 'Merge Leads' })

    // Click the 'Merge Leads' link to go to the lead merging screen
    await clickMerge.click()

    // Register a context-wide event listener for a new window popup ('page') and store it as a promise 
    let pagePromise_1 = context.waitForEvent('page')

    // Click the first lookup icon (image link) which triggers the first pop-up window to open
    await page.locator("(//img[@src='/images/fieldlookup.gif'])[1]").click()

    // Await the resolution of the promise to capture and control the newly opened child window
    let childPage_1 = await pagePromise_1

    // Pause until the document object model (DOM) has fully loaded inside the first child window
    await childPage_1.waitForLoadState('domcontentloaded')

    // Retrieve the page title text of the first child window
    let childTitle = await childPage_1.title()
    // Print the title of the first child window to the console log
    console.log(childTitle);

    // Locate the link text of the first lead record inside the 4th data table of the first child window
    let selectFirstRecord = childPage_1.locator("(//table)[4]//tr[1]//td[1]/div/a[@class='linktext']")

    // Print the visible text inside the first lead record link to the console log
    console.log(await selectFirstRecord.innerText())

    // Click the first lead record link, which selects it and automatically closes this child window
    await selectFirstRecord.click()

    // Register a context-wide event listener for a second new window popup and store it as a promise
    let pagePromise_2 = context.waitForEvent('page')

    // Click the second lookup icon (image link) on the main page to trigger the second pop-up window
    await page.locator("(//img[@src='/images/fieldlookup.gif'])[2]").click()

    // Await the resolution of the promise to capture and control the second newly opened child window
    let childPage_2 = await pagePromise_2

    // Pause until the document object model (DOM) has fully loaded inside the second child window
    await childPage_2.waitForLoadState('domcontentloaded')

    // Locate the link text of the first lead record inside the 5th data table of the second child window
    let selectSecondRecord = childPage_2.locator("(//table)[5]//tr[1]//td[1]/div/a[@class='linktext']")

    // Print the visible text inside the second lead record link to the console log
    console.log(await selectSecondRecord.innerText())

    // Click the second lead record link, which selects it and automatically closes this second window
    await selectSecondRecord.click()

    // Click the 'Merge' button (found by its dangerous button class) on the main page to merge the records
    await page.locator("//a[@class='buttonDangerous']").click()

    // Pause the execution on the main page until its DOM finishes reloading after the merge action
    page.waitForLoadState('domcontentloaded')

    // Retrieve the current page title of the main window
    let pageTitle = await page.title()
    // Explicitly pause the browser execution for 5 seconds (5000 milliseconds) for visual observation
    page.waitForTimeout(5000)
    // Print the main page's title to the console log
    console.log(pageTitle)
    // Perform a soft assertion to verify that the main window redirected to the 'View Lead' page title
    await expect.soft(page).toHaveTitle('View Lead | opentaps CRM');
})
