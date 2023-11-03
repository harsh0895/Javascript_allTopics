// for loop break and continue:-

for( let i=1; i<=10; i++ ){
    if( i==5 ){
        console.log("5 is the best number");
        continue;
    }
    console.log(i);
}

// break:-

for( let i=1; i<=10; i++ ){
    if( i==5 ){
        console.log("5 is the best number");
        break;
    }
    console.log(i);
}

// Nested Loop:-

for (let index = 1; index <= 5; index++) {
    console.log(`Outer loop value: ${index}`)
    for( let index=1; index<=5; index++ ){
        console.log(`Inner loop value: ${index} of outer loop!`);
    }   
}

const arr = [ 1,2,3,4,5 ];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)
}