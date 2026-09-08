/*
Task 3: Anonymous Function  Use an anonymous function 
with `setTimeout` to log `"This message is delayed by 2 seconds"` after 2 seconds. 
*/

// Call the built-in setTimeout and pass the anonymous function inside it
setTimeout(function () {
    console.log("This message is delayed by 2 seconds");
}, 2000); // 2000 milliseconds = 2 seconds