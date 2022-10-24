
let a = "You win!"
let b = "You lose!"
let c = "Draw!"
let computerScore = 0;
let playerScore = 0;

function getComputerChoice(){
    let compSelection = ["rock", "paper", "scissors"];
    let random = compSelection[Math.floor(Math.random() *compSelection.length)]
    return random

}  
    
function playround(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() === "rock"){
        if(computerSelection ==="paper"){
            console.log(b)
            computerScore++
        }
        else if (computerSelection ==="scissors"){
            console.log(a)
            playerScore++
        }
        else{
            console.log(c)
        }
    }

    else if (playerSelection.toLowerCase()==="paper"){
        if(computerSelection ==="scissors"){
            console.log(b)
            computerScore++
        }
        else if(computerSelection ==="rock"){
            console.log(a)
            playerScore++
        }
        else{
            console.log(c)
        }

    }

    else if (playerSelection.toLowerCase()==="scissors"){
        if(computerSelection ==="rock"){
            console.log(b)
            computerScore++
        }
        else if (computerSelection ==="paper"){
            console.log(a)
            playerScore++

        }
        else{
            console.log(c)
        }
        
    }

    else{
        prompt("Rock, Paper, or Scissors?")
    }
   
}  

function game(){
    computerScore =0
    playerScore = 0

    for (let i=0; i<5; i++) {
        const playerSelection = prompt("Do you choose Rock, Paper, or Scissors?");
        const computerSelection = getComputerChoice();
        playround(playerSelection, computerSelection)
    }
    if (playerScore>computerScore){
        console.log("You won the game!")
    }
    else if (playerScore<computerScore){
        console.log("You lost the game!")
    }
    else if (playerScore ===computerScore){
        console.log("Draw!")
    }

}

game()