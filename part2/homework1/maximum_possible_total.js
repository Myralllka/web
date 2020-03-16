function maxTotal(arr){
    return eval(arr.sort((a, b)=>a-b).slice(-5).join('+'))|| 0
}