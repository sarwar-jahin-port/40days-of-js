const guessTheNumber = () => {
    const computerGuess = Math.floor(Math.random() * 10) + 1;
    
    let count = 0;
    while(computerGuess){
        const userInput = Number(prompt("Enter a number"));
        count++;
        if(userInput === computerGuess){
            console.log("Congrats!!! The number is matched after attempts", count);
            break;
        }else if(userInput > computerGuess){
            console.log("Too high");
            continue;
        }else{
            console.log("Too low");
            continue;
        }
    }

    const playAgainPrompt = prompt("Want to play again? (yes/ no)");
    const playAgain = playAgainPrompt === 'yes' ? playAgainPrompt.toLocaleLowerCase() : "no";

    if(playAgain === 'yes'){
        guessTheNumber();
    }else{
        console.log("Thanks for playing the game. See you later...")
    }
}
guessTheNumber();