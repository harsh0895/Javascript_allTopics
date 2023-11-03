// map, filter and reduce funtion using loops:-

const arr = [ 1,2,3,4,5,6 ];

// const result = arr.forEach( ( item ) => {
//     // console.log(item)
//     return item; // undefined;
// })
// console.log(result)

arr.forEach( ( item ) => {
    console.log(item)
})

// filter:-

const result = arr.filter( (item) => {
    return item>4;
})
console.log(result);





