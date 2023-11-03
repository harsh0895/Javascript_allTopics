// Datatype conversion confusion:-

let num = "12abc"
console.log(num)
console.log(typeof num)

let value = Number(num)
console.log(typeof value); //number
console.log(value) //NaN

// "33" => 33
// "33abc" => NaN
// true = 1; flase = 0

let ifLoggedIn = 1
let bool = Boolean(ifLoggedIn);
console.log(typeof bool)
console.log(bool)

let someNum = 33
let channge = String(someNum)
console.log(channge)
console.log(typeof channge)