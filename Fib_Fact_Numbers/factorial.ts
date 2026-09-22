//The Factorial Number 

/* 1! = 1
2! = 2 × 1 = 2
3! = 3 × 2 × 1 = 6
4! = 4 × 3 × 2 × 1 = 24 */

function factorial(n: number) {
    // 1. Handle edge case: Factorials do not exist for negative numbers
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    let fact = 1
    for (let i = 2; i <= n; i++) {
        fact = fact * i;
    }
    console.log("The factorial of" + " " + n + " " + "is" + " " + fact)
}

factorial(5)