// Que 1:-

let userList = [ "Harsh", "Aman", "krishna" ];
function isUserPresent ( username ){
    return userList.includes(username);
}

const check = "Aman";
if( isUserPresent(check)){
    console.log(`${check} is in the list`)
}
else{
    console.log(`${check} is not in the list`)
}

/*
Output:-
    Aman is in the list
*/

// Que 2:-

function calcuateTotalCost( v1, v2, v3){
    return v1+v2+v3;
}

let totalCost = calcuateTotalCost( 110, 50 ,90);
console.log("The total prize is: "+totalCost);

/*
Output:-
    The total prize is: 250
*/


// Que 3:-

const students = [
    {
        name: "Mithun",
        marks: 95,
    },
    {
        name: "Harsh",
        marks: 75,
    },
    {
        name: "Bharat",
        marks: 92,
    },
    {
        name: "Shivam",
        marks: 70,
    },
    {
        name: "Sahil",
        marks: 99,
    },
];

function checkResults(username){
        let user = students.find((item)=>{
            return item.name == username;
        });
        if( user ){
            if(user.marks>90 ){
                console.log(`Congratulation ${user.name}! You have passed.`)
            }
            else{
                console.log('Sorry! You have failed.')
            }
        }else{
            console.log('Invalid User.')
        }
}
checkResults("Bharat")

/*
Output:-
    Congratulation Bharat! You have passed.
*/

// Question 4:-

const products = [
    { name: "Laptop", price: 120000 },
    { name: "Mobile", price: 70000 },
    { name: "Laptop Bag", price: 20000 },
    { name: "Watch", price: 20000 },
    { name: "Mobile Charger", price: 1500 },
];

function max_min(){
    let min = products[0].price;
    let max = products[0].price;
    let maxProduct = products[0].name
    let minProduct = products[0].name

    for(let i=0; i<products.length; i++ ){
        if( products[i].price<min ){
            min = products[i].price;
            minProduct = products[i].name;
        }
        if( products[i].price>max ){
            max = products[i].price;
            maxProduct = products[i].name;
        }
    }
    console.log(`The product with maximum amount is ${maxProduct} which is priced at Rs. ${max}`);
    console.log(`The product with minimum amount is ${minProduct} which is priced at Rs. ${min}`);
}
max_min();

/*
Output:-
    The product with maximum amount is Laptop which is priced at Rs.  120000.
    The product with minimum amount is Mobile charger which is priced at Rs.  1500.
*/

// Question 5:-

const guests = ["Aman","Dev","Sahil","bharat","harsh"]
console.log(guests.join(", "))

//output - Aman, Dev, Sahil, bharat, harsh


// Question 6:-

const details = {
    name: "Apple 2020 MacBook Air Laptop",
    price: 82000,
    color: "grey",
    hardDisk: "256 GB",
};

console.log("Below are the products details")
for( let key in details ){
    console.log(`${key} : ${details[key]}`);
}

/*
output:-
    Below are the products details
    name : Apple 2020 MacBook Air Laptop
    price : 82000
    color : grey
    hardDisk : 256 GB
*/

// Question 7:-

function generateOTP(){
    const min = 1000;
    const max = 9999;
    const otp = Math.floor(Math.random()  * (max-min + 1)) + min;
    return otp;
}

const OTP = generateOTP();
console.log(`here is your otp: ${OTP}.`);

// output:- here is your otp: 5791.



