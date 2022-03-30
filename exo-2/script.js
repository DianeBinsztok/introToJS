// you can write js here
//console.log('exo-2');

// j'instancie la classe Date() qui existe déjà en JS
const myDate = new Date();
console.log(myDate);
// ça renvoie la date et l'heure actuelles : "Wed Mar 30 2022 11:48:36 GMT+0200 (heure d’été d’Europe centrale)"


const weekMsg = "Nous sommes en semaine!";
const weekendMsg = "C'est le weekend!";

// Ce jour:
let today = myDate.getDay();

// Cette heure:
let now = myDate.getHours();

// Je vérifie l'heure
function fridayNightFever(hour) {
    if (hour >= 17) {
        return true;
    } else {
        return false;
    }
}
const weekendStart = fridayNightFever(now);

// en fonction du jour et de la condition weekendStart, je vérifie si c'est le weekend:
function checkWeekDay(day) {
    // Si nous sommes samedi OU dimanche OU vendredi après 17h
    if ((day === 7) || (day === 0) || (day===6 && weekendStart)) {
        console.log(weekendMsg);
    } else {
        console.log(weekMsg);
    }
}

checkWeekDay(0);