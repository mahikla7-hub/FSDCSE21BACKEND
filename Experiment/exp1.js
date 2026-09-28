const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const emitter = new MyEmitter();

// Register greet event
emitter.on('greet', (name) => {
    console.log(`Hello, ${name}! Welcome.`);
});

// Register exit event
emitter.on('exit', () => {
    console.log("Goodbye! Exiting the application.");
});

// Trigger events
emitter.emit('greet', 'Khushi');
emitter.emit('exit');