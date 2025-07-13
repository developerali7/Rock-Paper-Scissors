let computerChoice = document.getElementById("comp-spa");
let options = [ "rock" , "paper" , "scissors"];
let PlayerDisplay = document.getElementById("playerDisplay");
let resultDisplay = document.getElementById("result");
let computer;
let playerScoreDisplay = document.getElementById("playerscore");
let computerScoreDisplay = document.getElementById("computerscore");
let playerScore = 0;
let computerScore = 0;

//document.getElementById("btn").onclick = 

function playGame(playerChoice){
    computer = options[Math.floor(Math.random() * 3)];
    // console.log(computer);
    computerChoice.textContent=` Computer: ${computer} `

    PlayerDisplay.textContent = ` Player: ${playerChoice} `;
    let result = " ";

    if (playerChoice === computer) {
        result = "Tie"
    }
    else {
        switch (playerChoice) {
            case "rock":
                result = (computer === "scissors") ? "You Win" : "You Lose";
                if (computer === "scissors"){
                    playerScore++;
                }
                else{
                    computerScore++;
                };
                break;
            case "paper":
                result = (computer === "rock") ? "You Win" : "You Lose";
                if (computer === "rock"){
                    playerScore++;
                }
                else{
                    computerScore++;
                };
                break;        
            case "scissors":
                result = (computer === "paper") ? "You Win" : "You Lose";
                if (computer === "paper"){
                    playerScore++;
                }
                else{
                    computerScore++;
                };
                break;   
        }
    }
    
    resultDisplay.textContent = result;
    playerScoreDisplay.textContent = ` Player Score: ${playerScore} `;
    computerScoreDisplay.textContent = ` Computer Score: ${computerScore} `;

console.log(`Player : ${playerScore}`);
console.log(`Computer : ${computerScore}`);
};