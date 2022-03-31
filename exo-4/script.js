var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

//Mumuse:
function cleanSentence(array) {
    let sentence = array.toString().replaceAll(",", " ").replace("time", "time,");
    return sentence;
}


// Enlever le dernier élément du tableau:
secretMessage.pop()// renvoie le dernier élément de secretMessage
console.log(secretMessage);// renvoie le tableau sans son dernier élément

let popped = cleanSentence(secretMessage)
console.log(popped);


