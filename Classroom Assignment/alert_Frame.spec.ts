import { expect, test } from "@playwright/test"
/* Launch the browser
1.Navigate to the URL- https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm
2.Switch to the iFrame containing the "Try it" button
3.Ensure the webpage elements are fully loaded (Playwright auto-waits)
4.Click the "Try It" button inside the frame
5.Handle the Confirm Alert by clicking either "OK" or "Cancel"
6.Verify that the appropriate message is displayed on the webpage "You pressed OK!" */
test("Automating Alert & Frame Interactions", async ({ page }) => {

    page.once('dialog', async (alert) => {
        let alertType = alert.type()
        if (alertType === "confirm") {
            await alert.dismiss()
        }
    })

    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm')
    let iframe_Container = page.frameLocator("//iframe[@id='iframeResult']")
    let tryit_Button = iframe_Container.locator("//button[normalize-space()='Try it']")
    await tryit_Button.click()
    const get_Msg = await iframe_Container.locator("//p[@id='demo']").innerText()
    console.log(get_Msg);//You pressed Cancel!
    //verify using Non-retry assertion/generic assertion
    expect(get_Msg).toBe("You pressed Cancel!")
})