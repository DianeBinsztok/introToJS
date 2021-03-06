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
//secretMessage.reverse().pop(); // Retourner le tableau comme une chaussette et popper le dernier élément
//secretMessage.reverse(); // remettre le tableau à l'endroit
secretMessage.shift();
console.log(secretMessage);
console.log("4 - ", cleanSentence(secretMessage));

// 5 - Ajouter un élément en début de tableau
//secretMessage.reverse().push("Programming"); // Retourner le tableau comme une chaussette et ajouter un élément à la fin
//secretMessage.reverse(); // remettre le tableau à l'endroit
secretMessage.splice(0, 0, "Programming");
console.log(secretMessage);
console.log("5 - ", cleanSentence(secretMessage));

// 6 - Remplacer plusieurs éléments d'un coup
secretMessage.splice(secretMessage.indexOf("get", "right", "the", "first", "time,"), 5, "know");
console.log(secretMessage);
console.log("6 - ", cleanSentence(secretMessage).replace("know", "know,"));

// 7 - Affichage avec join:
console.log("7 - ", secretMessage.join().replaceAll(",", " ").replace("know", "know,"));