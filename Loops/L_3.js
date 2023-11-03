// High order array loops:-

// for of loop:-

// ["","",""]
// [ {},{},{}]

const arr = [ 1,2,3,4,5 ];

for( let i of arr){
    console.log(i)
}

// using strings:-

const greet = "Good Morning";

for( let g of greet ){
    console.log(`Each char is ${g}`)
}

// using object:-

const user = {
    name: "harsh",
    id: 101
}
for( let value in user){
    console.log(user[value])
}