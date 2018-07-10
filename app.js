function computerPlay()
{
    let answer = Math.floor(Math.random() * 3);
    switch (answer) 
    {
        case 0: return "stone";
        case 1: return "paper";
        default: return "scissors";
    }
}
//returns 1 if player wins, 0 if draw, -1 if loses, returns a string if bad input
//never actually do this
function playRound(playerSelection, computerSelection)
{
    //playerSelection = playerSelection.toLowerCase();
    let action = document.querySelector(".display");
    switch(playerSelection)
    {
        case "stone":
        {
            if (computerSelection === "stone") 
            {
                //console.log("Draw");
                action.textContent = "Draw";
                return 0;
            }
            else if (computerSelection === "paper") 
            {
                //console.log("You lose! Paper beats stone!");
                action.textContent = "You lose! Paper beats stone!";
                return -1;
            }
            
            else 
            {
                //console.log("You win! stone beats scissors!");
                action.textContent = "You win! stone beats scissors!";
                return 1;
            }
            
        }
        case "paper":
        {
            if (computerSelection === "stone")
            {
                //console.log("You win! Paper beats stone!");
                action.textContent = "You win! Paper beats stone!";
                return 1;
            }
            else if (computerSelection === "paper") 
            {
                //console.log("Draw");
                action.textContent = "Draw";
                return 0;
            }
            else
            {
                //console.log("You lose! Scissors beats paper!");
                action.textContent = "You lose! Scissors beats paper!";
                return -1;
            } 
        }

        case "scissors":
        {
            if (computerSelection === "stone") 
            {
                //console.log("You lose! stone beats scissors!");
                action.textContent = "You lose! stone beats scissors!";
                return -1;
            }
            else if (computerSelection === "paper") 
            {
                //console.log("You win! Scissors beats paper!");
                action.textContent = "You win! Scissors beats paper!";
                return 1;
            }
            
            else 
            {
                //console.log("Draw");
                action.textContent = "Draw";
                return 0;
            }
        }
        default: return `Error: Unknown player selection in function 'playRound()'`;
    }
}

function progress(roundResult) {
    let action = document.querySelector(".display");
    let result=document.querySelector(".r");
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    if (roundResult === 1) ++playerScore;
    else if (roundResult === -1) ++computerScore;
    document.getElementById('score-0').textContent =playerScore ;
     document.getElementById('score-1').textContent=computerScore;

    if (playerScore === 5 || computerScore === 5)
    {
        let imgg = document.querySelectorAll(".row");
        imgg.forEach((image) => {
            image.style.cssText = "display: none;"
        });

        if (playerScore > computerScore)
        {
            
            result.textContent = "You Win!";
        } 
        else if (playerScore < computerScore)
        {
            result.textContent = "You lose!";
        } 
        else result.textContent = "Draw!";   
    }
}
//plays a five round game
//function game()
let playerScore = 0;
let computerScore = 0;
let roundResult;

let stone = document.querySelector(".stone");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissor");
let score = document.querySelector(".score");
let gameResult = document.querySelector(".end");

stone.addEventListener("click", () => {
    roundResult = playRound("stone",computerPlay());
    progress(roundResult);
})

paper.addEventListener("click", () => {
    roundResult = playRound("paper", computerPlay());
    progress(roundResult);
})

scissors.addEventListener("click", () => {
    roundResult = playRound("scissors", computerPlay());
    progress(roundResult);
});