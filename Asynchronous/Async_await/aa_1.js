// async funtion:- it is always returns a promise...

function api(data){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('data-',data)
            resolve("success");
        }, 2000);
    });
}
// async function hello(){
//     console.log('getting data1..')
//     await api(1);
//     console.log('getting data2..')
//     await api(2);
//     console.log('getting data3..')
//     await api(3);
//     console.log('getting data4..')
//     await api(4);
// }
// hello();

// IIFE function():-
(async function hello(){
    console.log('getting data1..')
    await api(1);
    console.log('getting data2..')
    await api(2);
    console.log('getting data3..')
    await api(3);
    console.log('getting data4..')
    await api(4);
})();