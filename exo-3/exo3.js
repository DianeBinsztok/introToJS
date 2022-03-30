// demander le choix utilisateur
var playerInput = prompt("Your choice ( rock, paper, scissors) ?");

// traiter l'input
function getPlayerChoice(input) {
    let lowerCaseInput = input.toLowerCase();
    if ((lowerCaseInput == "rock") || (lowerCaseInput == "paper") || (lowerCaseInput == "scissors")) {
        playerInput = lowerCaseInput;
    } else {
        input = prompt("Your choice can only be: rock, paper or scissors.");
        getPlayerChoice(input)
    }
}

getPlayerChoice(playerInput);
console.log("You chose:" , playerInput);