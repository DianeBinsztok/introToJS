var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

// 0 - Mumuse:
function cleanSentence(array) {
    let sentence = array.toString().replaceAll(",", " ").replace("time", "time,");
    return sentence;
}

// 1-  Enlever le dernier élément du tableau:
secretMessage.pop()// renvoie le dernier élément de secretMessage
console.log(secretMessage);// renvoie le tableau sans son dernier élément
console.log("1 - " , cleanSentence(secretMessage));

// 2 - Ajouter des éléments au tableau:
secretMessage.push("to", "program");
console.log(secretMessage);
console.log("2 - ", cleanSentence(secretMessage));


// 3 - Modifier un élément du tableau:
secretMessage.splice(secretMessage.indexOf("easily"), 1, "right");// => Commencer à l'index de "easily", changer 1 élément, le remplacer par "right"
console.log(secretMessage);
console.log("3 - ", cleanSentence(secretMessage));

// 4 - Supprimer le premier élément du tableau:
secretMessage.reverse().pop(); // Retourner le tableau comme une chaussette et popper le dernier élément
secretMessage.reverse(); // remettre le tableau à l'endroit
console.log(secretMessage);
console.log("4 - ", cleanSentence(secretMessage));
