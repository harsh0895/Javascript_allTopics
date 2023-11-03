// Rest operator:-

function addValue( ...Num ){
    return Num; // returns a array!
}
console.log(addValue( 10,20,30,40 ));

// Functions with objects:-

const user = {
    userName: "Harsh Bhola",
    id: 101
}

function addUser( anyObject ){
    console.log(`User name is ${anyObject.userName} and id is ${anyObject.id}`);
}

// addUser(user) // function calling while passing object!
addUser({
    userName: "harsh",
    id: 102
})

// Functions with arrays:-

const arr = [1,2,3,4,5];
function add( anyArray ){
    console.log(anyArray[2])
}
add(arr);  // function calling while passing array!














