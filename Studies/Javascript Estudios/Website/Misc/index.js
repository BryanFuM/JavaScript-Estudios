/*console.log(`Hello`);
console.log(`Hello`);

window.alert(`Hello`);
window.alert(`I like burgers`);
*/

//document.getElementById("myH1").textContent = "Hello";
//document.getElementById("myP").textContent = "I like burgers";

// LESSON 1: VARIABLES
// 1. declaration  let x;
// 2. assignment  x = 5;
/*let age = 25;
let price = 10.99;
let gpa = 2.1;
let firstName = "John";
let isOnline = true;

console.log(`You are ${age} years old`);
console.log(`The price is ${price}`);
console.log(`Your GPA is ${gpa}`);
console.log(`Your name is ${name}`);
console.log(`Are you online? ${isOnline}`);
console.log(typeof age);
console.log(typeof price);
console.log(typeof firstName);


let fullName = "John Doe";
//let age = 25;
let isOnline = true;

document.getElementById("p1").textContent = `Your name is ${fullName}`; 
//document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `isOnline: ${isOnline}`;

// LESSON 2: OPERATORS
// 1. Arithmetic Operators = + - * / % ++ --
// 2. Assignment Operators = = += -= *= /= %=
// 3. Comparison Operators = == === != !== > < >= <=
// 4. Logical Operators = && || !
// 5. Conditional Operators = ? :

let students = 30;
//students = students + 5;
//students += 5;
//students++;
//students--;
//students = students - 5;
//students -= 5;
//students *= 2;
//students /= 2;
//students %= 2;
//students = students % 2;
//students = students + 1;

console.log(students);

// LESSON 3: USER INPUT
// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

let username;

//document.getElementById("mySubmit").onclick = function() {
  //  username = document.getElementById("myText").value;
    //document.getElementById("myH1.1").textContent = `Hello ${username}`;
//}

// LESSON 4: TYPE CONVERSION 
// Change the datatype of a value to another (strings, numbers, booleans)

//let age = window.prompt("Enter your age");
//age = Number(age);
//age += 1;

//console.log(age, typeof age);

let x = "pizza";
let y = "pizza";
let z = "burger";

x = Number(x);
y = Boolean(y);
z = String(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
*/
// const = a variable that can't be changed

const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function() {

    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent =  circumference;
}

//LESSON 5: MATH 
// 1. Math.PI gives you the value of PI
// 2. Math.round() rounds a number to the nearest integer
// 3. Math.pow() raises a number to a power
// 4. Math.sqrt() returns the square root of a number
// 5. Math.abs() gives the absolute value of a number
// 6. Math.ceil() rounds a number up to the nearest integer
// 7. Math.floor() rounds a number down to the nearest integer
// 8. Math.min() 
// 9. Math.max()
// 10. Math.random()
// 11. Math.sin()
// 12. Math.cos()
// 13. Math.tan()
// 14. Math.log()
// 15. Math.exp()
// 16. Math.cbrt() cube root
// 17. Math.hypot()
// 18. Math.trunc() truncates a number to an integer
// 19. Math.sign() returns the sign of a number
// 20. Math.log10() 
// 21. Math.log2()
 
// SPREAD OPERATOR = ... allows an iterable such as an array or string to be expanded into separate elements
//                   (unpacks the elements)

let number = [1, 2, 3, 4, 5];
let maximum = Math.max(...number); // ... is the spread operator, takes the values of the array and passes them as arguments

// REST PARAMETERS = ... allows functions work with a variable number of arguments by bundling them into an array
//                   (packs the elements)
//EXAMPLE 1
function operFridge(...foods){
    console.log(foods); 
}

const food1 = "pizza";
const food2 = "burger";
const food3 = "fries";
const food4 = "soda";

operFridge(food1, food2, food3, food4);

//spread = expands an array into separate elements
//rest = bundles separate elements into an array


// callback = a function that is passed as an argument to another function

hello(goodbye); // after hello is called, goodbye is called

function hello(callback) {
    console.log("Hello");
    callback(); // calls the function goodbye
}

function goodbye() {
    console.log("Goodbye");
}

// forEach = method used to iterate over the elements of an array
//           and apply a sepecified function (callback) to each element

//           array.forEach(callback(currentValue, index, array))

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(double); // 2, 4, 6, 8, 10
numbers.forEach(display); // 1, 2, 3, 4, 5
numbers.forEach(triple); // 3, 6, 9, 12, 15

