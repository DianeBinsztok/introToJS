// you can write js here
// console.log('hello from file');

// Déclarations
//let kelvins = 294;
//console.log(kelvins);
//let celsius = kelvins - 273;
//console.log(celsius);

// Une fonction pour convertir les kelvins en celsius
function convKelvinToCelsius(kelvin) {
    const celsius = kelvin - 273
    return celsius;
}
// Une fonction pour convertir les degrés celsius en farenheits
function convCelsiusToFarenheits(celsius) {
    // la variable farenheits est un arrondi à la décimale inférieure de la conversion de celsius
    const  farenheits = Math.floor(celsius * (9/5) + 32)
    return farenheits;
}

function convInputKelvins() {
    // récupérer l'input, le convertir en entier le mettre dans la constante kelvins
    const kelvins = Number(prompt("Quelle est la température en Kelvins aujourd'hui ?"));
    const celsius = convKelvinToCelsius(kelvins);
    const farenheits = convCelsiusToFarenheits(celsius);
    return {
        kelvins : kelvins,
        celsius: celsius,
        farenheits : farenheits
    };
}

// J'exécute la fonction convKelvinToCelsius
const celsius = convKelvinToCelsius(300);
console.log("La température est de ", celsius, "°C");

// J'exécute la fonction convCelsiusToFarenheits
const farenheits = convCelsiusToFarenheits(27);
console.log("La température est de ",farenheits , "°F");

// J'exécute la fonction convCelsiusToFarenheits
const temperatures = convInputKelvins()
console.log("La température est de: ", temperatures.kelvins, "°K, ", temperatures.celsius, "°C et ", temperatures.farenheits, "°F");