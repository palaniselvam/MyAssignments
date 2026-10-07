import { PageRules } from "./FrameworkInterface"

export abstract class BasePage implements PageRules {

    verifyPage(): void {
        throw new Error("Method not implemented.")
    }

    waitForPageLoad() {
        console.log("Waiting for page to load ")
    }
    getPageTitle() {
        console.log("Getting page title")
    }
}
