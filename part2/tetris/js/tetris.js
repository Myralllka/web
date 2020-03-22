var playground = createPlayground();

// will add object positions to the emply playground array
function renderPositions() {
    objects.forEach(object => {
        object.position.forEach(([rowIndex, cellIndex]) => {
            playground[rowIndex][cellIndex] = TYPE_COLORS[object.type]
        })
    });
}

function moveDown(obj) {
    console.log('moving down');
    // 1. get current object - done
    let currentObject = getCurrentObject();
    if (currentObject === 0 || !(currentObject !== 'undefined')) {
        objects.push(createObj());
        currentObject = getCurrentObject();
    }
    // 2. re-define objects - done
    currentObject.position.forEach(position => (position[0] > 0 && (position[0] -= 1)));
    playground = createPlayground();
    renderPlayground();
    // 3. re-define clear playground
    let checker = false;
    let current_minimum = Math.min.apply(null, getCurrentObject().position.map(function (e) {
        return e[0]
    }));
    // if (currentObject === 0) {
    //     objects.push(createObj());
    //     currentObject = getCurrentObject();
    // }
    for (let pos of getCurrentObject().position) {
        if (current_minimum === 0) {
            checker = true;
            continue;
        }
        if (pos[0] !== current_minimum) continue;
        if (typeof playground[pos[0] - 1][pos[1]] !== 'undefined') {
            checker = true;
            break
        }
    }
    if (checker) {
        currentObject.state = "static";
    }
    // 4. re-renderPositions
    playground = createPlayground();
    // 5. re-renderPlayground
    renderPlayground();
}

function moveRight(obj) {
    console.log('moving right');
    let currentObject = getCurrentObject();
    let current_minimum = Math.min.apply(null, getCurrentObject().position.map(function (e) {
        return e[1]
    }));
    let checker = true;
    currentObject.position.forEach(position => (position[0] > current_minimum && position[1] < 4 || (checker = false)));
    if (checker) currentObject.position.forEach(position => (position[0] > 0 && position[1] < 4 && (position[1] += 1)));
    playground = createPlayground();
    renderPlayground()
}

function moveLeft(obj) {
    console.log('moving left');
    let currentObject = getCurrentObject();
    let current_minimum = Math.min.apply(null, getCurrentObject().position.map(function (e) {
        return e[1]
    }));
    let checker = true;
    currentObject.position.forEach(position => (position[0] > 0 && position[1] > 0 || (checker = false)));
    if (checker) currentObject.position.forEach(position => (position[0] > 0 && position[1] < 5 && (position[1] -= 1)));
    playground = createPlayground();
    renderPlayground()
}

function pauseGame() {
    if (STATE === 1) {
        console.log('pausing the game');
        clearInterval(gameInterval);
    } else {
        console.log('continuing the game');
        gameInterval = setInterval(() => {
            moveDown();
        }, 1000);
    }
}

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function createObj() {
    let obj = [{
        type: 'L',
        state: 'falling',
        position: [[10, 1], [9, 1], [9, 2], [9, 3]]
    }, {
        type: 'T',
        state: 'falling',
        position: [[9, 2], [9, 3], [9, 1], [10, 2]]
    }, {
        type: 'I',
        state: 'falling',
        position: [[9, 2], [8, 2], [10, 2]]
    }
    ];
    return choose(obj);
}

// Events
// 1. move to bottom
// 2. move right
// 3. move left
// 4. pause
// 5. game over
// 6. (re)render playground

renderPlayground();