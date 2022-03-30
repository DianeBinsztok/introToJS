// you can write js here
//console.log('exo-2');

// j'instancie la classe Date() qui existe déjà en JS
const myDate = new Date();
console.log(myDate);
// ça renvoie la date et l'heure actuelles : "Wed Mar 30 2022 11:48:36 GMT+0200 (heure d’été d’Europe centrale)"


const weekMsg = "Nous sommes en semaine!";
const weekendMsg = "C'est le weekend!";

let today = myDate.getDay();
console.log(today);

function checkWeekDay(day) {
    if ((day === 7) || (day === 0)) {
        console.log(weekendMsg);
    } else {
        console.log(weekMsg);
    }
}

checkWeekDay(today);