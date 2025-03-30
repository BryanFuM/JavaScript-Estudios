// RANDOM PASSWORD GENERATOR

const myButton = document.getElementById("btn");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const passwordInput = document.getElementById("password");
const lengthInput = document.getElementById("length");

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let allowedChars = "";
    let password = "";
    
    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";
    
    if(length <= 0) {
        return '(password length must be greater than 0)';
    }
    if(allowedChars.length === 0) {
        return '(must include at least one type of character)';
    }

    for(let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

myButton.onclick = function() {
    const length = Number(lengthInput.value); // Convert to number or you can also use parseInt()
    const includeLowercase = lowercase.checked;
    const includeUppercase = uppercase.checked;
    const includeNumbers = numbers.checked;
    const includeSymbols = symbols.checked;

    const password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    passwordInput.value = password;
}

// Add click-to-copy functionality
passwordInput.addEventListener('click', function() {
    if (this.value) {
        // Select the text
        this.select();
        // Copy to clipboard
        document.execCommand('copy');
        // Add copied class for visual feedback
        this.classList.add('copied');
        // Remove copied class after 2 seconds
        setTimeout(() => {
            this.classList.remove('copied');
        }, 2000);
    }
});







