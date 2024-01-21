// callbacks:
// A callback is a funtion passed as an arguments to another function. 

function sum(a, b){
    console.log(a+b);
}
function sub(a, b){
    console.log(a-b);
}
function calculator(a, b, sumCallback){
    sumCallback(a, b);
}

calculator(1, 2, sum);
calculator(2, 1, sub);


function hello(){
    console.log('Hello world');
}
// it will run after 2 seconds:-
setTimeout(hello, 2000);