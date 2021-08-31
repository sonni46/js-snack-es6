// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

const squadre = [
    {
        nome : "fkjaf",
        punti: 0,
        falli: 0
    },
    {
        nome : "eagag",
        punti: 0,
        falli: 0
    },
    {
        nome : "gwagawg",
        punti: 0,
        falli: 0
    },
    {
        nome : "fkjawgawgaf",
        punti: 0,
        falli: 0
    },
]
console.log(squadre)

// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
const arrayFalli = [];

for(let key in squadre ) {
    squadre[key].punti = random(1,50);
    squadre[key].falli = random(1,10);
    const {nome,falli} = squadre[key];
    arrayFalli.push({nome,falli})
}
console.log(arrayFalli)


// function// function// function// function
function random(min,max) {
    return Math.floor(Math.random() * max) + min;
}