/* 
Write a function named calculateAverageSpeed:
- Continously prompt the user to input distance (in kilometers) and time (in hours)
- After eacvh input, calculate and log the average speed in the console.
-stop asking for inputs when the user enters 0 for distance
*/

const calculateAverageSpeed = () => {
   let distance;
   let time;
   let speed;
   while (distance !== 0) {
      distance = Number(window.prompt("Enter a distance in Kilometers: "));
      if (distance === 0) {
        break;
      }
      time = Number(window.prompt("Enter a time in hours: "));
      speed = distnce / time;
      console.log("The average speed is: ", speed);
    
   }
};

calculateAverageSpeed();