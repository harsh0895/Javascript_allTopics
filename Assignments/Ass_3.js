// Question 1:-  Create an object representing a car with properties like "make," "model," and "year". Write a function to
// display all the properties of the car.

const car = {
    make: "Swift",
    model: 2013,
    year: 10,
}

function properties( obj ){
   for ( let key in obj){
    console.log(`${key} : ${obj[key]}`);
   }
}
properties(car)

// Question 2:- Define an object that represents a student's information including name, age, and grade. Implement a
// method to update the student's grade.

const student = {
    name: "Harsh",
    age: 20,
    grade: 'A',
}

function update( obj ){
    obj.grade = 'B';
    for ( let key in obj){
        console.log(`${key} : ${obj[key]}`);
       }
}
update(student)

// Question 3:- Write a program that takes an object as input and returns the number of properties it has.

const exampleObject = { a: 1, b: 2, c: 3 };

function countProperties(obj) {
    return Object.keys(obj).length;
  }
  
console.log(countProperties(exampleObject));

// Question 4:-

const check = { name: "Alice", age: 25 };

function hasProperty(obj, property){
    return obj.hasOwnProperty(property)
}
console.log(hasProperty(check, "age")); //true

