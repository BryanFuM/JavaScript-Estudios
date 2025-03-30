
const checkMeBtn = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const checkResult = document.getElementById("checkResult");
const paymentResult = document.getElementById("paymentResult");

function checked() {
    if(checkMeBtn.checked){
        checkResult.textContent = "Checked!";
    } else {
        checkResult.textContent = "Unchecked!";
    }

    if(visaBtn.checked){
        paymentResult.textContent = "Visa selected!";
    } else if(masterCardBtn.checked){
        paymentResult.textContent = "MasterCard selected!";
    } else if(paypalBtn.checked){
        paymentResult.textContent = "PayPal selected!";
    } else {
        paymentResult.textContent = "No payment method selected!";
    }
}