// 1 - Récupérer un inupt utilisateur
const input = prompt("Entrez une phrase");

// 2 - Tableau de référence des voyelles
const vowels = ["A","Â","À", "E", "É", "È","Ề","Ë", "I","Ï", "O","Ô", "U","Ù", "Y"];

// 3-4-5 - Récupérer les voyelles de l'input dans un tableau:
const resultArray = [];

function processInput(userInput) {
        for (i = 0; i < input.length; i++){
            let letter = input[i].toUpperCase();
            if (vowels.indexOf(letter)!= -1) {
            resultArray.push(letter);
        }
    }
}
processInput(input);
console.log("Mon tableau de voyelles : ", resultArray);