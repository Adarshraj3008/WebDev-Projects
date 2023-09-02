const dec = document.getElementById("dec");
const inc = document.getElementById("inc");
const reset = document.getElementById("reset");
const displayValue = document.getElementById("displayValue");

// event of decrement btn click

dec.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if (value > 0) {
        displayValue.innerText = value - 1;
    }
    else{
        alert('You cannot go below zero');
    }
});

// add eventlistener on inc btn

inc.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if (value >= 10) {
      alert("10+ values are not allowed");
    } else {
      displayValue.innerText = value + 1;
    }
  });
  //add event listener to reset button
  reset.addEventListener("click",()=>{
    displayValue.innerText = 0;
  });