function double(value, index, array) {
    array[index] = value * 2;
}

function triple(value, index, array) {
    array[index] = value * 3;
}

function display(value) {
    console.log(value);
}

function square(value, index, array) {
    array[index] = Math.pow(value, 2);
}

function cube(value, index, array) {
    array[index] = Math.pow(value, 3);
}

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

fruits.forEach(display); // apple, banana, cherry, date, elderberry
fruits.forEach(uppercase); // APPLE, BANANA, CHERRY, DATE, ELDERBERRY
fruits.forEach(lowercase); // apple, banana, cherry, date, elderberry
fruits.forEach(capitalize); // Apple, Banana, Cherry, Date, Elderberry

function uppercase(value, index, array) {
    array[index] = value.toUpperCase();
}

function lowercase(value, index, array) {
    array[index] = value.toLowerCase();
}

function capitalize(value, index, array) {
    array[index] = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

//.map = accepts a callback and applies that function to each element of an array
//       then returns a new array with the results

const numbers1 = [1, 2, 3, 4, 5];

const squares = numbers1.map(square); // 1, 4, 9, 16, 25
const cubes = numbers1.map(cube); // 1, 8, 27, 64, 125

function square1(value) {
    return Math.pow(value, 2);
}
function cube1(value) {
    return Math.pow(value, 3);
}

const students = ["John Doe", "Jane Smith", "Jack Black", "Jill White"];
const studentsUpper = students.map(upperCase); // JOHN DOE, JANE SMITH, JACK BLACK, JILL WHITE
const studentsLower = students.map(lowerCase); // john doe, jane smith, jack black, jill white


function upperCase(value) {
    return value.toUpperCase();
}

function lowerCase(value) {
    return value.toLowerCase();
}

console.log(studentsUpper);
console.log(studentsLower);

const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates); // 1/10/2024, 2/20/2025, 3/30/2026       

function formatDates(value){
    const parts = value.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

//.filter = creates a new array by filtering out elements

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNums = numbers2.filter(isEven); // 2, 4, 6, 8, 10
let oddNums = numbers2.filter(isOdd); // 1, 3, 5, 7, 9

function isEven(value) {
    return value % 2 === 0;
}
function isOdd(value) {
    return value % 2 !== 0;
}

const ages = [10, 11, 15, 18, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70];
const adults = ages.filter(isAdult); // 25, 30, 35, 40, 45, 50, 55, 60, 65, 70
const children = ages.filter(isChild); // 10, 11, 15, 18

function isAdult(value) {
    return value >= 18;
}

function isChild(value) {
    return value < 18;
}

const words = ["apple", "banana", "cherry", "date", "elderberry"];
const shortWords = words.filter(getShortWords); // apple, date


function getShortWords(value){
    return value.length < 6;
}

//.reduce = reduces the values of an array to a single value
//          (accumulator, currentValue, index, array)

const prices = [10.99, 5.99, 3.99, 7.99, 8.99];
const total = prices.reduce(sum); // 37.95

console.log(`The total is $${total.toFixed(2)}`); // The total is $37.95

function sum(accumulator, value){ // accumulator = 0, value = 10.99, accumulator = 10.99, value = 5.99, accumulator = 16.98, value = 3.99, accumulator = 20.97, value = 7.99, accumulator = 28.96, value = 8.99, accumulator = 37.95
    return accumulator + value;
}

const grades = [75, 50, 80, 90, 95];
const maximum1 = grades.reduce(getMax); // 95
const minimum1 = grades.reduce(getMin); // 50

function getMax(accumulator, value){
    return Math.max(accumulator, value);
}

function getMin(accumulator, value){
    return Math.min(accumulator, value);
}

// function declaration = define a reusable block of code that performs a specific task
// function expression = a way to define function as values or variables
/*
const hello = function(){
    console.log("Hello");
}
setTimeout(hello, 3000); // waits 3 seconds before calling the function hello

const numbers3 = [1, 2, 3, 4, 5];
const squares1 = numbers.map(function(value){
    return Math.pow(value, 2);
});

console.log(squares1); // 1, 4, 9, 16, 25

const cubes1 = numbers.map(function(value){
    return Math.pow(value, 3);
});

console.log(cubes1); // 1, 8, 27, 64, 125

// arrow function = a shorter syntax for writing function expressions
//                  (parameters) => {statements or some code}

const hello1 = () => console.log("Hello");
const hello2 = (name, age) => {console.log(`Hello ${name}`)
                               console.log("You are " + age + " years old")};


hello1();
hello2("John", 23); // Hello John, You are 23 years old
*/


// desctructuring = a way to extract values from arrays or objects and assign them to variables
//                 [] = arrays, {} = objects

// Example 
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

[a, b] = [b, a]; // a = 2, b = 1

// SWAP 2 ELEMENTS IN AN ARRAY

const colors = ["red", "green", "blue", "yellow", "orange"]; // 0, 1, 2, 3, 4

[colors[0], colors[1]] = [colors[1], colors[0]]; 

console.log(colors); // green, red, blue, yellow, orange

// ASSIGN ARRAY ELEMENTS TO VARIABLES

const [firstColor, secondColor, thirdColor, ...extraColors] = colors; 
//... = rest operator, gathers the remaining elements into an array
console.log(firstColor); // green
console.log(secondColor); // red
console.log(thirdColor); // blue
console.log(extraColors); // yellow, orange

// EXTRACT VALUES FROM OBJECTS

const person1 = {
    name: "John Doe",
    age: 25,
    city: "New York",
    job: "Developer"
}

const person2 = {
    name: "Jane Smith",
    age: 30,
    city: "Los Angeles"
}

const {name, age, city, job = "Student"} = person1;
console.log(name); // John Doe
console.log(age); // 25
console.log(city); // New York
console.log(job); // Developer

// DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({name, age, city, job = "Student"}){
    console.log(`name: ${name}`); 
    console.log(`age: ${age}`); 
    console.log(`city: ${city}`); 
    console.log(`job: ${job}`); 

}

