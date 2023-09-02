var input = "adarsh raj";

function reverseString (str) {
    return str.split('').reverse().join('');
}

function displayReverseString (str) {
    setTimeout(function () {
        var Output = reverseString(input);
        console.log("reversed string: ", Output);
    },2000);
}

displayReverseString(input);
