//  Map funtion usinf loop with array:-

const numbers = [ 1,2,3,4,5,6,7,8,9,10 ];

const result = numbers.map( ( value ) => {
    return value + 10;
})

console.log(result);

numbers.forEach( (val) => {
    val = val + 10;
    console.log(val)
})

// chaining:-

const newNums = numbers
.map( (num) => num = num * 10) // [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]
.map( (num) => num = num + 1 ) // [ 11, 21, 31, 41, 51, 61, 71, 81, 91, 101 ]
.filter( ( num )=> num>=40 ) // [ 41, 51, 61, 71, 81, 91, 101 ]

console.log(newNums); // [ 41, 51, 61, 71, 81, 91, 101 ]
