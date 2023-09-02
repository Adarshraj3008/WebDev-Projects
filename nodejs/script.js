// // variable and values (Number, String, Boolean etc)
// // operators
// // Conditions and Loops

// // let age = 16;
// // if (age >=18){
// //     console.log("you are allowed");
// // }
// // else{
// //     console.log('You are not allowed');
// // }

// //-->loop
// //-- do while, while, for

// // for(let i = 0; i<5; i++){
// //     console.log(i);
// // }
// // ------------Arrray----------------
// console.log("---------Array---------");

// let a = ["adarsh",1,2,3,"raj"]
// console.log(a);

// // a[3] = "sidhu"
// // console.log(a)

// a[5] = "sidhu"
// console.log(a)

// // ------------ array push pop-----------
// // - push: adding element in the last

// let arr = [1,2,3,4,5];
// arr.push(6,7);
// console.log(arr);

// //- pop: deleting element from last

// arr.pop();
// console.log(arr);

// // shift: adding element from first
// arr.shift('adarsh')
// console.log(arr);

// // unshift: deleting array from first
// arr.unshift()
// console.log(arr);

// // concat: merge two array

// let a1 = [1,2,3,4,5]
// let b = [6,7,8,9]
// let c = a.concat(b)
// console.log(a,b,c);

// // join: convert array into string
// let d = c.join("")
// let e = c.join(",")
// console.log(d,e);

// // reverse: reverse the array
// arr.reverse()
// console.log(arr);

// // indexof: find the index position of element
// console.log("----------indexOf----------")
// console.log(c);

// let index = console.log(c.indexOf('raj'));

// // slice: to fetch continuous element
// console.log("----------slice----------")
// let arr1 = [1,2,3,4,5,6]
// console.log(arr1.slice(2,5));
// console.log("----------splice----------")
// // splice: to add  element anywhere in between the array

// arr1.splice(2,0,11,'adarsh');
// console.log(arr1);

// console.log("----------Function-----------");

// // syntax: 
//  /* function functionname()
//     {
//         body 
//     } 
//  */

// function greet(){
//     console.log('hello');
// }
// greet();

// function sqr(x){ // here x → parameter
//     return x*x;
// }
//  let sqrResult = sqr(10); // here 10 → arguments
//  console.log(sqrResult);

//  let c1 = [1,2,3,4,5]
//  console.log(c1.indexOf(4));
 
//  var string1 = "PWSkills";
//  var value = 20;
//  alert( string1 + value );

// var a=1;
// if(a!=null) 
//     console.log(1)
// else
//     console.log(0)

function height()
{ 
    var  height = 120;
    var type = (height>=190) ? "tall" : "short";
    return type;
}