// Objects in javascript:-

// singleton:- it makes by using constructor.
// Object.create

// object literals:-

const mysum = Symbol("Key1")

const user = {
    name: "harsh",
    "full name": "Harsh bhola",
    [mysum]: "myKey1", //symbol
    // mysum: "myKey1", => it's not a symbol key its a string
    age: 20,
    location: "Ambala",
    email: "harsh@gmail.com",
    isLoggedIn: false,
    lastLogin: ["Monday", "Tuesday"]
}
console.log(user.email)
// console.log(user[email]) in this case it gives error because email key is a string!
console.log(user["email"])
console.log(user["full name"])
console.log(user[mysum])
console.log(user)

// creating a function:-

user.greeting = function(){
    console.log("hello js user");
}

user.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}
// console.log(user.greeting) => undefined
// console.log(user.greeting());
// console.log(user.greetingTwo());
// user.greeting();

const hey = function(){
    console.log("Hello my name is harsh")
}
hey()