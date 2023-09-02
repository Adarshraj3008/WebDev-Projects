const input = document.getElementById("txt");
const display = document.getElementById("display")

txt.addEventListener("keypress",function(e) {
    display.innerText = "you have pressed → " + e.key
 })