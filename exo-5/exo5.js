// 1 - Récupérer un inupt utilisateur
const input = prompt("Entrez une phrase");

// 2 - Tableau de référence des voyelles
const vowels = ["A","Â","À", "E", "É", "È","Ề","Ë", "I","Ï", "O","Ô", "U","Ù", "Y"];

// 3-4-5-6 - Récupérer les voyelles de l'input dans un tableau:
const resultArray = [];

function processInput(userInput) {
    for (i = 0; i < input.length; i++) {
        let letter = input[i].toUpperCase();
        for (elt of vowels){
            if (letter == elt) {
                resultArray.push(letter);
            }
        }
    }
    
}
processInput(input);
console.log("Mon tableau de voyelles : ", resultArray);

/* 7 - Vérification de resultArray
resultArray.forEach(element => {
    if (vowels.includes(element)) {
        console.log("resultArray OK");
    } else {
        console.log("Somthing wrong in resultArray");
    }
});*/

// 8 - Mise en forme du tableau
prettyArray = resultArray.join().replaceAll(",", " ");
console.log(prettyArray);