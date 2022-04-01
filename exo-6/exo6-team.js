const team = {
    players: [
        {
            firstName: "John",
            lastName: "Smith",
            age: 29
        },
        {
            firstName: "Paul",
            lastName: "Trucmuche",
            age: 24
        },
        {
            firstName: "Frantz",
            lastName: "Mann",
            age: 25
        },
        {
            firstName: "Mateo",
            lastName: "Ricci",
            age: 24
        },
        {
            firstName: "Said",
            lastName: "Mabrouk",
            age: 26
        }

    ],
    games: [
        {
            opponent: "Broncos",
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: "Stuff",
            teamPoints: 2000,
            opponentPoints: 270
        },
        {
            opponent: "Truc",
            teamPoints: 40,
            opponentPoints: 35
        },
        {
            opponent: "Cosa",
            teamPoints: 100,
            opponentPoints: 200
        },
        {
            opponent: "Dinge",
            teamPoints: 17,
            opponentPoints: 35
        },
    ]
};




//      I - Fonctions:
// 1 - Afficher les infos:
// - Des joueurs:
function displayAllPlayers(array) {
    for (let element of array) {
        const teamPlayersInfo = document.createElement("li");
        teamPlayersInfo.innerHTML = element.firstName+" "+element.lastName+", age "+element.age;
        teamPlayers.appendChild(teamPlayersInfo);
    }
}
// - Des matches:
function displayAllGames(array) {
    for (let element of array) {
        const teamGamesInfo = document.createElement("li");
        teamGamesInfo.innerHTML = element.teamPoints+ " - "+element.opponentPoints+" vs "+element.opponent;
        teamGames.appendChild(teamGamesInfo);
    }
}

// 2 - Ajouter des infos:
// - Des joueurs:
function addPlayer(firstName, lastName, age) {
    team.players.push(
        {
            firstName: firstName,
            lastName: lastName,
            age:age
        }
    );
}
// - Des matches
function addGame(opponent, teamPoints, opponentPoints) {
    team.games.push(
        {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints:opponentPoints
        }
    );
}

// 3 - Calculer la somme des points de mon équipe sur tous les matches joués:
function totalScore(array) {
    let score = 0;
    for (element of array) {
        score += element.teamPoints;
    }
    return score;
}
// 4 - Calculer la moyenne des points des équipes adverses:
function opponentsMediaScore(array) {
    let totalScore = 0;
    for (element of array) {
        totalScore += element.opponentPoints;
    }
    return totalScore / array.length;
}


//          ***



//      II -  Display: 

// Titres
const teamh2 = document.createElement("h2");
teamh2.setAttribute("id", "team");
teamh2.innerHTML = "Team info :";
document.getElementById("js_content").appendChild(teamh2);


// 1 - Players
const playersh3 = document.createElement("h3");
playersh3.setAttribute("id", "playersTitle");
playersh3.innerHTML = "Players :";
document.getElementById("js_content").appendChild(playersh3);

// Liste à puces
const teamPlayers = document.createElement("ul");
teamPlayers.setAttribute("id", "players");
document.getElementById("js_content").appendChild(teamPlayers);

// Ajouter quelques joueurs:
addPlayer("Pablo", "Picasso", "45");
addPlayer("Pierre", "Random", "19");
addPlayer("Rafaelo", "Santi", "25");

// Afficher les infos
displayAllPlayers(team.players);



// 2 - Games
const gamesContainer = document.createElement("div");
gamesContainer.setAttribute("id", "games_container");
const gamesh3 = document.createElement("h3");
gamesh3.setAttribute("id", "gamesTitle");
gamesh3.innerHTML = "Games :";
document.getElementById("js_content").appendChild(gamesContainer);
document.getElementById("games_container").appendChild(gamesh3);

// Liste à puces
const teamGames = document.createElement("ul");
teamGames.setAttribute("id", "games");
document.getElementById("games_container").appendChild(teamGames);

// Ajouter quelques matches:
addGame("Random Team", 28, 41 );
addGame("Other People", 40, 38 );
addGame("Rainbow Pooping Seahorses", 12, 200 );

// Afficher les infos
displayAllGames(team.games);

// Afficher le score total
const teamTotalscore = document.createElement("p");
teamTotalscore.setAttribute("id", "team_total_score");
teamTotalscore.innerHTML= "Score total de l'équipe: "+totalScore(team.games);
document.getElementById("games_container").appendChild(teamTotalscore);

// Afficher le score moyen des équipes adverses:
const opponentScoreMedia = document.createElement("p");
opponentScoreMedia.setAttribute("id", "team_total_score");
opponentScoreMedia.innerHTML= "Score moyen des équipes adverses: "+opponentsMediaScore(team.games);
document.getElementById("games_container").appendChild(opponentScoreMedia);