displayPerson(person1); // name: John Doe, age: 25, city: New York, job: Developer
displayPerson(person2); // name: Jane Smith, age: 30, city: Los Angeles, job: Student

// nested objects: objects within objects 
//                 Allows you to represent more complex data structures
//                 Child object is enclosed by a Parent object

//                 Person{Address{}, ContactInfo{}}
//                 ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}
const person3 = {
    name: "John Doe",
    age: 25,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001"
    },
    contactInfo: {
        email: "Johndoe@gmail.com",
        number: "123-456-7890"
    }
}

console.log(person3.address.city); // New York
console.log(person3.contactInfo.email); // johndoe@gmail.com




// Arrays of objects 

const fruits1 = [{name: "apple", color: "red", price: 1.99}, 
                {name: "banana", color: "yellow", price: 0.99},
                {name: "cherry", color: "red", price: 2.99}]

fruits1[0].price

console.log(fruits1[0].price); // 1.99
console.log(fruits1[1].color); // yellow
console.log(fruits1[2].name); // cherry
fruits1.push({name: "date", color: "brown", price: 3.99});
console.log(fruits1[3].name); // date
fruits1.pop(); // removes date
//console.log(fruits1[3].name); // undefined
fruits1.splice(1, 2); // removes banana and cherry
console.log(fruits1[0].name); // apple
fruits1.push({name: "banana", color: "yellow", price: 0.99});
fruits1.push({name: "cherry", color: "red", price: 2.99});
fruits1.push({name: "date", color: "brown", price: 3.99});
fruits1.unshift({name: "elderberry", color: "purple", price: 4.99}); // adds elderberry to the beginning


fruits1.forEach(fruit => console.log(fruit.name)); // apple, banana, cherry, date

const fruitNames = fruits1.map(fruit => fruit.name);
console.log(fruitNames); // apple, banana, cherry, date

const yellowFruits = fruits1.filter(fruit => fruit.color === "yellow");
const lowPriceFruits = fruits1.filter(fruit => fruit.price < 2.00); // banana, apple

console.log(yellowFruits); // banana
console.log(lowPriceFruits); // banana

const maxPriceFruit = fruits1.reduce((max, fruit) => fruit.price > max.price ? fruit : max); // Compare the price of each fruit to the max price
const minPriceFruit = fruits1.reduce((min, fruit) => fruit.price < min.price ? fruit : min); // Compare the price of each fruit to the min price
console.log(maxPriceFruit); // elderberry
console.log(minPriceFruit);

// sort() = method used to sort elements of an array in place. 
//          Sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings

let numbers3 = [1, 10, 8, 3, 5, 2, 7, 4, 6];

