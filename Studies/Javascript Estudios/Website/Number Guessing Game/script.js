// NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;

const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let attempts = 0;
let guess;
let isRunning = true;

while (isRunning) {

    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    if(isNaN(guess)){ // isNaN() checks if the value is not a number
        window.alert("Please enter a valid number");
    } else if (guess < minNum || guess > maxNum) {
        window.alert("Please enter a number within the range");
    } else {
        attempts++;
        if (guess < answer) {
            window.alert(`Too Low! Try again!`);
        } else if (guess > answer) {
            window.alert("Too High! Try again!");
        } else {
            window.alert(`Congratulations! The answer was ${answer}!`);
           window.alert(`It took you ${attempts} attempts!`);
            isRunning = false;
        }
    }

}