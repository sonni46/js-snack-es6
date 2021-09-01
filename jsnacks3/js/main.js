// Snack 3
//Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.
const myArray = [1,2,3,4,5,6,7,8,9,10];
let a = parseInt(random(1, 10)); 
let b = parseInt(random(1, 10)); 

console.log(`${a} e ${b}`);

const myFuction = (array,a,b) => {
    if (a < b) {
        const newArray = array.filter((element,index,) => { 
        if (index >= a && index <= b ) return true;  
        return false;    
    });
    return newArray;   
}
}



console.log(myFuction(myArray,a,b))

// function// function// function
function random(min, max) {
    return Math.random() * (max - min) + min;
  }   


