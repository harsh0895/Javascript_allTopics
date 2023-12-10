console.log("hello user");

setTimeout( function(){
    console.log("Async funtion executed!")
}, 1000);

let a = 0;
for(let i=0; i<100; i++ ){
    a = a + i;
}
console.log("sum is: "+a);