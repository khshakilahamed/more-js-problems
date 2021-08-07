/* 
divisible by 3 --> foo
divisible by 5 --> bar
divisible by 3 & 5 --> foobar 
*/

for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('foobar');
    }
    else if (i % 5 == 0) {
        console.log('bar');
    }
    else if (i % 3 == 0) {
        console.log('foobar');
    }
    else {
        console.log(i);
    }
}