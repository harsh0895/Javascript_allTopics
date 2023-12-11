// how to create a promise():-

const promiseOne = new Promise(function(resolve, reject){
    // do an async task like db calls, network, take file data;
    // this task is takes more time for executing the function that's we have to make asynchronous funtion...... 
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    },1000)
})

function hello(){
    console.log('hello')
}
// promiseOne.then(function(){
//     console.log('promise consumed')
// })
promiseOne.then(hello)

// 2nd:-

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async taks 2')
        resolve()
    }, 1000)
}).then(function(){
    console.log('Async task 2 consumed')
})