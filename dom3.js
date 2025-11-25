const msgDisplay= document.querySelector("#headMsg")
const playerInput = document.querySelector("#numberBtn")
const submitBtn = document.querySelector(".btn")

const randomNumber = Math.floor(Math.random()*100) + 1;
console.log(`Generate a Random Number: ${randomNumber}`);

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    
    const playerGuess = Number(playerInput.value);

    console.log(`Player Entered: ${playerGuess}`)

    if (playerGuess < 1 || playerGuess > 100 || isNaN (playerGuess)) {
        msgDisplay.textContent = "Play this game and enter a valid number between 1 and 100.";
        console.log(`Invalid input: ${playerGuess}`)
       return;
    }

    if (playerGuess === randomNumber) {
        msgDisplay.textContent = "Adios! You WON ₦2,000,00!!";
        msgDisplay.style.color = "black";
        console.log(`Correct! Player won ₦2,000,000 with guess ${playerGuess}`)
    } else {
        msgDisplay.textContent = "You lost this round 😒, bot chose ${random}. Try again to have a chance to win!";
        console.log(`Wrong guess ${playerGuess}. Try again.`)
    }
})
