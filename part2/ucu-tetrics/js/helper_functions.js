var getCurrentObject = () => objects.find(object => object.state === 'falling') || 0;
var createPlayground = () => (new Array(10).fill().map(el => (new Array(5).fill())));
function clear_playground() {
    // for (let column in playground) {
    //     console.log(row);
    //     let flag = true;
    //     for (cell in row) {
    //         if (!cell !== 'undefined') {
    //             flag = false
    //         }
    //     }
    //     if (flag) {
    //         row = new Array(5).fill();
    //         console.log('here');
    //     }
    // }
}