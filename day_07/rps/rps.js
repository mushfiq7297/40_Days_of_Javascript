
function rockPaperScissorsGame(){
    console.log("Welcome to the game! Lets get Started.")

    const userChoicePrompt = prompt("Enter Rock, Paper or Scissors");

    let userChoice = userChoicePrompt.toLocaleLowerCase();

let computerChoice;
    let randomNumber= Math.floor(Math.random() *3)+1;

   


    if(randomNumber === 1){
       computerChoice = "rock"
    }
    else if(randomNumber === 2){
       computerChoice = "paper"
    }
    else {
        computerChoice = "scissors"
    }

    console.log("User Choice", userChoice)
    console.log("Computer Choice", computerChoice)



    if (
        (userChoice == "rock" && computerChoice == "scissors") ||
        (userChoice == "paper" && computerChoice == "rock" )||
        (userChoice == "scissors" && computerChoice == "paper")
    ) {
        console.log("You the user win");
    } else if (
        userChoice == computerChoice
    ) {
        console.log("It's a draw");
    } else {
        console.log("Computer wins");
    }
    
 
}

rockPaperScissorsGame();