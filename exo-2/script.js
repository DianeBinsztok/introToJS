// you can write js here
//console.log('exo-2');

// j'instancie la classe Date() qui existe déjà en JS
const myDate = new Date();
console.log(myDate);

// Les messages
const weekMsg = "Nous sommes en semaine!";
const weekendMsg = "C'est le weekend!";

// Ce jour:
let today = myDate.getDay();


// Cette heure:
let now = myDate.getHours();

// Je vérifie si c'est le weekend en fonction du jour et de l'heure
function checkIfWeekend(day, hour) {
    if ((day === 6) || (day === 0)) {
        console.log(weekendMsg);
    }
    else if ((day === 5 && (hour >= 17))) {
        console.log(weekendMsg);
    } else {
        console.log(weekMsg);
    }
}

checkIfWeekend(today, now);