// Global constant
const browserVersion = "Chrome";

function getBrowserVersionUsingLet() {
    if (browserVersion== "Chrome") {
        // Using let - block scoped
        let browserVersion= "Chrome - let";
        console.log("Inside if block using let:", browserVersion);
    }
    // This refers to the global browserVersion
    console.log("Outside if block using let:", browserVersion);
}

// Call the function
getBrowserVersionUsingLet();