// JAVASCRIPT //

console.log("Ciao!");

/*
*Snack1*
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo ( del numero inserito dall'utente: esempio se il numero dell'utente è 2, il numero successivo è 3  ).

-Inserisci un numero
-Se è pari stampa il numero
-Se è dispari stampa il numero successivo
( del numero inserito dall'utente: esempio se il numero dell'utente è 2, il numero successivo è 3  ).
*/

//definisco una variabile
let numero = prompt(`Numero: `);
//converto in valore intero
parseInt(numero);

// condizione
if(numero % 2 == 0)
{
    // stampa
    console.log(numero);
}
else
{
    // incremento
    numero++;
    // stampa
    console.log(numero);
}


















// ----- FINE :) -----