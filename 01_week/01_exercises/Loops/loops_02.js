



// solution 

const logEvenNumbers = () => {
    for (i = 2; i < 100; i++) {
        if (i % 2 == 0) {
            console.log(i, 100 -i);
        }
    }
};

// OR

// const LogEvenNumbers = () => {
    // const logEvenumbers2 () => 100 {
 //   let  MaxNum = 100;
  //  for (let i = 2; i < maxNum; i += 2)  {
 //       if {i % 2 === 0)
   //         console.log(i, 100 - i);
 //   }
// }
logEvenNumbers();

const logEvenNumbers2 = () => {
    let i = 2;
    while (i <= 100) {
        if (i % 2 == 0) {
            console.log(i, 100 -i);
        }
        i++;
    }
};

logEvenNumbers2();

// Create a function that runs a loop and console logs all numbers from 1 to 5
// Create a function that runs a while loop and conole logs all numbers 10 to 5

const logNumbersoneToFive2 = () => {
    let i = 0;
    while (i <= 5) {
        console.log(i);
        i++;
        

    
    }
};