function rockPaperScissorsGame(){
    const userChoicePrompt = prompt("Enter Rock, Paper or Scissors");
    const userChoice = userChoicePrompt.toLowerCase();

    let computerChoice;
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch(randomNumber){
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'scissors';
            break;
        default: 
            console.error("Computer is sleeping");
    }

    if(
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ){
        console.log("You the user win, yay !!!");
    }else if(userChoice === computerChoice){
        console.log("The game is a Tie.");
    }else if(
        (userChoice === 'rock' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'rock')
    ){
        console.log("Oh... compute is the winner");
    }else{
        console.log("Please check the input we don't understand it.")
    }

    const playAgainPrompt = prompt("Do you want to play again? (yes/ no)");
    const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";

    if(playAgain === 'yes'){
        rockPaperScissorsGame();
    }else{
        console.log("Thanks for playing the game. see you again...")
    }
}

rockPaperScissorsGame();