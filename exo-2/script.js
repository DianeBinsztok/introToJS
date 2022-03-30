// you can write js here
//console.log('exo-2');

// j'instancie la classe Date() qui existe déjà en JS
const myDate = new Date();
console.log(myDate);
// ça renvoie la date et l'heure actuelles : "Wed Mar 30 2022 11:48:36 GMT+0200 (heure d’été d’Europe centrale)"

// Les messages
const weekMsg = "Nous sommes en semaine!";
const weekendMsg = "C'est le weekend!";

// Ce jour:
let today = myDate.getDay();

// Cette heure:
let now = myDate.getHours();

// Je vérifie si c'est le weekend en fonction du jour et de l'heure
function checkIfWeekend(day, hour) {
    if ((day === 7) || (day === 0)) {
        return true;
    }
    if ((day === 6 && (hour >= 17))) {
        return true;
    } else {
        return false;
    }
}
// Je stocke le résultat dans un booléen
const weekend = checkIfWeekend(today, now);

// J'envoie un message en fonction de ce booléen
function weekendAlarm(boolCheck){
    if (boolCheck) {
        console.log(weekendMsg);
    } else{
        console.log(weekMsg);
    }
}

weekendAlarm(weekend);