// const btn1 = document.getElementById("btn1");
// function myFunction() {
// var name = document.getElementById("myText").value;
// }
// btn1.addEventListener("click", () => {
//   alert(myFunction()+"Button-1 clicked");
// });

const form = document.querySelector("form");

const submitBtn = document.getElementById("btn");
const displaymsg = document.createElement("span");
displaymsg.className = "displaymsg";

function showmessage() {
    
    event.preventDefault();
    let name = document.getElementById("name");
    displaymsg.textContent = "Thank you " + name.value + ", Your Details are Submitted";
    form.appendChild(displaymsg);
}

submitBtn.addEventListener("click", showmessage);