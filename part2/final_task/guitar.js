function tune(input) {
    const results = {
        success: "OK",
        no_sound: " - ",
        low: ">•",
        too_low: ">>•",
        high: "•<",
        too_high: "•<<"
    };
    const min_error = 0.03;
    const tones = [329.63, 246.94, 196.00, 146.83, 110, 82.41];
    const precision = 0.000001;
    let output = [];
    
    for (let i = 0; i < input.length; i++) {
        let current_error = (input[i] - tones[i]) / tones[i];
        if (Math.abs(current_error) < precision) {
            output.push(results.success);
        } else if (Math.abs(input[i]) < precision) {
            output.push(results.no_sound);
        } else 
        output.push(Math.abs(current_error) < min_error ?((current_error < 0) ? results.low : results.high): (current_error < 0) ? results.too_low : results.too_high);
    }
    return output;
}
// console.log(tune([0, 246.94, 0, 0, 0, 78])) //➞ [" - ", "OK", " - ", " - ", " - ", ">>•"]
// console.log(tune([329.63, 246.94, 195, 146, 111, 82.41])) //➞ ["OK", "OK", ">•", ">•", "•<", "OK" ]
// console.log(tune([329.63, 246.94, 196.00, 146.83, 110.00, 82.41])) //➞ ["OK", "OK", "OK", "OK", "OK", "OK"]