// Dates:-

let myDate = new Date()
console.log(myDate);
console.log(typeof(myDate))
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.getFullYear())
console.log(myDate.getDate());
console.log(myDate.getMonth()+1); // it will count from 0 that's why i am adding +1.......
console.log(myDate.getTime())

// how to create a date:-

let create = new Date(2023, 0, 23);
console.log(create.toDateString());