//Topic: TypeScript Union Type
/* 
1. Create a type alias called PaymentMethod that allows only the following values: "UPI" "CreditCard" "PayPal" 
2. Create a function named makePayment that: Accepts a parameter of type PaymentMethod. Prints the selected payment method to the console. 
3. Call the function using the following arguments: "UPI" "CreditCard" */

type paymentMethod = "UPI" | "CreditCard" | "PayPal"


function makePayment(paymentType: paymentMethod) {
    if (paymentType === "UPI") {
        console.log("Selected Payment Method is" + " " + paymentType)
    }
    else if (paymentType === "CreditCard") {
        console.log("Selected Payment Method is" + " " + paymentType)
    }
    else {
        console.log("Please Select Other Payment Method")
    }
}

makePayment("UPI")
makePayment("CreditCard")
makePayment("PayPal")