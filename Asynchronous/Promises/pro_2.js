// promise chaining:-

function asyncFunc1(){
    return new Promise(function(resolve, reject) {
        setTimeout( () => {
            console.log("data1")
            resolve("success")
        }, 2000);
    })
}

function asyncFunc2(){
    return new Promise(function(resolve, reject) {
        setTimeout( () => {
            console.log("data2")
            resolve("success")
        }, 2000);
    })
}
// ek sath print hoga data1 and data2...

// console.log('fetching data 1')
// let p1 = asyncFunc1();
// p1.then(()=> {
//     console.log("sucess1")
// })

// console.log('fetching data 2')
// let p2 = asyncFunc2();
// p2.then(()=> {
//     console.log('success2')
// })

// but we want to fetching data one bye one for acheiving this we use chaining method:-

// console.log('fetching data1...')
// let p1 = asyncFunc1();
// p1.then((result) => {
//     // console.log(result)
//     console.log('fetching data2...')
//     asyncFunc2().then(()=> {});
// })

console.log('data1')
asyncFunc1().then(()=>{
    console.log('data2')
    asyncFunc2().then(()=>{});
})
