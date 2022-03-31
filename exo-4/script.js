var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

//Mumuse:
let display = secretMessage.toString();
let clean = display.replaceAll(",", " "); 
let sentence = clean.replace("time ", "time,");
console.log(sentence);
