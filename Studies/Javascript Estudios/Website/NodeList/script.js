// NodeList = Static collection of HTML elements by (id, class, element)
//            Can be created by using querySelectorAll()
//            Similar to an array, but no (map, reduce, filter) methods
//            NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons");

console.log(buttons);

// ADD HTML/CSS PROPERTIES

buttons.forEach(button => {
    button.style.backgroundColor = "lightgreen";
    button.textContent += "😁";

})

// CLICK event listener

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "lightblue";
    });
});


// MOUSEOVER + MOUSEOUT event listener

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "lightcoral";
    })
})

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "lightgreen";
    })
})

// ADD AN ELEMENT

const newButton = document.createElement("button"); // STEP 1 - Create a new element

// STEP 2 - Add methods or properties

newButton.textContent = "New Button";
newButton.classList = "myButtons";

// STEP 3 - Append the new element to the document

document.body.appendChild(newButton);

buttons = document.querySelectorAll(".myButtons");

console.log(buttons);

// REMOVE AN ELEMENT

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    })
})