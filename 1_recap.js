// for largest value
function largestElement(numbers) {
    let max = numbers[0]; // 
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

// for smallest value
function smallestElement(numbers) {
    let min = numbers[0]; // 
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}

let value = [29, 10, 94, 82, 84, 83];
console.log("The largest value: ", largestElement(value));
console.log("The smallest value: ", smallestElement(value));