numbers3.sort((a, b) => a - b); // 1, 2, 3, 4, 5, 6, 7, 8, 10
numbers3.sort((a, b) => b - a); // 10, 8, 7, 6, 5, 4, 3, 2, 1


console.log(numbers3)

const people1 = [{name: "John Doe", age: 25}, 
                 {name: "Jane Smith", age: 30}, 
                 {name: "Jack Black", age: 35}, 
                 {name: "Jill White", age: 40}];

//people1.sort((a, b) => a.age - b.age); // John Doe, Jane Smith, Jack Black, Jill White

//people1.sort((a, b) => b.age - a.age); // Jill White, Jack Black, Jane Smith, John Doe
//console.log(people1);


//localeCompare() = method used to compare two strings in the current locale
people1.sort((a, b) => a.name.localeCompare(b.name)); // Jack Black, Jane Smith, Jill White, John Doe
//people1.sort((a, b) => b.name.localeCompare(a.name)); // John Doe, Jill White, Jane Smith, Jack Black

console.log(people1);


// Shuffle array - Fisher-Yates algorithm

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

shuffle(cards);

console.log(cards);

function shuffle(array){
    for(let i = array.length -1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]];
    }
}

// Date objects = Objects that contain values that represent dates and times
//                These date objects can be changed and formatted
// Date(year, month, day, hours, minutes, seconds, milliseconds)
const date = new Date(); // current date and time
const date1 = new Date("2023-12-31");
const year = date.getFullYear(); 
const month = date.getMonth(); 
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const milliseconds = date.getMilliseconds();
const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday

if(date1 < date) {
    console.log("date1 is in the future");
}

date.setFullYear(2024);
date.setMonth(0);
date.setDate(10);
date.setHours(12);
date.setMinutes(30);
date.setSeconds(45);
date.setMilliseconds(500);


console.log(date); 
console.log(year);
console.log(month);
console.log(day);
console.log(hours);
console.log(minutes);
console.log(seconds);
console.log(milliseconds);
console.log(dayOfWeek);

// Closure = A function defined inside of another function, the inner function has access to the variables
//           and scope of the outer function.
//           Allow for private variables and state maintenance
//           Used frequently in JS frameworks: React, Angular, Vue

