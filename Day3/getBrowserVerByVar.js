// Global constant
const browserVersion = "Chrome";

function getBrowserVersionUsingVar() {
    if (browserVersion=="Chrome") {
        // Using let - block scoped
        var browserVersion = "Chrome - Var";
        console.log("Inside if block using Var:", browserVersion);
    }
    // This refers to the global browserVersion
    console.log("Outside if block using Var:", browserVersion);
}

// Call the function
getBrowserVersionUsingVar();