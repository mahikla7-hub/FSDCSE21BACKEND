console.log("Start");

// Executes in the nextTick queue
process.nextTick(() => {
    console.log("process.nextTick()");
});

// Executes in the Timers phase
setTimeout(() => {
    console.log("setTimeout()");
}, 0);

// Executes in the Check phase
setImmediate(() => {
    console.log("setImmediate()");
});

console.log("End");