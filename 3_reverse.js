const greetings = "Hello, How are you ?";

// string reverse function
function reverseString(text) {
    let reverse = '';
    for (const letter of text) {
        reverse = letter + reverse;
        console.log(letter);
    }
    console.log(reverse);
}

console.log(reverseString(greetings));