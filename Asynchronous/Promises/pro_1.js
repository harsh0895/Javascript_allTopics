// Promises:-

// let promise = new Promise(function(resolve, reject) {
//     console.log('I am a promise')
//     resolve("data resolved"); // fulfilled it is a callback in-built funtion
// })

function getData(dataId, getNextData){
    return new Promise(function(resolve,reject) {
        setTimeout(() => {
            console.log("Data-",dataId);
            // resolve();
            resolve('success')
            // reject('error')
            if(getNextData){
                getNextData();
            }
        },2000)
    })
}
let final = getData(1);

final.then(() => {
    console.log('success')
})
final.then((ans) => {
    console.log(ans) // success
})

final.catch((err) => {
    console.log(err)
})
