// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input) {
    if (display.value === "0" && input !== ".") {
        display.value = input; // Reemplaza el 0 inicial con el nuevo número
    } else {
        display.value += input;
    }
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
    try{
        display.value = eval(display.value);
    }catch{
        display.value = "Error";
    }
}


