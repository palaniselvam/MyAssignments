// 1. Base Class representing a generic page
class BasePage {
    findElement(locator: string): void {
        console.log(`Finding element located by: ${locator}`);
    }

    clickElement(locator: string): void {
        console.log(`Clicking element located by: ${locator}`);
    }

    enterText(locator: string, text: string): void {
        console.log(`Entering text "${text}" into element: ${locator}`);
    }

    performCommonTasks(): void {
        console.log("Waiting for page to load, verifying title.");
    }
}

// Subclass representing a specific page (Login Page)
class LoginPage extends BasePage {
    override performCommonTasks(): void {
        console.log("Waiting for Login Page to load, verifying Login Page title");
    }
    login(user: string, pass: string): void {
        this.findElement("#username");
        this.enterText("#username", user);
        this.findElement("#password");
        this.enterText("#password", pass);
        this.findElement("#loginBtn");
        this.clickElement("#loginBtn");
        console.log(`Logged in User Name: ${user}`);
    }
}

const genericPage = new BasePage();
genericPage.findElement(".Login-link");
genericPage.performCommonTasks(); // Parent Method

const loginPage = new LoginPage();
loginPage.findElement("#logo"); 
loginPage.performCommonTasks(); // Child Method


loginPage.login("j.palaniselvam@gmail.com", "Tosca@123$");
