//TEMPERATURE CONVERSION

const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert(){
    
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9/5 + 32;
        result.textContent = temp.toFixed(1) + "°F"; //toFixed(1) rounds to 1 decimal place
    } else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C"; 
    } else {
        result.textContent = "Please select a conversion type";
    }
}