//The Fibonacci sequence: 
// 0, 1, 1, 2, 3, 5, 8, 13, 21
// a = 0, b=1
// 0 + 1 = 1
function fibonacci(n: number) {
    // Variables initialized inside so they reset on every function call
    let first_No = 0;
    let second_No = 1;
    let combine_No = 0;

    for (let i = 0; i < n; i++) {
        console.log(first_No);
        combine_No = first_No + second_No;
        first_No = second_No;
        second_No = combine_No;
    }
}
fibonacci(5); // Works perfectly every time it is executed