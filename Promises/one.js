// how to create promises:-

// syntax 1:-
const promises = new Promise(function(resolve, reject){
    // Do an async task:-
    // database calls, network calls:-
    setTimeout(function(){
        console.log('Async task is complete')
        resolve() // connect with then()
    },1000)
})
// how to resolve
promises.then(function(){
    console.log("Promise consumed");
})

// syntax 2:-
new Promise( function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

// promise 3:-
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai",
        email: "chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

// promise 4:-
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({ username: "hitesh", password: "123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log("the promise is either resolved or rejected!!")
})

async function consume(){
    try{
        const response = await consume
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}
consume()
