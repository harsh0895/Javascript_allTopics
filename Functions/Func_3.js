// Scope level and mini hoisting:-

function one(){
    const username = "Harsh"

    function two(){
        const website = "Youtube"
        console.log(username)
    }
    // console.log(website)
    two();
    // console.log(website)
}

one();

// Interesting:-

console.log(addOne(5)) // executed!

function addOne(num){
    return num + 1;
}

// console.log(addTwo(5)) // not executed because funtion creating under the variable! 

const addTwo = function ( num ){
    return num + 2;
}
console.log(addTwo(5)) // executed!