document.addEventListener("keydown", event => {
    switch (event.keyCode) {
        case LEFT:
            moveLeft();
            break;
        case DOWN:
            moveDown();
            break;
        case RIGHT:
            moveRight();
            break;
        case PAUSE:
            pauseGame();
            break;
        default:
            break;
    }
});