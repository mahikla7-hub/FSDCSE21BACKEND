const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const emitter = new MyEmitter();

emitter.on('greet', (name) => {
    console.log(`Hello, ${name}! Welcome.`);
});

emitter.on('exit', () => {
    console.log("Goodbye! Exiting the application.");
});

emitter.emit('greet', 'Fuzail');
emitter.emit('exit');


class Button extends EventEmitter {
    click() {
        console.log("\nCall button click event");
        this.emit("click");
    }

    mouseover() {
        console.log("\nCall Button mouseover event");
        this.emit("mouseover");
    }
}


const myButton = new Button();

myButton.on("click", () => {
    console.log("--> Button was clicked!");
});

myButton.on("mouseover", () => {
    console.log("--> Mouse hovered over button!");
});


myButton.click();
myButton.mouseover();