
let humanScore = 0
let computerScore = 0



function playGame(){
    
    
function getComputerChoice(){
    let i = Math.floor(Math.random()*3)
    if(i === 0){
        return "rock"
    }else if(i === 1){
        return "papper"
    }else{
        return "scissor"
    }
}

function getHumanChoice(){
    let i = prompt("Select Your Choice 'Rock, Papper, Scissor'")
    return i;
}


let computerSelection = getComputerChoice()
let humanSelection = getHumanChoice();
    
    
    function playRound(humanChoice, computerChoice){
    
        humanChoice = humanChoice.toLowerCase();
    
        if(humanChoice === ""){
            alert("Enter a valid play!")
        }
        else if(computerChoice === "papper" && humanChoice === "rock"){
            computerScore++;
            alert("You Loose Papper beats Rock")
        }else if(computerChoice === "rock" && humanChoice === "scissor"){
            computerScore++;
            alert("You Loose Rock beats Scissor")
        }else if(computerChoice === "scissor" && humanChoice === "papper"){
            computerScore++;
            alert("You Loose Scissor beats Papper")
        }else if(computerChoice === "rock" && humanChoice === "rock"){
            alert("It's a Draw!")
        }else if(computerChoice === "papper" && humanChoice === "papper"){
            alert("It's a Draw!")
        }else if(computerChoice === "scissor" && humanChoice === "scissor"){
            alert("It's a Draw")
        }else{
            humanScore++ ;
            alert("You Won!!!")
        }
    }




    playRound(humanSelection, computerSelection)


    
}

    for(let i = 0; i<5; i++){
  playGame();
}


alert(`Your Score is ${humanScore} Computer Score is ${computerScore}`)