const TYPE_COLORS = {
    "L": 'red',
    "T": 'purple',
    "I": 'green'
};

// Event keys
const DOWN = 40;
const LEFT = 37;
const RIGHT = 39;
const PAUSE = 32;
let STATE = 0;
var gameInterval = setInterval(() => {
    moveDown();
}, 1000);