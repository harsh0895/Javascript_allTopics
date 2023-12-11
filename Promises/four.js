const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai",
                    email: "harsh@gmail.com"})
    }, 1000)
})
promiseThree.then(function(user){
    console.log('hello')
    console.log(user)
    console.log(user.username)
    console.log(user.email)
})

// 4th:-

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if( !error ){
            resolve({username: "harsh", pass: "123"})
        }
        else{
            reject('ERROR: something went wrong')
        }
    }, 1000)
})
// chaining:-
promiseFour.then(function(user){
    console.log(user)
    return user.username;
})
.then(function(username){
    console.log(username) // harsh
})
.catch(function(error){
    console.log(error)
}).finally(function(){
    console.log('the promise is either resolved or rejected')
})