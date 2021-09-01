// Snack 3
//Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.
const myArray = [1,2,3,4,5,6,7,8,9,10];
let a = random(1, 10);
let b = random(1, 10);
const myFuction = (array,a,b) => {
    if (a < b) {
        return true;
    }
    const newArray = array.filter((element,index,) => { 
    if (index >= a && index <= b ){
        return true
    }
    return false   
    } );
}

myFuction(myArray,a,b);

console.log(newArray);

// function// function// function
function random(min, max) {
    return Math.random() * (max - min) + min;
  }   


