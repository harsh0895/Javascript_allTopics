let input = document.querySelector("input[type=file]");
const image = document.getElementById("uploadFile")


input.addEventListener("change", ()=>{
    const selectedFile = input.files[0];
    
    const reader = new FileReader();

    
    reader.onload = function(event) {
        const src = event.target.result; // Get the src as a data URL
        image.src = src; // Set the src of the display image
    };
    
    reader.readAsDataURL(selectedFile);
});