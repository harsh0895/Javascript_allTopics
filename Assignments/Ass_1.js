// Que 1:-

let totalCost = 2000
let discountPercentage = 20
let finalPrice = totalCost - (2000*20)/100

console.log("The final price after discount is: Rs."+finalPrice)

// Que 2:-

let userName = "admin"
let password = "12345"

if( userName=="admin" && password=="12345"){
    console.log("Login Successful")
}
else{
    console.log("Invalid credentials")
}

// Que 3:-

let INR = 850
let USD = INR/82

console.log(INR+" is "+USD+" USD")

// Que 4:-

let numberOfChilds = 2;
let numberOfAdults = 1;
let numberOfSeniors = 1;

let totalTicketPrice = (numberOfAdults*150) + (numberOfChilds*100) + (numberOfSeniors*120)

console.log("Total ticket price is: "+totalTicketPrice)

// Que 5:-

let package = "standard"

switch( package ){

    case "standard":
        console.log("standard take 3-5 days,")
        break;
    case "express":
        console.log("express take 1-2 days,")
        break;
    case "overnight":
        console.log("would be delivered the next day")
        break;
    default:
        console.log("Invalid input package!!")
}

//  Que 6:-

let name = "mithun"
let email = "harshb@gmail.com"
let age = "21"

if ( typeof(name) !== 'string'){
    console.log("Name should be a string type!")
}

if ( typeof(email) !== 'string'){
    console.log("Email should be a string type!")
}

if ( typeof(age) !== 'number' || isNaN(age) ){
    console.log("Age should be a number type!")
}

// Que 7:-

let type = [ "item1", "item2", "item3", "item4", "item5"];

for ( let i=0; i<type.length; i++){
    console.log(type[i])
}

// Que 8:-

let count = 10;

while( count>=1 ){
    console.log(count)
    count--;
}

// Que 9:-

const arr = [ 1,2,999,56, "Mithun", 1234, "Pw"]

for ( let i=0; i<arr.length; i++ ){
    if( typeof(arr[i]) === 'string'){
        console.log(arr[i])
        break;
    }
}

// Que 10:-

let arr2 = [ 1,2,-3,5,-9,-8,-7,7 ]

for( let i=0; i<arr2.length; i++ ){
    if( arr2[i]>=0 ){
        console.log(arr2[i])
    }
}