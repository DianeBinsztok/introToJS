// demander le choix utilisateur
var playerInput = prompt("Your choice ( rock, paper, scissors) ?");

// traiter l'input
function getPlayerChoice(input) {
    let lowerCaseInput = input.toLowerCase();
    console.log(lowerCaseInput);
}

getPlayerChoice(playerInput);
