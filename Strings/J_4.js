// String in javascript:-

const name = "harsh"
const repo = 10

// console.log(name + repo)

// interpolation => (``):-

console.log(`Hello my name is ${name} and my repo count is ${repo}`)

const gameName = new String('Mario-game')

console.log(gameName.length) // in this case this is not a method its return a numeric value
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName.charAt(2)) // it will return the character which is index 2
console.log(gameName.indexOf('r')) // it will return the index number of r

const newString = gameName.substring(0,5) // 5 not included 
console.log(newString) // Mario

const anotherString = gameName.slice(0,4)
console.log(anotherString)

const newOne = "      harsh      "
console.log(newOne)
console.log(newOne.trim())

const url = "harsh bhola"
console.log(url.replace(" ","-")) 
console.log(url.includes("hb")) // check hb is exists in the string or not
console.log(gameName.split('-')) 


