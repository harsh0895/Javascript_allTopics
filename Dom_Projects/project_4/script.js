const addFriend = document.getElementById('add');
let content = document.querySelector('h5')
// const remove = document.querySelector('#remove')

let flag = 0;

addFriend.addEventListener('click',function(){
    if( flag==0 ){
        content.innerText = "Friends"
        content.style.color = "green"
        addFriend.innerHTML = "Remove Friend"
        flag = 1;
    }
    else{
        content.innerText = "Stranger"
        content.style.color = "red"
        addFriend.innerHTML = "Add Friend"
        flag = 0;
    }
})

// remove.addEventListener('click',function(){
//     content.innerText = "Stranger"
//     content.style.color = "red"
// })