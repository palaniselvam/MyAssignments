import { BasePage } from "./CommonFramworkAbstract";

class ProductPage extends BasePage {
    verifyPage(): void {
        console.log("Product Page Verified ")
    }
    searchProduct(): void {
        console.log("Search Product Page")
    }
    addToCart(): void {
        console.log("AddToCard Page ")
    }
}

let objProductPage = new ProductPage()
objProductPage.waitForPageLoad()
objProductPage.verifyPage()
objProductPage.searchProduct()
objProductPage.addToCart()
objProductPage.getPageTitle()