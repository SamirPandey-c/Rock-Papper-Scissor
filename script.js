const icons = document.querySelectorAll("img");
const result = document.getElementById("result")
const humanScoreDisplay = document.getElementById("humanScore")
const computerScoreDisplay = document.getElementById("computerScore")

        let humanScore = 0;
        let computerScore = 0;

        humanScoreDisplay.textContent = humanScore;
        computerScoreDisplay.textContent = computerScore;

icons.forEach((icon) =>{
    icon.addEventListener("click", ()=>{


    
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


            let computerSelection = getComputerChoice()
            let humanSelection = icon.id;

            console.log(humanSelection);
            console.log(computerSelection);


            function playRound(humanChoice, computerChoice){


                if(humanChoice === ""){
                    alert("Enter a valid play!")
                }
                else if(computerChoice === "papper" && humanChoice === "rock"){
                    computerScore++;
                    result.textContent = "You Loose! Papper beats Rock"
                    computerScoreDisplay.textContent = computerScore;
                    
                }else if(computerChoice === "rock" && humanChoice === "scissor"){
                    computerScore++;
                    result.textContent = "You Loose! Rock beats Scissor"
                    computerScoreDisplay.textContent = computerScore;
                }else if(computerChoice === "scissor" && humanChoice === "papper"){
                    computerScore++;
                    result.textContent = "You Loose! Scissor beats Papper"
                    computerScoreDisplay.textContent = computerScore;
                }else if(computerChoice === "rock" && humanChoice === "rock"){
                    result.textContent = "It's a Draw"
                }else if(computerChoice === "papper" && humanChoice === "papper"){
                    result.textContent = "It's a Draw"
                }else if(computerChoice === "scissor" && humanChoice === "scissor"){
                    result.textContent = "It's a Draw"
                }else{
                    humanScore++ ;
                    result.textContent = "You Won!"
                    humanScoreDisplay.textContent = humanScore;
                }
            }

            playRound(humanSelection, computerSelection)

        }

        
                playGame();
        

    })
})



