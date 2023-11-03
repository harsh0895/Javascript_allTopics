// this and arrow function:-

const user = {
    username: "Harsh",
    price: 999,

    welcomeMessage: function(){
       console.log(`${this.username}, welcome to website`);
       console.log(this) //print current all values in the object
    }
}

// user.welcomeMessage();
// user.username = "Hitesh"
// user.welcomeMessage();

// console.log(this) // print {} 

// function chai(){
//     const username = "Harsh";
//     console.log(this.username) // undefined
// }
// chai();

// const chai2 = function(){
//     const username = "Harsh";
//     console.log(this.username) // undefined
// }
// chai2();

// Arrow functions:-

// const chai3 = () =>{ 
//     const username = "Harsh";
//     console.log(this.username) // undefined
// }
// chai3();

// Expilicit return:-

const addTwo = ( n1, n2 ) =>{
    return n1 + n2;
} 
console.log(addTwo(4,4));

// Implicit return:-

const addT = ( n1, n2 ) => (n1 + n2);
console.log(addT(3,5));
