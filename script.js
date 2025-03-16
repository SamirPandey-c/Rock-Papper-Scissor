




function playGame(){
    
function getComputerChoice(){
    let i = Math.floor(Math.random()* 3)

    if(i === 0){
        return "rock"
    }
    else if(i == 1){
        return "papper"
    }else{
        return "scissor"
    }
}

function getHumanChoice(){
    let i = prompt("Enter Your Choice \"Rock, Papper, Scissor\"")
    
    return i
}


const computerSelection = getComputerChoice()
const humanSelection = getHumanChoice()

    let humanScore = 0
    let computerScore = 0

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if(computerChoice === "papper" && humanChoice === "rock"){
        computerScore++;
        alert("You Loose Papper beats Rock" + "Your Score: " + humanScore + "Computer Score: " + computerScore)
    }else if(computerChoice === "rock" && humanChoice === "scissor"){
        computerScore++;
        alert("You Loose Rock beats Scissor" + "Your Score: " + humanScore + "Computer Score: " + computerScore)
    }else if(computerChoice === "scissor" && humanChoice === "papper"){
        computerScore++;
        alert("You Loose Scissor beats Papper" + "Your Score: " + humanScore + "Computer Score: " + computerScore)
    }else if(computerChoice === "rock" && humanChoice === "rock"){
        alert("It's a Draw!" + "Your Score: " + humanScore + "Computer Score: " + computerScore)
    }else if(computerChoice === "papper" && humanChoice === "papper"){
        alert("It's a Draw!" + "Your Score: " + humanScore + "Computer Score: " + computerScore)
    }else if(computerChoice === "scissor" && humanChoice === "scissor"){
        alert("It's a Draw" + "Your Score: " + humanScore + "Computer Score: " + computerScore)
    }else{
        humanScore++;
        alert("You Won!!!" + "Your Score: " + humanScore + "Computer Score: " + computerScore)
    }
    
}

    playRound(humanSelection, computerSelection)
   

}

for(let i = 0; i<5; i++){
    playGame();
}
