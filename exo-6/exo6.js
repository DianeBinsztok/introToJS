// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !


//      0 - Encapsuler les infos:

// a - Un titre
const h2 = document.createElement("h2");
h2.setAttribute("id", "title");
h2.innerHTML = "Joe's info :";
document.getElementById("js_content").appendChild(h2);

// b - Un liste à puces
const list = document.createElement("ul");
list.setAttribute("id", "list");
document.getElementById("js_content").appendChild(list);


//      1. Afficher le nombre de voitures de Joe
const carNumberInfo = joeInfo.cars.length;
const carNumber = document.createElement("li");
carNumber.innerHTML = "Number of cars: " + carNumberInfo;
list.appendChild(carNumber);




// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 



