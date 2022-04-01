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

function addPlayer(firstName, lastName, age) {
    team.players.push(
        {
            firstName: firstName,
            lastName: lastName,
            age:age
        }
    );
}
function addGame(opponent, teamPoints, opponentPoints) {
    team.games.push(
        {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints:opponentPoints
        }
    );
}
addGame("The Guys", 45, 55);
console.log(team.games);