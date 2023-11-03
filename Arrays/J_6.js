// Array in javascript:-

// const arr = [ 0, 1, 2, 3, 4, true, "harsh"]

// console.log(arr)
// console.log(typeof arr)

// const arr2 = new Array(0,10,20,30)
// console.log(arr2)

const myArr = [1,2,3,4,5]


console.log(myArr)
console.log(myArr.length) // give length of the array

myArr.push(6) // add value in last index
console.log(myArr)
myArr.pop() // take value from the last index
console.log(myArr)

myArr.unshift(9) // insert start index
console.log(myArr)
myArr.shift() // take value from the first index
console.log(myArr)

console.log(myArr.includes(9)) // it will check 9 value exsits or not in the array and return boolean
console.log(myArr.indexOf(5)) // if value exist it will return index number othervise return -1

const newArr = myArr.join()
console.log(myArr)
console.log(newArr)
console.log(typeof newArr) // string not object

// slice or splice:-

const my = myArr.slice(1,3) // 3 is excluded 
console.log(my) // 2,3
console.log("A", myArr) // 1,2,3,4,5

const my2 = myArr.splice(1,3) // 3 is included
console.log(my2) // 2,3,4
console.log("B", myArr) // 1,5

