// Immediately invoked function Expressions (IIFE):-

( function chai(){
    // Named IIFE
    console.log(`Database connected`);
})();

( function code(name){
    console.log(`Hey ${name}`)
})('hitesh');

( (name) =>{
    // Unnamed IIFE
    console.log(name);
})("Harsh")