var getCurrentObject = () => objects.find(object => object.state === 'falling') || 0;
var createPlayground = () => (new Array(10).fill().map(el => (new Array(5).fill())));

function arrayRemove(arr, value) { return arr.filter(function(ele){ return ele !== value; });}
function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}
function clear_playground() {
    console.log(objects);
    console.log(playground);
    for (let rowIndex = playground.length - 1; rowIndex >= 0; rowIndex--) {
        let counter = 0;
        for (let cellIndex = 0; cellIndex < playground[rowIndex].length; cellIndex++) {
            if (playground[rowIndex][cellIndex]) {
                counter++;
            }
        }
        if (counter === 5 && getCurrentObject() === 0) {
            for (let obj of objects) {
                for (let pos of obj.position){
                    for (let arr of [[rowIndex, 0], [rowIndex, 1], [rowIndex, 2], [rowIndex, 3], [rowIndex, 4]]){
                        if (arraysEqual(arr, pos)){
                            obj.position = arrayRemove(obj.position, pos);
                        }
                    }
                }
            }
        }
        // for (let obj of objects) {
        //     for (let pos of obj.position){
        //         for (let arr of [[rowIndex, 0], [rowIndex, 1], [rowIndex, 2], [rowIndex, 3], [rowIndex, 4]]){
        //             if (arraysEqual(arr, pos)){
        //                 obj.position = arrayRemove(obj.position, pos);
        //             }
        //         }
        //     }
        // }
        // for (let i = 0; i < playground.length - 2; i++) {
        //     if (i === rowIndex) flag = true;
        //     if (! flag) continue;
        //     for (let j = 0; j < playground[i].length; j++){
        //         playground[i][j] = playground[i+1][j];
        //     }
        // }
    }
}