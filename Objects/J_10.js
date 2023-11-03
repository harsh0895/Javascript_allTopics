// Objects destructuring and JSON API:-

// Destructuring in Objects:-

const course = {
    coursename: "Js in Hindi",
    price: "999",
    instructor: "hitesh sir"
}

const {instructor} = course
console.log(instructor)

// destructure:-
const {coursename: namecr} = course
console.log(namecr)
