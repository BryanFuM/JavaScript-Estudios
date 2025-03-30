// classList = Element property in JavaScript used to interact 
//             with an element's list of classes (CSS classes)
//             Allows you to make reusable classes for many elements
//             across your webpage.\

// add() = Method to add a class to an element
// remove() = Method to remove a class from an element
// toggle(Remove if present, Add if not) = Method to toggle a class on and off an element
// replace(oldClass, newClass) = Method to replace a class with another class on an element
// contains() = Method to check if an element contains a class


const myButton = document.getElementById("myButton");
const myH1 = document.getElementById("myH1");

myH1.classList.add("enabled");
myButton.classList.add("enabled");
myButton.classList.remove("enabled");

myButton.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover");
});

myButton.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover");
});

myButton.classList.add("enabled");

myButton.addEventListener("click", event => {

    if(event.target.classList.contains("disabled")){
        event.target.textContent += "🤬";
    }
    else{
        event.target.classList.replace("enabled", "disabled");
    }

});

myH1.addEventListener("click", event => {

    if(event.target.classList.contains("disabled")){
        event.target.textContent += "🤬";
    }
    else{
        event.target.classList.replace("enabled", "disabled");
    }

});



let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
    button.classList.add("enabled");
});


buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("click", event => {

        if(event.target.classList.contains("disabled")){
            event.target.textContent += "🤬";
        }
        else{
            event.target.classList.replace("enabled", "disabled");
        }
    });
});