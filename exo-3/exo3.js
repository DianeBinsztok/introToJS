// Les choix possibles:
const choices = [
    {
        name: "rock",
        boss: "paper",
        biatch: "scissors"
    
    },
    {
        name: "paper",
        boss: "scissors",
        biatch: "rock"  
    },
    {
        name: "scissors",
        boss: "rock",
        biatch: "paper"  
    },
    {
        //cheat code:
        name: "bomb"
    }
];


// Demander le choix utilisateur:
let playerInput = prompt("Your choice ( rock, paper, scissors) ?");


// Traiter l'input:
function getPlayerChoice(input) {
    let lowerCaseInput = input.toLowerCase();
    if (choices.find(element => element.name == lowerCaseInput)) {
        playerInput = lowerCaseInput;
        console.log("You chose:", playerInput);
    } else {
        input = prompt("Your choice can only be: rock, paper or scissors.");
        getPlayerChoice(input)
    }
    return playerInput;
}


// L'ordinateur choisit:
function getComputerChoice() {
    let random = Math.floor(Math.random(0, 2)*3);
    let computerInput = choices[random];
    console.log("I chose:", computerInput.name);
    return computerInput;
}


// Déterminer le gagnant:
function findWinner(playerInput, computerInput) {
    //console.log(playerInput);
    if (computerInput.name == playerInput) {
        console.log("It's a draw!");
    } else if (computerInput.boss == playerInput) {
        console.log("Congratulations, you win!");
    } else if (playerInput == "bomb") { 
        console.log("Hey, that's cheating! But I guess you win ¯\_(ツ)_/¯");
    } else {
        console.log("I win!");
   }

}

function playGame(){
const playerChoice = getPlayerChoice(playerInput);
const computerChoice = getComputerChoice();
findWinner(playerChoice, computerChoice);    
}

playGame();