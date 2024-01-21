function sum(a, b){
    return new Promise(function(resolve, reject) {
        if( a>b ){
            console.log("A is greater number!")
            resolve("a is greater number!");
        }
        else{
            reject("b is greater number")
        }
    })
}
( async function check() {
    try{
        // const ans = await sum(2,5)
        // console.log(ans)
        await sum(5,2)
    }
    catch(error){
        console.log(error)
    }
})()