// Demander le choix utilisateur:
var playerInput = prompt("Your choice ( rock, paper, scissors) ?");

// Traiter l'input:
function getPlayerChoice(input) {
    let lowerCaseInput = input.toLowerCase();
    if ((lowerCaseInput == "rock") || (lowerCaseInput == "paper") || (lowerCaseInput == "scissors")) {
        playerInput = lowerCaseInput;
        console.log("You chose:", playerInput);
    } else {
        input = prompt("Your choice can only be: rock, paper or scissors.");
        getPlayerChoice(input)
    }
}

// L'ordinateur choisit:
function getComputerChoice() {
    // Les choix possibles:
    const choices = ["rock", "paper", "scissors"];
    // choix randomisé
    let random = Math.round(Math.random(0, 2));
    let computerChoice = choices[random];
    console.log("I chose:", computerChoice);
}

getPlayerChoice(playerInput);
getComputerChoice();


