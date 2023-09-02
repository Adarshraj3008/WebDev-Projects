// Delay in milliseconds
var delay = 3000; // 3 seconds

// Function to display countdown messages
function countdown(delay) {
  var remainingTime = delay / 1000; // Convert to seconds
  
  var countdownInterval = setInterval(function() {
    if (remainingTime > 0) {
      console.log("Time remaining: " + remainingTime + " seconds");
      remainingTime--;
    } else {
      clearInterval(countdownInterval);
      generateRandomNumber();
    }
  }, 1000); // 1000 milliseconds = 1 second
}

// Function to generate a random number
function generateRandomNumber() {
    
    var randomNum = Math.floor(Math.random() * 1000); // Change range as needed
    console.log("Generated random number: ", randomNum);
    
}

// Delay the countdown and random number generation
setTimeout(function() {
    countdown(delay);
  }, delay);
