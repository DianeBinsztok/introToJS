// you can write js here
//console.log('exo-2');

// j'instancie la classe Date() qui existe déjà en JS
const myDate = new Date();

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
        console.log(weekendMsg);
    }
    else if ((day === 6 && (hour >= 17))) {
        console.log(weekendMsg);
    } else {
        console.log(weekMsg);
    }
}

checkIfWeekend(6, 19);