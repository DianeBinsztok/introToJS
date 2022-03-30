// you can write js here
// console.log('hello from file');

// Déclarations
//let kelvins = 294;
//console.log(kelvins);
//let celsius = kelvins - 273;
//console.log(celsius);

// Une fonction pour convertir les kelvins en celsius
function convKelvinToCelsius(kelvin) {
    console.log("La température est de ", celsius = kelvin - 273, "°C");
    return celsius;
}
// Une fonction pour convertir les degrés celsius en farenheits
function convCelsiusToFarenheits(celsius) {
    // la variable farenheits est un arrondi à la décimale inférieure de la conversion de celsius
    console.log("La température est de ", farenheits = Math.floor(celsius * (9/5) + 32), "°F");
    return farenheits;
}
// J'exécute la fonction convKelvinToCelsius
convKelvinToCelsius(300);
// je vérifie qu'elle a bien revoyé la valeur de celsiusTemp
console.log(celsius);

// J'exécute la fonction convCelsiusToFarenheits
convCelsiusToFarenheits(27);
// je vérifie qu'elle a bien revoyé la valeur de farenheitsTemp
console.log(farenheits);
