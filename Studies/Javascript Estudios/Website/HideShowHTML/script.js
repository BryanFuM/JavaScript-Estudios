
const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", event =>{
    // you can use display to hide the image but it will remove the space of the image
    // but you can use visibility to hide the image but it will not remove the space of the image
    // if you want to remove the space of the image you can use display instead of visibility
    if(myImg.style.visibility === "hidden"){
        myImg.style.visibility = "visible"; // this will make the image visible
        myButton.textContent = "Hide";
    } else{
        myImg.style.visibility = "hidden";
        myButton.textContent = "Show";
    }
    
})

