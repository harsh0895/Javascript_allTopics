// Objects part 2:-
// Nested Objects:-

const user = {
    fullname: {
        userFullName: {
            firstName: "Harsh",
            lastName: "Bhola"
        }
    }
}
// console.log(user.fullname.userFullName.firstName);
// console.log(user.fullname.userFullName.lastName);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj3 = { 3: "c", 4: "d" }
// const finalObj = Object.assign( {}, obj1, obj2, obj3)
// console.log(finalObj)

const final = { ...obj1, ...obj2, ...obj3}
console.log(final)


