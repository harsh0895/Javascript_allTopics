// reduce method in js:-

const myNums = [ 1,2,3,4 ];

const myTotal = myNums.reduce( function ( acc, current) {
    console.log(`${acc} and ${current}`)
    return acc + current;
}, 0) // 0 is a initial value!
console.log(myTotal)

const result = myNums.reduce( ( acc, cur ) => acc+cur , 0)
console.log(result)

const arr = [
    {
        Price: 100
    },
    {
        Price: 100
    },
    {
        Price: 100
    },
    {
        Price: 100
    },
    {
        Price: 100
    },
]

const newArr = arr.reduce( ( acc, cur ) => acc + cur.Price, 0)
console.log(newArr);