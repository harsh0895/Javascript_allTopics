// callback hell:

function getData(data, getNextData){
    setTimeout(() => {
        console.log("Data-",data);
        if(getNextData){
            getNextData();
        }
    },2000)
}
// getData(123)

// task:-
//data1
//data2
//data3
// these 3 will run in 2sec
// getData(1)
// getData(2)
// getData(3)

// callback hell:-
// getData(1, () => {
//     console.log('getting data 2...')
//     getData(2, () => {
//         console.log('getting data 3...')
//         getData(3, () => {
//             console.log('getting data 4...')
//             getData(4)
//         })
//     });
// })

// do that with the help of promises:-

function getData2(data){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('data-',data)
            resolve();
        }, 2000);
    });
}

// getData2(1).then(()=>{
//     getData2(2).then(()=>{
//         getData2(3).then(()=>{});
//     })
// })

// promise chaining:-
getData2(1).then(()=> {
    return getData2(2);
})
.then(()=>{
    return getData2(3);
})
.then(()=>{
    console.log('all data retrieved')
})
