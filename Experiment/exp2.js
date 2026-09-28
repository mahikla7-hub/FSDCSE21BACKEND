const EventEmitter = require('events');

class Button extends EventEmitter {
    click() {
        console.log("Button clicked.");
        this.emit('click');
    }

    mouseover() {
        console.log("Mouse over button.");
        this.emit('mouseover');
    }
}

const button = new Button();

// Event listeners (similar to addEventListener)
button.on('click', () => {
    console.log("Click event handled.");
});

button.on('mouseover', () => {
    console.log("Mouseover event handled.");
});

// Simulate DOM events
button.click();
button.mouseover();