import { expect, test } from "@playwright/test"
import path from 'path'
/* Assignment Details: 
Automate uploading multiple image files on the LeafGround 
web page without interacting with the operating system's file picker. 
Preconditions:- 
Use the page fixture.- Load the URL: https://www.leafground.com/file.xhtml 
Assignment Requirements: 
Multiple File Upload- Navigate to the Advanced Upload section.
- Upload two image files using the setInputFiles() method.
- Pass the files as an array.
- Verify that both files are selected/uploaded successfully. */
test("Mutliple File upload", async ({ page }) => {
    await page.goto("https://www.leafground.com/file.xhtml")
    let multifileupload_button = page.locator("(//span[@class='ui-button-text ui-c'])[3]")
    let fileUploadRef = page.waitForEvent("filechooser")
    await multifileupload_button.click()
    const multiFileUpload = await fileUploadRef

    let multileFiles_array = ['../Data/javascript_logo.png', '../Data/playwright_logo.jpeg'];
    const absolutePaths = [];

    for (let i = 0; i < multileFiles_array.length; i++) {
        absolutePaths.push(path.join(__dirname, multileFiles_array[i]));
    }
    await multiFileUpload.setFiles(absolutePaths);

    /*  const absolutePaths = multileFiles_array.map(file => path.join(__dirname, file));
        await multiFileUpload.setFiles(absolutePaths); */ //using map
        
    //Verify that both files are selected/uploaded successfully
    // 1. Locate the container holding the dynamically created uploaded file rows
    const uploadedFileRows = page.locator("//div[@class='ui-fileupload-filename']");
    // 2. Assert that exactly 2 file entries are loaded in the browser UI
    await expect(uploadedFileRows).toHaveCount(2);
    // 3. (Optional but recommended) Validate that the correct specific filenames match
    await expect(uploadedFileRows.nth(0)).toContainText('javascript_logo.png');
    await expect(uploadedFileRows.nth(1)).toContainText('playwright_logo.jpeg');
    console.log("Verification is successful,selected/uploaded successfully.");
})