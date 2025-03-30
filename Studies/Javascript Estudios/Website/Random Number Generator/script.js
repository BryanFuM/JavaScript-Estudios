// RANDOM NUMBER GENERATOR

const myButton = document.getElementById("btn");
const myLabel1 = document.getElementById("label1");
const myLabel2 = document.getElementById("label2");
const myLabel3 = document.getElementById("label3");

const min = 50;
const max = 200;

let randomNumber1;
let randomNumber2;
let randomNumber3;


myButton.onclick = function() {
    randomNumber1 = Math.floor(Math.random() * (max-min)) + min;
    randomNumber2 = Math.floor(Math.random() * (max-min)) + min;
    randomNumber3 = Math.floor(Math.random() * (max-min)) + min;
    myLabel1.textContent = randomNumber1;
    myLabel2.textContent = randomNumber2;
    myLabel3.textContent = randomNumber3;
}