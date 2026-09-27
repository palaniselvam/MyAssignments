import {expect, test} from "@playwright/test"

import path from 'path'

test('Single File upload',async({page})=>{



    await page.goto("https://www.leafground.com/file.xhtml")

    let singleFileUpload_button=page.locator("//span[@class='ui-fileupload-simple ui-widget']")
    
    let fileUploadRef= page.waitForEvent("filechooser")

    singleFileUpload_button.click()

    const fileUpload = await fileUploadRef

    //relative path

    //await fileUpload.setFiles('Data/playwright_logo.jpeg')

    //absolute path 
    await fileUpload.setFiles(path.join(__dirname,'../Data/playwright_logo.jpeg'))

    console.log(__dirname)

    let file_succes= page.locator("//span[@class='ui-fileupload-filename']")

    console.log(await file_succes.innerText())

    await expect(page.locator("//span[@class='ui-fileupload-filename']")).toContainText('playwright_logo.jpeg')

    


})