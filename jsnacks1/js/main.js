// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

let bici = [ 
    {
        nome : "bici1",
        peso : 20
    }
    ,
    {
        nome : "bici2", 
        peso : 10
    },
    {
        nome : "bici3",
        peso : 30
    },
];
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal


let biciLeggera = bici[0];
for (let key in bici.length) {
    if (bici[key].peso < biciLeggera.peso){
        biciLeggera = bici[key];
    }
}

const {nome, peso} = biciLeggera ; 

console.log (
    ` il peso e di ${peso} kg, nome della bici ${nome} `
)


// BONUS: inserire una arrow function che preso in input l'array di bici ritorni l'oggetto con bici più leggera