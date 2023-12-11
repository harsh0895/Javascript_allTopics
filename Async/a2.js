// setTimeout():-

// setTimeout( function(){
//     console.log("Hello brother")
// }, 1000);

let a = 10;

setInterval( function(){
   if( a>=0){
    console.log(a)
    a--
   }
   else{
    clearInterval();
   }
}, 1000)