// eventListener = Listen for specific events to create interactive web pages
//                 events: click, mouseover, mouseout, keydown, keyup, etc.
//                 .addEventListener(event, callback);

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");
const moveAmount = 10;

let x = 0;
let y = 0;

myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "lightblue";
    myBox.textContent = "Clicked! 🤣";
});

myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "lightcoral";
    myBox.textContent = "Don't do it! 😡";
});

myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me 😊";
});

document.addEventListener("keyup", event => {
    myBox.style.backgroundColor = "lightpink";
    myBox.textContent = "😮";
    myBox.style.textAlign = "center";
});

document.addEventListener("keydown", event => {
    myBox.style.backgroundColor = "lightpink";
    myBox.textContent = "😱";
    myBox.style.textAlign = "center";
});


document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")) {
        event.preventDefault();
        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
       myBox.style.transform = `translate(${x}px, ${y}px)`;
    }
    
});