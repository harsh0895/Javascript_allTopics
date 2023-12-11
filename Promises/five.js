const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if( !error ){
            resolve({username: "harsh", pass: "123"})
        }
        else{
            reject('ERROR: something went wrong')
        }
    }, 1000)
});

async function consume(){
    try{
        const response = await promiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consume();