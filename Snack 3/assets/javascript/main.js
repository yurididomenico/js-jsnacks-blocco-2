// JAVASCRIPT //

console.log("Ciao!");

/*
*Snack3*
-Array di numeri interi
-Somma di tutti gli elementi che sono in posizione (indice) dispari
*/

let v = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let vDispari = [];
let somma = 0;


for(let i=0; i<v.length; i++)
{
    if(i%2 == 1)
    {
        vDispari.push(v[i]);
    }
}

for(let i=0; i<vDispari.length; i++)
{
    somma += vDispari[i];
}

console.log(somma);

















// ----- FINE :) -----