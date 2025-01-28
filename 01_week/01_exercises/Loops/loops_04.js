/*
Write a function named countEvenNumbers:
- prompt the user to input 20 numbers one by one.
- Aftewr all numbers are entered, log hoe many of them were even.
*/

// Step 1: Initialise a variable to store the count of even numbers
// Step 2: use a loops to prompt the user to input 20 numbers one by one 
// Step 3: Check if the number is even 
// Step 4: If it is even, increment the count
// Step 5: Log the count of even numbers 

// Solution

const CountEvenNumbers = () => {
    let evenNumb = 0;
    let count = 1;

    while (count < 10) {
        let number = Number(window.prompt("Entera 20 numbers:"));
        if (number % 2 === 0) {
            evenNum++;
        }
        count++
    }
    console.log('The count of even number is: $(evenNum}');
    

    };

    CountEvenNumbers();

    // Solution 2 using for loop.
    const countEvenNumbers1 = () => {
        count = 0;
        for (i = 0; 20; i++) {
            let number = Number(window.prompt("Enter a 20 numbers:"));
            if (number % 2 === 0) {
                count++;
            }
        }
        console.log(`The count of even numbers is: ${count}`);
        console.log("The count of even numberz is", count);
    };

    countEvenNumber();







