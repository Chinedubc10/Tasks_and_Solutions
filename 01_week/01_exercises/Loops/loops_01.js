/*
Write a function named logOddNumbers:
- Use a loop to output all odd, positive numbers less than 100, starting from 1.
Example output in the console: 1, 3, 5, 7, ..., 99.
*/

// Solution 1
function logOddNumbers () {
    for (i = 1; i < 100; i++)
        if (i % 2 !== 0) {
            console.log(i);
        }
}
logOddNumbers();




// solution 2: Another way to solve the problem
const logOddNumbers2 = () => {
    for (let i = 1; i <100; i++) {
        if (i % 2 !== 0) {
            console.assert.log(i);
        }
    }
}


// for (let i = 1; i < 100; i++) we can use this: i += 1
const logOddNumbers3 = () => {
    for (let i = 1; i < 100; i += 2) {
        console.log(i);
    }
}