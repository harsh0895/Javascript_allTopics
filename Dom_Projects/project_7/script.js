let arr = [
    {
        dp: "image.jpg",
        story: "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        dp: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        story: "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        dp: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=400",
        story: "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        dp: "https://images.pexels.com/photos/1572878/pexels-photo-1572878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        story: "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
];

// arr.forEach(function(val){
    //     // console.log(val)
    //     clutter += val
    // })


let clutter = ""
arr.forEach(function(elem, idx){
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
})

let storiyan = document.querySelector('#storiyan');
storiyan.innerHTML = clutter
storiyan.style.cursor = "pointer"
storiyan.addEventListener("click", function(dets){
    document.querySelector('#full-screen').style.display = "block"
    document.querySelector('#full-screen').style.backgroundImage = `url(${arr[dets.target.id].story})`
    let value = arr[dets.target.id].story;
    console.log(value)

    setTimeout(function(){
        document.querySelector('#full-screen').style.display = "none"
    },3000)

});