function outer(){
    let message = "Hello";
    function inner(){
        console.log(message);
    }
    inner();
}
let message = "Goodbye";
outer();
console.log(message);
function createCounter(){
    let count = 0;
    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount(){
        return count;
    }

    return {increment, getCount};
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(`The final count is ${counter.getCount()}`);

function createGameScore(){
    let score = 0;
    function increaseScore(points){
        score += points;
        console.log(`+${points} points`);
    }

    function decreaseScore(points){
        score -= points;
        console.log(`-${points} points`);
    }

    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const game = createGameScore();

game.increaseScore(10);
game.increaseScore(20);
game.decreaseScore(5);
console.log(`The final score is ${game.getScore()}`);

// setTimeout() = function in JavaScript that allows you to schedule the execution of a function
//                after an amount of time (milliseconds).
//                Times are approximate (varies based on the workload of the JavaScript runtime env.)
//                setTimeout(callback, delay)
//                clearTimeout(timeoutId) = cancels a timeout

//setTimeout(function(){window.alert("hello")}, 3000);
//const timeoutId = setTimeout(() => window.alert("hello"), 3000);

//clearTimeout(timeoutId); // cancels the timeout

let timeoutId;

function startTimer(){
    timeoutId = setTimeout(() => console.log("Time's up!"), 5000);
    console.log("Timer started");
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("Timer cleared");
}


// ES6 Module = An external file that contains reusable code that can be imported into other JavaScript files.
//              Write reusable code for many different apps.
//              Can contain variables, classes, functions... and more.
//              Introduced as part of ES6 (ECMAScript 2015)


import {PI1, getArea, getCircumference, getVolume} from './mathUtil.js';

const circumference1 = getCircumference(5);
const area = getArea(5);
const volume = getVolume(5);

console.log(PI1);
console.log(area);
console.log(circumference1);
console.log(volume);


// synchronous = Executes line by line consecutively in a sequential manner
//               Code that wairs for an operation to complete.

// asynchronous = Allows multiple operations to be performed concurrently without waiting 
//                Doesn't block the execution flow and allows the program to continue
//                (I/O operations, network requests, fetching data)
//                Handled with: Callbacks, promises, Async/Await

/* function func1(callback){
    setTimeout(() => {
        console.log("Task1");
        callback()}, 3000);

}
function func2(){
    console.log("Task2");
    console.log("Task3");
    console.log("Task4");
    
}

func1(func2); */

// Error = An object that is created to represent a problem that occurs 
//         during the execution of a program.   

// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up 
//               ex. close files, close connections, release resources

try{
    console.log("Hello");
    // NETWORK ERRORS
    // PROMISE REJECTION
    // SECURITY ERRORS
}
catch(error){
    console.log(error);
}
finally{
    console.log("Finally block executed");
    // CLOSE FILES
    // CLOSE CONNECTIONS
    // RELEASE RESOURCES
}
/* try{
    const dividend = Number(window.prompt ("Enter the divident"));
    const divisor = Number(window.prompt ("Enter the divisor"));
    if(divisor == 0){
        throw new Error("You can't divide by zero!");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("You must enter a number!");
    }
    const result = dividend / divisor;
    console.log(result);
} catch(error){
    console.error(error);
} */

console.log("Program continues");


// DOM = DOCUMENT OBJECT MODEL
//       Object{} that represents the page you see in the web browser
//       and provides you with an API to interact with it.
//       Web browser contructs the DOM when it loads an HTML document,
//       and structures all the elements in a tree-like representation.
//       JavaScript can access the DOM to dynamically
//       change the content, structure, and style of a web page.

// element selectors = Methods used to target and manipulate HTML elements
//                     They allow you to select one or multiple HTML elements
//                     from the DOM (Document Object Model)
// DOM SELECTORS = Methods that allow you to select elements in the DOM
//                 document.getElementById("id") = selects an element by its id   ```````
//                 document.getElementsByClassName("class") = selects elements by their class
//                 document.getElementsByTagName("tag") = selects elements by their tag
//                 document.querySelector("selector") = selects the first element that matches the selector or null
//                 document.querySelectorAll("selector") = selects all elements that match the selector (nodelist) ```````
//                 document.getElementsByName("name") = selects elements by their name
//                 document.forms["formName"] = selects a form by its name
//                 document.images = selects all images in the document
//                 document.links = selects all links in the document
//                 document.scripts = selects all scripts in the document


const username = "John Doe";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? `Guest` : username;

console.dir(document);

const frutas = document.getElementsByClassName("fruits");

console.log(frutas);

for(let fruta of frutas){
    fruta.style.backgroundColor = "lightblue";
}

Array.from(frutas).forEach(fruta => fruta.style.color = "black");

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

for(let h4 of h4Elements){
    h4.style.backgroundColor = "lightgreen";
}

for(let li of liElements){
    li.style.color = "brown";
}

Array.from(h4Elements).forEach(h4 => h4.style.color = "blue");

Array.from(liElements).forEach(li => li.style.backgroundColor = "lightyellow")

const element = document.querySelector(".fruits");

element.style.backgroundColor = "yellow"; // the first match is selected

console.log(element);

const frutaa = document.querySelectorAll(".fruits");

frutaa[1].style.backgroundColor = "red";

console.log(frutaa);

frutaa.forEach(fruta => {
    fruta.style.backgroundColor = "green";
})


// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// -----------------.firstElementChild------------------

const elemento = document.getElementById("gpu");
const firstChild = elemento.firstElementChild;
firstChild.style.backgroundColor = "lightblue"

const ulElementos = document.querySelectorAll("ul");

ulElementos.forEach(ulElemento => {
    const firstChild1 = ulElemento.firstElementChild;
    firstChild1.style.backgroundColor = "lightpink";
})

// -----------------.lastElementChild------------------

const elemento1 = document.getElementById("gpu");
const lastChild = elemento1.lastElementChild;
lastChild.style.backgroundColor = "lightgreen";

const ulElementos1 = document.querySelectorAll("ul");

ulElementos1.forEach(ulElemento1 => {
    const lastChild1 = ulElemento1.lastElementChild;
    lastChild1.style.backgroundColor = "turquoise"
})

// -----------------.nextElementSibling------------------

const elemento2 = document.getElementById("i9");
const nextSibling = elemento2.nextElementSibling; // nextElementSibling is the next sibling element of the selected element
nextSibling.style.backgroundColor = "aqua";

// -----------------.previousElementSibling------------------

const elemento3 = document.getElementById("i7");
const previousSibling = elemento3.previousElementSibling; // previousElementSibling is the previous sibling element of the selected element
previousSibling.style.backgroundColor = "coral";

// -----------------.parentElement------------------

const elemento4 = document.getElementById("32");
const parent = elemento4.parentElement; // parentElement is the parent element of the selected element
parent.style.backgroundColor = "lightcoral";

// -----------------.children------------------
const elemento5 = document.getElementById("ram");
const children1 = elemento5.children; // children is a collection of the child elements of the selected element

Array.from(children1).forEach(child => {
    child.style.backgroundColor = "lightyellow";
})

// Callback Hell = Situation in JavaScript where callbacks are nested within other callbacks
//                 to the degree where the code is difficult to read and maintain.
//                 Old pattern to handle asynchronous functions.
//                 Use Promises + async/await to avoid Callback Hell.

function task1(callback){
    setTimeout(() =>{
        console.log("Task 1 completed");
        callback();
    }, 2000);
    
}
function task2(callback){
    setTimeout(() =>{
        console.log("Task 2 completed");
        callback();
    }, 1000);
}
function task3(callback){
    setTimeout(() =>{
        console.log("Task 3 completed");
        callback();
    }, 3000);
}
function task4(callback){
    setTimeout(() =>{
        console.log("Task 4 completed");
        callback();
    }, 1500);
}

task1(() =>{
    task2(() =>{
        task3(() =>{
            task4(() =>{
                console.log("All tasks completed");
            });
        });
    });
});

// Promise = An Object that manages asynchronous operations.
//           Wrap a Promise Object around {asynchronous code}
//           "I promise to return a value"
//           PENDING -> RESOLVED OR REJECTED
//           new Promise((resolve, reject) => {asynchronous code}) = creates a new Promise object

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN 
// 3. TAKE OUT THE TRASH

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{

            const dogWalked = true;
            if(dogWalked){
                console.log("Dog walked");
            }else {
                reject("Dog not walked");
            }
        }, 1500);
    });
}
function cleanKitchen(callback){
    
    return new Promise((resolve, reject) => {
        setTimeout(() =>{

            const kitchenCleaned = true;
            if(kitchenCleaned){
                console.log("Kitchen cleaned");
            }
            else {
                reject("Kitchen not cleaned");
            }
        }, 2500);
    });
}
function takeOutTrash(callback){

    return new Promise((resolve, reject) => {
        setTimeout(() =>{
        
                const trashTakenOut = true;
                if(trashTakenOut){
                    console.log("Trash taken out");
                }else {
                    reject("Trash not taken out");
                }
        }, 500);
    });
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("You are done!")})
         .catch(error => console.error(error)); // if any of the promises are rejected, the catch block will execute


