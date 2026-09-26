import {expect, test} from "@playwright/test"

/* Assignment 
1 Launch the URL: https://www.leafground.com/alert.xhtml 
2 Click on "Prompt Dialog". 
3 Handle the JavaScript prompt dialog using Playwright. 
4 Enter the value "Playwright" in the prompt using the accept() method. 
Expected Outcome The JavaScript prompt should be accepted successfully with the value "Playwright" 
entered in the prompt dialog. 
Guidelines 
• Use Playwright with JavaScript or TypeScript. 
• Use the appropriate Playwright dialog-handling mechanism. 
• The prompt value must be exactly: Playwright. 
• The test should run successfully without manual interaction. */
test("Prompt Dialog",async({page})=>{

    page.on('dialog',async(alert)=>{
    let alertType = alert.type()
    console.log(alertType)
    if(alertType==="prompt"){
        await alert.accept('Playwright') 
    }
    })
    
    page.goto("https://www.leafground.com/alert.xhtml")
    await page.locator("//span[text()='Show']").nth(4).click()
    const prompt_Msg =await page.locator("//span[@id='confirm_result']").innerText()
    console.log(prompt_Msg)
    await expect(page.locator("//span[@id='confirm_result']")).toHaveText(prompt_Msg)
})