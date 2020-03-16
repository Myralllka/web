function avgWordLengthCalc(str) {
    array_of_words = str.split(/[,. !@#$%^&*()\u9999]/).filter(function(el) { return el; })
    let len = [];
    for (let i = 0; i < array_of_words.length; i++){
        len.push(array_of_words[i].length);
      }
    return eval(len.join('+'))/len.length || 0
}