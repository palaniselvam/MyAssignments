import { expect, test } from '@playwright/test';
import { log } from 'node:console';


/* 1. Launch the browser. 
2. Navigate to https://www.decathlon.in/. 
3. Verify the user is navigated to the Decathlon home page. 
4. Click on the Search icon on the home page. 
5. Verify the search input field is enabled. 
6. Enter the product name as "shoes" in the search field. 
7. Press Enter to search the product. 
8. Capture and print the page title in the console. 
9. Verify the page title is displayed as "Search | shoes". 
10. Click on the "Running" category filter. 
11. Click on the "Men" gender filter. 
12. Click on the shoe size filter "UK 10.5". 
13. Click on the "Most relevant" sorting dropdown. 
14. Select "Price: Low to High" from the sorting options. 
15. Click on the first product from the displayed product list. 
16. Select the shoe size "UK 10.5 - EU 45" on the product detail page. 
17. Click on the "Add to Cart" button. 
18. Click on the Cart option. 
19. Fetch the total cart value. 
20. Print the total cart amount in the console. */

test('Decathlon Product Search, Filter & Add to Cart', async ({ page }) => {
    await page.goto('https://www.decathlon.in/');
    const page_Title = await page.title()
    console.log(page_Title);//Buy Sporting Goods, Sportswear and Equipments | Download App
    expect(page_Title.trim()).toBe("Buy Sporting Goods, Sportswear and Equipments | Download App");
    await page.locator("//input[@type='search']").click()
    const verify_searchEnabled = page.locator("//input[@type='search']")
    await expect(verify_searchEnabled).toBeEnabled()
    await page.locator("//input[@type='search']").fill("shoes")
    await page.keyboard.press('Enter')
    await page.waitForTimeout(15000)
    const shoespage_Title = await page.title()
    console.log(shoespage_Title);
    await page.locator("//button/span[text()='Sport']").click()
    await page.locator("//input[@data-test-id='filter-checkbox-sport_pratice_en-Running']").click()
    await page.getByRole('button', { name: "Gender" }).click()
    await page.locator("//input[@data-test-id='filter-checkbox-gender_id_en-MEN']").click()
    await page.getByRole('button', { name: "Size" }).click()
    await page.locator("//input[@data-test-id='filter-checkbox-indian_size-10.5']").click()
    await page.getByRole('button', { name: "Most relevant" }).click()
    await page.getByRole('option', { name: "Price (low → high)" }).click()
    await page.locator("(//img[@alt='Men Running Lightweight Cushion Shoes, Jogflow 100.1 - Green/Black'])[1]").click()
    await page.getByRole('button', { name: "Select size 10.5" }).click()
    await page.getByRole('button', { name: "Add to cart" }).click()
    await page.locator("//div[@class='dy-lb-close']").click()
    await page.getByRole('link', { name: "Cart" }).click()
    const total_Amount = await page.locator("//div[@data-test-id='cart:cart-checkout-total-cart-value']/p").innerText()
    console.log(total_Amount)
});
