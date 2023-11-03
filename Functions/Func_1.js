// Functions and Parameters:-

// without parameters:-

function sayMyName(){
    console.log("Hey Harsh")
}
// sayMyName()

// with parameters:-

function addNum( a,b ){ //here a and b is a parameters!
    return a+b;
}
//console.log(addNum(5,6)) // here 5 and 6 is a arguments!

const result = addNum( 4,5 );
console.log(result)

function loginUserMessage( username ){
    if( username === undefined ){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in...`
}
console.log(loginUserMessage()) // undefined
console.log(loginUserMessage("Hitesh"))
const user = loginUserMessage("Harsh")
console.log(user)