let meats = ["b", "a", "c", "d"];
console.log(meats.sort());
console.log(meats.reverse());
console.log(meats.sort().reverse()); //



let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let maximo = Math.max(...numeros); // 10
let minimo = Math.min(...numeros); // 1

console.log(maximo);
console.log(minimo);
console.log(...numeros);

let nombreRand = "John Doe";

let letters = [...nombreRand];
console.log(letters); // J, o, h, n, D, o, e

let combinacion = [...numeros, ...letters];

console.log(combinacion); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, o, h, n, D, o, e


const palabra1 = "Hola";
const palabra2 = "Mundo";
const palabra3 = "Hola Mundo";
const palabra4 = "Hola Mundo!";


function palabrasJuntas(...palabras){
    console.log(...palabras);
}

palabrasJuntas(palabra1, palabra2, palabra3, palabra4); // Hola, Mundo, Hola Mundo, Hola Mundo!

function combinarStrings(...strings){
    return strings.join(" ");
}

const completoNombre = combinarStrings("John", "Doe", "Smith", "Jr.");
console.log(completoNombre); // John Doe Smith Jr.

function saludos(nombre){
    return `Hola ${nombre}`;
}
const nombre1 = "John";
console.log(saludos(nombre1)); // Hola John 

const saludando = nombre => `Hola ${nombre}`; // Arrow function syntax

console.log(saludando("John")); // Hola John


class Persona{
    altura(altura){
        console.log(`La altura es ${altura} cm`);
    }

    static altura1(altura){
        console.log(`La altura es ${altura} cm`);
    }
}
const Bryan = new Persona();

console.log(Bryan.altura(170));

console.log(Persona.altura1(180)); 