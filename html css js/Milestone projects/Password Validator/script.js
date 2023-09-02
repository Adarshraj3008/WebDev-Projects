const form = document.querySelector("form");
const password = document.getElementById("Password");
const confirmPassword = document.getElementById("ConfirmPassword");

const submitBtn = document.getElementById("btn");

const displaymsg = document.createElement("span");
displaymsg.className = "displaymsg";

function validate() {
    event.preventDefault();
    if (password.value == confirmPassword.value ) {
        displaymsg.textContent = "Password matched. Password validation unsuccesful";
        form.appendChild(displaymsg);
    }
    else{
        displaymsg.textContent = "Password didn\'t match. Password validation unsuccesful";
        form.appendChild(displaymsg);
    }
}

submitBtn.addEventListener('click', validate);