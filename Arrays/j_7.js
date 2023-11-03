// Array part 2 in javascript:-

const heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// heros.push(dc_heros)
// console.log(heros) //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(heros[3])

// const combine = heros.concat(dc_heros) // concat method returns a new array!
// console.log(combine)

// combine with the help of spread operator:-

const allHeros = [ ...heros, ...dc_heros ]
// console.log(allHeros)

const another_array = [ 1,2,3, [4,5,6], 7, [6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array) // [1,2,3,4,5,6,7,6,7,4,5 ]

console.log(Array.isArray("Harsh")) // it will check harsh is a array or not!
console.log(Array.from("Harsh")) // it will convert in array to the given value harsh!
console.log(Array.from({name: "harsh"})) //give output empty array (intersting)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
