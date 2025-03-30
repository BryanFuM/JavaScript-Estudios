// ADD AND CHANGE HTML ELEMENTS

// ------------ EXAMPLE 1 <h1> ----------------

// STEP 1 CREATE THE ELEMENT

const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES

newH1.textContent = "Hello World";
newH1.id = "main-title";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// STEP 3 APPEND ELEMENT TO DOM
//document.body.append(newH1);
//document.body.prepend(newH1);
//document.getElementById("box1").append(newH1); // append to the end of the element
/* document.getElementById("box1").prepend(newH1); // append to the beginning of the element

const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2); // newH1 before box2 */

const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH1, boxes[2]); // newH1 before box2

// REMOVE HTML ELEMENT

document.body.removeChild(newH1); // remove the element from the DOM

// if the element is for example in the box, then using the body will not work, because the element is not in the body but in the box

// EXAMPLE 2 <li>

// STEP 1 CREATE THE ELEMENT

const newListItem = document.createElement("li");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newListItem.textContent = "Strawberry";
newListItem.id = "strawberry";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// STEP 3 APPEND ELEMENT TO DOM

document.getElementById("fruits").append(newListItem);

//const orange = document.getElementById("orange");
//document.getElementById("fruits").insertBefore(newListItem, orange); // newListItem before orange

const listItems = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, listItems[2]); // newListItem before listItems[2]

// REMOVE HTML ELEMENT

document.getElementById("fruits").removeChild(newListItem); // remove the element from the DOM