// Q1:- what is Function declaration:-

// function add( n1, n2){
//     return n1 + n2;
// }
// console.log("sum is:",add(5,6))

// Q2:- what is Function Expression:- when you store a funtion inside a variable is called function expression!!
// it is also called anonymous function:-

// const square = function(num){
//     return num*num;
// }
// console.log(square(5))

// Q3:- what is first class funtion:-

// function square(num){
//     return num*num;
// }

// function display(fn){
//     console.log("square is: "+fn(5));
// }
// display(square) // passing a function

// Q4:- what is IIFE funtion:-

(function square(num){
    console.log(num*num)
})(5);


