document.addEventListener("keydown", event => {
    switch (event.keyCode) {
        case DOWN:
            moveDown();
            break;
        case LEFT:
            moveLeft();
            break;
        case RIGHT:
            moveRight();
            break;
        case PAUSE:
            STATE = STATE ^ 1;
            pauseGame();
            break;
        default:
            break;
    }
});