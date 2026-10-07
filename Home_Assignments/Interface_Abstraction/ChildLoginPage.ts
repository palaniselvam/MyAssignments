import { BasePage } from "./CommonFramworkAbstract";

class LoginPage extends BasePage {
    verifyPage(): void {
        console.log("Login Page Verified")
    }

    enterUsername(): void {
        console.log("Username Entered")
    }
    enterPassword(): void {
        console.log("Password Entered")
    }
    clickLogin() {
        console.log("Login Button Clicked")
    }
}

let objLogin = new LoginPage()
objLogin.waitForPageLoad()
objLogin.verifyPage()
objLogin.enterUsername()
objLogin.enterPassword()
objLogin.clickLogin()
objLogin.getPageTitle()