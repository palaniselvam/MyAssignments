/*
Task 4: Callback Function  Create a function named `getUserData` that takes a callback 
function as a parameter. Inside `getUserData`, simulate fetching data with `setTimeout` 
and then call the callback function with that should print “Call Back Function” 
after 3 seconds.  Call the `getUserData` function and log message using the callback function.  
*/

// Step 1: Define the function that accepts a callback function as a parameter
function getUserData(callback) {
    // Step 2: Use setTimeout to simulate fetching data after 3 seconds
    setTimeout(function () {
        // Step 3: Trigger the callback function after the timer ends
        callback();
    }, 3000); // 3000 milliseconds = 3 seconds
}

// Step 4: Call getUserData and pass an anonymous function as the callback
getUserData(function () {
    console.log("Call Back Function");
});

