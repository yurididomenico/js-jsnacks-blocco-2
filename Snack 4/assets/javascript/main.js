// JAVASCRIPT //

console.log("Ciao!");

/*
*Snack4 (Bonus)*
-Crea due array che hanno un numero di elementi diversi.
-Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/

let v1 = ["testo", "testo", "testo", "testo", "testo", "testo"];
let v2 = ["testo", "testo", "testo"];





if(v1.length < v2.length)
{
    let diff = v2.length - v1.length;
    for(let i=0; i < diff; i++)
    {
        v1.push("testo");
    }
}
else if(v1.length > v2.length)
{
    let diff = v1.length - v2.length;
    for(let i=0; i<diff; i++)
    {
        v2.push("testo");
    }
}
else
{
    console.log("I vettori sono uguali.");
}

console.log(v1)
console.log(v2)

// Stampa
// for(let i=0; i<v2.length; i++)
// {
//     console.log(v2[i]);
// }



// ----- FINE :) -----