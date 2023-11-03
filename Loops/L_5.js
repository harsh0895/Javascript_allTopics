// For each loop:- this is higher order function:-

const coding = [1,2,3,4,5,6,7,8];

// coding.forEach( function (val){
//     console.log(val)
// })

// coding.forEach( (value, index) => {
//     console.log(`${value} of ${index} index`);
// })

// coding.forEach( (value, index, coding) => {
//     console.log(`${value} of ${index} index of array = ${coding}`);
// })

// iterate object in array:-

const mycoding = [
    {
        langName: 'javacript',
        langExtension: 'js'
    },
    {
        langName: 'java',
        langExtension: 'java'
    },
    {
        langName: 'c++',
        langExtension: 'cpp'
    },
]

mycoding.forEach( ( item ) => {
    console.log(item.langName);
    console.log(item.langExtension);
})