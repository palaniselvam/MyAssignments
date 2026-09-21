import { expect, test } from '@playwright/test';
/* 1. Launch the browser. 
2. Navigate to https://www.pvrcinemas.com/. 
3. Select the required city. 
4. Click on the Cinema option. 
5. Click on the Select Cinema dropdown. 
6. Select any available cinema from the list. 
7. Select any available date (Today / Tomorrow / Upcoming). 
8. Select any available movie from the movie list. 
9. Select any available show time. 
10. Click on the Submit button. 
11. Accept the consent / cookie popup if displayed. 
12. Accept any additional confirmation popup if displayed. 
13. Select any available seat from the seating layout. 
14. Verify the selected seat information is displayed. 
15. Verify the total ticket amount is displayed. 
16. Verify the page title is displayed correctly. 
17. Click on the Proceed button. */
test('PVR Ticket Book', async ({ page }) => {
    await page.goto('https://www.pvrcinemas.com/');
    await page.getByRole('combobox', { name: "Cities" }).fill("Madurai")
    await page.keyboard.press('Enter')
    await page.locator("//li[text()='Madurai']").click()
    await page.locator("//*[text()='Cinema']").click()
    await page.locator("//div[@id='cinema']").click()
    await page.locator("//*[text()='INOX Vishaal De Mal,Madurai Madurai']").click()
    await page.locator("//span[normalize-space()='Tomorrow, 22 Sep']").click()
    await page.locator("//li/span[text()='VIBE']").click()
    await page.locator("//span[normalize-space()='07:00 PM']").click()
    await page.getByRole('button', { name: "Submit" }).click()
    await page.locator("//div/button[text()='Accept']").click()
    await page.waitForTimeout(10000)
    await page.locator("//div/button[text()='Accept']").click()
    await page.locator("//tr/td/span[text()='J']/ancestor::tr/td/span[text()='18']").click()
    let booking_Tile = await page.locator("//div[@class='book-head']").innerText()
    console.log(booking_Tile)
    expect(booking_Tile.trim()).toBe("Booking Summary");
    let move_Title = await page.locator("//div[@class='summary-movies-content']/h5").innerText()
    console.log(move_Title)
    let seat_No = await page.locator("//div[@class='select-seat-number']/div[@class='seat-number']/p").innerText()
    console.log(seat_No)
    let grand_Total_Title = await page.getByRole('heading', { name: "Grand Total" }).innerText()
    console.log(grand_Total_Title)
    let grand_Total = await page.locator("//div[@class='grand-prices']/h6").innerText();
    const cleanedTotal = grand_Total.trim();
    console.log(cleanedTotal);
    expect(cleanedTotal).toBe("160.60");
    const Title = await page.title()
    console.log(Title);//PVR Cinemas
    let verify_Proceedbutton = await page.getByRole('button', { name: "Proceed" }).innerText()
    console.log(verify_Proceedbutton)
});


